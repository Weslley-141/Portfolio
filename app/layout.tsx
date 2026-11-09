import type { Metadata } from 'next';
import { Orbitron, Space_Grotesk } from 'next/font/google';
import VideoBackground from '@/components/VideoBackground';
import Scanlines from '@/components/Scanlines';
import './globals.css';
import VaporGrid from '@/components/VaporGrid';

const orbitron = Orbitron({ variable: '--font-orbitron', subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ variable: '--font-space-grotesk', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weslley Eugênio — Portfólio',
  description: 'Portfólio de desenvolvedor de sistemas com foco em front-end',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR' className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body className='font-body text-vapor-text antialiased'>
        <VideoBackground />
        <VaporGrid />
        <Scanlines />
        {children}
      </body>
    </html>
  );
}