import React from 'react';
import { Sun, Infinity, ChevronRight } from 'lucide-react';

interface VisionProps {
  t: any;
}

const Vision: React.FC<VisionProps> = ({ t }) => {
  return (
    <section className="py-32 bg-gradient-dark-mesh text-white relative overflow-hidden islamic-pattern-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16 reveal">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-slate-800/50 mb-6 border border-slate-700 backdrop-blur-sm">
                <Sun className="w-6 h-6 text-kareem-gold animate-pulse-slow" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                {t.vision.title}
            </h2>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
                {t.vision.subtitle}
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Vision Points */}
            <div className="space-y-6">
                {t.vision.points.map((point: string, idx: number) => (
                    <div key={idx} className="flex gap-4 items-start bg-slate-900/40 p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all reveal reveal-delay-1">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                            <ChevronRight className="w-4 h-4 text-emerald-400" />
                        </div>
                        <p className="text-lg text-slate-200 font-light leading-relaxed">{point}</p>
                    </div>
                ))}
            </div>

             {/* Impact Card */}
            <div className="relative reveal reveal-delay-2">
                <div className="absolute inset-0 bg-kareem-gold/10 blur-[80px] rounded-full"></div>
                <div className="relative bg-gradient-to-b from-slate-900 to-black border border-slate-800 p-10 rounded-[2.5rem] text-center shadow-2xl">
                    <Infinity className="w-20 h-20 text-white mx-auto mb-6 opacity-80" />
                    <h4 className="text-2xl font-bold text-white mb-4">
                        {t.vision.impactTitle}
                    </h4>
                    <p className="text-slate-400 leading-relaxed text-lg font-light">
                        {t.vision.impactDesc}
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Vision;