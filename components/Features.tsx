import React from 'react';
import { Infinity, FileSignature } from 'lucide-react';

interface FeaturesProps {
  t: any;
}

const Features: React.FC<FeaturesProps> = ({ t }) => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 dark:text-emerald-100 mb-6 font-serif tracking-tight">
              {t.solution.title}
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.solution.cards.map((card: any, idx: number) => {
               // Map icon string to component
               const Icon = idx === 0 ? Infinity : FileSignature;
               const bgClass = idx === 0 ? "bg-amber-50 dark:bg-amber-900/10 text-amber-600 dark:text-amber-500" : "bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-500";
               
               return (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2rem] text-left border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
                    <div className={`w-14 h-14 ${bgClass} rounded-2xl flex items-center justify-center mb-6`}>
                        <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{card.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light">
                        {card.description}
                    </p>
                </div>
               );
            })}
        </div>
      </div>
    </section>
  );
};

export default Features;