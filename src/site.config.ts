/**
 * Everything on the home page lives here. Edit this file, not the components.
 */
export const site = {
  name: "Nommoh Hayab",
  role: "Software Engineer",
  url: "https://hnommoh.vercel.app",
  metadataDescription:
    "Nommoh Hayab is a software engineer building AI-powered developer tools, including coding agents, LLM integrations, and backend infrastructure.",

  now: "I’m a backend engineer who applies AI engineering to build production systems. My work includes creating scalable APIs, implementing LLM integrations for real-world applications, and building AI-powered developer tools. I’m currently developing rem, an open-source Rust terminal coding agent with multiple LLM provider support and persistent sessions, while exploring RAG systems, model evaluation, and making AI agents more reliable in production environments.",

  projects: [
    {
      title: "rem",
      description: "An open-source Rust coding agent for the terminal.",
      href: "https://github.com/naet001/rem",
    },
    {
      title: "mnemos",
      description: "A shared memory layer that lets AI agents remember and recall context across LLMs.",
      href: "https://github.com/naet001/mnemos",
    },
    {
      title: "this portfolio",
      description: "Open source, side project, client work, anything.",
      href: "https://github.com/naet001/port2",
    },
  ],

  experiences: [
    {
      role: "Backend Engineer",
      org: "Uptime Tech",
      period: "Apr 2026 – Sept 2026",
      description: "Built backend APIs and predictive-maintenance services, integrated LLM-powered RAG features, and improved testing and deployment reliability.",
    },
    {
      role: "Web3 Backend Engineer",
      org: "Kat's & Co",
      period: "Jan 2024 – Feb 2026",
      description: "Built and maintained Web3 payment systems processing 1,000+ monthly transactions at a 99% success rate, while improving deployment speed by 60%.",
    },
    {
      role: "Backend Engineer",
      org: "Freelance",
      period: "Feb 2021 – Nov 2023",
      description: "Built Node.js and Go APIs for 2,000+ users, improving response times by 35% through database and service optimisation.",
    },
  ],

  more: {
    text: "Find me around the web ",
    links: [
      { label: "GitHub", href: "https://github.com/naet001" },
      { label: "X", href: "https://x.com/naet001" },
    ],
  },
} as const;
