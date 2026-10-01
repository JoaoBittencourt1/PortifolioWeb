// LinuxBit project page copy in both languages.

const STACK = 'C# · .NET · WPF · Bash';

const pt = {
  hero: {
    tagline:
      'Portal de distribuições Linux com instalador universal — explore distros, compare pontos fortes e fracos e instale direto pelo Windows, sem gravar um pendrive.',
    role: 'Um projeto de hobby: idealizei e desenvolvo sozinho, no meu tempo livre, com arquitetura por feature, MVVM e desenvolvimento guiado por especificações (OpenSpec).',
    viewCode: 'Ver código no GitHub ↗',
    meta: [
      { label: 'Papel', value: 'Idealizador & Desenvolvedor' },
      { label: 'Período', value: '2025 — em desenvolvimento' },
      { label: 'Plataforma', value: 'Desktop Windows' },
      { label: 'Stack', value: STACK },
    ],
  },
  about: {
    label: '01 / Problema',
    title: 'Duas barreiras para quem quer usar Linux',
    copy: 'Quem quer experimentar Linux geralmente esbarra em duas barreiras: escolher a distro certa em meio a dezenas de opções, e o processo manual de gravar uma ISO em pendrive para instalar. O LinuxBit resolve as duas coisas em um único app Windows — um portal para conhecer as distros e um instalador universal que não depende de USB. O projeto ainda está em desenvolvimento ativo.',
  },
  features: {
    label: '02 / Funcionalidades',
    title: 'O que o app faz',
    items: [
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
    ],
  },
  architecture: {
    label: '03 / Arquitetura',
    title: 'Como o projeto é organizado',
    copy: 'Estruturei o projeto por feature (Catalog, InstallWizard) em vez de por camada técnica, com uma "constitution" documentando os padrões obrigatórios de arquitetura, SOLID, anti-duplicação e Clean Code do repositório — e specs versionadas para cada mudança relevante antes de implementá-la.',
    items: [
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
    ],
  },
};

const en = {
  hero: {
    tagline:
      'Linux distribution portal with a universal installer — explore distros, compare strengths and weaknesses and install straight from Windows, without flashing a USB drive.',
    role: 'A hobby project: I came up with it and build it on my own, in my spare time, with a feature-based architecture, MVVM and spec-driven development (OpenSpec).',
    viewCode: 'View code on GitHub ↗',
    meta: [
      { label: 'Role', value: 'Creator & Developer' },
      { label: 'Period', value: '2025 — in development' },
      { label: 'Platform', value: 'Windows desktop' },
      { label: 'Stack', value: STACK },
    ],
  },
  about: {
    label: '01 / Problem',
    title: 'Two barriers for anyone who wants to use Linux',
    copy: 'Anyone who wants to try Linux usually runs into two barriers: choosing the right distro among dozens of options, and the manual process of flashing an ISO to a USB drive to install it. LinuxBit solves both in a single Windows app — a portal to get to know the distros and a universal installer that needs no USB. The project is still in active development.',
  },
  features: {
    label: '02 / Features',
    title: 'What the app does',
    items: [
      {
        title: 'Distro catalog',
        body: 'A grid with the main Linux distributions, each with a description, strengths and weaknesses, and a carousel of images and videos.',
      },
      {
        title: 'Automatic distro detection',
        body: 'When an ISO is selected manually, the system identifies the distro from the file name using the single catalog, falling back to "unknown".',
      },
      {
        title: 'ISO download with progress',
        body: 'Automatic download of the chosen distro ISO, with percentage progress, estimated time and cancellation — removing the partial file if cancelled.',
      },
      {
        title: 'Universal installer, no USB',
        body: 'Installation straight from Windows, without flashing a USB drive: the user chooses between replacing the whole disk or dual boot, with a list of eligible disks or partitions.',
      },
      {
        title: 'Account setup',
        body: 'Collects username, password (with confirmation) and computer name before generating the final installation configuration.',
      },
      {
        title: 'Automated Linux-side installation',
        body: 'The generated configuration is consumed by a shell script installer that runs on the Linux side, handling partitioning and boot configuration.',
      },
    ],
  },
  architecture: {
    label: '03 / Architecture',
    title: 'How the project is organized',
    copy: 'I structured the project by feature (Catalog, InstallWizard) instead of by technical layer, with a "constitution" documenting the repository\'s mandatory standards for architecture, SOLID, anti-duplication and Clean Code — and versioned specs for every relevant change before implementing it.',
    items: [
      {
        label: 'Interface',
        value: 'WPF (.NET, C#)',
        detail: 'Windows desktop application with WPF, organized by feature (Catalog, InstallWizard) instead of by technical layer.',
      },
      {
        label: 'UI pattern',
        value: 'MVVM',
        detail: 'Views, ViewModels and Services separated by feature, with shared models and utilities in Common/.',
      },
      {
        label: 'Linux-side installer',
        value: 'Bash',
        detail: 'Shell script that receives the configuration generated by the UI and runs partitioning, installation and boot configuration in the Linux environment.',
      },
      {
        label: 'Process',
        value: 'Spec-driven (OpenSpec)',
        detail: 'Architecture changes and features go through versioned proposals and specs before implementation, with a "constitution" defining the project\'s mandatory standards.',
      },
    ],
  },
};

export const CONTENT = { pt, en };
