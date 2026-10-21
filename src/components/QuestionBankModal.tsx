import React, { useState } from 'react';
import { Question, TkrTopic, DifficultyLevel } from '../types/game';
import {
  Wrench,
  Plus,
  Trash2,
  Edit2,
  Download,
  Upload,
  RotateCcw,
  Search,
  CheckCircle2,
  X,
  FileText,
  AlertCircle
} from 'lucide-react';
import { INITIAL_QUESTIONS } from '../data/defaultQuestions';

interface QuestionBankModalProps {
  questions: Question[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuestions: (newQuestions: Question[]) => void;
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

export const QuestionBankModal: React.FC<QuestionBankModalProps> = ({
  questions,
  isOpen,
  onClose,
  onUpdateQuestions
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('ALL');
  const [selectedDiffFilter, setSelectedDiffFilter] = useState<string>('ALL');

  // Form State for Adding / Editing
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formTopic, setFormTopic] = useState<TkrTopic>('Sistem Mesin Kendaraan Ringan');
  const [formDifficulty, setFormDifficulty] = useState<DifficultyLevel>(2);
  const [formQuestion, setFormQuestion] = useState('');
  const [formCaseStudy, setFormCaseStudy] = useState('');
  const [formOptA, setFormOptA] = useState('');
  const [formOptB, setFormOptB] = useState('');
  const [formOptC, setFormOptC] = useState('');
  const [formOptD, setFormOptD] = useState('');
  const [formCorrect, setFormCorrect] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [formExplanation, setFormExplanation] = useState('');

  if (!isOpen) return null;

  // Filtered list
  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.topic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopicFilter === 'ALL' || q.topic === selectedTopicFilter;
    const matchesDiff = selectedDiffFilter === 'ALL' || q.difficulty.toString() === selectedDiffFilter;
    return matchesSearch && matchesTopic && matchesDiff;
  });

  const handleOpenAddForm = () => {
    setIsEditing(true);
    setEditingId(null);
    setFormTopic('Sistem Mesin Kendaraan Ringan');
    setFormDifficulty(3);
    setFormQuestion('');
    setFormCaseStudy('');
    setFormOptA('');
    setFormOptB('');
    setFormOptC('');
    setFormOptD('');
    setFormCorrect('A');
    setFormExplanation('');
  };

  const handleOpenEditForm = (q: Question) => {
    setIsEditing(true);
    setEditingId(q.id);
    setFormTopic(q.topic);
    setFormDifficulty(q.difficulty);
    setFormQuestion(q.question);
    setFormCaseStudy(q.caseStudyContext || '');
    setFormOptA(q.options.A);
    setFormOptB(q.options.B);
    setFormOptC(q.options.C);
    setFormOptD(q.options.D);
    setFormCorrect(q.correctAnswer);
    setFormExplanation(q.explanation);
  };

  const handleSaveQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formQuestion.trim() || !formOptA.trim() || !formOptB.trim()) {
      alert('Harap isi pertanyaan dan opsi jawaban dengan lengkap!');
      return;
    }

    const newQ: Question = {
      id: editingId || `custom-${Date.now()}`,
      topic: formTopic,
      difficulty: formDifficulty,
      question: formQuestion.trim(),
      caseStudyContext: formCaseStudy.trim() ? formCaseStudy.trim() : undefined,
      options: {
        A: formOptA.trim(),
        B: formOptB.trim(),
        C: formOptC.trim(),
        D: formOptD.trim()
      },
      correctAnswer: formCorrect,
      explanation: formExplanation.trim() || 'Pembahasan teknis standar bengkel otomotif.'
    };

    if (editingId) {
      onUpdateQuestions(questions.map((q) => (q.id === editingId ? newQ : q)));
    } else {
      onUpdateQuestions([newQ, ...questions]);
    }

    setIsEditing(false);
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Yakin ingin menghapus soal ini dari bank soal?')) {
      onUpdateQuestions(questions.filter((q) => q.id !== id));
    }
  };

  const handleResetToDefault = () => {
    if (confirm('Kembalikan bank soal ke 65+ soal bawaan kurikulum standar TKR SMK?')) {
      onUpdateQuestions(INITIAL_QUESTIONS);
    }
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(questions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `bank_soal_tkr_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].question && parsed[0].options) {
          onUpdateQuestions(parsed);
          alert(`Berhasil mengimpor ${parsed.length} soal TKR!`);
        } else {
          alert('Format JSON tidak sesuai dengan skema soal TKR.');
        }
      } catch (err) {
        alert('Gagal membaca file JSON. Pastikan file valid.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-4xl bg-slate-900 border-2 border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">
                Bank Soal Produktif TKR SMK
              </h2>
              <p className="text-xs text-slate-400">
                Total Tersedia: <strong>{questions.length} Soal</strong> ({filteredQuestions.length} ditampilkan)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isEditing && (
              <button
                type="button"
                onClick={handleOpenAddForm}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-black text-xs transition flex items-center gap-1.5 shadow"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Soal Baru</span>
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {isEditing ? (
            /* --- FORM ADD / EDIT QUESTION --- */
            <form onSubmit={handleSaveQuestion} className="space-y-4 bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  {editingId ? 'Edit Soal TKR' : 'Tambah Soal Baru'}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Batal
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Topik Kejuruan TKR:
                  </label>
                  <select
                    value={formTopic}
                    onChange={(e) => setFormTopic(e.target.value as TkrTopic)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    {ALL_TOPICS.map((top) => (
                      <option key={top} value={top}>
                        {top}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Tingkat Kesulitan:
                  </label>
                  <select
                    value={formDifficulty}
                    onChange={(e) => setFormDifficulty(Number(e.target.value) as DifficultyLevel)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value={1}>Level 1: Pengetahuan Dasar</option>
                    <option value={2}>Level 2: Pemahaman Konsep</option>
                    <option value={3}>Level 3: Penerapan Prosedur Kerja</option>
                    <option value={4}>Level 4: Analisis Gejala Kerusakan (HOTS)</option>
                    <option value={5}>Level 5: Studi Kasus Kompleks Bengkel (HOTS)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Konteks Studi Kasus Bengkel (Opsional, untuk Soal HOTS):
                </label>
                <textarea
                  rows={2}
                  value={formCaseStudy}
                  onChange={(e) => setFormCaseStudy(e.target.value)}
                  placeholder="Contoh: Mesin brebet saat akselerasi, tekanan bahan bakar terukur 200 kPa..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Pertanyaan: *
                </label>
                <textarea
                  rows={2}
                  required
                  value={formQuestion}
                  onChange={(e) => setFormQuestion(e.target.value)}
                  placeholder="Tuliskan butir soal di sini..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                  <div key={opt}>
                    <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center justify-between">
                      <span>Pilihan {opt}: *</span>
                      <button
                        type="button"
                        onClick={() => setFormCorrect(opt)}
                        className={`text-[10px] px-2 py-0.5 rounded font-black ${
                          formCorrect === opt
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {formCorrect === opt ? '✓ KUNCI JAWABAN' : 'Set Kunci'}
                      </button>
                    </label>
                    <input
                      type="text"
                      required
                      value={
                        opt === 'A'
                          ? formOptA
                          : opt === 'B'
                          ? formOptB
                          : opt === 'C'
                          ? formOptC
                          : formOptD
                      }
                      onChange={(e) => {
                        if (opt === 'A') setFormOptA(e.target.value);
                        else if (opt === 'B') setFormOptB(e.target.value);
                        else if (opt === 'C') setFormOptC(e.target.value);
                        else setFormOptD(e.target.value);
                      }}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Pembahasan Teknis Lengkap:
                </label>
                <textarea
                  rows={3}
                  value={formExplanation}
                  onChange={(e) => setFormExplanation(e.target.value)}
                  placeholder="Uraikan dasar teori ilmiah otomotif, SOP perbaikan, dan mengapa pilihan lain salah..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black transition shadow"
                >
                  Simpan Soal
                </button>
              </div>
            </form>
          ) : (
            /* --- QUESTION LIST & FILTERS --- */
            <>
              {/* Filter Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 bg-slate-950/60 p-3 rounded-2xl border border-slate-800">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Cari pertanyaan / kata kunci..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <select
                    value={selectedTopicFilter}
                    onChange={(e) => setSelectedTopicFilter(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="ALL">Semua Topik Kejuruan ({questions.length})</option>
                    {ALL_TOPICS.map((top) => (
                      <option key={top} value={top}>
                        {top}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={selectedDiffFilter}
                    onChange={(e) => setSelectedDiffFilter(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="ALL">Semua Tingkat Kesulitan</option>
                    <option value="1">Level 1 - Pengetahuan Dasar</option>
                    <option value="2">Level 2 - Pemahaman Konsep</option>
                    <option value="3">Level 3 - Prosedur Kerja</option>
                    <option value="4">Level 4 - Analisis Gejala (HOTS)</option>
                    <option value="5">Level 5 - Studi Kasus Kompleks (HOTS)</option>
                  </select>
                </div>
              </div>

              {/* Questions Accordion / List */}
              <div className="space-y-3">
                {filteredQuestions.length === 0 ? (
                  <div className="text-center py-12 text-slate-500 text-sm">
                    Tidak ada soal yang cocok dengan filter pencarian.
                  </div>
                ) : (
                  filteredQuestions.map((q, idx) => (
                    <div
                      key={q.id}
                      className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 hover:border-slate-700 transition space-y-2.5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-slate-500">
                            #{idx + 1}
                          </span>
                          <span className="text-xs font-black text-amber-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                            {q.topic}
                          </span>
                          <span className="text-[11px] font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-500/30">
                            Lvl {q.difficulty}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleOpenEditForm(q)}
                            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                            title="Edit Soal"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(q.id)}
                            className="p-1.5 rounded-lg bg-slate-800 text-red-400 hover:text-white hover:bg-red-700 transition"
                            title="Hapus Soal"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {q.caseStudyContext && (
                        <div className="text-xs italic text-slate-400 bg-slate-900/60 p-2 rounded-lg border-l-2 border-amber-400">
                          {q.caseStudyContext}
                        </div>
                      )}

                      <p className="text-sm font-semibold text-white">
                        {q.question}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs">
                        {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                          <div
                            key={opt}
                            className={`p-2 rounded-lg border flex items-center gap-2 ${
                              q.correctAnswer === opt
                                ? 'bg-emerald-950/70 border-emerald-500/80 text-emerald-300 font-bold'
                                : 'bg-slate-900/50 border-slate-800 text-slate-400'
                            }`}
                          >
                            <span className="font-mono font-black">{opt}:</span>
                            <span className="truncate">{q.options[opt]}</span>
                            {q.correctAnswer === opt && (
                              <CheckCircle2 className="w-3.5 h-3.5 ml-auto text-emerald-400 flex-shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>

        {/* Modal Footer (Import/Export/Reset) */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExportJSON}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-1.5 shadow"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ekspor JSON</span>
            </button>

            <label className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow">
              <Upload className="w-3.5 h-3.5 text-amber-400" />
              <span>Impor JSON</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImportJSON}
                className="hidden"
              />
            </label>

            <button
              type="button"
              onClick={handleResetToDefault}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-red-950 text-slate-400 hover:text-red-300 text-xs font-bold transition flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset 65+ Soal Standar</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition"
          >
            Selesai & Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
