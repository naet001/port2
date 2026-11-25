/**
 * Everything on the home page lives here. Edit this file, not the components.
 */

export type Project = {
  title: string;
  description: string;
  /** Omitted for projects without a public page to link to. */
  href?: string;
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export type Education = {
  credential: string;
  org: string;
  period: string;
};

export type Site = {
  name: string;
  role: string;
  url: string;
  location: string;
  metadataDescription: string;
  now: string;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  cv: { href: string; download: string; label: string };
  more: { text: string; links: { label: string; href: string }[] };
};

// SEO Keywords Configuration
export const keywords = {
  primaryRole: [
    "Backend Engineer",
    "Backend Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "API Developer",
    "AI Engineer",
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
      "Model Evaluation",
      "LLM Output Evaluation",
      "AI-Powered Developer Tools",
      "Applied AI",
      "AI Agent Development",
      "Machine Learning Engineering"
    ],
    backend: [
      "API Development",
      "Scalable APIs",
      "RESTful APIs",
      "GraphQL",
      "Payment APIs",
      "Webhook Processing",
      "Idempotent Processing",
      "Subscription Billing",
      "Authentication and Authorization",
      "Background Job Processing",
      "Database Optimization",
      "Caching Strategies"
    ],
    languages: [
      "TypeScript",
      "JavaScript",
      "Go",
      "Golang",
      "SQL",
      "Node.js",
      "NestJS",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Docker"
    ]
  },
  projects: [
    "PayFlow API",
    "Payment Backend",
    "Subscription Billing",
    "Judgment Pack Gateway",
    "rem",
    "Rust terminal coding agent",
    "mnemos",
    "shared memory layer for AI agents",
    "Coding Agents",
    "AI Memory Systems",
    "Context Persistence",
    "Multi-LLM Support"
  ],
  industry: [
    "Payments",
    "Fintech Infrastructure",
    "Predictive Maintenance Systems",
    "Production-Grade Systems",
    "High Availability",
    "Performance Optimization",
    "Deployment Reliability",
    "CI/CD Pipelines"
  ],
  geographic: [
    "Nigeria",
    "Minna",
    "African Developer",
    "West Africa",
    "Remote"
  ]
} as const;

export const site: Site = {
  name: "Nommoh Hayab",
  role: "Backend Engineer",
  url: "https://hnommoh.vercel.app",
  location: "Minna, Nigeria",
  metadataDescription:
    "Nommoh Hayab is a Backend Engineer based in Minna, Nigeria, building production REST APIs and services with TypeScript, JavaScript, and Go. Experienced with NestJS, Express, PostgreSQL, Prisma, Redis, and Docker, plus LLM integrations including RAG and model-output evaluation workflows.",

  now: "I’m a Backend Engineer with 2 years of experience building production APIs and services. Most recently at Uptime Tech I shipped TypeScript REST APIs with NestJS, Express, PostgreSQL, and Prisma, and built retrieval-augmented generation and model-evaluation workflows for LLM-powered features. Before that I maintained Node.js payment services at Kat’s & Co, and I still take on freelance work building Go and Node.js APIs. Based in Minna, Nigeria, working remotely with global clients.",

  projects: [
    {
      title: "PayFlow API",
      description: "A payment and subscription backend with Paystack, idempotent webhook handling, plan-based access control, and subscription lifecycle management.",
    },
    {
      title: "Distributed Payment Orchestration Platform",
      description: "A distributed platform for orchestrating payment workflows with Go, Gin, GORM, and PostgreSQL. Clean architecture with dependency injection, idempotent processing, and Dockerized deployment.",
      href: "https://github.com/naet001/distributed-payment-orchestration-platform",
    },
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
  ],

  experiences: [
    {
      role: "Backend Engineer",
      org: "Uptime Tech · Lagos, Nigeria",
      period: "Apr 2026 – Sep 2026",
      description: "Built TypeScript REST APIs for platform features and internal dashboards with NestJS, Express, PostgreSQL, and Prisma, and implemented RAG and model-output evaluation workflows for LLM-powered product features. Developed predictive-maintenance services and API routes with pagination, filtering, and transactional handling, backed by Vitest tests and Dockerized deploys through GitHub Actions.",
    },
    {
      role: "Backend Engineer",
      org: "Kat’s & Co · Remote, Canada",
      period: "Feb 2025 – Mar 2026",
      description: "Maintained Node.js backend services for payment and transaction workflows, handling transaction state, idempotent processing, and authentication. Added Redis caching and BullMQ background jobs, delivered TypeScript APIs with authorization and Swagger/OpenAPI documentation, and built Docker-based CI/CD pipelines on Linux.",
    },
    {
      role: "Backend Engineer",
      org: "Freelance · Lagos, Nigeria",
      period: "2024 – Present",
      description: "Built Node.js and Go APIs for client projects, including PostgreSQL data models, third-party integrations, and JWT authentication. Optimized database queries to improve system response times and deployed Dockerized services on Linux servers.",
    },
  ],

  education: [
    {
      credential: "B.Sc. Computer Science",
      org: "Federal University of Technology, Minna",
      period: "2024",
    },
  ],

  cv: {
    href: "/Hayab_Nommoh_Isaac_Resume.docx",
    download: "Hayab Nommoh Isaac Resume.docx",
    label: "Download CV",
  },

  more: {
    text: "Find me around the web ",
    links: [
      { label: "GitHub", href: "https://github.com/naet001" },
      { label: "X", href: "https://x.com/naet001" },
      { label: "Linkedin", href: "https://www.linkedin.com/in/nommoh-hayab-712abb440" },
      { label: "Email", href: "mailto:hnommoh@gmail.com" }
    ],
  },
};
