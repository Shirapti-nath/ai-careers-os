import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RESUME_PDF } from '../data/content';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#academic', label: 'Education' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-violet-100 bg-white/80 shadow-sm backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-bold text-ink">
          shirapti<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-muted transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-1.5 text-sm font-semibold text-white shadow-soft transition hover:shadow-soft-lg"
            >
              Resume
            </a>
          </li>
        </ul>

        <button type="button" className="text-ink md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="border-t border-violet-100 bg-white/95 px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
