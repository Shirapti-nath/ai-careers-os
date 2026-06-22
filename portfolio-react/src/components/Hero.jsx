import { motion } from 'framer-motion';
import { RESUME_PDF } from '../data/content';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-0 items-center pt-14 pb-6">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Software Engineer · AI & Backend
          </p>
          <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-ink dark:text-slate-100 md:text-5xl lg:text-[3.25rem]">
            I&apos;m <span className="text-gradient">Shirapti</span>
          </h1>

          <div className="mb-8 space-y-3 text-sm leading-relaxed text-muted dark:text-dusk-muted md:text-base">
            <p className="text-base font-medium text-ink dark:text-slate-200 md:text-lg">
              A CSE graduate with a <strong className="text-accent">Gold Medal</strong>, currently
              pursuing an MSc in AI and Data Science at <strong className="text-ink dark:text-white">BITS Pilani</strong>.
            </p>
            <p>
              I build full-stack products powered by practical AI - from multi-agent architectures that
              automate complex workflows to intelligent systems that turn raw data into real decisions.
              My focus is shipping end-to-end: designing APIs, wiring databases, integrating LLMs, and
              polishing frontends until the product feels fast and trustworthy.
            </p>
            <p>
              I learn by building, breaking, and iterating until the system actually works for users -
              not just in a demo.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02] hover:shadow-soft-lg"
            >
              View Resume →
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-dusk-card/80 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-accent/40 hover:text-accent"
            >
              View Projects
            </a>
            <a
              href={RESUME_PDF}
              download
              className="inline-flex items-center gap-2 rounded-full border border-violet-400/10 bg-dusk-elevated/60 px-5 py-2.5 text-sm font-medium text-dusk-muted transition hover:border-accent-3/40 hover:text-accent-3"
            >
              ↓ Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
