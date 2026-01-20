import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactProps {
  t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      
      {/* Intense Background Glows - Emerald & Gold */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Content */}
            <div className="max-w-xl">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-widest mb-3 block">Partnership</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                   {t.leadGen.title}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light">
                   {t.leadGen.subtitle}
                </p>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/30 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                            <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Consultation</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Schedule a call with our Nadzir advisory team.</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/30 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Verification</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">We conduct full KYB/KYC before deployment.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-emerald-900/5 relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {!submitted ? (
                    <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-5" 
                        onSubmit={handleSubmit}
                    >
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t.leadGen.form.name}</label>
                                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all dark:text-white text-sm shadow-sm" placeholder="Full Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t.leadGen.form.org}</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all dark:text-white text-sm shadow-sm" placeholder="Organization" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t.leadGen.form.email}</label>
                            <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all dark:text-white text-sm shadow-sm" placeholder="name@company.com" />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t.leadGen.form.interest}</label>
                            <textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all dark:text-white text-sm min-h-[120px] shadow-sm" placeholder="Tell us about your waqf goals..."></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20"
                        >
                            <span>{t.leadGen.form.submit}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.form>
                    ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-16 text-center"
                    >
                        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                           <CheckCircle className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Request Received</h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto text-sm">
                            Thank you for your interest in building a legacy. Our team will contact you within 24 hours.
                        </p>
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;