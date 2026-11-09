const SIZE = 72;
const HALF = SIZE / 2;

const faces = [
  { label: '</>', transform: `translateZ(${HALF}px)` },
  { label: '{ }', transform: `rotateY(90deg) translateZ(${HALF}px)` },
  { label: 'TS', transform: `rotateY(180deg) translateZ(${HALF}px)` },
  { label: '⚛', transform: `rotateY(-90deg) translateZ(${HALF}px)` },
  { label: 'UI', transform: `rotateX(90deg) translateZ(${HALF}px)` },
  { label: '01', transform: `rotateX(-90deg) translateZ(${HALF}px)` },
];

export default function Cube() {
    return (
        <div aria-hidden className='shrink-0' style={{ width: SIZE, height: SIZE, perspective: 500 }}>
            <div
              className='animate-cube relative h-full w-full motion-reduce:animate-none'
              style={{ transformStyle: 'preserve-3d' }}
            >
                {faces.map((face) => (
                    <div
                      key={face.label}
                      className='cube-face absolute inset-0 flex items-center justify-center font-display text-sm text-vapor-cyan'
                        style={{ transform: face.transform }}
                    >
                        {face.label}
                    </div>
                ))}
            </div>
        </div>
    );
}