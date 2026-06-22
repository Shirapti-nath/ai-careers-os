import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-6 md:py-8 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {title && (
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mb-1 text-xl font-semibold tracking-tight text-ink dark:text-slate-100 md:text-2xl"
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={1}
            className="mb-4 max-w-2xl text-sm text-muted dark:text-dusk-muted"
          >
            {subtitle}
          </motion.p>
        )}
        {!subtitle && title && <div className="mb-4" />}
        {children}
      </div>
    </section>
  );
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { fadeUp };
