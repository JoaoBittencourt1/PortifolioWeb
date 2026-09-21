'use client';

import { useLayoutEffect } from 'react';
import { setTheme, useTheme } from './theme.js';
import { THEME_STORAGE_KEY } from './theme-config.js';
import './ThemeToggle.css';

function ThemeToggle() {
  const theme = useTheme();
  const next = theme === 'light' ? 'dark' : 'light';

  // Dev Strict Mode remounts <html> and drops the attribute set by the inline script; re-apply it.
  // No-op in production.
  useLayoutEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') document.documentElement.setAttribute('data-theme', saved);
    } catch {
      // Storage unavailable: keep the default theme.
    }
  }, []);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={next === 'light' ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={next === 'light' ? 'Tema claro' : 'Tema escuro'}
    >
      {/* Both icons render; CSS shows the one matching the theme, so SSR and client markup agree. */}
      <svg className="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg className="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

export default ThemeToggle;
