import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXContent } from "@/components/mdx/MDXContent";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import { getArticleJsonLd, getCanonicalUrl } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: getCanonicalUrl(`/blog/${slug}`),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Kumail Rizvi"],
      url: getCanonicalUrl(`/blog/${slug}`),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = getArticleJsonLd(post);

  return (
    <Container as="article" className="py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/blog"
        className="mb-12 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        <Icon icon={ArrowLeft} size={14} />
        Back to blog
      </Link>

      <header className="mb-12">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Badge>{post.category}</Badge>
          <time
            dateTime={post.date}
            className="flex items-center gap-1 font-data text-xs text-muted-foreground"
          >
            <Icon icon={Calendar} size={11} />
            {formatDate(post.date)}
          </time>
          <span className="flex items-center gap-1 font-data text-xs text-muted-foreground">
            <Icon icon={Clock} size={11} />
            {post.readingTime}
          </span>
        </div>
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.description}</p>
      </header>

      <div className="prose max-w-none">
        <MDXContent source={post.content} />
      </div>
    </Container>
  );
}
