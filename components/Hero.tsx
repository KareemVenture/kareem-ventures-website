import React from 'react';
import { ArrowRight, ShieldCheck, Globe, Users, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/50 to-white dark:from-slate-950 dark:via-emerald-950/20 dark:to-slate-900 animate-gradient-x bg-[length:200%_200%]"></div>
      
      <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white opacity-[0.2]"></div>
          
          {/* Spotlight Effects */}
          <motion.div 
            style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/20 rounded-[100%] blur-[100px] pointer-events-none opacity-50 animate-pulse-slow"
          ></motion.div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-amber-500/5 dark:bg-kareem-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
      
      <motion.div 
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center"
      >
        
        {/* Central Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 hover:border-emerald-500/50 transition-colors cursor-default shadow-sm dark:shadow-none"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-500 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase">{t.hero.label}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1] md:leading-[1]"
            >
              The Operating System for <span className="text-gradient-emerald">Islamic Capital</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              {t.hero.subheadline}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            >
              <a href="#opportunities" className="w-full sm:w-auto group px-8 py-4 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold rounded-full shadow-[0_10px_30px_-10px_rgba(16,185,129,0.4)] dark:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-emerald-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 active:scale-95 text-base">
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-white/5 text-slate-900 dark:text-white font-bold rounded-full border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/10 transition-all active:scale-95 text-base flex items-center justify-center backdrop-blur-sm shadow-sm dark:shadow-none">
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
        </div>

        {/* Floating Glass Cards Visualization */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full grid md:grid-cols-3 gap-6 max-w-5xl"
        >
            {/* Card 1 */}
            <motion.a 
                whileHover={{ y: -10, rotate: 1 }}
                href="#opportunities" 
                className="glass-card p-6 rounded-3xl relative overflow-hidden group cursor-pointer transition-all duration-300"
            >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Globe className="w-20 h-20 text-emerald-500" />
                </div>
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                             <Globe className="w-5 h-5" />
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">12-14%</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Target Annual Yield</div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 w-1/3 group-hover:w-full transition-all duration-500"></div>
            </motion.a>

            {/* Card 2 */}
            <motion.a 
                whileHover={{ y: -10, rotate: -1 }}
                href="#how-it-works" 
                className="glass-card p-6 rounded-3xl relative overflow-hidden group cursor-pointer transition-all duration-300"
            >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <ShieldCheck className="w-20 h-20 text-blue-500" />
                </div>
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                             <ShieldCheck className="w-5 h-5" />
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">100%</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Sharia Compliant (BWI)</div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-blue-500 w-1/3 group-hover:w-full transition-all duration-500"></div>
            </motion.a>

             {/* Card 3 */}
             <motion.div 
                whileHover={{ y: -10, rotate: 1 }}
                className="glass-card p-6 rounded-3xl relative overflow-hidden group transition-all duration-300 cursor-default"
            >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Users className="w-20 h-20 text-amber-500" />
                </div>
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 dark:bg-yellow-500/20 flex items-center justify-center border border-amber-500/20 dark:border-yellow-500/30 text-amber-600 dark:text-kareem-gold group-hover:scale-110 transition-transform">
                             <Users className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">150+</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Early Investors Joined</div>
                </div>
                 {/* Avatars */}
                 <div className="flex -space-x-2 mt-4">
                   {[1,2,3,4].map((i) => (
                       <div key={i} className="w-8 h-8 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] text-slate-500 dark:text-slate-400 shadow-sm">
                          <Users className="w-3 h-3" />
                       </div>
                   ))}
                   <div className="w-8 h-8 rounded-full border border-white dark:border-slate-900 bg-slate-800 dark:bg-slate-800 flex items-center justify-center text-[10px] text-white font-bold shadow-sm">+</div>
               </div>
            </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;