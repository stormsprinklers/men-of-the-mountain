import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Pillars } from "@/components/sections/Pillars";
import { Testimonials } from "@/components/sections/Testimonials";
import { PodcastTeaser, BlogTeaser } from "@/components/sections/Teasers";
import { CTABand } from "@/components/sections/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Testimonials />
      <Pillars />
      <PodcastTeaser />
      <BlogTeaser />
      <CTABand />
    </>
  );
}
