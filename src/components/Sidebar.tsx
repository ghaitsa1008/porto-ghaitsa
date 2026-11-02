import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Dribbble, Mail, Moon, Sun, Globe } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  lang: 'en' | 'id';
  onToggleLang: () => void;
  onOpenCv: () => void;
}

export const NAV_ITEMS = [
  { id: 'home', label: 'HOME', labelId: 'BERANDA' },
  { id: 'about', label: 'ABOUT', labelId: 'TENTANG' },
  { id: 'services', label: 'SERVICES', labelId: 'LAYANAN' },
  { id: 'skills', label: 'SKILLS', labelId: 'KEAHLIAN' },
  { id: 'education', label: 'EDUCATION', labelId: 'PENDIDIKAN' },
  { id: 'experience', label: 'EXPERIENCE', labelId: 'PENGALAMAN' },
  { id: 'work', label: 'WORK', labelId: 'PORTOFOLIO' },
  { id: 'blog', label: 'BLOG', labelId: 'ARTIKEL' },
  { id: 'contact', label: 'CONTACT', labelId: 'KONTAK' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onNavigate,
  darkMode,
  onToggleDarkMode,
  lang,
  onToggleLang,
  onOpenCv,
}) => {
  return (
    <aside className="hidden lg:flex flex-col justify-between w-[300px] h-screen fixed left-0 top-0 z-30 bg-[#f2f3f7] dark:bg-[#121316] border-r border-neutral-200 dark:border-neutral-800 p-8 select-none overflow-y-auto">
      {/* Top Profile Lockup */}
      <div className="flex flex-col items-center text-center">
        {/* Avatar with subtle animated hover halo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative w-36 h-36 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white dark:border-neutral-800 bg-neutral-200 cursor-pointer group"
          onClick={onOpenCv}
          title="Click to view full Curriculum Vitae"
        >
          <img
            src="/src/assets/images/avatar_ghaitsa_unikom_1792929900181.jpg"
            alt="Ghaitsa Kesyafa Syahlarana"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] uppercase font-bold tracking-widest backdrop-blur-[2px]">
            {lang === 'id' ? 'Lihat CV' : 'View CV'}
          </div>
        </motion.div>

        {/* Identity & Subtitle */}
        <h1 className="text-lg font-serif font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
          Ghaitsa Kesyafa Syahlarana
        </h1>
        <div className="mt-1 text-[11px] font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
          <span className="text-[#2c98f0] font-semibold">MAHASISWA & UI/UX DESIGNER</span>
          <br />
          <span className="text-[10px] text-neutral-400">UNIVERSITAS KOMPUTAMA CILACAP</span>
        </div>

        {/* Quick Toggles: Language & Dark Mode */}
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="Switch Language"
          >
            <Globe className="w-3 h-3 text-[#2c98f0]" />
            <span>{lang.toUpperCase()}</span>
          </button>
          <button
            onClick={onToggleDarkMode}
            className="p-1.5 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            title="Toggle Light/Dark Theme"
          >
            {darkMode ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3 text-neutral-600" />}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="my-6">
        <ul className="flex flex-col items-center gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const label = lang === 'id' ? item.labelId : item.label;
            return (
              <li key={item.id} className="relative w-full text-center">
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`text-xs tracking-[0.2em] uppercase font-medium transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#2c98f0] font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#2c98f0]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Info & Socials */}
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Social Icons */}
        <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#2c98f0] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
            className="hover:text-pink-500 transition-colors"
          >
            <Dribbble className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => onNavigate('contact')}
            aria-label="Contact by email"
            className="hover:text-[#2c98f0] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright notice matching Colorlib Jackson Ford aesthetic */}
        <p className="text-[10px] leading-relaxed text-neutral-400 dark:text-neutral-500 max-w-[220px]">
          © Copyright 2026 All rights reserved | Made with ♥ by{' '}
          <span className="text-[#2c98f0]">Colorlib Redux</span>
          <br />
          <span className="text-[9px] text-neutral-400">Transisi Animasi & Motion React</span>
        </p>
      </div>
    </aside>
  );
};
