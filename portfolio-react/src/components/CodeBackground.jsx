import { useEffect, useRef } from 'react';

const SNIPPETS = [
  'fn analyze_resume(text: &str) -> Score {',
  '  let keywords = tfidf.extract(text);',
  '  return cosine_similarity(keywords, jd);',
  '}',
  'async function matchRole(path, resume) {',
  'const PATHS = paths.filter(p => p.match);',
  'if (ats >= 80) return "strong";',
  'SELECT role, salary FROM career_paths;',
  'class CareerGraph { bfs(path_id); }',
  'export const agent = new LangGraph();',
  'await llm.invoke({ prompt, tools });',
  'docker compose up -d api',
  'app.get("/api/resume", handler);',
  'model.fit(X_train, y_train);',
  'const score = await analyzeATS(resume);',
];

export default function CodeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const mouse = { x: -9999, y: -9999, active: false };
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0;
    let H = 0;
    let particles = [];
    let animId;

    const rand = (a, b) => a + Math.random() * (b - a);

    const seed = () => {
      particles = [];
      const count = Math.max(24, Math.floor((W * H) / 32000));
      for (let i = 0; i < count; i++) {
        particles.push({
          text: SNIPPETS[i % SNIPPETS.length],
          x: Math.random() * W,
          y: Math.random() * H,
          ox: Math.random() * Math.PI * 2,
          oy: Math.random() * Math.PI * 2,
          vx: rand(-0.12, 0.12),
          vy: rand(-0.12, 0.12),
          size: rand(10, 13),
          baseAlpha: rand(0.12, 0.22),
        });
      }
    };

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      seed();
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      const t = Date.now() * 0.001;
      const isDark = document.documentElement.classList.contains('dark');

      particles.forEach((p) => {
        p.vx += Math.sin(t * 0.4 + p.ox) * 0.004;
        p.vy += Math.cos(t * 0.35 + p.oy) * 0.004;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;
          const radius = 200;
          if (dist < radius) {
            const strength = Math.pow(1 - dist / radius, 2) * 2.8;
            p.vx += (dx / dist) * strength;
            p.vy += (dy / dist) * strength;
          }
        }

        p.vx *= 0.9;
        p.vy *= 0.9;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -320) p.x = W + 120;
        if (p.x > W + 320) p.x = -120;
        if (p.y < -40) p.y = H + 40;
        if (p.y > H + 40) p.y = -40;

        let alpha = p.baseAlpha;
        if (mouse.active) {
          const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (md < 150) alpha = Math.min(0.55, p.baseAlpha + (1 - md / 150) * 0.38);
        }

        const r = isDark ? 139 : 91;
        const g = isDark ? 92 : 33;
        const b = isDark ? 246 : 182;
        ctx.font = `${p.size}px "JetBrains Mono", ui-monospace, monospace`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillText(p.text, p.x, p.y);
      });

      if (mouse.active && !reduced) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 160);
        g.addColorStop(0, isDark ? 'rgba(219, 39, 119, 0.12)' : 'rgba(219, 39, 119, 0.1)');
        g.addColorStop(1, 'rgba(219, 39, 119, 0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      if (!reduced) animId = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };

    resize();
    tick();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-[5] opacity-90 dark:opacity-95"
      aria-hidden
    />
  );
}
