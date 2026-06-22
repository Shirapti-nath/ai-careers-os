import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { SKILL_GROUPS } from '../data/content';

export default function Skills() {
  return (
    <Section
      id="skills"
      label="02 — Skills"
      title="Technical Skills"
      subtitle="Grouped by domain — languages, AI systems, backend, and tooling."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.title} delay={gi}>
            <div className="rounded-2xl border border-white/8 bg-card/80 p-6 backdrop-blur transition hover:border-accent/30 hover:shadow-glow">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-semibold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34,211,238,0.25)' }}
                    className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300 transition hover:border-accent/40 hover:text-accent"
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
