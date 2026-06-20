(function () {
  var canvas = document.getElementById('code-bg');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var mouse = { x: 0.5, y: 0.5 };
  var smooth = { x: 0.5, y: 0.5 };
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var SNIPPETS = [
    'struct Node { int val; Node* next; };',
    'fn analyze_resume(text: &str) -> Score {',
    '  let keywords = tfidf.extract(text);',
    '  return cosine_similarity(keywords, jd);',
    '}',
    'class CareerGraph {',
    '  bfs(path_id, skill_tree);',
    '}',
    'async fn parse_pdf(bytes: &[u8]) {',
    '  mammoth.extract_raw_text(doc)',
    '}',
    'const PATHS = paths.filter(p => p.match);',
    'score.sections.push("experience");',
    'if (ats >= 80) return "strong";',
    'template.render(resume_data);',
    'export function matchRole(path, resume) {',
    '  return semanticMatch(path.skills, resume);',
    '}',
    'while (node) { visit(node); node = node.next; }',
    'quicksort(arr, 0, arr.length - 1);',
    'SELECT role, salary FROM career_paths;',
    'impl ResumeAnalyzer for Engine {',
    '  fn run(&self) -> Report { ... }',
    '}',
  ];

  var layers = [
    { snippets: SNIPPETS.slice(0, 8), parallax: 0.015, opacity: 0.07, size: 11 },
    { snippets: SNIPPETS.slice(8, 16), parallax: 0.028, opacity: 0.11, size: 12 },
    { snippets: SNIPPETS.slice(0, 12), parallax: 0.045, opacity: 0.16, size: 13 },
  ];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    seedBlocks();
  }

  var blocks = [];

  function seedBlocks() {
    blocks = [];
    layers.forEach(function (layer, li) {
      layer.blocks = [];
      var count = Math.max(6, Math.floor(canvas.width / 220));
      for (var i = 0; i < count; i++) {
        layer.blocks.push({
          text: layer.snippets[i % layer.snippets.length],
          x: (i / count) * canvas.width + Math.random() * 80,
          y: Math.random() * canvas.height,
          li: li,
        });
      }
      blocks.push(layer);
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    smooth.x += (mouse.x - smooth.x) * 0.06;
    smooth.y += (mouse.y - smooth.y) * 0.06;

    var dx = (smooth.x - 0.5) * 2;
    var dy = (smooth.y - 0.5) * 2;

    blocks.forEach(function (layer) {
      ctx.font = layer.size + 'px "SF Mono", "Fira Code", "Courier New", monospace';
      ctx.fillStyle = 'rgba(60, 47, 47, ' + layer.opacity + ')';
      layer.blocks.forEach(function (b) {
        var ox = dx * layer.parallax * canvas.width;
        var oy = dy * layer.parallax * canvas.height;
        var x = ((b.x + ox) % (canvas.width + 400)) - 200;
        var y = ((b.y + oy) % (canvas.height + 200)) - 100;
        ctx.fillText(b.text, x, y);
      });
    });

    if (!prefersReduced) requestAnimationFrame(draw);
  }

  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX / window.innerWidth;
    mouse.y = e.clientY / window.innerHeight;
  });

  window.addEventListener('resize', resize);
  resize();
  if (prefersReduced) draw();
  else draw();
})();
