import { Section, Reveal } from './Section';
import { CONTACT, RESUME_PDF } from '../data/content';

function IconEmail() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const items = [
  { href: `mailto:${CONTACT.email}`, icon: IconEmail, label: 'Email', color: 'hover:bg-violet-100 hover:text-violet-600 hover:border-violet-300' },
  { href: CONTACT.linkedin, icon: IconLinkedIn, label: 'LinkedIn', color: 'hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300', external: true },
  { href: CONTACT.github, icon: IconGitHub, label: 'GitHub', color: 'hover:bg-slate-100 hover:text-slate-800 hover:border-slate-400', external: true },
  { href: CONTACT.twitter, icon: IconX, label: 'X', color: 'hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-400', external: true },
];

export default function Contact() {
  return (
    <Section id="contact" title="Let's Connect" className="bg-white/40 dark:bg-dusk-card/20">
      <Reveal>
        <div className="mb-4 rounded-xl border border-violet-200/50 bg-gradient-to-br from-white to-violet-50/80 p-4 text-center shadow-sm dark:border-violet-400/10 dark:from-dusk-card/90 dark:to-dusk-elevated/60">
          <p className="text-sm font-semibold text-ink dark:text-slate-100">
            Open to Software Engineer and AI Engineer opportunities.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            I am also ready to collaborate on open source contributions.
          </p>
        </div>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-3">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.href} delay={i}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-label={item.label}
                title={item.label}
                className={`surface-card flex h-12 w-12 items-center justify-center rounded-xl text-muted transition hover:-translate-y-0.5 hover:shadow-md dark:text-slate-400 ${item.color}`}
              >
                <Icon />
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={3}>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={RESUME_PDF}
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-2.5 text-xs font-bold text-white shadow-soft transition hover:scale-[1.02]"
          >
            ↓ Download Resume (PDF)
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-xs font-semibold text-ink transition hover:border-accent hover:text-accent dark:border-slate-600 dark:bg-slate-800/80 dark:text-violet-100"
          >
            Contribute on GitHub →
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
