import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { ACADEMIC } from '../data/content';

const colors = {
  amber: 'from-amber-50 to-orange-50 border-amber-200 hover:border-amber-400',
  violet: 'from-violet-50 to-purple-50 border-violet-200 hover:border-violet-400',
};

export default function Academic() {
  return (
    <Section
      id="academic"
      label="04 — Education"
      title="Academic Highlights"
      subtitle="Strong CS fundamentals with a focus on AI and data science."
      className="bg-white/40"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {ACADEMIC.map((item, i) => (
          <Reveal key={item.degree} delay={i}>
            <motion.div
              whileHover={{ y: -4 }}
              className={`h-full rounded-2xl border bg-gradient-to-br p-6 shadow-card transition hover:shadow-soft-lg ${colors[item.color]}`}
            >
              <span className="mb-3 inline-block rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-accent shadow-sm">
                {item.highlight}
              </span>
              <h3 className="mb-2 text-lg font-bold text-ink">{item.degree}</h3>
              <p className="text-sm text-muted">{item.institution}</p>
              <p className="mt-2 font-mono text-xs text-muted">{item.period}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
