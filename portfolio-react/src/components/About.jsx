import { Section, Reveal } from './Section';
import { IMAGES } from '../data/content';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid items-center gap-8 md:grid-cols-[200px_1fr]">
        <Reveal>
          <div className="mx-auto w-48 md:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-white shadow-soft-lg ring-2 ring-violet-200/60">
              <img
                src={IMAGES.profile}
                alt="Shirapti Nath"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="card-glass space-y-3 p-6 text-sm leading-relaxed text-muted md:p-7 md:text-base">
            <p className="text-ink">
              I&apos;m <strong>Shirapti Nath</strong> - a full-stack developer who builds products from
              database schema to deployed UI.
            </p>
            <p>
              My sweet spot is turning messy real-world problems into clean, fast web experiences -
              React frontends, Node.js APIs, MongoDB, and LLM-powered features that students and teams
              actually use.
            </p>
            <p>
              Right now I&apos;m focused on career-tech and AI systems:{' '}
              <strong className="text-accent">AI Career OS</strong>, a free platform for resume analysis,
              career path exploration, and interview prep.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
