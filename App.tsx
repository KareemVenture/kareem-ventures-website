import React, { useState, useEffect, Suspense } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar'; 
import LiveDeals from './components/LiveDeals'; 
import LogoTicker from './components/LogoTicker';
import Footer from './components/Footer';

import { CONTENT, WHATSAPP_LINK } from './constants';
import { Language, Theme } from './types';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy Load Below-the-Fold Components
const MarketGap = React.lazy(() => import('./components/MarketGap'));
const SolutionBridge = React.lazy(() => import('./components/SolutionBridge'));
const Beneficiaries = React.lazy(() => import('./components/Beneficiaries'));
const Process = React.lazy(() => import('./components/Process'));
// Vision section hidden as per request
// const Vision = React.lazy(() => import('./components/Vision'));
const Credibility = React.lazy(() => import('./components/Credibility'));
const Contact = React.lazy(() => import('./components/Contact'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Blog = React.lazy(() => import('./components/Blog'));

const LoadingFallback = () => (
  <div className="py-24 flex justify-center items-center bg-slate-50 dark:bg-slate-950">
    <div className="w-8 h-8 border-4 border-slate-200 dark:border-slate-800 border-t-emerald-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [lang, setLang] = useState<Language>('en');
  
  // Theme State with persistence
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as Theme) || 'light';
    }
    return 'light';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = CONTENT[lang];

  // Apply Theme Logic
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // SEO: Update Meta Tags on Language Change
  useEffect(() => {
    document.title = t.meta.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.meta.description);
    }
  }, [lang, t]);

  // Handle Scroll Button Visibility
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-700 dark:selection:text-emerald-200 bg-slate-50 dark:bg-slate-950 overflow-x-hidden text-slate-900 dark:text-white transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      
      <main className="flex-grow">
        {/* 1. Hook: The Promise */}
        <Hero t={t} />
        
        {/* 2. Authority: The License & Compliance */}
        <TrustBar t={t} />

        {/* 3. Product: The Assets (Show, don't just tell) */}
        <LiveDeals t={t} />

        {/* 4. Social Proof: The Talent */}
        <div className="bg-white dark:bg-slate-950 relative z-20 transition-colors duration-500">
            <LogoTicker />
        </div>

        <Suspense fallback={<LoadingFallback />}>
          {/* 5. Context: The Problem */}
          <MarketGap t={t} />

          {/* 6. Solution: The Asset Classes */}
          <Beneficiaries t={t} />

          {/* 7. Platform: The Solution Bridge */}
          <SolutionBridge t={t} />

          {/* 8. Mechanism: The Rigor (How it works) */}
          <Process t={t} />

          {/* 9. Vision: The Future (Hidden) */}
          {/* <Vision t={t} /> */}

          {/* 10. Thought Leadership: The Blog */}
          <Blog t={t} />

          {/* 11. Trust: The Team Details */}
          <Credibility t={t} />

          {/* 12. Closing: Objections & Action */}
          <FAQ t={t} />
          <Contact t={t} />
        </Suspense>
      </main>

      <Footer t={t} />

      <AnimatePresence>
        {showScrollTop && (
          <motion.a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 fill-current" />
            <span className="absolute right-full mr-4 bg-slate-900 border border-white/10 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
              Chat with us
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;