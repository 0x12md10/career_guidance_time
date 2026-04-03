import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export default function SplashScreen() {
  const { chooseLang } = useLanguage();

  // Use Tamil text for the splash (since no lang is selected yet, use raw translations)
  const ta = translations.ta.splash;
  const en = translations.en.splash;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 text-center animate-fade-up">
        {/* Logo mark */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-2xl shadow-brand-500/30">
            <span className="text-white font-bold text-2xl">T</span>
          </div>
        </div>

        {/* Program name — never translated */}
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2 tracking-wide">
          <span className="text-gradient">SIGARAM</span>{' '}
          <span className="text-white">THODU</span>
        </h1>

        {/* Sub-brand */}
        <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-2">
          T.I.M.E Tirunelveli
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-brand-500/40 mx-auto my-6" />

        {/* Prompt shown in BOTH languages so users understand regardless */}
        <p className="text-white/60 text-sm mb-1">{en.choose}</p>
        <p className="text-white/60 text-sm font-tamil mb-8">{ta.choose}</p>

        {/* Language cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* English */}
          <button
            onClick={() => chooseLang('en')}
            className="group relative flex flex-col items-center justify-center gap-3 bg-white/5 hover:bg-brand-500/20 border border-white/10 hover:border-brand-500/60 rounded-2xl px-6 py-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-500/20"
          >
            <span className="text-3xl">🇬🇧</span>
            <div>
              <p className="text-white font-bold text-lg">English</p>
              <p className="text-white/40 text-xs mt-0.5">Continue in English</p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 to-brand-700/0 group-hover:from-brand-500/10 group-hover:to-brand-700/5 transition-all duration-300 pointer-events-none" />
          </button>

          {/* Tamil */}
          <button
            onClick={() => chooseLang('ta')}
            className="group relative flex flex-col items-center justify-center gap-3 bg-white/5 hover:bg-brand-500/20 border border-white/10 hover:border-brand-500/60 rounded-2xl px-6 py-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-500/20"
          >
            <span className="text-3xl">🇮🇳</span>
            <div>
              <p className="text-white font-bold text-lg font-tamil">தமிழ்</p>
              <p className="text-white/40 text-xs mt-0.5 font-tamil">தமிழில் தொடரவும்</p>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 to-brand-700/0 group-hover:from-brand-500/10 group-hover:to-brand-700/5 transition-all duration-300 pointer-events-none" />
          </button>
        </div>

        {/* Free event badge */}
        <div className="mt-8 inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
          <span className="text-brand-300 text-xs">Free Event — ஏப்ரல் 6, 2025 / April 6, 2025</span>
        </div>
      </div>
    </div>
  );
}
