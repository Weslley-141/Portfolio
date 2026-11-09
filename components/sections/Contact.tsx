import type { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { contact } from '@/data/contact';

type Tone = 'pink' | 'cyan';

type Channel = {
  id: string;
  label: string;
  hint: string;
  href: string; // vazio = ainda não configurado
  Icon: IconType;
  tone: Tone;
  external: boolean;
};

const tones: Record<Tone, { icon: string; hover: string }> = {
  pink: {
    icon: 'border-vapor-pink/60 bg-vapor-pink/10 text-vapor-pink',
    hover: 'hover:border-vapor-pink/80 hover:shadow-[0_0_36px_rgba(255,110,199,0.45)]',
  },
  cyan: {
    icon: 'border-vapor-cyan/60 bg-vapor-cyan/10 text-vapor-cyan',
    hover: 'hover:border-vapor-cyan/80 hover:shadow-[0_0_36px_rgba(0,212,255,0.45)]',
  },
};

const whatsappHref = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
      'Olá, Weslley! Vi seu portfólio e queria conversar.',
    )}`
  : '';

const gmailHref = contact.email
  ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      contact.email,
    )}&su=${encodeURIComponent('Contato pelo portfólio')}`
  : '';

const channels: Channel[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    hint: 'Perfil profissional',
    href: contact.linkedin,
    Icon: FaLinkedin,
    tone: 'pink',
    external: true,
  },
  {
    id: 'email',
    label: 'E-mail',
    hint: contact.email || 'Enviar uma mensagem',
    href: gmailHref,
    Icon: FaEnvelope,
    tone: 'cyan',
    external: true,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    hint: 'Chamar no zap',
    href: whatsappHref,
    Icon: FaWhatsapp,
    tone: 'pink',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    hint: `@${contact.github.split('/').pop()}`,
    href: contact.github,
    Icon: FaGithub,
    tone: 'cyan',
    external: true,
  },
];

// Se o texto for um e-mail, só permite quebrar de linha antes do "@"
function Hint({ text }: { text: string }) {
  const at = text.indexOf('@', 1);
  if (at === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <wbr />
      {text.slice(at)}
    </>
  );
}

function ContactCard({ channel }: { channel: Channel }) {
  const { label, hint, href, Icon, tone, external } = channel;
  const t = tones[tone];
  const base =
    'glass group relative flex items-center gap-5 rounded-xl p-5 text-left transition duration-300';

  const inner = (
    <>
      <span
        className={`flex size-14 shrink-0 items-center justify-center rounded-full border text-2xl ${t.icon}`}
      >
        <Icon aria-hidden />
      </span>

      <span className='min-w-0 flex-1'>
        <span className='block font-display text-lg tracking-wide text-vapor-text'>{label}</span>
        <span className='block text-sm leading-snug text-vapor-text/70 wrap-anywhere'>
          <Hint text={hint} />
        </span>
      </span>

      {href ? (
        <span
          aria-hidden
          className='text-xl text-vapor-cyan transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
        >
          ↗
        </span>
      ) : (
        <span className='rounded-full border border-vapor-text/30 px-2 py-0.5 text-[10px] uppercase tracking-widest text-vapor-text/60'>
          em breve
        </span>
      )}
    </>
  );

  if (!href) {
    return (
      <div aria-disabled='true' className={`${base} opacity-60`}>
        {inner}
      </div>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${t.hover} focus-visible:outline-2 focus-visible:outline-vapor-cyan`}
    >
      {inner}
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id='contact'
      data-snap
      className='relative flex min-h-screen items-center overflow-hidden px-6 py-24 md:h-screen md:w-screen md:shrink-0 md:px-[8vw] md:py-0'
    >
      <div className='relative z-10 grid w-full items-center gap-12 md:grid-cols-[1fr_1.3fr]'>
        <div className='text-center md:text-left'>
          <p className='text-xs uppercase tracking-[0.4em] text-vapor-cyan'>{'// 03 — Contato'}</p>
          <h2 className='text-chrome mt-4 font-display text-5xl leading-tight drop-shadow-[0_0_24px_rgba(255,110,199,0.45)] md:text-6xl'>
            Vamos conversar
          </h2>
          <p className='mx-auto mt-5 max-w-sm text-vapor-text/80 md:mx-0'>
            Quer trocar uma ideia sobre projetos ou oportunidades? Escolha o canal que for mais
            confortável.
          </p>
          <p className='mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-vapor-cyan'>
            <span className='size-2 animate-pulse rounded-full bg-vapor-cyan shadow-[0_0_8px_var(--color-vapor-cyan)]' />
            Recife, PE · Brasil
          </p>
        </div>

        <ul className='grid gap-5 sm:grid-cols-2'>
          {channels.map((channel) => (
            <li key={channel.id}>
              <ContactCard channel={channel} />
            </li>
          ))}
        </ul>
      </div>

      <footer className='absolute inset-x-6 bottom-6 flex flex-col items-center gap-2 text-xs text-vapor-text/50 md:inset-x-[8vw] md:flex-row md:justify-between'>
        <span className='md:max-lg:hidden'>© 2026 Weslley Eugênio · Next.js · Tailwind · Motion</span>
        {contact.email && (
          <span className='md:ml-auto'>
            Não usa Gmail?{' '}
            <a
              href={`mailto:${contact.email}`}
              className='text-vapor-cyan underline transition hover:text-vapor-pink'
            >
              Abrir no app de e-mail
            </a>
          </span>
        )}
      </footer>
    </section>
  );
}