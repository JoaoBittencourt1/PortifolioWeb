'use client';

import Reveal from '../../components/effects/Reveal.jsx';
import SectionHead from '../../components/effects/SectionHead.jsx';
import ProjectHero from '../../components/project/ProjectHero.jsx';
import { useLang } from '../../components/lang/lang.js';
import { CONTENT } from './content.js';
import '../../components/project/ProjectPage.css';

function Vanep() {
  const t = CONTENT[useLang()].hero;

  return (
    <>
      <ProjectHero
        title="Vanep"
        tagline={t.tagline}
        links={[{ href: 'https://www.vanep.com.br', label: t.visit }]}
        role={t.role}
        meta={t.meta}
      />
      <Problem />
      <Audiences />
      <Features />
      <Checklist />
      <Architecture />
      <Practices />
      <Vision />
    </>
  );
}

function Problem() {
  const t = CONTENT[useLang()].problem;

  return (
    <section className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />
        <Reveal>
          <p className="section-copy">{t.copy}</p>
        </Reveal>

        <Reveal className="compare-table" delay={0.05}>
          <div className="compare-row compare-row--head" aria-hidden="true">
            <span />
            <span>{t.today}</span>
            <span>{t.withVanep}</span>
          </div>
          {t.rows.map((p, i) => (
            <div key={i} className="compare-row">
              <span className="compare-area">{p.area}</span>
              <span className="compare-today">
                <span className="compare-mobile-label">{t.today}: </span>
                {p.today}
              </span>
              <span className="compare-vanep">
                <span className="compare-mobile-label">Vanep: </span>
                {p.vanep}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Audiences() {
  const t = CONTENT[useLang()].audiences;

  return (
    <section className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />
        <div className="two-col">
          {t.groups.map((a, i) => (
            <Reveal key={i} className="panel" delay={i * 0.08}>
              <h3 className="panel-title">{a.title}</h3>
              <ul className="check-list">
                {a.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
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

function Checklist() {
  const t = CONTENT[useLang()].checklist;

  return (
    <section className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />
        <Reveal>
          <p className="section-copy">{t.copy}</p>
        </Reveal>

        <Reveal as="ol" className="phase-list" delay={0.05}>
          {t.phases.map((c, i) => (
            <li key={i} className="phase">
              <span className="phase-n">{i + 1}</span>
              <span className="phase-title">{c.title}</span>
              <span className="phase-notify">{c.notify}</span>
            </li>
          ))}
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="subhead">{t.statusTitle}</h3>
          <p className="section-copy">{t.statusCopy}</p>
        </Reveal>

        <Reveal className="priority-table" delay={0.05}>
          {t.status.map((s, i) => (
            <div key={i} className="priority-row">
              <span className="priority-n">P{i + 1}</span>
              <span className="priority-source">{s.source}</span>
              <span className="priority-result">{s.result}</span>
            </div>
          ))}
        </Reveal>
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
            <Reveal key={i} className="arch-card" delay={(i % 3) * 0.05}>
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

function Practices() {
  const t = CONTENT[useLang()].practices;

  return (
    <section className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />
        <div className="feature-grid">
          {t.items.map((p, i) => (
            <Reveal key={i} className="feature" delay={(i % 3) * 0.05}>
              <h3 className="feature-title">{p.title}</h3>
              <p className="feature-body">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vision() {
  const t = CONTENT[useLang()].vision;

  return (
    <section className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />
        <Reveal>
          <p className="section-copy">
            {t.copy[0]}
            <strong>{t.copy[1]}</strong>
            {t.copy[2]}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Vanep;
