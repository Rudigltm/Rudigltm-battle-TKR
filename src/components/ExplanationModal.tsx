import React from 'react';
import { Question } from '../types/game';
import { Wrench, CheckCircle2, XCircle, AlertCircle, X, Lightbulb } from 'lucide-react';

interface ExplanationModalProps {
  question: Question | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ExplanationModal: React.FC<ExplanationModalProps> = ({
  question,
  isOpen,
  onClose
}) => {
  if (!isOpen || !question) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-black text-white">
                Pembahasan Teknis & Analisis Bengkel
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                {question.topic} • Tingkat Kesulitan: Level {question.difficulty}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Question Recap */}
          <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
            <span className="text-[11px] font-black uppercase text-amber-400 tracking-wider block mb-1">
              Pertanyaan:
            </span>
            <p className="text-slate-200 font-medium">{question.question}</p>
          </div>

          {/* Correct Answer Explanation Box */}
          <div className="bg-emerald-950/60 border-2 border-emerald-500/70 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-emerald-400 font-black text-sm mb-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>
                Kunci Jawaban Tepat: Opsi {question.correctAnswer} - "{question.options[question.correctAnswer]}"
              </span>
            </div>
            <p className="text-emerald-100/90 leading-relaxed font-sans text-xs md:text-sm">
              {question.explanation}
            </p>
          </div>

          {/* Distractor Breakdown (Why other options are wrong) */}
          {question.incorrectReasoning && (
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-red-400" />
                Analisis Kesalahan Pilihan Lainnya:
              </span>

              <div className="grid grid-cols-1 gap-2">
                {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                  if (opt === question.correctAnswer) return null;
                  const reason = question.incorrectReasoning?.[opt];
                  if (!reason) return null;

                  return (
                    <div
                      key={opt}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs flex items-start gap-2.5"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-md bg-red-950 text-red-400 border border-red-500/40 flex items-center justify-center font-bold">
                        {opt}
                      </span>
                      <div className="text-slate-300">
                        <strong className="text-slate-200 block mb-0.5">
                          {question.options[opt]}
                        </strong>
                        <span className="text-slate-400">{reason}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Practical Workshop Advice / SOP Box */}
          <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 block mb-1 uppercase tracking-wide">
                Catatan Guru Produktif TKR SMK:
              </strong>
              Selalu prioritaskan keselamatan kerja (K3), penggunaan Alat Pelindung Diri (APD), dan rujuklah Buku Pedoman Reparasi (Manual Repair Shop) resmi sesuai model kendaraan sebelum melakukan pembongkaran.
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition"
          >
            Tutup Pembahasan
          </button>
        </div>
      </div>
    </div>
  );
};
