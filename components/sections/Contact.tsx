import Link from "next/link";
import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";
import { contactIcons } from "@/lib/icons";

const links = [
  {
    name: "GitHub",
    href: siteConfig.author.github,
    handle: "github.com/Skumail-code",
  },
  {
    name: "LinkedIn",
    href: siteConfig.author.linkedin,
    handle: "linkedin.com/in/kumail-rizvi-2772071a0",
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.author.email}`,
    handle: siteConfig.author.email,
  },
] as const;

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          label="Contact"
          title="Reach me directly"
          description="Backend engineering roles at product companies and startups. Mumbai-based, remote-friendly. Or just say hi if you happen to bump into me."
          icon={Mail}
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {links.map((link) => {
            const LinkIcon = contactIcons[link.name];
            if (link.name === "Email") {
              return (
                <div
                  key={link.name}
                  className="border border-border bg-surface p-5 transition-colors hover:border-border-hover"
                >
                  <div className="flex items-center gap-2">
                    {LinkIcon && (
                      <Icon icon={LinkIcon} size={18} className="text-accent" />
                    )}
                    <h3 className="font-display font-medium text-foreground">
                      {link.name}
                    </h3>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Link
                      href={link.href}
                      className="font-data text-xs text-data transition-colors hover:text-accent"
                    >
                      {link.handle}
                    </Link>
                    <CopyEmailButton email={siteConfig.author.email} />
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-border bg-surface p-5 transition-colors hover:border-border-hover"
              >
                <div className="flex items-center gap-2">
                  {LinkIcon && (
                    <Icon
                      icon={LinkIcon}
                      size={18}
                      className="text-accent transition-colors group-hover:text-foreground"
                    />
                  )}
                  <h3 className="font-display font-medium text-foreground transition-colors group-hover:text-accent">
                    {link.name}
                  </h3>
                </div>
                <p className="mt-2 font-data text-xs text-data">{link.handle}</p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
