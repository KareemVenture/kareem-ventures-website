import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

interface BlogProps {
  t: any;
}

const Blog: React.FC<BlogProps> = ({ t }) => {
  // Only show top 5 items, no images, simple cards
  const featured = t.blog.items.slice(0, 5);

  return (
    <section id="blog" className="py-32 bg-slate-50 border-t border-slate-100 overflow-hidden islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
           
           {/* Sticky Title */}
           <div className="md:col-span-4 relative h-full">
             <div className="sticky top-32 reveal">
                <span className="text-kareem-teal font-bold text-xs uppercase tracking-widest mb-3 block">Insights</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Market <br/><span className="text-slate-400">Intelligence</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                  {t.blog.subtitle}
                </p>
                <button className="text-kareem-teal font-bold flex items-center gap-2 hover:underline group">
                   {t.blog.viewAll} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                </button>
             </div>
           </div>

           {/* Content - Text Only List */}
           <div className="md:col-span-8">
              <div className="space-y-4">
                 {featured.map((post: any, idx: number) => (
                    <div key={idx} className={`group bg-white p-8 rounded-2xl border border-slate-200 hover:border-kareem-teal/50 transition-all duration-300 hover:shadow-lg cursor-pointer reveal reveal-delay-${idx+1}`}>
                      <div className="flex justify-between items-start gap-6">
                        <div>
                           <div className="inline-block px-2 py-1 bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider rounded mb-4 border border-slate-100">
                             {post.category}
                           </div>
                           <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-kareem-teal transition-colors leading-tight">
                             {post.title}
                           </h3>
                           <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                              <span>•</span>
                              <span>{post.date}</span>
                           </div>
                        </div>
                        
                        <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-kareem-teal group-hover:border-kareem-teal transition-all">
                             <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;