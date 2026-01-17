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
const Process = React.lazy(() => import('./components/Process'));
const Credibility = React.lazy(() => import('./components/Credibility'));
const Contact = React.lazy(() => import('./components/Contact'));
const FAQ = React.lazy(() => import('./components/FAQ'));

const LoadingFallback = () => (
  <div className="py-24 flex justify-center items-center bg-slate-50">
    <div className="w-8 h-8 border-4 border-slate-200 border-t-kareem-teal rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light'); 
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = CONTENT[lang];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
    <div className="min-h-screen flex flex-col font-sans antialiased selection:bg-kareem-teal selection:text-white bg-white overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      
      <main className="flex-grow">
        {/* 1. Hook: The Promise */}
        <Hero t={t} />
        
        {/* 2. Authority: The License & Compliance */}
        <TrustBar t={t} />

        {/* 3. Product: The Assets (Show, don't just tell) */}
        {/* STRATEGIC MOVE: Placed before Credibility/Problem to capture interest immediately */}
        <LiveDeals t={t} />

        {/* 4. Social Proof: The Talent */}
        <div className="bg-white relative z-20">
            <LogoTicker />
        </div>

        <Suspense fallback={<LoadingFallback />}>
          {/* 5. Context: The Problem */}
          <MarketGap t={t} />

          {/* 6. Mechanism: The Rigor (How it works) */}
          <Process t={t} />

          {/* 7. Trust: The Team Details */}
          <Credibility t={t} />

          {/* 8. Closing: Objections & Action */}
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
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 fill-current" />
            <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
              Chat with us
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;