export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 dark:opacity-0"
        style={{
          background:
            'linear-gradient(135deg, #fff8f3 0%, #f3eeff 30%, #e8f4ff 60%, #fce8f4 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'linear-gradient(160deg, #12101c 0%, #161425 40%, #141828 70%, #18121f 100%)',
        }}
      />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-600/14" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl dark:bg-fuchsia-600/10" />
      <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl dark:bg-sky-600/10" />
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(167,139,250,0.12) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}
