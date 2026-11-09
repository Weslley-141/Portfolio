export default function Sun({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox='0 0 400 400' className={className}>
      <defs>
        <linearGradient id='sun-fill' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stopColor='#ffe0f5' />
          <stop offset='45%' stopColor='#ff6ec7' />
          <stop offset='100%' stopColor='#7b2ff7' />
        </linearGradient>
        <mask id='sun-stripes'>
          <rect width='400' height='400' fill='white' />
          <rect y='230' width='400' height='6' fill='black' />
          <rect y='268' width='400' height='10' fill='black' />
          <rect y='306' width='400' height='14' fill='black' />
          <rect y='346' width='400' height='18' fill='black' />
        </mask>
      </defs>
      <circle cx='200' cy='200' r='190' fill='url(#sun-fill)' mask='url(#sun-stripes)' />
    </svg>
  );
}