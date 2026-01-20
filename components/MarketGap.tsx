import React, { useEffect, useState, useRef } from 'react';
import { Fingerprint, ArrowRight, Wallet, Ban, FileText, Search, Lock, RefreshCw, BarChart } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface MarketGapProps {
  t: any;
}

const MarketGap: React.FC<MarketGapProps> = ({ t }) => {
  const [count, setCount] = useState(0);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => (prev < 10 ? prev + 1 : 10));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.25,
        delayChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-slate-950 text-white transition-colors duration-500">
      
      {/* Dark Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold text-[10px] uppercase tracking-widest mb-4">
             <BarChart className="w-3 h-3" />
             {t.marketGap.label || "The Problem"}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
             {t.marketGap.title}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-light">
             {t.marketGap.subtitle}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-6 group"
          onMouseMove={handleMouseMove}
        >
            {/* Spotlight Card 1 */}
            <SpotlightCard mouseX={mouseX} mouseY={mouseY} variants={itemVariants}>
                <div className="h-32 w-full mb-6 rounded-2xl bg-slate-900 border border-white/10 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:12px_12px] opacity-50"></div>
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="flex flex-col items-center gap-1">
                             <div className="w-10 h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                                <Wallet className="w-5 h-5 text-emerald-400" />
                             </div>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center gap-1">
                             <div className="flex gap-1">
                                <motion.div animate={{ x: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-rose-500"></motion.div>
                                <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-rose-500 opacity-50"></motion.div>
                                <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-rose-500"></motion.div>
                             </div>
                             <Ban className="w-4 h-4 text-rose-500" />
                        </div>

                        <div className="flex flex-col items-center gap-1">
                             <div className="w-10 h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center opacity-50 grayscale">
                                <Wallet className="w-5 h-5 text-emerald-400" />
                             </div>
                        </div>
                    </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{t.marketGap.supplyTitle}</h3>
                <p className="text-slate-400 mb-6 text-sm font-light leading-relaxed">
                   {t.marketGap.supplyDesc}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <div>
                        <div className="text-2xl font-bold text-rose-400 font-mono">${count}B+</div>
                        <div className="text-[9px] uppercase text-slate-500 font-bold tracking-wider">Idle Money</div>
                    </div>
                </div>
            </SpotlightCard>

            {/* Spotlight Card 2 */}
            <SpotlightCard mouseX={mouseX} mouseY={mouseY} variants={itemVariants}>
                <div className="h-32 w-full mb-6 rounded-2xl bg-slate-900 border border-white/10 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:12px_12px] opacity-50"></div>
                    
                    <div className="relative z-10 w-20 h-24 bg-slate-800 border border-white/10 rounded-lg p-3 flex flex-col gap-2 shadow-2xl">
                         <div className="flex gap-2 mb-1">
                            <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center">
                                <Fingerprint className="w-4 h-4 text-slate-400" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <div className="h-1.5 w-full bg-slate-700 rounded-full"></div>
                                <div className="h-1.5 w-2/3 bg-slate-700 rounded-full"></div>
                            </div>
                         </div>
                         <div className="mt-auto flex justify-center">
                            <span className="text-[8px] font-mono text-rose-400 bg-rose-500/10 px-1 rounded border border-rose-500/20">NO AUDIT</span>
                         </div>
                         
                         <motion.div 
                            className="absolute top-0 left-0 w-full h-0.5 bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                         />
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Trust Gap</h3>
                <p className="text-slate-400 mb-6 text-sm font-light leading-relaxed">
                   {t.marketGap.gapDesc || "Donors don't know if money is safe."}
                </p>

                 <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-rose-500/10 rounded-md border border-rose-500/20">
                            <Search className="w-4 h-4 text-rose-500" />
                        </div>
                        <div className="text-[9px] uppercase text-slate-500 font-bold tracking-wider leading-tight">
                            Identity<br/>Unknown
                        </div>
                    </div>
                </div>
            </SpotlightCard>

             {/* Spotlight Card 3 */}
             <SpotlightCard mouseX={mouseX} mouseY={mouseY} variants={itemVariants}>
                <div className="h-32 w-full mb-6 rounded-2xl bg-slate-900 border border-white/10 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:12px_12px] opacity-50"></div>
                    <div className="relative z-10 scale-90">
                        <motion.div 
                            className="w-16 h-20 bg-slate-800 border border-white/10 shadow-sm rounded-lg absolute -left-6 top-2 rotate-[-15deg] z-0 flex items-center justify-center"
                        >
                            <FileText className="w-6 h-6 text-slate-600" />
                        </motion.div>
                        <motion.div 
                            className="w-16 h-20 bg-slate-800 border border-white/10 shadow-sm rounded-lg absolute -right-6 top-2 rotate-[15deg] z-0 flex items-center justify-center"
                        >
                             <FileText className="w-6 h-6 text-slate-600" />
                        </motion.div>
                        <motion.div 
                            animate={{ y: [-2, 2, -2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-16 h-20 bg-slate-800 border border-white/20 shadow-xl rounded-lg relative z-10 flex flex-col items-center justify-center p-2"
                        >
                             <Lock className="w-5 h-5 text-rose-400 mb-2" />
                             <div className="w-full h-1 bg-slate-700 mb-1"></div>
                             <div className="w-2/3 h-1 bg-slate-700"></div>
                        </motion.div>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{t.marketGap.demandTitle}</h3>
                <p className="text-slate-400 mb-6 text-sm font-light leading-relaxed">
                   {t.marketGap.demandDesc}
                </p>

                 <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-rose-500/10 rounded-md border border-rose-500/20">
                             <RefreshCw className="w-4 h-4 text-rose-500" />
                        </div>
                        <div className="text-[9px] uppercase text-slate-500 font-bold tracking-wider leading-tight">
                            No<br/>Updates
                        </div>
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center relative"
        >
            <a href="#how-it-works" className="inline-flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-emerald-400 transition-colors group">
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">The Solution</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 animate-bounce-x" />
                <span className="text-emerald-400">Trust Platform</span>
            </a>
        </motion.div>

      </div>
    </section>
  );
};

// Internal Spotlight Card Component
function SpotlightCard({ children, mouseX, mouseY, variants, className = "" }: any) {
  return (
    <motion.div
      variants={variants}
      className={`group relative border border-white/10 bg-white/5 overflow-hidden rounded-[2rem] p-8 hover:bg-white/10 transition-colors duration-500 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export default MarketGap;