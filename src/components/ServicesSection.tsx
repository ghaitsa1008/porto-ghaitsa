import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Code2, Sparkles, Palette, Smartphone, Compass, ArrowRight, X, Check } from 'lucide-react';
import { SERVICES, Service } from '../data/portfolioData';

interface ServicesSectionProps {
  lang: 'en' | 'id';
}

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Code2,
  Sparkles,
  Palette,
  Smartphone,
  Compass,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 px-8 sm:px-14 lg:px-20 border-b border-neutral-200 dark:border-neutral-800 bg-[#fafafa] dark:bg-[#151619]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            {lang === 'id' ? 'LAYANAN KAMI' : 'WHAT I DO'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
            {lang === 'id' ? 'Keahlian & Layanan Unggulan' : 'Here are some of my expertise'}
          </h2>
        </motion.div>

        {/* 6 Grid Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = ICON_MAP[srv.iconName] || Layout;
            const title = lang === 'id' ? srv.titleId : srv.title;
            const desc = lang === 'id' ? srv.descriptionId : srv.description;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative p-8 bg-white dark:bg-[#1f2025] border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
                style={{ borderBottomColor: srv.color, borderBottomWidth: '3px' }}
              >
                <div className="space-y-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-none"
                    style={{ backgroundColor: `${srv.color}15`, color: srv.color }}
                  >
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-white">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    {desc}
                  </p>

                  {/* Clean unboxed tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 text-[11px] text-neutral-400 font-mono">
                    {srv.tags.map((tag, tIdx) => (
                      <span key={tIdx}>
                        {tag}
                        {tIdx < srv.tags.length - 1 && <span className="ml-1 text-neutral-300 dark:text-neutral-600">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/80">
                  <button
                    onClick={() => setSelectedService(srv)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white hover:text-[#2c98f0] dark:hover:text-[#2c98f0] transition-colors"
                  >
                    <span>{lang === 'id' ? 'Detail Layanan' : 'Service Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 shadow-2xl space-y-6 text-neutral-900 dark:text-neutral-100"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#2c98f0] font-semibold">
                    {lang === 'id' ? 'SPESIFIKASI LAYANAN' : 'SERVICE SPECIFICATION'}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-white mt-1">
                    {lang === 'id' ? selectedService.titleId : selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                {lang === 'id' ? selectedService.detailsId : selectedService.details}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                  {lang === 'id' ? 'Metodologi & Standar Kerja' : 'Core Methodology & Standards'}
                </div>
                <div className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>60fps hardware-accelerated kinetic transitions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Accessible semantic markup & clean component boundaries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Full responsive optimization across desktop, tablet & mobile</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  {lang === 'id' ? 'Selesai' : 'Dismiss'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
