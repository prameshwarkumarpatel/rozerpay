// ==============================================
// CENTRAL DATA FILE FOR YOUR PORTFOLIO
// Edit the values below to personalize your site.
// Changing this file is enough — the UI reads
// everything from here.
// ==============================================

export const profile = {
  name: 'Pawan',
  role: 'Full Stack Developer',
  shortIntro:
    "Hi, I'm Pawan — a passionate Full Stack Developer who loves building clean, fast and modern web applications.",
  location: 'India',
  availability: 'Available for work',
  resumeUrl: '#', // paste your resume URL here
  email: 'pawan@example.com',
  socials: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    twitter: 'https://twitter.com/your-username',
  },
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    'I am a driven developer with a strong foundation in both frontend and backend technologies. I enjoy taking ideas from concept to production and turning complex problems into simple, beautiful solutions.',
    'When I am not coding, you will find me exploring new technologies, contributing to open source, or sharing what I learn with the community.',
  ],
  highlights: [
    '1+ years of hands-on development experience',
    'Built 6+ projects end-to-end',
    'Strong problem-solving & debugging skills',
    'Quick learner — always upskilling',
  ],
}

export const skills = {
  heading: 'Skills',
  subtitle: 'The tools and technologies I work with day-to-day.',
  groups: [
    {
      title: 'Frontend',
      icon: '🎨',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Redux Toolkit'],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      items: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'REST APIs', 'Postman'],
    },
    {
      title: 'Tools & Other',
      icon: '🛠️',
      items: ['Git', 'GitHub', 'VS Code', 'ESLint', 'npm', 'Linux'],
    },
  ],
}

export const projects = {
  heading: 'Projects',
  subtitle: 'A selection of things I have built.',
  list: [
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce web app with product catalog, cart, secure checkout and order tracking.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      live: '#',
      source: 'https://github.com/your-username',
    },
    {
      title: 'Razorpay-style Payment Gateway (Demo)',
      description:
        'A payment integration demo built with the Razorpay API including checkout, webhooks and payment-status UI.',
      tech: ['React', 'Razorpay API', 'Express'],
      live: '#',
      source: 'https://github.com/your-username',
    },
    {
      title: 'Task Manager App',
      description:
        'A Kanban-style task board with drag-and-drop, priorities, due dates and persistence across sessions.',
      tech: ['React', 'Vite', 'CSS Modules'],
      live: '#',
      source: 'https://github.com/your-username',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A weather app that consumes a public API to show live forecasts, history and pretty charts for any city.',
      tech: ['JavaScript', 'REST API', 'Chart.js'],
      live: '#',
      source: 'https://github.com/your-username',
    },
  ],
}

export const experience = {
  heading: 'Experience',
  list: [
    {
      role: 'Frontend Developer — Intern',
      company: 'Startup / Company Name',
      period: '2024 — 2025',
      points: [
        'Built responsive UIs using React and Vite, improving page load speed by 30%.',
        'Worked with designers and the back-end team to ship features on schedule.',
      ],
    },
    {
      role: 'Freelance Developer',
      company: 'Self-employed',
      period: '2023 — Present',
      points: [
        'Delivered 6+ client projects including websites and small web applications.',
        'Handled requirements gathering, development and deployment.',
      ],
    },
  ],
}

export const education = {
  heading: 'Education',
  list: [
    {
      degree: 'B.Tech in Computer Science',
      school: 'Your University Name',
      period: '2022 — 2026',
    },
    {
      degree: 'Senior Secondary (Class XII)',
      school: 'Your School Name',
      period: '2022',
    },
  ],
}

export const contact = {
  heading: 'Get In Touch',
  subtitle:
    'Have a project in mind or just want to say hi? My inbox is always open.',
  email: 'pawan@example.com',
  phone: '+91 987 654 3210',
  location: 'India',
}