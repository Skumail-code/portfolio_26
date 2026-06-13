import { Network } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/layout/Container";
import { architectureCardIcons } from "@/lib/icons";

const cardLabels = ["Write path", "Source of truth", "Failure mode"] as const;

const cardCopy = [
  "Idempotency key checked in Redis before any DB write. Duplicate requests return cached response.",
  "PostgreSQL ledger table. No balance stored in cache. Every read reconciles against ledger.",
  "Webhook dispatcher retries with exponential backoff. Dead letters go to manual review queue after 5 attempts.",
] as const;

const primaryFlow = [
  "Client",
  "API Gateway",
  "OnePay Service",
] as const;

const supportingNodes = [
  {
    title: "Redis",
    description: "Idempotency keys and cached duplicate responses.",
  },
  {
    title: "PostgreSQL",
    description: "Ledger and transactions. The only source of truth.",
    emphasis: true,
  },
  {
    title: "Webhook Dispatcher",
    description: "Async delivery with retries and dead-letter fallback.",
  },
] as const;

export function Architecture() {
  return (
    <section id="architecture" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Architecture"
          title="OnePay — payment processing"
          description="Most complex system in the portfolio. Idempotent writes, ledger as source of truth, async reconciliation."
          icon={Network}
        />

        <div className="border border-border bg-surface p-5 sm:p-6">
          <div className="grid gap-4">
            <div className="grid gap-3 lg:grid-cols-3">
              {primaryFlow.map((node, index) => (
                <div
                  key={node}
                  className="relative border border-border bg-background px-4 py-5 text-center"
                >
                  <p className="font-data text-[10px] tracking-widest text-muted-foreground uppercase">
                    {index === 2 ? "Core service" : "Ingress"}
                  </p>
                  <h3 className="mt-2 font-display text-base font-medium text-foreground sm:text-lg">
                    {node}
                  </h3>
                  {index < primaryFlow.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="mt-3 hidden font-data text-xs text-accent lg:block"
                    >
                      ----&gt;
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="mx-auto hidden h-8 w-px bg-border lg:block"
            />

            <div className="grid gap-3 lg:grid-cols-3">
              {supportingNodes.map((node) => (
                <div
                  key={node.title}
                  className="border border-border bg-background px-4 py-5"
                >
                  <p className="font-data text-[10px] tracking-widest text-muted-foreground uppercase">
                    {node.emphasis ? "Source of truth" : "Supporting system"}
                  </p>
                  <h3 className="mt-2 font-display text-base font-medium text-foreground sm:text-lg">
                    {node.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {node.description}
                  </p>
                </div>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="mx-auto hidden h-8 w-px bg-border lg:block"
            />

            <div className="mx-auto max-w-sm border border-border bg-background px-4 py-5 text-center">
              <p className="font-data text-[10px] tracking-widest text-muted-foreground uppercase">
                Scheduled integrity check
              </p>
              <h3 className="mt-2 font-display text-base font-medium text-foreground sm:text-lg">
                Reconciliation Worker
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Cron-driven verification that matches payment state, ledger
                entries, and downstream delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {cardLabels.map((label, i) => {
            const CardIcon = architectureCardIcons[i];
            return (
              <div key={label} className="border border-border bg-background p-4">
                <p className="flex items-center gap-1.5 font-data text-[10px] tracking-wider text-muted-foreground uppercase">
                  <Icon icon={CardIcon} size={12} className="text-accent" />
                  {label}
                </p>
                <p className="mt-2 text-sm text-muted">{cardCopy[i]}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
