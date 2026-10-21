import React from 'react';
import { HelpCircle, Wrench, ShieldCheck, Zap, AlertTriangle, X, Keyboard } from 'lucide-react';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstructionsModal: React.FC<InstructionsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">
                Petunjuk & Panduan AUTO TECH BATTLE
              </h2>
              <p className="text-xs text-slate-400">
                Mekanisme Duel Otomotif TKR SMK untuk Tim A & Tim B
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

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs md:text-sm text-slate-300">
          {/* Mekanisme Menjawab Sekaligus */}
          <div className="bg-gradient-to-r from-red-950/50 via-slate-900 to-cyan-950/50 border border-amber-500/40 p-4 rounded-2xl space-y-2">
            <h3 className="font-black text-amber-400 text-sm flex items-center gap-2 uppercase tracking-wide">
              <Zap className="w-4 h-4 fill-amber-400" />
              1. Menjawab Sekaligus (Simultaneous Duel)
            </h3>
            <p className="leading-relaxed">
              Tim A dan Tim B <strong>TIDAK BERGANTIAN</strong>, melainkan <strong>berlomba menjawab secara bersamaan (sekalian)</strong> sebelum batas waktu habis! Kedua tim dapat mengunci jawaban masing-masing melalui tombol layar sentuh atau tombol shortcut keyboard.
            </p>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-3">
            <h3 className="font-black text-white text-xs uppercase tracking-wide flex items-center gap-2">
              <Keyboard className="w-4 h-4 text-cyan-400" />
              Tombol Cepat Keyboard (Untuk Layar Laptop / Proyektor)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40">
                <div className="font-black text-red-400 mb-1 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  TIM A (Sisi Kiri):
                </div>
                <div className="text-xs space-y-1 text-slate-300 font-mono">
                  <div>• Opsi A: Angka <strong>[1]</strong> atau huruf <strong>[A]</strong></div>
                  <div>• Opsi B: Angka <strong>[2]</strong> atau huruf <strong>[S]</strong></div>
                  <div>• Opsi C: Angka <strong>[3]</strong> atau huruf <strong>[D]</strong></div>
                  <div>• Opsi D: Angka <strong>[4]</strong> atau huruf <strong>[F]</strong></div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40">
                <div className="font-black text-cyan-400 mb-1 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  TIM B (Sisi Kanan):
                </div>
                <div className="text-xs space-y-1 text-slate-300 font-mono">
                  <div>• Opsi A: Angka <strong>[7]</strong> atau huruf <strong>[J]</strong></div>
                  <div>• Opsi B: Angka <strong>[8]</strong> atau huruf <strong>[K]</strong></div>
                  <div>• Opsi C: Angka <strong>[9]</strong> atau huruf <strong>[L]</strong></div>
                  <div>• Opsi D: Angka <strong>[0]</strong> atau tanda <strong>[;]</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* Sistem Skor & Arena Jurang */}
          <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2.5">
            <h3 className="font-black text-white text-xs uppercase tracking-wide flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              2. Sistem Skor & Lintasan Jurang
            </h3>
            <ul className="space-y-1.5 list-disc list-inside text-slate-300">
              <li>
                <strong className="text-emerald-400">Jawaban Benar:</strong> Mendapat <strong>+100 Poin</strong> dan mobil melaju maju 1 langkah menuju garis finis (+5).
              </li>
              <li>
                <strong className="text-red-400">Jawaban Salah:</strong> Mendapat <strong>0 Poin</strong> dan mobil mundur 1 langkah mendekati jurang (-5).
              </li>
              <li>
                <strong className="text-amber-400">Zona Bahaya Jurang:</strong> Bila posisi mobil mencapai -5, mobil akan tergelincir secara kartun ke dalam <em>Jaring Pengaman Servis Darurat Bengkel</em>. Mobil tetap aman tanpa adegan membahayakan.
              </li>
              <li>
                <strong className="text-cyan-400">Garis Finis:</strong> Tim pertama yang mencapai posisi +5 memenangkan pertandingan, atau tim dengan perolehan skor tertinggi setelah seluruh soal selesai!
              </li>
            </ul>
          </div>

          {/* Tingkat Kesulitan Soal */}
          <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
            <h3 className="font-black text-white text-xs uppercase tracking-wide flex items-center gap-2">
              <Wrench className="w-4 h-4 text-emerald-400" />
              3. Tingkat Kesulitan Soal TKR
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                <strong className="text-emerald-400">Level 1 & 2:</strong> Pengetahuan dasar & konsep komponen otomotif.
              </div>
              <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                <strong className="text-amber-400">Level 3:</strong> Prosedur kerja, SOP pembongkaran & alat ukur.
              </div>
              <div className="p-2 bg-slate-900 rounded-lg border border-slate-800 col-span-full">
                <strong className="text-orange-400">Level 4 & 5 (HOTS):</strong> Analisis kasus kerusakan nyata bengkel, interpretasi data live stream scan tool OBD-II, dan pemecahan masalah mesin kompleks.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition"
          >
            Saya Siap Bertanding!
          </button>
        </div>
      </div>
    </div>
  );
};
