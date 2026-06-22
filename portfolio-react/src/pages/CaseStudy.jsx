import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../data/content';
import ProjectDemoPreview from '../components/ProjectDemoPreview';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import CodeBackground from '../components/CodeBackground';
import Footer from '../components/Footer';

export default function CaseStudy({ id }) {
  const study = CASE_STUDIES[id];
  if (!study) {
    return (
      <>
        <Background />
        <Navbar />
        <main className="relative z-10 flex min-h-[60vh] items-center justify-center pt-20">
          <div className="text-center">
            <p className="text-muted">Case study not found.</p>
            <a href="#projects" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
              ← Back to Projects
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Background />
      <CodeBackground />
      <Navbar />
      <main className="relative z-10 pt-20">
        <article className="mx-auto max-w-4xl px-5 py-8 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#projects"
              className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition hover:underline"
            >
              ← Back to Projects
            </a>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">Case Study</p>
            <h1 className="mb-2 text-2xl font-extrabold text-ink md:text-4xl dark:text-white">{study.title}</h1>
            <p className="mb-6 text-sm text-muted md:text-base">{study.tagline}</p>

            <ProjectDemoPreview image={study.previewImage} demoUrl={study.demo} title={study.title} />

            <div className="mb-6 flex flex-wrap gap-2">
              {study.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 font-mono text-[11px] text-violet-700 dark:border-violet-500/30 dark:bg-violet-950/50 dark:text-violet-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="space-y-5 text-sm leading-relaxed text-muted md:text-base">
              <section className="card-glass p-5 dark:border-violet-500/20 dark:bg-slate-900/60">
                <h2 className="mb-2 text-base font-bold text-ink dark:text-white">Overview</h2>
                <p>{study.overview}</p>
              </section>

              <div className="grid gap-4 md:grid-cols-3">
                <section className="rounded-xl border border-rose-100 bg-rose-50/60 p-4 dark:border-rose-500/20 dark:bg-rose-950/30">
                  <h2 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-300">Problem</h2>
                  <p className="text-xs text-ink/80 dark:text-slate-300">{study.problem}</p>
                </section>
                <section className="rounded-xl border border-violet-100 bg-violet-50/60 p-4 dark:border-violet-500/20 dark:bg-violet-950/30">
                  <h2 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-300">Solution</h2>
                  <p className="text-xs text-ink/80 dark:text-slate-300">{study.solution}</p>
                </section>
                <section className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-500/20 dark:bg-emerald-950/30">
                  <h2 className="mb-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">Impact</h2>
                  <ul className="space-y-1 text-xs text-ink/80 dark:text-slate-300">
                    {study.impact.map((item) => (
                      <li key={item} className="flex gap-1.5">
                        <span className="text-emerald-500">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="card-glass p-5 dark:border-violet-500/20 dark:bg-slate-900/60">
                <h2 className="mb-3 text-base font-bold text-ink dark:text-white">Architecture</h2>
                <div className="space-y-2">
                  {study.architecture.map((row) => (
                    <div
                      key={row.layer}
                      className="flex flex-col gap-1 rounded-lg border border-slate-100 bg-white/60 p-3 sm:flex-row sm:items-center sm:gap-4 dark:border-slate-700 dark:bg-slate-800/40"
                    >
                      <span className="shrink-0 font-mono text-xs font-bold text-accent">{row.layer}</span>
                      <span className="text-xs text-muted">{row.detail}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="card-glass p-5 dark:border-violet-500/20 dark:bg-slate-900/60">
                <h2 className="mb-3 text-base font-bold text-ink dark:text-white">Key Decisions</h2>
                <ul className="space-y-2">
                  {study.decisions.map((d) => (
                    <li key={d} className="flex gap-2 text-sm">
                      <span className="text-accent-2">◆</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={study.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02]"
                >
                  Open Live Demo →
                </a>
                <a
                  href={study.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent dark:border-violet-500/30 dark:bg-slate-800/80 dark:text-violet-100"
                >
                  View Source on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
}
