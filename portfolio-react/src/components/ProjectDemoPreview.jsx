import { motion } from 'framer-motion';

export default function ProjectDemoPreview({ image, demoUrl, title }) {
  return (
    <a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative mb-4 block overflow-hidden rounded-xl border border-violet-200/80 bg-white shadow-sm transition hover:border-violet-400 hover:shadow-soft dark:border-violet-500/30 dark:bg-slate-800/60 dark:hover:border-violet-400"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-violet-50 via-pink-50 to-sky-50 dark:from-violet-950/40 dark:via-slate-900 dark:to-indigo-950/40">
        <img
          src={image}
          alt={`${title} live demo preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition group-hover:bg-ink/10">
          <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-accent opacity-0 shadow-lg transition group-hover:opacity-100 dark:bg-slate-900/95 dark:text-violet-300">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Open Live Demo
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-violet-100/80 px-3 py-2 dark:border-violet-500/20">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">Interactive preview</span>
        <span className="text-[10px] font-bold text-accent group-hover:underline">Launch ↗</span>
      </div>
    </a>
  );
}
