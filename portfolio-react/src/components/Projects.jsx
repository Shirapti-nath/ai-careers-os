import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { PROJECTS } from '../data/content';

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index}>
      <motion.article
        whileHover={{ y: -6 }}
        className={`group relative overflow-hidden rounded-2xl border bg-card/90 p-6 backdrop-blur transition-all duration-300 md:p-8 ${
          project.featured
            ? 'border-accent/30 shadow-glow hover:shadow-glow-lg'
            : 'border-white/8 hover:border-accent/25 hover:shadow-glow'
        }`}
      >
        {project.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
            Featured
          </span>
        )}

        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>

        <div className="mb-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">Problem</p>
          <p className="text-sm text-zinc-300">{project.problem}</p>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-accent/20 bg-accent/5 px-2.5 py-1 font-mono text-xs text-accent"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="mb-6 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-zinc-400">
              <span className="text-accent">▸</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            target={project.github.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-300 underline-offset-4 transition hover:text-accent hover:underline"
          >
            GitHub ↗
          </a>
          <a
            href={project.demo}
            target={project.demo.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent underline-offset-4 transition hover:underline"
          >
            Live Demo ↗
          </a>
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      label="03 — Projects"
      title="Selected Work"
      subtitle="Backend services, AI platforms, and systems I've built — with real problems and production-minded architecture."
      className="bg-surface/50"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
