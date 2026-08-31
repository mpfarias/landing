import type { Locale } from "@/i18n/routing";

export const projectIds = ["hefesto"] as const;
export type ProjectId = (typeof projectIds)[number];

export type ProjectDefinition = {
  id: ProjectId;
  featured: boolean;
  slugs: Record<Locale, string>;
  stack: readonly string[];
};

export const projects: Record<ProjectId, ProjectDefinition> = {
  hefesto: {
    id: "hefesto",
    featured: true,
    slugs: {
      pt: "hefesto",
      en: "hephaestus",
      es: "hefesto",
    },
    stack: ["Node.js", "NestJS", "PostgreSQL", "Asterisk", "IA", "Docker"],
  },
};

export function getProjectSlug(projectId: ProjectId, locale: Locale): string {
  return projects[projectId].slugs[locale];
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

export function getFeaturedProjects(): ProjectDefinition[] {
  return projectIds
    .map((id) => projects[id])
    .filter((project) => project.featured);
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
