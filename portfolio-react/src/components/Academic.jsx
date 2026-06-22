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
      <div className="grid gap-5 md:grid-cols-2">
        {ACADEMIC.map((item, i) => (
          <Reveal key={item.degree} delay={i}>
            <motion.article
              whileHover={{ y: -4 }}
              className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card transition hover:shadow-soft-lg"
            >
              {/* Clear campus photo - separate from text */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={item.bgImage}
                  alt={item.institution}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accentBar[item.color]}`} />
              </div>

              {/* Text panel - solid background, no image overlap */}
              <div className="border-t border-slate-100 bg-white p-5 md:p-6">
                <span
                  className={`mb-3 inline-block rounded-full border px-3 py-1 text-xs font-bold ${badgeColors[item.color]}`}
                >
                  {item.highlight}
                </span>
                <h3 className="mb-1.5 text-lg font-bold leading-snug text-ink">{item.degree}</h3>
                <p className="text-sm font-semibold text-ink/90">{item.institution}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                  <span className={`inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r ${accentBar[item.color]}`} />
                  {item.period}
                </p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
