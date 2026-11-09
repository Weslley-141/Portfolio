'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, useSpring } from 'motion/react';

const pad = (n: number) => String(n).padStart(2, '0');
const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;

function nearest(offsets: number[], x: number) {
  let best = 0;
  offsets.forEach((offset, i) => {
    if (Math.abs(offset - x) < Math.abs(offsets[best] - x)) best = i;
  });
  return best;
}

const navButton =
  'flex size-9 items-center justify-center rounded-full border border-vapor-pink/50 text-xl leading-none text-vapor-pink transition hover:bg-vapor-pink/10 disabled:opacity-30 disabled:hover:bg-transparent';

export default function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const distanceRef = useRef(0);
  const snapsRef = useRef<number[]>([0]);
  const activeRef = useRef(0);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);
  const [total, setTotal] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.0002 });

  const render = useCallback((progress: number) => {
    const x = progress * distanceRef.current;
    trackRef.current?.style.setProperty('--x', `${-x}px`);
    const index = nearest(snapsRef.current, x);
    if (index !== activeRef.current) {
      activeRef.current = index;
      setActive(index);
    }
  }, []);

  useMotionValueEvent(smooth, 'change', render);

  const scrollToOffset = useCallback((offset: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const offsets = snapsRef.current;
      const i = Math.max(0, Math.min(offsets.length - 1, index));
      scrollToOffset(offsets[i]);
    },
    [scrollToOffset],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const dist = Math.max(0, track.scrollWidth - document.documentElement.clientWidth);
      const trackLeft = track.getBoundingClientRect().left;

      const marked = Array.from(track.querySelectorAll<HTMLElement>('[data-snap]')).map((el) =>
        Math.min(Math.max(0, Math.round(el.getBoundingClientRect().left - trackLeft)), dist),
      );

      // Início e fim da esteira sempre são paradas, mesmo sem data-snap.
      // Paradas a menos de 48px uma da outra viram uma só (evita parada duplicada
      // por causa da barra de rolagem do Linux).
      const offsets = [0, ...marked, dist]
        .sort((a, b) => a - b)
        .filter((value, i, all) => i === 0 || value - all[i - 1] > 48);
      if (offsets.length > 1) offsets[offsets.length - 1] = dist;

      distanceRef.current = dist;
      snapsRef.current = offsets;
      setDistance(dist);
      setTotal(offsets.length);
      render(smooth.get());
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);

    // Âncoras (#projects, #contact) no desktop
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || !isDesktop()) return;
      const href = link.getAttribute('href');
      if (!href || href.length < 2) return;
      const target = track.querySelector<HTMLElement>(href);
      if (!target) return;
      e.preventDefault();
      const offset = Math.round(
        target.getBoundingClientRect().left - track.getBoundingClientRect().left,
      );
      scrollToOffset(Math.min(Math.max(0, offset), distanceRef.current));
    };

    // Setas do teclado
    const onKey = (e: KeyboardEvent) => {
      if (!isDesktop() || e.altKey || e.ctrlKey || e.metaKey) return;
      if ((e.target as HTMLElement).closest('input, textarea, select, [contenteditable]')) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(activeRef.current + 1);
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(activeRef.current - 1);
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [goTo, render, scrollToOffset, smooth]);

  return (
    <div
      ref={sectionRef}
      style={{ '--scroll-h': `calc(100vh + ${distance}px)` } as React.CSSProperties}
      className='relative md:h-(--scroll-h)'
    >
      <div className='md:sticky md:top-0 md:h-screen md:overflow-clip'>
        <div
          ref={trackRef}
          className='flex flex-col md:h-full md:w-max md:flex-row md:will-change-transform md:transform-[translateX(var(--x,0px))]'
        >
          {children}
        </div>
      </div>

      <nav
        aria-label='Navegação entre seções'
        className='glass fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-4 rounded-full px-3 py-2 md:flex'
      >
        <button
          type='button'
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label='Seção anterior'
          className={navButton}
        >
          ‹
        </button>
        <span className='min-w-14 text-center font-display text-xs tracking-[0.3em] text-vapor-cyan'>
          {pad(active + 1)}/{pad(total)}
        </span>
        <button
          type='button'
          onClick={() => goTo(active + 1)}
          disabled={active >= total - 1}
          aria-label='Próxima seção'
          className={navButton}
        >
          ›
        </button>
      </nav>
    </div>
  );
}