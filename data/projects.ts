export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
};

export type ProjectGroup = {
  id: string;
  title: string;
  description: string;
  projects: Project[];
};

export const projectGroups: ProjectGroup[] = [
  {
    id: 'web',
    title: 'Web',
    description: 'Aplicações e páginas que rodam no navegador.',
    projects: [
      {
        slug: 'focusflow',
        title: 'FocusFlow',
        category: 'Fullstack',
        description:
          'Plataforma web de organização de estudos: Pomodoro, flashcards com repetição espaçada (SM-2), metas, mapas mentais, autenticação e estatísticas.',
        stack: ['React', 'TypeScript', 'Node.js', 'MySQL/TiDB'],
        links: [
          { label: 'Versão online', url: 'https://focus-flow-frontend-dusky.vercel.app/' },
          { label: 'Frontend', url: 'https://github.com/Weslley-141/FocusFlow-Frontend' },
          { label: 'Backend', url: 'https://github.com/Weslley-141/FocusFlow-Backend' },
        ],
      },
      {
        slug: 'made-in-abyss',
        title: 'Página Made in Abyss',
        category: 'Front-end',
        description:
          'Um dos meus primeiros projetos web: página estática baseada na obra Made in Abyss.',
        stack: ['HTML', 'CSS'],
        links: [{ label: 'GitHub', url: 'https://github.com/Weslley-141/Pagina-Made-in-Abyss' }],
      },
    ],
  },
  {
    id: 'desktop',
    title: 'Desktop',
    description: 'Aplicativos de desktop feitos com Electron.',
    projects: [
      {
        slug: 'cybercafe-pass',
        title: 'CyberCafe Pass',
        category: 'Desktop',
        description:
          'Gerenciador de senhas com abordagem Zero-Knowledge, armazenamento local, comunicação IPC e interface própria de estética Cozy Cyberpunk.',
        stack: ['Electron', 'React', 'TypeScript', 'Zustand'],
        links: [{ label: 'GitHub', url: 'https://github.com/Weslley-141/CyberCafe-Pass' }],
      },
      {
        slug: 'photoviewer-lite',
        title: 'PhotoViewer Lite',
        category: 'Desktop',
        description:
          'Visualizador de imagens com mini janela sempre por cima, atalhos globais e sincronização com a interface principal.',
        stack: ['Electron', 'JavaScript', 'HTML', 'CSS'],
        links: [{ label: 'GitHub', url: 'https://github.com/Weslley-141/PhotoViewer-Lite' }],
      },
    ],
  },
  {
    id: 'mobile-academico',
    title: 'Mobile e acadêmico',
    description: 'Apps mobile e projetos de estudo em Java.',
    projects: [
      {
        slug: 'habit-tracker',
        title: 'Habit Tracker',
        category: 'Mobile',
        description:
          'Aplicativo mobile gamificado para acompanhar hábitos diários com XP, níveis e streaks.',
        stack: ['React Native', 'Expo'],
        links: [{ label: 'GitHub', url: 'https://github.com/Weslley-141/Diario-de-habitos' }],
      },
      {
        slug: 'oficina-java',
        title: 'Sistema de Oficina',
        category: 'Acadêmico',
        description:
          'Projeto acadêmico em Java com Programação Orientada a Objetos para simular o gerenciamento de uma oficina mecânica.',
        stack: ['Java', 'POO'],
        links: [{ label: 'GitHub', url: 'https://github.com/Weslley-141/Oficina' }],
      },
    ],
  },
];

export const projects: Project[] = projectGroups.flatMap((group) => group.projects);