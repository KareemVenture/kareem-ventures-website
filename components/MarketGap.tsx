import React, { useEffect, useState } from 'react';
import { AlertTriangle, Fingerprint, FileX, ArrowRight, Wallet, Ban, FileText, X, Search, Lock, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface MarketGapProps {
  t: any;
}

const MarketGap: React.FC<MarketGapProps> = ({ t }) => {
  const [count, setCount] = useState(0);

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
        staggerChildren: 0.15,
        delayChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="why-us" className="py-20 relative overflow-hidden bg-slate-50 border-b border-slate-200">
      <div className="absolute inset-0 bg-pattern-islamic opacity-30"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-rose-100/40 to-transparent blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white border border-rose-100 text-rose-700 font-bold text-[10px] uppercase tracking-widest mb-4 shadow-sm">
             <AlertTriangle className="w-3 h-3" />
             Market Failure
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            The Capital-to-Impact <span className="text-rose-600">Disconnect</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Massive liquidity meets a lack of digital rails, creating a verification void that stalls social progress.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-3 gap-6"
        >
            {/* Visual 1: Broken Link */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group relative overflow-hidden">
                <div className="h-32 w-full mb-5 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden flex items-center justify-center group-hover:bg-rose-50/50 transition-colors">
                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-50"></div>
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="flex flex-col items-center gap-1">
                             <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center">
                                <Wallet className="w-5 h-5 text-emerald-600" />
                             </div>
                             <span className="text-[9px] font-bold text-slate-400 uppercase">Capital</span>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center gap-1">
                             <div className="flex gap-1">
                                <motion.div animate={{ x: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-rose-400"></motion.div>
                                <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-rose-400 opacity-50"></motion.div>
                                <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-rose-400"></motion.div>
                             </div>
                             <Ban className="w-4 h-4 text-rose-500" />
                        </div>

                        <div className="flex flex-col items-center gap-1">
                             <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center opacity-50 grayscale">
                                <Wallet className="w-5 h-5 text-emerald-600" />
                             </div>
                             <span className="text-[9px] font-bold text-slate-400 uppercase">Impact</span>
                        </div>
                    </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Deployment Inefficiency</h3>
                <p className="text-slate-500 mb-5 text-xs font-light leading-relaxed">
                   Billions in CSR and family office capital sit undeployed due to a lack of verified pipelines.
                </p>

                <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
                    <div>
                        <div className="text-2xl font-bold text-rose-600 font-mono">${count}B+</div>
                        <div className="text-[9px] uppercase text-slate-400 font-bold tracking-wider">Undeployed Capital</div>
                    </div>
                </div>
            </motion.div>

            {/* Visual 2: Verification Scan */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group relative overflow-hidden">
                <div className="h-32 w-full mb-5 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden flex items-center justify-center group-hover:bg-rose-50/50 transition-colors">
                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-50"></div>
                    
                    <div className="relative z-10 w-20 h-24 bg-white shadow-sm border border-slate-200 rounded-lg p-3 flex flex-col gap-2">
                         <div className="flex gap-2 mb-1">
                            <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center">
                                <Fingerprint className="w-4 h-4 text-slate-300" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
                                <div className="h-1.5 w-2/3 bg-slate-100 rounded-full"></div>
                            </div>
                         </div>
                         <div className="mt-auto flex justify-center">
                            <span className="text-[8px] font-mono text-rose-500 bg-rose-50 px-1 rounded border border-rose-100">UNVERIFIED</span>
                         </div>
                         
                         {/* Laser Scan Line */}
                         <motion.div 
                            className="absolute top-0 left-0 w-full h-0.5 bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                         />
                    </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">The Verification Void</h3>
                <p className="text-slate-500 mb-5 text-xs font-light leading-relaxed">
                   Without standardized KYC/KYB, institutional donors cannot audit impact or trace funds efficiently.
                </p>

                 <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-rose-50 rounded-md">
                            <Search className="w-4 h-4 text-rose-500" />
                        </div>
                        <div className="text-[9px] uppercase text-slate-400 font-bold tracking-wider leading-tight">
                            Identity<br/>Unknown
                        </div>
                    </div>
                </div>
            </motion.div>

             {/* Visual 3: Paperwork Stack */}
             <motion.div variants={itemVariants} className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group relative overflow-hidden">
                <div className="h-32 w-full mb-5 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden flex items-center justify-center group-hover:bg-rose-50/50 transition-colors">
                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-50"></div>
                    <div className="relative z-10 scale-90">
                        <motion.div 
                            className="w-16 h-20 bg-white border border-slate-200 shadow-sm rounded-lg absolute -left-6 top-2 rotate-[-15deg] z-0 flex items-center justify-center"
                        >
                            <FileText className="w-6 h-6 text-slate-200" />
                        </motion.div>
                        <motion.div 
                            className="w-16 h-20 bg-white border border-slate-200 shadow-sm rounded-lg absolute -right-6 top-2 rotate-[15deg] z-0 flex items-center justify-center"
                        >
                             <FileText className="w-6 h-6 text-slate-200" />
                        </motion.div>
                        <motion.div 
                            animate={{ y: [-2, 2, -2] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-16 h-20 bg-white border border-slate-300 shadow-lg rounded-lg relative z-10 flex flex-col items-center justify-center p-2"
                        >
                             <Lock className="w-5 h-5 text-rose-400 mb-2" />
                             <div className="w-full h-1 bg-slate-100 mb-1"></div>
                             <div className="w-2/3 h-1 bg-slate-100"></div>
                        </motion.div>
                    </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Analog Infrastructure</h3>
                <p className="text-slate-500 mb-5 text-xs font-light leading-relaxed">
                   Manual, paper-based contracts prevent scalability and real-time reporting, locking liquidity in friction.
                </p>

                 <div className="flex items-center gap-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-rose-50 rounded-md">
                             <RefreshCw className="w-4 h-4 text-rose-500" />
                        </div>
                        <div className="text-[9px] uppercase text-slate-400 font-bold tracking-wider leading-tight">
                            Zero<br/>Telemetry
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center relative"
        >
            <a href="#how-it-works" className="inline-flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-kareem-teal transition-colors group">
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">The Solution</span>
                <ArrowRight className="w-4 h-4 text-kareem-teal animate-bounce-x" />
                <span className="text-kareem-teal">Trust Infrastructure</span>
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketGap;