import { Container } from "@/components/layout/Container";
import { education } from "@/lib/site";

export function Education() {
  return (
    <section id="formation" className="border-t border-border py-24 sm:py-32">
      <Container>
        <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          Formation
        </h2>

        <div className="mt-16 space-y-10">
          {education.map((entry) => (
            <article key={entry.degree}>
              <p className="text-foreground">
                <span className="font-semibold">{entry.degree}</span>
              </p>
              <p className="mt-1 font-normal text-zinc-500">
                <span>{entry.institution}</span>
                <span className="text-zinc-500"> · </span>
                <span className="font-data text-sm text-zinc-500">
                  {entry.period}
                </span>
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
