export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #fffbf7 0%, #f5f3ff 35%, #eff6ff 65%, #fdf2f8 100%)',
        }}
      />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(124,58,237,0.07) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
    </div>
  );
}
