import React from 'react';
import { Stars, ScanLine, FileCheck, Server, Activity, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessProps {
  t: any;
}

const Process: React.FC<ProcessProps> = ({ t }) => {
  return (
    <section id="how-it-works" className="py-20 md:py-24 relative z-10 overflow-hidden bg-emerald-50/30 dark:bg-[#050a09] transition-colors duration-500">
      
      {/* Background Flow Lines */}
      <div className="absolute inset-0">
          <svg className="absolute w-full h-full opacity-30 dark:opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M0,50 C20,40 40,60 60,50 C80,40 100,50 100,50" 
                fill="none" 
                stroke="currentColor" 
                className="text-emerald-500" 
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
          </svg>
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 dark:bg-kareem-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-full text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-4 shadow-sm dark:shadow-glow">
                <Stars className="w-3 h-3 text-amber-500 dark:text-kareem-gold" />
                The Operating System
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-[1.1]">
                {t.process.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto">
               From legal structuring to impact reporting, we've digitized the entire Waqf lifecycle into one seamless flow.
            </p>
        </div>

        {/* Connected Steps Grid */}
        <div className="grid md:grid-cols-4 gap-4 relative">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/20 dark:via-emerald-500/30 to-transparent z-0"></div>

            {t.process.steps.map((step: any, idx: number) => {
                const icons = [ScanLine, FileCheck, Server, Activity];
                const Icon = icons[idx];
                
                return (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className="relative z-10 group"
                    >
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-white/5 p-5 rounded-2xl hover:border-emerald-500/30 dark:hover:border-emerald-500/40 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 h-full flex flex-col items-center text-center shadow-sm dark:shadow-lg"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 transition-all duration-500 relative z-10 shadow-sm dark:shadow-glow-sm">
                                <Icon className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">{step.title}</h3>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">{step.desc}</p>
                            
                            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 w-full flex justify-center">
                                <span className="text-[9px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest group-hover:text-emerald-600 dark:group-hover:text-emerald-500/70 transition-colors">Step 0{idx + 1}</span>
                            </div>
                        </motion.div>

                        {/* Mobile Connector */}
                        {idx < 3 && (
                            <div className="md:hidden w-0.5 h-8 bg-emerald-500/20 dark:bg-emerald-500/30 mx-auto my-2"></div>
                        )}
                    </motion.div>
                );
            })}
        </div>

        {/* Value Prop Footer */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-full border border-slate-200 dark:border-white/10 py-3 px-6 flex flex-wrap justify-center gap-6 md:gap-12 mx-auto w-fit shadow-sm dark:shadow-none"
        >
             {t.process.valueProps.map((prop: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">{prop}</span>
                </div>
             ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Process;