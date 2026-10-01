'use client';

import { useSyncExternalStore } from 'react';
import { DEFAULT_LANG, HTML_LANG, LANG_STORAGE_KEY } from './lang-config.js';

function readLang() {
  return document.documentElement.lang === HTML_LANG.en ? 'en' : 'pt';
}

function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  return () => observer.disconnect();
}

// Current language ('pt' | 'en'), kept in sync with the lang attribute on <html>.
// Server and hydration render the default; a saved choice applies right after.
export function useLang() {
  return useSyncExternalStore(subscribe, readLang, () => DEFAULT_LANG);
}

export function setLang(lang) {
  document.documentElement.lang = HTML_LANG[lang];
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // Storage unavailable (private mode): language still applies for this visit.
  }
}
