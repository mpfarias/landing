import type { Locale } from "@/i18n/routing";

export const publicationIds = [
  "ia-pequenos-negocios",
  "transforme-seu-pequeno-negocio-com-ia",
  "gerencie-seu-pequeno-negocio-com-ia",
  "crie-seu-pequeno-negocio-com-ia",
] as const;

export type PublicationId = (typeof publicationIds)[number];
export type PublicationStatus = "available" | "in-development" | "draft";
export type PublicationStep = "use" | "transform" | "manage" | "create";

export type PublicationDefinition = {
  id: PublicationId;
  volume: number;
  step: PublicationStep;
  featured: boolean;
  language: Locale;
  status: PublicationStatus;
  covers: Record<Locale, string | null>;
  purchaseUrl: string | null;
};

export const publications: Record<PublicationId, PublicationDefinition> = {
  "ia-pequenos-negocios": {
    id: "ia-pequenos-negocios",
    volume: 1,
    step: "use",
    featured: true,
    language: "pt",
    status: "available",
    covers: {
      pt: "/images/publications/ia-pequenos-negocios-pt.jpg",
      en: "/images/publications/ia-pequenos-negocios-en.jpg",
      es: "/images/publications/ia-pequenos-negocios-es.jpg",
    },
    purchaseUrl: null,
  },
  "transforme-seu-pequeno-negocio-com-ia": {
    id: "transforme-seu-pequeno-negocio-com-ia",
    volume: 2,
    step: "transform",
    featured: false,
    language: "pt",
    status: "in-development",
    covers: {
      pt: "/images/publications/transforme-seu-pequeno-negocio-com-ia-pt.jpg",
      en: null,
      es: null,
    },
    purchaseUrl: null,
  },
  "gerencie-seu-pequeno-negocio-com-ia": {
    id: "gerencie-seu-pequeno-negocio-com-ia",
    volume: 3,
    step: "manage",
    featured: false,
    language: "pt",
    status: "in-development",
    covers: {
      pt: "/images/publications/gerencie-seu-pequeno-negocio-com-ia-pt.jpg",
      en: null,
      es: null,
    },
    purchaseUrl: null,
  },
  "crie-seu-pequeno-negocio-com-ia": {
    id: "crie-seu-pequeno-negocio-com-ia",
    volume: 4,
    step: "create",
    featured: false,
    language: "pt",
    status: "in-development",
    covers: {
      pt: "/images/publications/crie-seu-pequeno-negocio-com-ia-pt.jpg",
      en: null,
      es: null,
    },
    purchaseUrl: null,
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

export function getSeriesPublications(): PublicationDefinition[] {
  return publicationIds
    .map((id) => publications[id])
    .filter((item) => item.status !== "draft")
    .sort((a, b) => a.volume - b.volume);
}

export function getFeaturedPublication(): PublicationDefinition | null {
  return (
    getSeriesPublications().find(
      (item) => item.featured && item.status === "available",
    ) ?? null
  );
}

export function getUpcomingPublications(): PublicationDefinition[] {
  return getSeriesPublications().filter((item) => !item.featured);
}
