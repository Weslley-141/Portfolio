import AboutCard from '@/components/AboutCard';
import Sun from '@/components/Sun';
import StatueSlot from '@/components/StatueSlot';

export default function Hero() {
  return (
    <section
      id='hero'
      data-snap
      className='relative flex min-h-screen items-center overflow-hidden px-6 py-24 md:h-screen md:w-screen md:shrink-0 md:px-[8vw]'
    >
      <div className='relative z-10 grid w-full items-center gap-12 md:grid-cols-2'>
        <div className='text-center md:text-left'>
          <h1 className='text-chrome mt-6 font-display text-5xl leading-tight drop-shadow-[0_0_24px_rgba(255,110,199,0.45)] md:text-6xl lg:text-7xl'>
            Weslley Eugênio
          </h1>

          <p className='neon-cyan mt-4 font-display text-base tracking-widest text-vapor-cyan md:text-lg'>
            Desenvolvedor de Sistemas · Foco em Front-end
          </p>
          <p className='mt-3 text-sm uppercase tracking-[0.35em] text-vapor-text/80'>
            Code. Learn. Build. Repeat.
          </p>

          <AboutCard />

          <div className='mt-8 flex flex-wrap justify-center gap-4 md:justify-start'>
            <a
              href='#projects'
              className='glass rounded px-6 py-3 font-display text-sm uppercase tracking-widest text-vapor-pink transition hover:shadow-[0_0_32px_rgba(255,110,199,0.5)]'
            >
              Ver projetos
            </a>
            <a
              href='#contact'
              className='rounded border border-vapor-cyan/60 px-6 py-3 font-display text-sm uppercase tracking-widest text-vapor-cyan transition hover:bg-vapor-cyan/10'
            >
              Contato
            </a>
          </div>
        </div>

        <div className='relative mx-auto aspect-square w-full max-w-lg'>
          <Sun className='absolute inset-0 h-full w-full drop-shadow-[0_0_60px_rgba(255,110,199,0.45)]' />
          <StatueSlot src='/images/hero-icon.png' className='absolute inset-0' />
        </div>
      </div>
    </section>
  );
}