import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin, Building, Clock, Users, Target, School, Stethoscope, Wheat, GraduationCap, HeartPulse, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

interface LiveDealsProps {
  t: any;
}

// Genericized opportunities for a New Player launch
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

// FIX: Explicit Class Mapping for Tailwind JIT
const DealVisual = ({ theme, Icon }: { theme: string, Icon: any }) => {
    
    const colors = {
        emerald: {
            bg: "bg-emerald-50",
            icon: "text-emerald-600",
            pattern: "text-emerald-900/5",
            blob: "bg-emerald-50",
            border: "border-emerald-100"
        },
        rose: {
            bg: "bg-rose-50",
            icon: "text-rose-600",
            pattern: "text-rose-900/5",
            blob: "bg-rose-50",
            border: "border-rose-100"
        },
        amber: {
            bg: "bg-amber-50",
            icon: "text-amber-600",
            pattern: "text-amber-900/5",
            blob: "bg-amber-50",
            border: "border-amber-100"
        }
    };

    // Fallback to emerald if theme not found
    const c = colors[theme as keyof typeof colors] || colors.emerald;

    return (
        <div className={`h-48 w-full ${c.bg} relative overflow-hidden flex items-center justify-center`}>
            {/* Abstract Pattern Background */}
            <div className={`absolute inset-0 ${c.pattern}`}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id={`grid-${theme}`} width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${theme})`} />
                </svg>
            </div>
            
            {/* Decorative Circles */}
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${c.blob} mix-blend-multiply filter blur-2xl opacity-80 translate-x-1/3 -translate-y-1/3`}></div>
            <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full ${c.blob} mix-blend-multiply filter blur-xl opacity-80 -translate-x-1/3 translate-y-1/3`}></div>

            {/* Central Icon Composition */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-white/50 flex items-center justify-center mb-3">
                    <Icon className={`w-10 h-10 ${c.icon}`} strokeWidth={1.5} />
                </div>
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
    <section id="opportunities" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 bg-pattern-islamic opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Scarcity Framing */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
                 <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                </span>
                <span className="text-rose-600 font-bold text-[10px] uppercase tracking-widest">Live Opportunities</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Curated <span className="text-slate-400">Deal Flow</span></h3>
            <p className="text-sm text-slate-500 mt-2 max-w-md">Verified productive assets open for immediate institutional deployment.</p>
          </div>
          
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white border border-slate-200 hover:border-kareem-teal hover:text-kareem-teal transition-all shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white border border-slate-200 hover:border-kareem-teal hover:text-kareem-teal transition-all shadow-sm">
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
                    transition={{ delay: idx * 0.1 }}
                    className="min-w-[300px] md:min-w-[380px] bg-white rounded-[1.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 group snap-center cursor-pointer relative overflow-hidden flex flex-col"
                >
                    <a href="#contact" className="block h-full w-full">
                        {/* Custom Visual Header */}
                        <div className="relative">
                            <DealVisual theme={opp.theme} Icon={opp.icon} />
                            <div className="absolute top-4 left-4">
                                 <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide border bg-white/95 backdrop-blur ${opp.status === 'Open' ? 'text-emerald-700 border-emerald-100' : 'text-rose-600 border-rose-100'}`}>
                                    {opp.status}
                                 </span>
                            </div>
                        </div>

                        <div className="p-5 md:p-6 flex-1 flex flex-col">
                            
                            {/* Title & Location */}
                            <div className="mb-6">
                                 <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mb-1 flex items-center gap-1">
                                    <Building className="w-3 h-3" /> {opp.category}
                                 </div>
                                 <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1 group-hover:text-kareem-teal transition-colors leading-tight">{opp.title}</h4>
                                 <div className="flex items-center gap-1 text-xs text-slate-400">
                                    <MapPin className="w-3 h-3" /> {opp.location}
                                 </div>
                            </div>

                            {/* Financials */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                 <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                                     <div className="text-[9px] text-slate-400 uppercase font-bold mb-1">Proj. Yield (p.a)</div>
                                     <div className="text-base font-bold text-emerald-700 flex items-center gap-1">
                                        {opp.yield} <ArrowUpRight className="w-3 h-3" />
                                     </div>
                                 </div>
                                 <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                     <div className="text-[9px] text-slate-400 uppercase font-bold mb-1">Social Impact</div>
                                     <div className="text-base font-bold text-slate-700 flex items-center gap-1">
                                         {opp.impact}
                                     </div>
                                 </div>
                            </div>

                            {/* Details Row */}
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

                            {/* Progress Bar */}
                            <div className="mt-auto">
                                <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                                    <span>{opp.raised}% Funded</span>
                                    <span className="text-emerald-600">~IDR {(opp.raised * 0.05).toFixed(1)}B Raised</span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${opp.raised}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-emerald-500 rounded-full"
                                    ></motion.div>
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.div>
            ))}
            
            {/* CTA Card */}
             <div className="min-w-[200px] flex items-center justify-center snap-center">
                 {/* QA FIX: Added anchor tag to make this functional */}
                 <a href="#contact" className="w-20 h-20 rounded-full border-2 border-dashed border-slate-300 flex flex-col gap-2 items-center justify-center text-slate-400 hover:border-kareem-teal hover:text-kareem-teal hover:bg-emerald-50 transition-all group">
                     <ArrowUpRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                     <span className="text-[10px] font-bold uppercase tracking-wide">View All</span>
                 </a>
             </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDeals;