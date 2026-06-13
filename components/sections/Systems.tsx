import { Activity, AlertTriangle, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/layout/Container";
import { systemDomainIcons } from "@/lib/icons";
import { systems } from "@/lib/site";

export function Systems() {
  return (
    <section id="systems" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Systems"
          title="Production infrastructure"
          description="4 domains. All live. Each one has a clear blast radius if it goes down."
          icon={Layers}
        />

        <div className="grid gap-4">
          {systems.map((system) => {
            const DomainIcon = systemDomainIcons[system.domain];
            return (
              <article
                key={system.name}
                className="border border-border bg-surface p-5 transition-colors hover:border-border-hover sm:p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  {system.live && (
                    <span className="flex items-center gap-1.5 font-data text-xs text-accent">
                      <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                      LIVE
                    </span>
                  )}
                  {DomainIcon && (
                    <Icon icon={DomainIcon} size={18} className="text-accent" />
                  )}
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {system.name}
                  </h3>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  <div>
                    <p className="flex items-center gap-1 font-data text-[10px] tracking-wider text-muted-foreground uppercase">
                      <Icon icon={DomainIcon ?? Layers} size={10} />
                      Domain
                    </p>
                    <p className="mt-0.5 font-data text-sm text-data">
                      {system.domain}
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 font-data text-[10px] tracking-wider text-muted-foreground uppercase">
                      <Icon icon={Activity} size={10} />
                      Load
                    </p>
                    <p className="mt-0.5 font-data text-sm text-data">
                      {system.load}
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1 font-data text-[10px] tracking-wider text-muted-foreground uppercase">
                      <Icon icon={Layers} size={10} />
                      Stack
                    </p>
                    <p className="mt-0.5 font-data text-sm text-data">
                      {system.stack.join(" · ")}
                    </p>
                  </div>
                </div>

                <p className="mt-4 flex gap-2 text-sm leading-relaxed text-muted">
                  <Icon
                    icon={AlertTriangle}
                    size={14}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span>
                    <span className="font-data text-xs text-muted-foreground">
                      What breaks if this goes down:{" "}
                    </span>
                    {system.failureImpact}
                  </span>
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
