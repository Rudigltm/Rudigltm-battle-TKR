import React, { useEffect, useCallback } from 'react';
import { Question, TeamState } from '../types/game';
import { Check, X, ShieldAlert, Wrench, Sparkles, AlertCircle, Clock } from 'lucide-react';

interface DualControlsProps {
  question: Question;
  teamA: TeamState;
  teamB: TeamState;
  isRoundResolved: boolean;
  onTeamAnswer: (team: 'A' | 'B', option: 'A' | 'B' | 'C' | 'D') => void;
  onOpenExplanation: () => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
  timeRemaining: number;
}

export const DualControls: React.FC<DualControlsProps> = ({
  question,
  teamA,
  teamB,
  isRoundResolved,
  onTeamAnswer,
  onOpenExplanation,
  onNextQuestion,
  isLastQuestion,
  timeRemaining
}) => {
  // Keyboard shortcut listener for simultaneous duel
  // Tim A: '1', '2', '3', '4' (or 'a', 's', 'd', 'f' if not inside input)
  // Tim B: '7', '8', '9', '0' (or 'j', 'k', 'l', ';')
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isRoundResolved) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onNextQuestion();
        }
        return;
      }

      const key = e.key.toLowerCase();

      // Tim A Controls
      if (!teamA.selectedAnswer) {
        if (key === '1' || key === 'a') onTeamAnswer('A', 'A');
        else if (key === '2' || key === 's') onTeamAnswer('A', 'B');
        else if (key === '3' || key === 'd') onTeamAnswer('A', 'C');
        else if (key === '4' || key === 'f') onTeamAnswer('A', 'D');
      }

      // Tim B Controls
      if (!teamB.selectedAnswer) {
        if (key === '7' || key === 'j') onTeamAnswer('B', 'A');
        else if (key === '8' || key === 'k') onTeamAnswer('B', 'B');
        else if (key === '9' || key === 'l') onTeamAnswer('B', 'C');
        else if (key === '0' || key === ';') onTeamAnswer('B', 'D');
      }
    },
    [isRoundResolved, onNextQuestion, onTeamAnswer, teamA.selectedAnswer, teamB.selectedAnswer]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const options: Array<'A' | 'B' | 'C' | 'D'> = ['A', 'B', 'C', 'D'];

  const getDifficultyBadge = (lvl: number) => {
    switch (lvl) {
      case 1:
        return { label: 'Level 1: Pengetahuan Dasar', color: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50' };
      case 2:
        return { label: 'Level 2: Pemahaman Konsep', color: 'bg-blue-950/80 text-blue-300 border-blue-500/50' };
      case 3:
        return { label: 'Level 3: Prosedur Kerja', color: 'bg-amber-950/80 text-amber-300 border-amber-500/50' };
      case 4:
        return { label: 'Level 4: Analisis Gejala (HOTS)', color: 'bg-orange-950/80 text-orange-300 border-orange-500/50' };
      case 5:
        return { label: 'Level 5: Studi Kasus Kompleks (HOTS)', color: 'bg-purple-950/80 text-purple-300 border-purple-500/50' };
      default:
        return { label: `Level ${lvl}`, color: 'bg-slate-800 text-slate-300 border-slate-700' };
    }
  };

  const badge = getDifficultyBadge(question.difficulty);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Central Question Display */}
      <div className="bg-slate-900/95 border-2 border-slate-700 rounded-2xl p-4 md:p-6 shadow-xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-cyan-500" />

        {/* Question Header: Topic & Difficulty */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-800 text-amber-400 border border-amber-400/30">
              <Wrench className="w-3.5 h-3.5" />
              {question.topic}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${badge.color}`}>
              {badge.label}
            </span>
          </div>

          <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Duel Simultan: Kedua tim menjawab serentak</span>
          </div>
        </div>

        {/* Real Automotive Diagnostic Case Study Box (HOTS Level 4 & 5) */}
        {question.caseStudyContext && (
          <div className="mb-4 p-3.5 rounded-xl bg-slate-950 border-l-4 border-amber-400 border-y border-r border-slate-800 text-slate-200 text-xs md:text-sm leading-relaxed shadow-inner">
            <div className="flex items-center gap-2 text-amber-400 font-black text-xs uppercase tracking-wider mb-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Konteks Studi Kasus Bengkel Otomotif:</span>
            </div>
            <p className="font-sans italic">{question.caseStudyContext}</p>
          </div>
        )}

        {/* Main Question Text */}
        <h2 className="text-base md:text-xl font-bold text-white leading-relaxed mb-4">
          {question.question}
        </h2>

        {/* Four Options Grid (Display for all players to read) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {options.map((opt) => {
            const isCorrect = question.correctAnswer === opt;
            const isSelectedByA = teamA.selectedAnswer === opt;
            const isSelectedByB = teamB.selectedAnswer === opt;

            let cardStyle = 'bg-slate-800/80 border-slate-700 text-slate-200 hover:border-slate-500';

            if (isRoundResolved) {
              if (isCorrect) {
                cardStyle = 'bg-emerald-950/80 border-2 border-emerald-500 text-emerald-100 shadow-lg shadow-emerald-900/30';
              } else if (isSelectedByA || isSelectedByB) {
                cardStyle = 'bg-red-950/60 border-2 border-red-500/80 text-red-200 opacity-90';
              } else {
                cardStyle = 'bg-slate-900/50 border-slate-800 text-slate-500 opacity-60';
              }
            }

            return (
              <div
                key={opt}
                className={`relative p-3 rounded-xl border transition-all duration-200 flex items-start gap-3 ${cardStyle}`}
              >
                {/* Option Letter Indicator */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm shadow ${
                    isRoundResolved && isCorrect
                      ? 'bg-emerald-500 text-slate-950'
                      : isRoundResolved && (isSelectedByA || isSelectedByB)
                      ? 'bg-red-500 text-white'
                      : 'bg-slate-700 text-slate-200'
                  }`}
                >
                  {opt}
                </div>

                {/* Option Text */}
                <div className="flex-1 text-xs md:text-sm font-medium leading-snug pt-1">
                  {question.options[opt]}
                </div>

                {/* Team Selection Badges attached to this option */}
                <div className="flex flex-col gap-1 items-end ml-2 flex-shrink-0">
                  {teamA.selectedAnswer === opt && (
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow ${
                        isRoundResolved
                          ? isCorrect
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-red-500 text-white'
                          : 'bg-red-600 text-white animate-pulse'
                      }`}
                    >
                      {teamA.name.slice(0, 8)}
                      {isRoundResolved && (isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />)}
                    </span>
                  )}

                  {teamB.selectedAnswer === opt && (
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow ${
                        isRoundResolved
                          ? isCorrect
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-cyan-500 text-slate-950'
                          : 'bg-cyan-500 text-slate-950 animate-pulse'
                      }`}
                    >
                      {teamB.name.slice(0, 8)}
                      {isRoundResolved && (isCorrect ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />)}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DUAL INTERACTIVE ANSWER PANELS (TIM A vs TIM B) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* === TIM A DEDICATED PANEL (LEFT) === */}
        <div className="bg-gradient-to-br from-slate-900 via-red-950/30 to-slate-950 border-2 border-red-500/60 rounded-2xl p-3 md:p-4 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <h3 className="font-black text-sm md:text-base text-red-400 uppercase tracking-wider">
                {teamA.name}
              </h3>
            </div>
            <span className="text-[11px] font-mono text-red-300/80 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">
              Shortcut: [1] [2] [3] [4] atau [A][S][D][F]
            </span>
          </div>

          {/* Status Message */}
          <div className="min-h-[28px] mb-2 flex items-center text-xs font-bold">
            {!teamA.selectedAnswer ? (
              <span className="text-slate-400 italic flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                Pilihlah jawaban cepat dan tepat!
              </span>
            ) : isRoundResolved ? (
              teamA.selectedAnswer === question.correctAnswer ? (
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                  JAWABAN BENAR! (+100 Poin, Mobil Maju!)
                </span>
              ) : (
                <span className="text-red-400 flex items-center gap-1.5">
                  <X className="w-4 h-4 stroke-[3]" />
                  SALAH! ({teamA.selectedAnswer}) Mobil Mundur ke Jurang!
                </span>
              )
            ) : (
              <span className="text-red-300 font-semibold bg-red-950/60 px-2 py-0.5 rounded border border-red-500/40">
                Terkunci di Opsi: <strong>{teamA.selectedAnswer}</strong> (Menunggu putaran berakhir...)
              </span>
            )}
          </div>

          {/* Tim A Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {options.map((opt, idx) => {
              const isSelected = teamA.selectedAnswer === opt;
              const isLocked = !!teamA.selectedAnswer || isRoundResolved;
              const isCorrect = isRoundResolved && question.correctAnswer === opt;
              const isWrong = isRoundResolved && isSelected && !isCorrect;

              return (
                <button
                  key={opt}
                  type="button"
                  disabled={isLocked}
                  onClick={() => onTeamAnswer('A', opt)}
                  className={`h-14 md:h-16 rounded-xl font-black text-lg md:text-xl flex flex-col items-center justify-center transition-all duration-150 active:scale-95 shadow-md ${
                    isCorrect
                      ? 'bg-emerald-600 text-white border-2 border-emerald-400 shadow-emerald-900/50'
                      : isWrong
                      ? 'bg-red-700 text-white border-2 border-red-400'
                      : isSelected
                      ? 'bg-red-600 text-white border-2 border-red-300 ring-2 ring-red-400/50'
                      : isLocked
                      ? 'bg-slate-800/60 text-slate-500 border border-slate-700 cursor-not-allowed'
                      : 'bg-red-950/60 hover:bg-red-900/80 text-red-200 border-2 border-red-500/50 hover:border-red-400'
                  }`}
                >
                  <span>{opt}</span>
                  <span className="text-[10px] font-normal opacity-70">
                    Key: {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* === TIM B DEDICATED PANEL (RIGHT) === */}
        <div className="bg-gradient-to-br from-slate-900 via-cyan-950/30 to-slate-950 border-2 border-cyan-500/60 rounded-2xl p-3 md:p-4 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <h3 className="font-black text-sm md:text-base text-cyan-400 uppercase tracking-wider">
                {teamB.name}
              </h3>
            </div>
            <span className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
              Shortcut: [7] [8] [9] [0] atau [J][K][L][;]
            </span>
          </div>

          {/* Status Message */}
          <div className="min-h-[28px] mb-2 flex items-center text-xs font-bold">
            {!teamB.selectedAnswer ? (
              <span className="text-slate-400 italic flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                Pilihlah jawaban cepat dan tepat!
              </span>
            ) : isRoundResolved ? (
              teamB.selectedAnswer === question.correctAnswer ? (
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                  JAWABAN BENAR! (+100 Poin, Mobil Maju!)
                </span>
              ) : (
                <span className="text-red-400 flex items-center gap-1.5">
                  <X className="w-4 h-4 stroke-[3]" />
                  SALAH! ({teamB.selectedAnswer}) Mobil Mundur ke Jurang!
                </span>
              )
            ) : (
              <span className="text-cyan-300 font-semibold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/40">
                Terkunci di Opsi: <strong>{teamB.selectedAnswer}</strong> (Menunggu putaran berakhir...)
              </span>
            )}
          </div>

          {/* Tim B Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {options.map((opt, idx) => {
              const isSelected = teamB.selectedAnswer === opt;
              const isLocked = !!teamB.selectedAnswer || isRoundResolved;
              const isCorrect = isRoundResolved && question.correctAnswer === opt;
              const isWrong = isRoundResolved && isSelected && !isCorrect;
              const shortcutKeys = ['7', '8', '9', '0'];

              return (
                <button
                  key={opt}
                  type="button"
                  disabled={isLocked}
                  onClick={() => onTeamAnswer('B', opt)}
                  className={`h-14 md:h-16 rounded-xl font-black text-lg md:text-xl flex flex-col items-center justify-center transition-all duration-150 active:scale-95 shadow-md ${
                    isCorrect
                      ? 'bg-emerald-600 text-white border-2 border-emerald-400 shadow-emerald-900/50'
                      : isWrong
                      ? 'bg-red-700 text-white border-2 border-red-400'
                      : isSelected
                      ? 'bg-cyan-600 text-white border-2 border-cyan-300 ring-2 ring-cyan-400/50'
                      : isLocked
                      ? 'bg-slate-800/60 text-slate-500 border border-slate-700 cursor-not-allowed'
                      : 'bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-200 border-2 border-cyan-500/50 hover:border-cyan-400'
                  }`}
                >
                  <span>{opt}</span>
                  <span className="text-[10px] font-normal opacity-70">
                    Key: {shortcutKeys[idx]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ROUND ACTION BAR (AFTER BOTH HAVE ANSWERED OR TIME EXPIRED) */}
      {isRoundResolved && (
        <div className="bg-slate-900 border-2 border-amber-500/50 rounded-2xl p-3 md:p-4 flex flex-wrap items-center justify-between gap-3 shadow-xl animate-fadeIn">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-bold text-xs md:text-sm">
              Kunci Jawaban: <strong className="text-white bg-slate-800 px-2 py-1 rounded border border-slate-700 text-base">{question.correctAnswer}</strong>
            </span>
            <button
              type="button"
              onClick={onOpenExplanation}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-white border border-amber-500/40 text-xs font-bold transition flex items-center gap-1.5 shadow"
            >
              <Wrench className="w-3.5 h-3.5 text-amber-400" />
              <span>Lihat Pembahasan Teknis Lengkap</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onNextQuestion}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm tracking-wide transition shadow-lg flex items-center gap-2 active:scale-95"
          >
            <span>{isLastQuestion ? 'Lihat Hasil Podium Akhir' : 'Lanjut Soal Berikutnya (Space / Enter)'}</span>
            <Sparkles className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
