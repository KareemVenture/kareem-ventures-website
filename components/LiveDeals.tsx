import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin, Building, Clock, Target, Wheat, GraduationCap, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

interface LiveDealsProps {
  t: any;
}

const opportunities = [
  {
    title: "Tier-1 Islamic School Network",
    category: "Infrastructure Growth",
    yield: "12-14%",
    tenor: "24 Mo",
    impact: "150+ Students",
    location: "Greater Jakarta",
    raised: 45,
    minTicket: "IDR 100M",
    status: "Open",
    theme: "emerald",
    icon: GraduationCap
  },
  {
    title: "Premium Aesthetic Clinic",
    category: "Healthcare Expansion",
    yield: "14-16%",
    tenor: "36 Mo",
    impact: "Community Health",
    location: "West Java",
    raised: 20,
    minTicket: "IDR 50M",
    status: "Vetting",
    theme: "rose",
    icon: HeartPulse
  },
  {
    title: "Halal Food Supply Chain",
    category: "SME Working Capital",
    yield: "15-18%",
    tenor: "12 Mo",
    impact: "50+ Farmers",
    location: "Bogor Regency",
    raised: 80,
    minTicket: "IDR 25M",
    status: "Filling Fast",
    theme: "amber",
    icon: Wheat
  }
];

const DealVisual = ({ theme, Icon }: { theme: string, Icon: any }) => {
    
    // Mapping for dark mode colors
    const colors = {
        emerald: {
            bg: "bg-emerald-50 dark:bg-emerald-500/10",
            icon: "text-emerald-600 dark:text-emerald-400",
            border: "border-emerald-100 dark:border-emerald-500/20"
        },
        rose: {
            bg: "bg-rose-50 dark:bg-rose-500/10",
            icon: "text-rose-600 dark:text-rose-400",
            border: "border-rose-100 dark:border-rose-500/20"
        },
        amber: {
            bg: "bg-amber-50 dark:bg-amber-500/10",
            icon: "text-amber-600 dark:text-amber-400",
            border: "border-amber-100 dark:border-amber-500/20"
        }
    };

    const c = colors[theme as keyof typeof colors] || colors.emerald;

    return (
        <div className={`h-40 w-full ${c.bg} relative overflow-hidden flex items-center justify-center border-b ${c.border} transition-colors duration-500`}>
            <div className="absolute inset-0 bg-grid-white opacity-[0.1]"></div>
            
            {/* Glow Blob */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 ${c.bg} blur-2xl rounded-full`}></div>

            <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 bg-white dark:bg-slate-950 rounded-2xl shadow-lg border ${c.border} flex items-center justify-center mb-3 transition-colors duration-500`}
                >
                    <Icon className={`w-8 h-8 ${c.icon}`} strokeWidth={1.5} />
                </motion.div>
            </div>
        </div>
    );
};

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

  return (
    <section id="opportunities" className="py-24 bg-[#f8fafc] dark:bg-[#0a0f1e] relative overflow-hidden transition-colors duration-500">
      
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest">Live Opportunities</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Curated <span className="text-slate-400 dark:text-slate-500">Deal Flow</span></h3>
          </div>
          
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500 hover:text-emerald-600 dark:hover:bg-emerald-500/20 dark:hover:border-emerald-500/50 dark:hover:text-emerald-400 transition-all text-slate-500 dark:text-white shadow-sm dark:shadow-none">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500 hover:text-emerald-600 dark:hover:bg-emerald-500/20 dark:hover:border-emerald-500/50 dark:hover:text-emerald-400 transition-all text-slate-500 dark:text-white shadow-sm dark:shadow-none">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4 snap-x snap-mandatory"
        >
            {opportunities.map((opp, idx) => (
                <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8 }}
                    transition={{ delay: idx * 0.1 }}
                    className="min-w-[320px] md:min-w-[380px] bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl group snap-center cursor-pointer relative overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300"
                >
                    <a href="#contact" className="block h-full w-full">
                        <div className="relative">
                            <DealVisual theme={opp.theme} Icon={opp.icon} />
                            <div className="absolute top-4 left-4">
                                 <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border backdrop-blur-md ${opp.status === 'Open' ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30' : 'bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400 dark:border-rose-500/30'}`}>
                                    {opp.status}
                                 </span>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="mb-6">
                                 <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide mb-1 flex items-center gap-1">
                                    <Building className="w-3 h-3" /> {opp.category}
                                 </div>
                                 <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">{opp.title}</h4>
                                 <div className="flex items-center gap-1 text-xs text-slate-500">
                                    <MapPin className="w-3 h-3" /> {opp.location}
                                 </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                 <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/10 group-hover:bg-slate-100 dark:group-hover:bg-white/10 transition-colors">
                                     <div className="text-[9px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">Proj. Yield</div>
                                     <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                        {opp.yield} <ArrowUpRight className="w-3 h-3" />
                                     </div>
                                 </div>
                                 <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/10 group-hover:bg-slate-100 dark:group-hover:bg-white/10 transition-colors">
                                     <div className="text-[9px] text-slate-500 dark:text-slate-400 uppercase font-bold mb-1">Impact</div>
                                     <div className="text-lg font-bold text-slate-700 dark:text-slate-200">
                                         {opp.impact}
                                     </div>
                                 </div>
                            </div>

                            <div className="flex justify-between items-center text-xs text-slate-500 mb-6 px-1">
                                 <div className="flex items-center gap-1.5">
                                     <Clock className="w-3.5 h-3.5" />
                                     <span>{opp.tenor}</span>
                                 </div>
                                 <div className="flex items-center gap-1.5">
                                     <Target className="w-3.5 h-3.5" />
                                     <span>Min {opp.minTicket}</span>
                                 </div>
                            </div>

                            <div className="mt-auto">
                                <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                                    <span>{opp.raised}% Funded</span>
                                    <span className="text-emerald-600 dark:text-emerald-500">~IDR {(opp.raised * 0.05).toFixed(1)}B Raised</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${opp.raised}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                    ></motion.div>
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.div>
            ))}
            
             <div className="min-w-[200px] flex items-center justify-center snap-center">
                 <a href="#contact" className="w-24 h-24 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex flex-col gap-2 items-center justify-center text-slate-400 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all group backdrop-blur-md shadow-sm dark:shadow-none hover:scale-105">
                     <ArrowUpRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
                     <span className="text-[10px] font-bold uppercase tracking-wide">View All</span>
                 </a>
             </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDeals;