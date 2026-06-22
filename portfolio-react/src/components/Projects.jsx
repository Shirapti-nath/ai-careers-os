import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { PROJECTS } from '../data/content';
import ProjectDemoPreview from './ProjectDemoPreview';

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index}>
      <motion.article
        whileHover={{ y: -4 }}
        className={`group relative overflow-hidden rounded-xl border surface-card p-5 backdrop-blur transition-all duration-300 md:p-6 ${
          project.featured
            ? 'hover:border-violet-400 hover:shadow-soft-lg dark:hover:border-violet-400/40'
            : 'hover:border-sky-400 hover:shadow-soft dark:hover:border-sky-500/40'
        }`}
      >
        {project.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-accent to-accent-2 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Featured
          </span>
        )}

        {project.previewImage && project.demo !== '#' && (
          <ProjectDemoPreview image={project.previewImage} demoUrl={project.demo} title={project.title} />
        )}

        <h3 className="mb-2 pr-16 text-lg font-bold text-ink transition-colors group-hover:text-accent dark:text-slate-100">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mb-3 grid gap-2 sm:grid-cols-3">
          <div className="rounded-lg border border-rose-100 bg-rose-50/70 p-3 dark:border-rose-500/20 dark:bg-rose-950/30">
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-300">Problem</p>
            <p className="text-[11px] leading-relaxed text-ink/80 dark:text-slate-300">{project.problem}</p>
          </div>
          <div className="rounded-lg border border-violet-100 bg-violet-50/70 p-3 dark:border-violet-500/20 dark:bg-violet-950/30">
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-300">Solution</p>
            <p className="text-[11px] leading-relaxed text-ink/80 dark:text-slate-300">{project.solution}</p>
          </div>
          <div className="rounded-lg border border-emerald-100 bg-emerald-50/70 p-3 dark:border-emerald-500/20 dark:bg-emerald-950/30">
            <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">Impact</p>
            <p className="text-[11px] leading-relaxed text-ink/80 dark:text-slate-300">{project.impact}</p>
          </div>
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded border border-sky-200 bg-sky-50 px-2 py-0.5 font-mono text-[10px] text-sky-700 dark:border-sky-500/30 dark:bg-sky-950/40 dark:text-sky-300"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="mb-4 space-y-1">
          {project.features.map((f) => (
            <li key={f} className="flex gap-1.5 text-xs text-muted">
              <span className="text-accent-2">▸</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          {project.caseStudyId && (
            <a
              href={`#/case-study/${project.caseStudyId}`}
              className="text-xs font-semibold text-ink transition hover:text-accent hover:underline dark:text-violet-200"
            >
              Read Case Study →
            </a>
          )}
          {project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-accent transition hover:underline"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Problem → Solution → Impact on every build.">
      <div className="grid gap-4 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
