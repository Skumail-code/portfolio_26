import { User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="About"
          title="Backend engineer. Payments, property, accounting."
          description="3 years shipping production Go services. Currently MCA at IIT Patna & IIIT Ranchi."
          className="mx-auto max-w-3xl text-center"
          icon={User}
        />

        <div className="mx-auto max-w-3xl space-y-4 text-center leading-relaxed text-muted">
          <p>
            I write backend systems in Go and PostgreSQL. Four production
            platforms across payments, real estate, accounting, and society
            management, each with real money or real property on the line.
          </p>
          <p>
            My job is making sure the ledger balances, the payment doesn&apos;t
            double-charge, and the listing search doesn&apos;t time out at p95.
            Measurable outcomes, not resume bullets.
          </p>
          <p>
            I optimize for correctness first, latency second, cleverness never.
            Connection pools get sized before traffic spikes. Idempotency keys
            exist on every mutating endpoint. Deploys are boring on purpose.
          </p>
          <p>
            Based in Mumbai. Open to backend roles at product companies and
            startups, remote or hybrid.
          </p>
        </div>
      </Container>
    </section>
  );
}
