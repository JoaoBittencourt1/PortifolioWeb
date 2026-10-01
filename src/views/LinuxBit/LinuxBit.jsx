'use client';

import Reveal from '../../components/effects/Reveal.jsx';
import SectionHead from '../../components/effects/SectionHead.jsx';
import ProjectHero from '../../components/project/ProjectHero.jsx';
import { useLang } from '../../components/lang/lang.js';
import { CONTENT } from './content.js';
import '../../components/project/ProjectPage.css';

const REPO_URL = 'https://github.com/JoaoBittencourt1/LinuxBit';

function LinuxBit() {
  return (
    <>
      <LinuxBitHero />
      <About />
      <Features />
      <Architecture />
    </>
  );
}

function LinuxBitHero() {
  const t = CONTENT[useLang()].hero;

  return (
    <ProjectHero
      title="LinuxBit"
      tagline={t.tagline}
      role={t.role}
      meta={t.meta}
      links={[{ href: REPO_URL, label: t.viewCode }]}
    />
  );
}

function About() {
  const t = CONTENT[useLang()].about;

  return (
    <section className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />
        <Reveal>
          <p className="section-copy">{t.copy}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Features() {
  const t = CONTENT[useLang()].features;

  return (
    <section className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />
        <div className="feature-grid">
          {t.items.map((f, i) => (
            <Reveal key={i} className="feature" delay={(i % 3) * 0.05}>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-body">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const t = CONTENT[useLang()].architecture;

  return (
    <section className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />
        <Reveal>
          <p className="section-copy">{t.copy}</p>
        </Reveal>

        <div className="arch-grid">
          {t.items.map((a, i) => (
            <Reveal key={i} className="arch-card" delay={(i % 2) * 0.05}>
              <span className="arch-label">{a.label}</span>
              <span className="arch-value">{a.value}</span>
              <p className="arch-detail">{a.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LinuxBit;
