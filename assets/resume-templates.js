/* Resume template engine — each layout has unique HTML structure & typography */
window.RESUME_TEMPLATES = {
  'student-campus': {
    id: 'student-campus', name: 'Campus Fresh', category: 'student',
    desc: 'Centered indigo header — built for internships and campus hiring.',
    ats: 96, layout: 'campus',
    order: ['summary', 'education', 'projects', 'experience', 'skills']
  },
  'student-sidebar': {
    id: 'student-sidebar', name: 'Portfolio Sidebar', category: 'student',
    desc: 'Purple sidebar rail with skills — perfect for CS portfolios.',
    ats: 93, layout: 'sidebar',
    order: ['education', 'projects', 'experience']
  },
  'student-projects': {
    id: 'student-projects', name: 'Project Spotlight', category: 'student',
    desc: 'Teal banner header with card-style project blocks.',
    ats: 91, layout: 'projects',
    order: ['summary', 'projects', 'education', 'experience', 'skills']
  },
  'pro-corporate': {
    id: 'pro-corporate', name: 'Corporate Standard', category: 'professional',
    desc: 'Navy section bars and uppercase name — recruiter-approved.',
    ats: 97, layout: 'corporate',
    order: ['summary', 'experience', 'education', 'projects', 'skills']
  },
  'pro-split': {
    id: 'pro-split', name: 'Modern Split', category: 'professional',
    desc: 'Oswald headline + sky-blue sidebar for 2–5 year pros.',
    ats: 94, layout: 'split',
    order: ['summary', 'experience', 'education', 'projects']
  },
  'pro-slate': {
    id: 'pro-slate', name: 'Clean Slate', category: 'professional',
    desc: 'Oversized name, whisper-thin section labels, max whitespace.',
    ats: 95, layout: 'slate',
    order: ['summary', 'experience', 'skills', 'education', 'projects']
  },
  'exec-dark': {
    id: 'exec-dark', name: 'Executive Dark', category: 'executive',
    desc: 'Playfair serif on black header with gold section rules.',
    ats: 92, layout: 'execdark',
    order: ['experience', 'education', 'skills', 'projects']
  },
  'exec-timeline': {
    id: 'exec-timeline', name: 'Senior Timeline', category: 'executive',
    desc: 'Monospace section labels with green timeline rail.',
    ats: 93, layout: 'timeline',
    order: ['summary', 'experience', 'skills', 'education', 'projects']
  },
  'exec-classic': {
    id: 'exec-classic', name: 'Distinguished Classic', category: 'executive',
    desc: 'Libre Baskerville serif — formal layout for director roles.',
    ats: 90, layout: 'classic',
    order: ['summary', 'experience', 'education', 'skills', 'projects']
  }
};

window.currentResumeTemplate = localStorage.getItem('aiCareerOS_template') || 'student-campus';

function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getResumeFormData() {
  function g(id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; }
  var contactParts = [g('b-email'), g('b-phone'), g('b-location'), g('b-linkedin'), g('b-github')].filter(Boolean);
  var bullets = g('b-bullets');
  var bulletsHTML = bullets
    ? bullets.split('\n').filter(function (b) { return b.trim(); }).map(function (b) {
        return '<div>• ' + esc(b.replace(/^•\s*/, '')) + '</div>';
      }).join('')
    : '';
  return {
    name: g('b-name') || 'Your Name',
    contact: contactParts.join(' | ') || 'your@email.com | City',
    summary: g('b-summary'),
    degree: g('b-degree'), inst: g('b-institution'), yr: g('b-grad-year'),
    cgpa: g('b-cgpa'), course: g('b-coursework'),
    jt: g('b-jobtitle'), comp: g('b-company'), start: g('b-start'), end: g('b-end'),
    bulletsHTML: bulletsHTML,
    p1: g('b-proj1'), p1s: g('b-proj1-stack'), p1d: g('b-proj1-desc'), p1l: g('b-proj1-link'),
    lang: g('b-lang'), fw: g('b-frameworks'), tools: g('b-tools'), certs: g('b-certs')
  };
}

/* ── Content blocks ── */
function eduBlock(d) {
  if (!d.degree) return '<div class="rt-muted">Add your education details above</div>';
  return '<div style="display:flex;justify-content:space-between;font-weight:700;">' + esc(d.degree) +
    '<span style="font-weight:500;color:#64748b;font-size:9.5px;">' + esc(d.yr) + '</span></div>' +
    '<div class="rt-muted">' + esc(d.inst) + (d.cgpa ? ' · CGPA ' + esc(d.cgpa) : '') + '</div>' +
    (d.course ? '<div class="rt-body" style="margin-top:3px;">' + esc(d.course) + '</div>' : '');
}

function expBlock(d, timeline) {
  if (!d.jt) return '<div class="rt-muted">Add your experience above</div>';
  var dates = d.start + (d.end ? ' – ' + d.end : '');
  var inner = '<div style="display:flex;justify-content:space-between;font-weight:700;">' + esc(d.jt) +
    '<span style="font-weight:500;color:#64748b;font-size:9.5px;">' + esc(dates) + '</span></div>' +
    '<div class="rt-muted" style="margin:2px 0 5px;">' + esc(d.comp) + '</div>' +
    '<div class="rt-body">' + d.bulletsHTML + '</div>';
  return timeline ? '<div class="rt-timeline-entry">' + inner + '</div>' : inner;
}

function projBlock(d, card, chips) {
  if (!d.p1) return '<div class="rt-muted">Add your projects above</div>';
  var chipsHTML = chips && d.p1s
    ? d.p1s.split(',').map(function (s) { return '<span class="rt-chip">' + esc(s.trim()) + '</span>'; }).join('')
    : '';
  var inner = '<div style="font-weight:700;font-size:11px;">' + esc(d.p1) + '</div>' +
    (chipsHTML ? '<div style="margin:6px 0 4px;">' + chipsHTML + '</div>' :
      (d.p1s ? '<div class="rt-muted" style="font-size:9px;margin:2px 0;">' + esc(d.p1s) + '</div>' : '')) +
    (d.p1d ? '<div class="rt-body">' + esc(d.p1d) + '</div>' : '') +
    (d.p1l ? '<div style="color:#0284c7;font-size:9px;margin-top:3px;">' + esc(d.p1l) + '</div>' : '');
  return card ? '<div class="rt-card">' + inner + '</div>' : inner;
}

function skillsBlock(d) {
  var html = '';
  if (d.lang) html += '<div><b>Languages</b> · ' + esc(d.lang) + '</div>';
  if (d.fw) html += '<div><b>Frameworks</b> · ' + esc(d.fw) + '</div>';
  if (d.tools) html += '<div><b>Tools</b> · ' + esc(d.tools) + '</div>';
  if (d.certs) html += '<div style="margin-top:4px;"><b>Certs</b> · ' + esc(d.certs.replace(/\n/g, ', ')) + '</div>';
  return html || '<div class="rt-muted">Add your skills above</div>';
}

function summaryBlock(d) {
  return d.summary
    ? '<p class="rt-body">' + esc(d.summary) + '</p>'
    : '<p class="rt-muted">Add a brief summary above</p>';
}

function section(h, body) {
  return '<div class="rt-sec"><div class="rt-sec-h">' + h + '</div>' + body + '</div>';
}

/* ── Per-template renderers ── */
function renderCampus(d, tpl) {
  var parts = {
    summary: section('Professional Summary', summaryBlock(d)),
    education: section('Education', eduBlock(d)),
    projects: section('Projects', projBlock(d, false, false)),
    experience: section('Experience', expBlock(d, false)),
    skills: section('Skills & Certifications', skillsBlock(d))
  };
  return '<div class="rt-t-campus">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-contact">' + esc(d.contact) + '</div>' +
    '<div class="rt-head-rule"></div>' +
    tpl.order.map(function (k) { return parts[k]; }).join('') +
    '</div>';
}

function renderSidebar(d) {
  return '<div class="rt-t-sidebar">' +
    '<div class="rt-rail">' +
      '<div class="rt-name">' + esc(d.name) + '</div>' +
      '<div class="rt-contact">' + esc(d.contact).replace(/\s*\|\s*/g, '<br>') + '</div>' +
      '<div class="rt-sec-h">Technical Skills</div>' +
      '<div class="rt-body">' + skillsBlock(d) + '</div>' +
      (d.summary ? '<div class="rt-sec-h">About</div><div class="rt-body">' + esc(d.summary) + '</div>' : '') +
    '</div>' +
    '<div class="rt-main">' +
      section('Education', eduBlock(d)) +
      section('Projects', projBlock(d, true, true)) +
      section('Experience', expBlock(d, false)) +
    '</div></div>';
}

function renderProjects(d, tpl) {
  var parts = {
    summary: section('About Me', summaryBlock(d)),
    projects: section('Featured Projects', projBlock(d, true, true)),
    education: section('Education', eduBlock(d)),
    experience: section('Experience', expBlock(d, false)),
    skills: section('Skills', skillsBlock(d))
  };
  return '<div class="rt-t-projects">' +
    '<div class="rt-banner"><div class="rt-name">' + esc(d.name) + '</div><div class="rt-contact">' + esc(d.contact) + '</div></div>' +
    '<div class="rt-inner">' + tpl.order.map(function (k) { return parts[k]; }).join('') + '</div></div>';
}

function renderCorporate(d, tpl) {
  var parts = {
    summary: section('Executive Summary', summaryBlock(d)),
    experience: section('Professional Experience', expBlock(d, false)),
    education: section('Education', eduBlock(d)),
    projects: section('Key Projects', projBlock(d, false, false)),
    skills: section('Core Competencies', skillsBlock(d))
  };
  return '<div class="rt-t-corporate">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-contact">' + esc(d.contact) + '</div>' +
    '<div class="rt-rule"></div>' +
    tpl.order.map(function (k) { return parts[k]; }).join('') +
    '</div>';
}

function renderSplit(d) {
  return '<div class="rt-t-split">' +
    '<div class="rt-rail">' +
      '<div class="rt-name">' + esc(d.name) + '</div>' +
      '<div class="rt-contact">' + esc(d.contact).replace(/\s*\|\s*/g, '<br>') + '</div>' +
      '<div class="rt-sec-h">Core Skills</div><div class="rt-body">' + skillsBlock(d) + '</div>' +
    '</div>' +
    '<div class="rt-main">' +
      (d.summary ? section('Profile', summaryBlock(d)) : '') +
      section('Experience', expBlock(d, false)) +
      section('Education', eduBlock(d)) +
      section('Projects', projBlock(d, false, false)) +
    '</div></div>';
}

function renderSlate(d, tpl) {
  var parts = {
    summary: section('Summary', summaryBlock(d)),
    experience: section('Experience', expBlock(d, false)),
    skills: section('Skills', skillsBlock(d)),
    education: section('Education', eduBlock(d)),
    projects: section('Projects', projBlock(d, false, false))
  };
  return '<div class="rt-t-slate">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-contact">' + esc(d.contact) + '</div>' +
    tpl.order.map(function (k) { return parts[k]; }).join('') +
    '</div>';
}

function renderExecDark(d, tpl) {
  var parts = {
    experience: section('Leadership Experience', expBlock(d, false)),
    education: section('Education', eduBlock(d)),
    skills: section('Expertise', skillsBlock(d)),
    projects: section('Strategic Initiatives', projBlock(d, false, false))
  };
  return '<div class="rt-t-execdark">' +
    '<div class="rt-head">' +
      '<div class="rt-name">' + esc(d.name) + '</div>' +
      '<div class="rt-contact">' + esc(d.contact) + '</div>' +
      (d.summary ? '<div class="rt-tagline">' + esc(d.summary) + '</div>' : '') +
    '</div>' +
    '<div class="rt-inner">' + tpl.order.map(function (k) { return parts[k]; }).join('') + '</div></div>';
}

function renderTimeline(d, tpl) {
  var parts = {
    summary: section('// profile', summaryBlock(d)),
    experience: section('// career', expBlock(d, true)),
    skills: section('// expertise', skillsBlock(d)),
    education: section('// education', eduBlock(d)),
    projects: section('// projects', projBlock(d, false, false))
  };
  return '<div class="rt-t-timeline">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-contact">' + esc(d.contact) + '</div>' +
    tpl.order.map(function (k) { return parts[k]; }).join('') +
    '</div>';
}

function renderClassic(d, tpl) {
  var parts = {
    summary: section('Professional Summary', summaryBlock(d)),
    experience: section('Professional Experience', expBlock(d, false)),
    education: section('Education', eduBlock(d)),
    skills: section('Areas of Expertise', skillsBlock(d)),
    projects: section('Notable Projects', projBlock(d, false, false))
  };
  return '<div class="rt-t-classic">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-contact">' + esc(d.contact) + '</div>' +
    '<div class="rt-ornament">— ✦ —</div>' +
    tpl.order.map(function (k) { return parts[k]; }).join('') +
    '</div>';
}

var RENDERERS = {
  campus: renderCampus,
  sidebar: renderSidebar,
  projects: renderProjects,
  corporate: renderCorporate,
  split: renderSplit,
  slate: renderSlate,
  execdark: renderExecDark,
  timeline: renderTimeline,
  classic: renderClassic
};

function renderResumeHTML(data, templateId) {
  var tpl = RESUME_TEMPLATES[templateId] || RESUME_TEMPLATES['student-campus'];
  var fn = RENDERERS[tpl.layout];
  return fn ? fn(data, tpl) : renderCampus(data, tpl);
}

function applyResumeTemplate(id) {
  if (!RESUME_TEMPLATES[id]) return;
  currentResumeTemplate = id;
  localStorage.setItem('aiCareerOS_template', id);
  var tpl = RESUME_TEMPLATES[id];
  var title = document.getElementById('builder-title');
  if (title) title.textContent = 'Resume Builder · ' + tpl.name;
  if (typeof syncBuilderTemplateTitle === 'function') syncBuilderTemplateTitle();
  if (typeof updatePreview === 'function') updatePreview();
  notify('✅', tpl.name + ' template applied');
  showPage('builder');
}

function filterTemplates(btn, cat) {
  document.querySelectorAll('#page-templates .tab-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('#templates-grid .tpl-card').forEach(function (card) {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}

function miniPreviewHTML(tpl) {
  var previews = {
    campus: '<div style="padding:14px;text-align:center;height:100%"><div style="font-size:11px;font-weight:800;color:#4f46e5;margin-bottom:4px">NAME</div><div style="height:3px;background:linear-gradient(90deg,#4f46e5,#818cf8);margin:8px 20px 12px"></div><div style="font-size:7px;color:#4f46e5;text-align:left;letter-spacing:.1em;margin-bottom:4px">EDUCATION</div><div style="height:2px;background:#e2e8f0;width:85%"></div></div>',
    sidebar: '<div style="display:flex;height:100%"><div style="width:38%;background:linear-gradient(180deg,#6d28d9,#4c1d95)"></div><div style="flex:1;padding:12px"><div style="width:6px;height:6px;border-radius:50%;background:#6d28d9;display:inline-block;margin-right:4px"></div><span style="font-size:8px;font-weight:800;color:#6d28d9">Education</span><div style="height:2px;background:#e2e8f0;margin-top:6px;width:90%"></div></div></div>',
    projects: '<div style="height:100%"><div style="background:linear-gradient(120deg,#0e7490,#06b6d4);height:55px"></div><div style="padding:10px"><div style="background:#f0fdfa;border:1px solid #99f6e4;border-radius:6px;height:28px;margin-bottom:6px"></div><div style="font-size:7px;color:#0e7490;font-weight:800">PROJECTS</div></div></div>',
    corporate: '<div style="padding:12px"><div style="font-size:10px;font-weight:800;text-transform:uppercase;color:#0f172a">Name</div><div style="height:3px;background:#0f172a;margin:6px 0 10px"></div><div style="background:#0f172a;color:#fff;font-size:6px;padding:3px 6px;display:inline-block;margin-bottom:6px">EXPERIENCE</div><div style="height:2px;background:#e2e8f0;width:88%"></div></div>',
    split: '<div style="display:flex;height:100%"><div style="width:40%;background:#0284c7"></div><div style="flex:1;padding:10px;border-left:4px solid #0284c7;margin-left:0"><div style="font-size:8px;font-weight:700;color:#0284c7;text-transform:uppercase">Experience</div></div></div>',
    slate: '<div style="padding:16px"><div style="font-size:16px;font-weight:800;color:#111827;letter-spacing:-.03em">Name</div><div style="font-size:6px;letter-spacing:.2em;color:#9ca3af;margin:10px 0 8px">EXPERIENCE</div><div style="height:2px;background:#f3f4f6;width:80%"></div></div>',
    execdark: '<div style="height:100%"><div style="background:#0c0a09;height:65px"></div><div style="padding:10px"><div style="font-size:7px;color:#78716c;border-bottom:3px solid #f59e0b;display:inline-block;padding-bottom:2px">EXPERIENCE</div></div></div>',
    timeline: '<div style="padding:12px"><div style="font-size:10px;font-weight:800;color:#064e3b">Name</div><div style="border-left:4px solid #34d399;padding-left:8px;margin-top:10px"><div style="font-family:monospace;font-size:7px;color:#059669">// career</div><div style="height:2px;background:#e2e8f0;width:80%;margin-top:4px"></div></div></div>',
    classic: '<div style="padding:14px;text-align:center;font-family:Georgia,serif;height:100%"><div style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Name</div><div style="color:#a8a29e;font-size:10px;margin:6px 0">— ✦ —</div><div style="font-size:8px;color:#44403c">◆ Experience</div></div>'
  };
  return previews[tpl.layout] || previews.campus;
}

function initTemplatesPage() {
  var grid = document.getElementById('templates-grid');
  if (!grid || grid.dataset.init) return;
  grid.dataset.init = '1';
  grid.innerHTML = '';
  var badgeClass = { student: 'tpl-badge-student', professional: 'tpl-badge-professional', executive: 'tpl-badge-executive' };
  var badgeLabel = { student: 'Student', professional: 'Professional', executive: 'Experienced' };
  Object.keys(RESUME_TEMPLATES).forEach(function (id) {
    var tpl = RESUME_TEMPLATES[id];
    var card = document.createElement('div');
    card.className = 'tpl-card';
    card.dataset.cat = tpl.category;
    card.innerHTML =
      '<div class="tpl-preview">' + miniPreviewHTML(tpl) + '</div>' +
      '<div class="tpl-meta">' +
        '<div class="tpl-row"><div class="tpl-name">' + tpl.name + '</div>' +
        '<span class="tpl-badge ' + badgeClass[tpl.category] + '">' + badgeLabel[tpl.category] + '</span></div>' +
        '<div class="tpl-desc">' + tpl.desc + '</div>' +
        '<div class="tpl-row"><span class="tpl-ats">' + tpl.ats + '% ATS</span>' +
        '<button type="button" class="btn-primary" style="font-size:11px;padding:6px 12px;">Use template</button></div>' +
      '</div>';
    card.querySelector('button').addEventListener('click', function (e) { e.stopPropagation(); applyResumeTemplate(id); });
    card.addEventListener('click', function () { applyResumeTemplate(id); });
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function () { initTemplatesPage(); });
