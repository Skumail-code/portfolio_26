import { Container } from "@/components/layout/Container";
import { experience, type BulletPart } from "@/lib/site";

function BulletLine({ parts }: { parts: readonly BulletPart[] }) {
  return (
    <li className="flex gap-2.5 text-sm leading-relaxed text-zinc-500">
      <span className="shrink-0 text-zinc-400">•</span>
      <span>
        {parts.map((part, i) =>
          part.accent ? (
            <span key={i} className="font-data text-[#00D4AA]">
              {part.text}
            </span>
          ) : (
            <span key={i}>{part.text}</span>
          ),
        )}
      </span>
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 sm:py-32">
      <Container>
        <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          Experience
        </h2>

        <div className="mt-16 space-y-14">
          {experience.map((job) => (
            <article key={job.company}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-foreground">
                  <span className="font-semibold">{job.company}</span>
                  <span className="text-zinc-500"> · </span>
                  <span className="font-data text-sm text-zinc-500">
                    {job.period}
                  </span>
                </p>
              </div>
              <p className="mt-1 font-normal text-zinc-500">{job.role}</p>
              <ul className="mt-5 space-y-2">
                {job.highlights.map((parts, i) => (
                  <BulletLine key={i} parts={parts} />
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
