import React from 'react';
import { Linkedin, BadgeCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface CredibilityProps {
  t: any;
}

const Credibility: React.FC<CredibilityProps> = ({ t }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800" id="team">
      
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tl from-emerald-50 dark:from-emerald-900/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-12 gap-10 lg:gap-24 items-start">
          
          {/* Sticky Title */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 relative h-full"
          >
             <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold text-[10px] uppercase tracking-widest mb-4">
                    <Users className="w-3 h-3" />
                    Leadership
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-[1.1]">
                  Built by <br/><span className="text-slate-400 dark:text-slate-500">Practitioners</span>
                </h2>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8">
                  {t.credibility.subtitle}
                </p>
                
                <div className="space-y-3">
                    {['Sharia Advisory Board', 'Former BWI Members', 'Fintech Veterans'].map((cert, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 group cursor-default hover:translate-x-1 transition-transform">
                            <BadgeCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{cert}</span>
                        </div>
                    ))}
                </div>
             </div>
          </motion.div>

          {/* Content - High Contrast Cards */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-8 grid md:grid-cols-2 gap-4"
          >
            {t.credibility.team && t.credibility.team.map((member: any, idx: number) => (
                <motion.div variants={item} key={idx} className="group bg-slate-50 dark:bg-white/5 rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm relative overflow-hidden backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform duration-500 bg-white dark:bg-slate-800 flex items-center justify-center">
                             <span className="font-serif text-xl font-bold text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                {getInitials(member.name)}
                             </span>
                        </div>

                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-7 h-7 flex items-center justify-center rounded-full bg-white dark:bg-white/10 text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110 border border-slate-200 dark:border-transparent">
                              <Linkedin className="w-3.5 h-3.5" />
                          </a>
                        )}
                    </div>
                    
                    <div className="space-y-2">
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-tight">{member.name}</h3>
                            <div className="text-slate-500 dark:text-slate-400 text-[10px] font-medium uppercase tracking-wide">{member.role}</div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 pt-1">
                            <div className="px-2 py-0.5 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 text-[9px] font-bold uppercase tracking-widest rounded-md border border-slate-200 dark:border-white/10 group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 group-hover:border-slate-900 dark:group-hover:border-white transition-colors shadow-sm">
                                {member.ex}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Credibility;