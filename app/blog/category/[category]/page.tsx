import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { slugToCategory, categoryToSlug } from "@/lib/categories";
import { getPostsByCategory } from "@/lib/mdx";
import { blogCategories } from "@/lib/site";
import { getCanonicalUrl } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: categoryToSlug(category),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = slugToCategory(categorySlug);
  if (!category) return {};

  return {
    title: `${category} — Engineering Blog`,
    description: `Articles about ${category} by Kumail Rizvi.`,
    alternates: {
      canonical: getCanonicalUrl(`/blog/category/${categorySlug}`),
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = slugToCategory(categorySlug);
  if (!category) notFound();

  const posts = getPostsByCategory(category);

  return (
    <Container className="py-32">
      <Link
        href="/blog"
        className="mb-12 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        <Icon icon={ArrowLeft} size={14} />
        Back to blog
      </Link>

      <header className="mb-16">
        <Badge className="mb-4">{category}</Badge>
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {category}
        </h1>
        <p className="mt-4 text-muted">
          {posts.length} article{posts.length !== 1 ? "s" : ""}
        </p>
      </header>

      <div className="space-y-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 border-b border-border py-6 transition-colors hover:border-border-hover sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex gap-3">
              <Icon
                icon={FileText}
                size={16}
                className="mt-1 shrink-0 text-muted-foreground group-hover:text-accent"
              />
              <div>
                <h2 className="font-display font-medium text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {post.description}
                </p>
              </div>
            </div>
            <time
              dateTime={post.date}
              className="flex shrink-0 items-center gap-1 pl-7 font-data text-xs text-muted-foreground sm:pl-0"
            >
              <Icon icon={Calendar} size={11} />
              {formatDate(post.date)}
            </time>
          </Link>
        ))}
      </div>
    </Container>
  );
}
