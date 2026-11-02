import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ArrowRight, ChevronLeft, ChevronRight, FileText, Sparkles } from 'lucide-react';
import { SLIDES, Slide } from '../data/portfolioData';

interface HeroSliderProps {
  onViewPortfolio: () => void;
  onOpenCv: () => void;
  lang: 'en' | 'id';
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onViewPortfolio,
  onOpenCv,
  lang,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto rotate slides if multiple slides exist
  useEffect(() => {
    if (isPaused || SLIDES.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlide: Slide = SLIDES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const slideTitle = lang === 'id' ? currentSlide.titleId : currentSlide.title;
  const slideKicker = lang === 'id' ? currentSlide.kickerId : currentSlide.kicker;
  const slideDesc = lang === 'id' ? currentSlide.descriptionId : currentSlide.description;
  const cta = lang === 'id' ? currentSlide.ctaTextId : currentSlide.ctaText;
  const secondaryCta = lang === 'id' ? currentSlide.secondaryCtaTextId : currentSlide.secondaryCtaText;

  // Split title e.g. "I am a Designer" -> "I am" and "a Designer"
  const titleParts = slideTitle.split(' ');
  const firstPart = titleParts.slice(0, 2).join(' ');
  const secondPart = titleParts.slice(2).join(' ');

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[92vh] flex items-center bg-white dark:bg-[#18191d] overflow-hidden border-b border-neutral-200 dark:border-neutral-800"
    >
      {/* Background ambient texture / subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* Main Grid: Split Layout */}
      <div className="relative w-full h-full flex flex-col lg:flex-row items-stretch justify-between">
        
        {/* Left Typographic Column */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-16 lg:py-24 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl space-y-6"
            >
              {/* Kicker */}
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#2c98f0] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{slideKicker}</span>
              </div>

              {/* Headline matching Colorlib Jackson Ford typography */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-neutral-900 dark:text-white leading-[1.08] tracking-tight text-balance">
                <span className="block font-normal">{firstPart}</span>
                <span className="block italic font-bold">{secondPart}</span>
              </h1>

              {/* Subtitle / Lead Prose */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-lg">
                {slideDesc}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onViewPortfolio}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>{cta}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenCv}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#2c98f0]" />
                  <span>{secondaryCta}</span>
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators matching the classic Colorlib template screenshot */}
          <div className="flex items-center gap-4 mt-12 pt-6">
            <div className="flex flex-col gap-1.5 py-1">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#2c98f0] bg-transparent inline-block" />
            </div>

            {SLIDES.length > 1 && (
              <div className="flex items-center gap-1 text-neutral-400 dark:text-neutral-600 ml-4">
                <button
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="p-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="p-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Editorial Portrait Column */}
        <div className="relative w-full lg:w-[48%] min-h-[420px] lg:min-h-full flex items-end justify-center overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full min-h-[460px] lg:min-h-full"
            >
              <img
                src="/src/assets/images/hero_ghaitsa_unikom_1792929900332.jpg"
                alt="Ghaitsa Kesyafa Syahlarana Editorial Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter grayscale contrast-110"
              />
              
              {/* Subtle edge gradient to blend seamlessly */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent lg:hidden pointer-events-none" />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#18191d] to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Floating anime badge indicator */}
          <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono tracking-wider text-neutral-800 dark:text-neutral-200 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR Q2/Q3 PROJECTS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
