(function () {
  var canvas = document.getElementById('code-bg');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var W = 0;
  var H = 0;
  var mouse = { x: -9999, y: -9999, active: false };
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var SNIPPETS = [
    'fn analyze_resume(text: &str) -> Score {',
    '  let keywords = tfidf.extract(text);',
    '  return cosine_similarity(keywords, jd);',
    '}',
    'struct Node { int val; Node* next; };',
    'class CareerGraph { bfs(path_id); }',
    'async fn parse_pdf(bytes: &[u8]) {',
    'const PATHS = paths.filter(p => p.match);',
    'if (ats >= 80) return "strong";',
    'export function matchRole(path, resume) {',
    'while (node) { visit(node); node = node.next; }',
    'SELECT role, salary FROM career_paths;',
    'impl ResumeAnalyzer for Engine {',
    'template.render(resume_data);',
    'quicksort(arr, 0, arr.length - 1);',
    'score.sections.push("experience");',
    'mammoth.extract_raw_text(doc)',
  ];

  var particles = [];

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    seed();
  }

  function seed() {
    particles = [];
    var count = Math.max(28, Math.floor((W * H) / 28000));
    for (var i = 0; i < count; i++) {
      particles.push({
        text: SNIPPETS[i % SNIPPETS.length],
        x: Math.random() * W,
        y: Math.random() * H,
        ox: Math.random() * Math.PI * 2,
        oy: Math.random() * Math.PI * 2,
        vx: rand(-0.15, 0.15),
        vy: rand(-0.15, 0.15),
        size: rand(10, 14),
        baseAlpha: rand(0.05, 0.12),
      });
    }
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    var t = Date.now() * 0.001;

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      // Gentle ambient float
      p.vx += Math.sin(t * 0.4 + p.ox) * 0.004;
      p.vy += Math.cos(t * 0.35 + p.oy) * 0.004;

      // Antigravity — repel from cursor
      if (mouse.active) {
        var dx = p.x - mouse.x;
        var dy = p.y - mouse.y;
        var dist = Math.hypot(dx, dy) || 1;
        var radius = 220;
        if (dist < radius) {
          var strength = Math.pow(1 - dist / radius, 2) * 3.2;
          p.vx += (dx / dist) * strength;
          p.vy += (dy / dist) * strength;
        }
      }

      p.vx *= 0.9;
      p.vy *= 0.9;
      p.x += p.vx;
      p.y += p.vy;

      // Soft wrap
      if (p.x < -320) p.x = W + 120;
      if (p.x > W + 320) p.x = -120;
      if (p.y < -40) p.y = H + 40;
      if (p.y > H + 40) p.y = -40;

      var alpha = p.baseAlpha;
      if (mouse.active) {
        var md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (md < 160) alpha = Math.min(0.42, p.baseAlpha + (1 - md / 160) * 0.32);
      }

      ctx.font = p.size + 'px "SF Mono", "Fira Code", "Courier New", monospace';
      ctx.fillStyle = 'rgba(60, 47, 47, ' + alpha + ')';
      ctx.fillText(p.text, p.x, p.y);
    }

    // Cursor spotlight
    if (mouse.active && !prefersReduced) {
      var g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
      g.addColorStop(0, 'rgba(212, 82, 10, 0.07)');
      g.addColorStop(1, 'rgba(212, 82, 10, 0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    if (!prefersReduced) requestAnimationFrame(tick);
  }

  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', function () {
    mouse.active = false;
  });

  window.addEventListener('resize', resize);
  resize();
  tick();
})();
