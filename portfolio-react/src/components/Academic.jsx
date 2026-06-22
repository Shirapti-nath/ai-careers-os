import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { ACADEMIC } from '../data/content';

const accentBar = {
  amber: 'from-amber-400 to-orange-500',
  violet: 'from-violet-500 to-purple-600',
};

const badgeColors = {
  amber: 'bg-amber-100 text-amber-800 border-amber-200',
  violet: 'bg-violet-100 text-violet-800 border-violet-200',
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
            <motion.article
              whileHover={{ y: -3 }}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition hover:shadow-soft-lg"
            >
              {/* College banner - full width, sharp, no text overlap */}
              <div className="relative h-44 overflow-hidden bg-slate-200 sm:h-48 md:h-52">
                <img
                  src={item.bgImage}
                  alt={`${item.institution} campus`}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Degree details - separate block below banner */}
              <div className="border-t border-slate-100 bg-white px-4 py-4">
                <span
                  className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${badgeColors[item.color]}`}
                >
                  {item.highlight}
                </span>
                <h3 className="mb-1 text-base font-bold leading-snug text-ink">{item.degree}</h3>
                <p className="text-sm font-medium text-ink/85">{item.institution}</p>
                <p className="mt-1.5 font-mono text-xs text-muted">{item.period}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
