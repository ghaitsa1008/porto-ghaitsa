import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Check, GraduationCap, Mail, Globe, MapPin, Briefcase } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'id';
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, lang }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      const element = document.createElement("a");
      const file = new Blob([
        `GHAITSA KESYAFA SYAHLARANA - CURRICULUM VITAE\n\nRole: Junior Web Developer & UI/UX Enthusiast\nInstitution: Universitas Komputama Cilacap (Mahasiswa Aktif S1 Sistem Informasi)\nAlumni: SMK Farmasi - Rekayasa Perangkat Lunak\nLocation: Cilacap, Jawa Tengah, Indonesia\nEmail: kesyafaghaitsa@gmail.com\n\nRingkasan:\nMahasiswa aktif di Universitas Komputama Cilacap jurusan Sistem Informasi dengan minat mendalam pada pengembangan web, teknologi antarmuka pengguna (UI/UX), dan pembuatan aplikasi digital yang ramah pengguna.\n\nRiwayat Pengalaman:\n1. Praktik Kerja Lapangan (PKL) - Universitas Amikom Purwokerto (Bagian Biro Administrasi Akademik / BAA)\n2. S1 Sistem Informasi - Universitas Komputama Cilacap (2023 - Sekarang)\n3. SMK Jurusan Rekayasa Perangkat Lunak (RPL)`
      ], { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = "Ghaitsa_Kesyafa_Syahlarana_CV_2026.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/75 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Sheet - Fully Responsive on Phone, Tablet & Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          className="relative z-10 w-full max-w-3xl max-h-[92vh] flex flex-col bg-[var(--site-background)] dark:bg-[#161c18] border border-[#cbd5cc] dark:border-[#38483e] shadow-2xl rounded-2xl overflow-hidden text-[var(--site-on-background)]"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[var(--site-background)]/95 dark:bg-[#161c18]/95 backdrop-blur-md border-b border-[#cbd5cc]/50 dark:border-[#38483e]/50">
            <span className="text-xs uppercase tracking-widest text-[#6b8c77] font-bold">
              {lang === 'id' ? 'Curriculum Vitae' : 'Official Resume'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[var(--site-primary)] text-white text-xs font-semibold hover:opacity-90 transition-opacity min-h-[40px] sm:min-h-[44px] cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Tersimpan</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">{downloading ? 'Memproses...' : 'Unduh CV'}</span>
                    <span className="xs:hidden">Unduh</span>
                  </>
                )}
              </button>
              <button
                onClick={onClose}
                aria-label="Tutup CV"
                className="w-10 h-10 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors hover:bg-[var(--site-secondary)] dark:hover:bg-[#25322a] min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-4 sm:p-7 md:p-10 space-y-6 sm:space-y-8 overflow-y-auto">
            {/* Profile Lockup */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 border-b border-[#cbd5cc]/50 dark:border-[#38483e]/50">
              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[var(--site-on-background)] leading-tight">
                  Ghaitsa Kesyafa Syahlarana
                </h2>
                <div className="text-xs font-bold uppercase tracking-wider text-[#6b8c77]">
                  Mahasiswa S1 Sistem Informasi · Universitas Komputama Cilacap
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-500 dark:text-neutral-400 pt-2 font-mono">
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#6b8c77]" /> Cilacap, Jawa Tengah</span>
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#6b8c77]" /> kesyafaghaitsa@gmail.com</span>
                </div>
              </div>

              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#cbd5cc] dark:border-[#38483e] shrink-0 self-start sm:self-center bg-[#c9d6c8]">
                <img
                  src="/src/assets/images/avatar_ghaitsa_unikom_1792929900181.jpg"
                  alt="Ghaitsa Kesyafa Syahlarana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#6b8c77]">
                Ringkasan Profil
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                Mahasiswa aktif di Universitas Komputama Cilacap (UNIKOM Cilacap) program studi Sistem Informasi dengan latar belakang kejuruan Rekayasa Perangkat Lunak. Memiliki ketertarikan kuat pada pengembangan website modern, perancangan antarmuka pengguna (UI/UX) yang ergonomis, serta pengalaman berharga dari praktik kerja lapangan dalam tata kelola administrasi akademik dan kerja tim.
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6b8c77]">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Pengalaman Kerja & Praktik</span>
              </div>
              <div className="space-y-4 border-l-2 border-[#8eaa94]/60 pl-4 ml-1">
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-0.5">
                    <span className="font-serif text-base font-normal text-[var(--site-on-background)]">
                      Praktik Kerja Lapangan (PKL) — Biro Administrasi Akademik (BAA)
                    </span>
                    <span className="font-mono text-neutral-400 text-[11px]">Universitas Amikom Purwokerto</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    Mengenal alur kerja operasional administrasi akademik perguruan tinggi, koordinasi berkas dan data, serta mempraktikkan etos kerja profesional, kedisiplinan, dan pemecahan masalah secara langsung.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6b8c77]">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Pendidikan</span>
              </div>
              <div className="space-y-4 border-l-2 border-[#8eaa94]/60 pl-4 ml-1">
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-0.5">
                    <span className="font-serif text-base font-normal text-[var(--site-on-background)]">
                      S1 Sistem Informasi (Mahasiswa Aktif)
                    </span>
                    <span className="font-mono text-neutral-400 text-[11px]">2023 – Sekarang</span>
                  </div>
                  <div className="text-xs text-[#6b8c77] font-semibold">Universitas Komputama Cilacap</div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    Fokus studi pada sistem informasi, rekayasa web modern, analisis proses bisnis, perancangan antarmuka pengguna, dan manajemen basis data.
                  </p>
                </div>

                <div className="space-y-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-0.5">
                    <span className="font-serif text-base font-normal text-[var(--site-on-background)]">
                      SMK — Rekayasa Perangkat Lunak (RPL)
                    </span>
                    <span className="font-mono text-neutral-400 text-[11px]">Lulusan</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                    Mempelajari dasar pemrograman, logika kode, struktur web HTML & CSS, dan prinsip rekayasa perangkat lunak.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Dismiss */}
            <div className="pt-4 border-t border-[#cbd5cc]/50 dark:border-[#38483e]/50 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full border border-[#cbd5cc] dark:border-[#435348] text-xs font-semibold hover:bg-[var(--site-secondary)] dark:hover:bg-[#25322a] transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
              >
                Tutup
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
