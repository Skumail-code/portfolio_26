import { Container } from "@/components/layout/Container";
import { WavePath } from "@/components/ui/WavePath";
import { Metrics } from "@/components/sections/Metrics";

export function Hero() {
  return (
    <section className="relative overflow-x-hidden pt-14">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-[min(70vw,520px)] w-[min(90vw,720px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,212,170,0.14)_0%,rgba(0,212,170,0.04)_40%,transparent_72%)]" />
      </div>

      <Container className="relative z-10 flex min-h-[min(78vh,680px)] flex-col justify-center overflow-visible py-20 sm:py-28">
        <WavePath className="text-foreground/20" />

        <div className="grid grid-cols-1 gap-10 pt-12 sm:grid-cols-12 sm:gap-8 sm:pt-14 lg:pt-16">
          <div className="sm:col-span-3">
            <p className="font-display text-base leading-snug text-muted-foreground sm:text-lg">
              Kumail Rizvi
            </p>
          </div>

          <div className="sm:col-span-9">
            <h1 className="font-display max-w-3xl text-2xl leading-[1.35] font-medium tracking-tight text-foreground sm:text-3xl lg:text-[2.5rem] lg:leading-[1.3]">
              I build the part of the product that fails expensively if I get it
              wrong.
            </h1>
          </div>
        </div>
      </Container>

      <Metrics />
    </section>
  );
}
