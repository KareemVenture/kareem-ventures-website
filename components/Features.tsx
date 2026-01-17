import React from 'react';

interface FeaturesProps {
  t: any;
}

const Features: React.FC<FeaturesProps> = ({ t }) => {
  return (
    <section id="why-us" className="py-32 bg-slate-50 relative overflow-hidden islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Left Title */}
          <div className="md:col-span-4 relative">
             <div className="sticky top-32 reveal">
                <div className="inline-block px-3 py-1 bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest rounded-full mb-6 shadow-sm">
                  Proof Points
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                  {t.problem.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  {t.problem.subtitle}
                </p>
             </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-8 space-y-6">
             {t.problem.items.map((item: any, idx: number) => (
               <div key={idx} className={`group bg-white border border-slate-200 p-8 rounded-2xl hover:border-kareem-teal/50 hover:shadow-xl transition-all duration-300 cursor-default reveal reveal-delay-${idx+1}`}>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                     <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-emerald-100">
                        <item.icon className="w-6 h-6 text-kareem-teal" strokeWidth={1.5} />
                     </div>
                     <div>
                        <div className="flex items-center gap-3 mb-2">
                           <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                              {item.stat}
                           </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-kareem-teal transition-colors">
                             {item.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed font-light">
                          {item.description}
                        </p>
                     </div>
                  </div>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;