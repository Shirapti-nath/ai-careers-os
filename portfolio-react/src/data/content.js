export const BASE = '/ai-careers-os/portfolio';
export const RESUME_PDF = `${BASE}/resume.pdf`;

export const IMAGES = {
  profile: `${BASE}/images/profile.png`,
  klnCollege: `${BASE}/images/kln-college-cartoon.png`,
  bitsPilani: `${BASE}/images/bits-pilani-cartoon.png`,
};

export const CONTACT = {
  email: 'shirapti27@gmail.com',
  phone: '9842644796',
  linkedin: 'https://www.linkedin.com/in/shirapti',
  github: 'https://github.com/Shirapti-nath',
};

export const AI_CERT_PDF = `${BASE}/certificates/ai-engineer-developer-associate.pdf`;
export const GOOGLE_EDUCATOR_CERT = `${BASE}/certificates/google-certified-educator.png`;

export const SKILL_GROUPS = [
  { title: 'Languages', icon: '💻', color: 'violet', skills: ['Python', 'C++', 'JavaScript'] },
  { title: 'Frontend', icon: '🎨', color: 'pink', skills: ['React.js', 'Next.js'] },
  {
    title: 'Backend',
    icon: '⚡',
    color: 'sky',
    skills: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'Flask'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'indigo',
    skills: ['PostgreSQL', 'SQL', 'MongoDB'],
  },
  {
    title: 'AI/ML',
    icon: '🤖',
    color: 'rose',
    skills: ['LangGraph', 'LangChain', 'LLM API Integration', 'Prompt Engineering'],
  },
  {
    title: 'DevOps & Tools',
    icon: '🛠️',
    color: 'amber',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Vercel/Render'],
  },
];

export const PROJECTS = [
  {
    id: 'saas-notification',
    title: 'SaaS Notification API',
    description:
      'A backend notification service built for SaaS applications - centralizes and automates multi-channel notification delivery.',
    problem:
      'SaaS products need reliable, centralized notification delivery without rebuilding email/push logic in every service.',
    stack: ['Node.js', 'Express.js', 'MongoDB'],
    features: [
      'REST API endpoints for notification dispatch',
      'Database-backed notification logging',
      'Scalable backend architecture for SaaS workloads',
    ],
    github: '#',
    demo: '#',
  },
  {
    id: 'ai-career-os',
    title: 'AI Resume Analyzer & Career OS',
    description:
      'An AI-powered platform offering ATS resume scoring and personalized career path recommendations for students and freshers.',
    problem:
      'Job seekers struggle to understand resume gaps and identify suitable career trajectories without expensive coaching.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'LLM APIs', 'HTML/CSS/JS'],
    features: [
      'ATS compatibility scoring (0-100)',
      'AI resume analysis engine',
      '12 personalized tech career roadmaps',
      'PDF resume export with 8 ATS templates',
    ],
    github: 'https://github.com/shirapti-nath/ai-careers-os',
    demo: 'https://shirapti-nath.github.io/ai-careers-os/',
    featured: true,
  },
  {
    id: 'managify',
    title: 'Managify.ai',
    description:
      'A task management application that helps users organize, prioritize, and track work efficiently.',
    problem:
      'Scattered to-dos and unclear priorities make it hard to stay productive across projects.',
    stack: ['React', 'Node.js', 'MongoDB', 'MERN'],
    features: [
      'Task creation and tracking',
      'User-friendly dashboard',
      'Priority-based organization',
    ],
    github: '#',
    demo: '#',
  },
  {
    id: 'orchestrate-triage',
    title: 'Multi-Domain Support Triage Challenge',
    description:
      'Orchestrate 2026 hackathon submission - an AI agent system for multi-domain customer support ticket triage and resolution.',
    problem:
      'Support teams need intelligent routing and automated handling across diverse ticket domains without manual triage bottlenecks.',
    stack: ['Python', 'LangGraph', 'LLM APIs'],
    features: [
      'Multi-domain support ticket classification',
      'AI agent orchestration pipeline',
      'Ranked 290th of 1,547 teams at HackerRank Orchestrate',
    ],
    github: 'https://github.com/Shirapti-nath/Multi-domain-support-triage-challenge',
    demo: '#',
    featured: true,
  },
];

export const ACADEMIC = [
  {
    degree: 'B.E. Computer Science Engineering',
    highlight: 'Gold Medal',
    institution: 'K.L.N College of Engineering',
    period: '2021 - 2025',
    color: 'amber',
    bgImage: IMAGES.klnCollege,
  },
  {
    degree: 'MSc Artificial Intelligence & Data Science',
    highlight: 'In Progress',
    institution: 'BITS Pilani',
    period: '2025 - 2027',
    color: 'violet',
    bgImage: IMAGES.bitsPilani,
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'HackerRank Orchestrate 2026',
    issuer: 'Certificate of Excellence - 290th of 1,547 teams',
    image: `${BASE}/certificates/orchestrate-hackerrank.png`,
    link: `${BASE}/certificates/orchestrate-hackerrank.png`,
  },
  {
    title: 'NPTEL Discipline Star',
    issuer: 'Computer Science Engineering - Recognized at IIT Madras',
    image: `${BASE}/certificates/nptel-discipline-star.png`,
    link: `${BASE}/certificates/nptel-discipline-star.png`,
  },
  {
    title: 'Gold Medal & Best Outgoing Student',
    issuer:
      'Gold Medal in Computer Science · Best Outgoing Student among 120 students in CS branch (2021-2025) at K.L.N College of Engineering',
    combined: true,
    logos: ['🥇', '⭐'],
    link: '#',
  },
];
