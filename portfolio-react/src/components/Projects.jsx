import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { PROJECTS } from '../data/content';

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index}>
      <motion.article
        whileHover={{ y: -6 }}
        className={`group relative overflow-hidden rounded-2xl border bg-white/80 p-6 shadow-card backdrop-blur transition-all duration-300 md:p-8 ${
          project.featured
            ? 'border-violet-200 hover:border-violet-400 hover:shadow-soft-lg'
            : 'border-slate-200 hover:border-accent-3/50 hover:shadow-soft'
        }`}
      >
        {project.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1 text-xs font-bold text-white">
            Featured
          </span>
        )}

        <h3 className="mb-2 text-xl font-bold text-ink transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mb-4 rounded-xl border border-violet-100 bg-violet-50/50 p-4">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-accent">Problem</p>
          <p className="text-sm text-ink/80">{project.problem}</p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-sky-200 bg-sky-50 px-2.5 py-1 font-mono text-xs text-sky-700"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="mb-6 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-muted">
              <span className="text-accent-2">▸</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            target={project.github.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="text-sm font-semibold text-ink underline-offset-4 transition hover:text-accent hover:underline"
          >
            GitHub ↗
          </a>
          {project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent underline-offset-4 transition hover:underline"
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
    <Section id="projects" label="03 — Projects" title="Projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
