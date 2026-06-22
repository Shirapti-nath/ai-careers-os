import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { ACADEMIC } from '../data/content';

export default function Academic() {
  return (
    <Section
      id="academic"
      label="04 — Education"
      title="Academic Highlights"
      subtitle="Strong CS fundamentals with a focus on AI and data science."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {ACADEMIC.map((item, i) => (
          <Reveal key={item.degree} delay={i}>
            <motion.div
              whileHover={{ y: -4 }}
              className="h-full rounded-2xl border border-white/8 bg-card/80 p-6 transition hover:border-accent/30 hover:shadow-glow"
            >
              <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {item.highlight}
              </span>
              <h3 className="mb-2 font-bold text-white">{item.degree}</h3>
              <p className="text-sm text-zinc-400">{item.institution}</p>
              <p className="mt-2 font-mono text-xs text-zinc-500">{item.period}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
