import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import meImg from '../../assets/me.jpeg';
import githubIcon from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon.webp';
import { Link } from 'react-router-dom';
import Reveal from '../../components/effects/Reveal.jsx';
import LiquidGlassButton from '../../components/effects/LiquidGlassButton.jsx';
import DetailModal from '../../components/effects/DetailModal.jsx';
import SectionHead from '../../components/effects/SectionHead.jsx';
import ShinyText from '../../components/effects/ShinyText/ShinyText.jsx';
import GradualBlur from '../../components/effects/GradualBlur/GradualBlur.jsx';
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
  {
    label: 'Atuação atual',
    value: 'Software Engineer Júnior — full stack em produção',
    details:
      'Atuo profissionalmente como Software Engineer Júnior, desenvolvendo funcionalidades full stack em produção com PHP (Laravel), Dart (Flutter) e TypeScript (Next.js), incluindo pipelines de CI/CD. É a minha atividade principal hoje, com foco em qualidade de código, integração entre front-end e back-end e evolução de sistemas já existentes.',
  },
  {
    label: 'Formação',
    value: '6º semestre · Ciência da Computação, UCB',
    details:
      'Curso Ciência da Computação na Universidade Católica de Brasília (UCB), atualmente no 6º semestre, com foco em engenharia de software, arquitetura de sistemas e boas práticas de desenvolvimento.',
  },
  {
    label: 'Em paralelo',
    value: 'Vanep — tech lead da plataforma',
    to: '/vanep',
  },
  {
    label: 'Também em paralelo',
    value: 'LinuxHub — portal de distros + instalador universal',
    to: '/linuxhub',
  },
];

const TIMELINE = [
  {
    period: '6º semestre',
    title: 'Bacharelado em Ciência da Computação',
    place: 'Universidade Católica de Brasília (UCB)',
    body:
      'Aprofundando estudos em Clean Architecture, DDD, TDD, SDD, SOLID e sistemas distribuídos.',
    details:
      'Curso atualmente o 6º semestre de Ciência da Computação na UCB. As disciplinas e estudos paralelos têm sido focados em engenharia de software: Clean Architecture e DDD para modelagem de domínio, TDD e SDD como guia de desenvolvimento, princípios SOLID e Clean Code para manutenibilidade, e fundamentos de sistemas distribuídos como escalonamento horizontal, balanceamento de carga, cache e mensageria.',
  },
  {
    period: '2024',
    title: 'Professor particular',
    place: 'Lógica de programação',
    body: 'Aulas individuais de lógica de programação para iniciantes, com foco em fundamentos e resolução de problemas.',
    details:
      'Dei aulas particulares de lógica de programação para iniciantes, montando exercícios e explicando conceitos como variáveis, estruturas de controle, funções e algoritmos básicos de resolução de problemas. A experiência reforçou minha didática e a capacidade de explicar conceitos técnicos de forma clara.',
  },
  {
    period: '2025',
    title: 'Desenvolvimento de e-commerce',
    place: 'Mabbu',
    body: 'Liderei o desenvolvimento de um e-commerce com Java (Spring Boot), Next.js (TypeScript) e MySQL.',
    details:
      'Liderei tecnicamente o desenvolvimento de uma plataforma de e-commerce do zero. No back-end, usei Java com Spring Boot para construir a API REST e as regras de negócio, com MySQL como banco de dados relacional. No front-end, usei Next.js com TypeScript para a vitrine e o painel administrativo. Também defini a arquitetura do projeto e as integrações entre os times de front-end e back-end.',
  },
  {
    period: '2025',
    title: 'Desenvolvedor Full Stack',
    place: 'Estágio',
    body: 'Desenvolvimento full stack com Laravel (PHP, Blade) e Microsoft SQL Server.',
    details:
      'Atuei como estagiário desenvolvendo funcionalidades full stack com Laravel (PHP) e templates Blade no front-end server-side, além de modelagem e consultas em Microsoft SQL Server. O trabalho incluiu manutenção de código existente, correção de bugs e implementação de novas telas e regras de negócio.',
  },
  {
    period: '2025/2026',
    title: 'Idealizador & Desenvolvedor',
    place: 'LinuxHub',
    body:
      'Desenvolvo um portal de distros Linux com instalador universal, em C# (.NET) e WPF, com arquitetura feature-based e MVVM.',
    details:
      'Também em paralelo ao meu trabalho, idealizo e desenvolvo sozinho o LinuxHub: um portal para explorar distros Linux e um instalador universal que dispensa pendrive. Uso C# com WPF e o padrão MVVM, organizando o projeto por feature (catálogo, assistente de instalação) e seguindo um processo guiado por especificações (OpenSpec), com regras próprias de arquitetura, SOLID e Clean Code documentadas no repositório.',
    link: { href: 'https://github.com/JoaoBittencourt1/LinuxHub', label: 'Ver código no GitHub →' },
  },
  {
    period: '2026',
    title: 'Idealizador & Tech Lead',
    place: 'Vanep',
    body:
      'Lidero o desenvolvimento de uma plataforma de digitalização do transporte escolar, da arquitetura ao deploy.',
    details:
      'Em paralelo ao meu trabalho como Software Engineer, idealizei e lidero a Vanep, uma plataforma de digitalização do transporte escolar. Sou responsável pela arquitetura do sistema, pelas decisões técnicas de stack e infraestrutura, e pelo deploy do produto, aplicando na prática os conceitos de arquitetura de software que estudo.',
  },
  {
    period: '2026',
    title: 'Software Engineer Júnior',
    body: 'Desenvolvimento full stack em produção com PHP (Laravel), Dart (Flutter) e TypeScript (Next.js), incluindo CI/CD — novas funcionalidades, integração entre front-end e back-end e evolução contínua de sistemas já existentes.',
    details:
      'Minha atuação profissional atual. Desenvolvo funcionalidades full stack em produção usando PHP com Laravel no back-end, Dart com Flutter para aplicativos móveis e TypeScript com Next.js no front-end web, com pipelines de CI/CD para build, testes e deploy automatizados. O trabalho envolve tanto a criação de novas funcionalidades quanto a evolução e manutenção de sistemas já em produção, sempre com atenção à integração entre front-end e back-end.',
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
    items: [
      'Java (Spring Boot)',
      'PHP (Laravel)',
      'JavaScript',
      'TypeScript',
      'Next.js',
      'Dart (Flutter)',
      'C# (.NET / WPF)',
    ],
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

const TECH_DETAILS = {
  'Java (Spring Boot)':
    'Linguagem orientada a objetos que uso com o framework Spring Boot para construir APIs REST e regras de negócio no back-end, com foco em injeção de dependência, camadas bem definidas e integração com bancos relacionais.',
  'PHP (Laravel)':
    'Uso PHP com o framework Laravel para desenvolvimento full stack — rotas, controllers, Eloquent ORM e, quando necessário, views Blade — em sistemas que estão atualmente em produção.',
  JavaScript:
    'Linguagem que utilizo tanto no front-end quanto em pequenos scripts de back-end, base para os projetos que hoje construo majoritariamente com TypeScript.',
  TypeScript:
    'Uso TypeScript para adicionar tipagem estática a projetos JavaScript, principalmente em conjunto com Next.js, reduzindo erros em tempo de execução e facilitando a manutenção do código.',
  'Next.js':
    'Framework React que uso para construir interfaces web com renderização híbrida (SSR/SSG), rotas e integração com APIs, tanto em projetos profissionais quanto na Vanep.',
  'Dart (Flutter)':
    'Uso Dart com o framework Flutter para desenvolver aplicativos móveis multiplataforma (Android/iOS) a partir de uma única base de código, atualmente em produção no meu trabalho como Software Engineer.',
  'C# (.NET / WPF)':
    'Uso C# com .NET e WPF para construir o LinuxHub, uma aplicação desktop Windows, aplicando o padrão MVVM e arquitetura organizada por feature.',
  SQL: 'Trabalho com bancos relacionais (PostgreSQL, MySQL, Microsoft SQL Server) escrevendo consultas, modelando esquemas e otimizando queries para os sistemas que desenvolvo.',
  Docker:
    'Uso Docker para empacotar aplicações e suas dependências em containers, garantindo ambientes consistentes entre desenvolvimento, testes e produção.',
  'REST APIs':
    'Projeto e consumo APIs REST seguindo boas práticas de design (recursos, verbos HTTP, status codes) para integração entre front-end e back-end.',
  'OpenAPI Specification':
    'Uso a especificação OpenAPI para documentar contratos de API de forma padronizada, facilitando a comunicação entre times de front-end e back-end.',
  Git: 'Controle de versão no dia a dia com Git, incluindo fluxos de branching, code review via pull requests e resolução de conflitos em times.',
  Linux: 'Uso Linux como ambiente de desenvolvimento e para operações de servidor, incluindo linha de comando, gerenciamento de processos e scripts de automação.',
  'CI/CD':
    'Configuro e mantenho pipelines de integração e entrega contínua, automatizando build, testes e deploy das aplicações que desenvolvo profissionalmente.',
  'Android Studio':
    'IDE que uso no desenvolvimento de aplicativos Android, incluindo debugging, emuladores e configuração de builds para apps Flutter.',
  Nginx:
    'Uso Nginx como servidor web e proxy reverso, configurando roteamento de requisições, balanceamento de carga e SSL para aplicações em produção.',
  'Clean Architecture':
    'Aplico os princípios de Clean Architecture para separar regras de negócio de detalhes de infraestrutura, tornando os sistemas mais testáveis e fáceis de evoluir.',
  DDD: 'Domain-Driven Design — modelo o domínio do problema em código, usando entidades, agregados e linguagem ubíqua para alinhar software e negócio.',
  TDD: 'Test-Driven Development — escrevo testes antes da implementação para guiar o design do código e garantir cobertura desde o início do desenvolvimento.',
  SDD: 'Specification-Driven Development — parto de especificações claras de comportamento antes de implementar, reduzindo ambiguidade nos requisitos.',
  SOLID:
    'Aplico os cinco princípios SOLID (responsabilidade única, aberto/fechado, substituição de Liskov, segregação de interface e inversão de dependência) para escrever código mais manutenível.',
  'Clean Code':
    'Sigo práticas de Clean Code — nomes significativos, funções pequenas e coesas, baixo acoplamento — para manter os sistemas legíveis e fáceis de manter.',
  'Software Testing':
    'Escrevo testes unitários, de integração e, quando aplicável, end-to-end, para garantir a confiabilidade das aplicações antes e depois do deploy.',
};

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
  const [modal, setModal] = useState(null);
  const closeModal = () => setModal(null);

  return (
    <>
      <Hero onOpen={setModal} />
      <Contact />
      <About onOpen={setModal} />
      <Timeline onOpen={setModal} />
      <Skills onOpen={setModal} />
      <DetailModal
        anchor={modal?.anchor}
        title={modal?.title}
        subtitle={modal?.subtitle}
        body={modal?.body}
        link={modal?.link}
        onClose={closeModal}
      />
    </>
  );
}

function Hero({ onOpen }) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <GradualBlur preset="bottom" height="4rem" strength={1.5} opacity={0.7} />
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={reduceMotion ? undefined : heroContainer}
          initial={reduceMotion ? false : 'hidden'}
          animate={reduceMotion ? false : 'visible'}
        >
          <motion.p className="hero-kicker" variants={reduceMotion ? undefined : heroItem}>
            <ShinyText
              text="Software Developer"
              speed={2.4}
              color="#a3a3a3"
              shineColor="#ffffff"
              disabled={reduceMotion}
            />
          </motion.p>
          <motion.div variants={reduceMotion ? undefined : heroItem}>
            <h1 className="hero-title">João Bittencourt</h1>
          </motion.div>
          <motion.div variants={reduceMotion ? undefined : heroItem}>
            <p className="hero-description">
              Software Engineer Júnior full stack, com experiência sólida em Java (Spring Boot),
              PHP (Laravel), PostgreSQL e Next.js (TypeScript/JavaScript). Atuo em todas as camadas
              de uma aplicação — APIs, front-end, banco de dados e escalabilidade horizontal —
              aplicando boas práticas de arquitetura e Clean Code. Em paralelo, idealizo e lidero
              tecnicamente a <Link to="/vanep" className="inline-detail-trigger">Vanep</Link>, uma
              plataforma de digitalização do transporte escolar, e desenvolvo o{' '}
              <Link to="/linuxhub" className="inline-detail-trigger">LinuxHub</Link>, um portal de
              distros Linux com instalador universal.
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
                variants={reduceMotion ? undefined : tagItem}
                whileHover={reduceMotion ? undefined : { scale: 1.06, y: -2 }}
              >
                <button
                  type="button"
                  className="tag tag-glow tag-button"
                  onClick={(e) =>
                    onOpen({
                      title: tech,
                      subtitle: 'Tecnologia',
                      body: TECH_DETAILS[tech],
                      anchor: e.currentTarget.getBoundingClientRect(),
                    })
                  }
                >
                  {tech}
                </button>
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
            arquitetura de sistemas, a Vanep ou o LinuxHub. Escolha o melhor canal abaixo.
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

function About({ onOpen }) {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <SectionHead n="02" title="Sobre" />

        <div className="about-grid">
          <Reveal>
            <p className="section-copy">
              Sou Software Engineer Júnior full stack e estudante de Ciência da Computação (6º
              semestre) na Universidade Católica de Brasília (UCB). Tenho experiência sólida em
              Java (Spring Boot), PHP (Laravel), PostgreSQL e Next.js (TypeScript/JavaScript),
              atuando em APIs, front-end, banco de dados e escalabilidade horizontal, com boas
              práticas de arquitetura — Clean Architecture, DDD, SOLID, Clean Code — e testes (TDD,
              SDD). Sigo aprofundando esses conhecimentos em sistemas distribuídos: balanceamento
              de carga, cache, mensageria, observabilidade e alta disponibilidade. Também tenho
              experiência sólida em infraestrutura e DevOps: Linux, Docker, Nginx, CI/CD e deploy
              automatizado.
            </p>
          </Reveal>

          <Reveal delay={0.12} direction="left">
            <div className="quick-facts">
              {QUICK_FACTS.map((f, i) =>
                f.to ? (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                  >
                    <Link to={f.to} className="quick-fact quick-fact-button">
                      <span className="quick-fact-label">{f.label}</span>
                      <span className="quick-fact-value">{f.value}</span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    type="button"
                    key={f.label}
                    className="quick-fact quick-fact-button"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                    onClick={(e) =>
                      onOpen({
                        title: f.label,
                        subtitle: f.value,
                        body: f.details,
                        anchor: e.currentTarget.getBoundingClientRect(),
                      })
                    }
                  >
                    <span className="quick-fact-label">{f.label}</span>
                    <span className="quick-fact-value">{f.value}</span>
                  </motion.button>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timeline({ onOpen }) {
  return (
    <section id="trajetoria" className="section">
      <div className="container">
        <SectionHead n="03" title="Trajetória" />

        <ol className="timeline">
          {TIMELINE.map((item, i) => (
            <Reveal
              as={motion.li}
              key={item.title}
              className="timeline-item"
              delay={i * 0.07}
            >
              <button
                type="button"
                className="timeline-item-button"
                onClick={(e) =>
                  onOpen({
                    title: item.title,
                    subtitle: [item.period, item.place].filter(Boolean).join(' · '),
                    body: item.details,
                    link: item.link,
                    anchor: e.currentTarget.getBoundingClientRect(),
                  })
                }
              >
                <span className="timeline-marker" aria-hidden="true" />
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-title">{item.title}</h3>
                {item.place && <p className="timeline-place">{item.place}</p>}
                <p className="timeline-body">{item.body}</p>
              </button>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills({ onOpen }) {
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
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                    >
                      <button
                        type="button"
                        className="tag tag-glow tag-button"
                        onClick={(e) =>
                          onOpen({
                            title: item,
                            subtitle: 'Tecnologia',
                            body: TECH_DETAILS[item],
                            anchor: e.currentTarget.getBoundingClientRect(),
                          })
                        }
                      >
                        {item}
                      </button>
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

export default Home;
