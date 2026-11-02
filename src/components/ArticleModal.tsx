import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, BookOpen, Share2, Check } from 'lucide-react';
import { BlogPost } from '../data/portfolioData';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  lang: 'en' | 'id';
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose, lang }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) return null;

  const title = lang === 'id' ? post.titleId : post.title;
  const paragraphs = lang === 'id' ? post.contentId : post.content;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-md cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-none text-neutral-900 dark:text-neutral-100"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3 text-xs text-neutral-500">
              <span className="uppercase tracking-widest text-[#2c98f0] font-semibold">{post.category}</span>
              <span>·</span>
              <span className="font-mono">{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                title="Copy article link"
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                aria-label="Close article"
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-6">
            <div className="space-y-3">
              <div className="text-xs text-neutral-400 font-mono">{post.date}</div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 dark:text-white leading-tight">
                {title}
              </h1>
            </div>

            <div className="h-px bg-neutral-200 dark:bg-neutral-800" />

            {/* Article Prose */}
            <div className="space-y-5 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base font-light">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="first-letter:text-3xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:font-bold first-letter:text-neutral-900 dark:first-letter:text-white">
                  {p}
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-200">
                  <img
                    src="/src/assets/images/avatar_ghaitsa_unikom_1792929900181.jpg"
                    alt="Ghaitsa Kesyafa Syahlarana"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white">Ghaitsa Kesyafa Syahlarana</div>
                  <div className="text-[11px] text-neutral-400">Mahasiswa Univ. Komputama Cilacap & Desainer</div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 text-xs font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                {lang === 'id' ? 'Selesai Membaca' : 'Finished Reading'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
