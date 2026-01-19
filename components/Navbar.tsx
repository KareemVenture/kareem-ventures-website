import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Moon, Sun } from 'lucide-react';
import { Language, Theme } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, setTheme, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'en' ? 'id' : 'en');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <div className={`w-full max-w-7xl transition-all duration-300 rounded-2xl ${scrolled ? 'bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-9 h-9 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:bg-emerald-500/20">
                <span className="text-emerald-600 dark:text-emerald-400 font-serif font-bold text-2xl">K</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-colors">
                Kareem<span className="font-light text-slate-500 dark:text-slate-400">Ventures</span>
              </span>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#why-us" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors tracking-wide">
                {t.nav.whyUs}
              </a>
              <a href="#opportunities" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors tracking-wide">
                {t.nav.impact}
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors tracking-wide">
                {t.nav.howItWorks}
              </a>
              <a href="#team" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-white transition-colors tracking-wide">
                {t.nav.about}
              </a>

              <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-2"></div>

              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button 
                onClick={toggleLang} 
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-50 dark:bg-white/5"
                aria-label="Toggle language"
              >
                {lang}
              </button>
              
              <a 
                href="#contact" 
                className="group relative px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full text-sm font-bold transition-all hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95 flex items-center gap-2 overflow-hidden"
              >
                {t.nav.contact}
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
               <button onClick={toggleTheme} className="text-slate-600 dark:text-white p-2" aria-label="Toggle theme">
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
               </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-900 dark:text-white focus:outline-none p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
                aria-label="Open menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-4 right-4 bg-white dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-2 shadow-2xl z-40">
            <a href="#why-us" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400">{t.nav.whyUs}</a>
            <a href="#opportunities" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400">{t.nav.impact}</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400">{t.nav.howItWorks}</a>
            <a href="#team" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400">{t.nav.about}</a>
            <div className="h-px bg-slate-100 dark:bg-white/10"></div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Language</span>
              <button onClick={toggleLang} className="font-bold text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">{lang.toUpperCase()}</button>
            </div>
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-4 bg-emerald-500 text-center text-white dark:text-slate-950 rounded-xl font-bold shadow-lg shadow-emerald-500/20">{t.nav.contact}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;