import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, lang, chooseLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = t('nav.links');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/5 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img src="/icon.png" alt="Sigaram Thodu" className="h-24 w-auto flex-shrink-0 object-contain drop-shadow-lg" />
          <div className="leading-tight">
            <p className="text-white font-semibold text-sm font-tamil">{t('nav.logoTitle')}</p>
            <p className="text-brand-400 text-xs">{t('nav.logoSub')}</p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-brand-400 text-sm font-tamil transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all hover:scale-105 font-tamil"
          >
            {t('nav.cta')}
          </a>
          {/* Language toggle */}
          <button
            onClick={() => chooseLang(lang === 'en' ? 'ta' : 'en')}
            className="flex items-center gap-1.5 text-white/50 hover:text-brand-400 text-xs transition-colors border border-white/10 hover:border-brand-500/40 rounded-full px-3 py-1.5"
            title="Switch language"
          >
            <Globe size={12} />
            {lang === 'en' ? 'தமிழ்' : 'EN'}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 font-tamil text-sm py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className="bg-brand-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center font-tamil"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.cta')}
          </a>
          <button
            onClick={() => { chooseLang(lang === 'en' ? 'ta' : 'en'); setMenuOpen(false); }}
            className="flex items-center justify-center gap-2 text-white/50 text-sm border border-white/10 rounded-full py-2"
          >
            <Globe size={14} />
            {lang === 'en' ? 'Switch to தமிழ்' : 'Switch to English'}
          </button>
        </div>
      )}
    </nav>
  );
}
