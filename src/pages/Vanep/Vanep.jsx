// eslint-disable-next-line no-unused-vars -- motion is used via JSX tags (<motion.div>), which this rule doesn't detect
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Reveal from '../../components/effects/Reveal.jsx';
import SectionHead from '../../components/effects/SectionHead.jsx';
import '../../components/effects/ProjectPage.css';

const EASE = [0.22, 1, 0.36, 1];

const FEATURES = [
  {
    title: 'Busca e propostas',
    body: 'Responsáveis encontram transportadores próximos, consultam documentação validada e enviam propostas com endereços, horários e valor. O motorista aceita ou recusa.',
  },
  {
    title: 'Contrato digital',
    body: 'Após o aceite, um contrato é gerado automaticamente, vinculando aluno e motorista, com histórico completo de versões e alterações.',
  },
  {
    title: 'Gestão financeira',
    body: 'Mensalidades, histórico de pagamentos e controle de inadimplência para responsáveis e motoristas, substituindo cobranças manuais.',
  },
  {
    title: 'Checklist de embarque',
    body: 'Motorista ou assistente confirma embarque/desembarque por aluno, com ação em lote por parada e notificação automática aos pais.',
  },
  {
    title: 'Localização em tempo real',
    body: 'Compartilhamento de localização da van durante a rota, disponível apenas nesse período, com foco em segurança.',
  },
  {
    title: 'Gestão de rotas',
    body: 'O motorista monta e reordena paradas, com navegação parada a parada integrada ao checklist via deep link (Waze, Google Maps, Apple Maps).',
  },
  {
    title: 'Assistente da van',
    body: 'Motoristas podem convidar um assistente para ajudar no checklist, com vínculo N:N entre assistentes e vans e permissões restritas.',
  },
  {
    title: 'Gestão documental',
    body: 'Cadastro e validação de CNH, CRLV e demais documentos obrigatórios, com alertas automáticos antes do vencimento.',
  },
];

const ARCHITECTURE = [
  { label: 'Front-end web', value: 'Next.js', detail: 'Administração, gestão de usuários e painéis.' },
  { label: 'App mobile', value: 'Flutter (Dart)', detail: 'Apps para motoristas, responsáveis e assistentes.' },
  { label: 'Back-end', value: 'Java', detail: 'Regras de negócio, contratos, financeiro, notificações e tracking em tempo real.' },
  { label: 'Banco de dados', value: 'PostgreSQL + PostGIS', detail: 'Banco único com separação lógica por domínio e extensão geoespacial para rotas e tracking.' },
];

function Vanep() {
  return (
    <>
      <VanepHero />
      <Problem />
      <Features />
      <Architecture />
      <Vision />
    </>
  );
}

function VanepHero() {
  return (
    <section id="top" className="project-hero section">
      <div className="container">
        <Reveal>
          <Link to="/" className="project-back">
            ← Voltar ao portfólio
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="project-kicker">Projeto em paralelo · Idealizador &amp; Tech Lead</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="project-title">Vanep</h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="project-tagline">
            Van + App — plataforma que digitaliza o transporte escolar, conectando responsáveis e
            transportadores em um único sistema: busca, contrato digital, pagamentos, rotas e
            acompanhamento em tempo real.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="project-role">
            Idealizei o produto e lidero tecnicamente o desenvolvimento — da arquitetura ao
            deploy — em paralelo ao meu trabalho como Software Engineer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead n="01" title="O problema" />
        <Reveal>
          <p className="section-copy">
            O transporte escolar no Brasil opera majoritariamente de forma informal: indicações,
            grupos de WhatsApp, contratos físicos e cobranças manuais, sem ferramentas de
            rastreamento, gestão ou formalização contratual. A Vanep substitui essa informalidade
            por um ecossistema digital completo para os dois lados do mercado — transportadores que
            querem encontrar clientes, gerenciar contratos e reduzir inadimplência, e responsáveis
            que querem contratar com segurança e acompanhar o trajeto dos filhos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead n="02" title="Funcionalidades" />
        <div className="project-features-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="project-feature-card">
                <h3 className="project-feature-title">{f.title}</h3>
                <p className="project-feature-body">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead n="03" title="Arquitetura & meu papel" />
        <Reveal>
          <p className="section-copy">
            Defini a stack e a arquitetura do zero, pensando em separar claramente front-end web,
            app mobile, back-end e dados, com um banco único organizado por domínio para permitir
            evolução incremental sem acoplamento excessivo.
          </p>
        </Reveal>

        <div className="project-arch-grid">
          {ARCHITECTURE.map((a, i) => (
            <motion.div
              key={a.label}
              className="project-arch-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            >
              <span className="project-arch-label">{a.label}</span>
              <span className="project-arch-value">{a.value}</span>
              <p className="project-arch-detail">{a.detail}</p>
            </motion.div>
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
        <SectionHead n="04" title="Visão de longo prazo" />
        <Reveal>
          <p className="section-copy">
            A Vanep não deve ser apenas um catálogo de transportadores: o objetivo de longo prazo é
            ser um ERP + CRM + Contratos + Financeiro + Rotas para o transporte escolar — a busca de
            motoristas é só a porta de entrada para um ecossistema completo de gestão.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Vanep;
