export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} <span className="text-zinc-300">Shirapti</span>. Built with React
          &amp; Vite.
        </p>
        <p className="font-mono text-xs">Software Engineer · AI &amp; Backend</p>
      </div>
    </footer>
  );
}
