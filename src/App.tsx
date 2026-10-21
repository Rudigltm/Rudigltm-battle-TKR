import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Question,
  TeamState,
  MatchSettings,
  AnswerLog,
  TkrTopic,
  DifficultyLevel
} from './types/game';
import { INITIAL_QUESTIONS } from './data/defaultQuestions';
import { soundManager } from './utils/audio';
import { ArenaTrack } from './components/ArenaTrack';
import { DualControls } from './components/DualControls';
import { ExplanationModal } from './components/ExplanationModal';
import { SettingsModal } from './components/SettingsModal';
import { QuestionBankModal } from './components/QuestionBankModal';
import { InstructionsModal } from './components/InstructionsModal';
import { ResultScreen } from './components/ResultScreen';
import {
  Play,
  HelpCircle,
  Settings,
  FileText,
  Volume2,
  VolumeX,
  Pause,
  RotateCcw,
  Flag,
  Wrench,
  Zap,
  Award,
  Sparkles,
  ShieldAlert
} from 'lucide-react';

const STORAGE_QUESTIONS_KEY = 'autotech_tkr_questions_v1';
const STORAGE_SETTINGS_KEY = 'autotech_tkr_settings_v1';

const DEFAULT_SETTINGS: MatchSettings = {
  teamAName: 'Tim Turbo Merah',
  teamBName: 'Tim Nitro Biru',
  className: 'XII TKR 1',
  teacherName: 'Guru Produktif Otomotif',
  questionCount: 15,
  timeLimitSeconds: 20,
  selectedTopics: [
    'Sistem Mesin Kendaraan Ringan',
    'Sistem Bahan Bakar Bensin & Diesel',
    'Sistem Pelumasan & Pendinginan',
    'Sistem Pemindah Tenaga',
    'Sistem Rem',
    'Sistem Kemudi & Suspensi',
    'Sistem Kelistrikan Kendaraan',
    'Sistem Starter & Pengisian',
    'Sistem AC Kendaraan',
    'Sistem EFI & Sensor',
    'Sistem OBD & Diagnosis Kerusakan',
    'K3 Bengkel Otomotif',
    'Perawatan Berkala Kendaraan',
    'Penggunaan Alat Ukur & Diagnostik'
  ],
  selectedDifficulties: [1, 2, 3, 4, 5],
  enableCliffPenalty: true,
  practiceMode: false,
  duelMode: 'simultaneous',
  soundEnabled: true,
  reducedMotion: false
};

export default function App() {
  // --- Persistent Questions State ---
  const [questions, setQuestions] = useState<Question[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_QUESTIONS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_QUESTIONS;
  });

  // --- Persistent Match Settings ---
  const [settings, setSettings] = useState<MatchSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SETTINGS_KEY);
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_SETTINGS;
  });

  // Sync sound manager enabled state with settings
  useEffect(() => {
    soundManager.enabled = settings.soundEnabled;
    try {
      localStorage.setItem(STORAGE_SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error(e);
    }
  }, [settings]);

  // Sync questions to local storage
  const handleUpdateQuestions = (newQuestions: Question[]) => {
    setQuestions(newQuestions);
    try {
      localStorage.setItem(STORAGE_QUESTIONS_KEY, JSON.stringify(newQuestions));
    } catch (e) {
      console.error(e);
    }
  };

  // --- Game Flow State ---
  const [gameState, setGameState] = useState<'HOME' | 'PLAYING' | 'PAUSED' | 'FINISHED' | 'SUDDEN_DEATH'>('HOME');
  const [activeDeck, setActiveDeck] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Teams State
  const [teamA, setTeamA] = useState<TeamState>({
    name: settings.teamAName,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    position: 0,
    hasFallen: false,
    selectedAnswer: null,
    answerTimeMs: null,
    streak: 0,
    status: 'idle'
  });

  const [teamB, setTeamB] = useState<TeamState>({
    name: settings.teamBName,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    position: 0,
    hasFallen: false,
    selectedAnswer: null,
    answerTimeMs: null,
    streak: 0,
    status: 'idle'
  });

  // Round Timer & Resolution
  const [timeRemaining, setTimeRemaining] = useState(settings.timeLimitSeconds);
  const [isRoundResolved, setIsRoundResolved] = useState(false);
  const [logs, setLogs] = useState<AnswerLog[]>([]);

  // Modals
  const [showInstructions, setShowInstructions] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showQuestionBank, setShowQuestionBank] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Round start timestamp for measuring response time
  const roundStartTimeRef = useRef<number>(Date.now());
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sound toggle helper
  const toggleSound = () => {
    setSettings((prev) => ({ ...prev, soundEnabled: !prev.soundEnabled }));
    soundManager.playClick();
  };

  // --- Start A New Match ---
  const startMatch = (isSuddenDeathMode: boolean = false) => {
    soundManager.playEngineRev();

    // Filter questions based on settings
    let eligible = questions.filter(
      (q) =>
        settings.selectedTopics.includes(q.topic) &&
        settings.selectedDifficulties.includes(q.difficulty)
    );

    if (isSuddenDeathMode) {
      // Sudden death prioritizes Level 4 & 5 HOTS
      const hotsOnly = eligible.filter((q) => q.difficulty >= 4);
      if (hotsOnly.length > 0) eligible = hotsOnly;
    }

    if (eligible.length === 0) {
      eligible = [...INITIAL_QUESTIONS];
    }

    // Shuffle algorithm (Fisher-Yates) to ensure questions don't repeat in the same session
    const shuffled = [...eligible].sort(() => Math.random() - 0.5);
    const count = isSuddenDeathMode
      ? 3 // 3 sudden death questions
      : Math.min(shuffled.length, settings.questionCount);
    const chosenDeck = shuffled.slice(0, count);

    setActiveDeck(chosenDeck);
    setCurrentQuestionIndex(0);
    setLogs([]);
    setIsRoundResolved(false);

    setTeamA({
      name: settings.teamAName || 'Tim Turbo Merah',
      score: 0,
      correctCount: 0,
      wrongCount: 0,
      position: 0,
      hasFallen: false,
      selectedAnswer: null,
      answerTimeMs: null,
      streak: 0,
      status: 'idle'
    });

    setTeamB({
      name: settings.teamBName || 'Tim Nitro Biru',
      score: 0,
      correctCount: 0,
      wrongCount: 0,
      position: 0,
      hasFallen: false,
      selectedAnswer: null,
      answerTimeMs: null,
      streak: 0,
      status: 'idle'
    });

    setTimeRemaining(settings.timeLimitSeconds);
    roundStartTimeRef.current = Date.now();
    setGameState(isSuddenDeathMode ? 'SUDDEN_DEATH' : 'PLAYING');
  };

  // Current Question
  const currentQuestion = activeDeck[currentQuestionIndex] || null;

  // --- Resolve Round Logic (Both Answered or Time Expired) ---
  const resolveRound = useCallback(() => {
    if (isRoundResolved || !currentQuestion) return;
    setIsRoundResolved(true);

    const isCorrectA = teamA.selectedAnswer === currentQuestion.correctAnswer;
    const isCorrectB = teamB.selectedAnswer === currentQuestion.correctAnswer;

    // Sounds
    if (isCorrectA || isCorrectB) {
      soundManager.playNitroBoost();
    } else {
      soundManager.playTireSkid();
    }

    // Update Team A
    setTeamA((prev) => {
      let newScore = prev.score;
      let newPos = prev.position;
      let newCorrect = prev.correctCount;
      let newWrong = prev.wrongCount;
      let hasFallen = prev.hasFallen;

      if (isCorrectA) {
        newScore += 100;
        newCorrect += 1;
        newPos = Math.min(5, newPos + 1); // advance toward finish line
      } else {
        newWrong += 1;
        if (settings.enableCliffPenalty && !settings.practiceMode) {
          newPos = Math.max(-5, newPos - 1); // retreat towards cliff
          if (newPos <= -5 && !hasFallen) {
            hasFallen = true;
            soundManager.playCliffFall();
          }
        }
      }

      return {
        ...prev,
        score: newScore,
        position: newPos,
        correctCount: newCorrect,
        wrongCount: newWrong,
        hasFallen,
        status: isCorrectA ? 'correct' : 'wrong'
      };
    });

    // Update Team B
    setTeamB((prev) => {
      let newScore = prev.score;
      let newPos = prev.position;
      let newCorrect = prev.correctCount;
      let newWrong = prev.wrongCount;
      let hasFallen = prev.hasFallen;

      if (isCorrectB) {
        newScore += 100;
        newCorrect += 1;
        newPos = Math.min(5, newPos + 1); // advance toward finish line
      } else {
        newWrong += 1;
        if (settings.enableCliffPenalty && !settings.practiceMode) {
          newPos = Math.max(-5, newPos - 1); // retreat towards cliff
          if (newPos <= -5 && !hasFallen) {
            hasFallen = true;
            soundManager.playCliffFall();
          }
        }
      }

      return {
        ...prev,
        score: newScore,
        position: newPos,
        correctCount: newCorrect,
        wrongCount: newWrong,
        hasFallen,
        status: isCorrectB ? 'correct' : 'wrong'
      };
    });

    // Record Log
    setLogs((prev) => [
      ...prev,
      {
        question: currentQuestion,
        teamAAnswer: teamA.selectedAnswer,
        teamBAnswer: teamB.selectedAnswer,
        teamACorrect: isCorrectA,
        teamBCorrect: isCorrectB,
        teamATimeMs: teamA.answerTimeMs,
        teamBTimeMs: teamB.answerTimeMs
      }
    ]);
  }, [
    currentQuestion,
    isRoundResolved,
    settings.enableCliffPenalty,
    settings.practiceMode,
    teamA.answerTimeMs,
    teamA.selectedAnswer,
    teamB.answerTimeMs,
    teamB.selectedAnswer
  ]);

  // --- Countdown Timer Effect ---
  useEffect(() => {
    if (gameState !== 'PLAYING' && gameState !== 'SUDDEN_DEATH') return;
    if (isRoundResolved) return;
    if (settings.timeLimitSeconds <= 0) return; // unlimited

    timerIntervalRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerIntervalRef.current!);
          resolveRound();
          return 0;
        }
        if (prev <= 4) {
          soundManager.playWarningBeep();
        } else {
          soundManager.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [gameState, isRoundResolved, resolveRound, settings.timeLimitSeconds]);

  // --- Handle Team Answer (Simultaneous Duel) ---
  const handleTeamAnswer = (team: 'A' | 'B', option: 'A' | 'B' | 'C' | 'D') => {
    if (isRoundResolved) return;
    soundManager.playClick();
    const elapsed = Date.now() - roundStartTimeRef.current;

    if (team === 'A' && !teamA.selectedAnswer) {
      setTeamA((prev) => ({
        ...prev,
        selectedAnswer: option,
        answerTimeMs: elapsed,
        status: 'locked'
      }));

      // Check if both teams have now locked their answers
      if (teamB.selectedAnswer) {
        // Both teams locked! Resolve round immediately
        setTimeout(() => {
          resolveRound();
        }, 300);
      }
    } else if (team === 'B' && !teamB.selectedAnswer) {
      setTeamB((prev) => ({
        ...prev,
        selectedAnswer: option,
        answerTimeMs: elapsed,
        status: 'locked'
      }));

      // Check if both teams have now locked their answers
      if (teamA.selectedAnswer) {
        // Both teams locked! Resolve round immediately
        setTimeout(() => {
          resolveRound();
        }, 300);
      }
    }
  };

  // --- Next Question or Finish ---
  const handleNextQuestion = () => {
    soundManager.playClick();

    // Check if any car crossed finish line (+5) or if it's the last question
    const reachedFinishA = teamA.position >= 5;
    const reachedFinishB = teamB.position >= 5;
    const isLast = currentQuestionIndex >= activeDeck.length - 1;

    if (isLast || reachedFinishA || reachedFinishB) {
      soundManager.playVictory();
      setGameState('FINISHED');
      return;
    }

    // Reset round states
    setCurrentQuestionIndex((prev) => prev + 1);
    setIsRoundResolved(false);
    setTimeRemaining(settings.timeLimitSeconds);
    roundStartTimeRef.current = Date.now();

    setTeamA((prev) => ({
      ...prev,
      selectedAnswer: null,
      answerTimeMs: null,
      status: 'idle'
    }));

    setTeamB((prev) => ({
      ...prev,
      selectedAnswer: null,
      answerTimeMs: null,
      status: 'idle'
    }));
  };

  // Pause / Resume Toggle
  const togglePause = () => {
    soundManager.playClick();
    if (gameState === 'PLAYING') {
      setGameState('PAUSED');
    } else if (gameState === 'PAUSED') {
      setGameState('PLAYING');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navbar */}
      <header className="bg-slate-900/90 border-b border-slate-800 backdrop-blur sticky top-0 z-40 px-4 py-2.5 flex items-center justify-between shadow-md">
        <div
          onClick={() => {
            if (gameState !== 'HOME') {
              if (confirm('Kembali ke menu awal? Pertandingan yang sedang berjalan akan diakhiri.')) {
                setGameState('HOME');
              }
            }
          }}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 shadow">
            <Wrench className="w-5 h-5 group-hover:rotate-45 transition duration-300" />
          </div>
          <div>
            <div className="text-xs md:text-sm font-black tracking-wider text-white uppercase flex items-center gap-1.5">
              <span>AUTO TECH BATTLE</span>
              <span className="text-[10px] bg-red-500/20 text-red-400 border border-red-500/40 px-1.5 py-0.2 rounded font-bold">
                TKR
              </span>
            </div>
            <div className="text-[10px] text-slate-400 hidden sm:block">
              Game Pembelajaran Teknik Kendaraan Ringan SMK
            </div>
          </div>
        </div>

        {/* Global Navigation Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Mute Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            className={`p-2 rounded-xl border transition ${
              settings.soundEnabled
                ? 'bg-slate-800 border-slate-700 text-emerald-400 hover:bg-slate-700'
                : 'bg-slate-850 border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
            title={settings.soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
          >
            {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Instructions Button */}
          <button
            type="button"
            onClick={() => setShowInstructions(true)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">Petunjuk</span>
          </button>

          {/* Settings Button */}
          <button
            type="button"
            onClick={() => setShowSettings(true)}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition flex items-center gap-1.5"
          >
            <Settings className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">Mode Guru</span>
          </button>

          {/* Bank Soal Button */}
          <button
            type="button"
            onClick={() => setShowQuestionBank(true)}
            className="px-3 py-1.5 rounded-xl bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 text-xs font-bold border border-cyan-500/40 transition flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Bank Soal ({questions.length})</span>
          </button>

          {/* In-Game Pause Button */}
          {(gameState === 'PLAYING' || gameState === 'PAUSED') && (
            <button
              type="button"
              onClick={togglePause}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                gameState === 'PAUSED'
                  ? 'bg-amber-500 text-slate-950 animate-pulse font-black'
                  : 'bg-slate-800 text-slate-300 border border-slate-700'
              }`}
            >
              <Pause className="w-3.5 h-3.5" />
              <span>{gameState === 'PAUSED' ? 'Lanjut' : 'Jeda'}</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-3 md:p-6 max-w-7xl mx-auto w-full flex flex-col justify-center">
        {/* ==================== 1. HOME SCREEN ==================== */}
        {gameState === 'HOME' && (
          <div className="w-full max-w-4xl mx-auto space-y-8 animate-fadeIn my-auto">
            {/* Hero Banner */}
            <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-slate-700 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-500 via-amber-400 to-cyan-500" />

              {/* Decorative Garage Glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-amber-500/40 text-amber-400 text-xs font-black uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Arena Perlombaan Otomotif SMK Interaktif</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white tracking-wider uppercase mb-2">
                AUTO TECH BATTLE
              </h1>
              <div className="text-xl md:text-2xl font-black text-amber-400 uppercase tracking-widest mb-4">
                TKR CHALLENGE
              </div>

              <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 font-medium">
                Duel seru antara <strong>Tim A</strong> dan <strong>Tim B</strong> yang menjawab soal Teknik Kendaraan Ringan secara serentak mengejar waktu! Mobil melaju ke garis finis dengan jawaban benar, atau tergelincir aman ke jaring darurat jika mendekati jurang.
              </p>

              {/* Quick Setup Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 bg-slate-950/70 p-4 rounded-2xl border border-slate-800 text-left">
                <div>
                  <label className="block text-xs font-bold text-red-400 mb-1">
                    Nama Tim A (Merah):
                  </label>
                  <input
                    type="text"
                    value={settings.teamAName}
                    onChange={(e) =>
                      setSettings({ ...settings, teamAName: e.target.value })
                    }
                    className="w-full bg-slate-900 border border-red-500/50 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-400 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cyan-400 mb-1">
                    Nama Tim B (Biru):
                  </label>
                  <input
                    type="text"
                    value={settings.teamBName}
                    onChange={(e) =>
                      setSettings({ ...settings, teamBName: e.target.value })
                    }
                    className="w-full bg-slate-900 border border-cyan-500/50 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">
                    Kelas / Rombel:
                  </label>
                  <input
                    type="text"
                    value={settings.className}
                    onChange={(e) =>
                      setSettings({ ...settings, className: e.target.value })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">
                    Jumlah Soal & Durasi:
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={settings.questionCount}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          questionCount: Number(e.target.value)
                        })
                      }
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value={10}>10 Soal</option>
                      <option value={15}>15 Soal</option>
                      <option value={20}>20 Soal</option>
                      <option value={30}>30 Soal</option>
                    </select>
                    <select
                      value={settings.timeLimitSeconds}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          timeLimitSeconds: Number(e.target.value)
                        })
                      }
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value={15}>15 Detik</option>
                      <option value={20}>20 Detik</option>
                      <option value={30}>30 Detik</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Start Button & Mode Launchers */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => startMatch(false)}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-base md:text-lg uppercase tracking-wider transition shadow-2xl flex items-center gap-3 active:scale-95 shadow-amber-500/20"
                >
                  <Play className="w-5 h-5 fill-slate-950" />
                  <span>Mulai Pertandingan Duel!</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowInstructions(true)}
                  className="px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm uppercase tracking-wider transition border border-slate-700 flex items-center gap-2 shadow"
                >
                  <HelpCircle className="w-4 h-4 text-amber-400" />
                  <span>Petunjuk & Kontrol</span>
                </button>
              </div>
            </div>

            {/* Quick Feature Highlights for Teachers & Classrooms */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase">
                  <Zap className="w-4 h-4" />
                  Menjawab Sekaligus
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tim A dan Tim B berlomba mengunci jawaban secara serentak dengan tombol layar sentuh atau tombol shortcut keyboard.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase">
                  <ShieldAlert className="w-4 h-4" />
                  Arena Jurang Interaktif
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Salah menjawab memicu mundurnya mobil ke arah jurang. Tergelincir memicu jaring pengaman kartun yang ramah dan aman bagi siswa.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase">
                  <Award className="w-4 h-4" />
                  Kurikulum Otomotif SMK
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Memuat 65+ soal standar TKR (Mesin, Chasis, Pemindah Tenaga, EFI, AC, K3, dan alat ukur mikrometer / dial gauge).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 2. PLAYING / PAUSED SCREEN ==================== */}
        {(gameState === 'PLAYING' || gameState === 'PAUSED' || gameState === 'SUDDEN_DEATH') &&
          currentQuestion && (
            <div className="w-full space-y-5 animate-fadeIn">
              {/* Paused Overlay Alert */}
              {gameState === 'PAUSED' && (
                <div className="bg-amber-500/20 border-2 border-amber-500 p-3 rounded-2xl flex items-center justify-between text-amber-300 text-xs md:text-sm font-bold shadow-lg">
                  <div className="flex items-center gap-2">
                    <Pause className="w-5 h-5 text-amber-400" />
                    <span>Pertandingan sedang Dijeda oleh Guru / Operator</span>
                  </div>
                  <button
                    type="button"
                    onClick={togglePause}
                    className="px-4 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider"
                  >
                    Lanjutkan Pertandingan
                  </button>
                </div>
              )}

              {/* Sudden Death Notice */}
              {gameState === 'SUDDEN_DEATH' && (
                <div className="bg-purple-950/80 border-2 border-purple-500 p-2.5 rounded-2xl flex items-center justify-center gap-2 text-purple-200 text-xs md:text-sm font-black uppercase tracking-wider animate-pulse shadow-lg">
                  <span>🔥 Babak Sudden Death: Soal Kasus Nyata Bengkel (HOTS) 🔥</span>
                </div>
              )}

              {/* Top Arena Race Track & Cliff Visualizer */}
              <ArenaTrack
                teamA={teamA}
                teamB={teamB}
                timeRemaining={timeRemaining}
                timeLimit={settings.timeLimitSeconds}
                currentRound={currentQuestionIndex + 1}
                totalRounds={activeDeck.length}
                practiceMode={settings.practiceMode}
              />

              {/* Center Question & Simultaneous Dual Answering Panel */}
              <DualControls
                question={currentQuestion}
                teamA={teamA}
                teamB={teamB}
                isRoundResolved={isRoundResolved}
                onTeamAnswer={handleTeamAnswer}
                onOpenExplanation={() => setShowExplanation(true)}
                onNextQuestion={handleNextQuestion}
                isLastQuestion={currentQuestionIndex >= activeDeck.length - 1}
                timeRemaining={timeRemaining}
              />

              {/* Match Bottom Controls (Guru / Operator) */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm('Akhiri pertandingan sekarang dan tampilkan hasil akhir?')) {
                        setGameState('FINISHED');
                      }
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
                  >
                    Akhiri Lomba Lebih Awal
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (confirm('Ulangi pertandingan ini dari soal nomor 1?')) {
                        startMatch(gameState === 'SUDDEN_DEATH');
                      }
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
                  >
                    Reset Lomba Ini
                  </button>
                </div>

                <div className="text-[11px] font-mono text-slate-500">
                  Guru: {settings.teacherName} • Kelas: {settings.className}
                </div>
              </div>
            </div>
          )}

        {/* ==================== 3. FINISHED SCREEN ==================== */}
        {gameState === 'FINISHED' && (
          <ResultScreen
            teamA={teamA}
            teamB={teamB}
            logs={logs}
            teacherName={settings.teacherName}
            className={settings.className}
            onPlayAgain={() => startMatch(false)}
            onChangeSettings={() => {
              setGameState('HOME');
              setShowSettings(true);
            }}
            onStartSuddenDeath={
              teamA.score === teamB.score ? () => startMatch(true) : undefined
            }
          />
        )}
      </main>

      {/* MODALS */}
      <ExplanationModal
        question={currentQuestion}
        isOpen={showExplanation}
        onClose={() => setShowExplanation(false)}
      />

      <SettingsModal
        settings={settings}
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onUpdateSettings={(newSettings) => setSettings(newSettings)}
      />

      <QuestionBankModal
        questions={questions}
        isOpen={showQuestionBank}
        onClose={() => setShowQuestionBank(false)}
        onUpdateQuestions={handleUpdateQuestions}
      />

      <InstructionsModal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
      />
    </div>
  );
}
