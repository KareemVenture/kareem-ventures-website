import React, { useMemo } from 'react';
import { Sun, Infinity as InfinityIcon, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface VisionProps {
  t: any;
}

const Vision: React.FC<VisionProps> = ({ t }) => {
  // Memoize stars to prevent re-generation on re-renders which can cause animation glitches
  const stars = useMemo(() => [...Array(20)].map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2
  })), []);

  return (
    <section className="py-32 bg-[#020617] text-white relative overflow-hidden">
      
      {/* Cosmic Background */}
      <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617]"></div>
          
          {/* Animated Stars */}
          {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute bg-white rounded-full opacity-20"
                style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ 
                    duration: star.duration, 
                    repeat: Infinity,
                    delay: star.delay,
                    ease: "easeInOut"
                }}
              />
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
        >
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-slate-800/50 mb-8 border border-slate-700/50 backdrop-blur-sm shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                <Sun className="w-6 h-6 text-yellow-400 animate-pulse-slow" />
            </div>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                {t.vision.title}
            </h2>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
                {t.vision.subtitle}
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Vision Points */}
            <div className="space-y-6">
                {t.vision.points.map((point: string, idx: number) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="flex gap-5 items-start bg-slate-900/40 p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/5 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-emerald-900/30 flex items-center justify-center shrink-0 mt-1 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                            <ChevronRight className="w-4 h-4 text-emerald-400" />
                        </div>
                        <p className="text-lg text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors">{point}</p>
                    </motion.div>
                ))}
            </div>

             {/* Impact Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full"></div>
                <div className="relative bg-gradient-to-b from-[#0f172a] to-[#020617] border border-slate-800 p-12 rounded-[3rem] text-center shadow-2xl overflow-hidden">
                    
                    {/* Inner Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.5)]"></div>

                    <div className="w-24 h-24 mx-auto mb-8 relative">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse-slow"></div>
                        <InfinityIcon className="w-full h-full text-white relative z-10 opacity-90" strokeWidth={1} />
                    </div>
                    
                    <h4 className="text-3xl font-bold text-white mb-6">
                        {t.vision.impactTitle}
                    </h4>
                    <p className="text-slate-400 leading-relaxed text-lg font-light">
                        {t.vision.impactDesc}
                    </p>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Vision;