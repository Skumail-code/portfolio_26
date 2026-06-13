import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { engineeringNotes } from "@/lib/site";
import { getAllNotes } from "@/lib/mdx";
import { getCanonicalUrl } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Engineering Notes",
  description:
    "Short technical writeups on API design, PostgreSQL, authentication, caching, and more.",
  alternates: {
    canonical: getCanonicalUrl("/notes"),
  },
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <Container className="py-32">
      <header className="mb-16">
        <p className="mb-3 flex items-center gap-2 font-data text-xs uppercase tracking-widest text-accent">
          <Icon icon={BookOpen} size={14} />
          Notes
        </p>
        <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Engineering Notes
        </h1>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Concise technical writeups on patterns and decisions from production
          work.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {engineeringNotes.map((note) => {
          const mdxNote = notes.find((n) => n.slug === note.slug);
          return (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="group flex flex-col border border-border bg-surface p-6 transition-colors hover:border-border-hover"
            >
              <div className="flex items-center gap-2">
                <Icon
                  icon={FileText}
                  size={16}
                  className="text-accent"
                />
                <h2 className="font-display font-medium text-foreground transition-colors group-hover:text-accent">
                  {note.title}
                </h2>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {note.description}
              </p>
              {mdxNote && (
                <time
                  dateTime={mdxNote.date}
                  className="mt-4 flex items-center gap-1 font-data text-xs text-muted-foreground"
                >
                  <Icon icon={Calendar} size={11} />
                  {formatDate(mdxNote.date)}
                </time>
              )}
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
