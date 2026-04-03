import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'sigaram_lang';

export function LanguageProvider({ children }) {
  // null = not yet chosen (show splash), 'en' | 'ta' = chosen
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'en' || saved === 'ta' ? saved : null;
    } catch {
      return null;
    }
  });

  const chooseLang = (code) => {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {}
    setLang(code);
  };

  // t(key) — supports dot-notation e.g. t('hero.title1')
  const t = (path) => {
    if (!lang) return '';
    const keys = path.split('.');
    let val = translations[lang];
    for (const k of keys) {
      if (val == null) return path;
      val = val[k];
    }
    return val ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, chooseLang, t, translations: lang ? translations[lang] : translations.ta }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
