import { SITE_META } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 py-8 dark:border-violet-400/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-ink dark:text-slate-100">Shirapti</span>. Built with React
          &amp; Vite.
        </p>
        <p className="text-xs font-medium text-accent">
          Software Engineer · AI &amp; Backend · Updated {SITE_META.lastUpdated}
        </p>
      </div>
    </footer>
  );
}
