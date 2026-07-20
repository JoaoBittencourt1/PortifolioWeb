import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import ParticleBackground from './ParticleBackground.jsx';

async function initParticles(engine) {
  await loadSlim(engine);
}

function ParticlesLayer() {
  return (
    <ParticlesProvider init={initParticles}>
      <ParticleBackground />
    </ParticlesProvider>
  );
}

export default ParticlesLayer;
