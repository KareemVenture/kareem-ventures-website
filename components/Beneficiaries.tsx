import React from 'react';
import { Sprout, Heart, Store, School, Utensils, Stethoscope, TrendingUp, Activity, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BeneficiariesProps {
  t: any;
}

const Beneficiaries: React.FC<BeneficiariesProps> = ({ t }) => {
  return (
    <section id="impact" className="py-20 relative overflow-hidden bg-emerald-50/30">
      
       {/* Animated Islamic Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f4c3a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6"
        >
            <div className="max-w-2xl">
                <span className="text-kareem-teal font-bold text-[10px] uppercase tracking-widest mb-3 block">Asset Allocation</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                    Where Capital <span className="text-emerald-600">Generates Value</span>
                </h2>
            </div>
            <p className="max-w-md text-slate-600 text-base md:text-lg font-light leading-relaxed">
                {t.beneficiaries.subtitle}
            </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-3 gap-5">
            
            {/* Large Card: Productive Businesses */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 bg-white rounded-[2rem] p-6 relative overflow-hidden group hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 border border-slate-200"
            >
                {/* Parallax Background Element on Hover */}
                <motion.div 
                    className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                    initial={{ x: 20 }}
                    whileHover={{ x: 0 }}
                >
                    <div className="w-full h-full flex items-end justify-end gap-3 p-6">
                         {[30, 45, 40, 60, 55, 75, 90].map((h, i) => (
                             <motion.div 
                                key={i} 
                                className="w-8 md:w-10 bg-emerald-200 rounded-t-md relative group/bar transition-all duration-500 hover:bg-emerald-500" 
                                style={{ height: `${h}%` }}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                             >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold py-0.5 px-1.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                    {h}%
                                </div>
                             </motion.div>
                         ))}
                    </div>
                </motion.div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shadow-sm text-emerald-700 border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
                            <motion.div 
                                animate={{ scaleY: [1, 1.1, 1], originY: 1 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Sprout className="w-6 h-6" />
                            </motion.div>
                        </div>
                        <div>
                             <h3 className="text-xl font-bold text-slate-900 tracking-tight">{t.beneficiaries.assetsLabel}</h3>
                             <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase tracking-wider bg-emerald-100/50 w-fit px-2 py-0.5 rounded-full mt-1">
                                <TrendingUp className="w-3 h-3" /> Growth Assets
                             </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 max-w-md">
                        <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-kareem-teal/40 hover:shadow-lg transition-all duration-300 cursor-default group/item">
                            <div className="flex justify-between items-start mb-2">
                                <Utensils className="w-5 h-5 text-slate-400 group-hover/item:text-emerald-600 transition-colors" />
                                <ArrowUpRight className="w-3 h-3 text-emerald-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-0.5 text-sm">F&B & Services</h4>
                            <p className="text-[10px] text-slate-500 font-medium">Cafes, Catering, Laundry</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-kareem-teal/40 hover:shadow-lg transition-all duration-300 cursor-default group/item">
                            <div className="flex justify-between items-start mb-2">
                                <Store className="w-5 h-5 text-slate-400 group-hover/item:text-emerald-600 transition-colors" />
                                <ArrowUpRight className="w-3 h-3 text-emerald-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-0.5 text-sm">SME Retail</h4>
                            <p className="text-[10px] text-slate-500 font-medium">Halal Goods, Manufacturing</p>
                        </div>
                    </div>
                    
                    <p className="mt-6 text-slate-600 leading-relaxed border-l-2 border-emerald-500 pl-4 py-1 text-xs font-light max-w-sm bg-white/50 backdrop-blur-sm rounded-r-lg">
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
              className="md:col-span-1 bg-slate-900 rounded-[2rem] p-6 relative overflow-hidden group hover:shadow-2xl hover:shadow-rose-900/20 transition-all duration-500 text-white border border-slate-800"
            >
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                     <div className="absolute w-64 h-64 bg-rose-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
                     <svg viewBox="0 0 200 100" className="w-full text-rose-500 stroke-current fill-none stroke-2">
                        <path pathLength="1" className="animate-[dash_3s_linear_infinite]" d="M0 50 H50 L60 20 L80 80 L90 50 H200" strokeDasharray="200" strokeDashoffset="200" />
                     </svg>
                </div>
                
                <div className="relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                        <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Heart className="w-6 h-6 text-rose-400" fill="currentColor" fillOpacity={0.5} />
                        </motion.div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1 tracking-tight">{t.beneficiaries.yieldLabel}</h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-rose-400 uppercase tracking-wider mb-5 bg-rose-900/30 w-fit px-2 py-0.5 rounded-full border border-rose-500/30">
                        <Activity className="w-3 h-3 animate-pulse" /> Social ROI
                    </div>

                    <p className="text-slate-400 text-xs mb-8 border-l-2 border-rose-500 pl-3 leading-relaxed">
                        {t.beneficiaries.yieldDesc}
                    </p>

                    <div className="mt-auto space-y-2">
                        <div className="flex items-center gap-3 group/item p-2.5 rounded-lg hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm bg-white/5 border border-white/5">
                            <div className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center group-hover/item:bg-rose-600 transition-colors border border-slate-700">
                                <School className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-medium text-slate-200 text-xs">Islamic Schools</span>
                        </div>
                        <div className="flex items-center gap-3 group/item p-2.5 rounded-lg hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm bg-white/5 border border-white/5">
                            <div className="w-7 h-7 rounded bg-slate-800 flex items-center justify-center group-hover/item:bg-rose-600 transition-colors border border-slate-700">
                                <Stethoscope className="w-3.5 h-3.5" />
                            </div>
                            <span className="font-medium text-slate-200 text-xs">Clinics</span>
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