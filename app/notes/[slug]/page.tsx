import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXContent } from "@/components/mdx/MDXContent";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { getAllNoteSlugs, getNoteBySlug } from "@/lib/mdx";
import { engineeringNotes } from "@/lib/site";
import { getCanonicalUrl } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  const meta = engineeringNotes.find((n) => n.slug === slug);
  if (!note || !meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: getCanonicalUrl(`/notes/${slug}`),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: getCanonicalUrl(`/notes/${slug}`),
    },
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  const meta = engineeringNotes.find((n) => n.slug === slug);
  if (!note || !meta) notFound();

  return (
    <Container as="article" className="py-32">
      <Link
        href="/notes"
        className="mb-12 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        <Icon icon={ArrowLeft} size={14} />
        Back to notes
      </Link>

      <header className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <time
            dateTime={note.date}
            className="flex items-center gap-1 font-data text-xs text-muted-foreground"
          >
            <Icon icon={Calendar} size={11} />
            {formatDate(note.date)}
          </time>
          <span className="flex items-center gap-1 font-data text-xs text-muted-foreground">
            <Icon icon={Clock} size={11} />
            {note.readingTime}
          </span>
        </div>
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{meta.description}</p>
      </header>

      <div className="prose max-w-none">
        <MDXContent source={note.content} />
      </div>
    </Container>
  );
}
