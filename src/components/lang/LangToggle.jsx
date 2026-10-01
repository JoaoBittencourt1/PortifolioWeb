'use client';

import { useLayoutEffect } from 'react';
import { setLang, useLang } from './lang.js';
import { HTML_LANG, LANG_STORAGE_KEY } from './lang-config.js';
import './LangToggle.css';

const LABELS = {
  pt: { text: 'PT', aria: 'Mudar para português', title: 'Português' },
  en: { text: 'EN', aria: 'Switch to English', title: 'English' },
};

function LangToggle() {
  const lang = useLang();
  const next = lang === 'en' ? 'pt' : 'en';

  // Dev Strict Mode remounts <html> and drops the attribute set by the inline script; re-apply it.
  // No-op in production.
  useLayoutEffect(() => {
    try {
      if (localStorage.getItem(LANG_STORAGE_KEY) === 'en') document.documentElement.lang = HTML_LANG.en;
    } catch {
      // Storage unavailable: keep the default language.
    }
  }, []);

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLang(next)}
      aria-label={LABELS[next].aria}
      title={LABELS[next].title}
      lang={HTML_LANG[next]}
    >
      {LABELS[next].text}
    </button>
  );
}

export default LangToggle;
