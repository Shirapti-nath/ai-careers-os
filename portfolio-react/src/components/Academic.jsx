import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { ACADEMIC } from '../data/content';

const ringColors = {
  amber: 'ring-amber-200',
  violet: 'ring-violet-200',
};

export default function Academic() {
  return (
    <Section id="academic" title="Education" className="bg-white/35 dark:bg-dusk-card/15">
      <div className="grid gap-2.5 sm:grid-cols-2">
        {ACADEMIC.map((item, i) => (
          <Reveal key={item.degree} delay={i}>
            <motion.article
              whileHover={{ scale: 1.01 }}
              className="surface-card flex items-center gap-3 rounded-lg p-2.5 transition hover:shadow-md"
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
                <p className="mb-1 font-mono text-[10px] text-muted">{item.period}</p>
                <h3 className="truncate text-xs font-bold text-ink dark:text-white sm:text-[13px]">{item.degree}</h3>
                <p className="truncate text-[11px] font-medium text-muted">{item.institution}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
