import { ArrowLeft, ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import {
  getAdjacentProjects,
  getProjectHref,
  type ProjectId,
} from "@/data/projects";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type ProjectNavigationProps = {
  projectId: ProjectId;
};

export async function ProjectNavigation({ projectId }: ProjectNavigationProps) {
  const locale = (await getLocale()) as Locale;
  const tCase = await getTranslations("projectCase");
  const { previous, next } = getAdjacentProjects(projectId);

  const previousName = previous
    ? (await getTranslations(`projects.${previous.id}`))("navName")
    : null;
  const tNext = next ? await getTranslations(`projects.${next.id}`) : null;
  const nextName = tNext ? tNext("navName") : null;

  return (
    <nav
      aria-label={tCase("projectNav")}
      className="border-t border-border"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:px-10">
        {previous && previousName ? (
          <Link
            href={getProjectHref(previous.id, locale)}
            className="group/cta-secondary min-w-0 max-w-sm"
          >
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
              {tCase("previous")}
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-[clamp(1.05rem,2vw,1.25rem)] font-semibold tracking-[-0.02em] text-foreground">
              <ArrowLeft
                className="icon-shift size-4 shrink-0 transition-transform duration-200 group-hover/cta-secondary:-translate-x-0.5"
                aria-hidden
              />
              {previousName}
            </p>
          </Link>
        ) : (
          <span className="hidden lg:block" />
        )}

        {next && nextName ? (
          <Link
            href={getProjectHref(next.id, locale)}
            className="group/cta-secondary min-w-0 max-w-sm lg:ml-auto lg:text-right"
          >
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
              {tCase("next")}
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-[clamp(1.05rem,2vw,1.25rem)] font-semibold tracking-[-0.02em] text-foreground lg:flex-row-reverse">
              <ArrowRight
                className="icon-shift icon-shift-right size-4 shrink-0"
                aria-hidden
              />
              {nextName}
            </p>
            {tNext ? (
              <p className="mt-2 text-[14px] leading-snug text-muted">
                <span className="block">{tNext("headlineLine1")}</span>
                <span className="block">{tNext("headlineLine2")}</span>
              </p>
            ) : null}
          </Link>
        ) : (
          <Link
            href={{ pathname: "/", hash: "projetos" }}
            className="group/cta-secondary min-w-0 max-w-sm lg:ml-auto"
          >
            <p className="inline-flex items-center gap-2 text-[clamp(1.05rem,2vw,1.25rem)] font-semibold tracking-[-0.02em] text-foreground">
              <ArrowLeft
                className="icon-shift size-4 shrink-0 transition-transform duration-200 group-hover/cta-secondary:-translate-x-0.5"
                aria-hidden
              />
              {tCase("backToProjects")}
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
}
