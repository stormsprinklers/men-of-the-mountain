import { Mic2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { homeCopy } from "@/content/copy";
import { siteConfig } from "@/content/site";
import { Card } from "@/components/ui/Card";

export function PodcastTeaser() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card hover className="flex flex-col md:flex-row items-center gap-8 p-8">
          <div className="flex items-center justify-center w-16 h-16 gradient-accent rounded-sm shrink-0 card-shadow">
            <Mic2 className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-2">
              {homeCopy.podcastTeaser.title}
            </h3>
            <p className="text-foreground-muted leading-relaxed">
              {homeCopy.podcastTeaser.description}
            </p>
          </div>
          <Link
            href="/podcast"
            className="inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-accent hover:text-white transition-colors shrink-0"
          >
            {homeCopy.podcastTeaser.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      </div>
    </section>
  );
}

export function BlogTeaser() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card hover className="flex flex-col md:flex-row items-center gap-8 p-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide mb-2">
              {homeCopy.blogTeaser.title}
            </h3>
            <p className="text-foreground-muted leading-relaxed">
              {homeCopy.blogTeaser.description}
            </p>
          </div>
          <a
            href={siteConfig.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-accent hover:text-white transition-colors shrink-0"
          >
            {homeCopy.blogTeaser.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Card>
      </div>
    </section>
  );
}
