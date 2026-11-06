/**
 * Everything on the home page lives here. Edit this file, not the components.
 */
export const site = {
  name: "Your Name",
  role: "Design Engineer",
  metadataDescription: "One or two sentences for search results and link previews.",

  now: "A short paragraph about what you are working on right now.",

  projects: [
    {
      title: "Project One",
      description: "One line on what it is and why it exists.",
      href: "https://example.com",
    },
    {
      title: "Project Two",
      description: "Another short description.",
      href: "https://example.com",
    },
    {
      title: "Project Three",
      description: "Open source, side project, client work, anything.",
      href: "https://example.com",
    },
  ],

  more: {
    text: "More of my writing lives here, and more of my code lives there.",
    links: [
      { label: "GitHub", href: "https://github.com/your-username" },
      { label: "Mastodon", href: "https://mastodon.social/@you" },
    ],
  },
} as const;
