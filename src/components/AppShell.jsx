'use client';

import { useSyncExternalStore } from 'react';
import { useReducedMotion } from 'framer-motion';
import Navbar from './navbar/Navbar.jsx';
import Footer from './footer/Footer.jsx';
import ClickSpark from './effects/ClickSpark/ClickSpark.jsx';
import { useTheme } from './theme/theme.js';
import './AppShell.css';

const subscribeNoop = () => () => {};

// false during SSR and hydration, true afterwards — keeps the first client render identical to the server output.
function useHydrated() {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}

function AppContent({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function AppShell({ children }) {
  const hydrated = useHydrated();
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = hydrated && prefersReducedMotion;
  const theme = useTheme();

  return (
    <div className="app-shell">
      {reduceMotion ? (
        <div className="app-content">
          <AppContent>{children}</AppContent>
        </div>
      ) : (
        <ClickSpark
          className="app-content"
          sparkColor={theme === 'light' ? '#111111' : '#ffffff'}
          sparkSize={10}
          sparkRadius={16}
          sparkCount={8}
          duration={400}
          easing="ease-out"
          extraScale={1.1}
        >
          <AppContent>{children}</AppContent>
        </ClickSpark>
      )}
    </div>
  );
}

export default AppShell;
