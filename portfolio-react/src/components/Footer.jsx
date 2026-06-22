export default function Footer() {
  return (
    <footer className="border-t border-violet-100 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-ink">Shirapti</span>. Built with React
          &amp; Vite.
        </p>
        <p className="text-xs font-medium text-accent">Software Engineer · AI &amp; Backend</p>
      </div>
    </footer>
  );
}
