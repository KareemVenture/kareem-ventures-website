import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, MapPin, Building, Activity } from 'lucide-react';

interface AssetSliderProps {
  t: any;
}

const opportunities = [
  {
    title: "Global Waqf Fund I",
    type: "Fixed Income",
    yield: "8-12%",
    location: "Jakarta, ID",
    status: "Open",
    raised: "65%",
    color: "bg-emerald-500"
  },
  {
    title: "Medika Syariah Clinic",
    type: "Private Equity",
    yield: "15-18%",
    location: "Bandung, ID",
    status: "Vetting",
    raised: "0%",
    color: "bg-blue-500"
  },
  {
    title: "Al-Azhar Expansion",
    type: "Infrastructure",
    yield: "Sukuk",
    location: "Surabaya, ID",
    status: "Closed",
    raised: "100%",
    color: "bg-kareem-gold"
  },
  {
    title: "Halal Logistics Hub",
    type: "SME Growth",
    yield: "10-14%",
    location: "Bekasi, ID",
    status: "Open",
    raised: "30%",
    color: "bg-purple-500"
  }
];

const AssetSlider: React.FC<AssetSliderProps> = ({ t }) => {
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
    <section className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
       {/* Islamic Pattern Overlay */}
       <div className="absolute inset-0 bg-pattern-islamic opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-kareem-teal font-bold text-[10px] uppercase tracking-widest mb-2 block">Live Opportunities</span>
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Active <span className="text-slate-400">Pipeline</span></h3>
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

        <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4 snap-x snap-mandatory"
        >
            {opportunities.map((opp, idx) => (
                <div key={idx} className="min-w-[320px] bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 transition-all duration-300 group snap-center cursor-pointer relative overflow-hidden">
                    {/* Top Stripe */}
                    <div className={`absolute top-0 left-0 w-full h-1.5 ${opp.color}`}></div>
                    
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-slate-100 transition-colors">
                            <Building className="w-6 h-6 text-slate-700" />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${opp.status === 'Open' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-slate-50 text-slate-500 border-slate-100'}`}>
                            {opp.status}
                        </div>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-kareem-teal transition-colors">{opp.title}</h4>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mb-6">
                        <MapPin className="w-3 h-3" /> {opp.location}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-3 bg-slate-50 rounded-xl">
                            <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Target Yield</div>
                            <div className="text-sm font-bold text-emerald-600 flex items-center gap-1">
                                {opp.yield} <ArrowUpRight className="w-3 h-3" />
                            </div>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl">
                            <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Type</div>
                            <div className="text-sm font-bold text-slate-700">
                                {opp.type}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-bold text-slate-400">
                            <span>Funded</span>
                            <span>{opp.raised}</span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full transition-all duration-1000 ${opp.color}`} style={{ width: opp.raised }}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AssetSlider;