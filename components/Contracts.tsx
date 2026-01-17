import React from 'react';
import { ScrollText, Shield, ChevronRight, FileText } from 'lucide-react';

interface ContractsProps {
  t: any;
}

const Contracts: React.FC<ContractsProps> = ({ t }) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-kareem-teal/5 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Title */}
          <div className="md:col-span-4 relative h-full">
             <div className="sticky top-32 reveal">
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                 Smart <br/>
                 <span className="text-slate-400">Contracts</span>
               </h2>
               <p className="text-slate-600 leading-relaxed font-light">
                 {t.contracts.subtitle}
               </p>
             </div>
          </div>

          {/* Interactive Content - Hover Expand Style */}
          <div className="md:col-span-8 flex flex-col gap-4">
            {t.contracts.types.map((type: any, idx: number) => (
                <div key={idx} className={`group bg-white border border-slate-200 p-8 rounded-2xl hover:border-kareem-teal hover:bg-slate-50/50 transition-all duration-300 cursor-pointer reveal reveal-delay-${idx+1} relative overflow-hidden shadow-sm hover:shadow-xl`}>
                    
                    <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                        <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-kareem-teal group-hover:text-white transition-colors duration-300 text-slate-700 shadow-sm shrink-0">
                           {idx === 0 ? <ScrollText className="w-6 h-6" /> : idx === 1 ? <Shield className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                        </div>
                        
                        <div className="flex-grow">
                            <h4 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-kareem-teal transition-colors">{type.name}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-lg transition-colors group-hover:text-slate-600">{type.desc}</p>
                        </div>

                        <div className="flex items-center self-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                            <span className="text-xs font-bold text-kareem-teal uppercase tracking-wider mr-2">Structure</span>
                            <div className="w-8 h-8 rounded-full border border-kareem-teal/20 flex items-center justify-center">
                                <ChevronRight className="w-4 h-4 text-kareem-teal" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contracts;