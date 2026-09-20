import type { MetadataRoute } from "next";
import { getFeaturedBook } from "@/data/books";
import { site } from "@/data/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const featured = getFeaturedBook();

  const professional = {
    url: site.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  };

  const seriesHome = locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "pt-br" ? 0.9 : 0.7,
  }));

  const book1 = locales.map((locale) => ({
    url: `${site.url}/${locale}/${featured.slug[locale]}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "pt-br" ? 0.8 : 0.6,
  }));

  return [professional, ...seriesHome, ...book1];
}
