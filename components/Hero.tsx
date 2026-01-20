import React, { useEffect } from 'react';
import { 
  ArrowRight, BarChart3, PieChart, Activity, Users, Wallet, ArrowUpRight, 
  Search, Bell, Settings, TrendingUp, Coins, Globe, Landmark, Percent 
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Mouse interaction for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for dashboard rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -0.5 to 0.5
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Floating Finance Particles with different durations for organic feel
  const particles = [
    { Icon: Percent, top: '15%', left: '10%', size: 24, delay: 0, duration: 18 },
    { Icon: Coins, top: '25%', left: '85%', size: 32, delay: 2, duration: 22 },
    { Icon: Globe, top: '65%', left: '15%', size: 28, delay: 1, duration: 25 },
    { Icon: Landmark, top: '75%', left: '80%', size: 24, delay: 3, duration: 20 },
  ];

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500 [perspective:2000px]">
      
      {/* --- LAYER 1: Deep Animated Gradient --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/20 to-white dark:from-slate-950 dark:via-[#051114] dark:to-slate-900 animate-gradient-x bg-[length:200%_200%] z-0"></div>
      
      {/* --- LAYER 2: Abstract Islamic Geometry (Breathing & Rotating) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Central Rotating Geometric Mandala */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] opacity-[0.03] dark:opacity-[0.05]"
            animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1], // Breathing effect
            }}
            transition={{ 
                rotate: { duration: 150, repeat: Infinity, ease: "linear" },
                scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }
            }}
          >
             <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 dark:text-white fill-none stroke-current stroke-[0.2]">
                {/* 8-Point Star / Rub el Hizb Geometry Simulation */}
                <rect x="25" y="25" width="50" height="50" />
                <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
                <circle cx="50" cy="50" r="35" />
                <circle cx="50" cy="50" r="25" />
                <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                <path d="M50 10 L90 50 L50 90 L10 50 Z" />
             </svg>
          </motion.div>
          
          {/* Tiled Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
      </div>

      {/* --- LAYER 3: Finance Floating Elements --- */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute text-emerald-500/20 dark:text-emerald-400/10 pointer-events-none z-0"
          style={{ 
              top: p.top, 
              left: p.left, 
              x: useTransform(mouseX, [-0.5, 0.5], [p.size * 2, p.size * -2]), 
              y: useTransform(mouseY, [-0.5, 0.5], [p.size * 2, p.size * -2]) 
          }}
          animate={{ 
              y: [0, -30, 0], 
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 10, -10, 0]
          }}
          transition={{ 
              duration: p.duration, 
              delay: p.delay, 
              repeat: Infinity, 
              ease: "easeInOut" 
          }}
        >
           <p.Icon size={p.size} />
        </motion.div>
      ))}

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <motion.div 
            style={{ opacity, y }}
            className="text-left"
        >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8 hover:border-emerald-500/50 transition-colors cursor-default shadow-sm dark:shadow-none group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-500 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{t.hero.label}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
            >
              Invest in <br/><span className="text-gradient-emerald bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Lasting Legacy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl"
            >
              {t.hero.subheadline}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#opportunities" className="group px-8 py-4 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold rounded-full shadow-[0_10px_30px_-10px_rgba(16,185,129,0.4)] dark:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-emerald-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 active:scale-95 text-base">
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a href="#how-it-works" className="px-8 py-4 bg-white/50 dark:bg-white/5 text-slate-900 dark:text-white font-bold rounded-full border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/10 transition-all active:scale-95 text-base flex items-center justify-center backdrop-blur-sm shadow-sm dark:shadow-none">
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
        </motion.div>

        {/* Right: Nadzir Dashboard UI with Interaction */}
        <motion.div
           style={{ scale, rotateX, rotateY }}
           initial={{ opacity: 0, x: 50, rotateY: 10 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="relative hidden lg:block [transform-style:preserve-3d] z-20"
        >
            {/* Dashboard Container */}
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl overflow-hidden relative [transform-style:preserve-3d] transform-gpu">
                
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex items-center gap-4">
                         <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                         </div>
                         <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                         <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-medium bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-500/30 transition-colors w-48 group cursor-text">
                             <Search className="w-3 h-3 group-hover:text-emerald-500 transition-colors" />
                             <span className="group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">Search projects...</span>
                         </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                            <Bell className="w-4 h-4 text-slate-400" />
                            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white dark:border-slate-900"></span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-emerald-500/20">
                            A
                        </div>
                    </div>
                </div>

                {/* Main Dashboard Area */}
                <div className="p-6 grid grid-cols-12 gap-6 bg-slate-50/30 dark:bg-slate-950/30 min-h-[400px]">
                    
                    {/* Sidebar */}
                    <div className="col-span-2 flex flex-col gap-2 border-r border-slate-100 dark:border-slate-800/50 pr-4">
                        {[
                            { icon: BarChart3, label: "Stats", active: true },
                            { icon: Wallet, label: "Funds", active: false },
                            { icon: Users, label: "Donors", active: false },
                            { icon: Activity, label: "Impact", active: false },
                            { icon: Settings, label: "Settings", active: false },
                        ].map((item, i) => (
                            <div key={i} className={`w-full aspect-square md:aspect-auto md:h-10 rounded-xl flex items-center justify-center md:justify-start md:px-3 gap-3 transition-all cursor-pointer group relative ${item.active ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-600 dark:hover:text-slate-300'}`}>
                                {item.active && <div className="absolute left-0 w-1 h-6 bg-emerald-500 rounded-r-full hidden md:block"></div>}
                                <item.icon className="w-5 h-5" />
                                <span className="hidden md:inline text-xs font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="col-span-10 space-y-6">
                        
                        {/* Stats Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div 
                                whileHover={{ y: -4, boxShadow: "0 10px 20px -5px rgba(0,0,0,0.05)" }}
                                className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-emerald-600 dark:text-emerald-400">
                                        <Wallet className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-900/30">
                                            <TrendingUp className="w-3 h-3" /> +12%
                                        </span>
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">$2.4M</div>
                                <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wide">Total Funded</div>
                            </motion.div>

                            <motion.div 
                                whileHover={{ y: -4, boxShadow: "0 10px 20px -5px rgba(0,0,0,0.05)" }}
                                className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                                        <Activity className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-1.5 py-0.5 rounded-full border border-blue-100 dark:border-blue-900/30">
                                            Live
                                        </span>
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">124</div>
                                <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wide">Projects</div>
                            </motion.div>
                        </div>

                        {/* Chart Area */}
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                            <div className="flex justify-between items-center mb-6 relative z-10">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Growth</h4>
                                    <p className="text-[10px] text-slate-500">Last 30 days</p>
                                </div>
                                <div className="flex gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-100 dark:ring-emerald-900/30"></span>
                                    <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-600"></span>
                                </div>
                            </div>
                            
                            <div className="flex items-end gap-3 h-32 relative z-10">
                                {[35, 55, 45, 70, 60, 85, 75, 95].map((h, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: 0.8 + (i * 0.1), duration: 0.8, type: "spring", stiffness: 100 }}
                                        className="flex-1 bg-gradient-to-t from-emerald-500/10 to-emerald-500/40 dark:to-emerald-500/60 rounded-t-lg relative group/bar cursor-pointer hover:from-emerald-500/30 hover:to-emerald-500/80 transition-all border-t border-emerald-500/20 dark:border-emerald-400/20"
                                    >
                                        <div className="absolute inset-x-0 bottom-0 top-full bg-emerald-500/5 group-hover/bar:top-0 transition-all duration-300"></div>
                                        {/* Hover Tooltip */}
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1.5 px-3 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-all transform group-hover/bar:-translate-y-1 whitespace-nowrap z-20 shadow-lg font-bold pointer-events-none">
                                            {h}% Growth
                                            <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* Chart Background Grid Lines */}
                            <div className="absolute inset-0 z-0 px-5 py-16 flex flex-col justify-between pointer-events-none opacity-30">
                                <div className="w-full h-px border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                                <div className="w-full h-px border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                                <div className="w-full h-px border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                            </div>
                        </div>

                        {/* Recent Transaction */}
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/30 group-hover:scale-110 transition-transform">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">Profit Paid</div>
                                    <div className="text-[11px] text-slate-500">2 minutes ago</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+$450.00</div>
                                <div className="text-[10px] text-slate-400">Success</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Floating Elements for 3D effect */}
                <motion.div 
                    style={{ 
                        y: useTransform(mouseY, [-0.5, 0.5], [-15, 15]),
                        x: useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
                    }}
                    className="absolute -right-6 top-32 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 z-30 w-48 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-500 shadow-inner">
                            <PieChart className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Allocation</div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white">Optimal</div>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-[10px] text-slate-500">
                            <span>SME Equity</span>
                            <span className="font-bold text-slate-900 dark:text-white">65%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "65%" }}
                                transition={{ delay: 1.5, duration: 1 }}
                                className="h-full bg-amber-500 rounded-full"
                            ></motion.div>
                        </div>
                    </div>
                </motion.div>
                
                {/* Second Floating Element */}
                <motion.div 
                    style={{ 
                        y: useTransform(mouseY, [-0.5, 0.5], [10, -10]),
                        x: useTransform(mouseX, [-0.5, 0.5], [10, -10]),
                    }}
                    className="absolute -left-4 bottom-20 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700 z-30 flex items-center gap-3 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90"
                >
                     <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center border border-green-200 dark:border-green-800">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     </div>
                     <div className="pr-2">
                         <div className="text-[10px] font-bold text-slate-500 uppercase">Status</div>
                         <div className="text-xs font-bold text-green-600 dark:text-green-400">Live</div>
                     </div>
                </motion.div>

            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;