import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/portfolioData';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  lang: 'en' | 'id';
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost, lang }) => {
  return (
    <section id="blog" className="py-20 lg:py-28 px-8 sm:px-14 lg:px-20 border-b border-neutral-200 dark:border-neutral-800 bg-[#fafafa] dark:bg-[#151619]">
      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            {lang === 'id' ? 'ARTIKEL TERBARU' : 'READ OUR BLOG'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white">
            {lang === 'id' ? 'Wawasan & Pemikiran Desain' : 'Recent Thoughts & Articles'}
          </h2>
        </motion.div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => {
            const title = lang === 'id' ? post.titleId : post.title;
            const summary = lang === 'id' ? post.summaryId : post.summary;

            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => onSelectPost(post)}
                className="group cursor-pointer bg-white dark:bg-[#1f2025] border border-neutral-200 dark:border-neutral-800 p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Clean unboxed metadata with bullet separator */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                    <span className="text-[#2c98f0] font-semibold uppercase">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-white group-hover:text-[#2c98f0] transition-colors leading-snug">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light line-clamp-3">
                    {summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-mono">{post.date}</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-white group-hover:text-[#2c98f0] uppercase tracking-wider text-[11px] transition-colors">
                    <span>{lang === 'id' ? 'Baca Artikel' : 'Read Article'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
