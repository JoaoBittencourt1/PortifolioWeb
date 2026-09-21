'use client';

import Reveal from '../../components/effects/Reveal.jsx';
import SectionHead from '../../components/effects/SectionHead.jsx';
import ProjectHero from '../../components/project/ProjectHero.jsx';
import '../../components/project/ProjectPage.css';

const META = [
  { label: 'Papel', value: 'Idealizador, Tech Lead e Desenvolvedor principal' },
  { label: 'Período', value: '2026 — em desenvolvimento' },
  { label: 'Plataformas', value: 'App Android/iOS, painel web e API' },
  { label: 'Stack', value: 'Java · Spring Boot · Flutter · Next.js · PostgreSQL' },
];

const PROBLEMS = [
  { area: 'Contratação', today: 'Por indicação, sem verificar documentação', vanep: 'Motoristas com documentos validados e avaliações' },
  { area: 'Contratos', today: 'Em papel, sem padrão nem histórico', vanep: 'Contrato digital versionado, com partes e datas registradas' },
  { area: 'Pagamentos', today: 'Dinheiro ou transferência, cobrados manualmente', vanep: 'Mensalidades centralizadas, com histórico e controle de inadimplência' },
  { area: 'Acompanhamento', today: 'Inexistente — os pais não sabem onde está a van', vanep: 'Localização em tempo real e notificação a cada etapa' },
  { area: 'Comunicação', today: 'Grupos de WhatsApp sem registro', vanep: 'Chat e notificações dentro da plataforma' },
  { area: 'Gestão do motorista', today: 'Rotas, presença e finanças no caderno', vanep: 'Rotas, checklist, documentos e financeiro em um painel' },
];

const AUDIENCES = [
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
];

const FEATURES = [
  { title: 'Busca e propostas', body: 'Busca de transportadores por região e escola. O responsável envia uma proposta com endereços, horários e valor; o motorista aceita ou recusa.' },
  { title: 'Contrato digital', body: 'Gerado automaticamente após o aceite, vinculando aluno e motorista, com ciclo de vida próprio e histórico de versões.' },
  { title: 'Gestão financeira', body: 'Mensalidades, histórico de pagamentos e total a receber, substituindo a cobrança manual para os dois lados.' },
  { title: 'Rotas e navegação', body: 'O motorista monta e reordena as paradas; a navegação abre no Waze, Google Maps ou Apple Maps via deep link, sem custo de API de rotas.' },
  { title: 'Gestão documental', body: 'Cadastro e validação de CNH, CRLV e demais documentos, com alertas antes do vencimento e bloqueio de novas contratações se algo vencer.' },
  { title: 'Assistente da van', body: 'Assistentes convidados ajudam no checklist, com vínculo N:N entre assistentes e vans e permissões restritas.' },
];

const CHECKLIST = [
  { n: '1', title: 'Embarque em casa', notify: '“Ana embarcou às 06:52.”' },
  { n: '2', title: 'Chegada na escola', notify: '“Ana chegou à escola às 07:18.”' },
  { n: '3', title: 'Embarque na volta', notify: '“Ana embarcou às 12:05.”' },
  { n: '4', title: 'Chegada em casa', notify: '“Ana chegou em casa às 12:34.”' },
];

const DRIVER_STATUS = [
  { priority: '1', source: 'Ajuste manual do dia', result: 'Status definido pelo motorista' },
  { priority: '2', source: 'Ação na rota (rota iniciada + fase do checklist)', result: 'Em rota · A caminho do aluno · Levando o aluno para casa' },
  { priority: '3', source: 'Expediente configurado (dias e horários)', result: 'Disponível · Fora do expediente' },
];

const ARCHITECTURE = [
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
];

const PRACTICES = [
  { title: 'Pacotes por funcionalidade', body: 'Cada feature (client, contract, driver…) tem seus próprios controller, service, repository, dto, mapper e entity. O que é compartilhado vai para uma área comum, em vez de ser duplicado.' },
  { title: 'Constitution por repositório', body: 'Cada repo tem um documento com as regras obrigatórias de arquitetura, nomenclatura e Clean Code, que vale para pessoas e para agentes de IA.' },
  { title: 'Specs antes do código', body: 'Mudanças relevantes começam como proposta e especificação versionada (OpenSpec), revisadas antes da implementação.' },
  { title: 'Qualidade no CI', body: 'Formatação com Spotless (Google Java Format) verificada no build, testes de integração com H2 em memória e imagem Docker para deploy.' },
  { title: 'Segurança e LGPD', body: 'Access token curto com refresh token rotativo, dados sensíveis criptografados, localização do motorista descartada ao fim da rota e avaliações sem vínculo com quem avaliou.' },
  { title: 'Ambiente reproduzível', body: 'Docker Compose com PostgreSQL e Mailpit, Makefile com atalhos e geração automática do .env de desenvolvimento.' },
];

function Vanep() {
  return (
    <>
      <ProjectHero
        title="Vanep"
        tagline="A digitalização da van escolar em um só aplicativo. Tudo o que hoje acontece por indicação, no grupo de WhatsApp e no contrato de papel passa a caber no celular: motoristas verificados, contrato digital, a van no mapa em tempo real e um aviso a cada etapa do trajeto."
        links={[{ href: 'https://www.vanep.com.br', label: 'Visitar vanep.com.br ↗' }]}
        role="Idealizei o produto, sou o desenvolvedor principal e lidero as decisões técnicas — arquitetura, stack, infraestrutura e deploy — em paralelo ao meu trabalho como Software Engineer."
        meta={META}
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
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="01 / Problema" title="Um mercado inteiro operando na informalidade" />
        <Reveal>
          <p className="section-copy">
            O transporte escolar no Brasil funciona por indicação, grupos de WhatsApp, contratos em
            papel e cobrança manual. Não há verificação de quem dirige, registro do que foi
            combinado nem forma de saber onde a van está.
          </p>
        </Reveal>

        <Reveal className="compare-table" delay={0.05}>
          <div className="compare-row compare-row--head" aria-hidden="true">
            <span />
            <span>Hoje</span>
            <span>Com a Vanep</span>
          </div>
          {PROBLEMS.map((p) => (
            <div key={p.area} className="compare-row">
              <span className="compare-area">{p.area}</span>
              <span className="compare-today">
                <span className="compare-mobile-label">Hoje: </span>
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
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="02 / Solução" title="Um produto, dois lados do mercado" />
        <div className="two-col">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} className="panel" delay={i * 0.08}>
              <h3 className="panel-title">{a.title}</h3>
              <ul className="check-list">
                {a.items.map((item) => (
                  <li key={item}>{item}</li>
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
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="03 / Funcionalidades" title="O que a plataforma faz" />
        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} className="feature" delay={(i % 3) * 0.05}>
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
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="04 / Em detalhe" title="Checklist de rota e status automático" />
        <Reveal>
          <p className="section-copy">
            O centro da operação diária. Cada aluno passa por até quatro fases; o motorista confirma
            cada uma com um toque — ou em lote, quando vários alunos embarcam na mesma parada — e o
            responsável é notificado na hora. Contratos só de ida têm as duas primeiras fases.
          </p>
        </Reveal>

        <Reveal as="ol" className="phase-list" delay={0.05}>
          {CHECKLIST.map((c) => (
            <li key={c.n} className="phase">
              <span className="phase-n">{c.n}</span>
              <span className="phase-title">{c.title}</span>
              <span className="phase-notify">{c.notify}</span>
            </li>
          ))}
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="subhead">Status do motorista, sem input manual</h3>
          <p className="section-copy">
            O status que aparece na busca e para os clientes é derivado pelo sistema a partir de
            três camadas de prioridade. O motorista não precisa lembrar de atualizar nada durante a
            rota.
          </p>
        </Reveal>

        <Reveal className="priority-table" delay={0.05}>
          {DRIVER_STATUS.map((s) => (
            <div key={s.priority} className="priority-row">
              <span className="priority-n">P{s.priority}</span>
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
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="05 / Arquitetura" title="Como o sistema é dividido" />
        <Reveal>
          <p className="section-copy">
            Defini a stack e a arquitetura do zero, em repositórios separados para API, app e
            painel. Cada camada evolui no seu ritmo, e um banco único, organizado por domínio,
            permite crescer sem acoplamento excessivo.
          </p>
        </Reveal>
        <div className="arch-grid">
          {ARCHITECTURE.map((a, i) => (
            <Reveal key={a.label} className="arch-card" delay={(i % 3) * 0.05}>
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
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="06 / Engenharia" title="Decisões e práticas" />
        <div className="feature-grid">
          {PRACTICES.map((p, i) => (
            <Reveal key={p.title} className="feature" delay={(i % 3) * 0.05}>
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
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="07 / Visão" title="Além de um catálogo de motoristas" />
        <Reveal>
          <p className="section-copy">
            A busca é só a porta de entrada. O objetivo de longo prazo é ser o sistema operacional
            do transporte escolar — <strong>ERP, CRM, contratos, financeiro e rotas</strong> em um
            só lugar para quem vive dessa atividade.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Vanep;
