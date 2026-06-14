import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://menofthemountain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/coaching", "/podcast", "/blog", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
