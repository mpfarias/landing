import type { Locale } from "@/i18n/routing";

export const publicationIds = ["ia-pequenos-negocios"] as const;
export type PublicationId = (typeof publicationIds)[number];

export type PublicationStatus = "available" | "coming-soon" | "draft";

export type PublicationDefinition = {
  id: PublicationId;
  featured: boolean;
  year: number | null;
  platform: string | null;
  language: Locale;
  status: PublicationStatus;
  covers: Record<Locale, string | null>;
  purchaseUrl: string | null;
  detailsUrl: string | null;
};

export const publications: Record<PublicationId, PublicationDefinition> = {
  "ia-pequenos-negocios": {
    id: "ia-pequenos-negocios",
    featured: true,
    year: null,
    platform: null,
    language: "pt",
    status: "available",
    covers: {
      pt: "/images/publications/ia-pequenos-negocios-pt.jpg",
      en: "/images/publications/ia-pequenos-negocios-en.jpg",
      es: "/images/publications/ia-pequenos-negocios-es.jpg",
    },
    purchaseUrl: null,
    detailsUrl: null,
  },
};

export function isActivePublicationHref(
  href: string | null | undefined,
): href is string {
  if (typeof href !== "string") return false;
  const value = href.trim();
  return value.length > 0 && value !== "#";
}

export function getPublicationCover(
  publication: PublicationDefinition,
  locale: Locale,
): string | null {
  return (
    publication.covers[locale] ??
    publication.covers[publication.language] ??
    null
  );
}

export function getFeaturedPublications(): PublicationDefinition[] {
  return publicationIds
    .map((id) => publications[id])
    .filter((item) => item.featured && item.status !== "draft");
}
