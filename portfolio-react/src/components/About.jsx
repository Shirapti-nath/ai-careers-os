import { Section, Reveal } from './Section';

export default function About() {
  return (
    <Section id="about" label="01 — About" title="About Me">
      <div className="grid items-center gap-12 md:grid-cols-[240px_1fr]">
        <Reveal>
          <div className="mx-auto w-56 md:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-white bg-gradient-to-br from-violet-100 via-pink-50 to-sky-100 shadow-soft-lg">
              <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                <span className="text-5xl">👤</span>
                <span className="text-xs font-medium text-muted">Add your photo</span>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-violet-200/50" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="card-glass space-y-4 p-8 text-base leading-relaxed text-muted md:text-lg">
            <p className="text-ink">
              I&apos;m <strong>Shirapti Nath</strong> — a full-stack developer who builds products from
              database schema to deployed UI.
            </p>
            <p>
              My sweet spot is turning messy real-world problems into clean, fast web experiences —
              React frontends, Node.js APIs, MongoDB, and LLM-powered features that students and teams
              actually use.
            </p>
            <p>
              Right now I&apos;m focused on career-tech and AI systems:{' '}
              <strong className="text-accent">AI Career OS</strong>, a free platform for resume analysis,
              career path exploration, and interview prep — live on GitHub Pages.
            </p>
            <p className="text-sm font-medium text-accent">
              Open to Software Engineer &amp; AI Engineer roles.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
