import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Building, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface LiveDealsProps {
  t: any;
}

const opportunities = [
  {
    title: "Kebun Khaybar - Date Farm",
    category: "Agriculture",
    location: "Madinah",
    raised: 85,
    status: "Closing Soon",
    tags: ["High Yield", "Sustainable"],
    color: "bg-emerald-500"
  },
  {
    title: "Ruma Well Infrastructure",
    category: "Water Utility",
    location: "Saudi Arabia",
    raised: 45,
    status: "Open",
    tags: ["Social Impact", "Stable"],
    color: "bg-cyan-500"
  },
  {
    title: "Aya Sophia Maintenance",
    category: "Heritage",
    location: "Istanbul",
    raised: 12,
    status: "New",
    tags: ["Cultural", "Long Term"],
    color: "bg-amber-500"
  },
  {
    title: "Halal Logistics Hub",
    category: "SME Growth",
    location: "Jakarta",
    raised: 60,
    status: "Open",
    tags: ["Equity", "Growth"],
    color: "bg-teal-500"
  }
];

const LiveDeals: React.FC<LiveDealsProps> = ({ t }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="opportunities" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0f1218]">
      
      {/* Dynamic Blob Background - Corrected Palette (Emerald/Teal/Amber) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Emerald Blob */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          {/* Amber/Gold Blob */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 dark:bg-amber-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          {/* Teal Blob */}
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-teal-300/20 dark:bg-teal-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-2 block">Live Projects</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]">Active <span className="text-emerald-600">Opportunities</span></h3>
          </div>
          
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-all text-slate-500 dark:text-white shadow-sm active:scale-95">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-all text-slate-500 dark:text-white shadow-sm active:scale-95">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div 
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-12 -mx-4 px-4 snap-x snap-mandatory"
        >
            {opportunities.map((opp, idx) => (
                <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="min-w-[320px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-300 group snap-center cursor-pointer relative overflow-hidden"
                >
                    {/* Status Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {opp.status}
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 transition-colors">
                        <Building className="w-6 h-6 text-slate-400 group-hover:text-emerald-600 dark:text-slate-500 dark:group-hover:text-emerald-400" />
                    </div>

                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                         {opp.category}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-tight">{opp.title}</h4>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mb-6 font-medium">
                        <MapPin className="w-3 h-3" /> {opp.location}
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
                            <span>Funded</span>
                            <span>{opp.raised}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full ${opp.color}`}
                                style={{ width: `${opp.raised}%` }}
                            />
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LiveDeals;