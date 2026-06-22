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
          className="max-w-3xl"
        >
          <p className="mb-4 font-mono text-sm text-accent">Hi, I&apos;m</p>
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            Shirapti
          </h1>
          <p className="mb-3 text-xl font-semibold text-zinc-200 md:text-2xl">
            Software Engineer <span className="text-zinc-500">|</span>{' '}
            <span className="text-gradient">AI &amp; Backend Systems Builder</span>
          </p>
          <p className="mb-10 max-w-xl text-lg text-zinc-400">
            Building AI-driven systems that solve real problems
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={RESUME_PDF}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0a0a0f] shadow-glow transition hover:scale-105 hover:shadow-glow-lg"
            >
              View Resume
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-accent/50 hover:text-accent"
            >
              View Projects
            </a>
            <a
              href={RESUME_PDF}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-400 transition hover:border-accent/30 hover:text-accent"
            >
              ↓ Download Resume (PDF)
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-8 w-px bg-gradient-to-b from-accent/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
