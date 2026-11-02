import React from 'react';
import { motion } from 'motion/react';
import { Layout, Globe, Cpu, Smartphone, ArrowRight, Award, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
  lang: 'en' | 'id';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick, lang }) => {
  const disciplines = [
    {
      title: 'Graphic Design',
      titleId: 'Desain Grafis',
      desc: 'Bespoke editorial identities, typography hierarchy, and visual branding.',
      descId: 'Identitas editorial khas, hierarki tipografi berkarakter, dan branding visual.',
      icon: Layout,
      color: 'border-b-[#2c98f0] text-[#2c98f0]',
      bg: 'hover:border-[#2c98f0]',
    },
    {
      title: 'Web Development',
      titleId: 'Pengembangan Web',
      desc: 'Modern, high-performance web systems built with React and semantic clean code.',
      descId: 'Sistem web modern berkecepatan tinggi dengan React dan kode semantik yang bersih.',
      icon: Globe,
      color: 'border-b-[#ec5453] text-[#ec5453]',
      bg: 'hover:border-[#ec5453]',
    },
    {
      title: 'Software UI',
      titleId: 'Antarmuka Software',
      desc: 'Complex data dashboards, ergonomic workflows, and design token libraries.',
      descId: 'Dashboard data kompleks, alur kerja ergonomis, dan pustaka token desain.',
      icon: Cpu,
      color: 'border-b-[#f9bf3f] text-[#f9bf3f]',
      bg: 'hover:border-[#f9bf3f]',
    },
    {
      title: 'Application Design',
      titleId: 'Desain Aplikasi Mobile',
      desc: 'Native iOS & Android mobile user experiences designed for thumb reachability.',
      descId: 'Pengalaman pengguna iOS & Android native yang dirancang untuk kenyamanan satu tangan.',
      icon: Smartphone,
      color: 'border-b-[#a84cb8] text-[#a84cb8]',
      bg: 'hover:border-[#a84cb8]',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 px-8 sm:px-14 lg:px-20 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#18191d]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            {lang === 'id' ? 'TENTANG KAMI' : 'ABOUT US'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
            {lang === 'id' ? 'Siapa Saya Sebenarnya?' : 'Who Am I?'}
          </h2>
        </motion.div>

        {/* Narrative & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base"
        >
          <div className="lg:col-span-7 space-y-4 font-light">
            <p className="text-lg text-neutral-900 dark:text-white font-normal">
              <strong>Hi, I'm Ghaitsa Kesyafa Syahlarana.</strong>{' '}
              {lang === 'id'
                ? 'Mahasiswa di Universitas Komputama Cilacap serta UI/UX Designer & Creative Developer yang berfokus menciptakan website modern dengan transisi animasi halus dan tata letak elegan.'
                : 'A passionate college student at Universitas Komputama Cilacap and creative UI/UX designer obsessed with building modern web experiences through refined anime transitions and editorial aesthetics.'}
            </p>
            <p>
              {lang === 'id'
                ? 'Saya menempuh studi di Universitas Komputama Cilacap sembari aktif merancang aplikasi dan antarmuka web modern. Setiap interaksi, pergerakan elemen, dan transisi layar dirancang untuk menghadirkan kenyamanan visual tanpa mengorbankan kecepatan loading.'
                : 'Balancing academic computer science studies at Universitas Komputama Cilacap with real-world interactive interface craft, I focus on turning functional code into tactile, delightful digital moments.'}
            </p>
          </div>

          <div className="lg:col-span-5 p-6 bg-[#f2f3f7] dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-neutral-900 dark:text-white">
              {lang === 'id' ? 'Filosofi Desain' : 'Design Philosophy'}
            </h3>
            <ul className="space-y-3 text-xs text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#2c98f0] shrink-0 mt-0.5" />
                <span>{lang === 'id' ? 'Kontinuitas visual dengan transisi animasi berbasis kurva fisik' : 'Visual continuity through physics-based anime transitions'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#2c98f0] shrink-0 mt-0.5" />
                <span>{lang === 'id' ? 'Bebas kekacauan ornamen buatan (zero-pill & anti-slop)' : 'Uncluttered editorial structure and zero-pill discipline'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#2c98f0] shrink-0 mt-0.5" />
                <span>{lang === 'id' ? 'Performa 60fps dengan akselerasi GPU murni' : '60fps compositor-only animations without frame drops'}</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 4 Discipline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {disciplines.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-6 bg-white dark:bg-[#1f2025] border border-neutral-200 dark:border-neutral-800 border-b-4 ${item.color} shadow-sm transition-all duration-300`}
              >
                <div className="mb-4 inline-block p-3 rounded-none bg-neutral-50 dark:bg-neutral-800">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">
                  {lang === 'id' ? item.titleId : item.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {lang === 'id' ? item.descId : item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
};
