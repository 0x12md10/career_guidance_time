import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function StickyBar() {
  const { t } = useLanguage();
  const sticky = t('sticky');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-dark-800/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center gap-3">
      <div className="flex-1 min-w-0">
        <p className="text-white text-xs font-tamil font-semibold truncate">{sticky.title}</p>
        <p className="text-brand-400 text-xs font-tamil">{sticky.sub}</p>
      </div>
      <a
        href="#register"
        className="shrink-0 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold font-tamil px-5 py-2.5 rounded-xl transition-colors"
      >
        {sticky.cta}
      </a>
    </div>
  );
}
