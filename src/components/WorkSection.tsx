import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
  lang: 'en' | 'id';
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject, lang }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'branding' | 'mobile' | 'web'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Works', labelId: 'Semua Karya' },
    { id: 'web', label: 'Web Applications', labelId: 'Aplikasi Web' },
    { id: 'mobile', label: 'Mobile Apps', labelId: 'Aplikasi Mobile' },
    { id: 'branding', label: 'Editorial & Brand', labelId: 'Editorial & Brand' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter || (activeFilter === 'web' && p.category === 'uiux'));

  return (
    <section id="work" className="py-20 lg:py-28 px-8 sm:px-14 lg:px-20 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#18191d]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header with Title and Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
              {lang === 'id' ? 'PORTOFOLIO' : 'MY WORK'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
              {lang === 'id' ? 'Karya & Proyek Pilihan' : 'Recent Work & Selected Projects'}
            </h2>
          </div>

          {/* Filter Bar (Functional buttons with active states) */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-x-auto shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {lang === 'id' ? tab.labelId : tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bento Grid Showcase */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const title = project.title;
              const desc = lang === 'id' ? project.descriptionId : project.description;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={() => onSelectProject(project)}
                  className="group relative cursor-pointer bg-neutral-50 dark:bg-[#1f2025] border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col justify-between"
                >
                  {/* Image Container with Zoom & Scrim */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    />

                    {/* Hover Overlay with Anime Transition */}
                    <div className="absolute inset-0 bg-[#2c98f0]/85 dark:bg-neutral-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white text-center backdrop-blur-xs">
                      <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs uppercase font-bold tracking-widest text-white">
                        {lang === 'id' ? 'Buka Detail Proyek' : 'View Case Study'}
                      </span>
                      <span className="text-[11px] text-white/80 mt-1 max-w-xs line-clamp-2">
                        {desc}
                      </span>
                    </div>

                    {/* Top Corner Category Strip */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider bg-white/95 dark:bg-neutral-900/95 text-neutral-900 dark:text-white shadow-xs">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Project Info Strip */}
                  <div className="p-6 flex items-center justify-between gap-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1f2025]">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-white group-hover:text-[#2c98f0] transition-colors">
                        {title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-neutral-400 font-mono">
                        <span>{project.client}</span>
                        <span>·</span>
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <div className="w-9 h-9 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-500 group-hover:border-[#2c98f0] group-hover:text-[#2c98f0] transition-colors shrink-0">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
