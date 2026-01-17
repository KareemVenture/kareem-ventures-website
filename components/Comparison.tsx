import React from 'react';
import { X, Check, Zap } from 'lucide-react';

interface ComparisonProps {
  t: any;
}

const Comparison: React.FC<ComparisonProps> = ({ t }) => {
  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden islamic-pattern-dark">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/4 w-full max-w-3xl h-full bg-kareem-teal/20 blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
           
           {/* Sticky Title */}
           <div className="md:col-span-4 relative h-full">
             <div className="sticky top-32 reveal">
                <div className="inline-block p-2 rounded-full bg-slate-800 mb-4 border border-slate-700 shadow-lg shadow-yellow-500/20">
                   <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The Tech <br/>
                  <span className="text-emerald-400">Alpha</span>
                </h2>
                <p className="text-slate-400 leading-relaxed font-light">
                  {t.comparison.subtitle}
                </p>
             </div>
           </div>

           {/* Content */}
           <div className="md:col-span-8">
              <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700 overflow-hidden reveal hover:border-emerald-500/30 transition-colors duration-500">
                {/* Header */}
                <div className="grid grid-cols-3 p-8 border-b border-slate-700 bg-slate-900/50">
                  <div className="col-span-1 text-xs font-mono text-slate-500 uppercase tracking-widest pt-2">Metric</div>
                  <div className="col-span-1 text-center font-bold text-slate-400 text-sm md:text-base">{t.comparison.traditional}</div>
                  <div className="col-span-1 text-center font-bold text-kareem-accent bg-kareem-accent/10 py-1.5 rounded-lg border border-kareem-accent/20 text-sm md:text-base shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    {t.comparison.kareem}
                  </div>
                </div>
                
                {/* Rows */}
                <div className="divide-y divide-slate-700/50">
                  {t.comparison.features.map((row: any, idx: number) => (
                    <div key={idx} className="grid grid-cols-3 p-8 items-center hover:bg-white/5 transition-colors group cursor-default">
                      <div className="col-span-1 font-medium text-slate-300 text-sm md:text-lg group-hover:text-white transition-colors">{row.name}</div>
                      
                      <div className="col-span-1 flex justify-center opacity-30 grayscale group-hover:opacity-50 transition-opacity">
                        {row.trad ? 
                          <Check className="w-5 h-5 text-slate-400" /> : 
                          <X className="w-5 h-5 text-slate-600" />
                        }
                      </div>
                      
                      <div className="col-span-1 flex justify-center">
                        {row.kar ? 
                          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-100 group-hover:scale-110 transition-transform">
                              <Check className="w-5 h-5 text-slate-900" strokeWidth={3} />
                          </div> : 
                          <X className="w-5 h-5 text-slate-600" />
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;