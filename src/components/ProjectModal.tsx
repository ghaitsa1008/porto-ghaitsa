import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, Briefcase, Tag, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: 'en' | 'id';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop with blur & smooth fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/70 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window with spring anime transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-none text-neutral-900 dark:text-neutral-100"
        >
          {/* Header Controls */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[#2c98f0] font-semibold">
                {project.categoryLabel}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-xs text-neutral-500 font-mono tabular-nums">{project.year}</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Project Hero Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Title & Metadata Strip */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
                {project.title}
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 p-4 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 text-xs">
                <div>
                  <span className="text-neutral-400 uppercase tracking-wider block mb-1">
                    {lang === 'id' ? 'Klien' : 'Client'}
                  </span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">{project.client}</span>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wider block mb-1">
                    {lang === 'id' ? 'Peran' : 'Role'}
                  </span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {lang === 'id' ? project.roleId : project.role}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-400 uppercase tracking-wider block mb-1">
                    {lang === 'id' ? 'Tahun' : 'Year'}
                  </span>
                  <span className="font-mono tabular-nums text-neutral-800 dark:text-neutral-200">{project.year}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-neutral-900 dark:text-neutral-100">
                {lang === 'id' ? 'Ikhtisar Proyek' : 'Project Overview'}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
                {lang === 'id' ? project.descriptionId : project.description}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-widest font-semibold text-neutral-900 dark:text-neutral-100">
                {lang === 'id' ? 'Capaian & Hasil' : 'Key Deliverables'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-neutral-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2c98f0] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-xs text-neutral-500">
                {lang === 'id' ? 'Tekan ESC atau klik luar untuk keluar' : 'Press ESC or click outside to dismiss'}
              </span>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                {lang === 'id' ? 'Tutup Pratinjau' : 'Close Preview'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
