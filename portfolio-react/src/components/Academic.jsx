import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { ACADEMIC } from '../data/content';

const badgeColors = {
  amber: 'bg-amber-500/90 text-white',
  violet: 'bg-violet-500/90 text-white',
};

export default function Academic() {
  return (
    <Section
      id="academic"
      title="Academic Highlights"
      subtitle="Strong CS fundamentals with a focus on AI and data science."
      className="bg-white/30"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {ACADEMIC.map((item, i) => (
          <Reveal key={item.degree} delay={i}>
            <motion.div
              whileHover={{ y: -3 }}
              className="relative min-h-[200px] overflow-hidden rounded-2xl border border-white/60 shadow-card transition hover:shadow-soft-lg"
            >
              <img
                src={item.bgImage}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-md brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-white/65 backdrop-blur-[2px]" />
              <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
                <span
                  className={`mb-2 inline-block w-fit rounded-full px-3 py-1 text-xs font-bold shadow-sm ${badgeColors[item.color]}`}
                >
                  {item.highlight}
                </span>
                <h3 className="mb-1 text-lg font-bold text-ink">{item.degree}</h3>
                <p className="text-sm font-medium text-ink/80">{item.institution}</p>
                <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
