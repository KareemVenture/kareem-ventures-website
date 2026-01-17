import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronRight } from 'lucide-react';
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 bg-kareem-teal rounded-lg flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-serif font-bold text-2xl">K</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 transition-colors">
              Kareem<span className="font-light text-slate-500">Ventures</span>
            </span>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#why-us" className="text-sm font-semibold text-slate-600 hover:text-kareem-teal transition-colors tracking-wide">
              {t.nav.whyUs}
            </a>
            {/* QA FIX: Point to #opportunities instead of #impact */}
            <a href="#opportunities" className="text-sm font-semibold text-slate-600 hover:text-kareem-teal transition-colors tracking-wide">
              {t.nav.impact}
            </a>
            <a href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-kareem-teal transition-colors tracking-wide">
              {t.nav.howItWorks}
            </a>
            <a href="#team" className="text-sm font-semibold text-slate-600 hover:text-kareem-teal transition-colors tracking-wide">
              {t.nav.about}
            </a>

            <div className="h-4 w-px bg-slate-200 mx-2"></div>

            <div className="flex items-center gap-2">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-slate-400 hover:bg-slate-50 hover:text-kareem-teal transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button 
                onClick={toggleLang} 
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200 hover:border-kareem-teal hover:text-kareem-teal transition-all text-slate-500 uppercase tracking-wider"
                aria-label="Toggle language"
              >
                {lang}
              </button>
            </div>
            
            <a 
              href="#contact" 
              className="group relative px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:bg-kareem-teal active:scale-95 flex items-center gap-2 overflow-hidden"
            >
              {t.nav.contact}
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="text-slate-500" aria-label="Toggle theme">
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 focus:outline-none"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-2 min-h-[calc(100vh-5rem)] overflow-y-auto pb-32">
            <a href="#why-us" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-800">{t.nav.whyUs}</a>
            <a href="#opportunities" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-800">{t.nav.impact}</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-800">{t.nav.howItWorks}</a>
            <a href="#team" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-800">{t.nav.about}</a>
            <div className="h-px bg-slate-100"></div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Language</span>
              <button onClick={toggleLang} className="font-bold text-kareem-teal">{lang.toUpperCase()}</button>
            </div>
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-4 bg-kareem-teal text-center text-white rounded-xl font-bold">{t.nav.contact}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;