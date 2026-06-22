import { Section, Reveal } from './Section';

export default function About() {
  return (
    <Section id="about" label="01 — About" title="About Me">
      <div className="grid items-center gap-12 md:grid-cols-[240px_1fr]">
        <Reveal>
          <div className="mx-auto w-56 md:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-accent/20 to-card shadow-glow">
              <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                <span className="text-5xl">👤</span>
                <span className="font-mono text-xs text-zinc-500">Add your photo</span>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="space-y-4 text-base leading-relaxed text-zinc-300 md:text-lg">
            <p>
              I&apos;m <strong className="text-white">Shirapti</strong> — a CSE graduate with a{' '}
              <strong className="text-accent">Gold Medal</strong>, currently pursuing an{' '}
              <strong className="text-white">MSc in AI and Data Science at BITS Pilani</strong>.
            </p>
            <p>
              I&apos;m passionate about building practical AI and backend systems — from multi-agent
              architectures that automate complex workflows to computer vision pipelines that reduce
              manual work in the real world.
            </p>
            <p>
              My focus is shipping end-to-end: designing APIs, wiring databases, integrating LLMs,
              and polishing frontends until the product feels fast and trustworthy. I learn by building,
              breaking, and iterating until the system actually works for users.
            </p>
            <p className="text-zinc-400">
              Targeting <span className="text-white">Software Engineer</span> and{' '}
              <span className="text-white">AI Engineer</span> roles where I can grow on production
              systems from day one.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
