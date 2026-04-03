import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const COLORS = [
  'from-orange-500/10 to-orange-600/5',
  'from-amber-500/10 to-amber-600/5',
  'from-yellow-500/10 to-yellow-600/5',
  'from-green-500/10 to-green-600/5',
  'from-blue-500/10 to-blue-600/5',
  'from-purple-500/10 to-purple-600/5',
];

export default function Testimonials() {
  const { t } = useLanguage();
  const tm = t('testimonials');

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-brand-400 text-sm font-tamil font-medium uppercase tracking-widest mb-3">
            {tm.tag}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil text-white mb-4">
            {tm.heading1}{' '}
            <span className="text-gradient">{tm.heading2}</span>
          </h2>
          <p className="text-white/50 font-tamil">{tm.subtext}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tm.items.map((item, i) => (
            <div
              key={i}
              className={`card-glass rounded-2xl p-5 bg-gradient-to-br ${COLORS[i]} hover:border-brand-500/30 transition-all hover:-translate-y-1 duration-300`}
            >
              <Quote size={24} className="text-brand-500/40 mb-3" />
              <p className="text-white/75 text-sm font-tamil leading-relaxed mb-5">
                "{item.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold font-tamil text-sm">{item.name}</p>
                  <p className="text-white/40 text-xs font-tamil">{item.standard}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
