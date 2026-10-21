import React from 'react';
import { TeamState } from '../types/game';
import { CarGraphic } from './CarGraphic';
import { AlertTriangle, CheckCircle2, XCircle, Flag, ShieldAlert, Zap } from 'lucide-react';

interface ArenaTrackProps {
  teamA: TeamState;
  teamB: TeamState;
  maxForwardSteps?: number; // steps to finish, e.g. 5
  maxBackwardSteps?: number; // steps to cliff, e.g. -5
  timeRemaining: number;
  timeLimit: number;
  currentRound: number;
  totalRounds: number;
  practiceMode?: boolean;
}

export const ArenaTrack: React.FC<ArenaTrackProps> = ({
  teamA,
  teamB,
  maxForwardSteps = 5,
  maxBackwardSteps = -5,
  timeRemaining,
  timeLimit,
  currentRound,
  totalRounds,
  practiceMode = false
}) => {
  // Total span from cliff to finish
  const totalRange = maxForwardSteps - maxBackwardSteps; // typically 10 steps

  // Calculate percentage along the horizontal track (0% = cliff edge, 100% = finish line)
  const calculatePositionPercent = (pos: number) => {
    const clamped = Math.max(maxBackwardSteps, Math.min(maxForwardSteps, pos));
    const normalized = (clamped - maxBackwardSteps) / totalRange;
    // Map between 8% (cliff apron) and 88% (finish line apron)
    return 8 + normalized * 80;
  };

  const posPercentA = calculatePositionPercent(teamA.position);
  const posPercentB = calculatePositionPercent(teamB.position);

  // Danger cliff proximity alert (when position is <= -3)
  const isDangerA = teamA.position <= -3 && !practiceMode;
  const isDangerB = teamB.position <= -3 && !practiceMode;

  // Timer percentage
  const timerPercent = timeLimit > 0 ? (timeRemaining / timeLimit) * 100 : 100;
  const isLowTime = timeLimit > 0 && timeRemaining <= 5 && timeRemaining > 0;

  return (
    <div className="w-full bg-slate-900 border-2 border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
      {/* Top Header Bar: Round indicator, Timer Gauge, Stats */}
      <div className="bg-slate-950 px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        {/* Round Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-3 py-1 rounded-lg font-black text-xs md:text-sm tracking-wide shadow">
            <Zap className="w-4 h-4 fill-current" />
            <span>SOAL #{currentRound} / {totalRounds}</span>
          </div>

          {practiceMode && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded-full">
              Mode Latihan (Bebas Jurang)
            </span>
          )}
        </div>

        {/* Center Countdown Timer */}
        {timeLimit > 0 ? (
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Sisa Waktu</div>
              <div
                className={`text-lg md:text-2xl font-black font-mono leading-none ${
                  isLowTime ? 'text-red-500 animate-ping' : 'text-amber-400'
                }`}
              >
                {timeRemaining}s
              </div>
            </div>
            <div className="w-24 md:w-36 h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  isLowTime
                    ? 'bg-red-500 animate-pulse'
                    : timerPercent > 50
                    ? 'bg-emerald-400'
                    : 'bg-amber-400'
                }`}
                style={{ width: `${Math.max(0, timerPercent)}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="text-xs font-semibold text-slate-400">
            Waktu Santai (Tanpa Batas)
          </div>
        )}

        {/* Mini Team Scoreboards */}
        <div className="flex items-center gap-2 md:gap-4 text-xs font-bold">
          {/* Team A quick summary */}
          <div className="flex items-center gap-2 bg-red-950/60 border border-red-500/40 px-2.5 py-1 rounded-lg text-red-200">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span>{teamA.name}:</span>
            <span className="text-white font-mono text-sm">{teamA.score} Pts</span>
            <span className="text-[10px] text-slate-400">({teamA.correctCount}B / {teamA.wrongCount}S)</span>
          </div>

          {/* Team B quick summary */}
          <div className="flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/40 px-2.5 py-1 rounded-lg text-cyan-200">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{teamB.name}:</span>
            <span className="text-white font-mono text-sm">{teamB.score} Pts</span>
            <span className="text-[10px] text-slate-400">({teamB.correctCount}B / {teamB.wrongCount}S)</span>
          </div>
        </div>
      </div>

      {/* Main Race Track Canvas Area */}
      <div className="relative w-full h-64 md:h-76 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-950 overflow-hidden flex flex-col justify-between p-2 md:p-4 select-none">
        
        {/* Background Workshop Skyline & Circuit Lights */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* --- LEFT SIDE: THE CLIFF / JURANG PERBAIKAN --- */}
        <div className="absolute top-0 bottom-0 left-0 w-[12%] md:w-[10%] bg-gradient-to-r from-red-950/80 via-red-900/40 to-transparent border-r-2 border-dashed border-red-500/70 z-10 flex flex-col items-center justify-between py-2">
          {/* Danger Warning Sign */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-amber-500 text-slate-950 p-1 rounded-md animate-bounce shadow-lg">
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 stroke-[2.5]" />
            </div>
            <span className="text-[9px] md:text-[11px] font-black text-red-400 tracking-tighter uppercase mt-0.5 leading-none">
              JURANG
            </span>
            <span className="text-[8px] text-red-300 font-semibold hidden md:inline">
              BAHAYA!
            </span>
          </div>

          {/* Hazard Stripes column */}
          <div className="w-3 h-24 rounded bg-[repeating-linear-gradient(45deg,#ef4444,#ef4444_6px,#000_6px,#000_12px)] opacity-70 shadow" />

          {/* Emergency Safety Net Label */}
          <div className="bg-slate-900/90 border border-amber-500/50 rounded px-1 text-[8px] text-amber-300 font-bold text-center">
            <ShieldAlert className="w-3 h-3 mx-auto text-amber-400" />
            Jaring
          </div>
        </div>

        {/* --- RIGHT SIDE: FINISH LINE ARCH --- */}
        <div className="absolute top-0 bottom-0 right-0 w-[12%] md:w-[10%] bg-gradient-to-l from-emerald-950/70 via-emerald-900/30 to-transparent border-l-2 border-emerald-500/70 z-10 flex flex-col items-center justify-between py-2">
          {/* Checkered Finish Sign */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-emerald-500 text-slate-950 p-1 rounded-md shadow-lg">
              <Flag className="w-4 h-4 md:w-5 md:h-5 fill-slate-950" />
            </div>
            <span className="text-[9px] md:text-[11px] font-black text-emerald-400 tracking-tighter uppercase mt-0.5 leading-none">
              FINIS
            </span>
            <span className="text-[8px] text-emerald-300 font-semibold hidden md:inline">
              JUARA
            </span>
          </div>

          {/* Checkered Pattern Column */}
          <div className="w-4 h-24 rounded bg-[repeating-conic-gradient(#fff_0_90deg,#000_0_180deg)] [background-size:8px_8px] opacity-80 shadow border border-slate-700" />

          {/* Finish Line Step */}
          <div className="bg-slate-900/90 border border-emerald-500/50 rounded px-1.5 py-0.5 text-[8px] text-emerald-300 font-bold text-center">
            +{maxForwardSteps}
          </div>
        </div>

        {/* --- CENTER TRACK DISTANCE MARKERS & STEPS --- */}
        <div className="absolute top-2 left-[12%] right-[12%] flex justify-between px-2 text-[10px] font-mono font-bold text-slate-500 pointer-events-none">
          <span className="text-red-400 font-black">{maxBackwardSteps} (Tepi)</span>
          <span>-3</span>
          <span>-1</span>
          <span className="text-slate-300 bg-slate-800 px-1.5 rounded">0 (Start)</span>
          <span>+1</span>
          <span>+3</span>
          <span className="text-emerald-400 font-black">+{maxForwardSteps} (Finis)</span>
        </div>

        {/* LANE 1: TIM A (TOP HALF) */}
        <div className="relative w-full h-[46%] rounded-xl bg-slate-950/60 border border-red-950/50 flex items-center px-4 overflow-visible">
          {/* Track Surface & Markings */}
          <div className="absolute inset-x-0 bottom-0 h-4 bg-slate-800 border-t border-slate-700" />
          <div className="absolute inset-x-0 bottom-2 h-0.5 border-b border-dashed border-red-500/40" />

          {/* Tim A Track Indicator Alert */}
          {isDangerA && (
            <div className="absolute left-[13%] top-2 flex items-center gap-1 bg-red-600/90 text-white text-[10px] font-black px-2 py-0.5 rounded animate-pulse shadow-md z-20">
              <AlertTriangle className="w-3 h-3" />
              TIM A MENDEKATI JURANG! ({teamA.position})
            </div>
          )}

          {/* Tim A Car Container */}
          <div
            className="absolute bottom-3 transition-all duration-500 ease-out z-20 flex flex-col items-center"
            style={{
              left: `${posPercentA}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <CarGraphic
              team="A"
              teamName={teamA.name}
              isBoosting={teamA.status === 'correct'}
              isShaking={teamA.status === 'wrong'}
              isFallen={teamA.hasFallen}
              size="md"
            />
          </div>
        </div>

        {/* ASPHALT SEPARATOR WITH SPEED DASHES */}
        <div className="w-full h-1 bg-slate-700 relative overflow-hidden my-0.5">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#fbbf24,#fbbf24_15px,transparent_15px,transparent_30px)] opacity-60" />
        </div>

        {/* LANE 2: TIM B (BOTTOM HALF) */}
        <div className="relative w-full h-[46%] rounded-xl bg-slate-950/60 border border-cyan-950/50 flex items-center px-4 overflow-visible">
          {/* Track Surface & Markings */}
          <div className="absolute inset-x-0 bottom-0 h-4 bg-slate-800 border-t border-slate-700" />
          <div className="absolute inset-x-0 bottom-2 h-0.5 border-b border-dashed border-cyan-500/40" />

          {/* Tim B Track Indicator Alert */}
          {isDangerB && (
            <div className="absolute left-[13%] top-2 flex items-center gap-1 bg-red-600/90 text-white text-[10px] font-black px-2 py-0.5 rounded animate-pulse shadow-md z-20">
              <AlertTriangle className="w-3 h-3" />
              TIM B MENDEKATI JURANG! ({teamB.position})
            </div>
          )}

          {/* Tim B Car Container */}
          <div
            className="absolute bottom-3 transition-all duration-500 ease-out z-20 flex flex-col items-center"
            style={{
              left: `${posPercentB}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <CarGraphic
              team="B"
              teamName={teamB.name}
              isBoosting={teamB.status === 'correct'}
              isShaking={teamB.status === 'wrong'}
              isFallen={teamB.hasFallen}
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Bottom Track Legend & Visual Status Banner */}
      <div className="bg-slate-950/90 px-4 py-2 flex flex-wrap items-center justify-between text-xs text-slate-400 border-t border-slate-800">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Benar: <strong>+100 Poin</strong> & Mobil Maju +1</span>
          </span>
          {!practiceMode ? (
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span>Salah: Mobil Mundur -1 ke Jurang</span>
            </span>
          ) : (
            <span className="text-emerald-400 font-medium">Mode Latihan: Penalti Jurang Nonaktif</span>
          )}
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono">
          <span className="text-red-300">
            {teamA.name}: Posisi <strong>{teamA.position > 0 ? `+${teamA.position}` : teamA.position}</strong>
            {teamA.position >= maxForwardSteps && ' 🏁 (FINIS)'}
            {teamA.position <= maxBackwardSteps && ' 🪂 (JARING PENGAMAN)'}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-300">
            {teamB.name}: Posisi <strong>{teamB.position > 0 ? `+${teamB.position}` : teamB.position}</strong>
            {teamB.position >= maxForwardSteps && ' 🏁 (FINIS)'}
            {teamB.position <= maxBackwardSteps && ' 🪂 (JARING PENGAMAN)'}
          </span>
        </div>
      </div>
    </div>
  );
};
