import { motion } from 'framer-motion';
import { Section, Reveal } from './Section';
import { ACHIEVEMENTS, AI_CERT_PDF, GOOGLE_EDUCATOR_CERT } from '../data/content';

function CertShowcase({ title, issuer, bgImage, pdfUrl, children }) {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-2xl border border-violet-200/80 bg-white shadow-soft-lg">
        {bgImage && (
          <>
            <img
              src={bgImage}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover object-top opacity-30 blur-[1px]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/92 via-white/88 to-violet-50/80" />
          </>
        )}
        <div className="relative p-5 md:p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-ink">{title}</h3>
            <p className="text-sm text-muted">{issuer}</p>
          </div>
          {children}
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
            >
              Open full certificate →
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements & Certifications"
      subtitle="Certifications, hackathons, and academic recognition."
    >
      <div className="mb-6 grid gap-4 lg:grid-cols-2">
        <CertShowcase
          title="AI Engineer for Developer Associate"
          issuer="DataCamp Certification"
          pdfUrl={AI_CERT_PDF}
        >
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-inner">
            <iframe
              src={`${AI_CERT_PDF}#toolbar=0&navpanes=0`}
              title="AI Engineer for Developer Associate Certificate"
              className="h-[340px] w-full md:h-[400px]"
            />
          </div>
        </CertShowcase>

        <CertShowcase
          title="Google Certified Educator, Level 1"
          issuer="Google for Education · Valid through Jan 2029"
          bgImage={GOOGLE_EDUCATOR_CERT}
          pdfUrl={GOOGLE_EDUCATOR_CERT}
        >
          <a
            href={GOOGLE_EDUCATOR_CERT}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-xl border border-slate-200 shadow-inner transition hover:shadow-md"
          >
            <img
              src={GOOGLE_EDUCATOR_CERT}
              alt="Google Certified Educator Level 1"
              className="w-full object-cover object-top"
            />
          </a>
        </CertShowcase>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((item, i) => (
          <Reveal key={item.title} delay={i}>
            <motion.a
              href={item.link}
              target={item.link !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white/90 shadow-sm transition hover:border-violet-300 hover:shadow-soft"
            >
              {item.image ? (
                <div className="h-32 overflow-hidden border-b border-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-top transition group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex h-16 items-center justify-center border-b border-slate-100 bg-gradient-to-r from-amber-50 to-yellow-50 text-3xl">
                  {item.logo}
                </div>
              )}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1 text-sm font-bold text-ink group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="flex-1 text-xs text-muted leading-relaxed">{item.issuer}</p>
                {item.link !== '#' && (
                  <span className="mt-2 text-xs font-semibold text-accent">View →</span>
                )}
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
