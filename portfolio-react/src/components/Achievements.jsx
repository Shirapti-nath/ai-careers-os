import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { ACHIEVEMENTS } from '../data/content';

export default function Achievements() {
  return (
    <Section
      id="achievements"
      label="05 — Achievements"
      title="Achievements & Certifications"
      subtitle="Certifications, hackathons, and academic recognition."
      className="bg-surface/50"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((item, i) => (
          <Reveal key={item.title} delay={i}>
            <motion.a
              href={item.link}
              whileHover={{ y: -6, boxShadow: '0 0 40px rgba(34,211,238,0.2)' }}
              className="group flex h-full flex-col rounded-2xl border border-white/8 bg-card/90 p-6 transition hover:border-accent/35"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-3xl">
                {item.logo}
              </div>
              <h3 className="mb-1 font-bold text-white group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-zinc-400">{item.issuer}</p>
              <span className="text-sm font-semibold text-accent opacity-0 transition group-hover:opacity-100">
                View Certificate →
              </span>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
