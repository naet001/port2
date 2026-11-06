import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { getPost, getSlugs } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} target={props.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" />
  ),
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-[42rem] px-6 py-14 sm:py-28">
      <Link href="/" className="row-link -ml-3 inline-block text-sm text-muted">
        ← Index
      </Link>

      <header className="mt-10">
        <h1 className="text-2xl font-medium tracking-tight">{post.title}</h1>
        <p className="mt-2 text-sm text-muted">{post.description}</p>
      </header>

      <article className="prose prose-neutral dark:prose-invert mt-10 max-w-none prose-headings:font-medium prose-a:text-ink prose-p:leading-7">
        <MDXRemote
          source={post.source}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
            },
          }}
          components={components}
        />
      </article>
    </main>
  );
}
