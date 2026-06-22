import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { ACHIEVEMENTS, AI_CERT_PDF, AI_CERT_THUMB, GOOGLE_EDUCATOR_CERT } from '../data/content';

function CertThumb({ children }) {
  return (
    <div className="flex h-[4.25rem] w-[4.75rem] shrink-0 items-center justify-center overflow-hidden rounded-md border border-violet-400/[0.06] bg-[#fff9f2] p-0.5 dark:bg-[#fff9f2]">
      {children}
    </div>
  );
}

function CompactCert({ title, issuer, href, preview }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group surface-card flex items-center gap-3 p-2.5 transition hover:border-violet-400/20"
    >
      <CertThumb>{preview}</CertThumb>
      <div className="min-w-0 flex-1">
        <h3 className="text-[11px] font-semibold leading-tight text-ink group-hover:text-accent dark:text-slate-100 sm:text-xs">
          {title}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-[10px] text-muted dark:text-dusk-muted">{issuer}</p>
        <span className="mt-1 inline-block text-[10px] font-medium text-accent">View certificate →</span>
      </div>
    </a>
  );
}

function AchievementCard({ item }) {
  return (
    <motion.a
      href={item.link}
      target={item.link !== '#' ? '_blank' : undefined}
      rel={item.link !== '#' ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -2 }}
      className="group surface-card flex items-center gap-2.5 p-2.5 transition hover:border-violet-400/20"
      onClick={item.link === '#' ? (e) => e.preventDefault() : undefined}
    >
      {item.image ? (
        <div className="h-14 w-16 shrink-0 overflow-hidden rounded-md border border-violet-400/[0.06] bg-dusk-elevated">
          <img src={item.image} alt="" className="h-full w-full object-cover object-center" loading="lazy" decoding="async" />
        </div>
      ) : (
        <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-md border border-violet-400/[0.06] bg-dusk-elevated text-2xl">
          {item.logo}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="text-xs font-semibold text-ink group-hover:text-accent dark:text-slate-100">{item.title}</h3>
        <p className="mt-0.5 line-clamp-3 text-[11px] leading-relaxed text-muted dark:text-dusk-muted">{item.issuer}</p>
        {item.link !== '#' && <span className="mt-1 inline-block text-[10px] font-medium text-accent">View →</span>}
      </div>
    </motion.a>
  );
}

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Certifications">
      <div className="mb-3 grid gap-2 sm:grid-cols-2">
        <Reveal>
          <CompactCert
            title="AI Engineer for Developer Associate"
            issuer="DataCamp Certification"
            href={AI_CERT_PDF}
            preview={
              <img
                src={AI_CERT_THUMB}
                alt="DataCamp AI Engineer certificate"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            }
          />
        </Reveal>
        <Reveal delay={1}>
          <CompactCert
            title="Google Certified Educator, Level 1"
            issuer="Google for Education · Valid through Jan 2029"
            href={GOOGLE_EDUCATOR_CERT}
            preview={
              <img
                src={GOOGLE_EDUCATOR_CERT}
                alt="Google Certified Educator"
                className="max-h-full max-w-full object-contain object-top"
                loading="lazy"
                decoding="async"
              />
            }
          />
        </Reveal>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {ACHIEVEMENTS.map((item, i) => (
          <Reveal key={item.title} delay={i}>
            <AchievementCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
