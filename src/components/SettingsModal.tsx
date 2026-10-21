import React from 'react';
import { MatchSettings, TkrTopic, DifficultyLevel } from '../types/game';
import { Settings, Volume2, VolumeX, Shield, Clock, Award, Sliders, X, CheckSquare, Square } from 'lucide-react';

interface SettingsModalProps {
  settings: MatchSettings;
  isOpen: boolean;
  onClose: () => void;
  onUpdateSettings: (newSettings: MatchSettings) => void;
}

const ALL_TOPICS: TkrTopic[] = [
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
];

export const SettingsModal: React.FC<SettingsModalProps> = ({
  settings,
  isOpen,
  onClose,
  onUpdateSettings
}) => {
  if (!isOpen) return null;

  const toggleTopic = (topic: TkrTopic) => {
    if (settings.selectedTopics.includes(topic)) {
      if (settings.selectedTopics.length === 1) return; // minimal 1 topik
      onUpdateSettings({
        ...settings,
        selectedTopics: settings.selectedTopics.filter((t) => t !== topic)
      });
    } else {
      onUpdateSettings({
        ...settings,
        selectedTopics: [...settings.selectedTopics, topic]
      });
    }
  };

  const selectAllTopics = () => {
    onUpdateSettings({
      ...settings,
      selectedTopics: [...ALL_TOPICS]
    });
  };

  const toggleDifficulty = (lvl: DifficultyLevel) => {
    if (settings.selectedDifficulties.includes(lvl)) {
      if (settings.selectedDifficulties.length === 1) return;
      onUpdateSettings({
        ...settings,
        selectedDifficulties: settings.selectedDifficulties.filter((d) => d !== lvl)
      });
    } else {
      onUpdateSettings({
        ...settings,
        selectedDifficulties: [...settings.selectedDifficulties, lvl]
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-slate-900 border-2 border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">
                Pengaturan Pertandingan & Mode Guru
              </h2>
              <p className="text-xs text-slate-400">
                Konfigurasi arena, durasi waktu, penalti jurang, dan filter kurikulum
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

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Section: Identitas Guru & Kelas */}
          <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <h3 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              Identitas Pembelajaran
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Nama Guru Pengampu:
                </label>
                <input
                  type="text"
                  value={settings.teacherName}
                  onChange={(e) =>
                    onUpdateSettings({ ...settings, teacherName: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Kelas / Jurusan:
                </label>
                <input
                  type="text"
                  value={settings.className}
                  onChange={(e) =>
                    onUpdateSettings({ ...settings, className: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block text-xs font-bold text-red-300 mb-1">
                  Nama Tim A (Mobil Merah):
                </label>
                <input
                  type="text"
                  value={settings.teamAName}
                  onChange={(e) =>
                    onUpdateSettings({ ...settings, teamAName: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-red-500/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-red-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-cyan-300 mb-1">
                  Nama Tim B (Mobil Biru):
                </label>
                <input
                  type="text"
                  value={settings.teamBName}
                  onChange={(e) =>
                    onUpdateSettings({ ...settings, teamBName: e.target.value })
                  }
                  className="w-full bg-slate-900 border border-cyan-500/40 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Section: Mekanisme Lomba & Durasi */}
          <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <h3 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Mekanisme Pertandingan & Timer
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Jumlah Soal per Pertandingan:
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[10, 15, 20, 30].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() =>
                        onUpdateSettings({ ...settings, questionCount: count })
                      }
                      className={`py-2 rounded-xl text-xs font-bold transition ${
                        settings.questionCount === count
                          ? 'bg-amber-500 text-slate-950 font-black shadow'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Batas Waktu per Soal:
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[15, 20, 30, 45].map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() =>
                        onUpdateSettings({ ...settings, timeLimitSeconds: sec })
                      }
                      className={`py-2 rounded-xl text-xs font-bold transition ${
                        settings.timeLimitSeconds === sec
                          ? 'bg-amber-500 text-slate-950 font-black shadow'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {sec}s
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cliff Penalty & Practice Mode Toggles */}
            <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700">
                <input
                  type="checkbox"
                  checked={settings.enableCliffPenalty}
                  onChange={(e) =>
                    onUpdateSettings({
                      ...settings,
                      enableCliffPenalty: e.target.checked
                    })
                  }
                  className="w-4 h-4 text-red-500 rounded bg-slate-800 border-slate-700 focus:ring-0"
                />
                <div>
                  <span className="text-xs font-bold text-white block">
                    Penalti Jurang Aktif (Mobil Mundur -1 jika Salah)
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Bila dimatikan, jawaban salah hanya bernilai 0 tanpa mundur.
                  </span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700">
                <input
                  type="checkbox"
                  checked={settings.practiceMode}
                  onChange={(e) =>
                    onUpdateSettings({
                      ...settings,
                      practiceMode: e.target.checked
                    })
                  }
                  className="w-4 h-4 text-emerald-500 rounded bg-slate-800 border-slate-700 focus:ring-0"
                />
                <div>
                  <span className="text-xs font-bold text-white block">
                    Mode Latihan Bebas Tekanan (Tanpa Bahaya Jurang)
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Cocok untuk pengenalan materi dan drilling soal.
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Section: Audio & Animasi Display */}
          <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <h3 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4" />
              Efek Suara & Tampilan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={(e) =>
                    onUpdateSettings({
                      ...settings,
                      soundEnabled: e.target.checked
                    })
                  }
                  className="w-4 h-4 text-amber-500 rounded bg-slate-800 border-slate-700"
                />
                <div className="flex items-center gap-2">
                  {settings.soundEnabled ? (
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-slate-500" />
                  )}
                  <span className="text-xs font-bold text-white">
                    Efek Suara Mesin, Turbo, & Buzzer
                  </span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) =>
                    onUpdateSettings({
                      ...settings,
                      reducedMotion: e.target.checked
                    })
                  }
                  className="w-4 h-4 text-amber-500 rounded bg-slate-800 border-slate-700"
                />
                <div>
                  <span className="text-xs font-bold text-white block">
                    Kurangi Efek Animasi (Reduced Motion)
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Direkomendasikan untuk proyektor sekolah yang membutuhkan refresh rate ringan.
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Section: Filter Tingkat Kesulitan */}
          <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <h3 className="text-xs font-black uppercase text-amber-400 tracking-wider">
              Filter Tingkat Kesulitan Soal
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {([1, 2, 3, 4, 5] as DifficultyLevel[]).map((lvl) => {
                const isSelected = settings.selectedDifficulties.includes(lvl);
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => toggleDifficulty(lvl)}
                    className={`p-2 rounded-xl text-xs font-bold border transition text-center ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}
                  >
                    Level {lvl}
                    <span className="block text-[10px] font-normal opacity-80">
                      {lvl === 1
                        ? 'Dasar'
                        : lvl === 2
                        ? 'Konsep'
                        : lvl === 3
                        ? 'SOP'
                        : lvl === 4
                        ? 'HOTS Gejala'
                        : 'HOTS Kasus'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section: Filter Topik Kejuruan */}
          <div className="space-y-3 bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black uppercase text-amber-400 tracking-wider">
                Pilihan Topik Kejuruan TKR ({settings.selectedTopics.length}/{ALL_TOPICS.length})
              </h3>
              <button
                type="button"
                onClick={selectAllTopics}
                className="text-xs text-cyan-400 hover:underline font-bold"
              >
                Pilih Semua Topik
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
              {ALL_TOPICS.map((topic) => {
                const isSelected = settings.selectedTopics.includes(topic);
                return (
                  <div
                    key={topic}
                    onClick={() => toggleTopic(topic)}
                    className={`p-2.5 rounded-xl border text-xs cursor-pointer flex items-center gap-2.5 transition select-none ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-500/60 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-500'
                    }`}
                  >
                    {isSelected ? (
                      <CheckSquare className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-600 flex-shrink-0" />
                    )}
                    <span className="truncate">{topic}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs uppercase tracking-wide hover:from-amber-400 hover:to-orange-400 transition shadow"
          >
            Terapkan Pengaturan
          </button>
        </div>
      </div>
    </div>
  );
};
