import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { ProjectCase } from "@/components/project-case/ProjectCase";
import {
  getAllLocalizedProjectParams,
  getProjectSlug,
  projectPathSegment,
  projects,
  resolveProjectIdFromSlug,
  type ProjectId,
} from "@/data/projects";
import {
  localeOpenGraph,
  locales,
  routing,
  type Locale,
} from "@/i18n/routing";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

function projectUrl(locale: Locale, projectId: ProjectId) {
  return `/${locale}/${projectPathSegment[locale]}/${getProjectSlug(projectId, locale)}`;
}

export function generateStaticParams() {
  return getAllLocalizedProjectParams();
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const projectId = resolveProjectIdFromSlug(slug);
  if (!projectId) return {};

  const typedLocale = locale as Locale;
  const t = await getTranslations({
    locale,
    namespace: `projects.${projectId}`,
  });

  const title = t.has("page.seoTitle")
    ? t("page.seoTitle")
    : `${t("name")} | Marcelo Pires de Farias`;
  const description = t.has("page.seoDescription")
    ? t("page.seoDescription")
    : t("description");
  const canonical = projectUrl(typedLocale, projectId);

  const languages = Object.fromEntries(
    locales.map((code) => [code, projectUrl(code, projectId)]),
  );
  languages["x-default"] = projectUrl(routing.defaultLocale, projectId);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Marcelo Pires de Farias",
      type: "article",
      locale: localeOpenGraph[typedLocale],
      alternateLocale: locales
        .filter((code) => code !== typedLocale)
        .map((code) => localeOpenGraph[code]),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const projectId = resolveProjectIdFromSlug(slug) as ProjectId | null;
  if (!projectId) notFound();

  const expectedSlug = getProjectSlug(projectId, locale as Locale);
  if (slug !== expectedSlug) notFound();

  return (
    <>
      <Header variant="internal" />
      <main>
        <ProjectCase project={projects[projectId]} />
      </main>
    </>
  );
}
