// eslint-disable-next-line no-unused-vars -- motion is used via JSX tags (<motion.div>), which this rule doesn't detect
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Reveal from '../../components/effects/Reveal.jsx';
import SectionHead from '../../components/effects/SectionHead.jsx';
import '../../components/effects/ProjectPage.css';

const EASE = [0.22, 1, 0.36, 1];
const REPO_URL = 'https://github.com/JoaoBittencourt1/LinuxHub';

const FEATURES = [
  {
    title: 'Catálogo de distros',
    body: 'Grade com as principais distribuições Linux, cada uma com descrição, pontos fortes e fracos, e um carrossel de imagens e vídeos.',
  },
  {
    title: 'Detecção automática de distro',
    body: 'Ao selecionar uma ISO manualmente, o sistema identifica a distro pelo nome do arquivo a partir do catálogo único, com fallback para "desconhecida".',
  },
  {
    title: 'Download de ISO com progresso',
    body: 'Download automático da ISO da distro escolhida, com progresso percentual, tempo estimado e cancelamento — removendo o arquivo parcial se cancelado.',
  },
  {
    title: 'Instalador universal, sem USB',
    body: 'Instalação direto pelo Windows, sem gravar pendrive: o usuário escolhe substituir o disco inteiro ou dual-boot, com listagem de discos ou partições elegíveis.',
  },
  {
    title: 'Configuração da conta',
    body: 'Coleta usuário, senha (com confirmação) e nome do computador antes de gerar a configuração final de instalação.',
  },
  {
    title: 'Instalação Linux-side automatizada',
    body: 'A configuração gerada é consumida por um instalador em shell script que roda do lado Linux, cuidando de particionamento e configuração de boot.',
  },
];

const ARCHITECTURE = [
  {
    label: 'Interface',
    value: 'WPF (.NET, C#)',
    detail: 'Aplicação desktop Windows com WPF, organizada por feature (Catalog, InstallWizard) em vez de por camada técnica.',
  },
  {
    label: 'Padrão de UI',
    value: 'MVVM',
    detail: 'Views, ViewModels e Services separados por feature, com modelos e utilitários compartilhados em Common/.',
  },
  {
    label: 'Instalador Linux-side',
    value: 'Bash',
    detail: 'Script shell que recebe a configuração gerada pela UI e executa particionamento, instalação e configuração de boot no ambiente Linux.',
  },
  {
    label: 'Processo',
    value: 'Spec-driven (OpenSpec)',
    detail: 'Mudanças de arquitetura e features passam por propostas e specs versionadas antes da implementação, com uma "constitution" definindo os padrões obrigatórios do projeto.',
  },
];

function LinuxHub() {
  return (
    <>
      <LinuxHubHero />
      <About />
      <Features />
      <Architecture />
    </>
  );
}

function LinuxHubHero() {
  return (
    <section id="top" className="project-hero section">
      <div className="container">
        <Reveal>
          <Link to="/" className="project-back">
            ← Voltar ao portfólio
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="project-kicker">Projeto em paralelo · Idealizador &amp; Desenvolvedor</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="project-title">LinuxHub</h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="project-tagline">
            Portal de distribuições Linux com instalador universal — permite explorar distros,
            comparar pontos fortes e fracos, e instalar diretamente pelo Windows, sem precisar
            gravar um pendrive.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="project-role">
            Idealizei e desenvolvo o projeto sozinho, em paralelo ao meu trabalho como Software
            Engineer, aplicando arquitetura feature-based, MVVM e desenvolvimento guiado por
            especificações (OpenSpec).
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="project-repo-link"
          >
            Ver código no GitHub →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead n="01" title="O que é" />
        <Reveal>
          <p className="section-copy">
            Quem quer experimentar Linux geralmente esbarra em duas barreiras: escolher a distro
            certa em meio a dezenas de opções, e o processo manual de gravar uma ISO em pendrive
            para instalar. O LinuxHub resolve as duas coisas em um único app Windows — um portal
            para conhecer as distros e um instalador universal que não depende de USB. O projeto
            ainda está em desenvolvimento ativo.
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
            Estruturei o projeto por feature (Catalog, InstallWizard) em vez de por camada
            técnica, com uma "constitution" documentando os padrões obrigatórios de arquitetura,
            SOLID, anti-duplicação e Clean Code do repositório — e specs versionadas para cada
            mudança relevante antes de implementá-la.
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

export default LinuxHub;
