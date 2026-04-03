import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`card-glass rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-brand-500/30' : ''}`}
    >
      <button
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-tamil text-sm font-medium">{q}</span>
        <ChevronDown
          size={16}
          className={`text-brand-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-white/60 font-tamil text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const faq = t('faq');

  return (
    <section className="py-20 sm:py-24 bg-dark-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-brand-400 text-sm font-tamil font-medium uppercase tracking-widest mb-3">
            {faq.tag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-tamil text-white">
            {faq.heading1}{' '}
            <span className="text-gradient">{faq.heading2}</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faq.items.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
