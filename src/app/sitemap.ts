import type { MetadataRoute } from "next";
import { getFeaturedBook } from "@/data/books";
import { site } from "@/data/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const featured = getFeaturedBook();

  const home = locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "pt-br" ? 1 : 0.8,
  }));

  const book1 = locales.map((locale) => ({
    url: `${site.url}/${locale}/${featured.slug[locale]}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "pt-br" ? 0.9 : 0.7,
  }));

  return [...home, ...book1];
}
