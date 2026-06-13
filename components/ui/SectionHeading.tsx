import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  icon?: LucideIcon;
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  icon,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <p className="mb-3 flex items-center gap-2 font-data text-xs tracking-widest text-accent uppercase">
        {icon && <Icon icon={icon} size={14} />}
        {label}
      </p>
      <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
