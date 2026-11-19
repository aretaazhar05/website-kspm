import type { MetadataRoute } from "next";
import { publishedArticles } from "@content/03-ARTICLES/articles";
import { events } from "@content/05-EVENTS/events";
import { siteUrl as baseUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/tentang",
    "/pengurus",
    "/program-kerja",
    "/kegiatan",
    "/artikel",
    "/galeri",
    "/kontak",
    "/bergabung",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/kegiatan/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = publishedArticles.map((article) => ({
    url: `${baseUrl}/artikel/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...eventRoutes, ...articleRoutes];
}
