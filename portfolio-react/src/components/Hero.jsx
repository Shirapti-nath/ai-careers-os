import { motion } from 'framer-motion';
import { RESUME_PDF } from '../data/content';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Software Engineer · AI &amp; Backend
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
            I&apos;m <span className="text-gradient">Shirapti</span>
          </h1>

          <div className="mb-10 space-y-4 text-base leading-relaxed text-muted md:text-lg">
            <p className="text-lg font-medium text-ink md:text-xl">
              A CSE graduate with a <strong className="text-accent">Gold Medal</strong>, currently
              pursuing an MSc in AI and Data Science at <strong className="text-ink">BITS Pilani</strong>.
            </p>
            <p>
              I build full-stack products powered by practical AI — from multi-agent architectures that
              automate complex workflows to intelligent systems that turn raw data into real decisions.
              My focus is shipping end-to-end: designing APIs, wiring databases, integrating LLMs, and
              polishing frontends until the product feels fast and trustworthy.
            </p>
            <p>
              I learn by building, breaking, and iterating until the system actually works for users —
              not just in a demo.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-105 hover:shadow-soft-lg"
            >
              View Resume
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-6 py-3 text-sm font-semibold text-ink shadow-sm transition hover:border-accent hover:text-accent"
            >
              View Projects
            </a>
            <a
              href={RESUME_PDF}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-6 py-3 text-sm font-medium text-muted transition hover:border-accent-3 hover:text-accent-3"
            >
              ↓ Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
