'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Reveal from '../../components/effects/Reveal.jsx';
import SectionHead from '../../components/effects/SectionHead.jsx';
import ScrollExpand from '../../components/effects/ScrollExpand/ScrollExpand.jsx';
import CardSwap, { Card } from '../../components/effects/CardSwap/CardSwap.jsx';
import TiltedCard from '../../components/effects/TiltedCard/TiltedCard.jsx';
import ThoughtLine from '../../components/effects/ThoughtLine/ThoughtLine.jsx';
import { useLang } from '../../components/lang/lang.js';
import { CONTENT } from './content.js';
import './Home.css';

// WebGL background: browser-only.
const LightRays = dynamic(() => import('../../components/effects/LightRays/LightRays.jsx'), { ssr: false });

const EASE = [0.22, 1, 0.36, 1];

const EMAIL = 'jvabgo@gmail.com';
const GITHUB_URL = 'https://github.com/JoaoBittencourt1';
const LINKEDIN_URL = 'https://linkedin.com/in/joaobittencourt1';

const CONTACT_LINKS = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'GitHub', value: 'github.com/JoaoBittencourt1', href: GITHUB_URL },
  { label: 'LinkedIn', value: 'linkedin.com/in/joaobittencourt1', href: LINKEDIN_URL },
];

function Home() {
  const t = CONTENT[useLang()].hero;

  return (
    <>
      <ScrollExpand
        className="home-scroll-expand"
        src="/meinsky.webp"
        lightSrc="/meinsky-day.webp"
        alt={t.alt}
        title="João Bittencourt"
        scrollHint={t.scrollHint}
        useWindowScroll
      >
        <p className="eyebrow home-scroll-expand__eyebrow">João Bittencourt</p>
        <p className="home-scroll-expand__heading">Software Developer</p>
        <p className="home-scroll-expand__sub">Full stack · Java · Next.js · Flutter</p>
      </ScrollExpand>
      <Intro />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

function Intro() {
  const content = CONTENT[useLang()];
  const t = content.intro;
  const reduceMotion = useReducedMotion();
  const item = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section id="inicio" className="intro">
      {/* Light rays only read well on the dark theme, so CSS hides them on light. Once hidden,
          LightRays sees itself off-screen and stops its WebGL loop; it restarts when shown. */}
      {!reduceMotion && (
        <div className="intro-rays" aria-hidden="true">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.8}
            lightSpread={0.9}
            rayLength={1.6}
            fadeDistance={1}
            mouseInfluence={0.08}
            noiseAmount={0.04}
            distortion={0.03}
          />
        </div>
      )}
      <div className="container intro-grid">
        <div>
          <motion.p className="eyebrow" {...item(0)}>
            {t.eyebrow}
          </motion.p>
          <motion.h1 className="intro-title" {...item(0.05)}>
            {t.title}
          </motion.h1>
          <motion.p className="intro-copy" {...item(0.1)}>
            {t.copy[0]}
            <Link href="/vanep" className="text-link">
              Vanep
            </Link>
            {t.copy[1]}
            <Link href="/linuxbit" className="text-link">
              LinuxBit
            </Link>
            {t.copy[2]}
          </motion.p>
          <motion.div className="intro-cta" {...item(0.15)}>
            <a href="#projetos" className="btn btn-primary">
              {t.ctaProjects}
            </a>
            <a href="#contato" className="btn btn-secondary">
              {t.ctaContact}
            </a>
          </motion.div>
        </div>

        {/* Animated stack on desktop; plain list on small screens or with reduced motion */}
        {!reduceMotion && (
          <motion.div className="now-swap" {...item(0.2)}>
            <CardSwap
              width={340}
              height={210}
              cardDistance={40}
              verticalDistance={44}
              delay={4500}
              skewAmount={4}
              easing="smooth"
              pauseOnHover
            >
              {/* Index keys: CardSwap positions these nodes, so they must survive a language switch. */}
              {content.now.map((n, i) => (
                <Card key={i} customClass="now-card">
                  <span className="now-card-label">{n.label}</span>
                  <span className="now-card-title">{n.title}</span>
                  <span className="now-card-body">{n.body}</span>
                </Card>
              ))}
            </CardSwap>
          </motion.div>
        )}
        <motion.dl className={`now-list${reduceMotion ? '' : ' now-list--compact'}`} {...item(0.2)}>
          {content.now.map((n, i) => (
            <div key={i} className="now-row">
              <dt>{n.label}</dt>
              <dd>{n.title} — {n.body}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function Projects() {
  const t = CONTENT[useLang()].projects;

  return (
    <section id="projetos" className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />

        <div className="projects-grid">
          {t.items.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <ProjectCard project={p} viewLabel={t.viewProject} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, viewLabel }) {
  return (
    <article className="project-card">
      <div className="project-card-media">
        <img src={p.image} alt={p.imageAlt} className="project-card-img" />
      </div>
      <div className="project-card-body">
        <div className="project-card-top">
          <span className="project-card-period">{p.period}</span>
          <span className="project-card-role">{p.role}</span>
        </div>
        <h3 className="project-card-name">
          <Link href={p.href} className="project-card-link">
            {p.name}
          </Link>
        </h3>
        <p className="project-card-summary">{p.summary}</p>
        <ul className="tag-list">
          {p.stack.map((s) => (
            <li key={s} className="tag">
              {s}
            </li>
          ))}
        </ul>
        <div className="project-card-actions">
          <span className="arrow-link">
            {viewLabel} <span aria-hidden="true">→</span>
          </span>
          <a href={p.link.href} target="_blank" rel="noreferrer" className="project-card-repo">
            {p.link.label} ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function About() {
  const t = CONTENT[useLang()].about;

  return (
    <section id="sobre" className="section">
      <div className="container about-grid">
        <div className="about-aside">
          <SectionHead label={t.label} title={t.title} />
          <Reveal className="about-photo">
            <TiltedCard
              imageSrc="/me-graduate.webp"
              altText={t.photoAlt}
              captionText={t.photoCaption}
              containerWidth="280px"
              containerHeight="350px"
              imageWidth="280px"
              imageHeight="350px"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              showMobileWarning={false}
            />
          </Reveal>
        </div>

        <div>
          <Reveal>
            {t.paragraphs.map((text, i) => (
              <p key={i} className="section-copy">
                {text}
              </p>
            ))}
          </Reveal>
          <Reveal className="work-process">
            <p className="eyebrow">{t.processLabel}</p>
            <WorkProcess labels={t} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const WORK_STEP_MS = 1100;

// Plays the "thinking" trace once, the first time it scrolls into view.
function WorkProcess({ labels }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const total = labels.steps.length;

  useEffect(() => {
    if (!inView || reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setCount((c) => {
        if (c > total) window.clearInterval(id);
        return Math.min(c + 1, total + 1);
      });
    }, WORK_STEP_MS);
    return () => window.clearInterval(id);
  }, [inView, reduceMotion, total]);

  const finished = reduceMotion || count > total;
  const steps = finished ? labels.steps : labels.steps.slice(0, count);

  return (
    <div ref={ref}>
      {/* Remount on entering view so the built-in timer starts with the animation */}
      <ThoughtLine
        key={inView ? 'running' : 'idle'}
        label={labels.thinking}
        doneLabel={labels.done}
        steps={steps}
        working={!finished}
        showTimer={!reduceMotion}
        collapseOnSettle={false}
        fontSize={16}
        color="var(--foreground)"
      />
    </div>
  );
}

function Experience() {
  const t = CONTENT[useLang()].experience;
  const listRef = useRef(null);
  const reduceMotion = useReducedMotion();
  // 0 → 1 as the list passes the middle of the viewport; drives the white fill of the rail.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 60%', 'end 60%'] });
  const last = t.items.length - 1;

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />

        <ol ref={listRef} className="timeline">
          <span className="timeline-rail" aria-hidden="true">
            <motion.span
              className="timeline-rail-fill"
              style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
            />
          </span>
          {t.items.map((e, i) => (
            <li key={i} className="timeline-item">
              <TimelineDot
                progress={scrollYProgress}
                at={last ? i / last : 0}
                static={reduceMotion}
              />
              <span className="timeline-period">{e.period}</span>
              <div>
                <h3 className="timeline-title">
                  {e.title}
                  <span className="timeline-place">
                    {' · '}
                    {e.href ? (
                      <Link href={e.href} className="text-link">
                        {e.place}
                      </Link>
                    ) : (
                      e.place
                    )}
                  </span>
                </h3>
                <p className="timeline-body">{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Dot lights up once the rail fill reaches its position (`at`, 0–1 along the list).
// The fill fades in over the hollow dot, so colours come from the theme's CSS variables.
function TimelineDot({ progress, at, static: isStatic }) {
  const lit = useTransform(progress, [Math.max(0, at - 0.02), at], [0, 1]);

  return (
    <span className="timeline-dot" aria-hidden="true">
      <motion.span className="timeline-dot-fill" style={{ opacity: isStatic ? 1 : lit }} />
    </span>
  );
}

function Skills() {
  const t = CONTENT[useLang()].skills;

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead label={t.label} title={t.title} />

        <div className="skills-list">
          {t.groups.map((g, i) => (
            <Reveal key={i} className="skills-row" delay={i * 0.05}>
              <h3 className="skills-title">{g.title}</h3>
              <ul className="tag-list">
                {g.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const t = CONTENT[useLang()].contact;

  return (
    <section id="contato" className="section">
      <div className="container contact-grid">
        <div>
          <SectionHead label={t.label} title={t.title} />
          <Reveal>
            <div className="intro-cta">
              <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                {t.sendEmail}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal as={motion.ul} className="contact-list" delay={0.1}>
          {CONTACT_LINKS.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="contact-link"
              >
                <span className="contact-label">{c.label}</span>
                <span className="contact-value">
                  {c.value} <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default Home;
