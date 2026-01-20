import React from 'react';
import { LayoutDashboard, PieChart, Activity, ArrowUpRight, Wallet, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface SolutionBridgeProps {
  t: any;
}

const SolutionBridge: React.FC<SolutionBridgeProps> = ({ t }) => {
  return (
    <section id="solution" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#080c14] transition-colors duration-500">
      
      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* Moving Grid Lines */}
          <motion.div 
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20 dark:opacity-10 bg-[length:50px_50px]"
            style={{
                backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, .3) 25%, rgba(16, 185, 129, .3) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, .3) 75%, rgba(16, 185, 129, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, .3) 25%, rgba(16, 185, 129, .3) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, .3) 75%, rgba(16, 185, 129, .3) 76%, transparent 77%, transparent)'
            }}
          ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-[10px] uppercase tracking-widest mb-4 shadow-sm">
                <LayoutDashboard className="w-3 h-3" />
                Our Platform
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-[1.1]">
                {t.solution.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                {t.solution.description}
            </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-6"
            >
                {t.solution.cards.map((card: any, idx: number) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 group flex items-start gap-5 cursor-default"
                >
                    <motion.div 
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 border border-slate-100 dark:border-slate-700 shadow-sm"
                    >
                        <card.icon className="w-6 h-6 text-slate-400 dark:text-slate-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </motion.div>
                    
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{card.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-sm">
                            {card.description}
                        </p>
                    </div>
                </motion.div>
                ))}
            </motion.div>

            {/* Right: Dashboard Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-gradient-radial from-emerald-500/20 to-transparent blur-3xl"></div>
                
                <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-2xl border border-slate-100 dark:border-slate-800 animate-float">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 font-bold">K</div>
                            <div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Dashboard</div>
                                <div className="text-sm font-bold text-slate-900 dark:text-white">Admin Portal</div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full border border-emerald-100 dark:border-emerald-800">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                             <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Live</span>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                             <div className="text-slate-400 text-[10px] font-bold uppercase mb-2">Total Invested</div>
                             <div className="text-2xl font-bold text-slate-900 dark:text-white">14.2 B</div>
                             <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-bold mt-2">
                                <ArrowUpRight className="w-3 h-3" /> +12.5%
                             </div>
                        </div>
                        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30">
                             <div className="text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase mb-2">Donated</div>
                             <div className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">850 M</div>
                             <div className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-2">
                                <Activity className="w-3 h-3" /> Distributed
                             </div>
                        </div>
                    </div>

                    {/* Chart Area */}
                    <div className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 mb-6 bg-slate-50/50 dark:bg-slate-800/50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold text-slate-500">Yield Performance</span>
                            <PieChart className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="flex items-end gap-2 h-24 px-1">
                             {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                                 <motion.div 
                                    key={i} 
                                    className="w-full bg-emerald-500 dark:bg-emerald-600 rounded-t-md hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors cursor-pointer relative group" 
                                    style={{ height: `${h}%` }}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: 0.2 + (i * 0.05) }}
                                 >
                                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                         {h}% Yield
                                     </div>
                                 </motion.div>
                             ))}
                        </div>
                    </div>

                    {/* Notification Toast */}
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-slate-900/10 flex items-center justify-center">
                                <Wallet className="w-4 h-4" />
                            </div>
                            <div>
                                <div className="text-[10px] opacity-70 uppercase tracking-wide">Ready</div>
                                <div className="text-sm font-bold">School Expansion #4</div>
                            </div>
                        </div>
                        <button className="px-3 py-1.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            Approve
                        </button>
                    </motion.div>

                </div>
            </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SolutionBridge;