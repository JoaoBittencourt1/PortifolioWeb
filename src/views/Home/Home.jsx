'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Reveal from '../../components/effects/Reveal.jsx';
import SectionHead from '../../components/effects/SectionHead.jsx';
import ScrollExpand from '../../components/effects/ScrollExpand/ScrollExpand.jsx';
import PixelSwap from '../../components/effects/PixelSwap/PixelSwap.jsx';
import CardSwap, { Card } from '../../components/effects/CardSwap/CardSwap.jsx';
import TiltedCard from '../../components/effects/TiltedCard/TiltedCard.jsx';
import ThoughtLine from '../../components/effects/ThoughtLine/ThoughtLine.jsx';
import './Home.css';

// WebGL background: browser-only.
const LightRays = dynamic(() => import('../../components/effects/LightRays/LightRays.jsx'), { ssr: false });

const EASE = [0.22, 1, 0.36, 1];

const EMAIL = 'jvabgo@gmail.com';
const GITHUB_URL = 'https://github.com/JoaoBittencourt1';
const LINKEDIN_URL = 'https://linkedin.com/in/joaobittencourt1';

const NOW = [
  { label: 'Atualmente', title: 'Software Engineer', body: 'Full stack em produção com Laravel, Flutter e Next.js.' },
  { label: 'Construindo', title: 'Vanep', body: 'A digitalização da van escolar em um só aplicativo.' },
  { label: 'Por hobby', title: 'LinuxBit', body: 'Portal de distros Linux com instalador universal.' },
  { label: 'Estudando', title: 'Ciência da Computação', body: 'Universidade Católica de Brasília · 6º semestre.' },
];

const WORK_STEPS = [
  'Entendendo o problema',
  'Idealizando a solução',
  'Projetando a arquitetura',
  'Modelando os dados',
  'Implementando e testando',
  'Configurando CI/CD',
  'Fazendo o deploy',
];

const PROJECTS = [
  {
    name: 'Vanep',
    href: '/vanep',
    link: { href: 'https://www.vanep.com.br', label: 'vanep.com.br' },
    media: [
      { src: '/projects/vanep-van.webp', alt: 'Motorista ao lado de uma van escolar' },
      { src: '/projects/vanep-embarque.webp', alt: 'Crianças embarcando na van escolar' },
    ],
    period: '2026 — em desenvolvimento',
    role: 'Tech Lead & Desenvolvedor principal',
    summary:
      'A digitalização da van escolar em um só aplicativo: motoristas verificados, contrato digital, rastreamento em tempo real e notificação a cada etapa do trajeto.',
    stack: ['Java 25', 'Spring Boot 4', 'Flutter', 'Next.js', 'PostgreSQL + PostGIS', 'Docker'],
  },
  {
    name: 'LinuxBit',
    href: '/linuxbit',
    link: { href: 'https://github.com/JoaoBittencourt1/LinuxBit', label: 'GitHub' },
    media: [
      { src: '/projects/linuxbit-arch.webp', alt: 'Desktop do Arch Linux' },
      { src: '/projects/linuxbit-popos.webp', alt: 'Desktop do Pop!_OS' },
    ],
    period: '2025 — em desenvolvimento',
    role: 'Idealizador & Desenvolvedor',
    summary:
      'Portal de distros Linux com instalador universal: compare distribuições e instale direto pelo Windows, sem gravar pendrive.',
    stack: ['C#', '.NET', 'WPF', 'MVVM', 'Bash', 'OpenSpec'],
  },
];

const EXPERIENCE = [
  {
    period: '2026 — atual',
    title: 'Software Engineer',
    place: 'Full stack',
    body: 'Funcionalidades full stack em produção com PHP (Laravel), Dart (Flutter) e TypeScript (Next.js), incluindo pipelines de CI/CD, integração entre front-end e back-end e evolução de sistemas existentes.',
  },
  {
    period: '2026 — atual',
    title: 'Tech Lead & Desenvolvedor principal',
    place: 'Vanep',
    href: '/vanep',
    body: 'Arquitetura, decisões de stack e infraestrutura do app que digitaliza a van escolar, com API em Java/Spring Boot, app Flutter e painel web em Next.js.',
  },
  {
    period: '2025 — atual',
    title: 'Idealizador & Desenvolvedor',
    place: 'LinuxBit',
    href: '/linuxbit',
    body: 'App desktop em C# (.NET/WPF) com MVVM e arquitetura por feature, desenvolvido com processo guiado por especificações (OpenSpec).',
  },
  {
    period: '2025',
    title: 'Desenvolvedor Full Stack',
    place: 'Estágio',
    body: 'Telas, regras de negócio e correções com Laravel (PHP, Blade) e Microsoft SQL Server.',
  },
  {
    period: '2025',
    title: 'Líder técnico — e-commerce',
    place: 'Mabbu',
    body: 'Liderei o desenvolvimento de um e-commerce do zero com API em Java (Spring Boot), front-end em Next.js (TypeScript) e MySQL.',
  },
  {
    period: '2024',
    title: 'Professor particular',
    place: 'Lógica de programação',
    body: 'Aulas individuais para iniciantes, com foco em fundamentos e resolução de problemas.',
  },
];

const SKILL_GROUPS = [
  {
    title: 'Linguagens & frameworks',
    items: ['Java (Spring Boot)', 'PHP (Laravel)', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Dart (Flutter)', 'C# (.NET / WPF)'],
  },
  {
    title: 'Back-end',
    items: ['Spring Security', 'JWT', 'OAuth 2.0', 'JPA / Hibernate', 'Maven', 'REST', 'WebSocket', 'OpenAPI / Swagger'],
  },
  {
    title: 'Dados & mensageria',
    items: ['PostgreSQL + PostGIS', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Flyway', 'RabbitMQ', 'Kafka'],
  },
  {
    title: 'Front-end & mobile',
    items: ['Tailwind CSS', 'Vitest', 'BLoC', 'Dio', 'Hive', 'Firebase Cloud Messaging'],
  },
  {
    title: 'Infra & servidores',
    items: ['Linux (Ubuntu / Debian)', 'VPS', 'Nginx', 'Caddy', 'Traefik', 'Cloudflare', 'SSH · UFW · fail2ban', 'systemd · cron'],
  },
  {
    title: 'Containers & CI/CD',
    items: ['Docker', 'Docker Compose', 'GitHub Actions', 'GitHub Container Registry', 'Git'],
  },
  { title: 'Observabilidade', items: ['Prometheus', 'Grafana', 'Loki', 'Sentry', 'Uptime Kuma'] },
  {
    title: 'Testes & ferramentas',
    items: ['JUnit', 'Mockito', 'Cypress (E2E)', 'Postman', 'Makefile', 'Android Studio'],
  },
  {
    title: 'Arquitetura & práticas',
    items: ['Clean Architecture', 'DDD', 'SOLID', 'Clean Code', 'TDD', 'SDD (OpenSpec)', 'Code review', 'Scrum / Kanban'],
  },
];

const CONTACT_LINKS = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'GitHub', value: 'github.com/JoaoBittencourt1', href: GITHUB_URL },
  { label: 'LinkedIn', value: 'linkedin.com/in/joaobittencourt1', href: LINKEDIN_URL },
];

function Home() {
  return (
    <>
      <ScrollExpand
        className="home-scroll-expand"
        src="/meinsky.webp"
        alt="João de costas, olhando a cidade à noite do alto de um prédio"
        title="João Bittencourt"
        scrollHint="Role para baixo"
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
            Software Engineer · Full stack
          </motion.p>
          <motion.h1 className="intro-title" {...item(0.05)}>
            Construo sistemas completos — da API ao app, do banco de dados ao deploy.
          </motion.h1>
          <motion.p className="intro-copy" {...item(0.1)}>
            Sou João Bittencourt, Software Engineer com experiência em Java (Spring Boot),
            PHP (Laravel), PostgreSQL e Next.js. Em paralelo, lidero tecnicamente a{' '}
            <Link href="/vanep" className="text-link">
              Vanep
            </Link>{' '}
            e, no tempo livre, desenvolvo o{' '}
            <Link href="/linuxbit" className="text-link">
              LinuxBit
            </Link>
            .
          </motion.p>
          <motion.div className="intro-cta" {...item(0.15)}>
            <a href="#projetos" className="btn btn-primary">
              Ver projetos
            </a>
            <a href="#contato" className="btn btn-secondary">
              Entrar em contato
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
              {NOW.map((n) => (
                <Card key={n.title} customClass="now-card">
                  <span className="now-card-label">{n.label}</span>
                  <span className="now-card-title">{n.title}</span>
                  <span className="now-card-body">{n.body}</span>
                </Card>
              ))}
            </CardSwap>
          </motion.div>
        )}
        <motion.dl className={`now-list${reduceMotion ? '' : ' now-list--compact'}`} {...item(0.2)}>
          {NOW.map((n) => (
            <div key={n.title} className="now-row">
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
  return (
    <section id="projetos" className="section">
      <div className="container">
        <SectionHead label="01 / Projetos" title="Projetos em destaque" />

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const HOVER_INTENT_MS = 100;

// Hovering or focusing anywhere on the card swaps the cover image. A short hover-intent
// delay keeps a pointer just passing over the card from triggering the swap.
function ProjectCard({ project: p }) {
  const [active, setActive] = useState(false);
  const intentRef = useRef(0);

  const activate = () => {
    window.clearTimeout(intentRef.current);
    intentRef.current = window.setTimeout(() => setActive(true), HOVER_INTENT_MS);
  };
  const deactivate = () => {
    window.clearTimeout(intentRef.current);
    setActive(false);
  };

  useEffect(() => () => window.clearTimeout(intentRef.current), []);

  return (
    <article
      className="project-card"
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onFocus={() => setActive(true)}
      onBlur={deactivate}
    >
      <PixelSwap
        className="project-card-media"
        trigger="manual"
        active={active}
        aspectRatio="16 / 9"
        pixelSize={48}
        pattern="diagonal"
        randomness={0.35}
        duration={900}
        pixelDuration={320}
        firstContent={<img src={p.media[0].src} alt={p.media[0].alt} className="project-card-img" />}
        secondContent={<img src={p.media[1].src} alt={p.media[1].alt} className="project-card-img" />}
      />
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
            Ver projeto <span aria-hidden="true">→</span>
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
  return (
    <section id="sobre" className="section">
      <div className="container about-grid">
        <div className="about-aside">
          <SectionHead label="02 / Sobre" title="Sobre mim" />
          <Reveal className="about-photo">
            <TiltedCard
              imageSrc="/me-graduate.webp"
              altText="João Bittencourt na formatura, de beca e capelo"
              captionText="Formatura · 2023"
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
            <p className="section-copy">
              Tenho 20 anos, moro em Brasília e sou Software Engineer full stack e estudante de
              Ciência da Computação na Universidade Católica de Brasília. Trabalho de ponta a ponta: APIs em Java (Spring Boot) e PHP
              (Laravel), interfaces web com React e Next.js, apps mobile em Flutter e bancos como
              PostgreSQL, MySQL e Redis.
            </p>
            <p className="section-copy">
              Também cuido do que vem depois do código — servidores Linux, Nginx, Docker, pipelines
              de CI/CD com GitHub Actions e monitoramento com Prometheus e Grafana. Na Vanep, faço
              tudo isso da arquitetura ao deploy.
            </p>
            <p className="section-copy">
              No tempo livre, desenvolvo o LinuxBit por hobby: um app desktop em C# e .NET que
              ajuda quem quer experimentar Linux a escolher e instalar uma distro.
            </p>
            <p className="section-copy">
              Gosto de código fácil de manter e evoluir, e hoje estou me aprofundando em sistemas
              distribuídos: mensageria, cache, escalabilidade e alta disponibilidade.
            </p>
          </Reveal>
          <Reveal className="work-process">
            <p className="eyebrow">Como eu trabalho</p>
            <WorkProcess />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const WORK_STEP_MS = 1100;

// Plays the "thinking" trace once, the first time it scrolls into view.
function WorkProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setCount((c) => {
        if (c > WORK_STEPS.length) window.clearInterval(id);
        return Math.min(c + 1, WORK_STEPS.length + 1);
      });
    }, WORK_STEP_MS);
    return () => window.clearInterval(id);
  }, [inView, reduceMotion]);

  const finished = reduceMotion || count > WORK_STEPS.length;
  const steps = finished ? WORK_STEPS : WORK_STEPS.slice(0, count);

  return (
    <div ref={ref}>
      {/* Remount on entering view so the built-in timer starts with the animation */}
      <ThoughtLine
        key={inView ? 'running' : 'idle'}
        label="Pensando…"
        doneLabel="Do zero ao deploy em"
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
  const listRef = useRef(null);
  const reduceMotion = useReducedMotion();
  // 0 → 1 as the list passes the middle of the viewport; drives the white fill of the rail.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 60%', 'end 60%'] });
  const last = EXPERIENCE.length - 1;

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <SectionHead label="03 / Experiência" title="Trajetória" />

        <ol ref={listRef} className="timeline">
          <span className="timeline-rail" aria-hidden="true">
            <motion.span
              className="timeline-rail-fill"
              style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
            />
          </span>
          {EXPERIENCE.map((e, i) => (
            <li key={`${e.title}-${e.place}`} className="timeline-item">
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
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead label="04 / Stack" title="Ferramentas e práticas" />

        <div className="skills-list">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} className="skills-row" delay={i * 0.05}>
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
  return (
    <section id="contato" className="section">
      <div className="container contact-grid">
        <div>
          <SectionHead label="05 / Contato" title="Vamos conversar?" />
          <Reveal>
            <p className="section-copy">
              Aberto a oportunidades e conversas sobre engenharia de software, arquitetura de
              sistemas, a Vanep ou o LinuxBit.
            </p>
            <div className="intro-cta">
              <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                Enviar email
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
