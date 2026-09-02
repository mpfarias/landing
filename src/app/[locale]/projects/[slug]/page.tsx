import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { ProjectBreadcrumb } from "@/components/project-case/ProjectBreadcrumb";
import { ProjectCta } from "@/components/project-case/ProjectCta";
import { ProjectHero } from "@/components/project-case/ProjectHero";
import { ProjectNavigation } from "@/components/project-case/ProjectNavigation";
import { HefestoCase } from "@/components/projects/hefesto/HefestoCase";
import {
  getAllLocalizedProjectParams,
  getProjectSlug,
  projectPathSegment,
  projects,
  resolveProjectIdFromSlug,
  type ProjectId,
} from "@/data/projects";
import { Link } from "@/i18n/navigation";
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

  const title = t.has("case.seoTitle")
    ? t("case.seoTitle")
    : `${t("name")} | Marcelo Pires de Farias`;
  const description = t.has("case.seoDescription")
    ? t("case.seoDescription")
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

  const project = projects[projectId];

  return (
    <>
      <Header variant="internal" />
      <main>
        {projectId === "hefesto" ? (
          <HefestoCase project={project} />
        ) : (
          <GenericProjectCase projectId={projectId} />
        )}
      </main>
    </>
  );
}

async function GenericProjectCase({ projectId }: { projectId: ProjectId }) {
  const project = projects[projectId];
  const t = await getTranslations(`projects.${projectId}`);
  const tCase = await getTranslations("projectCase");

  const headlines = [
    t("headlineLine1"),
    t("headlineLine2"),
    t.has("headlineLine3") ? t("headlineLine3") : null,
  ].filter((line): line is string => Boolean(line));

  return (
    <article>
      <ProjectHero
        leading={
          <>
            <Link
              href={{ pathname: "/", hash: "projetos" }}
              className="group/cta-secondary inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              <ArrowLeft
                className="icon-shift size-3.5 transition-transform duration-200 group-hover/cta-secondary:-translate-x-0.5 group-focus-visible/cta-secondary:-translate-x-0.5"
                aria-hidden
              />
              {tCase("backToProjects")}
            </Link>
            <div className="mt-6">
              <ProjectBreadcrumb projectId={projectId} />
            </div>
          </>
        }
        eyebrow={t("category")}
        title={t("name")}
        headlines={headlines}
        summary={t("description")}
        stack={project.stack}
        stackLabel={tCase("technologies")}
      />
      <ProjectCta
        line1={tCase("ctaLine1")}
        line2={tCase("ctaLine2")}
        action={tCase("cta")}
      />
      <ProjectNavigation projectId={projectId} />
    </article>
  );
}
