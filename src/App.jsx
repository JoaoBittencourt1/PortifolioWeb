import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Vanep from './pages/Vanep/Vanep.jsx';
import LinuxHub from './pages/LinuxHub/LinuxHub.jsx';
import GradientOrbs from './components/effects/GradientOrbs.jsx';
import ParticlesLayer from './components/effects/ParticlesLayer.jsx';
import GhostCursor from './components/effects/GhostCursor/GhostCursor.jsx';
import ClickSpark from './components/effects/ClickSpark/ClickSpark.jsx';
import './components/effects/experimental.css';
import './App.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  return (
    <>
      <div className="side-lines" aria-hidden="true">
        <span className="side-line side-line-1" />
        <span className="side-line side-line-2" />
      </div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vanep" element={<Vanep />} />
        <Route path="/linuxhub" element={<LinuxHub />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const reduceMotion = useReducedMotion();

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
          <AppContent />
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
          <AppContent />
        </ClickSpark>
      )}
    </div>
  );
}

export default App;
