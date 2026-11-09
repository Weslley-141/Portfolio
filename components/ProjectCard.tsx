import { projects, type Project } from '@/data/projects';

const pad = (n: number) => String(n).padStart(2, '0');

export default function ProjectCard({ project }: { project: Project }) {
  const index = projects.indexOf(project);

  return (
    <article className='glass flex flex-col gap-5 rounded-xl p-6 transition duration-300 hover:border-vapor-cyan/70 md:flex-row md:items-center md:justify-between'>
      <div className='min-w-0 flex-1'>
        <header className='flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-vapor-cyan'>
          <span>
            {pad(index + 1)}/{pad(projects.length)}
          </span>
          <span className='h-px w-8 bg-vapor-cyan/40' />
          <span>{project.category}</span>
        </header>

        <h4 className='text-chrome mt-3 font-display text-2xl'>{project.title}</h4>
        <p className='mt-2 text-sm text-vapor-text/80'>{project.description}</p>

        <ul className='mt-4 flex flex-wrap gap-2'>
          {project.stack.map((tech) => (
            <li
              key={tech}
              className='rounded-full border border-vapor-cyan/50 bg-vapor-cyan/5 px-3 py-1 text-xs text-vapor-cyan'
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {project.links.length > 0 && (
        <div className='flex shrink-0 flex-wrap gap-3 md:w-40 md:flex-col'>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded border border-vapor-pink/50 px-3 py-1.5 text-center text-sm text-vapor-pink transition hover:bg-vapor-pink/10'
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}