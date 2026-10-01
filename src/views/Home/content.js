// Home page copy in both languages. Language-neutral data (links, images, tech names) is shared.

const PROJECT_BASE = [
  {
    name: 'Vanep',
    href: '/vanep',
    link: { href: 'https://www.vanep.com.br', label: 'vanep.com.br' },
    image: '/projects/vanep-van.webp',
    stack: ['Java 25', 'Spring Boot 4', 'Flutter', 'Next.js', 'PostgreSQL + PostGIS', 'Docker'],
  },
  {
    name: 'LinuxBit',
    href: '/linuxbit',
    link: { href: 'https://github.com/JoaoBittencourt1/LinuxBit', label: 'GitHub' },
    image: '/projects/linuxbit-arch.webp',
    stack: ['C#', '.NET', 'WPF', 'MVVM', 'Bash', 'OpenSpec'],
  },
];

const SKILL_ITEMS = [
  ['Java (Spring Boot)', 'PHP (Laravel)', 'TypeScript', 'JavaScript', 'React', 'Next.js', 'Dart (Flutter)', 'C# (.NET / WPF)'],
  ['Spring Security', 'JWT', 'OAuth 2.0', 'JPA / Hibernate', 'Eloquent (Laravel)', 'Maven', 'REST', 'WebSocket', 'OpenAPI / Swagger'],
  ['PostgreSQL + PostGIS', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Flyway', 'RabbitMQ', 'Kafka'],
  ['Tailwind CSS', 'Vitest', 'BLoC', 'Dio', 'Hive', 'Firebase Cloud Messaging'],
  ['Linux (Ubuntu / Debian)', 'VPS', 'Nginx', 'Caddy', 'Traefik', 'Cloudflare', 'SSH · UFW · fail2ban', 'systemd · cron'],
  ['Docker', 'Docker Compose', 'GitHub Actions', 'GitHub Container Registry', 'Git'],
  ['Prometheus', 'Grafana', 'Loki', 'Sentry', 'Uptime Kuma'],
  ['JUnit', 'Mockito', 'Cypress (E2E)', 'Postman', 'Makefile', 'Android Studio'],
  ['Clean Architecture', 'DDD', 'SOLID', 'Clean Code', 'TDD', 'SDD (OpenSpec)', 'Code review', 'Scrum / Kanban'],
];

const projects = (texts) => PROJECT_BASE.map((p, i) => ({ ...p, ...texts[i] }));
const skillGroups = (titles) => titles.map((title, i) => ({ title, items: SKILL_ITEMS[i] }));

const pt = {
  hero: {
    alt: 'João de costas, olhando a cidade do alto de um prédio',
    scrollHint: 'Role para baixo',
  },
  intro: {
    eyebrow: 'Software Engineer · Full stack',
    title: 'Construo sistemas completos — da API ao app, do banco de dados ao deploy.',
    // Split around the two inline project links: [before Vanep, between, after LinuxBit].
    copy: [
      'Sou João Bittencourt, Software Engineer com experiência em Java (Spring Boot), PHP (Laravel), PostgreSQL e Next.js. Em paralelo, lidero tecnicamente a ',
      ' e, no tempo livre, desenvolvo o ',
      '.',
    ],
    ctaProjects: 'Ver projetos',
    ctaContact: 'Entrar em contato',
  },
  now: [
    { label: 'Atualmente', title: 'Software Engineer', body: 'Full stack em produção com Laravel, Flutter e Next.js.' },
    { label: 'Construindo', title: 'Vanep', body: 'A digitalização da van escolar em um só aplicativo.' },
    { label: 'Por hobby', title: 'LinuxBit', body: 'Portal de distros Linux com instalador universal.' },
    { label: 'Estudando', title: 'Ciência da Computação', body: 'Universidade Católica de Brasília · 6º semestre.' },
  ],
  projects: {
    label: '01 / Projetos',
    title: 'Projetos em destaque',
    viewProject: 'Ver projeto',
    items: projects([
      {
        imageAlt: 'Motorista ao lado de uma van escolar',
        period: '2026 — em desenvolvimento',
        role: 'Tech Lead & Desenvolvedor principal',
        summary:
          'A digitalização da van escolar em um só aplicativo: motoristas verificados, contrato digital, rastreamento em tempo real e notificação a cada etapa do trajeto.',
      },
      {
        imageAlt: 'Desktop do Arch Linux',
        period: '2025 — em desenvolvimento',
        role: 'Idealizador & Desenvolvedor',
        summary:
          'Portal de distros Linux com instalador universal: compare distribuições e instale direto pelo Windows, sem gravar pendrive.',
      },
    ]),
  },
  about: {
    label: '02 / Sobre',
    title: 'Sobre mim',
    photoAlt: 'João Bittencourt na formatura, de beca e capelo',
    photoCaption: 'Formatura · 2023',
    paragraphs: [
      'Tenho 20 anos, moro em Brasília e sou Software Engineer full stack e estudante de Ciência da Computação na Universidade Católica de Brasília. Trabalho de ponta a ponta: APIs em Java (Spring Boot) e PHP (Laravel), interfaces web com React e Next.js, apps mobile em Flutter e bancos como PostgreSQL, MySQL e Redis.',
      'Também cuido do que vem depois do código — servidores Linux, Nginx, Docker, pipelines de CI/CD com GitHub Actions e monitoramento com Prometheus e Grafana. Na Vanep, faço tudo isso da arquitetura ao deploy.',
      'No tempo livre, desenvolvo o LinuxBit por hobby: um app desktop em C# e .NET que ajuda quem quer experimentar Linux a escolher e instalar uma distro.',
      'Gosto de código fácil de manter e evoluir, e hoje estou me aprofundando em sistemas distribuídos: mensageria, cache, escalabilidade e alta disponibilidade.',
    ],
    processLabel: 'Como eu trabalho',
    thinking: 'Pensando…',
    done: 'Do zero ao deploy em',
    steps: [
      'Entendendo o problema',
      'Idealizando a solução',
      'Projetando a arquitetura',
      'Modelando os dados',
      'Implementando e testando',
      'Configurando CI/CD',
      'Fazendo o deploy',
    ],
  },
  experience: {
    label: '03 / Experiência',
    title: 'Trajetória',
    items: [
      {
        period: '2024',
        title: 'Professor particular',
        place: 'Lógica de programação',
        body: 'Aulas individuais para iniciantes, com foco em fundamentos e resolução de problemas.',
      },
      {
        period: '2025',
        title: 'Líder técnico — e-commerce',
        place: 'Mabbu',
        body: 'Liderei o desenvolvimento de um e-commerce do zero com API em Java (Spring Boot), front-end em Next.js (TypeScript) e MySQL.',
      },
      {
        period: '2025',
        title: 'Desenvolvedor Full Stack',
        place: 'Estágio',
        body: 'Telas, regras de negócio e correções com Laravel (PHP, Blade) e Microsoft SQL Server.',
      },
      {
        period: '2025 — atual',
        title: 'Idealizador & Desenvolvedor',
        place: 'LinuxBit',
        href: '/linuxbit',
        body: 'App desktop em C# (.NET/WPF) com MVVM e arquitetura por feature, desenvolvido com processo guiado por especificações (OpenSpec).',
      },
      {
        period: '2026 — atual',
        title: 'Tech Lead & Desenvolvedor principal',
        place: 'Vanep',
        href: '/vanep',
        body: 'Arquitetura, decisões de stack e infraestrutura do app que digitaliza a van escolar, com API em Java/Spring Boot, app Flutter e painel web em Next.js.',
      },
      {
        period: '2026 — atual',
        title: 'Software Engineer',
        place: 'Full stack',
        body: 'Funcionalidades full stack em produção com PHP (Laravel), Dart (Flutter) e TypeScript (Next.js), incluindo pipelines de CI/CD, integração entre front-end e back-end e evolução de sistemas existentes.',
      },
    ],
  },
  skills: {
    label: '04 / Stack',
    title: 'Ferramentas e práticas',
    groups: skillGroups([
      'Linguagens & frameworks',
      'Back-end',
      'Dados & mensageria',
      'Front-end & mobile',
      'Infra & servidores',
      'Containers & CI/CD',
      'Observabilidade',
      'Testes & ferramentas',
      'Arquitetura & práticas',
    ]),
  },
  contact: {
    label: '05 / Contato',
    title: 'Vamos conversar?',
    sendEmail: 'Enviar email',
  },
};

const en = {
  hero: {
    alt: 'João seen from behind, looking at the city from the top of a building',
    scrollHint: 'Scroll down',
  },
  intro: {
    eyebrow: 'Software Engineer · Full stack',
    title: 'I build complete systems — from the API to the app, from the database to deploy.',
    copy: [
      "I'm João Bittencourt, a Software Engineer with experience in Java (Spring Boot), PHP (Laravel), PostgreSQL and Next.js. On the side, I'm the tech lead of ",
      ' and, in my spare time, I build ',
      '.',
    ],
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
  },
  now: [
    { label: 'Currently', title: 'Software Engineer', body: 'Full stack in production with Laravel, Flutter and Next.js.' },
    { label: 'Building', title: 'Vanep', body: 'School van transportation, digitized in a single app.' },
    { label: 'As a hobby', title: 'LinuxBit', body: 'Linux distro portal with a universal installer.' },
    { label: 'Studying', title: 'Computer Science', body: 'Universidade Católica de Brasília · 6th semester.' },
  ],
  projects: {
    label: '01 / Projects',
    title: 'Featured projects',
    viewProject: 'View project',
    items: projects([
      {
        imageAlt: 'Driver standing next to a school van',
        period: '2026 — in development',
        role: 'Tech Lead & Lead Developer',
        summary:
          'School van transportation, digitized in a single app: verified drivers, digital contracts, real-time tracking and a notification at every step of the ride.',
      },
      {
        imageAlt: 'Arch Linux desktop',
        period: '2025 — in development',
        role: 'Creator & Developer',
        summary:
          'Linux distro portal with a universal installer: compare distributions and install straight from Windows, without flashing a USB drive.',
      },
    ]),
  },
  about: {
    label: '02 / About',
    title: 'About me',
    photoAlt: 'João Bittencourt at his graduation, in cap and gown',
    photoCaption: 'Graduation · 2023',
    paragraphs: [
      "I'm 20, based in Brasília, Brazil — a full stack Software Engineer and a Computer Science student at Universidade Católica de Brasília. I work end to end: APIs in Java (Spring Boot) and PHP (Laravel), web interfaces with React and Next.js, mobile apps in Flutter and databases such as PostgreSQL, MySQL and Redis.",
      'I also take care of what comes after the code — Linux servers, Nginx, Docker, CI/CD pipelines with GitHub Actions and monitoring with Prometheus and Grafana. At Vanep, I do all of it, from architecture to deploy.',
      'In my spare time, I build LinuxBit as a hobby: a desktop app in C# and .NET that helps people who want to try Linux choose and install a distro.',
      "I like code that is easy to maintain and evolve, and I'm currently going deeper into distributed systems: messaging, caching, scalability and high availability.",
    ],
    processLabel: 'How I work',
    thinking: 'Thinking…',
    done: 'From zero to deploy in',
    steps: [
      'Understanding the problem',
      'Shaping the solution',
      'Designing the architecture',
      'Modeling the data',
      'Implementing and testing',
      'Setting up CI/CD',
      'Deploying',
    ],
  },
  experience: {
    label: '03 / Experience',
    title: 'Career path',
    items: [
      {
        period: '2024',
        title: 'Private tutor',
        place: 'Programming logic',
        body: 'One-on-one lessons for beginners, focused on fundamentals and problem solving.',
      },
      {
        period: '2025',
        title: 'Tech lead — e-commerce',
        place: 'Mabbu',
        body: 'Led the development of an e-commerce platform from scratch, with a Java (Spring Boot) API, a Next.js (TypeScript) front end and MySQL.',
      },
      {
        period: '2025',
        title: 'Full Stack Developer',
        place: 'Internship',
        body: 'Screens, business rules and bug fixes with Laravel (PHP, Blade) and Microsoft SQL Server.',
      },
      {
        period: '2025 — present',
        title: 'Creator & Developer',
        place: 'LinuxBit',
        href: '/linuxbit',
        body: 'Desktop app in C# (.NET/WPF) with MVVM and a feature-based architecture, built with a spec-driven process (OpenSpec).',
      },
      {
        period: '2026 — present',
        title: 'Tech Lead & Lead Developer',
        place: 'Vanep',
        href: '/vanep',
        body: 'Architecture, stack decisions and infrastructure for the app that digitizes school van transportation, with a Java/Spring Boot API, a Flutter app and a Next.js web panel.',
      },
      {
        period: '2026 — present',
        title: 'Software Engineer',
        place: 'Full stack',
        body: 'Full stack features in production with PHP (Laravel), Dart (Flutter) and TypeScript (Next.js), including CI/CD pipelines, front-end and back-end integration and the evolution of existing systems.',
      },
    ],
  },
  skills: {
    label: '04 / Stack',
    title: 'Tools and practices',
    groups: skillGroups([
      'Languages & frameworks',
      'Back end',
      'Data & messaging',
      'Front end & mobile',
      'Infra & servers',
      'Containers & CI/CD',
      'Observability',
      'Testing & tools',
      'Architecture & practices',
    ]),
  },
  contact: {
    label: '05 / Contact',
    title: "Let's talk",
    sendEmail: 'Send email',
  },
};

export const CONTENT = { pt, en };
