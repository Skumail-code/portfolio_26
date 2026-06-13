import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { StatCounter } from "@/components/ui/StatCounter";
import { metricIcons } from "@/lib/icons";
import { metrics } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

export function Metrics() {
  return (
    <section className="border-t border-border pb-24 sm:pb-32">
      <Container>
        <p className="mb-6 flex items-center gap-2 font-data text-xs tracking-widest text-muted-foreground uppercase">
          <Icon icon={Activity} size={14} className="text-accent" />
          system_metrics
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {metrics.map((metric) => {
            const MetricIcon = metricIcons[metric.key];
            return (
              <div
                key={metric.key}
                className="border border-border bg-surface p-4 transition-colors hover:border-border-hover"
              >
                <div className="flex items-center gap-1.5">
                  {MetricIcon && (
                    <Icon
                      icon={MetricIcon}
                      size={12}
                      className="text-muted-foreground"
                    />
                  )}
                  <p className="font-data text-[10px] tracking-wider text-muted-foreground uppercase">
                    {metric.key}
                  </p>
                </div>
                <p className="mt-2 font-data text-lg text-data">
                  {metric.animate && metric.value === "3+" ? (
                    <span className={cn(metric.cursor && "cursor-blink")}>
                      <StatCounter value={3} suffix="+" />
                    </span>
                  ) : metric.animate && metric.value === "3" ? (
                    <StatCounter value={3} />
                  ) : (
                    metric.value
                  )}
                  {metric.unit && (
                    <span className="ml-1 text-xs text-muted-foreground">
                      {metric.unit}
                    </span>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
