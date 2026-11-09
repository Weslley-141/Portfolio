import Cube from '@/components/Cube';

const ABOUT =
  'Dev de Recife que gosta de interface bonita que também funciona. React, TypeScript e muita curiosidade. Procurando a primeira vaga júnior.';

export default function AboutCard() {
  return (
    <div className='glass mx-auto mt-6 flex max-w-md items-center gap-5 rounded-xl p-5 text-left md:mx-0'>
      <Cube />
      <div>
        <p className='text-xs uppercase tracking-[0.3em] text-vapor-pink'>Sobre mim</p>
        <p className='mt-2 text-sm text-vapor-text/90'>{ABOUT}</p>
      </div>
    </div>
  );
}