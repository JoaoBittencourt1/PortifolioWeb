'use client';

import Reveal from '../../components/effects/Reveal.jsx';
import SectionHead from '../../components/effects/SectionHead.jsx';
import ProjectHero from '../../components/project/ProjectHero.jsx';
import '../../components/project/ProjectPage.css';

const REPO_URL = 'https://github.com/JoaoBittencourt1/LinuxBit';

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

const META = [
  { label: 'Papel', value: 'Idealizador & Desenvolvedor' },
  { label: 'Período', value: '2025 — em desenvolvimento' },
  { label: 'Plataforma', value: 'Desktop Windows' },
  { label: 'Stack', value: 'C# · .NET · WPF · Bash' },
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

function LinuxBit() {
  return (
    <>
      <LinuxBitHero />
      <About />
      <Features />
      <Architecture />
    </>
  );
}

function LinuxBitHero() {
  return (
    <ProjectHero
      title="LinuxBit"
      tagline="Portal de distribuições Linux com instalador universal — explore distros, compare pontos fortes e fracos e instale direto pelo Windows, sem gravar um pendrive."
      role="Um projeto de hobby: idealizei e desenvolvo sozinho, no meu tempo livre, com arquitetura por feature, MVVM e desenvolvimento guiado por especificações (OpenSpec)."
      meta={META}
      links={[{ href: REPO_URL, label: 'Ver código no GitHub ↗' }]}
    />
  );
}

function About() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="01 / Problema" title="Duas barreiras para quem quer usar Linux" />
        <Reveal>
          <p className="section-copy">
            Quem quer experimentar Linux geralmente esbarra em duas barreiras: escolher a distro
            certa em meio a dezenas de opções, e o processo manual de gravar uma ISO em pendrive
            para instalar. O LinuxBit resolve as duas coisas em um único app Windows — um portal
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
        <SectionHead label="02 / Funcionalidades" title="O que o app faz" />
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

function Architecture() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="03 / Arquitetura" title="Como o projeto é organizado" />
        <Reveal>
          <p className="section-copy">
            Estruturei o projeto por feature (Catalog, InstallWizard) em vez de por camada
            técnica, com uma &quot;constitution&quot; documentando os padrões obrigatórios de arquitetura,
            SOLID, anti-duplicação e Clean Code do repositório — e specs versionadas para cada
            mudança relevante antes de implementá-la.
          </p>
        </Reveal>

        <div className="arch-grid">
          {ARCHITECTURE.map((a, i) => (
            <Reveal key={a.label} className="arch-card" delay={(i % 2) * 0.05}>
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

export default LinuxBit;
