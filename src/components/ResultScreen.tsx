import React, { useEffect, useState } from 'react';
import { TeamState, AnswerLog } from '../types/game';
import { Trophy, RotateCcw, Sliders, ChevronDown, ChevronUp, CheckCircle2, XCircle, AlertTriangle, BookOpen, Sparkles, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CarGraphic } from './CarGraphic';

interface ResultScreenProps {
  teamA: TeamState;
  teamB: TeamState;
  logs: AnswerLog[];
  teacherName: string;
  className: string;
  onPlayAgain: () => void;
  onChangeSettings: () => void;
  onStartSuddenDeath?: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  teamA,
  teamB,
  logs,
  teacherName,
  className,
  onPlayAgain,
  onChangeSettings,
  onStartSuddenDeath
}) => {
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);

  // Determine winner
  const isDraw = teamA.score === teamB.score;
  const winner = teamA.score > teamB.score ? 'A' : teamB.score > teamA.score ? 'B' : 'DRAW';

  useEffect(() => {
    // Launch celebratory confetti if there is a winner
    if (winner !== 'DRAW') {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      const timer = setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [winner]);

  // Topic Weakness Analysis
  const topicStats: Record<string, { total: number; correctA: number; correctB: number }> = {};
  logs.forEach((log) => {
    const t = log.question.topic;
    if (!topicStats[t]) {
      topicStats[t] = { total: 0, correctA: 0, correctB: 0 };
    }
    topicStats[t].total += 1;
    if (log.teamACorrect) topicStats[t].correctA += 1;
    if (log.teamBCorrect) topicStats[t].correctB += 1;
  });

  const weakTopics = Object.entries(topicStats)
    .map(([topic, data]) => {
      const accuracyCombined = ((data.correctA + data.correctB) / (data.total * 2)) * 100;
      return { topic, accuracy: accuracyCombined, total: data.total };
    })
    .filter((item) => item.accuracy < 60)
    .sort((a, b) => a.accuracy - b.accuracy);

  const accuracyA = logs.length > 0 ? Math.round((teamA.correctCount / logs.length) * 100) : 0;
  const accuracyB = logs.length > 0 ? Math.round((teamB.correctCount / logs.length) * 100) : 0;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 pb-12 animate-fadeIn">
      {/* Podium Header Card */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-slate-700 rounded-3xl p-6 md:p-8 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-500 via-amber-400 to-cyan-500" />

        {/* Trophy & Title */}
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 mb-3 shadow-lg animate-bounce">
          <Trophy className="w-10 h-10" />
        </div>

        <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wider mb-1">
          {winner === 'A'
            ? `JUARA: ${teamA.name}!`
            : winner === 'B'
            ? `JUARA: ${teamB.name}!`
            : 'HASIL IMBANG / DRAW!'}
        </h1>

        <p className="text-xs md:text-sm text-slate-400 font-medium">
          AUTO TECH BATTLE: TKR CHALLENGE • Kelas {className || 'SMK Otomotif'} • Guru Pengampu: {teacherName || 'Guru Produktif TKR'}
        </p>

        {isDraw && onStartSuddenDeath && (
          <div className="mt-4 inline-block">
            <button
              type="button"
              onClick={onStartSuddenDeath}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-xs md:text-sm uppercase tracking-wider transition shadow-lg animate-pulse"
            >
              🔥 Babak Penentuan: Sudden Death Soal HOTS!
            </button>
          </div>
        )}

        {/* Visual Dual Podium Cars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* TIM A CARD */}
          <div
            className={`p-6 rounded-2xl border-2 flex flex-col items-center relative transition ${
              winner === 'A'
                ? 'bg-red-950/40 border-red-500 shadow-xl shadow-red-900/30'
                : 'bg-slate-950/60 border-slate-800 opacity-85'
            }`}
          >
            {winner === 'A' && (
              <span className="absolute -top-3.5 bg-amber-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow">
                🏆 PEMENANG UTAMA
              </span>
            )}

            <CarGraphic
              team="A"
              teamName={teamA.name}
              isWinner={winner === 'A'}
              size="lg"
            />

            <div className="mt-4 text-center">
              <h2 className="text-xl font-black text-red-400 uppercase">
                {teamA.name}
              </h2>
              <div className="text-3xl font-black text-white font-mono mt-1">
                {teamA.score} <span className="text-xs font-sans text-slate-400">POIN</span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2 w-full mt-4 text-center">
              <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Akurasi</span>
                <span className="text-sm font-black text-emerald-400">{accuracyA}%</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Benar</span>
                <span className="text-sm font-black text-white">{teamA.correctCount}</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Salah</span>
                <span className="text-sm font-black text-red-400">{teamA.wrongCount}</span>
              </div>
            </div>
          </div>

          {/* TIM B CARD */}
          <div
            className={`p-6 rounded-2xl border-2 flex flex-col items-center relative transition ${
              winner === 'B'
                ? 'bg-cyan-950/40 border-cyan-500 shadow-xl shadow-cyan-900/30'
                : 'bg-slate-950/60 border-slate-800 opacity-85'
            }`}
          >
            {winner === 'B' && (
              <span className="absolute -top-3.5 bg-amber-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow">
                🏆 PEMENANG UTAMA
              </span>
            )}

            <CarGraphic
              team="B"
              teamName={teamB.name}
              isWinner={winner === 'B'}
              size="lg"
            />

            <div className="mt-4 text-center">
              <h2 className="text-xl font-black text-cyan-400 uppercase">
                {teamB.name}
              </h2>
              <div className="text-3xl font-black text-white font-mono mt-1">
                {teamB.score} <span className="text-xs font-sans text-slate-400">POIN</span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2 w-full mt-4 text-center">
              <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Akurasi</span>
                <span className="text-sm font-black text-emerald-400">{accuracyB}%</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Benar</span>
                <span className="text-sm font-black text-white">{teamB.correctCount}</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase block">Salah</span>
                <span className="text-sm font-black text-red-400">{teamB.wrongCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={onPlayAgain}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm uppercase tracking-wider transition shadow-xl flex items-center gap-2 active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tanding Ulang (Rematch)</span>
          </button>

          <button
            type="button"
            onClick={onChangeSettings}
            className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm uppercase tracking-wider transition border border-slate-700 flex items-center gap-2 shadow"
          >
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span>Ganti Topik / Pengaturan</span>
          </button>
        </div>
      </div>

      {/* Recommended Topics For Review (Remedial Analysis) */}
      <div className="bg-slate-900 border-2 border-slate-700 rounded-3xl p-6 shadow-xl space-y-4">
        <h3 className="text-sm md:text-base font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          Rekomendasi Analisis Kelemahan: Topik yang Perlu Diperdalam
        </h3>

        {weakTopics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {weakTopics.map((item) => (
              <div
                key={item.topic}
                className="bg-slate-950/80 border border-red-500/30 p-3.5 rounded-2xl space-y-1.5"
              >
                <div className="text-xs font-bold text-slate-200">
                  {item.topic}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Tingkat Penguasaan:</span>
                  <span className="font-mono font-bold text-red-400">
                    {Math.round(item.accuracy)}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: `${Math.max(5, item.accuracy)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs md:text-sm flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span>
              Luar biasa! Kedua tim menunjukkan penguasaan materi otomotif yang sangat solid di seluruh topik yang diujikan (akurasi rata-rata &ge; 60%).
            </span>
          </div>
        )}
      </div>

      {/* Complete Question Review Section */}
      <div className="bg-slate-900 border-2 border-slate-700 rounded-3xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm md:text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            Tinjauan Lengkap Soal & Pembahasan ({logs.length} Soal)
          </h3>
          <span className="text-xs text-slate-400 font-medium">
            Klik soal untuk membuka/menutup pembahasan
          </span>
        </div>

        <div className="space-y-3">
          {logs.map((log, index) => {
            const isExpanded = expandedLogId === log.question.id;
            return (
              <div
                key={log.question.id}
                className="bg-slate-950/70 border border-slate-800 rounded-2xl overflow-hidden transition"
              >
                {/* Accordion Trigger Header */}
                <div
                  onClick={() =>
                    setExpandedLogId(isExpanded ? null : log.question.id)
                  }
                  className="p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-900/60 transition select-none"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                      #{index + 1}
                    </span>
                    <div className="truncate">
                      <div className="text-xs font-bold text-slate-200 truncate">
                        {log.question.question}
                      </div>
                      <div className="text-[10px] text-amber-400 font-medium">
                        {log.question.topic} • Lvl {log.question.difficulty}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    {/* Team Answer Pills */}
                    <div className="flex items-center gap-2 text-[10px] font-bold">
                      <span
                        className={`px-2 py-0.5 rounded flex items-center gap-1 ${
                          log.teamACorrect
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                            : 'bg-red-950 text-red-400 border border-red-500/40'
                        }`}
                      >
                        Tim A: {log.teamAAnswer || '-'}
                        {log.teamACorrect ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                      </span>

                      <span
                        className={`px-2 py-0.5 rounded flex items-center gap-1 ${
                          log.teamBCorrect
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                            : 'bg-cyan-950 text-cyan-400 border border-cyan-500/40'
                        }`}
                      >
                        Tim B: {log.teamBAnswer || '-'}
                        {log.teamBCorrect ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                      </span>
                    </div>

                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-4 pt-1 border-t border-slate-800/80 bg-slate-900/40 space-y-3 text-xs">
                    {log.question.caseStudyContext && (
                      <div className="p-2.5 rounded-lg bg-slate-950 border-l-2 border-amber-400 text-slate-300 italic">
                        {log.question.caseStudyContext}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                        <div
                          key={opt}
                          className={`p-2 rounded-lg border flex items-center gap-2 ${
                            log.question.correctAnswer === opt
                              ? 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-bold'
                              : 'bg-slate-950/50 border-slate-800 text-slate-400'
                          }`}
                        >
                          <span className="font-mono font-bold">{opt}:</span>
                          <span>{log.question.options[opt]}</span>
                          {log.question.correctAnswer === opt && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-auto" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-300 leading-relaxed">
                      <strong className="text-amber-400 block mb-1">
                        Penjelasan Teknis:
                      </strong>
                      {log.question.explanation}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
