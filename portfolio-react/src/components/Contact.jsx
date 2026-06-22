import { Section, Reveal } from './Section';
import { CONTACT, RESUME_PDF } from '../data/content';

const items = [
  {
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: '✉️',
  },
  {
    label: 'Phone',
    value: CONTACT.phone,
    href: `tel:+91${CONTACT.phone}`,
    icon: '📱',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shirapti',
    href: CONTACT.linkedin,
    icon: '💼',
  },
  {
    label: 'GitHub',
    value: 'github.com/Shirapti-nath',
    href: CONTACT.github,
    icon: '🐙',
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      label="06 — Contact"
      title="Let's Connect"
      subtitle="Open to Software Engineer and AI Engineer opportunities. Reach out anytime."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i}>
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-white/8 bg-card/80 p-5 transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
            >
              <span className="mb-3 text-2xl">{item.icon}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {item.label}
              </span>
              <span className="mt-1 text-sm font-medium text-white group-hover:text-accent transition-colors break-all">
                {item.value}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={4}>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={RESUME_PDF}
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-[#0a0a0f] shadow-glow transition hover:scale-105 hover:shadow-glow-lg"
          >
            ↓ Download Resume (PDF)
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
