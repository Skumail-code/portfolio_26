import { FileDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/layout/Container";

export function Resume() {
  return (
    <section id="resume" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Resume"
          title="PDF download"
          description="1-page summary. Experience, systems, stack."
          icon={FileDown}
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex h-11 items-center gap-2 border border-accent bg-accent-dim px-6 font-data text-sm text-accent transition-colors hover:bg-accent hover:text-white"
          >
            <Icon icon={FileDown} size={16} />
            download_resume.pdf
          </a>
          <p className="font-data text-xs text-muted-foreground">
            last_updated: 2025-06
          </p>
        </div>
      </Container>
    </section>
  );
}
