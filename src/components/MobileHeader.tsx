import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from './Sidebar';

interface MobileHeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  lang: 'en' | 'id';
  onToggleLang: () => void;
  onOpenCv: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  activeSection,
  onNavigate,
  darkMode,
  onToggleDarkMode,
  lang,
  onToggleLang,
  onOpenCv,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-5 py-3.5 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          <div
            onClick={onOpenCv}
            className="w-9 h-9 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 cursor-pointer"
          >
            <img
              src="/src/assets/images/avatar_ghaitsa_unikom_1792929900181.jpg"
              alt="Ghaitsa Kesyafa Syahlarana"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-serif font-bold text-neutral-900 dark:text-white leading-tight">
              Ghaitsa Kesyafa Syahlarana
            </div>
            <div className="text-[10px] uppercase tracking-wider text-[#2c98f0] font-medium">
              Mahasiswa · Univ. Komputama Cilacap
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleLang}
            className="p-1.5 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            title="Switch Language"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={onToggleDarkMode}
            className="p-1.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            title="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation drawer"
            className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative w-4/5 max-w-xs h-full bg-[#f2f3f7] dark:bg-[#121316] p-6 flex flex-col justify-between overflow-y-auto z-10 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-3">
                    <img
                      src="/src/assets/images/avatar_ghaitsa_unikom_1792929900181.jpg"
                      alt="Ghaitsa Kesyafa Syahlarana"
                      className="w-10 h-10 rounded-full object-cover border border-neutral-300 dark:border-neutral-700"
                    />
                    <div>
                      <div className="font-serif font-bold text-neutral-900 dark:text-white">Ghaitsa Kesyafa Syahlarana</div>
                      <div className="text-[10px] text-[#2c98f0] uppercase tracking-wider">Universitas Komputama Cilacap</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <ul className="flex flex-col gap-3 py-6">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    const label = lang === 'id' ? item.labelId : item.label;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => handleItemClick(item.id)}
                          className={`w-full text-left py-2 px-3 text-xs tracking-widest uppercase font-medium rounded transition-colors ${
                            isActive
                              ? 'bg-[#2c98f0] text-white font-semibold'
                              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                          }`}
                        >
                          {label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenCv();
                  }}
                  className="w-full py-2.5 mb-4 text-xs uppercase font-semibold tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 transition-colors"
                >
                  {lang === 'id' ? 'Lihat Curriculum Vitae' : 'View Curriculum Vitae'}
                </button>
                <p className="text-[10px] text-neutral-400">
                  © 2026 Jackson Ford · Colorlib Redux
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
