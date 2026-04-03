import { Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-mesh flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
          <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse-slow" />
          <span className="text-brand-300 text-xs sm:text-sm font-tamil font-medium">
            {t('hero.badge')}
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-tamil mb-4 leading-tight animate-fade-up">
          <span className="text-gradient">{t('hero.title1')}</span>{' '}
          <span className="text-white">{t('hero.title2')}</span>
        </h1>

        <p className="text-lg sm:text-2xl text-white/60 font-tamil mb-3 animate-fade-up animate-delay-100">
          {t('hero.subtitle')}
        </p>

        <p className="text-base sm:text-lg text-white/50 font-tamil max-w-2xl mx-auto mb-8 animate-fade-up animate-delay-200">
          {t('hero.desc')}
        </p>

        {/* Event details pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up animate-delay-200">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <Calendar size={14} className="text-brand-400" />
            <span className="text-white/80 text-sm font-tamil">{t('hero.date')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <Clock size={14} className="text-brand-400" />
            <span className="text-white/80 text-sm font-tamil">{t('hero.time')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <MapPin size={14} className="text-brand-400" />
            <span className="text-white/80 text-sm font-tamil">{t('hero.venue')}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center animate-fade-up animate-delay-300">
          <a
            href="#register"
            className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-bold font-tamil text-lg px-10 py-4 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-brand-500/30"
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#highlights"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-brand-400 transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
