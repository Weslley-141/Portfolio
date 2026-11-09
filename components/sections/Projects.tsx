import ProjectCard from '@/components/ProjectCard';
import { projectGroups, projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id='projects' className='flex flex-col md:h-full md:shrink-0 md:flex-row'>
      <div
        data-snap
        className='flex flex-col justify-center px-6 py-24 md:h-full md:w-[50vw] md:shrink-0 md:px-[8vw] md:py-0'
      >
        <p className='text-xs uppercase tracking-[0.4em] text-vapor-cyan'>{'// 02 — Arquivos'}</p>
        <h2 className='text-chrome mt-4 font-display text-5xl md:text-6xl'>Projetos</h2>
        <p className='mt-4 text-vapor-text/80'>
          {projects.length} projetos em {projectGroups.length} grupos. Use as setas ou continue
          rolando →
        </p>
      </div>

      {projectGroups.map((group, i) => (
        <div
          key={group.id}
          data-snap
          className='flex flex-col gap-8 px-6 py-16 md:h-full md:w-screen md:shrink-0 md:flex-row md:items-center md:gap-14 md:px-[8vw] md:py-0'
        >
          <header className='md:w-[26vw] md:shrink-0'>
            <p className='text-xs uppercase tracking-[0.4em] text-vapor-cyan'>{`// 02.${i + 1}`}</p>
            <h3 className='text-chrome mt-3 font-display text-4xl'>{group.title}</h3>
            <p className='mt-3 text-vapor-text/80'>{group.description}</p>
            <p className='mt-4 text-xs uppercase tracking-[0.3em] text-vapor-pink'>
              {group.projects.length} projetos
            </p>
          </header>

          <ul className='flex flex-col gap-6 md:max-w-4xl md:flex-1'>
            {group.projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}