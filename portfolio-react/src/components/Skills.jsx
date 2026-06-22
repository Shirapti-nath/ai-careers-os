import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { SKILL_GROUPS } from '../data/content';

const colorMap = {
  violet: 'from-violet-500/10 to-violet-100/60 border-violet-200/80 hover:border-violet-400',
  pink: 'from-pink-500/10 to-pink-100/60 border-pink-200/80 hover:border-pink-400',
  sky: 'from-sky-500/10 to-sky-100/60 border-sky-200/80 hover:border-sky-400',
  indigo: 'from-indigo-500/10 to-indigo-100/60 border-indigo-200/80 hover:border-indigo-400',
  rose: 'from-rose-500/10 to-rose-100/60 border-rose-200/80 hover:border-rose-400',
  amber: 'from-amber-500/10 to-amber-100/60 border-amber-200/80 hover:border-amber-400',
};

const tagHover = {
  violet: 'hover:bg-violet-100 hover:text-violet-700',
  pink: 'hover:bg-pink-100 hover:text-pink-700',
  sky: 'hover:bg-sky-100 hover:text-sky-700',
  indigo: 'hover:bg-indigo-100 hover:text-indigo-700',
  rose: 'hover:bg-rose-100 hover:text-rose-700',
  amber: 'hover:bg-amber-100 hover:text-amber-700',
};

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Languages, frontend, backend, databases, AI/ML, and DevOps."
      className="bg-white/30"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.title} delay={gi}>
            <div
              className={`rounded-xl border bg-gradient-to-br p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft ${colorMap[group.color]}`}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-lg">{group.icon}</span>
                <h3 className="text-sm font-bold text-ink">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.04 }}
                    className={`cursor-default rounded-full border border-slate-200/80 bg-white/90 px-2.5 py-1 text-xs text-muted transition ${tagHover[group.color]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
