import { AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/layout/Container";
import { lessonsLearned } from "@/lib/site";

export function Lessons() {
  return (
    <section id="lessons" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Postmortems"
          title="What I've learned the hard way"
          icon={AlertTriangle}
        />

        <ul className="space-y-6">
          {lessonsLearned.map((lesson, i) => (
            <li key={lesson} className="flex gap-4">
              <span className="flex items-center gap-2 font-data shrink-0 text-sm text-accent">
                <Icon icon={AlertTriangle} size={14} />
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-muted leading-relaxed">{lesson}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
