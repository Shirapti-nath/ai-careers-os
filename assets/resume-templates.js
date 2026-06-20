/* Resume template engine — 3 categories, 9 distinct layouts */
window.RESUME_TEMPLATES = {
  'student-campus': {
    id: 'student-campus', name: 'Campus Fresh', category: 'student',
    desc: 'Centered header — ideal for internships and campus placements.',
    ats: 96, accent: '#4f46e5', layout: 'student-campus',
    order: ['summary', 'education', 'projects', 'experience', 'skills']
  },
  'student-sidebar': {
    id: 'student-sidebar', name: 'Portfolio Sidebar', category: 'student',
    desc: 'Purple sidebar with skills & contact — great for CS students.',
    ats: 93, accent: '#7c3aed', layout: 'student-sidebar',
    order: ['summary', 'education', 'projects', 'experience', 'skills']
  },
  'student-projects': {
    id: 'student-projects', name: 'Project Spotlight', category: 'student',
    desc: 'Bold header with project-first layout for portfolio-heavy profiles.',
    ats: 91, accent: '#0891b2', layout: 'student-projects',
    order: ['summary', 'projects', 'education', 'experience', 'skills']
  },
  'pro-corporate': {
    id: 'pro-corporate', name: 'Corporate Standard', category: 'professional',
    desc: 'Classic navy sections — trusted by recruiters across industries.',
    ats: 97, accent: '#0f172a', layout: 'pro-corporate',
    order: ['summary', 'experience', 'education', 'projects', 'skills']
  },
  'pro-split': {
    id: 'pro-split', name: 'Modern Split', category: 'professional',
    desc: 'Blue sidebar with experience-forward layout for 2–5 years.',
    ats: 94, accent: '#0ea5e9', layout: 'pro-split',
    order: ['summary', 'experience', 'education', 'projects', 'skills']
  },
  'pro-slate': {
    id: 'pro-slate', name: 'Clean Slate', category: 'professional',
    desc: 'Minimal whitespace design — lets achievements speak clearly.',
    ats: 95, accent: '#374151', layout: 'pro-slate',
    order: ['summary', 'experience', 'skills', 'education', 'projects']
  },
  'exec-dark': {
    id: 'exec-dark', name: 'Executive Dark', category: 'executive',
    desc: 'Bold dark header with gold accents for senior leadership roles.',
    ats: 92, accent: '#f59e0b', layout: 'exec-dark',
    order: ['summary', 'experience', 'education', 'skills', 'projects']
  },
  'exec-timeline': {
    id: 'exec-timeline', name: 'Senior Timeline', category: 'executive',
    desc: 'Green timeline accents — optimized for 8+ years experience.',
    ats: 93, accent: '#059669', layout: 'exec-timeline',
    order: ['summary', 'experience', 'skills', 'education', 'projects']
  },
  'exec-classic': {
    id: 'exec-classic', name: 'Distinguished Classic', category: 'executive',
    desc: 'Serif typography with formal layout for director-level roles.',
    ats: 90, accent: '#1c1917', layout: 'exec-classic',
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
  var email = g('b-email'), phone = g('b-phone'), loc = g('b-location');
  var li = g('b-linkedin'), gh = g('b-github');
  var contactParts = [email, phone, loc, li, gh].filter(Boolean);
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

function blockEducation(d) {
  if (!d.degree) return '<div class="rt-muted">Add your education details above</div>';
  return '<div style="display:flex;justify-content:space-between;font-weight:600;">' + esc(d.degree) +
    '<span style="font-weight:400;color:#64748b;">' + esc(d.yr) + '</span></div>' +
    '<div class="rt-muted">' + esc(d.inst) + (d.cgpa ? ' · CGPA: ' + esc(d.cgpa) : '') + '</div>' +
    (d.course ? '<div class="rt-body" style="margin-top:2px;">' + esc(d.course) + '</div>' : '');
}

function blockExperience(d) {
  if (!d.jt) return '<div class="rt-muted">Add your experience above</div>';
  var dates = d.start + (d.end ? ' – ' + d.end : '');
  return '<div style="display:flex;justify-content:space-between;font-weight:600;">' + esc(d.jt) +
    '<span style="font-weight:400;color:#64748b;">' + esc(dates) + '</span></div>' +
    '<div class="rt-muted" style="margin-bottom:4px;">' + esc(d.comp) + '</div>' +
    '<div class="rt-body">' + d.bulletsHTML + '</div>';
}

function blockProjects(d, chips) {
  if (!d.p1) return '<div class="rt-muted">Add your projects above</div>';
  var stack = d.p1s ? ' <span class="rt-muted">· ' + esc(d.p1s) + '</span>' : '';
  var chipsHTML = chips && d.p1s
    ? d.p1s.split(',').map(function (s) {
        return '<span class="rt-chip">' + esc(s.trim()) + '</span>';
      }).join('')
    : '';
  return '<div style="font-weight:600;">' + esc(d.p1) + (chips ? '' : stack) + '</div>' +
    (chipsHTML ? '<div style="margin:6px 0 4px;">' + chipsHTML + '</div>' : '') +
    (d.p1d ? '<div class="rt-body" style="margin-top:2px;">' + esc(d.p1d) + '</div>' : '') +
    (d.p1l ? '<div style="color:#6366f1;font-size:9px;">' + esc(d.p1l) + '</div>' : '');
}

function blockSkills(d) {
  var html = '';
  if (d.lang) html += '<div><span style="font-weight:600;">Languages:</span> ' + esc(d.lang) + '</div>';
  if (d.fw) html += '<div><span style="font-weight:600;">Frameworks:</span> ' + esc(d.fw) + '</div>';
  if (d.tools) html += '<div><span style="font-weight:600;">Tools:</span> ' + esc(d.tools) + '</div>';
  if (d.certs) html += '<div style="margin-top:4px;"><span style="font-weight:600;">Certifications:</span> ' + esc(d.certs.replace(/\n/g, ' | ')) + '</div>';
  return html || '<div class="rt-muted">Add your skills above</div>';
}

function sec(title, body) {
  return '<div class="rt-sec"><div class="rt-sec-title">' + title + '</div><div class="rt-sec-body">' + body + '</div></div>';
}

function sectionsMap(d, tpl) {
  var chips = tpl.layout === 'student-projects';
  return {
    summary: d.summary
      ? sec('Professional Summary', '<p class="rt-body">' + esc(d.summary) + '</p>')
      : sec('Professional Summary', '<p class="rt-muted">Add a brief summary above</p>'),
    education: sec('Education', blockEducation(d)),
    experience: sec('Experience', blockExperience(d)),
    projects: sec('Projects', blockProjects(d, chips)),
    skills: sec('Skills', blockSkills(d))
  };
}

function renderOrderedSections(d, tpl) {
  var map = sectionsMap(d, tpl);
  return tpl.order.map(function (k) { return map[k]; }).join('');
}

function renderResumeHTML(data, templateId) {
  var tpl = RESUME_TEMPLATES[templateId] || RESUME_TEMPLATES['student-campus'];
  var d = data;
  var accent = tpl.accent;
  var sections = renderOrderedSections(d, tpl);

  if (tpl.layout === 'student-sidebar') {
    return '<div class="rt-root rt-student-sidebar" style="--rt-accent:' + accent + '">' +
      '<div class="rt-side">' +
        '<div class="rt-name">' + esc(d.name) + '</div>' +
        '<div class="rt-contact">' + esc(d.contact).replace(/\|/g, '<br>') + '</div>' +
        '<div class="rt-sec-title">Skills</div><div style="font-size:9px;line-height:1.7;">' + blockSkills(d) + '</div>' +
      '</div>' +
      '<div class="rt-main">' +
        (d.summary ? sec('Summary', '<p class="rt-body">' + esc(d.summary) + '</p>') : '') +
        sec('Education', blockEducation(d)) +
        sec('Projects', blockProjects(d, false)) +
        sec('Experience', blockExperience(d)) +
      '</div></div>';
  }

  if (tpl.layout === 'pro-split') {
    return '<div class="rt-root rt-pro-split" style="--rt-accent:' + accent + '">' +
      '<div class="rt-side">' +
        '<div class="rt-name">' + esc(d.name) + '</div>' +
        '<div class="rt-contact">' + esc(d.contact).replace(/\|/g, '<br>') + '</div>' +
        '<div class="rt-sec-title">Skills</div><div style="font-size:9px;line-height:1.7;">' + blockSkills(d) + '</div>' +
      '</div>' +
      '<div class="rt-main">' +
        (d.summary ? sec('Summary', '<p class="rt-body">' + esc(d.summary) + '</p>') : '') +
        sec('Experience', blockExperience(d)) +
        sec('Education', blockEducation(d)) +
        sec('Projects', blockProjects(d, false)) +
      '</div></div>';
  }

  if (tpl.layout === 'student-projects') {
    return '<div class="rt-root rt-student-projects" style="--rt-accent:' + accent + '">' +
      '<div class="rt-banner"><div class="rt-name">' + esc(d.name) + '</div><div class="rt-contact">' + esc(d.contact) + '</div></div>' +
      sections + '</div>';
  }

  if (tpl.layout === 'student-campus') {
    return '<div class="rt-root rt-student-campus" style="--rt-accent:' + accent + '">' +
      '<div class="rt-head"><div class="rt-name">' + esc(d.name) + '</div><div class="rt-contact">' + esc(d.contact) + '</div></div>' +
      sections + '</div>';
  }

  if (tpl.layout === 'pro-corporate') {
    return '<div class="rt-root rt-pro-corporate" style="--rt-accent:' + accent + '">' +
      '<div class="rt-head"><div class="rt-name">' + esc(d.name) + '</div><div class="rt-contact">' + esc(d.contact) + '</div></div>' +
      sections + '</div>';
  }

  if (tpl.layout === 'pro-slate') {
    return '<div class="rt-root rt-pro-slate" style="--rt-accent:' + accent + '">' +
      '<div class="rt-name">' + esc(d.name) + '</div><div class="rt-contact">' + esc(d.contact) + '</div><div class="rt-rule"></div>' +
      sections + '</div>';
  }

  if (tpl.layout === 'exec-dark') {
    return '<div class="rt-root rt-exec-dark" style="--rt-accent:' + accent + '">' +
      '<div class="rt-head"><div class="rt-name">' + esc(d.name) + '</div><div class="rt-contact">' + esc(d.contact) + '</div>' +
      (d.summary ? '<div class="rt-tagline">' + esc(d.summary.slice(0, 80)) + (d.summary.length > 80 ? '…' : '') + '</div>' : '') +
      '</div><div class="rt-body-wrap">' + sections + '</div></div>';
  }

  if (tpl.layout === 'exec-timeline') {
    var expBody = d.jt
      ? '<div class="rt-entry">' + blockExperience(d) + '</div>'
      : '<div class="rt-muted">Add your experience above</div>';
    var map = sectionsMap(d, tpl);
    map.experience = sec('Experience', expBody);
    var html = tpl.order.map(function (k) { return map[k]; }).join('');
    return '<div class="rt-root rt-exec-timeline" style="--rt-accent:' + accent + '">' +
      '<div class="rt-name">' + esc(d.name) + '</div><div class="rt-contact">' + esc(d.contact) + '</div>' +
      html + '</div>';
  }

  if (tpl.layout === 'exec-classic') {
    return '<div class="rt-root rt-exec-classic" style="--rt-accent:' + accent + '">' +
      '<div class="rt-name">' + esc(d.name) + '</div><div class="rt-contact">' + esc(d.contact) + '</div>' +
      sections + '</div>';
  }

  return renderResumeHTML(data, 'student-campus');
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
  var c = tpl.accent;
  var layouts = {
    'student-campus': '<div style="padding:12px;text-align:center"><div style="height:8px;width:55%;background:' + c + ';margin:0 auto 6px;border-radius:2px"></div><div style="height:3px;width:70%;background:#cbd5e1;margin:0 auto 10px"></div><div style="height:2px;width:40%;background:' + c + ';margin-bottom:4px"></div><div style="height:2px;background:#e2e8f0;margin-bottom:2px"></div><div style="height:2px;width:85%;background:#e2e8f0"></div></div>',
    'student-sidebar': '<div style="display:flex;height:100%"><div style="width:35%;background:' + c + '"></div><div style="flex:1;padding:10px"><div style="height:6px;width:80%;background:#1e293b;margin-bottom:6px"></div><div style="height:2px;background:#e2e8f0;width:90%"></div></div></div>',
    'student-projects': '<div style="background:' + c + ';height:40px;margin-bottom:8px"></div><div style="padding:0 12px"><div style="height:2px;width:35%;background:' + c + ';margin-bottom:4px"></div><div style="height:2px;background:#e2e8f0;width:80%"></div></div>',
    'pro-corporate': '<div style="padding:12px"><div style="height:6px;width:50%;background:#0f172a;margin-bottom:4px"></div><div style="height:2px;width:75%;background:#94a3b8;margin-bottom:8px"></div><div style="background:#f1f5f9;padding:4px 6px;margin-bottom:4px"><div style="height:2px;width:35%;background:#0f172a"></div></div><div style="height:2px;background:#e2e8f0;width:88%"></div></div>',
    'pro-split': '<div style="display:flex;height:100%"><div style="width:38%;background:' + c + '"></div><div style="flex:1;padding:10px"><div style="height:5px;width:85%;background:#0f172a;margin-bottom:6px"></div><div style="height:2px;border-left:3px solid ' + c + ';padding-left:4px;width:40%;margin-bottom:4px"></div><div style="height:2px;background:#e2e8f0;width:90%"></div></div></div>',
    'pro-slate': '<div style="padding:14px"><div style="height:8px;width:60%;background:#111827;margin-bottom:6px"></div><div style="height:1px;background:#d1d5db;margin-bottom:8px"></div><div style="height:2px;width:30%;background:#6b7280;margin-bottom:4px"></div><div style="height:2px;background:#f1f5f9;width:85%"></div></div>',
    'exec-dark': '<div style="background:#111827;height:50px;margin-bottom:8px"></div><div style="padding:0 12px"><div style="height:2px;width:40%;background:' + c + ';border-bottom:2px solid ' + c + ';margin-bottom:6px"></div><div style="height:2px;background:#e2e8f0;width:90%"></div></div>',
    'exec-timeline': '<div style="padding:12px"><div style="height:6px;width:55%;background:#064e3b;margin-bottom:6px"></div><div style="border-left:3px solid ' + c + ';padding-left:8px"><div style="height:2px;background:#e2e8f0;width:85%;margin-bottom:2px"></div><div style="height:2px;background:#e2e8f0;width:70%"></div></div></div>',
    'exec-classic': '<div style="padding:14px;text-align:center;font-family:Georgia,serif"><div style="height:7px;width:65%;background:#1c1917;margin:0 auto 4px"></div><div style="height:1px;background:#1c1917;margin-bottom:8px"></div><div style="height:2px;width:35%;background:#57534e;margin:0 auto 6px"></div><div style="height:2px;background:#e7e5e4;width:80%;margin:0 auto"></div></div>'
  };
  return layouts[tpl.layout] || layouts['student-campus'];
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
    card.querySelector('button').addEventListener('click', function (e) {
      e.stopPropagation();
      applyResumeTemplate(id);
    });
    card.addEventListener('click', function () { applyResumeTemplate(id); });
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initTemplatesPage();
});
