import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { ACHIEVEMENTS, AI_CERT_PDF, AI_CERT_IMG, GOOGLE_EDUCATOR_CERT } from '../data/content';

function CompactCert({ title, issuer, href, preview }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white p-2 transition hover:border-violet-300 hover:shadow-md"
    >
      <div className="h-16 w-[4.5rem] shrink-0 overflow-hidden rounded-md border border-slate-100 bg-white">
        {preview}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-[11px] font-bold leading-tight text-ink group-hover:text-accent sm:text-xs">
          {title}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-[10px] text-muted">{issuer}</p>
        <span className="mt-1 inline-block text-[10px] font-semibold text-accent">View certificate →</span>
      </div>
    </a>
  );
}

function AchievementCard({ item }) {
  if (item.combined) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="col-span-full flex items-center gap-3 rounded-lg border border-amber-200 bg-gradient-to-r from-amber-50 to-white p-3 shadow-sm"
      >
        <div className="flex shrink-0 gap-2 text-2xl">
          {item.logos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
        <div className="min-w-0">
          <h3 className="text-xs font-bold text-ink sm:text-sm">{item.title}</h3>
          <p className="mt-0.5 text-[11px] leading-relaxed text-muted sm:text-xs">{item.issuer}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={item.link}
      target={item.link !== '#' ? '_blank' : undefined}
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      className="group flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm transition hover:border-violet-300 hover:shadow-md"
    >
      {item.image ? (
        <div className="h-14 w-16 shrink-0 overflow-hidden rounded-md border border-slate-100">
          <img src={item.image} alt="" className="h-full w-full object-cover object-top" />
        </div>
      ) : (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-slate-50 to-violet-50 text-2xl">
          {item.logo}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="text-xs font-bold text-ink group-hover:text-accent">{item.title}</h3>
        <p className="mt-0.5 line-clamp-3 text-[11px] leading-relaxed text-muted">{item.issuer}</p>
        {item.link !== '#' && <span className="mt-1 inline-block text-[10px] font-semibold text-accent">View →</span>}
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
                src={AI_CERT_IMG}
                alt="DataCamp AI Engineer certificate"
                className="h-full w-full object-cover object-top"
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
                className="h-full w-full object-cover object-top"
              />
            }
          />
        </Reveal>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {ACHIEVEMENTS.map((item, i) => (
          <Reveal key={item.title} delay={i} className={item.combined ? 'sm:col-span-2' : ''}>
            <AchievementCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
