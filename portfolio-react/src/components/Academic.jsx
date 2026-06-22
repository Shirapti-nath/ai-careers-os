import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { ACADEMIC } from '../data/content';

const badgeColors = {
  amber: 'bg-amber-100 text-amber-800',
  violet: 'bg-violet-100 text-violet-800',
};

const ringColors = {
  amber: 'ring-amber-200',
  violet: 'ring-violet-200',
};

export default function Academic() {
  return (
    <Section id="academic" title="Education" className="bg-white/20">
      <div className="grid gap-2.5 sm:grid-cols-2">
        {ACADEMIC.map((item, i) => (
          <Reveal key={item.degree} delay={i}>
            <motion.article
              whileHover={{ scale: 1.01 }}
              className="flex items-center gap-3 rounded-lg border border-slate-200/90 bg-white/95 p-2.5 shadow-sm transition hover:shadow-md"
            >
              <div
                className={`h-16 w-20 shrink-0 overflow-hidden rounded-md ring-2 ${ringColors[item.color]}`}
              >
                <img
                  src={item.bgImage}
                  alt={item.institution}
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-1.5">
                  <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${badgeColors[item.color]}`}>
                    {item.highlight}
                  </span>
                  <span className="font-mono text-[10px] text-muted">{item.period}</span>
                </div>
                <h3 className="truncate text-xs font-bold text-ink sm:text-[13px]">{item.degree}</h3>
                <p className="truncate text-[11px] font-medium text-muted">{item.institution}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
