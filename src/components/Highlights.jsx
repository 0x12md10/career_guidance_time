import {
  Compass, GraduationCap, BookOpen, TrendingUp,
  Brain, Award, Briefcase, Lightbulb,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ICONS = [Compass, GraduationCap, BookOpen, TrendingUp, Brain, Award, Briefcase, Lightbulb];
const COLORS = [
  { color: 'from-orange-500/20 to-orange-600/10', iconColor: 'text-orange-400' },
  { color: 'from-amber-500/20 to-amber-600/10', iconColor: 'text-amber-400' },
  { color: 'from-yellow-500/20 to-yellow-600/10', iconColor: 'text-yellow-400' },
  { color: 'from-green-500/20 to-green-600/10', iconColor: 'text-green-400' },
  { color: 'from-blue-500/20 to-blue-600/10', iconColor: 'text-blue-400' },
  { color: 'from-purple-500/20 to-purple-600/10', iconColor: 'text-purple-400' },
  { color: 'from-pink-500/20 to-pink-600/10', iconColor: 'text-pink-400' },
  { color: 'from-red-500/20 to-red-600/10', iconColor: 'text-red-400' },
];

export default function Highlights() {
  const { t } = useLanguage();
  const h = t('highlights');
  const cards = h.cards;

  return (
    <section id="highlights" className="py-20 sm:py-28 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-brand-400 text-sm font-tamil font-medium uppercase tracking-widest mb-3">
            {h.tag}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold font-tamil text-white mb-4">
            {h.heading1}{' '}
            <span className="text-gradient">{h.heading2}</span>
          </h2>
          <p className="text-white/50 font-tamil max-w-xl mx-auto">{h.subtext}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((item, i) => {
            const Icon = ICONS[i];
            const { color, iconColor } = COLORS[i];
            return (
              <div
                key={i}
                className="card-glass rounded-2xl p-5 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 group"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={20} className={iconColor} />
                </div>
                <h3 className="text-white font-semibold font-tamil text-sm mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/45 text-xs font-tamil leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
