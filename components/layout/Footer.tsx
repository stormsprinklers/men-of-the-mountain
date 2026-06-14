import Link from "next/link";
import { Mountain, Mail, ExternalLink } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-deep mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-accent" strokeWidth={2.5} />
              <span className="font-heading text-base font-bold uppercase tracking-wider">
                Men of the Mountain
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground-muted hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.links.email}
                  className="flex items-center gap-2 text-sm text-foreground-muted hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.coach.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground-muted hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-white transition-colors font-medium"
                >
                  Book Free 30-Min Session →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mountain-divider mt-10 mb-6" />

        <p className="text-center text-xs text-foreground-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
