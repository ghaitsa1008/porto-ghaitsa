import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  Copy,
  Check,
  Send,
  Sun,
  Moon,
  ArrowUp,
  FileText,
  MapPin,
  CheckCircle2,
  Loader2,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { CvModal } from './components/CvModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('ghaitsa_dark_mode') === 'true';
  });
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Sync dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ghaitsa_dark_mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ghaitsa_dark_mode', 'false');
    }
  }, [darkMode]);

  // Back to top listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('kesyafaghaitsa@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Nama lengkap wajib diisi';
    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Format email tidak valid';
    }
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      errs.message = 'Pesan minimal 8 karakter';
    }

    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 6000);
    }, 900);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[var(--site-background)] text-[var(--site-on-background)] transition-colors duration-300 font-sans selection:bg-[#244c43] selection:text-white dark:selection:bg-[#e8eee7] dark:selection:text-[#141916]">
      
      {/* Header Bar - Responsive for all viewports (Mobile, Tablet, Laptop, Desktop PC) */}
      <header className="sticky top-0 z-40 w-full bg-[var(--site-background)]/90 backdrop-blur-md border-b border-[#cbd5cc]/50 dark:border-[#38483e]/50 transition-colors duration-300">
        <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5 flex justify-between items-center gap-4">
          
          {/* Brand */}
          <a
            href="#top"
            className="text-lg sm:text-xl font-bold tracking-tight text-[var(--site-on-background)] hover:opacity-80 transition-opacity flex items-center gap-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6b8c77] rounded-md px-1"
            aria-label="Ghaitsa Kesyafa - Kembali ke atas"
          >
            <span>GK</span>
            <span className="text-[#6b8c77] font-serif text-2xl leading-none">.</span>
          </a>

          {/* Desktop & Laptop Nav */}
          <nav
            aria-label="Navigasi utama"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-neutral-600 dark:text-neutral-300"
          >
            <a href="#tentang" className="hover:text-[var(--site-primary)] dark:hover:text-[#8eaa94] transition-colors py-1">
              Tentang
            </a>
            <a href="#pengalaman" className="hover:text-[var(--site-primary)] dark:hover:text-[#8eaa94] transition-colors py-1">
              Pengalaman
            </a>
            <a href="#keahlian" className="hover:text-[var(--site-primary)] dark:hover:text-[#8eaa94] transition-colors py-1">
              Keahlian
            </a>
            <button
              onClick={() => setIsCvOpen(true)}
              className="hover:text-[var(--site-primary)] dark:hover:text-[#8eaa94] transition-colors py-1 cursor-pointer focus:outline-none"
            >
              Curriculum Vitae
            </button>
            <a
              href="#kontak"
              className="px-4 py-2 rounded-full border border-[#cbd5cc] dark:border-[#435348] text-xs font-semibold hover:bg-[var(--site-secondary)] dark:hover:bg-[#25322a] transition-all"
            >
              Hubungi saya ↗
            </a>
          </nav>

          {/* Actions: Theme Toggle & Mobile Menu Trigger (WCAG 44px+ touch targets) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Ganti mode gelap/terang"
              className="w-10 h-10 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-[#cbd5cc] dark:border-[#435348] text-neutral-700 dark:text-neutral-300 hover:bg-[var(--site-secondary)] dark:hover:bg-[#25322a] transition-colors cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-[#cbd5cc] dark:border-[#435348] text-neutral-700 dark:text-neutral-300 hover:bg-[var(--site-secondary)] dark:hover:bg-[#25322a] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with smooth hardware animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-[#cbd5cc]/50 dark:border-[#38483e]/50 bg-[var(--site-background)] px-5 py-4 space-y-2 text-sm font-medium"
            >
              <a
                href="#tentang"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-[var(--site-primary)] active:text-[var(--site-primary)] min-h-[44px] flex items-center"
              >
                Tentang
              </a>
              <a
                href="#pengalaman"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-[var(--site-primary)] active:text-[var(--site-primary)] min-h-[44px] flex items-center"
              >
                Pengalaman
              </a>
              <a
                href="#keahlian"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-[var(--site-primary)] active:text-[var(--site-primary)] min-h-[44px] flex items-center"
              >
                Keahlian
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCvOpen(true);
                }}
                className="block w-full text-left py-2 text-neutral-700 dark:text-neutral-300 hover:text-[var(--site-primary)] active:text-[var(--site-primary)] min-h-[44px] flex items-center cursor-pointer"
              >
                Curriculum Vitae
              </button>
              <div className="pt-2">
                <a
                  href="#kontak"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 px-4 rounded-full border border-[#cbd5cc] dark:border-[#435348] bg-[var(--site-secondary)] dark:bg-[#202b25] text-xs font-semibold block min-h-[44px] flex items-center justify-center"
                >
                  Hubungi saya ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main id="top">

        {/* Hero Section - Fluid cross-hardware layout */}
        <section className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
          
          {/* Left: Typography & Intro */}
          <div className="md:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 sm:gap-3 text-xs uppercase tracking-[0.2em] font-bold text-[#6b8c77]"
            >
              <span className="w-5 sm:w-7 h-[1.5px] bg-[#6b8c77] inline-block" />
              <span>Portofolio pribadi</span>
            </motion.div>

            {/* Editorial Headline - responsive clamp across mobile, tablet, laptop, PC */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.4rem] font-serif font-normal leading-[1.03] tracking-tight text-[var(--site-on-background)] break-words"
            >
              Halo, saya<br />
              <em className="italic font-serif text-[#789681] dark:text-[#8eaa94]">Ghaitsa</em><br />
              Kesyafa Syahlarana.
            </motion.h1>

            {/* Intro Lead Prose */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light max-w-xl"
            >
              Mahasiswa di <strong>Universitas Komputama Cilacap</strong> yang tertarik pada pengembangan web, teknologi, dan menciptakan pengalaman digital yang mudah digunakan.
            </motion.p>

            {/* Action Buttons - adapts to phone vertical stack or laptop/desktop inline row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-2"
            >
              <a
                href="#pengalaman"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[var(--site-primary)] text-white text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-md transition-all min-h-[46px] cursor-pointer"
              >
                <span>Lihat pengalaman</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#kontak"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#cbd5cc] dark:border-[#435348] text-[var(--site-on-background)] text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 hover:bg-[var(--site-secondary)] dark:hover:bg-[#202b25] transition-all min-h-[46px] cursor-pointer"
              >
                <span>Mari terhubung</span>
                <ArrowUpRight className="w-4 h-4 text-[#6b8c77]" />
              </a>

              <button
                onClick={() => setIsCvOpen(true)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-full border border-dashed border-[#8eaa94] text-[var(--site-on-background)] text-xs sm:text-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-[var(--site-secondary)] dark:hover:bg-[#202b25] transition-all min-h-[46px] cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#6b8c77]" />
                <span>Lihat CV</span>
              </button>
            </motion.div>
          </div>

          {/* Right: Visual Orbit & Profile Card - scales proportionally without overflow */}
          <div className="md:col-span-5 relative flex items-center justify-center min-h-[350px] sm:min-h-[400px] md:min-h-[440px] py-4 overflow-hidden sm:overflow-visible">
            
            {/* Concentric Orbit Rings */}
            <div className="absolute w-[260px] xs:w-[300px] sm:w-[350px] md:w-[380px] max-w-[85vw] aspect-square rounded-full border border-[#d6ded5] dark:border-[#38483e] pointer-events-none animate-orbit-slow" />
            <div className="absolute w-[210px] xs:w-[240px] sm:w-[280px] md:w-[310px] max-w-[70vw] aspect-square rounded-full border border-[#d6ded5]/70 dark:border-[#38483e]/70 pointer-events-none" />
            <div className="absolute w-[160px] xs:w-[190px] sm:w-[220px] md:w-[240px] max-w-[55vw] aspect-square rounded-full border border-[#d6ded5]/40 dark:border-[#38483e]/40 pointer-events-none" />

            {/* Arch Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 w-[230px] xs:w-[260px] sm:w-[280px] md:w-[295px] rounded-t-[140px] xs:rounded-t-[170px] rounded-b-[24px] sm:rounded-b-[28px] bg-[var(--site-secondary)] p-5 sm:p-7 flex flex-col items-center justify-center text-center shadow-lg border border-[#d8e0d7] dark:border-[#334238]"
            >
              {/* Photo Avatar */}
              <div className="w-22 h-22 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white/80 dark:border-neutral-800/80 shadow-md mb-4 sm:mb-5 bg-[#c9d6c8] flex items-center justify-center">
                <img
                  src="/src/assets/images/avatar_ghaitsa_unikom_1792929900181.jpg"
                  alt="Ghaitsa Kesyafa Syahlarana"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Info */}
              <strong className="font-serif text-lg sm:text-xl font-normal text-[var(--site-on-secondary)]">
                Ghaitsa Kesyafa Syahlarana
              </strong>
              
              <small className="mt-2 text-xs text-[#526356] dark:text-[#a6b6aa] leading-relaxed">
                Mahasiswa Sistem Informasi<br />
                <span className="text-[#3d5e49] dark:text-[#b4c7b8] font-medium">Universitas Komputama Cilacap</span>
              </small>
            </motion.div>

            {/* Floating Note with Gentle Bobbing */}
            <motion.div
              className="absolute z-20 bottom-2 sm:bottom-6 right-0 sm:right-2 bg-white dark:bg-[#1f2823] border border-[#e1e5dd] dark:border-[#3b4c41] rounded-2xl p-3 sm:p-4 shadow-xl text-xs leading-snug animate-float max-w-[170px] xs:max-w-[195px] sm:max-w-[210px]"
            >
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6b8c77] font-semibold mb-0.5">
                Sedang bertumbuh
              </div>
              <b className="font-serif text-xs sm:text-sm font-normal text-neutral-900 dark:text-white block">
                Belajar • Berkarya • Berkembang
              </b>
            </motion.div>
          </div>

        </section>

        {/* Section 01: Tentang Saya */}
        <section id="tentang" className="py-14 sm:py-20 md:py-28 border-t border-[#cbd5cc]/50 dark:border-[#38483e]/50">
          <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
            
            {/* Section Label & Heading */}
            <div className="md:col-span-5 space-y-2.5 sm:space-y-3">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#6b8c77]">
                01 / Tentang saya
              </span>
              <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[var(--site-on-background)] leading-[1.08]">
                Mengubah ide menjadi sesuatu yang berarti.
              </h2>
            </div>

            {/* Narrative & Quote Aside */}
            <div className="md:col-span-7 space-y-6 sm:space-y-8">
              <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                Saya Ghaitsa Kesyafa Syahlarana, mahasiswa di <strong>Universitas Komputama Cilacap</strong> jurusan Sistem Informasi. Saya memiliki ketertarikan pada dunia teknologi dan pengembangan aplikasi, serta senang mempelajari hal baru untuk meningkatkan kemampuan di bidang digital.
              </p>

              {/* Editorial Aside Callout */}
              <div className="p-5 sm:p-7 border-l-4 border-[#8eaa94] bg-[var(--site-secondary)] rounded-r-2xl shadow-xs">
                <p className="font-serif italic text-base sm:text-lg md:text-xl text-[var(--site-on-secondary)] leading-relaxed">
                  “Saya percaya proses belajar, rasa ingin tahu, dan konsistensi adalah bagian penting untuk menghasilkan karya yang baik.”
                </p>
                <div className="mt-3 text-xs uppercase tracking-widest text-[#6b8c77] font-semibold">
                  — Ghaitsa Kesyafa Syahlarana
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 02: Pengalaman */}
        <section id="pengalaman" className="py-14 sm:py-20 md:py-28 bg-[var(--site-secondary)] text-[var(--site-on-secondary)] transition-colors duration-300">
          <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            
            {/* Header */}
            <div className="space-y-2.5 sm:space-y-3">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#6b8c77] dark:text-[#9bb8a4]">
                02 / Pengalaman
              </span>
              <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.08]">
                Belajar langsung di lingkungan profesional.
              </h2>
            </div>

            {/* Timeline Rows */}
            <div className="space-y-0">
              
              {/* Row 1: PKL Amikom */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6 sm:py-8 border-t border-[#cdd8cd] dark:border-[#38483e]">
                <div className="md:col-span-3 text-xs uppercase tracking-wider font-bold text-[#6a806e] dark:text-[#a0b8a4]">
                  Praktik Kerja Lapangan
                </div>
                <div className="md:col-span-9 space-y-2.5 sm:space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal">
                    Universitas Amikom Purwokerto
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4f5f54] dark:text-[#c4d2c7] leading-relaxed max-w-2xl font-light">
                    <strong className="font-semibold text-[var(--site-on-secondary)]">Bagian BAA (Biro Administrasi Akademik)</strong> — memperoleh pengalaman praktik kerja lapangan di lingkungan universitas, mengenal alur kerja administrasi akademik, serta belajar mengenai kedisiplinan, komunikasi, dan tanggung jawab dalam bekerja.
                  </p>
                  
                  {/* Clean Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2">
                    {['Administrasi akademik', 'Kerja tim', 'Problem solving', 'Komunikasi profesional'].map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border border-[#b9c8b9] dark:border-[#415347] bg-white/40 dark:bg-black/20 text-[#3d4d42] dark:text-[#d3ded5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2: Universitas Komputama Cilacap */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6 sm:py-8 border-t border-[#cdd8cd] dark:border-[#38483e]">
                <div className="md:col-span-3 text-xs uppercase tracking-wider font-bold text-[#6a806e] dark:text-[#a0b8a4]">
                  Pendidikan Tinggi (Aktif)
                </div>
                <div className="md:col-span-9 space-y-2.5 sm:space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal">
                    Universitas Komputama Cilacap
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4f5f54] dark:text-[#c4d2c7] leading-relaxed max-w-2xl font-light">
                    <strong className="font-semibold text-[var(--site-on-secondary)]">S1 Sistem Informasi</strong> — menempuh studi sarjana sistem informasi dengan pendalaman pada rekayasa perangkat lunak, perancangan antarmuka pengguna (UI/UX), dan teknologi web modern.
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2">
                    {['Rekayasa Web', 'UI/UX Design', 'Sistem Informasi', 'Basis Data'].map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border border-[#b9c8b9] dark:border-[#415347] bg-white/40 dark:bg-black/20 text-[#3d4d42] dark:text-[#d3ded5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 3: SMK RPL */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6 sm:py-8 border-t border-[#cdd8cd] dark:border-[#38483e]">
                <div className="md:col-span-3 text-xs uppercase tracking-wider font-bold text-[#6a806e] dark:text-[#a0b8a4]">
                  Pendidikan Menengah
                </div>
                <div className="md:col-span-9 space-y-2.5 sm:space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal">
                    SMK — Rekayasa Perangkat Lunak
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4f5f54] dark:text-[#c4d2c7] leading-relaxed max-w-2xl font-light">
                    Mempelajari dasar-dasar pengembangan perangkat lunak, logika pemrograman, dan proses pembuatan aplikasi digital.
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2">
                    {['HTML5 & CSS3', 'Dasar Pemrograman', 'Logika Perangkat Lunak'].map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full border border-[#b9c8b9] dark:border-[#415347] bg-white/40 dark:bg-black/20 text-[#3d4d42] dark:text-[#d3ded5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 03: Keahlian & Minat */}
        <section id="keahlian" className="py-14 sm:py-20 md:py-28">
          <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
            
            {/* Header */}
            <div className="space-y-2.5 sm:space-y-3">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#6b8c77]">
                03 / Keahlian & minat
              </span>
              <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.08]">
                Hal yang ingin terus saya kembangkan.
              </h2>
            </div>

            {/* 3 Skill Cards Grid - responsive across phone (1 col), tablet (2 col), laptop/PC (3 col) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              
              {/* Card 01 */}
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-6 sm:p-7 rounded-2xl border border-[#dce2d9] dark:border-[#38483e] bg-[var(--site-background)] flex flex-col justify-between shadow-xs hover:border-[#8eaa94] transition-colors"
              >
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#789681] font-mono">01</div>
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-normal text-[var(--site-on-background)]">
                    Pengembangan Web
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    Ketertarikan pada struktur, tampilan, dan pengembangan website modern yang bersih, cepat, dan responsif di setiap perangkat.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#cbd5cc]/50 dark:border-[#38483e]/50 text-[11px] font-mono text-[#6b8c77]">
                  HTML5 · CSS3 · Tailwind · React
                </div>
              </motion.article>

              {/* Card 02 */}
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-6 sm:p-7 rounded-2xl border border-[#dce2d9] dark:border-[#38483e] bg-[var(--site-background)] flex flex-col justify-between shadow-xs hover:border-[#8eaa94] transition-colors"
              >
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#789681] font-mono">02</div>
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-normal text-[var(--site-on-background)]">
                    Rekayasa Perangkat Lunak
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    Dasar pemrograman, pemecahan masalah logika terstruktur, dan pemahaman arsitektur aplikasi digital.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#cbd5cc]/50 dark:border-[#38483e]/50 text-[11px] font-mono text-[#6b8c77]">
                  Logic · Git · Database · Clean Architecture
                </div>
              </motion.article>

              {/* Card 03 - spans full on 2-col tablet for balanced visual weight */}
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="sm:col-span-2 lg:col-span-1 p-6 sm:p-7 rounded-2xl border border-[#dce2d9] dark:border-[#38483e] bg-[var(--site-background)] flex flex-col justify-between shadow-xs hover:border-[#8eaa94] transition-colors"
              >
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#789681] font-mono">03</div>
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-normal text-[var(--site-on-background)]">
                    Administrasi & Kolaborasi
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    Belajar bekerja teratur, berkomunikasi, dan berkolaborasi secara disiplin dari pengalaman PKL di universitas.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#cbd5cc]/50 dark:border-[#38483e]/50 text-[11px] font-mono text-[#6b8c77]">
                  Academic Workflow · Teamwork · Responsibility
                </div>
              </motion.article>

            </div>

          </div>
        </section>

        {/* Section 04: Kontak */}
        <section id="kontak" className="py-14 sm:py-20 md:py-28 bg-[var(--site-primary)] text-[var(--site-on-primary)] transition-colors duration-300">
          <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#c3d8c4]">
                04 / Kontak
              </span>
              <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.08] text-white">
                Punya kesempatan atau ide menarik?
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#d3e0d5] leading-relaxed font-light">
                Saya terbuka untuk terhubung, belajar, dan menjajaki kesempatan baru. Silakan hubungi saya melalui email langsung atau formulir pesan di samping.
              </p>

              {/* Direct Email Action Button & Copy */}
              <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                <a
                  href="mailto:kesyafaghaitsa@gmail.com"
                  className="px-6 py-3.5 rounded-full bg-[#f8f8f3] text-[#244c43] text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-white hover:shadow-lg transition-all min-h-[46px]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email saya ↗</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3.5 rounded-full border border-white/30 text-white text-xs font-medium inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer min-h-[46px]"
                  title="Salin email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Email tersalin!' : 'Salin alamat'}</span>
                </button>
              </div>

              <div className="pt-2 sm:pt-4 flex items-center gap-2 text-xs text-[#b8ccba] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#c3d8c4] shrink-0" />
                <span>Cilacap, Jawa Tengah · Indonesia</span>
              </div>
            </div>

            {/* Right: Working Direct Inquiry Form */}
            <div className="lg:col-span-7 bg-[#1e3f37] dark:bg-[#18231e] p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-5 sm:mb-6">
                Kirim pesan langsung
              </h3>

              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 sm:mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Terima kasih! Pesan Anda telah terkirim dan akan segera saya tanggapi.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form with 16px font-size on mobile to prevent iOS Safari auto-zoom */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#c3d8c4] text-xs uppercase tracking-wider font-semibold mb-1.5">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama lengkap"
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors text-base sm:text-sm"
                  />
                  {formErrors.name && <span className="text-red-300 text-[11px] mt-1 block">{formErrors.name}</span>}
                </div>

                <div>
                  <label className="block text-[#c3d8c4] text-xs uppercase tracking-wider font-semibold mb-1.5">
                    Email Anda *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors text-base sm:text-sm"
                  />
                  {formErrors.email && <span className="text-red-300 text-[11px] mt-1 block">{formErrors.email}</span>}
                </div>

                <div>
                  <label className="block text-[#c3d8c4] text-xs uppercase tracking-wider font-semibold mb-1.5">
                    Pesan *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pesan atau ide Anda..."
                    className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors resize-none text-base sm:text-sm"
                  />
                  {formErrors.message && <span className="text-red-300 text-[11px] mt-1 block">{formErrors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#244c43] text-xs font-bold uppercase tracking-wider hover:bg-[#f8f8f3] hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[46px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim pesan</span>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      {/* Footer - cross-hardware responsive */}
      <footer className="border-t border-[#cbd5cc]/50 dark:border-[#38483e]/50 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-3.5 sm:gap-4">
          <div>
            © 2026 Ghaitsa Kesyafa Syahlarana · Mahasiswa Universitas Komputama Cilacap
          </div>
          <div className="flex items-center gap-5 sm:gap-6">
            <button
              onClick={() => setIsCvOpen(true)}
              className="hover:text-[var(--site-primary)] dark:hover:text-[#8eaa94] transition-colors py-1 cursor-pointer"
            >
              Curriculum Vitae
            </button>
            <a
              href="#top"
              className="hover:text-[var(--site-primary)] dark:hover:text-[#8eaa94] transition-colors flex items-center gap-1 py-1"
            >
              <span>Kembali ke atas</span>
              <span>↑</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top button (WCAG 44px+ touch target) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 w-11 h-11 flex items-center justify-center rounded-full bg-[var(--site-primary)] text-white shadow-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* CV Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        lang="id"
      />

    </div>
  );
}
