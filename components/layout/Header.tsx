"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/site";
import { navIcons } from "@/lib/icons";
import { Icon } from "@/components/ui/Icon";
import { Container } from "./Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-medium tracking-tight text-foreground transition-colors hover:text-accent"
        >
          <Icon icon={navIcons.Systems} size={16} className="text-accent" />
          kumail.in
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navigation.map((item) => {
            const NavIcon = navIcons[item.name];
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 font-data text-xs text-muted-foreground transition-colors hover:text-accent"
              >
                {NavIcon && <Icon icon={NavIcon} size={13} />}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon icon={open ? X : Menu} size={20} />
        </button>
      </Container>

      {open && (
        <nav
          className="border-t border-border bg-background px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          {navigation.map((item) => {
            const NavIcon = navIcons[item.name];
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2.5 font-data text-xs text-muted-foreground transition-colors hover:text-accent"
              >
                {NavIcon && <Icon icon={NavIcon} size={14} />}
                {item.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
