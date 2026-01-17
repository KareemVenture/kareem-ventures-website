import React from 'react';
import { ArrowRight, ShieldCheck, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-mesh">
      
      {/* Animated Islamic Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f4c3a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-kareem-teal/5 rounded-full blur-[60px] md:blur-[100px] animate-blob pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-100/30 rounded-full blur-[50px] md:blur-[80px] animate-blob pointer-events-none mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center text-center lg:text-left pt-6 lg:pt-0"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-kareem-teal/10 shadow-sm w-fit mb-5 md:mb-6 cursor-default mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-kareem-teal text-[10px] md:text-xs font-bold tracking-widest uppercase">{t.hero.label}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-5 tracking-tight leading-[1.1] md:leading-[1.1]"
            >
              {t.hero.headline}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg font-light mx-auto lg:mx-0"
            >
              {t.hero.subheadline}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 mb-6 w-full sm:w-auto justify-center lg:justify-start"
            >
              <a href="#opportunities" className="w-full sm:w-auto group px-6 py-3.5 bg-kareem-teal text-white font-bold rounded-full shadow-lg shadow-kareem-teal/20 hover:shadow-xl hover:bg-kareem-dark transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 active:scale-95 text-sm">
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="#how-it-works" className="w-full sm:w-auto px-6 py-3.5 bg-white text-slate-900 font-bold rounded-full border border-slate-200 hover:border-kareem-teal/30 hover:bg-slate-50 transition-all active:scale-95 text-sm flex items-center justify-center">
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="flex items-center justify-center lg:justify-start gap-3 mb-8"
            >
               <div className="flex -space-x-2">
                   {[1,2,3,4].map((i) => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 overflow-hidden">
                          <Users className="w-4 h-4" />
                       </div>
                   ))}
               </div>
               <div className="text-xs text-slate-500 font-medium">
                  Join <span className="font-bold text-slate-900">150+ Early</span> Waqf Investors
               </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-2 md:gap-4 border-t border-slate-200/60 pt-6"
            >
              {t.hero.stats.map((stat: any, idx: number) => (
                <div key={idx} className="group cursor-default">
                  <div className="text-lg md:text-2xl font-bold text-slate-900 group-hover:text-kareem-teal transition-colors duration-300 font-sans tracking-tight">{stat.value}</div>
                  <div className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest mt-0.5 font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block h-[500px] w-full perspective-1000"
          >
             {/* Main Dashboard Card - Linked to Opportunities */}
            <a href="#opportunities" className="absolute top-10 right-0 w-[90%] bg-white/90 backdrop-blur-2xl border border-white/60 rounded-3xl p-6 shadow-[0_30px_60px_-15px_rgba(15,76,58,0.08)] animate-float z-10 hover:shadow-[0_40px_80px_-15px_rgba(15,76,58,0.12)] transition-shadow duration-500 cursor-pointer block">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-kareem-teal to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-900/10">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900">Global Waqf Fund I</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5 tracking-wider">ISIN: ID-WKF-2024-A</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-sans font-bold text-slate-900 tracking-tight">Active</div>
                  <div className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-1 border border-emerald-100">Accepting LP</div>
                </div>
              </div>

              {/* Visualization */}
              <div className="space-y-4">
                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                    <span>Performance</span>
                    <span>12M</span>
                 </div>
                 <div className="h-40 flex items-end justify-between gap-2 px-1">
                    {[35, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
                      <motion.div 
                        key={i} 
                        className="w-full relative group cursor-pointer"
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                      >
                         <div 
                           className="w-full bg-slate-50 rounded-sm absolute bottom-0 transition-all duration-500 group-hover:bg-slate-100"
                           style={{ height: '100%' }}
                         ></div>
                         <motion.div 
                           className="absolute bottom-0 left-0 w-full bg-slate-800 rounded-sm transition-all duration-700 ease-out group-hover:bg-kareem-teal group-hover:shadow-[0_0_15px_rgba(15,76,58,0.3)]"
                           style={{ height: `${h}%` }}
                           initial={{ height: 0 }}
                           animate={{ height: `${h}%` }}
                           transition={{ duration: 0.8, delay: 0.8 + (i * 0.05) }}
                         ></motion.div>
                      </motion.div>
                    ))}
                 </div>
              </div>
            </a>

            {/* Compliance Card - Floating - Linked to Process */}
            <a href="#how-it-works" className="block absolute bottom-16 left-4 w-[240px]">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] animate-float z-20 hover:scale-105 transition-transform duration-300 cursor-pointer" 
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-1.5 bg-emerald-50 rounded-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-slate-900 font-bold text-xs">Sharia Compliant</div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[9px] text-slate-400 uppercase tracking-wider mb-1">
                      <span>AAOIFI Standards</span>
                      <span className="text-emerald-600 font-bold">Pass</span>
                    </div>
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-full rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[9px] text-slate-400 uppercase tracking-wider mb-1">
                      <span>Audit Status</span>
                      <span className="text-emerald-600 font-bold">Verified</span>
                    </div>
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;