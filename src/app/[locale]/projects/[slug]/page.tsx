import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import {
  getAllLocalizedProjectParams,
  getProjectSlug,
  resolveProjectIdFromSlug,
  type ProjectId,
} from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

const projectPathSegment: Record<Locale, string> = {
  pt: "projetos",
  en: "projects",
  es: "proyectos",
};

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

  const languages = Object.fromEntries(
    locales.map((code) => [
      code,
      `/${code}/${projectPathSegment[code]}/${getProjectSlug(projectId, code)}`,
    ]),
  );

  return {
    title: `${t("placeholder.title")} | Marcelo Pires de Farias`,
    description: t("placeholder.description"),
    alternates: {
      canonical: `/${typedLocale}/${projectPathSegment[typedLocale]}/${getProjectSlug(projectId, typedLocale)}`,
      languages,
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

  const t = await getTranslations(`projects.${projectId}`);
  const tCommon = await getTranslations("common");

  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[70svh] overflow-x-hidden pt-28 pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.22] tech-grid"
          />
          <div className="relative mx-auto max-w-[800px] px-5 sm:px-8 lg:px-10">
            <p className="text-[12px] font-medium tracking-[0.2em] text-muted">
              {t("placeholder.eyebrow")}
            </p>
            <h1 className="mt-5 text-[clamp(2.4rem,6vw,4rem)] font-semibold tracking-[-0.04em] text-foreground">
              {t("placeholder.title")}
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
              {t("placeholder.description")}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={{ pathname: "/", hash: "projetos" }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <ArrowLeft className="size-4" aria-hidden />
                {t("placeholder.cta")}
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/25"
              >
                {tCommon("backHome")}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
