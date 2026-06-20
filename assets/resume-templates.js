/* 8 reference resume templates — exact layout styles from user samples */
window.RESUME_TEMPLATES = {
  'navy-pro': {
    id: 'navy-pro', name: 'Navy Professional', category: 'student',
    desc: 'Left-aligned navy header with blue section underlines — tech resume style.',
    ats: 97, layout: 'navy'
  },
  'dev-centered': {
    id: 'dev-centered', name: 'Developer Centered', category: 'student',
    desc: 'Centered blue name, tagline, and linked contact row.',
    ats: 96, layout: 'devcenter'
  },
  'academic-serif': {
    id: 'academic-serif', name: 'Academic Classic', category: 'student',
    desc: 'Times New Roman academic layout with italic dates and rules.',
    ats: 98, layout: 'academic'
  },
  'sky-center': {
    id: 'sky-center', name: 'Sky Blue Center', category: 'student',
    desc: 'Centered header with sky-blue section titles and icon contacts.',
    ats: 95, layout: 'sky'
  },
  'pm-sidebar': {
    id: 'pm-sidebar', name: 'Manager Sidebar', category: 'professional',
    desc: 'Pale blue sidebar, rounded navy name block, skill dot ratings.',
    ats: 94, layout: 'jane'
  },
  'purple-label': {
    id: 'purple-label', name: 'Purple Label', category: 'professional',
    desc: 'Purple label column with serif body — formal two-column sections.',
    ats: 93, layout: 'purple'
  },
  'hybrid-serif': {
    id: 'hybrid-serif', name: 'Serif Header Pro', category: 'professional',
    desc: 'Serif centered name, sans-serif body, experience skills line.',
    ats: 96, layout: 'hybrid'
  },
  'exec-split': {
    id: 'exec-split', name: 'Executive Split', category: 'executive',
    desc: 'Two-column executive layout with achievements sidebar.',
    ats: 92, layout: 'brad'
  }
};

var LEGACY_TEMPLATE_MAP = {
  'student-campus': 'navy-pro', 'student-sidebar': 'pm-sidebar', 'student-projects': 'sky-center',
  'pro-corporate': 'navy-pro', 'pro-split': 'pm-sidebar', 'pro-slate': 'hybrid-serif',
  'exec-dark': 'exec-split', 'exec-timeline': 'exec-split', 'exec-classic': 'academic-serif'
};

(function initTemplateId() {
  var saved = localStorage.getItem('aiCareerOS_template') || 'navy-pro';
  if (LEGACY_TEMPLATE_MAP[saved]) saved = LEGACY_TEMPLATE_MAP[saved];
  if (!RESUME_TEMPLATES[saved]) saved = 'navy-pro';
  window.currentResumeTemplate = saved;
})();

function esc(s) {
  if (!s) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function g(id) {
  var el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

function getResumeFormData() {
  var email = g('b-email'), phone = g('b-phone'), loc = g('b-location');
  var li = g('b-linkedin'), gh = g('b-github');
  var contactParts = [phone, email, li, gh, loc].filter(Boolean);
  var bullets = g('b-bullets');
  var bulletLines = bullets ? bullets.split('\n').filter(function (b) { return b.trim(); }) : [];
  var bulletsHTML = bulletLines.map(function (b) {
    return '<li>' + esc(b.replace(/^•\s*/, '')) + '</li>';
  }).join('');
  var bulletsDiv = bulletLines.map(function (b) {
    return '<div>• ' + esc(b.replace(/^•\s*/, '')) + '</div>';
  }).join('');

  return {
    name: g('b-name') || 'Your Name',
    email: email || 'you@email.com',
    phone: phone || '',
    location: loc || 'City',
    linkedin: li || '',
    github: gh || '',
    contact: contactParts.join(' | ') || 'your@email.com | City',
    summary: g('b-summary'),
    tagline: g('b-summary') ? g('b-summary').split(/[.!?\n]/)[0] : 'Your professional title · Add summary above',
    degree: g('b-degree'), inst: g('b-institution'), yr: g('b-grad-year'),
    cgpa: g('b-cgpa'), course: g('b-coursework'),
    jt: g('b-jobtitle'), comp: g('b-company'), start: g('b-start'), end: g('b-end'),
    dates: g('b-start') + (g('b-end') ? ' – ' + g('b-end') : ''),
    bulletsHTML: bulletsDiv,
    bulletsUL: bulletsHTML ? '<ul class="rt-ul">' + bulletsHTML + '</ul>' : '',
    p1: g('b-proj1'), p1s: g('b-proj1-stack'), p1d: g('b-proj1-desc'), p1l: g('b-proj1-link'),
    lang: g('b-lang'), fw: g('b-frameworks'), tools: g('b-tools'), certs: g('b-certs')
  };
}

function secBlue(title, body) {
  return '<div class="rt-sec"><div class="rt-sec-h">' + title + '</div><div class="rt-sec-line"></div><div class="rt-sec-body">' + body + '</div></div>';
}

function skillsLines(d, labels) {
  labels = labels || { lang: 'Languages & Frameworks', fw: 'Frameworks', tools: 'Tools & Platforms', certs: 'Certifications' };
  var h = '';
  if (d.lang) h += '<div class="rt-skills-line"><b>' + labels.lang + ':</b> ' + esc(d.lang) + '</div>';
  if (d.fw) h += '<div class="rt-skills-line"><b>' + labels.fw + ':</b> ' + esc(d.fw) + '</div>';
  if (d.tools) h += '<div class="rt-skills-line"><b>' + labels.tools + ':</b> ' + esc(d.tools) + '</div>';
  if (d.certs) h += '<div class="rt-skills-line"><b>' + labels.certs + ':</b> ' + esc(d.certs.replace(/\n/g, ', ')) + '</div>';
  return h || '<div class="rt-muted">Add your skills above</div>';
}

function skillsBullets(d) {
  var items = [];
  if (d.lang) items.push('<b>Languages:</b> ' + esc(d.lang));
  if (d.fw) items.push('<b>Frameworks:</b> ' + esc(d.fw));
  if (d.tools) items.push('<b>Tools:</b> ' + esc(d.tools));
  if (d.certs) items.push('<b>Certifications:</b> ' + esc(d.certs.replace(/\n/g, ', ')));
  if (!items.length) return '<div class="rt-muted">Add your skills above</div>';
  return '<ul class="rt-ul">' + items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
}

function dots(n) {
  n = Math.min(5, Math.max(1, n));
  var h = '<div class="rt-dots">';
  for (var i = 1; i <= 5; i++) h += '<span class="rt-dot' + (i <= n ? ' on' : '') + '"></span>';
  return h + '</div>';
}

/* ── 1. Navy Professional ── */
function renderNavy(d) {
  var edu = d.degree
    ? '<div class="rt-row"><span class="rt-bold">' + esc(d.degree) + '</span><span class="rt-r">' + esc(d.yr) + '</span></div>' +
      '<div>' + esc(d.inst) + (d.cgpa ? ' | CGPA: ' + esc(d.cgpa) : '') + '</div>' +
      (d.course ? '<div class="rt-body">' + esc(d.course) + '</div>' : '')
    : '<div class="rt-muted">Add your education above</div>';

  var exp = d.jt
    ? '<div class="rt-row"><span class="rt-bold">' + esc(d.comp) + '</span><span class="rt-r">' + esc(d.dates) + '</span></div>' +
      '<div class="rt-bold">' + esc(d.jt) + '</div>' + d.bulletsUL
    : '<div class="rt-muted">Add your experience above</div>';

  var proj = d.p1
    ? '<div class="rt-bold">' + esc(d.p1) + '</div>' +
      (d.p1s ? '<div class="rt-body"><b>Tech Stack:</b> ' + esc(d.p1s) + '</div>' : '') +
      (d.p1d ? '<div class="rt-body">' + esc(d.p1d) + '</div>' : '') +
      (d.p1l ? '<div style="font-size:9px;color:#2563eb;">' + esc(d.p1l) + '</div>' : '')
    : '<div class="rt-muted">Add your projects above</div>';

  return '<div class="rt-navy">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-tagline">' + esc(d.tagline) + '</div>' +
    '<div class="rt-contact">' + esc(d.contact) + '</div>' +
    '<div class="rt-head-line"></div>' +
    secBlue('Professional Summary', d.summary ? '<p class="rt-body">' + esc(d.summary) + '</p>' : '<p class="rt-muted">Add a brief summary above</p>') +
    secBlue('Technical Skills', skillsLines(d)) +
    secBlue('Professional Experience', exp) +
    secBlue('Projects', proj) +
    secBlue('Education', edu) +
    secBlue('Achievements', d.certs ? '<ul class="rt-ul"><li>' + esc(d.certs.replace(/\n/g, '</li><li>')) + '</li></ul>' : '<div class="rt-muted">Add certifications or achievements above</div>') +
    '</div>';
}

/* ── 2. Developer Centered ── */
function renderDevCenter(d) {
  var contact = [
    d.phone, d.email,
    d.linkedin ? '<a href="#">' + esc(d.linkedin) + '</a>' : '',
    d.github ? '<a href="#">' + esc(d.github) + '</a>' : ''
  ].filter(Boolean).join(' | ');

  var proj = d.p1
    ? '<div class="rt-proj-head"><span class="rt-title">' + esc(d.p1) + '</span>' +
      (d.p1l ? '<span style="font-size:9px;color:#2563eb;">GitHub ↗</span>' : '') + '</div>' +
      (d.p1s ? '<div class="rt-stack">Tech Stack: ' + esc(d.p1s) + '</div>' : '') +
      (d.p1d ? d.bulletsUL || '<p class="rt-body">' + esc(d.p1d) + '</p>' : '')
    : '<div class="rt-muted">Add your projects above</div>';

  return '<div class="rt-devcenter">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-tagline">' + esc(d.tagline) + '</div>' +
    '<div class="rt-contact">' + contact + '</div>' +
    secBlue('Professional Summary', d.summary ? '<p class="rt-body">' + esc(d.summary) + '</p>' : '<p class="rt-muted">Add summary above</p>') +
    secBlue('Technical Skills', skillsLines(d, { lang: 'Frontend', fw: 'Backend', tools: 'Database', certs: 'Tools' })) +
    secBlue('Projects', proj) +
    secBlue('Education', d.degree
      ? '<div class="rt-row"><span class="rt-bold">' + esc(d.degree) + '</span><span class="rt-r">' + esc(d.yr) + '</span></div><div>' + esc(d.inst) + (d.cgpa ? ' | ' + esc(d.cgpa) : '') + '</div>'
      : '<div class="rt-muted">Add education above</div>') +
    secBlue('Achievements', d.certs ? '<ul class="rt-ul"><li>' + esc(d.certs.replace(/\n/g, '</li><li>')) + '</li></ul>' : '<div class="rt-muted">Add achievements above</div>') +
    secBlue('Core Competencies', '<div class="rt-body" style="text-align:center;font-size:9.5px;color:#64748b;">' +
      [d.lang, d.fw, d.tools].filter(Boolean).join(' · ') + '</div>') +
    '</div>';
}

/* ── 3. Executive Split (Brad) ── */
function renderBrad(d) {
  var exp = d.jt
    ? '<div class="rt-entry"><div class="rt-job">' + esc(d.jt) + '</div><div class="rt-co">' + esc(d.comp) + '</div>' +
      '<div class="rt-meta">📅 ' + esc(d.dates) + (d.location ? ' · 📍 ' + esc(d.location) : '') + '</div>' + d.bulletsUL + '</div>'
    : '<div class="rt-muted">Add your experience above</div>';

  var skills = [d.lang, d.fw, d.tools, d.certs.replace(/\n/g, ', ')].filter(Boolean).join(', ') || 'Add skills above';

  return '<div class="rt-brad">' +
    '<div class="rt-top">' +
      '<div class="rt-name">' + esc(d.name) + '</div>' +
      '<div class="rt-tagline">' + esc(d.tagline) + '</div>' +
      '<div class="rt-contact">' +
        (d.phone ? '<span>📞 ' + esc(d.phone) + '</span>' : '') +
        (d.email ? '<span>✉ ' + esc(d.email) + '</span>' : '') +
        (d.linkedin ? '<span>🔗 ' + esc(d.linkedin) + '</span>' : '') +
        (d.location ? '<span>📍 ' + esc(d.location) + '</span>' : '') +
      '</div></div>' +
    '<div class="rt-grid"><div class="rt-left">' +
      '<div class="rt-sec-h">Summary</div><p class="rt-body">' + (d.summary ? esc(d.summary) : 'Add summary above') + '</p>' +
      '<div class="rt-sec-h">Experience</div>' + exp +
    '</div><div class="rt-right">' +
      '<div class="rt-sec-h">Key Achievements</div>' +
      (d.p1 ? '<div class="rt-ach-title">' + esc(d.p1) + '</div><div class="rt-ach-desc">' + esc(d.p1d || d.p1s) + '</div>' : '<div class="rt-muted">Add project highlights</div>') +
      (d.certs ? '<div class="rt-ach-title">Certifications</div><div class="rt-ach-desc">' + esc(d.certs.replace(/\n/g, ' · ')) + '</div>' : '') +
      '<div class="rt-sec-h">Skills</div><div class="rt-skills-list">' + esc(skills) + '</div>' +
      '<div class="rt-sec-h">Education</div>' +
      (d.degree ? '<div class="rt-bold">' + esc(d.degree) + '</div><div class="rt-co">' + esc(d.inst) + '</div><div class="rt-meta">' + esc(d.yr) + '</div>' : '<div class="rt-muted">Add education</div>') +
      (d.course ? '<div class="rt-sec-h">Training / Courses</div><div class="rt-ach-desc">' + esc(d.course) + '</div>' : '') +
    '</div></div></div>';
}

/* ── 4. Sky Center ── */
function renderSky(d) {
  return '<div class="rt-sky">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-sub">' + esc(d.degree || 'Your Degree') + ' | ' + esc(d.inst || 'University') + '</div>' +
    '<div class="rt-icons">' +
      (d.email ? '✉ ' + esc(d.email) + ' &nbsp; ' : '') +
      (d.phone ? '📞 ' + esc(d.phone) + ' &nbsp; ' : '') +
      (d.location ? '📍 ' + esc(d.location) + ' &nbsp; ' : '') +
      (d.linkedin ? '🔗 LinkedIn' : '') +
    '</div>' +
    secBlue('Work Experience', d.jt
      ? '<div class="rt-co">' + esc(d.comp) + '</div><div class="rt-row"><span>' + esc(d.jt) + '</span><span class="rt-r">' + esc(d.dates) + '</span></div>' + d.bulletsUL
      : '<div class="rt-muted">Add experience above</div>') +
    secBlue('Education', d.degree
      ? '<div class="rt-co">' + esc(d.inst) + '</div><div class="rt-row"><span>' + esc(d.degree) + (d.cgpa ? ' | ' + esc(d.cgpa) : '') + '</span><span class="rt-r">' + esc(d.yr) + '</span></div>'
      : '<div class="rt-muted">Add education above</div>') +
    secBlue('Project', d.p1
      ? '<div class="rt-row"><span class="rt-co">' + esc(d.p1) + ' ↗</span><span class="rt-r">' + esc(d.yr) + '</span></div>' +
        (d.p1s ? '<div class="rt-body"><b>' + esc(d.p1s.split(',')[0]) + '</b> — ' + esc(d.p1d || d.p1s) + '</div>' : '')
      : '<div class="rt-muted">Add projects above</div>') +
    secBlue('Skills', skillsBullets(d)) +
    secBlue('Achievement', d.certs ? '<ul class="rt-ul"><li>' + esc(d.certs.replace(/\n/g, '</li><li>')) + '</li></ul>' : '<div class="rt-muted">Add achievements above</div>') +
    '</div>';
}

/* ── 5. PM Sidebar (Jane) ── */
function renderJane(d) {
  var skillRows = [];
  if (d.tools) d.tools.split(',').slice(0, 5).forEach(function (s, i) {
    skillRows.push('<div class="rt-skill-row"><span>' + esc(s.trim()) + '</span>' + dots(4 - (i % 2)) + '</div>');
  });
  if (!skillRows.length) skillRows.push('<div class="rt-muted">Add tools above</div>');

  return '<div class="rt-jane">' +
    '<div class="rt-side">' +
      '<div class="rt-name-block"><div class="rt-name">' + esc(d.name.split(' ')[0] || d.name) + '<br>' + esc(d.name.split(' ').slice(1).join(' ') || '') + '</div></div>' +
      '<div class="rt-side-sec"><div class="rt-side-h">Personal details</div>' +
        (d.email ? '<div class="rt-detail"><span class="rt-detail-ico">✉</span><span>' + esc(d.email) + '</span></div>' : '') +
        (d.phone ? '<div class="rt-detail"><span class="rt-detail-ico">☎</span><span>' + esc(d.phone) + '</span></div>' : '') +
        (d.location ? '<div class="rt-detail"><span class="rt-detail-ico">⌂</span><span>' + esc(d.location) + '</span></div>' : '') +
      '</div>' +
      '<div class="rt-side-sec"><div class="rt-side-h">Hard Skills</div>' + skillRows.join('') + '</div>' +
    '</div>' +
    '<div class="rt-main">' +
      '<div class="rt-main-h">Summary</div><p class="rt-body">' + (d.summary ? esc(d.summary) : 'Add summary above') + '</p>' +
      '<div class="rt-main-h">Work Experience</div>' +
      (d.jt ? '<div class="rt-job-row"><span>' + esc(d.jt) + '</span><span>' + esc(d.dates) + '</span></div><div class="rt-co">' + esc(d.comp) + ', ' + esc(d.location) + '</div>' + d.bulletsUL : '<div class="rt-muted">Add experience</div>') +
      '<div class="rt-main-h">Education</div>' +
      (d.degree ? '<div class="rt-job-row"><span>' + esc(d.degree) + '</span><span>' + esc(d.yr) + '</span></div><div class="rt-co">' + esc(d.inst) + '</div>' : '<div class="rt-muted">Add education</div>') +
      '<div class="rt-main-h">Soft Skills</div>' +
      '<div class="rt-skill-row"><span>Leadership</span>' + dots(5) + '</div>' +
      '<div class="rt-skill-row"><span>Communication</span>' + dots(4) + '</div>' +
    '</div></div>';
}

/* ── 6. Purple Label ── */
function renderPurple(d) {
  var skillItems = [d.lang, d.fw, d.tools, d.certs.replace(/\n/g, ', ')].filter(Boolean);
  while (skillItems.length < 8) skillItems.push('');
  return '<div class="rt-purple">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-role">' + esc(d.jt || d.tagline) + '</div>' +
    '<div class="rt-contact-bar"><div class="rt-lbl">Contact</div><div class="rt-contact-cols">' +
      (d.phone ? '<div><b>Phone</b>' + esc(d.phone) + '</div>' : '<div><b>Phone</b>—</div>') +
      (d.email ? '<div><b>Email</b>' + esc(d.email) + '</div>' : '<div><b>Email</b>—</div>') +
      '<div><b>Address</b>' + esc(d.location) + '</div>' +
      (d.linkedin ? '<div><b>LinkedIn</b>' + esc(d.linkedin) + '</div>' : '<div><b>LinkedIn</b>—</div>') +
    '</div></div>' +
    '<div class="rt-row-sec"><div class="rt-lbl">Profile</div><div class="rt-body">' + (d.summary ? esc(d.summary) : 'Add summary above') + '</div></div>' +
    '<div class="rt-row-sec"><div class="rt-lbl">Employment History</div><div>' +
      (d.jt ? '<div><b>' + esc(d.jt) + ' | ' + esc(d.comp) + ', ' + esc(d.location) + '</b></div><div style="font-size:10px;margin:2px 0 6px;">' + esc(d.dates) + '</div>' + d.bulletsUL : '<div class="rt-muted">Add experience above</div>') +
    '</div></div>' +
    (d.certs ? '<div class="rt-row-sec"><div class="rt-lbl">Courses</div><div><b>' + esc(d.certs.split('\n')[0]) + '</b><br><span style="font-size:10px;">' + esc(d.inst) + '</span></div></div>' : '') +
    '<div class="rt-row-sec"><div class="rt-lbl">Education</div><div>' +
      (d.degree ? '<div><b>' + esc(d.degree) + '</b></div><div style="font-size:10px;">' + esc(d.inst) + ' · ' + esc(d.yr) + '</div>' : '<div class="rt-muted">Add education</div>') +
    '</div></div>' +
    '<div class="rt-row-sec"><div class="rt-lbl">Skills</div><div class="rt-skills-grid">' +
      skillItems.slice(0, 8).map(function (s) { return '<div>' + esc(s) + '</div>'; }).join('') +
    '</div></div>' +
    '<div class="rt-row-sec"><div class="rt-lbl">Languages</div><div>English | Hindi</div></div>' +
    '</div>';
}

/* ── 7. Academic Serif ── */
function renderAcademic(d) {
  return '<div class="rt-academic">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-contact">' + esc(d.location) + ' · ' + esc(d.phone) + ' · ' + esc(d.email) +
      (d.linkedin ? ' · ' + esc(d.linkedin) : '') + (d.github ? ' · ' + esc(d.github) : '') + '</div>' +
    '<div class="rt-sec-h">Education</div>' +
    (d.degree
      ? '<div class="rt-entry"><div class="rt-row"><span class="rt-l">' + esc(d.inst) + '</span><span class="rt-r">' + esc(d.yr) + '</span></div>' +
        '<div class="rt-sub"><span>' + esc(d.degree) + '</span><span>' + (d.cgpa ? 'Grade: ' + esc(d.cgpa) : '') + '</span></div></div>'
      : '<div class="rt-muted">Add education above</div>') +
    '<div class="rt-sec-h">Experience</div>' +
    (d.jt
      ? '<div class="rt-entry"><div class="rt-row"><span class="rt-l">' + esc(d.comp) + '</span><span class="rt-r">' + esc(d.dates) + '</span></div>' +
        '<div class="rt-sub"><span>' + esc(d.jt) + '</span><span>' + esc(d.location) + '</span></div>' + d.bulletsUL + '</div>'
      : '<div class="rt-muted">Add experience above</div>') +
    '<div class="rt-sec-h">Projects</div>' +
    (d.p1
      ? '<div class="rt-entry"><div class="rt-row"><span class="rt-l">' + esc(d.p1) + ' | ' + esc(d.p1s) + '</span><span class="rt-r">' + esc(d.yr) + '</span></div>' +
        (d.p1d ? d.bulletsUL || '<p>' + esc(d.p1d) + '</p>' : '') + '</div>'
      : '<div class="rt-muted">Add projects above</div>') +
    '<div class="rt-sec-h">Technical Skills</div><div class="rt-skills">' + skillsLines(d) + '</div>' +
    (d.course ? '<div class="rt-sec-h">Leadership / Extracurricular</div><p>' + esc(d.course) + '</p>' : '') +
    '</div>';
}

/* ── 8. Hybrid Serif (Janhvi) ── */
function renderHybrid(d) {
  var stack = [d.lang, d.fw, d.tools].filter(Boolean).join(', ');
  return '<div class="rt-hybrid">' +
    '<div class="rt-name">' + esc(d.name) + '</div>' +
    '<div class="rt-contact">' +
      (d.linkedin ? 'LinkedIn · ' : '') + esc(d.email) + ' · ' + esc(d.phone) +
      (d.github ? ' · GitHub' : '') +
    '</div>' +
    '<div class="rt-sec-h">Experience</div>' +
    (d.jt
      ? '<div class="rt-exp-head"><span>' + esc(d.comp) + ' — ' + esc(d.jt) + '</span><span class="rt-r">' + esc(d.location) + ' | ' + esc(d.dates) + '</span></div>' +
        (stack ? '<div class="rt-skills-line">Skills: ' + esc(stack) + '</div>' : '') + d.bulletsUL
      : '<div class="rt-muted">Add experience above</div>') +
    '<div class="rt-sec-h">Education</div>' +
    (d.degree
      ? '<div class="rt-exp-head"><span>' + esc(d.inst) + '</span><span class="rt-r">' + esc(d.location) + ' | ' + esc(d.yr) + '</span></div>' +
        '<div>' + esc(d.degree) + (d.cgpa ? ' CGPA: ' + esc(d.cgpa) : '') + '</div>' +
        (d.course ? '<div style="font-size:10px;margin-top:4px;">Relevant Coursework: ' + esc(d.course) + '</div>' : '')
      : '<div class="rt-muted">Add education above</div>') +
    '<div class="rt-sec-h">Technical &amp; Product Skills</div>' + skillsBullets(d) +
    '<div class="rt-sec-h">Projects</div>' +
    (d.p1
      ? '<div class="rt-proj-head"><span>' + esc(d.p1) + '</span><span style="font-size:9px;">' + (d.p1l ? 'Website · GitHub' : '') + '</span></div>' +
        (d.p1d ? d.bulletsUL || '<p>' + esc(d.p1d) + '</p>' : '')
      : '<div class="rt-muted">Add projects above</div>') +
    '</div>';
}

var RENDERERS = {
  navy: renderNavy,
  devcenter: renderDevCenter,
  brad: renderBrad,
  sky: renderSky,
  jane: renderJane,
  purple: renderPurple,
  academic: renderAcademic,
  hybrid: renderHybrid
};

function renderResumeHTML(data, templateId) {
  var tpl = RESUME_TEMPLATES[templateId] || RESUME_TEMPLATES['navy-pro'];
  var fn = RENDERERS[tpl.layout];
  return fn ? fn(data) : renderNavy(data);
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
  var p = {
    navy: '<div style="padding:10px;font-family:sans-serif"><div style="font-size:10px;font-weight:800;color:#1e3a5f">NAME</div><div style="height:1px;background:#cbd5e1;margin:6px 0"></div><div style="font-size:6px;color:#1e3a5f;font-weight:800">SKILLS</div><div style="border-bottom:1.5px solid #1e3a5f;margin-bottom:4px"></div></div>',
    devcenter: '<div style="padding:10px;text-align:center"><div style="font-size:11px;font-weight:800;color:#1e40af">Name</div><div style="font-size:6px;color:#64748b">tagline</div><div style="text-align:left;font-size:6px;color:#1e40af;font-weight:800;margin-top:8px">SUMMARY</div><div style="border-bottom:1.5px solid #1e40af"></div></div>',
    brad: '<div style="padding:8px;font-size:6px"><div style="font-weight:800">BRAD JENSEN</div><div style="color:#2563eb;font-weight:700">Executive tagline</div><div style="display:flex;gap:8px;margin-top:6px"><div style="flex:1.6;border-bottom:2px solid #111;height:20px"></div><div style="flex:1;border-left:1px dashed #ccc"></div></div></div>',
    sky: '<div style="padding:10px;text-align:center"><div style="font-weight:800">Name</div><div style="font-size:6px">✉ 📞 📍</div><div style="text-align:left;font-size:6px;color:#38bdf8;font-weight:800">WORK</div><div style="border-bottom:1.5px solid #111"></div></div>',
    jane: '<div style="display:flex;height:100%"><div style="width:35%;background:#e8f4fc"><div style="background:#1e3a5f;height:40px;border-radius:0 0 40% 40%"></div></div><div style="flex:1;padding:8px"><div style="font-size:8px;color:#1e3a5f;font-weight:700">Summary</div></div></div>',
    purple: '<div style="padding:10px"><div style="font-size:10px;font-weight:800;color:#6b21a8">NAME</div><div style="border-top:2px solid #6b21a8;border-bottom:2px solid #6b21a8;height:16px;margin:6px 0"></div><div style="display:flex;gap:6px"><div style="width:30%;font-size:5px;color:#6b21a8;font-weight:800">PROFILE</div><div style="flex:1;height:2px;background:#e5e7eb"></div></div></div>',
    academic: '<div style="padding:10px;font-family:serif;text-align:center"><div style="font-size:9px;font-weight:700;letter-spacing:.1em">NAME</div><div style="border-bottom:1px solid #000;margin:8px 0 4px;text-align:left;font-size:6px;font-weight:700">Education</div></div>',
    hybrid: '<div style="padding:10px"><div style="text-align:center;font-family:serif;font-size:10px;font-weight:700">Name</div><div style="border-bottom:1px solid #111;margin-top:8px;font-family:serif;font-size:6px;font-weight:700">Experience</div></div>'
  };
  return p[tpl.layout] || p.navy;
}

function initTemplatesPage() {
  var grid = document.getElementById('templates-grid');
  if (!grid) return;
  grid.innerHTML = '';
  grid.dataset.init = '1';
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
