import React, { useState } from 'react';
import { Send, CheckCircle, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactProps {
  t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset after 3 seconds for demo purposes
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-900 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-pattern-islamic-dark opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 relative"
          >
             <div className="md:sticky md:top-32">
                <span className="text-emerald-400 font-bold text-[11px] uppercase tracking-widest mb-4 block">Partnership</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                  Start The <br/><span className="text-emerald-500/50">Conversation</span>
                </h2>
                <p className="text-emerald-100/70 text-lg mb-10 max-w-md font-light leading-relaxed">
                  {t.leadGen.subtitle}
                </p>
                
                <div className="space-y-4 pt-8 border-t border-emerald-900/50">
                    <div className="flex items-center gap-3 text-emerald-100/80">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="font-medium">Access to deal flow</span>
                    </div>
                    <div className="flex items-center gap-3 text-emerald-100/80">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="font-medium">Compliance audit reports</span>
                    </div>
                    <div className="flex items-center gap-3 text-emerald-100/80">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="font-medium">Direct Nadzir access</span>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl overflow-hidden h-40 w-full border border-emerald-500/30 shadow-lg relative group bg-slate-950/50 hidden md:block">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <div className="relative p-2 bg-slate-900 rounded-full border border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                                <MapPin className="w-4 h-4 text-emerald-400" />
                            </div>
                        </div>
                    </div>
                    
                     <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white font-bold border border-emerald-500/30">
                        Jakarta HQ
                     </div>
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8"
          >
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-none border border-transparent dark:border-slate-800 relative overflow-hidden transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6 md:space-y-8" 
                      onSubmit={handleSubmit}
                    >
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.leadGen.form.name}</label>
                                <input required type="text" className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:focus:ring-emerald-500/20 text-slate-900 dark:text-white transition-all outline-none font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.leadGen.form.org}</label>
                                <input required type="text" className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:focus:ring-emerald-500/20 text-slate-900 dark:text-white transition-all outline-none font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600" placeholder="Organization Name" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.leadGen.form.email}</label>
                            <input required type="email" className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:focus:ring-emerald-500/20 text-slate-900 dark:text-white transition-all outline-none font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600" placeholder="work@company.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t.leadGen.form.interest}</label>
                            <div className="relative">
                                <select className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:bg-white dark:focus:bg-slate-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:focus:ring-emerald-500/20 text-slate-900 dark:text-white transition-all outline-none font-medium appearance-none cursor-pointer">
                                    <option>Productive Waqf (SME Equity)</option>
                                    <option>Fixed Yield Assets</option>
                                    <option>Corporate CSR Partnership</option>
                                    <option>Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 dark:text-slate-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-3 mt-4 hover:shadow-xl hover:shadow-emerald-900/20 active:scale-[0.99] group"
                        >
                            <span>{t.leadGen.form.submit}</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-xs text-slate-400 text-center mt-4">{t.leadGen.disclaimer}</p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-20 text-center"
                    >
                      <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Request Received</h3>
                      <p className="text-slate-600 dark:text-slate-400 max-w-sm">Our team will review your credentials and grant Data Room access within 24 hours.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-8 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline">Send another request</button>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;