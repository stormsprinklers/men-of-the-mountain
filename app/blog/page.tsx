import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { blogCopy } from "@/content/copy";
import { blogPosts } from "@/content/blog-posts";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "My Lunch Break — honest reflections on faith, leadership, manhood, and personal growth from John Baker.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title={blogCopy.hero.title} subtitle={blogCopy.hero.subtitle} />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-foreground-muted text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            {blogCopy.description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.title} hover className="flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-widest text-accent font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide mb-2 flex-1">
                  {post.title}
                </h3>
                <p className="text-xs text-foreground-muted mb-3">{post.date}</p>
                <p className="text-foreground-muted text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent hover:text-white transition-colors"
                >
                  Read on WordPress
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href={siteConfig.links.blog} external variant="outline" size="lg">
              Visit Full Blog
            </Button>
          </div>
        </div>
      </section>

      <CTABand showForm={false} />
    </>
  );
}
