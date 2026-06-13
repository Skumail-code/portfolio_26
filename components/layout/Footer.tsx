import Link from "next/link";
import { Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { contactIcons } from "@/lib/icons";
import { Icon } from "@/components/ui/Icon";
import { SystemClock } from "@/components/ui/SystemClock";
import { Container } from "./Container";

const footerLinks = [
  { name: "GitHub", href: siteConfig.author.github, label: "GitHub" },
  { name: "LinkedIn", href: siteConfig.author.linkedin, label: "LinkedIn" },
  { name: "Email", href: `mailto:${siteConfig.author.email}`, label: siteConfig.author.email },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <p className="font-data text-xs text-muted-foreground">
            © {year} {siteConfig.name}
          </p>
          <div className="flex items-center gap-1.5">
            <Icon icon={Clock} size={12} className="text-accent" />
            <SystemClock />
          </div>
        </div>
        <div className="flex items-center gap-5">
          {footerLinks.map((link) => {
            const LinkIcon = contactIcons[link.name];
            return (
              <Link
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1.5 font-data text-xs text-muted-foreground transition-colors hover:text-accent"
              >
                {LinkIcon && <Icon icon={LinkIcon} size={14} />}
                {link.label}
              </Link>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
