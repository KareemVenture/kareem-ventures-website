import React from 'react';
import { ShieldCheck, Building2, Wallet, Lock } from 'lucide-react';

interface TrustBarProps {
  t: any;
}

const TrustBar: React.FC<TrustBarProps> = ({ t }) => {
  return (
    <div className="relative z-20 -mt-10 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
                
                {/* Compliance Badge */}
                <div className="flex items-center gap-4 justify-start group rounded-xl transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-500 shrink-0 group-hover:scale-110 transition-transform group-hover:rotate-12">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Compliance</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Sharia Verified</div>
                    </div>
                </div>

                {/* Nadzir Supervision */}
                <div className="flex items-center gap-4 justify-start group rounded-xl transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-400 shrink-0 group-hover:text-slate-900 dark:group-hover:text-white transition-colors group-hover:scale-110">
                        <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Supervised By</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Registered Nadzir</div>
                    </div>
                </div>

                {/* Banking Partner */}
                <div className="flex items-center gap-4 justify-start group rounded-xl transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-400 shrink-0 group-hover:text-slate-900 dark:group-hover:text-white transition-colors group-hover:scale-110">
                        <Wallet className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Bank Partner</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Bank Syariah Ind.</div>
                    </div>
                </div>

                {/* Fund Security */}
                <div className="flex items-center gap-4 justify-start group rounded-xl transition-colors cursor-default">
                    <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-400 shrink-0 group-hover:text-slate-900 dark:group-hover:text-white transition-colors group-hover:scale-110">
                        <Lock className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Security</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Secure Transaction</div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;