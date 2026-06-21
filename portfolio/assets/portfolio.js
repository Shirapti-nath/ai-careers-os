(function () {
  'use strict';

  var LIVE = 'https://shirapti-nath.github.io/ai-careers-os/';

  /* ── Terminal boot sequence ── */
  var bootLines = [
    { html: '<span class="dim">$ whoami</span>', delay: 350 },
    { html: '<span class="prompt">shirapti-nath</span> · Full Stack Developer', delay: 280 },
    { html: '<span class="dim">$ cat profile.json</span>', delay: 300 },
    { html: '{ <span class="dim">"focus"</span>: <span class="check">"full-stack"</span>,', delay: 200 },
    { html: '  <span class="dim">"education"</span>: <span class="check">"MSc DS &amp; AI · BITS Pilani"</span>,', delay: 180 },
    { html: '  <span class="dim">"achievement"</span>: <span class="check">"CS Gold Medalist"</span>,', delay: 180 },
    { html: '  <span class="dim">"hackathon"</span>: <span class="check">"Orchestrate #291/1547"</span> }', delay: 180 },
    { html: '<span class="dim">$ npm run deploy -- ai-career-os</span>', delay: 250 },
    { html: '<span class="arrow">▶</span> React 18 + Vite · Node.js + Express · MongoDB', delay: 200 },
    { html: '<span class="check">✔</span> ResumeAI · TechPath · 12 career roadmaps', delay: 180 },
    { html: '<span class="check">✔</span> Deployed → <span class="dim">' + LIVE + '</span>', delay: 200 },
    { html: '<span class="prompt">&gt;</span> Ready. Welcome to my portfolio.', delay: 350 }
  ];

  var termBody = document.getElementById('terminal-body');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function runBoot() {
    if (!termBody) return;
    termBody.innerHTML = '';
    var totalDelay = 0;

    bootLines.forEach(function (line, i) {
      totalDelay += line.delay;
      setTimeout(function () {
        var el = document.createElement('div');
        el.className = 'terminal-line';
        el.style.animationDelay = '0s';
        el.innerHTML = line.html;
        termBody.appendChild(el);
        termBody.scrollTop = termBody.scrollHeight;

        if (i === bootLines.length - 1) {
          var cursor = document.createElement('span');
          cursor.className = 'cursor-blink';
          el.appendChild(cursor);
        }
      }, reducedMotion ? 0 : totalDelay);
    });
  }

  /* ── Nav scroll state ── */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile nav toggle ── */
  var toggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ── Scroll reveal ── */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Active nav link on scroll ── */
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveNav() {
    var scrollY = window.scrollY + 100;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }
  window.addEventListener('scroll', setActiveNav, { passive: true });

  /* ── Smooth anchor offset for fixed nav ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = (nav ? nav.offsetHeight : 64) + 16;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  });

  runBoot();
})();
