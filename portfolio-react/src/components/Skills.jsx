import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { SKILL_GROUPS } from '../data/content';

const colorMap = {
  violet: 'from-violet-500/10 to-violet-100/50 border-violet-200 hover:border-violet-400',
  sky: 'from-sky-500/10 to-sky-100/50 border-sky-200 hover:border-sky-400',
  rose: 'from-rose-500/10 to-rose-100/50 border-rose-200 hover:border-rose-400',
};

const tagColor = {
  violet: 'hover:bg-violet-100 hover:text-violet-700 hover:border-violet-300',
  sky: 'hover:bg-sky-100 hover:text-sky-700 hover:border-sky-300',
  rose: 'hover:bg-rose-100 hover:text-rose-700 hover:border-rose-300',
};

export default function Skills() {
  return (
    <Section
      id="skills"
      label="02 — Skills"
      title="Technical Skills"
      subtitle="Languages, backend, and tooling I use to ship full-stack AI products."
      className="bg-white/40"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.title} delay={gi}>
            <div
              className={`rounded-2xl border bg-gradient-to-br p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft-lg ${colorMap[group.color]}`}
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-bold text-ink">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className={`cursor-default rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm text-muted transition ${tagColor[group.color]}`}
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
