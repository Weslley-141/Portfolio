import HorizontalScroll from '@/components/HorizontalScroll';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <HorizontalScroll>
        <Hero />
        <Projects />
        <Contact />
      </HorizontalScroll>
    </main>
  );
}