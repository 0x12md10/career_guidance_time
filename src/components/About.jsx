import { Calendar, Clock, MapPin, Users, CheckCircle2, Gift } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const ab = t('about');
  const ei = ab.eventInfo;

  return (
    <section id="about" className="py-20 sm:py-28 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-400 text-sm font-tamil font-medium uppercase tracking-widest mb-3">
            {ab.tag}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil text-white mb-4">
            <span className="text-gradient">{ab.heading1}</span> {ab.heading2}
          </h2>
        </div>

        {/* Row 1 — Event Info (full width, horizontal layout) */}
        <div className="card-glass rounded-2xl p-6 mb-6">
          <h3 className="text-white font-semibold font-tamil text-lg mb-5 flex items-center gap-2">
            <Calendar size={18} className="text-brand-400" />
            {ei.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex items-start gap-3">
              <Calendar size={16} className="text-brand-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium font-tamil text-sm">{ei.dateLabel}</p>
                <p className="text-white/60 text-sm font-tamil">{ei.dateValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-brand-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium font-tamil text-sm">{ei.timeLabel}</p>
                <p className="text-white/60 text-sm font-tamil">{ei.timeValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium font-tamil text-sm">{ei.venueLabel}</p>
                <p className="text-white/60 text-sm font-tamil">{ei.venueValue}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users size={16} className="text-brand-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-medium font-tamil text-sm">{ei.whoLabel}</p>
                <p className="text-white/60 text-sm font-tamil">{ei.whoValue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 — Free Gifts | Who Should Attend (two equal columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Free Gifts */}
          <div className="card-glass rounded-2xl p-6">
            <h3 className="text-white font-semibold font-tamil text-lg mb-5 flex items-center gap-2">
              <Gift size={18} className="text-brand-400" />
              {ab.giftsTitle}
            </h3>
            <div className="space-y-4">
              {ab.gifts.map((g, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-brand-500/5 border border-brand-500/15 rounded-xl p-4 hover:border-brand-500/30 transition-colors"
                >
                  <span className="text-3xl">{g.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-white font-tamil font-semibold text-sm">{g.title}</p>
                      <span className="text-xs bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full font-tamil">
                        {g.value}
                      </span>
                    </div>
                    <p className="text-white/50 text-xs font-tamil mt-1">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Attend */}
          <div className="card-glass rounded-2xl p-6">
            <h3 className="text-white font-semibold font-tamil text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-400" />
              {ab.whoTitle}
            </h3>
            <ul className="space-y-3">
              {ab.whoList.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-white/70 text-sm font-tamil">
                  <CheckCircle2 size={14} className="text-brand-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
