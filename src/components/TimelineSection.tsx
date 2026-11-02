import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, ChevronRight } from 'lucide-react';
import { EXPERIENCE, EDUCATION, TimelineItem } from '../data/portfolioData';

interface TimelineSectionProps {
  lang: 'en' | 'id';
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const items = activeTab === 'experience' ? EXPERIENCE : EDUCATION;

  return (
    <section id="experience" className="py-20 lg:py-28 px-8 sm:px-14 lg:px-20 border-b border-neutral-200 dark:border-neutral-800 bg-[#fafafa] dark:bg-[#151619]">
      <div className="max-w-4xl mx-auto space-y-14">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
              {lang === 'id' ? 'REKAM JEJAK' : 'CAREER & ACADEMICS'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
              {activeTab === 'experience'
                ? (lang === 'id' ? 'Pengalaman Kerja' : 'Work Experience')
                : (lang === 'id' ? 'Riwayat Pendidikan' : 'Education History')}
            </h2>
          </div>

          {/* Tab Switcher */}
          <div id="education" className="flex items-center gap-1.5 p-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shrink-0">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === 'experience'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Pengalaman' : 'Experience'}</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === 'education'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Pendidikan' : 'Education'}</span>
            </button>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {items.map((item, idx) => {
                const role = lang === 'id' ? item.roleId : item.role;
                const desc = lang === 'id' ? item.descriptionId : item.description;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Animated Timeline Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 bg-white dark:bg-neutral-900 border-2 border-[#2c98f0] rounded-full group-hover:scale-125 transition-transform" />

                    <div className="space-y-3 bg-white dark:bg-[#1f2025] p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-xs">
                      {/* Date & Company */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="font-serif font-bold text-base sm:text-lg text-neutral-900 dark:text-white">
                          {role}
                        </span>
                        <span className="font-mono tabular-nums text-neutral-400 dark:text-neutral-500">
                          {item.year}
                        </span>
                      </div>

                      <div className="text-xs uppercase tracking-wider text-[#2c98f0] font-semibold">
                        {item.company}
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                        {desc}
                      </p>

                      {/* Skills or disciplines */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2 text-[11px] text-neutral-400 font-mono">
                        {item.skills.map((skill, sIdx) => (
                          <span key={sIdx}>
                            {skill}
                            {sIdx < item.skills.length - 1 && <span className="ml-1 text-neutral-300 dark:text-neutral-600">·</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
