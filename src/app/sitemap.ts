import type { MetadataRoute } from "next";
import { site } from "@/site.config";
import { getPosts } from "@/lib/posts";

function toDate(value: string): Date {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().map((post) => ({
    url: `${site.url}/writing/${post.slug}`,
    lastModified: toDate(post.date),
  }));

  return [
    {
      url: site.url,
      lastModified: new Date(),
    },
    ...posts,
  ];
}
