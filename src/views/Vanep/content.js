// Vanep project page copy in both languages.

const STACK = 'Java · Spring Boot · Flutter · Next.js · PostgreSQL';

const pt = {
  hero: {
    tagline:
      'A digitalização da van escolar em um só aplicativo. Tudo o que hoje acontece por indicação, no grupo de WhatsApp e no contrato de papel passa a caber no celular: motoristas verificados, contrato digital, a van no mapa em tempo real e um aviso a cada etapa do trajeto.',
    role: 'Idealizei o produto, sou o desenvolvedor principal e lidero as decisões técnicas — arquitetura, stack, infraestrutura e deploy — em paralelo ao meu trabalho como Software Engineer.',
    visit: 'Visitar vanep.com.br ↗',
    meta: [
      { label: 'Papel', value: 'Idealizador, Tech Lead e Desenvolvedor principal' },
      { label: 'Período', value: '2026 — em desenvolvimento' },
      { label: 'Plataformas', value: 'App Android/iOS, painel web e API' },
      { label: 'Stack', value: STACK },
    ],
  },
  problem: {
    label: '01 / Problema',
    title: 'Um mercado inteiro operando na informalidade',
    copy: 'O transporte escolar no Brasil funciona por indicação, grupos de WhatsApp, contratos em papel e cobrança manual. Não há verificação de quem dirige, registro do que foi combinado nem forma de saber onde a van está.',
    today: 'Hoje',
    withVanep: 'Com a Vanep',
    rows: [
      { area: 'Contratação', today: 'Por indicação, sem verificar documentação', vanep: 'Motoristas com documentos validados e avaliações' },
      { area: 'Contratos', today: 'Em papel, sem padrão nem histórico', vanep: 'Contrato digital versionado, com partes e datas registradas' },
      { area: 'Pagamentos', today: 'Dinheiro ou transferência, cobrados manualmente', vanep: 'Mensalidades centralizadas, com histórico e controle de inadimplência' },
      { area: 'Acompanhamento', today: 'Inexistente — os pais não sabem onde está a van', vanep: 'Localização em tempo real e notificação a cada etapa' },
      { area: 'Comunicação', today: 'Grupos de WhatsApp sem registro', vanep: 'Chat e notificações dentro da plataforma' },
      { area: 'Gestão do motorista', today: 'Rotas, presença e finanças no caderno', vanep: 'Rotas, checklist, documentos e financeiro em um painel' },
    ],
  },
  audiences: {
    label: '02 / Solução',
    title: 'Um produto, dois lados do mercado',
    groups: [
      {
        title: 'Para o responsável',
        items: [
          'Encontrar motoristas verificados perto da escola',
          'Enviar proposta com endereços, horários e valor',
          'Contratar com contrato digital',
          'Ver a van no mapa durante a rota',
          'Receber aviso de embarque e chegada',
          'Avisar com um toque que o aluno não vai hoje',
        ],
      },
      {
        title: 'Para o motorista',
        items: [
          'Ser encontrado por novos clientes na busca',
          'Gerenciar alunos, turnos e contratos em um só lugar',
          'Reduzir a inadimplência com cobrança recorrente',
          'Montar a rota e navegar pelo Waze ou Google Maps',
          'Receber alertas antes de os documentos vencerem',
          'Convidar um assistente para ajudar no checklist',
        ],
      },
    ],
  },
  features: {
    label: '03 / Funcionalidades',
    title: 'O que a plataforma faz',
    items: [
      { title: 'Busca e propostas', body: 'Busca de transportadores por região e escola. O responsável envia uma proposta com endereços, horários e valor; o motorista aceita ou recusa.' },
      { title: 'Contrato digital', body: 'Gerado automaticamente após o aceite, vinculando aluno e motorista, com ciclo de vida próprio e histórico de versões.' },
      { title: 'Gestão financeira', body: 'Mensalidades, histórico de pagamentos e total a receber, substituindo a cobrança manual para os dois lados.' },
      { title: 'Rotas e navegação', body: 'O motorista monta e reordena as paradas; a navegação abre no Waze, Google Maps ou Apple Maps via deep link, sem custo de API de rotas.' },
      { title: 'Gestão documental', body: 'Cadastro e validação de CNH, CRLV e demais documentos, com alertas antes do vencimento e bloqueio de novas contratações se algo vencer.' },
      { title: 'Assistente da van', body: 'Assistentes convidados ajudam no checklist, com vínculo N:N entre assistentes e vans e permissões restritas.' },
    ],
  },
  checklist: {
    label: '04 / Em detalhe',
    title: 'Checklist de rota e status automático',
    copy: 'O centro da operação diária. Cada aluno passa por até quatro fases; o motorista confirma cada uma com um toque — ou em lote, quando vários alunos embarcam na mesma parada — e o responsável é notificado na hora. Contratos só de ida têm as duas primeiras fases.',
    phases: [
      { title: 'Embarque em casa', notify: '“Ana embarcou às 06:52.”' },
      { title: 'Chegada na escola', notify: '“Ana chegou à escola às 07:18.”' },
      { title: 'Embarque na volta', notify: '“Ana embarcou às 12:05.”' },
      { title: 'Chegada em casa', notify: '“Ana chegou em casa às 12:34.”' },
    ],
    statusTitle: 'Status do motorista, sem input manual',
    statusCopy:
      'O status que aparece na busca e para os clientes é derivado pelo sistema a partir de três camadas de prioridade. O motorista não precisa lembrar de atualizar nada durante a rota.',
    status: [
      { source: 'Ajuste manual do dia', result: 'Status definido pelo motorista' },
      { source: 'Ação na rota (rota iniciada + fase do checklist)', result: 'Em rota · A caminho do aluno · Levando o aluno para casa' },
      { source: 'Expediente configurado (dias e horários)', result: 'Disponível · Fora do expediente' },
    ],
  },
  architecture: {
    label: '05 / Arquitetura',
    title: 'Como o sistema é dividido',
    copy: 'Defini a stack e a arquitetura do zero, em repositórios separados para API, app e painel. Cada camada evolui no seu ritmo, e um banco único, organizado por domínio, permite crescer sem acoplamento excessivo.',
    items: [
      {
        label: 'API',
        value: 'Java 25 · Spring Boot 4',
        detail: 'Regras de negócio, contratos, financeiro, documentos e notificações. Spring Security com JWT e OAuth 2.0, JPA, migrações com Flyway e documentação OpenAPI.',
      },
      {
        label: 'App mobile',
        value: 'Flutter (Dart)',
        detail: 'Um app para responsáveis, motoristas e assistentes, em Android e iOS. Estado com BLoC, HTTP com Dio, cache local com Hive e armazenamento seguro de tokens.',
      },
      {
        label: 'Painel administrativo',
        value: 'Next.js · TypeScript',
        detail: 'Uso interno: gestão de usuários, aprovação de documentos e monitoramento. Tailwind CSS e testes com Vitest.',
      },
      {
        label: 'Dados',
        value: 'PostgreSQL + PostGIS',
        detail: 'Banco único com separação lógica por domínio e extensão geoespacial para busca por região, rotas e tracking.',
      },
      {
        label: 'Tempo real',
        value: 'WebSocket + Redis Pub/Sub',
        detail: 'Localização da van e chat. O Redis distribui os eventos entre instâncias, para a API escalar horizontalmente sem estado.',
      },
      {
        label: 'Notificações',
        value: 'Firebase Cloud Messaging',
        detail: 'Push para Android e iOS a cada fase do checklist, com notificações in-app como fallback.',
      },
    ],
  },
  practices: {
    label: '06 / Engenharia',
    title: 'Decisões e práticas',
    items: [
      { title: 'Pacotes por funcionalidade', body: 'Cada feature (client, contract, driver…) tem seus próprios controller, service, repository, dto, mapper e entity. O que é compartilhado vai para uma área comum, em vez de ser duplicado.' },
      { title: 'Constitution por repositório', body: 'Cada repo tem um documento com as regras obrigatórias de arquitetura, nomenclatura e Clean Code, que vale para pessoas e para agentes de IA.' },
      { title: 'Specs antes do código', body: 'Mudanças relevantes começam como proposta e especificação versionada (OpenSpec), revisadas antes da implementação.' },
      { title: 'Qualidade no CI', body: 'Formatação com Spotless (Google Java Format) verificada no build, testes de integração com H2 em memória e imagem Docker para deploy.' },
      { title: 'Segurança e LGPD', body: 'Access token curto com refresh token rotativo, dados sensíveis criptografados, localização do motorista descartada ao fim da rota e avaliações sem vínculo com quem avaliou.' },
      { title: 'Ambiente reproduzível', body: 'Docker Compose com PostgreSQL e Mailpit, Makefile com atalhos e geração automática do .env de desenvolvimento.' },
    ],
  },
  vision: {
    label: '07 / Visão',
    title: 'Além de um catálogo de motoristas',
    // Split around the emphasised part: [before, <strong>, after].
    copy: [
      'A busca é só a porta de entrada. O objetivo de longo prazo é ser o sistema operacional do transporte escolar — ',
      'ERP, CRM, contratos, financeiro e rotas',
      ' em um só lugar para quem vive dessa atividade.',
    ],
  },
};

const en = {
  hero: {
    tagline:
      'School van transportation, digitized in a single app. Everything that today happens by word of mouth, in WhatsApp groups and on paper contracts now fits on a phone: verified drivers, digital contracts, the van on the map in real time and a notification at every step of the ride.',
    role: 'I conceived the product, I am the lead developer and I drive the technical decisions — architecture, stack, infrastructure and deploy — alongside my job as a Software Engineer.',
    visit: 'Visit vanep.com.br ↗',
    meta: [
      { label: 'Role', value: 'Creator, Tech Lead and Lead Developer' },
      { label: 'Period', value: '2026 — in development' },
      { label: 'Platforms', value: 'Android/iOS app, web panel and API' },
      { label: 'Stack', value: STACK },
    ],
  },
  problem: {
    label: '01 / Problem',
    title: 'An entire market running informally',
    copy: 'School transportation in Brazil runs on word of mouth, WhatsApp groups, paper contracts and manual billing. Nobody verifies who is driving, nothing records what was agreed and there is no way to know where the van is.',
    today: 'Today',
    withVanep: 'With Vanep',
    rows: [
      { area: 'Hiring', today: 'By word of mouth, with no document checks', vanep: 'Drivers with validated documents and reviews' },
      { area: 'Contracts', today: 'On paper, with no standard or history', vanep: 'Versioned digital contract, with parties and dates on record' },
      { area: 'Payments', today: 'Cash or bank transfer, collected manually', vanep: 'Centralized monthly fees, with history and late-payment tracking' },
      { area: 'Tracking', today: "None — parents don't know where the van is", vanep: 'Real-time location and a notification at every step' },
      { area: 'Communication', today: 'WhatsApp groups with no record', vanep: 'Chat and notifications inside the platform' },
      { area: 'Driver management', today: 'Routes, attendance and finances in a notebook', vanep: 'Routes, checklist, documents and finances in one dashboard' },
    ],
  },
  audiences: {
    label: '02 / Solution',
    title: 'One product, two sides of the market',
    groups: [
      {
        title: 'For parents',
        items: [
          'Find verified drivers near the school',
          'Send a proposal with addresses, times and price',
          'Hire with a digital contract',
          'See the van on the map during the route',
          'Get notified on boarding and arrival',
          "Tell the driver with one tap that the student isn't going today",
        ],
      },
      {
        title: 'For drivers',
        items: [
          'Be found by new customers in search',
          'Manage students, shifts and contracts in one place',
          'Reduce late payments with recurring billing',
          'Build the route and navigate with Waze or Google Maps',
          'Get alerts before documents expire',
          'Invite an assistant to help with the checklist',
        ],
      },
    ],
  },
  features: {
    label: '03 / Features',
    title: 'What the platform does',
    items: [
      { title: 'Search and proposals', body: 'Search for drivers by region and school. The parent sends a proposal with addresses, times and price; the driver accepts or declines.' },
      { title: 'Digital contract', body: 'Generated automatically after acceptance, linking student and driver, with its own lifecycle and version history.' },
      { title: 'Financial management', body: 'Monthly fees, payment history and total receivable, replacing manual collection for both sides.' },
      { title: 'Routes and navigation', body: 'The driver builds and reorders the stops; navigation opens in Waze, Google Maps or Apple Maps via deep link, with no routing API cost.' },
      { title: 'Document management', body: "Registration and validation of the driver's license, vehicle registration and other documents, with alerts before expiry and a block on new contracts if anything expires." },
      { title: 'Van assistant', body: 'Invited assistants help with the checklist, with a many-to-many link between assistants and vans and restricted permissions.' },
    ],
  },
  checklist: {
    label: '04 / In detail',
    title: 'Route checklist and automatic status',
    copy: 'The core of the daily operation. Each student goes through up to four phases; the driver confirms each one with a tap — or in bulk, when several students board at the same stop — and the parent is notified right away. One-way contracts only have the first two phases.',
    phases: [
      { title: 'Pickup at home', notify: '“Ana boarded at 06:52.”' },
      { title: 'Arrival at school', notify: '“Ana arrived at school at 07:18.”' },
      { title: 'Pickup on the way back', notify: '“Ana boarded at 12:05.”' },
      { title: 'Arrival at home', notify: '“Ana arrived home at 12:34.”' },
    ],
    statusTitle: 'Driver status, with no manual input',
    statusCopy:
      "The status shown in search and to customers is derived by the system from three priority layers. The driver doesn't need to remember to update anything during the route.",
    status: [
      { source: 'Manual adjustment for the day', result: 'Status set by the driver' },
      { source: 'Route action (route started + checklist phase)', result: 'On route · On the way to the student · Taking the student home' },
      { source: 'Configured working hours (days and times)', result: 'Available · Off hours' },
    ],
  },
  architecture: {
    label: '05 / Architecture',
    title: 'How the system is split',
    copy: 'I defined the stack and the architecture from scratch, in separate repositories for the API, the app and the panel. Each layer evolves at its own pace, and a single database, organized by domain, lets it grow without excessive coupling.',
    items: [
      {
        label: 'API',
        value: 'Java 25 · Spring Boot 4',
        detail: 'Business rules, contracts, finances, documents and notifications. Spring Security with JWT and OAuth 2.0, JPA, Flyway migrations and OpenAPI documentation.',
      },
      {
        label: 'Mobile app',
        value: 'Flutter (Dart)',
        detail: 'One app for parents, drivers and assistants, on Android and iOS. State with BLoC, HTTP with Dio, local cache with Hive and secure token storage.',
      },
      {
        label: 'Admin panel',
        value: 'Next.js · TypeScript',
        detail: 'Internal use: user management, document approval and monitoring. Tailwind CSS and tests with Vitest.',
      },
      {
        label: 'Data',
        value: 'PostgreSQL + PostGIS',
        detail: 'A single database with logical separation by domain and a geospatial extension for region search, routes and tracking.',
      },
      {
        label: 'Real time',
        value: 'WebSocket + Redis Pub/Sub',
        detail: 'Van location and chat. Redis distributes events across instances, so the API scales horizontally and stays stateless.',
      },
      {
        label: 'Notifications',
        value: 'Firebase Cloud Messaging',
        detail: 'Push for Android and iOS at every checklist phase, with in-app notifications as a fallback.',
      },
    ],
  },
  practices: {
    label: '06 / Engineering',
    title: 'Decisions and practices',
    items: [
      { title: 'Packages by feature', body: 'Each feature (client, contract, driver…) has its own controller, service, repository, dto, mapper and entity. Shared code goes to a common area instead of being duplicated.' },
      { title: 'A constitution per repository', body: 'Each repo has a document with the mandatory rules for architecture, naming and Clean Code, which applies to people and to AI agents alike.' },
      { title: 'Specs before code', body: 'Relevant changes start as a proposal and a versioned specification (OpenSpec), reviewed before implementation.' },
      { title: 'Quality in CI', body: 'Formatting with Spotless (Google Java Format) checked in the build, integration tests with in-memory H2 and a Docker image for deploy.' },
      { title: 'Security and LGPD', body: "Short-lived access token with a rotating refresh token, encrypted sensitive data, driver location discarded at the end of the route and reviews not linked to the reviewer — in line with LGPD, Brazil's data protection law." },
      { title: 'Reproducible environment', body: 'Docker Compose with PostgreSQL and Mailpit, a Makefile with shortcuts and automatic generation of the development .env.' },
    ],
  },
  vision: {
    label: '07 / Vision',
    title: 'More than a driver directory',
    copy: [
      'Search is just the entry point. The long-term goal is to be the operating system of school transportation — ',
      'ERP, CRM, contracts, finances and routes',
      ' in one place for those who make a living from it.',
    ],
  },
};

export const CONTENT = { pt, en };
