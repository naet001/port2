/**
 * Everything on the home page lives here. Edit this file, not the components.
 */
export const site = {
  name: "Nommoh Hayab",
  role: "Backend Engineer | Applied AI & Web3",
  url: "https://hnommoh.vercel.app",
  metadataDescription:
    "Nommoh Hayab is a Backend Engineer specializing in Applied AI and Web3. Building scalable APIs, LLM integrations, blockchain systems, and production-grade backend infrastructure.",

  now: "I’m a Backend Engineer with deep experience in Applied AI and Web3. I build scalable APIs, production systems, and backend infrastructure, with specialized expertise in LLM integrations, AI-powered developer tools, and blockchain-based solutions. Currently developing rem, an open-source Rust terminal coding agent, while exploring RAG systems, model evaluation, and reliable AI agent deployment.",

  projects: [
    {
      title: "rem",
      description: "An open-source Rust terminal coding agent with multi-LLM support. Built for production reliability and backend integration.",
      href: "https://github.com/naet001/rem",
    },
    {
      title: "mnemos",
      description: "A shared memory layer for AI agents. Enables context persistence across LLMs for backend and production systems.",
      href: "https://github.com/naet001/mnemos",
    },
    {
      title: "this portfolio",
      description: "Personal portfolio site. Built with Next.js, Tailwind CSS, and deployed on Vercel.",
      href: "https://github.com/naet001/port2",
    },
  ],

  experiences: [
    {
      role: "Backend Engineer",
      org: "Uptime Tech",
      period: "Apr 2026 – Sept 2026",
      description: "Backend Engineer building scalable APIs and predictive-maintenance systems. Integrated LLM-powered RAG features for production use, and improved testing and deployment reliability.",
    },
    {
      role: "Web3 Backend Engineer",
      org: "Kat's & Co",
      period: "Jan 2024 – Feb 2026",
      description: "Backend Engineer specializing in Web3 systems. Built and maintained blockchain payment APIs processing 1,000+ monthly transactions at a 99% success rate, while improving deployment speed by 60%.",
    },
    {
      role: "Backend Engineer",
      org: "Freelance",
      period: "Feb 2021 – Nov 2023",
      description: "Backend Engineer developing Node.js and Go APIs for 2,000+ users. Improved response times by 35% through database optimization, caching, and service architecture improvements.",
    },
  ],

  more: {
    text: "Find me around the web ",
    links: [
      { label: "GitHub", href: "https://github.com/naet001" },
      { label: "X", href: "https://x.com/naet001" },
      { label: "Linkedin", href: "https://www.linkedin.com/in/nommoh-hayab-712abb440" }
    ],
  },
} as const;
