/**
 * Everything on the home page lives here. Edit this file, not the components.
 */

// SEO Keywords Configuration
export const keywords = {
  primaryRole: [
    "Backend Engineer",
    "Backend Developer",
    "AI Engineer",
    "Web3 Developer",
    "Blockchain Developer",
    "Software Engineer",
    "Systems Engineer",
    "Full Stack Developer"
  ],
  technicalExpertise: {
    ai: [
      "LLM Integration",
      "Large Language Models",
      "RAG Systems",
      "Retrieval-Augmented Generation",
      "AI Agent Development",
      "Model Evaluation",
      "AI-Powered Developer Tools",
      "Applied AI",
      "Machine Learning Engineering"
    ],
    backend: [
      "API Development",
      "Scalable APIs",
      "RESTful APIs",
      "GraphQL",
      "Blockchain Systems",
      "Smart Contract Development",
      "Web3 Integration",
      "Ethereum Development",
      "Blockchain Payment APIs",
      "Decentralized Applications",
      "DApps"
    ],
    languages: [
      "Rust",
      "Node.js",
      "Go",
      "Golang",
      "TypeScript",
      "Python",
      "Next.js",
      "React",
      "Tailwind CSS"
    ]
  },
  projects: [
    "rem",
    "Rust terminal coding agent",
    "mnemos",
    "shared memory layer for AI agents",
    "Coding Agents",
    "AI Memory Systems",
    "Context Persistence",
    "Multi-LLM Support",
    "Production Reliability"
  ],
  industry: [
    "Predictive Maintenance Systems",
    "Production-Grade Systems",
    "High Availability",
    "Performance Optimization",
    "Database Optimization",
    "Caching Strategies",
    "Deployment Reliability",
    "CI/CD Pipelines"
  ],
  geographic: [
    "Nigeria",
    "African Developer",
    "Lagos Tech",
    "West Africa",
    "Remote"
  ]
} as const;

export const site = {
  name: "Nommoh Hayab",
  role: "Backend Engineer | Applied AI & Web3",
  url: "https://hnommoh.vercel.app",
  location: "Lagos, Nigeria",
  metadataDescription:
    "Nommoh Hayab is a Backend Engineer and AI Specialist based in Lagos, Nigeria, specializing in Applied AI, Web3, and Blockchain development. Expert in building scalable APIs, LLM integrations, RAG systems, blockchain payment APIs, and production-grade backend infrastructure with Rust, Node.js, and Go.",

  now: "I’m a Backend Engineer with deep experience in Applied AI and Web3. I build scalable APIs, production systems, and backend infrastructure, with specialized expertise in LLM integrations, RAG systems, AI-powered developer tools, and blockchain-based solutions. Currently developing rem, an open-source Rust terminal coding agent, while exploring model evaluation and reliable AI agent deployment. Based in Lagos, Nigeria, working remotely with global clients.",

  projects: [
    {
      title: "rem",
      description: "An open-source Rust terminal coding agent with multi-LLM support. Built for production reliability, backend integration, and AI agent development.",
      href: "https://github.com/naet001/rem",
    },
    {
      title: "mnemos",
      description: "A shared memory layer for AI agents enabling context persistence across LLMs. Production-grade RAG system for AI-powered developer tools and backend infrastructure.",
      href: "https://github.com/naet001/mnemos",
    },
    {
      title: "this portfolio",
      description: "Personal portfolio site built with Next.js 16, Tailwind CSS v4, and TypeScript. Deployed on Vercel with SEO optimization for backend engineering, AI, and Web3.",
      href: "https://github.com/naet001/port2",
    },
  ],

  experiences: [
    {
      role: "Backend Engineer",
      org: "Uptime Tech",
      period: "Apr 2026 – Sept 2026",
      description: "Backend Engineer building scalable RESTful APIs and predictive maintenance systems. Integrated LLM-powered RAG features for production use, improved testing reliability, and optimized deployment pipelines for AI agent development.",
    },
    {
      role: "Web3 Backend Engineer",
      org: "Kat's & Co",
      period: "Jan 2024 – Feb 2026",
      description: "Web3 Backend Engineer specializing in blockchain systems and Ethereum development. Built and maintained blockchain payment APIs processing 1,000+ monthly transactions at 99% success rate. Improved deployment speed by 60% through CI/CD optimization for decentralized applications (DApps).",
    },
    {
      role: "Backend Engineer",
      org: "Freelance",
      period: "Feb 2021 – Nov 2023",
      description: "Backend Engineer developing Node.js and Go (Golang) APIs for 2,000+ users. Improved response times by 35% through database optimization, caching strategies, and scalable service architecture for production-grade systems.",
    },
  ],

  cv: {
    href: "/Isaac%20Hayab.docx",
    download: "Isaac Hayab.docx",
    label: "Download CV",
  },

  more: {
    text: "Find me around the web ",
    links: [
      { label: "GitHub", href: "https://github.com/naet001" },
      { label: "X", href: "https://x.com/naet001" },
      { label: "Linkedin", href: "https://www.linkedin.com/in/nommoh-hayab-712abb440" }
    ],
  },
} as const;
