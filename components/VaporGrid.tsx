export default function VaporGrid() {
    return (
        <div
          aria-hidden
          className='vapor-grid-fade pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[45%] overflow-hidden perspective-[420px]'
        >
            <div className='vapor-grid-fade pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-[40%] overflow-hidden perspective-[420px]' />
        </div>
    );
}