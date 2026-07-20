import { motion, useReducedMotion } from 'framer-motion';
import meImg from '../../assets/me.jpeg';
import githubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.webp';
import Reveal from '../../components/effects/Reveal.jsx';
import LiquidGlassButton from '../../components/effects/LiquidGlassButton.jsx';
import './Home.css';

const EASE = [0.22, 1, 0.36, 1];

const HERO_STACK = [
  'Java (Spring Boot)',
  'PHP (Laravel)',
  'JavaScript',
  'TypeScript',
  'Next.js',
  'Dart (Flutter)',
  'SQL',
  'Docker',
];

const QUICK_FACTS = [
  { label: 'Formação', value: '6º semestre · Ciência da Computação, UCB' },
  { label: 'Projeto próprio', value: 'Vanep — liderança técnica full stack' },
  { label: 'Foco de estudo', value: 'Arquitetura de software e sistemas distribuídos' },
];

const TIMELINE = [
  {
    period: '6º semestre',
    title: 'Bacharelado em Ciência da Computação',
    place: 'Universidade Católica de Brasília (UCB)',
    body:
      'Aprofundando estudos em Clean Architecture, DDD, TDD, SDD, SOLID e sistemas distribuídos.',
  },
  {
    period: '2024',
    title: 'Professor particular',
    place: 'Lógica de programação',
    body: 'Aulas individuais de lógica de programação para iniciantes, com foco em fundamentos e resolução de problemas.',
  },
  {
    period: '2025',
    title: 'Desenvolvimento de e-commerce',
    place: 'Mabbu',
    body: 'Liderei o desenvolvimento de um e-commerce com Java (Spring Boot), Next.js (TypeScript) e MySQL.',
  },
  {
    period: '2025',
    title: 'Desenvolvedor Full Stack',
    place: 'Estágio',
    body: 'Desenvolvimento full stack com Laravel (PHP, Blade) e Microsoft SQL Server.',
  },
  {
    period: '2026',
    title: 'Software Engineer Júnior',
    body: 'Desenvolvimento full stack em produção com PHP (Laravel), Dart (Flutter) e TypeScript (Next.js), incluindo CI/CD — novas funcionalidades, integração entre front-end e back-end e evolução contínua de sistemas já existentes.',
  },
  {
    period: '2026',
    title: 'Idealizador & Tech Lead',
    place: 'Vanep',
    body:
      'Lidero o desenvolvimento de uma plataforma de digitalização do transporte escolar, da arquitetura ao deploy.',
  },
];

const CONTACT_LINKS = [
  { label: 'Email', value: 'jvabgo@gmail.com', href: 'mailto:jvabgo@gmail.com' },
  {
    label: 'GitHub',
    value: 'github.com/JoaoBittencourt1',
    href: 'https://github.com/JoaoBittencourt1',
    icon: githubIcon,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/joaobittencourt1',
    href: 'https://linkedin.com/in/joaobittencourt1',
    icon: linkedinIcon,
  },
];

const SKILL_GROUPS = [
  {
    title: 'Linguagens & Frameworks',
    items: ['Java (Spring Boot)', 'PHP (Laravel)', 'JavaScript', 'TypeScript', 'Next.js', 'Dart (Flutter)'],
  },
  {
    title: 'Dados & APIs',
    items: ['SQL', 'REST APIs', 'OpenAPI Specification'],
  },
  {
    title: 'Ferramentas & DevOps',
    items: ['Docker', 'Git', 'Linux', 'CI/CD', 'Android Studio', 'Nginx'],
  },
  {
    title: 'Arquitetura & Práticas',
    items: ['Clean Architecture', 'DDD', 'TDD', 'SDD', 'SOLID', 'Clean Code', 'Software Testing'],
  },
];

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const tagContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.55 },
  },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: EASE },
  },
};

function Home() {
  return (
    <>
      <Hero />
      <Contact />
      <About />
      <Timeline />
      <Skills />
    </>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={reduceMotion ? undefined : heroContainer}
          initial={reduceMotion ? false : 'hidden'}
          animate={reduceMotion ? false : 'visible'}
        >
          <motion.p className="hero-kicker" variants={reduceMotion ? undefined : heroItem}>
            Software Developer
          </motion.p>
          <motion.div variants={reduceMotion ? undefined : heroItem}>
            <h1 className="hero-title">João Bittencourt</h1>
          </motion.div>
          <motion.div variants={reduceMotion ? undefined : heroItem}>
            <p className="hero-description">
              Estudante de Ciência da Computação, apaixonado por arquitetura de sistemas e boas
              práticas de engenharia. Lidero o desenvolvimento full stack da Vanep, uma plataforma
              de digitalização do transporte escolar.
            </p>
          </motion.div>

          <motion.div className="hero-cta" variants={reduceMotion ? undefined : heroItem}>
            <LiquidGlassButton href="#contato" variant="primary">
              Entrar em contato
            </LiquidGlassButton>
            <LiquidGlassButton href="#trajetoria" variant="outline">
              Ver trajetória
            </LiquidGlassButton>
          </motion.div>

          <motion.ul
            className="hero-stack"
            variants={reduceMotion ? undefined : tagContainer}
            initial={reduceMotion ? false : 'hidden'}
            animate={reduceMotion ? false : 'visible'}
          >
            {HERO_STACK.map((tech) => (
              <motion.li
                key={tech}
                className="tag tag-glow"
                variants={reduceMotion ? undefined : tagItem}
                whileHover={reduceMotion ? undefined : { scale: 1.06, y: -2 }}
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero-photo-wrap"
          initial={reduceMotion ? false : { opacity: 0, x: 40, rotate: 2 }}
          animate={reduceMotion ? false : { opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
        >
          <motion.div
            className="hero-photo-frame"
            animate={reduceMotion ? false : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={meImg} alt="Foto de João Bittencourt" className="hero-photo" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <SectionHead n="01" title="Contato" />

        <Reveal>
          <p className="section-copy">
            Estou aberto a novas oportunidades e conversas sobre engenharia de software,
            arquitetura de sistemas ou a Vanep. Escolha o melhor canal abaixo.
          </p>
        </Reveal>

        <ul className="contact-list">
          {CONTACT_LINKS.map((c, i) => (
            <Reveal as={motion.li} key={c.label} className="contact-item" delay={i * 0.08}>
              <motion.a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="contact-link"
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <span className="contact-label">
                  {c.icon && <img src={c.icon} alt="" className="contact-icon" />}
                  {c.label}
                </span>
                <span className="contact-value">{c.value}</span>
              </motion.a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionHead n="02" title="Sobre" />

        <div className="about-grid">
          <Reveal>
            <p className="section-copy">
              Sou estudante de Ciência da Computação (6º semestre) na Universidade Católica de
              Brasília (UCB). Atualmente concentro meus estudos em engenharia de software e
              arquitetura de sistemas, aprofundando conhecimentos em Clean Architecture,
              Domain-Driven Design (DDD), TDD, SDD, SOLID, Clean Code, padrões de projeto e práticas
              voltadas para escalabilidade e sistemas distribuídos — escalonamento horizontal,
              balanceamento de carga, cache, mensageria, observabilidade e alta disponibilidade.
              Também tenho interesse em infraestrutura e DevOps: Linux, Docker, Nginx, CI/CD e
              deploy automatizado.
            </p>
          </Reveal>

          <Reveal delay={0.12} direction="left">
            <dl className="quick-facts">
              {QUICK_FACTS.map((f, i) => (
                <motion.div
                  key={f.label}
                  className="quick-fact"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                >
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </motion.div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="trajetoria" className="section">
      <div className="container">
        <SectionHead n="03" title="Trajetória" />

        <ol className="timeline">
          {TIMELINE.map((item, i) => (
            <Reveal as={motion.li} key={item.title} className="timeline-item" delay={i * 0.07}>
              <span className="timeline-marker" aria-hidden="true" />
              <span className="timeline-period">{item.period}</span>
              <h3 className="timeline-title">{item.title}</h3>
              {item.place && <p className="timeline-place">{item.place}</p>}
              <p className="timeline-body">{item.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead n="04" title="Skills" />

        <div className="skills-groups">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="skills-group">
                <h3 className="skills-group-title">{group.title}</h3>
                <ul className="skills-tags">
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      className="tag tag-glow"
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ n, title }) {
  return (
    <Reveal className="section-head">
      <span className="section-number">{n}</span>
      <h2 className="section-title">{title}</h2>
      <motion.span
        className="section-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ transformOrigin: 'left center' }}
      />
    </Reveal>
  );
}

export default Home;
