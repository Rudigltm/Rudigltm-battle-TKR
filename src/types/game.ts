export type TkrTopic =
  | 'Sistem Mesin Kendaraan Ringan'
  | 'Sistem Bahan Bakar Bensin & Diesel'
  | 'Sistem Pelumasan & Pendinginan'
  | 'Sistem Pemindah Tenaga'
  | 'Sistem Rem'
  | 'Sistem Kemudi & Suspensi'
  | 'Sistem Kelistrikan Kendaraan'
  | 'Sistem Starter & Pengisian'
  | 'Sistem AC Kendaraan'
  | 'Sistem EFI & Sensor'
  | 'Sistem OBD & Diagnosis Kerusakan'
  | 'K3 Bengkel Otomotif'
  | 'Perawatan Berkala Kendaraan'
  | 'Penggunaan Alat Ukur & Diagnostik';

export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export interface Question {
  id: string;
  topic: TkrTopic;
  difficulty: DifficultyLevel;
  question: string;
  caseStudyContext?: string; // Konteks kasus bengkel (untuk Level 4 & 5 HOTS)
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string; // Penjelasan teknis mendalam
  incorrectReasoning?: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
}

export interface TeamState {
  name: string;
  score: number;
  correctCount: number;
  wrongCount: number;
  position: number; // -5 (Cliff edge) to +5 (Finish line), starts at 0
  hasFallen: boolean;
  selectedAnswer: 'A' | 'B' | 'C' | 'D' | null;
  answerTimeMs: number | null; // Waktu respon dalam ms
  streak: number;
  status: 'idle' | 'answering' | 'locked' | 'correct' | 'wrong' | 'fallen';
}

export interface MatchSettings {
  teamAName: string;
  teamBName: string;
  className: string;
  teacherName: string;
  questionCount: number; // 10, 15, 20, 30, or all
  timeLimitSeconds: number; // 15, 20, 30, 45, or 0 (no limit)
  selectedTopics: TkrTopic[];
  selectedDifficulties: DifficultyLevel[];
  enableCliffPenalty: boolean; // Jika salah, mobil mundur
  practiceMode: boolean; // Mode latihan: tidak ada jurang, hanya skor & pembahasan
  duelMode: 'simultaneous' | 'speed_duel'; // 'simultaneous': keduanya mengunci jawaban; 'speed_duel': siapa cepat benar dapat poin/bonus
  soundEnabled: boolean;
  reducedMotion: boolean;
}

export interface AnswerLog {
  question: Question;
  teamAAnswer: 'A' | 'B' | 'C' | 'D' | null;
  teamBAnswer: 'A' | 'B' | 'C' | 'D' | null;
  teamACorrect: boolean;
  teamBCorrect: boolean;
  teamATimeMs?: number | null;
  teamBTimeMs?: number | null;
}
