import type { Metadata } from "next";
import Image from "next/image";
import { podcastCopy } from "@/content/copy";
import { podcastEpisodes } from "@/content/podcast-episodes";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { EpisodeCard } from "@/components/podcast/EpisodeCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "Men of the Mountain Podcast — truth, hope, and transformation for Christian men facing life's greatest challenges.",
};

export default function PodcastPage() {
  return (
    <>
      <PageHero title={podcastCopy.hero.title} subtitle={podcastCopy.hero.subtitle} />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 card-shadow-lg border border-border rounded-sm overflow-hidden shrink-0">
                <Image
                  src="/images/podcast-art.jpg"
                  alt="Men of the Mountain Podcast artwork"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <p className="text-foreground-muted text-lg leading-relaxed mb-8">
                {podcastCopy.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.links.applePodcasts} external size="lg">
                  Listen on Apple Podcasts
                </Button>
                <Button href={siteConfig.links.spotify} external variant="outline" size="lg">
                  Listen on Spotify
                </Button>
              </div>
              <p className="mt-4 text-sm text-foreground-muted">
                5.0 rating · 15 episodes · Updated weekly
              </p>
            </div>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight mb-8">
            Featured Episodes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcastEpisodes.map((ep) => (
              <EpisodeCard key={ep.number} {...ep} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to go deeper?"
        subtitle={podcastCopy.cta}
        showForm={false}
      />
    </>
  );
}
