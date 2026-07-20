import { useMemo } from 'react';
import { Particles, useParticlesProvider } from '@tsparticles/react';
import './ParticleBackground.css';

function ParticleBackground() {
  const { loaded } = useParticlesProvider();

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        number: { value: 60, density: { enable: true, width: 1200, height: 800 } },
        color: { value: ['#ff4d4d', '#d62839', '#ffffff'] },
        opacity: { value: { min: 0.06, max: 0.3 } },
        size: { value: { min: 1, max: 2.5 } },
        move: {
          enable: true,
          speed: 0.45,
          direction: 'none',
          random: true,
          outModes: { default: 'out' },
        },
        links: {
          enable: true,
          distance: 130,
          color: '#ff4d4d',
          opacity: 0.1,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 150, links: { opacity: 0.22 } },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!loaded) return null;

  return (
    <div className="particle-bg" aria-hidden="true">
      <Particles id="portfolio-particles" options={options} />
    </div>
  );
}

export default ParticleBackground;
