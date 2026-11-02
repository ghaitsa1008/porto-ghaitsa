import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILLS, Skill } from '../data/portfolioData';

interface SkillsSectionProps {
  lang: 'en' | 'id';
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'design' | 'frontend' | 'architecture'>('all');

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory || (activeCategory === 'architecture' && s.category === 'tools'));

  const categories = [
    { id: 'all', label: 'All Disciplines', labelId: 'Semua Bidang' },
    { id: 'design', label: 'Design & Motion', labelId: 'Desain & Animasi' },
    { id: 'frontend', label: 'Frontend & Web', labelId: 'Frontend & Web' },
    { id: 'architecture', label: 'Architecture & Tools', labelId: 'Arsitektur & Alat' },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 px-8 sm:px-14 lg:px-20 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#18191d]">
      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
              {lang === 'id' ? 'SPESIALISASI SAYA' : 'MY SPECIALTY'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
              {lang === 'id' ? 'Keahlian & Kemahiran Teknis' : 'My Skills & Proficiencies'}
            </h2>
          </div>

          {/* Interactive Category Filter Tabs (Single-line controls with button elements) */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-x-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {lang === 'id' ? cat.labelId : cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Narrative introduction */}
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-3xl">
          {lang === 'id'
            ? 'Setiap baris kode dan komponen antarmuka dibangun dengan standar modern. Saya fokus pada keharmonisan antara estetika visual, transisi animasi fluida, dan performa tinggi.'
            : 'From meticulous design token composition in Figma to production-grade reactive components in React 19, my workflow is rooted in zero latency, semantic structure, and natural kinetic feedback.'}
        </p>

        {/* 2-Column Animated Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="space-y-2.5"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                <span>{skill.name}</span>
              </div>

              {/* Progress Bar Track */}
              <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="h-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
