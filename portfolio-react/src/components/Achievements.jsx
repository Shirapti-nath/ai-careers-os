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
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {ACHIEVEMENTS.map((item, i) => (
          <Reveal key={item.title} delay={i}>
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-card transition hover:border-violet-300 hover:shadow-soft-lg"
            >
              {item.image ? (
                <div className="relative h-44 overflow-hidden border-b border-slate-100 bg-slate-50">
                  {item.isPdf ? (
                    <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-violet-50 to-pink-50">
                      <span className="text-4xl">🎓</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">DataCamp Certificate</span>
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-top transition group-hover:scale-105"
                    />
                  )}
                </div>
              ) : (
                <div className="flex h-20 items-center justify-center border-b border-slate-100 bg-gradient-to-r from-amber-50 to-yellow-50 text-4xl">
                  {item.logo}
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1 font-bold text-ink group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted">{item.issuer}</p>
                <span className="text-sm font-semibold text-accent">
                  View Certificate →
                </span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
