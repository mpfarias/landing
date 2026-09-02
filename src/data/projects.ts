import type { Locale } from "@/i18n/routing";

export const projectIds = [
  "hefesto",
  "orion",
  "assedub",
  "elite-fc",
  "oraculo-dos-numeros",
] as const;

export type ProjectId = (typeof projectIds)[number];
export type ProjectLayer = "primary" | "secondary";
export type ProjectFactKey = "type" | "context" | "year" | "status";
export type ProjectMediaKind =
  | "image"
  | "screenshot"
  | "diagram"
  | "mockup"
  | "video";

export type ProjectMediaAsset = {
  src: string;
  alt: string;
  kind?: ProjectMediaKind;
  caption?: string;
};

export type ProjectDefinition = {
  id: ProjectId;
  layer: ProjectLayer;
  slugs: Record<Locale, string>;
  stack: readonly string[];
  /** Only include keys with real, publishable values. */
  facts?: Partial<Record<ProjectFactKey, string>>;
  /** Screenshots must be anonymized before being listed here. */
  media?: readonly ProjectMediaAsset[];
};

export const projects: Record<ProjectId, ProjectDefinition> = {
  hefesto: {
    id: "hefesto",
    layer: "primary",
    slugs: {
      pt: "hefesto",
      en: "hephaestus",
      es: "hefesto",
    },
    stack: ["Node.js", "NestJS", "PostgreSQL", "Asterisk", "IA", "Docker"],
  },
  orion: {
    id: "orion",
    layer: "primary",
    slugs: {
      pt: "orion",
      en: "orion",
      es: "orion",
    },
    stack: ["React", "NestJS", "PostgreSQL", "JWT", "APIs"],
  },
  assedub: {
    id: "assedub",
    layer: "secondary",
    slugs: {
      pt: "assedub",
      en: "assedub",
      es: "assedub",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
  },
  "elite-fc": {
    id: "elite-fc",
    layer: "secondary",
    slugs: {
      pt: "elite-fc",
      en: "elite-fc",
      es: "elite-fc",
    },
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  "oraculo-dos-numeros": {
    id: "oraculo-dos-numeros",
    layer: "secondary",
    slugs: {
      pt: "oraculo-dos-numeros",
      en: "oraculo-dos-numeros",
      es: "oraculo-dos-numeros",
    },
    stack: ["Python", "TensorFlow", "Pandas", "NumPy", "React"],
  },
};

export function getProjectSlug(projectId: ProjectId, locale: Locale): string {
  return projects[projectId].slugs[locale];
}

export function getProjectHref(projectId: ProjectId, locale: Locale) {
  return {
    pathname: "/projects/[slug]" as const,
    params: { slug: getProjectSlug(projectId, locale) },
  };
}

export function resolveProjectIdFromSlug(slug: string): ProjectId | null {
  for (const id of projectIds) {
    const definition = projects[id];
    if (
      definition.id === slug ||
      Object.values(definition.slugs).includes(slug)
    ) {
      return id;
    }
  }
  return null;
}

export function getPrimaryProjects(): ProjectDefinition[] {
  return projectIds
    .map((id) => projects[id])
    .filter((project) => project.layer === "primary");
}

export function getSecondaryProjects(): ProjectDefinition[] {
  return projectIds
    .map((id) => projects[id])
    .filter((project) => project.layer === "secondary");
}

export const projectPathSegment: Record<Locale, string> = {
  pt: "projetos",
  en: "projects",
  es: "proyectos",
};

export function getAdjacentProjects(id: ProjectId): {
  previous: ProjectDefinition | null;
  next: ProjectDefinition | null;
} {
  const index = projectIds.indexOf(id);
  return {
    previous: index > 0 ? projects[projectIds[index - 1]] : null,
    next:
      index >= 0 && index < projectIds.length - 1
        ? projects[projectIds[index + 1]]
        : null,
  };
}

export function getAllLocalizedProjectParams(): Array<{
  locale: Locale;
  slug: string;
}> {
  const locales: Locale[] = ["pt", "en", "es"];
  return projectIds.flatMap((id) =>
    locales.map((locale) => ({
      locale,
      slug: projects[id].slugs[locale],
    })),
  );
}
