import RegisterForm from './RegisterForm';
import { Shield, Zap, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PERK_ICONS = [Shield, Zap, Clock];

export default function Register() {
  const { t } = useLanguage();
  const reg = t('register');

  return (
    <section id="register" className="py-20 sm:py-28 bg-dark-900 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-brand-400 text-sm font-tamil font-medium uppercase tracking-widest mb-3">
            {reg.tag}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil text-white mb-4">
            {reg.heading1}{' '}
            <span className="text-gradient">{reg.heading2}</span>
          </h2>
          <p className="text-white/50 font-tamil max-w-xl mx-auto mb-6">{reg.subtext}</p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {reg.perks.map((text, i) => {
              const Icon = PERK_ICONS[i];
              return (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm font-tamil">
                  <Icon size={14} className="text-brand-400" />
                  {text}
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
