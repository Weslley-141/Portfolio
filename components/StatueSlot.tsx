import Image from 'next/image';

type Props = {
  src?: string;
  className?: string;
};

const slices = [
  { clip: '[clip-path:inset(16%_0_68%_0)]', anim: 'animate-glitch-a' },
  { clip: '[clip-path:inset(40%_0_46%_0)]', anim: 'animate-glitch-b' },
  { clip: '[clip-path:inset(68%_0_20%_0)]', anim: 'animate-glitch-c' },
];

function Layer({ src, priority = false }: { src: string; priority?: boolean }) {
  return (
    <Image
      src={src}
      alt={priority ? 'Busto de estátua clássica' : ''}
      aria-hidden={!priority}
      fill
      sizes='(min-width: 768px) 40vw, 90vw'
      priority={priority}
      loading='eager'
      className='object-contain'
    />
  );
}

export default function StatueSlot({ src, className = '' }: Props) {
  if (!src) {
    return (
      <div className={`${className} flex items-center justify-center p-10`}>
        <div className='glass flex h-full w-full items-center justify-center rounded-lg text-center font-display text-xs uppercase tracking-[0.3em] text-vapor-cyan'>
          Imagem da estátua
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className='relative h-full w-full'>
        <div className='statue-rgb-soft absolute inset-0'>
          <Layer src={src} priority />
        </div>

        {slices.map((slice) => (
          <div
            key={slice.anim}
            className={`statue-rgb absolute inset-0 ${slice.clip} ${slice.anim} motion-reduce:hidden`}
          >
            <Layer src={src} />
          </div>
        ))}
      </div>
    </div>
  );
}