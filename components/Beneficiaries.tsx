import React from 'react';
import { Sprout, Heart, Store, School, Utensils, Stethoscope, TrendingUp, Activity, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BeneficiariesProps {
  t: any;
}

const Beneficiaries: React.FC<BeneficiariesProps> = ({ t }) => {
  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-[#f3f4f6] dark:bg-[#0c0c0c]">
      
       {/* Organic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239ca3af' fill-opacity='0.2' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Soft Glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-200/20 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
            <div className="max-w-2xl">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-widest mb-3 block">Asset Allocation</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                    Where Capital <span className="text-emerald-600 dark:text-emerald-400">Generates Value</span>
                </h2>
            </div>
            <p className="max-w-md text-slate-600 dark:text-slate-400 text-base md:text-lg font-light leading-relaxed">
                {t.beneficiaries.subtitle}
            </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">
            
            {/* Large Card: Productive Businesses */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 border border-slate-200 dark:border-slate-800"
            >
                {/* Background Decor */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 group-hover:rotate-6 transition-transform duration-300">
                            <Sprout className="w-7 h-7" />
                        </div>
                        <div>
                             <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{t.beneficiaries.assetsLabel}</h3>
                             <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider bg-emerald-100 dark:bg-emerald-900/30 w-fit px-2.5 py-1 rounded-full mt-1.5">
                                <TrendingUp className="w-3 h-3" /> Growth Assets
                             </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-lg relative">
                        <div className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 cursor-default group/item">
                            <div className="flex justify-between items-start mb-3">
                                <Utensils className="w-6 h-6 text-slate-400 group-hover/item:text-emerald-500 transition-colors" />
                                <ArrowUpRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">F&B & Services</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Cafes, Catering, Laundry</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-emerald-500/30 hover:shadow-lg transition-all duration-300 cursor-default group/item">
                            <div className="flex justify-between items-start mb-3">
                                <Store className="w-6 h-6 text-slate-400 group-hover/item:text-emerald-500 transition-colors" />
                                <ArrowUpRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">SME Retail</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Halal Goods, Manufacturing</p>
                        </div>
                    </div>
                    
                    <p className="mt-8 text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-emerald-500 pl-5 py-1 text-sm font-light max-w-md">
                        {t.beneficiaries.assetsDesc}
                    </p>
                </div>
            </motion.div>

            {/* Tall Card: Social Ventures */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-1 bg-slate-900 dark:bg-black rounded-[2.5rem] p-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-rose-900/20 transition-all duration-500 text-white border border-slate-800"
            >
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                     <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/40 via-slate-900 to-slate-900"></div>
                </div>
                
                <div className="relative z-10 h-full flex flex-col">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
                        <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Heart className="w-7 h-7 text-rose-400" fill="currentColor" fillOpacity={0.5} />
                        </motion.div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{t.beneficiaries.yieldLabel}</h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-rose-400 uppercase tracking-wider mb-6 bg-rose-900/30 w-fit px-2.5 py-1 rounded-full border border-rose-500/30">
                        <Activity className="w-3 h-3 animate-pulse" /> Social ROI
                    </div>

                    <p className="text-slate-400 text-sm mb-10 border-l-4 border-rose-500 pl-4 leading-relaxed font-light">
                        {t.beneficiaries.yieldDesc}
                    </p>

                    <div className="mt-auto space-y-3">
                        <div className="flex items-center gap-4 group/item p-3 rounded-xl hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm bg-white/5 border border-white/5">
                            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover/item:bg-rose-600 transition-colors border border-slate-700">
                                <School className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-slate-200 text-sm">Islamic Schools</span>
                        </div>
                        <div className="flex items-center gap-4 group/item p-3 rounded-xl hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm bg-white/5 border border-white/5">
                            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover/item:bg-rose-600 transition-colors border border-slate-700">
                                <Stethoscope className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-slate-200 text-sm">Clinics & Hospitals</span>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Beneficiaries;