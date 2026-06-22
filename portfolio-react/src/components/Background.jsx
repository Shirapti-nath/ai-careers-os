export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 dark:opacity-0"
        style={{
          background:
            'linear-gradient(145deg, #f8f6ff 0%, #ede9fe 22%, #e0f2fe 48%, #fce7f3 72%, #fff7ed 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'linear-gradient(160deg, #2a2640 0%, #322e4a 45%, #2a3048 75%, #302438 100%)',
        }}
      />
      <div className="absolute -left-32 top-16 h-[28rem] w-[28rem] rounded-full bg-violet-400/40 blur-3xl dark:bg-violet-500/20" />
      <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-fuchsia-400/30 blur-3xl dark:bg-fuchsia-500/15" />
      <div className="absolute bottom-16 left-1/4 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl dark:bg-cyan-500/12" />
      <div className="absolute right-1/3 top-2/3 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-400/10" />
      <div
        className="absolute inset-0 opacity-[0.45] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(124,58,237,0.08) 1px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />
    </div>
  );
}
