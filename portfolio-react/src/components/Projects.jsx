import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { PROJECTS } from '../data/content';

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index}>
      <motion.article
        whileHover={{ y: -4 }}
        className={`group relative overflow-hidden rounded-xl border bg-white/85 p-5 shadow-sm backdrop-blur transition-all duration-300 md:p-6 ${
          project.featured
            ? 'border-violet-200 hover:border-violet-400 hover:shadow-soft-lg'
            : 'border-slate-200 hover:border-sky-300 hover:shadow-soft'
        }`}
      >
        {project.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-accent to-accent-2 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Featured
          </span>
        )}

        <h3 className="mb-2 pr-16 text-lg font-bold text-ink transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mb-3 rounded-lg border border-violet-100 bg-violet-50/60 p-3">
          <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">Problem</p>
          <p className="text-xs text-ink/80">{project.problem}</p>
        </div>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded border border-sky-200 bg-sky-50 px-2 py-0.5 font-mono text-[10px] text-sky-700"
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
          <a
            href={project.github}
            target={project.github.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="text-xs font-semibold text-ink transition hover:text-accent hover:underline"
          >
            GitHub ↗
          </a>
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
    <Section id="projects" title="Projects">
      <div className="grid gap-4 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
