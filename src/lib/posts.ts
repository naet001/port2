import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export type Post = PostMeta & { source: string };

function files(): string[] {
  return fs.readdirSync(contentDir).filter((file) => file.endsWith(".mdx"));
}

function slugOf(file: string): string {
  return file.replace(/\.mdx$/, "");
}

function meta(slug: string): PostMeta {
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
  };
}

export function getPosts(): PostMeta[] {
  return files()
    .map((file) => meta(slugOf(file)))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getSlugs(): string[] {
  return files().map(slugOf);
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  return { ...meta(slug), source: content };
}
