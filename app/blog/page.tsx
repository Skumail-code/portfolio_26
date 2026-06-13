import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Clock, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { getAllPosts } from "@/lib/mdx";
import { blogCategories } from "@/lib/site";
import { categoryToSlug } from "@/lib/categories";
import { getCanonicalUrl } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Engineering Blog",
  description:
    "Technical writing on Golang, PostgreSQL, system design, and distributed systems.",
  alternates: {
    canonical: getCanonicalUrl("/blog"),
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-32">
      <header className="mb-16">
        <p className="mb-3 flex items-center gap-2 font-data text-xs uppercase tracking-widest text-accent">
          <Icon icon={BookOpen} size={14} />
          Blog
        </p>
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Engineering Blog
        </h1>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Deep dives into backend engineering, database optimization, and
          production system design.
        </p>
      </header>

      <div className="mb-12 flex flex-wrap gap-2">
        {blogCategories.map((category) => (
          <Link key={category} href={`/blog/category/${categoryToSlug(category)}`}>
            <Badge className="flex cursor-pointer items-center gap-1 transition-colors hover:border-border-hover hover:text-data">
              <Icon icon={FileText} size={11} />
              {category}
            </Badge>
          </Link>
        ))}
      </div>

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
            <div className="flex shrink-0 items-center gap-4 pl-7 sm:pl-0">
              <Badge>{post.category}</Badge>
              <span className="flex items-center gap-1 font-data text-xs text-muted-foreground">
                <Icon icon={Clock} size={11} />
                {post.readingTime}
              </span>
              <time
                dateTime={post.date}
                className="flex items-center gap-1 font-data text-xs text-muted-foreground"
              >
                <Icon icon={Calendar} size={11} />
                {formatDate(post.date)}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
