import React from 'react';
import { Search, Users, FileSignature, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessProps {
  t: any;
}

const Process: React.FC<ProcessProps> = ({ t }) => {
  // Matched to the 4 steps: Verify (Shield/Check), Match (Users), Sign (Signature), Grow (TrendingUp)
  const icons = [ShieldCheck, Users, FileSignature, TrendingUp];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.25 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 0.8
      } 
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-[#0B1121] border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent dark:from-slate-900/50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 max-w-3xl mx-auto"
        >
            <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest mb-3 block">Simple Process</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight font-serif">
                {t.process.title}
            </h2>
        </motion.div>

        {/* Desktop Connected Workflow */}
        <div className="relative">
            
            {/* Connecting Pipeline Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-shimmer"></div>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
            >
                {t.process.steps.map((step: any, idx: number) => {
                    const Icon = icons[idx] || Search;
                    return (
                        <motion.div 
                            key={idx}
                            variants={itemVariants}
                            className="group relative"
                        >
                            {/* Step Card */}
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 h-full flex flex-col items-center text-center relative z-20 overflow-hidden transform group-hover:-translate-y-2">
                                
                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Icon Container */}
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-emerald-500/50 transition-all duration-300 z-10 relative">
                                        <Icon className="w-7 h-7 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" strokeWidth={1.5} />
                                    </div>
                                    {/* Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center text-xs font-bold border-4 border-white dark:border-slate-900 shadow-sm z-20">
                                        {idx + 1}
                                    </div>
                                </div>
                                
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors relative z-10">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light relative z-10">
                                    {step.desc}
                                </p>

                                {/* Bottom Indicator */}
                                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    <div className="w-8 h-1 bg-emerald-500 rounded-full mx-auto"></div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
        >
             <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group">
                 <span>Start Now</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;