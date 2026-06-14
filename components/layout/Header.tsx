"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <Mountain className="h-7 w-7 text-accent shrink-0" strokeWidth={2.5} />
          <span className="font-heading text-lg font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors hidden sm:block">
            Men of the Mountain
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-foreground-muted hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={siteConfig.links.calendly}
            external
            size="sm"
            className="hidden sm:inline-flex"
          >
            Book Free Session
          </Button>

          <button
            type="button"
            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-border",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <nav className="flex flex-col px-4 py-4 gap-1 bg-background-deep">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium uppercase tracking-wide text-foreground-muted hover:text-white hover:bg-white/5 rounded-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 px-4">
            <Button
              href={siteConfig.links.calendly}
              external
              size="md"
              className="w-full"
            >
              Book Free Session
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
