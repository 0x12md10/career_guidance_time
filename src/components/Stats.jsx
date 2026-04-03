import { useLanguage } from '../context/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();
  const stats = t('stats');

  return (
    <section className="py-14 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 relative overflow-hidden">
      {/* pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-white text-3xl sm:text-4xl font-bold mb-1 font-display">{s.number}</p>
              <p className="text-white font-tamil text-sm font-semibold">{s.label}</p>
              <p className="text-white/60 font-tamil text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
