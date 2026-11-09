export default function VideoBackground() {
  return (
    <div aria-hidden className='fixed inset-0 -z-10 overflow-hidden bg-vapor-dark'>
      <div
        className='absolute inset-0 hidden scale-110 bg-cover bg-center opacity-70 blur-[6px] saturate-150 motion-reduce:block'
        style={{ backgroundImage: `url('/videos/vaporBg-poster.jpg')` }}
      />
      <video
        className='bg-video absolute inset-0 h-full w-full scale-110 object-cover opacity-70 blur-[6px] saturate-150'
        autoPlay
        muted
        loop
        playsInline
        preload='metadata'
        poster='/videos/vaporBg-poster.jpg'
      >
        <source src='/videos/vaporBg.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-linear-to-b from-vapor-pink/25 via-vapor-purple/35 to-vapor-cyan/25' />
      <div className='absolute inset-0 bg-vapor-dark/45' />
      <div className='vignette absolute inset-0' />
    </div>
  );
}