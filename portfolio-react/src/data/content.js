export const RESUME_PDF = '#resume-pdf-placeholder';

export const CONTACT = {
  email: 'shirapti27@gmail.com',
  phone: '9842644796',
  linkedin: 'https://www.linkedin.com/in/shirapti',
  github: 'https://github.com/Shirapti-nath',
};

export const SKILL_GROUPS = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Python', 'C++', 'JavaScript'],
  },
  {
    title: 'AI/ML & Agents',
    icon: '🤖',
    skills: ['LangGraph', 'Computer Vision (OpenCV)', 'LLM-based agent systems'],
  },
  {
    title: 'Backend & Web',
    icon: '⚡',
    skills: ['Node.js', 'Express.js', 'React', 'MongoDB (MERN)', 'REST APIs'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Cursor AI', 'Postman'],
  },
];

export const PROJECTS = [
  {
    id: 'saas-notification',
    title: 'SaaS Notification API',
    description:
      'A backend notification service built for SaaS applications — centralizes and automates multi-channel notification delivery.',
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
      'ATS compatibility scoring (0–100)',
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
    id: 'multi-agent-support',
    title: 'Multi-Agent Customer Support Platform',
    description:
      'An 11-agent LangGraph-based customer support system that automates complex support workflows.',
    problem:
      'Customer support teams face repetitive, multi-step queries that need coordinated AI handling.',
    stack: ['Python', 'LangGraph', 'LLM APIs'],
    features: [
      '11 specialized agents with defined roles',
      'Orchestrated multi-step workflow',
      'Automated query resolution pipeline',
    ],
    github: '#',
    demo: '#',
  },
  {
    id: 'insurance-cv',
    title: 'CV-Based Insurance Claims Pipeline',
    description:
      'A computer vision pipeline for processing insurance claims with automated visual assessment.',
    problem:
      'Manual review of claim images is slow, inconsistent, and expensive for insurers.',
    stack: ['Python', 'OpenCV', 'scikit-learn'],
    features: [
      'Automated image-based claim verification',
      'Reduced manual review time',
      'Structured damage assessment pipeline',
    ],
    github: '#',
    demo: '#',
  },
];

export const ACADEMIC = [
  {
    degree: 'B.E. Computer Science Engineering',
    highlight: 'Gold Medal',
    institution: 'K L N College of Engineering',
    period: 'Graduated',
  },
  {
    degree: 'MSc Artificial Intelligence & Data Science',
    highlight: 'In Progress',
    institution: 'BITS Pilani',
    period: '2024 – Present',
  },
  {
    degree: 'Microsoft Learn Student Ambassador',
    highlight: 'Contributor',
    institution: 'Microsoft Learn Program',
    period: 'Active',
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'AI Engineer for Data Science Associate',
    issuer: 'DataCamp',
    type: 'certification',
    logo: '🎓',
    link: '#',
  },
  {
    title: 'Orchestrate Hackathon',
    issuer: 'Ranked 291 / 1547',
    type: 'hackathon',
    logo: '🏆',
    link: '#',
  },
  {
    title: 'Gold Medal — Computer Science',
    issuer: 'B.E. CSE',
    type: 'award',
    logo: '🥇',
    link: '#',
  },
];
