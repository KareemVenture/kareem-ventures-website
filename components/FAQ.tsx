import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQProps {
  t: any;
}

const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!t || !t.faq || !Array.isArray(t.faq.items)) {
    return null; 
  }

  return (
    <section className="py-24 relative overflow-hidden bg-white">
       <div className="absolute inset-0 bg-pattern-islamic opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 relative h-full"
          >
             <div className="sticky top-32">
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-6 text-slate-400 shadow-sm border border-slate-200">
                  <HelpCircle className="w-5 h-5" />
               </div>
               <span className="text-kareem-teal font-bold text-xs uppercase tracking-widest mb-3 block">Knowledge Base</span>
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                 Frequent <br/><span className="text-slate-400">Questions</span>
               </h2>
               <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                 {t.faq.subtitle}
               </p>

               <div className="hidden md:block rounded-2xl bg-white border border-slate-200 p-6 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                      <MessageSquare className="w-24 h-24 text-kareem-teal" />
                  </div>
                  <div className="relative z-10 space-y-4">
                      <div className="w-12 h-12 bg-kareem-teal/10 rounded-full flex items-center justify-center text-kareem-teal mb-4 group-hover:scale-110 transition-transform">
                          <MessageSquare className="w-6 h-6" />
                      </div>
                      <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
                      <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                      <div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
                      
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">?</div>
                          <div className="text-xs text-slate-400 font-bold">Support Team</div>
                      </div>
                  </div>
               </div>
             </div>
          </motion.div>

          {/* Content */}
          <div className="md:col-span-8">
            <div className="space-y-4">
              {t.faq.items.map((item: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === idx ? 'border-kareem-teal shadow-lg shadow-kareem-teal/5 ring-1 ring-kareem-teal/20' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center p-6 text-left group"
                  >
                    <span className={`font-bold text-lg transition-colors ${openIndex === idx ? 'text-kareem-teal' : 'text-slate-900 group-hover:text-kareem-teal'}`}>{item.question}</span>
                    <span className={`p-2 rounded-full transition-all duration-300 ${openIndex === idx ? 'bg-kareem-teal text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                      {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2 text-sm md:text-base">
                           {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;