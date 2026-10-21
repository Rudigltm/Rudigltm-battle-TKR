import React from 'react';

interface CarGraphicProps {
  team: 'A' | 'B';
  teamName: string;
  isBoosting?: boolean;
  isShaking?: boolean;
  isFallen?: boolean;
  isWinner?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const CarGraphic: React.FC<CarGraphicProps> = ({
  team,
  teamName,
  isBoosting = false,
  isShaking = false,
  isFallen = false,
  isWinner = false,
  size = 'md'
}) => {
  const isTeamA = team === 'A';

  // Primary & secondary color schemes
  const mainColor = isTeamA ? '#ef4444' : '#06b6d4'; // Red-500 vs Cyan-500
  const darkColor = isTeamA ? '#991b1b' : '#0e7490'; // Red-800 vs Cyan-700
  const lightColor = isTeamA ? '#fca5a5' : '#67e8f9'; // Red-300 vs Cyan-300
  const neonGlow = isTeamA ? 'rgba(239, 68, 68, 0.6)' : 'rgba(6, 182, 212, 0.6)';
  const numberText = isTeamA ? '01' : '02';

  // Size configurations
  const width = size === 'sm' ? 140 : size === 'lg' ? 240 : 180;
  const height = size === 'sm' ? 70 : size === 'lg' ? 120 : 90;

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none transition-transform duration-300 ${
        isShaking ? 'animate-bounce' : ''
      } ${isWinner ? 'scale-110' : ''}`}
      style={{
        filter: isBoosting
          ? `drop-shadow(0 0 15px ${neonGlow})`
          : isFallen
          ? 'grayscale(80%)'
          : undefined,
        transform: isFallen ? 'rotate(15deg) translateY(20px)' : undefined
      }}
    >
      {/* Cartoon Safety Parachute / Net if fallen */}
      {isFallen && (
        <div className="absolute -top-12 z-20 flex flex-col items-center animate-pulse">
          <div className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow">
            Jaring Darurat Bengkel
          </div>
          <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
            <path
              d="M4 22 C 4 8, 36 8, 36 22"
              stroke="#f59e0b"
              strokeWidth="3"
              strokeDasharray="4 2"
              fill="rgba(245, 158, 11, 0.3)"
            />
            <line x1="8" y1="22" x2="20" y2="24" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="32" y1="22" x2="20" y2="24" stroke="#f59e0b" strokeWidth="1.5" />
          </svg>
        </div>
      )}

      {/* Nitro Flame Effect */}
      {isBoosting && (
        <div className="absolute left-[-28px] top-[38%] pointer-events-none z-0">
          <div className="w-10 h-4 bg-gradient-to-r from-transparent via-amber-400 to-orange-500 rounded-full animate-ping blur-[1px]" />
          <div className="w-6 h-2 bg-yellow-200 rounded-full -mt-3 ml-2 blur-[0.5px]" />
        </div>
      )}

      {/* SVG Cartoon Sport Car */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id={`carGrad-${team}`} x1="0" y1="0" x2="240" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={lightColor} />
            <stop offset="45%" stopColor={mainColor} />
            <stop offset="100%" stopColor={darkColor} />
          </linearGradient>
          <linearGradient id={`windowGrad-${team}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="rimGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="120" cy="110" rx="95" ry="8" fill="rgba(0,0,0,0.5)" />

        {/* Rear Spoiler */}
        <path d="M22 45 L32 45 L28 65 L18 65 Z" fill="#1e293b" />
        <path d="M12 40 L45 40 L40 45 L10 45 Z" fill="#0f172a" />
        <rect x="10" y="38" width="36" height="4" rx="2" fill={isTeamA ? '#b91c1c' : '#0891b2'} />

        {/* Exhaust Pipes */}
        <rect x="8" y="85" width="16" height="6" rx="2" fill="#475569" stroke="#0f172a" strokeWidth="1.5" />
        <ellipse cx="8" cy="88" rx="2" ry="3" fill="#1e293b" />

        {/* Main Car Body Profile */}
        <path
          d="M20 85 C20 80, 24 72, 35 70 C45 68, 65 65, 80 48 C95 32, 140 32, 165 48 C185 62, 215 68, 228 75 C236 80, 238 88, 232 92 C225 96, 210 96, 205 96 C200 82, 175 82, 170 96 L85 96 C80 82, 55 82, 50 96 L22 96 C18 96, 18 90, 20 85 Z"
          fill={`url(#carGrad-${team})`}
          stroke="#0f172a"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Racing Stripes */}
        <path
          d="M45 69 L75 50 L158 50 L205 76 L202 82 L154 55 L72 55 L42 75 Z"
          fill="#ffffff"
          opacity="0.85"
        />

        {/* Cabin Glass / Windshield */}
        <path
          d="M83 49 C95 37, 132 37, 155 49 C157 50, 160 55, 158 64 L80 64 C78 55, 80 50, 83 49 Z"
          fill={`url(#windowGrad-${team})`}
          stroke="#0f172a"
          strokeWidth="2.5"
        />

        {/* Windshield Reflection */}
        <path d="M95 40 L115 40 L105 60 L88 60 Z" fill="#ffffff" opacity="0.35" />

        {/* Technician / Driver Helmet inside */}
        <circle cx="118" cy="52" r="9" fill="#f8fafc" stroke="#1e293b" strokeWidth="1.5" />
        <path d="M116 50 H124 V54 H116 Z" fill="#0284c7" />

        {/* Racing Number Plate on Door */}
        <circle cx="120" cy="80" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
        <text
          x="120"
          y="85"
          textAnchor="middle"
          fontSize="14"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          fill="#0f172a"
        >
          {numberText}
        </text>

        {/* Front Headlight (Sporty Angle Eye) */}
        <polygon
          points="218,74 233,78 225,84 212,80"
          fill={isBoosting ? '#fef08a' : '#e0f2fe'}
          stroke="#0f172a"
          strokeWidth="1.5"
        />

        {/* Front Splitter / Air Dam */}
        <rect x="215" y="94" width="22" height="4" rx="2" fill="#0f172a" />

        {/* Rear Wheel Arch & Tire */}
        <g>
          {/* Outer Black Tire */}
          <circle cx="68" cy="94" r="18" fill="#18181b" stroke="#09090b" strokeWidth="3" />
          {/* Alloy Rim */}
          <circle cx="68" cy="94" r="11" fill="url(#rimGrad)" stroke="#334155" strokeWidth="1.5" />
          <circle cx="68" cy="94" r="4" fill={mainColor} />
          {/* Rim Spokes */}
          <line x1="68" y1="84" x2="68" y2="104" stroke="#475569" strokeWidth="2" />
          <line x1="58" y1="94" x2="78" y2="94" stroke="#475569" strokeWidth="2" />
        </g>

        {/* Front Wheel Arch & Tire */}
        <g>
          {/* Outer Black Tire */}
          <circle cx="188" cy="94" r="18" fill="#18181b" stroke="#09090b" strokeWidth="3" />
          {/* Alloy Rim */}
          <circle cx="188" cy="94" r="11" fill="url(#rimGrad)" stroke="#334155" strokeWidth="1.5" />
          <circle cx="188" cy="94" r="4" fill={mainColor} />
          {/* Rim Spokes */}
          <line x1="188" y1="84" x2="188" y2="104" stroke="#475569" strokeWidth="2" />
          <line x1="178" y1="94" x2="198" y2="94" stroke="#475569" strokeWidth="2" />
        </g>
      </svg>

      {/* Team Badge & Position Label below car */}
      <div
        className={`mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md border ${
          isTeamA
            ? 'bg-red-950/80 border-red-500/60 text-red-300'
            : 'bg-cyan-950/80 border-cyan-500/60 text-cyan-300'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isTeamA ? 'bg-red-400 animate-pulse' : 'bg-cyan-400 animate-pulse'
          }`}
        />
        <span>{teamName || (isTeamA ? 'TIM A' : 'TIM B')}</span>
      </div>
    </div>
  );
};
