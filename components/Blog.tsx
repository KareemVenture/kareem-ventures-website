import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogProps {
  t: any;
}

const Blog: React.FC<BlogProps> = ({ t }) => {
  // Only show top 3 items for landing page as requested
  const featured = t.blog.items.slice(0, 3);

  return (
    <section id="blog" className="py-32 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
      
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20 pointer-events-none"></div>
      
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 dark:from-[#0B1121] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
           
           {/* Sticky Title */}
           <div className="md:col-span-4 relative h-full">
             <div className="sticky top-32">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-widest mb-3 block">Insights</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                  Market <br/><span className="text-slate-400 dark:text-slate-500">Intelligence</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8">
                  {t.blog.subtitle}
                </p>
                <a href="#blog-all" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-slate-900/10">
                   {t.blog.viewAll} <ArrowRight className="w-4 h-4"/>
                </a>
             </div>
           </div>

           {/* Content - 3 Highlight Cards */}
           <div className="md:col-span-8">
              <div className="space-y-6">
                 {featured.map((post: any, idx: number) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                        <div>
                           <div className="inline-block px-3 py-1 bg-slate-50 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest rounded-full mb-4 border border-slate-200 dark:border-slate-700">
                             {post.category}
                           </div>
                           <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight tracking-tight">
                             {post.title}
                           </h3>
                           <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                              <span>•</span>
                              <span>{post.date}</span>
                           </div>
                        </div>
                        
                        <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all shadow-sm">
                             <ArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-500 group-hover:text-white" />
                        </div>
                      </div>
                    </motion.div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;