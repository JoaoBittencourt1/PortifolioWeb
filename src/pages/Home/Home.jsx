import meImg from '../../assets/me.jpeg';
import githubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.webp';
import './Home.css';

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
    period: 'Ensino',
    title: 'Professor particular',
    place: 'Lógica de programação',
    body: 'Aulas individuais de lógica de programação para iniciantes, com foco em fundamentos e resolução de problemas.',
  },
  {
    period: 'Liderança técnica',
    title: 'Desenvolvimento de e-commerce',
    place: 'Mabbu',
    body: 'Liderei o desenvolvimento de um e-commerce com Java (Spring Boot), Next.js (TypeScript) e MySQL.',
  },
  {
    period: 'Estágio',
    title: 'Desenvolvedor Full Stack',
    body: 'Desenvolvimento full stack com Laravel (PHP, Blade) e Microsoft SQL Server.',
  },
  {
    period: 'Atual',
    title: 'Software Engineer Júnior',
    body: 'Desenvolvimento full stack em produção com PHP (Laravel), Dart (Flutter) e TypeScript (Next.js), incluindo CI/CD — novas funcionalidades, integração entre front-end e back-end e evolução contínua de sistemas já existentes.',
  },
  {
    period: 'Paralelo',
    title: 'Idealizador & Tech Lead',
    place: 'Vanep',
    body:
      'Lidero o desenvolvimento de uma plataforma de digitalização do transporte escolar, da arquitetura ao deploy.',
  },
  {
    period: '6º semestre',
    title: 'Bacharelado em Ciência da Computação',
    place: 'Universidade Católica de Brasília (UCB)',
    body:
      'Aprofundando estudos em Clean Architecture, DDD, TDD, SDD, SOLID e sistemas distribuídos.',
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
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="animate-rise hero-copy">
          <p className="hero-kicker">Software Developer</p>
          <h1 className="hero-title">João Bittencourt</h1>
          <p className="hero-description">
            Estudante de Ciência da Computação, apaixonado por arquitetura de sistemas e boas
            práticas de engenharia. Lidero o desenvolvimento full stack da Vanep, uma plataforma
            de digitalização do transporte escolar.
          </p>

          <div className="hero-cta">
            <a href="#contato" className="btn btn-primary">
              Entrar em contato
            </a>
            <a href="#trajetoria" className="btn btn-outline">
              Ver trajetória
            </a>
          </div>

          <ul className="hero-stack">
            {HERO_STACK.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise hero-photo-wrap">
          <div className="hero-photo-frame">
            <img src={meImg} alt="Foto de João Bittencourt" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <SectionHead n="01" title="Contato" />

        <p className="section-copy">
          Estou aberto a novas oportunidades e conversas sobre engenharia de software,
          arquitetura de sistemas ou a Vanep. Escolha o melhor canal abaixo.
        </p>

        <ul className="contact-list">
          {CONTACT_LINKS.map((c) => (
            <li key={c.label} className="contact-item">
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="contact-link"
              >
                <span className="contact-label">
                  {c.icon && <img src={c.icon} alt="" className="contact-icon" />}
                  {c.label}
                </span>
                <span className="contact-value">{c.value}</span>
              </a>
            </li>
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

          <dl className="quick-facts">
            {QUICK_FACTS.map((f) => (
              <div key={f.label} className="quick-fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
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
          {TIMELINE.map((item) => (
            <li key={item.title} className="timeline-item">
              <span className="timeline-marker" aria-hidden="true" />
              <span className="timeline-period">{item.period}</span>
              <h3 className="timeline-title">{item.title}</h3>
              {item.place && <p className="timeline-place">{item.place}</p>}
              <p className="timeline-body">{item.body}</p>
            </li>
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
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="skills-group">
              <h3 className="skills-group-title">{group.title}</h3>
              <ul className="skills-tags">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ n, title }) {
  return (
    <div className="section-head">
      <span className="section-number">{n}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-rule" />
    </div>
  );
}

export default Home;
