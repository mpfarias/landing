import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ProjectBreadcrumb } from "@/components/project-case/ProjectBreadcrumb";
import { ProjectComparison } from "@/components/project-case/ProjectComparison";
import { ProjectCta } from "@/components/project-case/ProjectCta";
import { ProjectFlow } from "@/components/project-case/ProjectFlow";
import { ProjectHero } from "@/components/project-case/ProjectHero";
import { ProjectMedia } from "@/components/project-case/ProjectMedia";
import { ProjectSection } from "@/components/project-case/ProjectSection";
import { ProjectTechnology } from "@/components/project-case/ProjectTechnology";
import type { ProjectDefinition } from "@/data/projects";
import { Link } from "@/i18n/navigation";

const metricKeys = ["calls", "incidents", "time"] as const;
const paragraphKeys = ["p1", "p2"] as const;

type ProjectCaseProps = {
  project: ProjectDefinition;
};

export async function ProjectCase({ project }: ProjectCaseProps) {
  const t = await getTranslations(`projects.${project.id}`);
  const tUi = await getTranslations("projectCase");
  const tCommon = await getTranslations("common");
  const hasPage = t.has("page.summary");

  const headlines = [
    t("headlineLine1"),
    t("headlineLine2"),
    t.has("headlineLine3") ? t("headlineLine3") : null,
  ].filter((line): line is string => Boolean(line));

  const metrics = metricKeys.flatMap((key) => {
    const pageKey = `page.metrics.${key}.value`;
    const homeKey = `metrics.${key}.value`;
    if (hasPage && t.has(pageKey)) {
      return [
        {
          value: t(`page.metrics.${key}.value`),
          label: t(`page.metrics.${key}.label`),
        },
      ];
    }
    if (!hasPage && t.has(homeKey)) {
      return [
        {
          value: t(`metrics.${key}.value`),
          label: t(`metrics.${key}.label`),
        },
      ];
    }
    return [];
  });

  const problemParagraphs = collectParagraphs(t, "page.problem");
  const solutionParagraphs = collectParagraphs(t, "page.solution");
  const flowSteps = t.has("page.flow.steps")
    ? (t.raw("page.flow.steps") as string[])
    : [];
  const capabilities = t.has("page.capabilities.items")
    ? (t.raw("page.capabilities.items") as string[])
    : [];
  const technologies = t.has("page.technologies")
    ? (t.raw("page.technologies") as string[])
    : project.stack;
  const media = (project.media ?? []).slice(0, 2);

  return (
    <article>
      <ProjectHero
        leading={
          <>
            <Link
              href="/"
              className="group/cta-secondary inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              <ArrowLeft
                className="icon-shift size-3.5 transition-transform duration-200 group-hover/cta-secondary:-translate-x-0.5 group-focus-visible/cta-secondary:-translate-x-0.5"
                aria-hidden
              />
              {tCommon("backHome")}
            </Link>
            <div className="mt-5">
              <ProjectBreadcrumb projectId={project.id} />
            </div>
          </>
        }
        eyebrow={hasPage ? t("page.eyebrow") : t("category")}
        title={t("name")}
        headlines={headlines}
        summary={hasPage ? t("page.summary") : t("description")}
        context={t.has("page.context") ? t("page.context") : undefined}
        metrics={metrics}
      />

      {problemParagraphs.length > 0 ? (
        <ProjectSection
          id="problema"
          label={t("page.problem.label")}
          headline={
            <>
              <span className="block">{t("page.problem.headlineLine1")}</span>
              <span className="block">{t("page.problem.headlineLine2")}</span>
            </>
          }
        >
          <div className="mt-4 max-w-[720px] space-y-3 text-[15px] leading-relaxed text-muted sm:text-base">
            {problemParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ProjectSection>
      ) : null}

      {solutionParagraphs.length > 0 ? (
        <ProjectSection
          id="solucao"
          label={t("page.solution.label")}
          headline={
            <>
              <span className="block">{t("page.solution.headlineLine1")}</span>
              <span className="block">{t("page.solution.headlineLine2")}</span>
            </>
          }
        >
          <div className="mt-4 max-w-[720px] space-y-3 text-[15px] leading-relaxed text-muted sm:text-base">
            {solutionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {flowSteps.length > 0 ? (
            <div className="mt-8 border-t border-border pt-6">
              <ProjectFlow
                steps={flowSteps}
                ariaLabel={t("page.flow.ariaLabel")}
              />
            </div>
          ) : null}
        </ProjectSection>
      ) : null}

      {t.has("page.result.beforeValue") ? (
        <ProjectSection id="resultado">
          <ProjectComparison
            before={t("page.result.before")}
            after={t("page.result.after")}
            beforeValue={t("page.result.beforeValue")}
            afterValue={t("page.result.afterValue")}
            beforeLabel={t("page.result.beforeLabel")}
            afterLabel={t("page.result.afterLabel")}
          />
          <p className="mt-8 max-w-[720px] text-[15px] leading-relaxed text-muted sm:text-base">
            {t("page.result.text")}
          </p>
        </ProjectSection>
      ) : null}

      {capabilities.length > 0 ? (
        <ProjectSection id="capacidades" label={t("page.capabilities.label")}>
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-t border-border pt-3"
              >
                <span className="text-[11px] tracking-[0.14em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] font-medium text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </ProjectSection>
      ) : null}

      {t.has("page.role.author") ? (
        <ProjectSection id="papel" label={t("page.role.label")}>
          <dl className="mt-5 max-w-[720px] space-y-4">
            <div>
              <dt className="text-[13px] text-muted">
                {t("page.role.authorLabel")}
              </dt>
              <dd className="mt-1 text-[15px] font-medium text-foreground">
                {t("page.role.author")}
              </dd>
            </div>
            {t.has("page.role.coauthor") ? (
              <div>
                <dt className="text-[13px] text-muted">
                  {t("page.role.coauthorLabel")}
                </dt>
                <dd className="mt-1 text-[15px] font-medium text-foreground">
                  {t("page.role.coauthor")}
                </dd>
              </div>
            ) : null}
            {t.has("page.role.registry") ? (
              <div className="border-t border-border pt-4">
                <dt className="text-[12px] text-muted">
                  {t("page.role.registryLabel")}
                </dt>
                <dd className="mt-1 text-[13px] leading-relaxed text-foreground/85">
                  “{t("page.role.registry")}”
                </dd>
              </div>
            ) : null}
          </dl>
        </ProjectSection>
      ) : null}

      {technologies.length > 0 ? (
        <ProjectSection id="tecnologias" label={tUi("technologies")}>
          <div className="mt-5">
            <ProjectTechnology items={technologies} />
          </div>
        </ProjectSection>
      ) : null}

      {media.length > 0 ? (
        <ProjectSection id="imagens">
          <div className="space-y-6">
            {media.map((asset) => (
              <ProjectMedia
                key={asset.src}
                src={asset.src}
                alt={asset.alt}
                kind={asset.kind}
                caption={asset.caption}
              />
            ))}
          </div>
        </ProjectSection>
      ) : null}

      <ProjectCta
        line1={tUi("ctaLine1")}
        line2={tUi("ctaLine2")}
        action={tUi("cta")}
        backLabel={tCommon("backHome")}
      />
    </article>
  );
}

function collectParagraphs(
  t: Awaited<ReturnType<typeof getTranslations>>,
  prefix: string,
) {
  return paragraphKeys.flatMap((key) =>
    t.has(`${prefix}.${key}`) ? [t(`${prefix}.${key}`)] : [],
  );
}
