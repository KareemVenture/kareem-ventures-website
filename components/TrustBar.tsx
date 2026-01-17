import React from 'react';
import { ShieldCheck, Building2, Wallet, Lock } from 'lucide-react';

interface TrustBarProps {
  t: any;
}

const TrustBar: React.FC<TrustBarProps> = ({ t }) => {
  return (
    <div className="bg-white border-b border-slate-100 py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-center justify-center text-left">
            
            {/* Compliance Badge */}
            <div className="flex items-center gap-3 justify-start group">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Compliance</div>
                    <div className="text-xs md:text-sm font-bold text-slate-900 leading-tight">Sharia Verified</div>
                </div>
            </div>

            {/* Nadzir Supervision */}
            <div className="flex items-center gap-3 justify-start group">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Building2 className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Supervised By</div>
                    <div className="text-xs md:text-sm font-bold text-slate-900 leading-tight">Registered Nadzir</div>
                </div>
            </div>

            {/* Banking Partner */}
            <div className="flex items-center gap-3 justify-start group">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Wallet className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Bank Partner</div>
                    <div className="text-xs md:text-sm font-bold text-slate-900 leading-tight">Bank Syariah Ind.</div>
                </div>
            </div>

            {/* Fund Security */}
            <div className="flex items-center gap-3 justify-start group">
                 <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 shrink-0">
                    <Lock className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Security</div>
                    <div className="text-xs md:text-sm font-bold text-slate-900 leading-tight">Escrow Account</div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default TrustBar;