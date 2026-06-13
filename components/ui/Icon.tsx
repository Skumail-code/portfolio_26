import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type IconProps = {
  icon: LucideIcon;
  className?: string;
  size?: number;
};

export function Icon({ icon: LucideIcon, className, size = 16 }: IconProps) {
  return (
    <LucideIcon
      className={cn("shrink-0", className)}
      size={size}
      strokeWidth={1.75}
      aria-hidden
    />
  );
}
