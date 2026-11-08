/**
 * Everything on the home page lives here. Edit this file, not the components.
 */
export const site = {
  name: "Nommoh Hayab",
  role: "Software Engineer",
  url: "https://hnommoh.vercel.app",
  metadataDescription:
    "Nommoh Hayab is a software engineer building AI-powered developer tools, including coding agents, LLM integrations, and backend infrastructure.",

  now: "I’m currently building AI-powered developer tools, with a focus on coding agents, LLM integrations, and backend infrastructure. My main project is rem, an open-source terminal coding agent written in Rust, with support for multiple LLM providers, MCP tools, parallel subagents, and persistent sessions. I’m also exploring RAG, model evaluation, and ways to make AI agents more reliable, efficient, and useful in real-world development workflows.",

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
      href: "https://example.com",
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
