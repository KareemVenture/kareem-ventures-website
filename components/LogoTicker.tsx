import React from 'react';
import { motion } from 'framer-motion';

const LogoTicker: React.FC = () => {
  const brands = ["Gojek", "Midtrans", "Kartuku", "Vida", "PythonID", "OneBit"];
  // Duplicate for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-10 bg-white dark:bg-slate-950 border-b border-slate-50 dark:border-slate-900 overflow-hidden relative transition-colors duration-500">
       {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-islamic opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-8"
        >
          Built by leadership previously at
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex overflow-hidden mask-image-linear-to-r"
        >
           {/* Left Fade */}
           <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 transition-colors duration-500"></div>
           {/* Right Fade */}
           <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 transition-colors duration-500"></div>

           <div className="flex animate-marquee gap-16 whitespace-nowrap items-center hover:[animation-play-state:paused]">
             {duplicatedBrands.map((brand, idx) => (
               <div key={idx} className="group cursor-default transition-all duration-300">
                  <span className="text-2xl md:text-3xl font-bold text-slate-300 dark:text-slate-700 font-sans tracking-tight group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500">
                    {brand}
                  </span>
               </div>
             ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoTicker;