'use client';

import Link from 'next/link';
import Reveal from '../effects/Reveal.jsx';

function ProjectHero({ title, tagline, role, meta, links = [] }) {
  return (
    <section className="project-hero">
      <div className="container">
        <Reveal>
          <Link href="/#projetos" className="project-back">
            <span aria-hidden="true">←</span> Projetos
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="project-title">{title}</h1>
          <p className="project-tagline">{tagline}</p>
          <p className="project-role">{role}</p>
          {links.length > 0 && (
            <div className="project-actions">
              {links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal as="dl" className="project-meta" delay={0.1}>
          {meta.map((m) => (
            <div key={m.label} className="project-meta-item">
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectHero;
