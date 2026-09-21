'use client';

import { useSyncExternalStore } from 'react';
import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';
import Navbar from './navbar/Navbar.jsx';
import Footer from './footer/Footer.jsx';
import GradientOrbs from './effects/GradientOrbs.jsx';
import ClickSpark from './effects/ClickSpark/ClickSpark.jsx';
import './effects/experimental.css';
import './AppShell.css';

// WebGL/canvas effects only run in the browser.
const ParticlesLayer = dynamic(() => import('./effects/ParticlesLayer.jsx'), { ssr: false });
const GhostCursor = dynamic(() => import('./effects/GhostCursor/GhostCursor.jsx'), { ssr: false });

const subscribeNoop = () => () => {};

// false during SSR and hydration, true afterwards — keeps the first client render identical to the server output.
function useHydrated() {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}

function AppContent({ children }) {
  return (
    <>
      <div className="side-lines" aria-hidden="true">
        <span className="side-line side-line-1" />
        <span className="side-line side-line-2" />
      </div>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function AppShell({ children }) {
  const hydrated = useHydrated();
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = hydrated && prefersReducedMotion;

  return (
    <div className="app-shell">
      <GradientOrbs />
      {!reduceMotion && (
        <>
          <ParticlesLayer />
          <GhostCursor
            color="#ffffff"
            brightness={0.25}
            edgeIntensity={0}
            trailLength={3}
            inertia={0.35}
            grainIntensity={0.05}
            bloomStrength={0.04}
            bloomRadius={1}
            bloomThreshold={0.15}
            fadeDelayMs={500}
            fadeDurationMs={700}
            mixBlendMode="screen"
            zIndex={0}
          />
        </>
      )}
      {reduceMotion ? (
        <div className="app-content">
          <AppContent>{children}</AppContent>
        </div>
      ) : (
        <ClickSpark
          className="app-content"
          sparkColor="#ff3b3b"
          sparkSize={12}
          sparkRadius={18}
          sparkCount={10}
          duration={450}
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
