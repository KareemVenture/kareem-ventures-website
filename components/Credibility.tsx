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
    <section className="py-20 relative overflow-hidden bg-slate-50 border-t border-slate-200" id="team">
      <div className="absolute inset-0 bg-pattern-islamic opacity-30 pointer-events-none"></div>
      
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-[10px] uppercase tracking-widest mb-4">
                    <Users className="w-3 h-3" />
                    Leadership
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.1]">
                  Built by <br/><span className="text-slate-400">Practitioners</span>
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light mb-8">
                  {t.credibility.subtitle}
                </p>
                
                <div className="space-y-3">
                    {['Sharia Advisory Board', 'Former BWI Members', 'Fintech Veterans'].map((cert, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700 group cursor-default hover:translate-x-1 transition-transform">
                            <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-900 transition-colors">{cert}</span>
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
                <motion.div variants={item} key={idx} className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-kareem-teal/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-slate-100 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                             <span className="font-serif text-xl font-bold text-slate-400 group-hover:text-kareem-teal transition-colors">
                                {getInitials(member.name)}
                             </span>
                        </div>

                        <a href="#" className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110">
                            <Linkedin className="w-3.5 h-3.5" />
                        </a>
                    </div>
                    
                    <div className="space-y-2">
                        <div>
                            <h3 className="font-bold text-slate-900 text-base group-hover:text-kareem-teal transition-colors tracking-tight">{member.name}</h3>
                            <div className="text-slate-500 text-[10px] font-medium uppercase tracking-wide">{member.role}</div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 pt-1">
                            <div className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[9px] font-bold uppercase tracking-widest rounded-md border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors shadow-sm">
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