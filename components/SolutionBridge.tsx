import React from 'react';
import { LayoutDashboard, PieChart, Activity, ArrowUpRight, Wallet, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface SolutionBridgeProps {
  t: any;
}

const SolutionBridge: React.FC<SolutionBridgeProps> = ({ t }) => {
  return (
    <section id="solution" className="py-20 relative overflow-hidden bg-white border-b border-slate-100">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-300/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
      <div className="absolute inset-0 bg-pattern-islamic opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-[10px] uppercase tracking-widest mb-4">
                <LayoutDashboard className="w-3 h-3" />
                Our Platform
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.1]">
                {t.solution.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
                {t.solution.description}
            </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-4"
            >
                {t.solution.cards.map((card: any, idx: number) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-md p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 hover:border-kareem-teal/30 transition-all duration-300 group flex items-start gap-5 hover:-translate-y-1"
                >
                    <motion.div 
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 group-hover:bg-kareem-teal transition-all duration-300 border border-slate-100 shadow-sm"
                    >
                        <card.icon className="w-5 h-5 text-kareem-teal group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </motion.div>
                    
                    <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1 tracking-tight group-hover:text-kareem-teal transition-colors">{card.title}</h3>
                        <p className="text-slate-600 leading-relaxed font-light text-sm">
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
              className="relative lg:h-[550px] flex items-center"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-full blur-[60px] animate-pulse-slow pointer-events-none"></div>
                
                <div className="relative w-full bg-white rounded-[2rem] p-6 shadow-[0_40px_100px_-20px_rgba(15,76,58,0.15)] border border-slate-100 animate-float overflow-hidden">
                    <div className="absolute inset-0 bg-pattern-islamic opacity-10 pointer-events-none"></div>

                    <div className="relative flex justify-between items-center mb-6 pb-4 border-b border-slate-50">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-sm">K</div>
                            <div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Nadzir Portal</div>
                                <div className="text-xs font-bold text-slate-900">Yayasan Wakaf Indonesia</div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                             <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-wider">Live Sync</span>
                        </div>
                    </div>

                    <div className="relative grid grid-cols-2 gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                             <div className="text-slate-400 text-[10px] font-bold uppercase mb-1">Total AUM</div>
                             <div className="text-lg font-bold text-slate-900">IDR 14.2 B</div>
                             <div className="flex items-center gap-1 text-[9px] text-emerald-600 font-bold mt-1">
                                <ArrowUpRight className="w-2.5 h-2.5" /> +12.5%
                             </div>
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                             <div className="text-emerald-800/60 text-[10px] font-bold uppercase mb-1">Social Dividend</div>
                             <div className="text-lg font-bold text-emerald-900">IDR 850 M</div>
                             <div className="flex items-center gap-1 text-[9px] text-emerald-700 font-bold mt-1">
                                <Activity className="w-2.5 h-2.5" /> Distributed
                             </div>
                        </div>
                    </div>

                    <div className="relative p-3 rounded-xl border border-slate-100 mb-4 bg-white/50">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[10px] font-bold text-slate-500">Yield Performance</span>
                            <PieChart className="w-3.5 h-3.5 text-slate-300" />
                        </div>
                        <div className="flex items-end gap-1.5 h-20 px-1">
                             {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                                 <motion.div 
                                    key={i} 
                                    className="w-full bg-emerald-500 rounded-t-sm hover:bg-emerald-600 transition-colors cursor-pointer" 
                                    style={{ height: `${h}%`, opacity: 0.5 + (i * 0.1) }}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: 0.2 + (i * 0.05) }}
                                 ></motion.div>
                             ))}
                        </div>
                    </div>

                    <div className="relative flex items-center justify-between p-3 rounded-xl bg-slate-900 text-white shadow-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                <Wallet className="w-3 h-3" />
                            </div>
                            <div>
                                <div className="text-[9px] opacity-70">Payout Ready</div>
                                <div className="text-xs font-bold">School Expansion #4</div>
                            </div>
                        </div>
                        <button className="px-2.5 py-1 bg-white text-slate-900 rounded-md text-[10px] font-bold hover:bg-slate-200 transition-colors">
                            Approve
                        </button>
                    </div>

                </div>
            </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SolutionBridge;