import React from 'react';
import { Mail, Instagram, Linkedin, Twitter, MessageCircle, MapPin } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { motion } from 'framer-motion';

interface FooterProps {
  t: any;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-24 pb-12 border-t border-slate-200 dark:border-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-20"
        >
          
          <motion.div variants={item} className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center group hover:border-emerald-500 dark:hover:border-kareem-teal transition-colors">
                    <span className="text-emerald-600 dark:text-white font-bold text-2xl font-serif group-hover:text-emerald-500 dark:group-hover:text-kareem-teal transition-colors">K</span>
                </div>
                <span className="font-bold text-2xl tracking-tight">Kareem<span className="font-light text-slate-400 dark:text-slate-500">Ventures</span></span>
            </div>
            <p className="text-slate-600 dark:text-slate-500 mb-8 max-w-sm leading-relaxed text-base font-light">
              Indonesia's first integrated platform enabling businesses to structure social giving through Islamic Waqf contracts.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-emerald-500 dark:hover:bg-kareem-teal hover:border-emerald-500 dark:hover:border-kareem-teal hover:text-white transition-all"><Instagram className="w-4 h-4"/></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-emerald-500 dark:hover:bg-kareem-teal hover:border-emerald-500 dark:hover:border-kareem-teal hover:text-white transition-all"><Linkedin className="w-4 h-4"/></a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-emerald-500 dark:hover:bg-kareem-teal hover:border-emerald-500 dark:hover:border-kareem-teal hover:text-white transition-all"><Twitter className="w-4 h-4"/></a>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="font-bold text-xs text-slate-500 uppercase tracking-[0.2em] mb-8">{t.footer.quickLinksTitle}</h4>
            <ul className="space-y-4 text-sm">
                <li><a href="#how-it-works" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-kareem-teal transition-colors block py-1">Platform</a></li>
                <li><a href="#team" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-kareem-teal transition-colors block py-1">Executive Team</a></li>
                {/* QA FIX: Removed broken blog link */}
                <li><a href="#contact" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-kareem-teal transition-colors block py-1">Partnership</a></li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h4 className="font-bold text-xs text-slate-500 uppercase tracking-[0.2em] mb-8">{t.footer.contactTitle}</h4>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-4 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4 text-emerald-600 dark:text-kareem-teal mt-1 shrink-0" />
                    <span>Jakarta, Indonesia</span>
                </li>
                <li className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
                    <Mail className="w-4 h-4 text-emerald-600 dark:text-kareem-teal shrink-0" />
                    <a href="mailto:founders@kareemventures.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">founders@kareemventures.com</a>
                </li>
                <li>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-green-400 transition-colors">
                        <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-kareem-teal shrink-0" />
                        <span>Chat on WhatsApp</span>
                    </a>
                </li>
            </ul>
          </motion.div>

        </motion.div>
        
        <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 dark:text-slate-600 text-xs">
            <span>{t.footer.copyright}</span>
            <div className="flex gap-8">
               <a href="#" className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;