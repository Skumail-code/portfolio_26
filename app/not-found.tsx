import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
      <Icon icon={FileQuestion} size={40} className="text-muted-foreground" />
      <p className="mt-4 font-data text-xs uppercase tracking-widest text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-medium tracking-tight">
        Page not found
      </h1>
      <p className="mt-2 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        <Icon icon={ArrowLeft} size={14} />
        Back home
      </Link>
    </Container>
  );
}
