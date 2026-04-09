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

        {/* Row 1 — Event Info */}
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

        {/* Row 2 — VOUCHER BANNER (full width, screaming) */}
        <div
          className="relative overflow-hidden rounded-2xl p-6 sm:p-10 mb-6"
          style={{
            background: 'linear-gradient(135deg, #1c0800 0%, #0d0d14 60%)',
            border: '2px solid #f59e0b',
            boxShadow: '0 0 50px rgba(245,158,11,0.25), 0 0 100px rgba(234,108,0,0.1)',
          }}
        >
          {/* Background radial glow */}
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: '320px', height: '320px',
            background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-40px', left: '-40px',
            width: '200px', height: '200px',
            background: 'radial-gradient(circle, rgba(234,108,0,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">

            {/* Left — Amount */}
            <div className="text-center sm:text-left shrink-0">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 font-tamil"
                style={{ background: 'rgba(245,158,11,0.2)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.4)' }}
              >
                🎁 {ab.voucherTag}
              </span>
              <div
                className="font-tamil"
                style={{
                  fontSize: 'clamp(52px, 10vw, 80px)',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: '#fbbf24',
                  textShadow: '0 0 30px rgba(251,191,36,0.6), 0 0 60px rgba(251,191,36,0.3)',
                  letterSpacing: '-2px',
                }}
              >
                {ab.voucherAmount}
              </div>
              <p
                className="mt-2 font-bold font-tamil"
                style={{ color: '#fb923c', fontSize: '15px', letterSpacing: '0.3px' }}
              >
                {ab.voucherTitle}
              </p>
            </div>

            {/* Divider */}
            <div
              className="hidden sm:block self-stretch w-px shrink-0"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(245,158,11,0.4), transparent)' }}
            />
            <div className="block sm:hidden w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(245,158,11,0.4), transparent)' }} />

            {/* Right — Description */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start gap-3 mb-4 text-3xl">
                {ab.gifts.map((g) => g.emoji).map((e, i) => (
                  <span key={i}>{e}</span>
                ))}
              </div>
              <p className="text-white/80 font-tamil text-sm sm:text-base leading-relaxed">
                {ab.voucherSub}
              </p>
            </div>
          </div>
        </div>

        {/* Row 3 — Free Gifts | Who Should Attend */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Free Gifts */}
          <div className="card-glass rounded-2xl p-6">
            <h3 className="text-white font-semibold font-tamil text-lg mb-5 flex items-center gap-2">
              <Gift size={18} className="text-brand-400" />
              {ab.giftsTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              {ab.gifts.map((g, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-brand-500/5 border border-brand-500/15 rounded-xl p-4 hover:border-brand-500/30 transition-colors"
                >
                  <span className="text-2xl shrink-0">{g.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <p className="text-white font-tamil font-semibold text-sm">{g.title}</p>
                      <span className="text-xs bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full font-tamil whitespace-nowrap">
                        {g.value}
                      </span>
                    </div>
                    <p className="text-white/50 text-xs font-tamil">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who Should Attend */}
          <div className="card-glass rounded-2xl p-6">
            <h3 className="text-white font-semibold font-tamil text-lg mb-5 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-400" />
              {ab.whoTitle}
            </h3>
            <ul className="space-y-3">
              {ab.whoList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-white/70 text-sm font-tamil">
                  <CheckCircle2 size={15} className="text-brand-500 shrink-0 mt-0.5" />
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
