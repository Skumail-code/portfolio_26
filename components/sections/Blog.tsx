import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/layout/Container";
import { getAllPosts } from "@/lib/mdx";
import { categoryToSlug } from "@/lib/categories";
import { blogCategories } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export function Blog() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <section id="blog" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Engineering Blog"
          title="Writeups and postmortems"
          description="Golang, PostgreSQL, system design. Includes short engineering notes on API design, caching, and deployments."
          icon={BookOpen}
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${categoryToSlug(category)}`}
              className="flex items-center gap-1 font-data border border-border px-2.5 py-0.5 text-xs text-muted-foreground transition-colors hover:border-border-hover hover:text-data"
            >
              <Icon icon={FileText} size={11} />
              {category}
            </Link>
          ))}
        </div>

        <div className="divide-y divide-border">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-3">
                <Icon
                  icon={FileText}
                  size={16}
                  className="mt-1 shrink-0 text-muted-foreground group-hover:text-accent"
                />
                <div>
                  <h3 className="font-display font-medium text-foreground transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {post.description}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-4 pl-7 sm:pl-0">
                <span className="font-data text-xs text-accent">
                  {post.category}
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

        <div className="mt-8 flex gap-6">
          <Link
            href="/blog"
            className="flex items-center gap-1 font-data text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            all posts
            <Icon icon={ArrowRight} size={14} />
          </Link>
          <Link
            href="/notes"
            className="flex items-center gap-1 font-data text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            engineering notes
            <Icon icon={ArrowRight} size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
