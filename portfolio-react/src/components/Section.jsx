import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Section({ id, label, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {label && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent"
          >
            {label}
          </motion.p>
        )}
        {title && (
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={1}
            className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={2}
            className="mb-12 max-w-2xl text-base text-zinc-400 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
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
      viewport={{ once: true, margin: '-60px' }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { fadeUp };
