'use client';

import { useSyncExternalStore } from 'react';
import { DEFAULT_THEME, THEME_STORAGE_KEY } from './theme-config.js';

function readTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

// Current theme, kept in sync with the data-theme attribute on <html>.
export function useTheme() {
  return useSyncExternalStore(subscribe, readTheme, () => DEFAULT_THEME);
}

export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode): theme still applies for this visit.
  }
}
