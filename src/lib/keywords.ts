/**
 * Centralized SEO keywords configuration for the portfolio site.
 * Used for meta tags, content optimization, and search engine visibility.
 */

import { keywords as siteKeywords } from "@/site.config";

// Flatten all keywords into a single array for meta tags
export function getAllKeywords(): string[] {
  const allKeywords: string[] = [];

  // Primary roles
  allKeywords.push(...siteKeywords.primaryRole);

  // Technical expertise
  allKeywords.push(...siteKeywords.technicalExpertise.ai);
  allKeywords.push(...siteKeywords.technicalExpertise.backend);
  allKeywords.push(...siteKeywords.technicalExpertise.languages);

  // Projects
  allKeywords.push(...siteKeywords.projects);

  // Industry terms
  allKeywords.push(...siteKeywords.industry);

  // Geographic
  allKeywords.push(...siteKeywords.geographic);

  // Additional high-value keywords
  const additionalKeywords = [
    "Backend Development",
    "AI Solutions",
    "Web3 Solutions",
    "Blockchain Development",
    "API Design",
    "Microservices",
    "Cloud Infrastructure",
    "DevOps",
    "Software Architecture",
    "TypeScript Development",
    "Rust Development",
    "Open Source",
    "GitHub",
    "Freelance Developer",
    "Contract Developer",
    "Tech Consultant",
    "AI Consulting",
    "Web3 Consulting"
  ];
  allKeywords.push(...additionalKeywords);

  // Remove duplicates and sort alphabetically
  return [...new Set(allKeywords)].sort();
}

// Get keywords as a comma-separated string for meta tags
export function getKeywordsString(): string {
  return getAllKeywords().join(", ");
}

// Get keywords grouped by category for structured data
export function getStructuredKeywords() {
  return {
    roles: siteKeywords.primaryRole,
    ai: siteKeywords.technicalExpertise.ai,
    backend: siteKeywords.technicalExpertise.backend,
    languages: siteKeywords.technicalExpertise.languages,
    projects: siteKeywords.projects,
    industry: siteKeywords.industry,
    geographic: siteKeywords.geographic
  };
}

// Export the raw keywords for direct use
export { siteKeywords as keywords };
