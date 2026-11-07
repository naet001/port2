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
      role: "Placeholder Role One",
      org: "Placeholder Company",
      period: "2026 — Present",
      description: "One line about what the work was.",
    },
    {
      role: "Placeholder Role Two",
      org: "Placeholder Company",
      period: "2025 — 2026",
      description: "One line about what the work was.",
    },
    {
      role: "Placeholder Role Three",
      org: "Placeholder Company",
      period: "2024 — 2025",
      description: "One line about what the work was.",
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
