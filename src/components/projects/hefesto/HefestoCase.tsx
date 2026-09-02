import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ProjectBreadcrumb } from "@/components/project-case/ProjectBreadcrumb";
import { ProjectCta } from "@/components/project-case/ProjectCta";
import { ProjectHero } from "@/components/project-case/ProjectHero";
import { ProjectMetrics } from "@/components/project-case/ProjectMetrics";
import { ProjectNavigation } from "@/components/project-case/ProjectNavigation";
import { ProjectSection } from "@/components/project-case/ProjectSection";
import { ProjectTechnology } from "@/components/project-case/ProjectTechnology";
import { Reveal } from "@/components/project-case/Reveal";
import { HefestoArchitecture } from "@/components/projects/hefesto/HefestoArchitecture";
import { HefestoPipeline } from "@/components/projects/hefesto/HefestoPipeline";
import { HefestoProductVisual } from "@/components/projects/hefesto/HefestoProductVisual";
import { HefestoWorkflow } from "@/components/projects/hefesto/HefestoWorkflow";
import type { ProjectDefinition } from "@/data/projects";
import { Link } from "@/i18n/navigation";

type CopyBlock = {
  title: string;
  text: string;
};

export async function HefestoCase({ project }: { project: ProjectDefinition }) {
  const t = await getTranslations("projects.hefesto");
  const tCase = await getTranslations("projects.hefesto.case");
  const tCommon = await getTranslations("projectCase");

  const headlines = [
    t("headlineLine1"),
    t("headlineLine2"),
    t("headlineLine3"),
  ];

  const heroMetrics = ["calls", "incidents", "time"].map((key) => ({
    value: tCase(`heroMetrics.${key}.value`),
    label: tCase(`heroMetrics.${key}.label`),
  }));

  const scaleMetrics = ["calls", "rate", "incidents"].map((key) => ({
    value: tCase(`scale.${key}.value`),
    label: tCase(`scale.${key}.label`),
  }));

  const workflowSteps = tCase.raw("workflow.steps") as CopyBlock[];
  const capabilities = tCase.raw("capabilities.items") as CopyBlock[];
  const pipelineSteps = tCase.raw("pipeline.steps") as CopyBlock[];
  const technologies = tCase.raw("architecture.technologies") as string[];

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
              {tCommon("backToProjects")}
            </Link>
            <div className="mt-6">
              <ProjectBreadcrumb projectId={project.id} />
            </div>
          </>
        }
        eyebrow={tCase("eyebrow")}
        title={t("name")}
        headlines={headlines}
        summary={tCase("summary")}
        metrics={heroMetrics}
        visual={
          <Reveal>
            <HefestoProductVisual />
          </Reveal>
        }
      />

      <ProjectSection
        id="contexto"
        label={tCase("context.label")}
        headline={
          <>
            <span className="block">{tCase("context.headlineLine1")}</span>
            <span className="block">{tCase("context.headlineLine2")}</span>
            <span className="block">{tCase("context.headlineLine3")}</span>
          </>
        }
      >
        <Reveal className="mt-6 max-w-[720px] space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
          <p>{tCase("context.p1")}</p>
          <p>{tCase("context.p2")}</p>
        </Reveal>
      </ProjectSection>

      <ProjectSection
        id="desafio"
        tone="muted"
        label={tCase("challenge.label")}
        headline={
          <>
            <span className="block">{tCase("challenge.headlineLine1")}</span>
            <span className="block">{tCase("challenge.headlineLine2")}</span>
          </>
        }
      >
        <Reveal className="mt-6 max-w-[720px] space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
          <p>{tCase("challenge.p1")}</p>
          <p>{tCase("challenge.p2")}</p>
          <p>{tCase("challenge.p3")}</p>
        </Reveal>
      </ProjectSection>

      <section className="border-t border-border bg-background-secondary">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[1fr_auto_1fr] sm:gap-10">
              <div>
                <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
                  {tCase("comparison.before")}
                </p>
                <p className="mt-3 text-[clamp(2.4rem,6vw,4rem)] font-semibold tracking-[-0.05em] text-foreground">
                  {tCase("comparison.beforeValue")}
                </p>
                <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted">
                  {tCase("comparison.beforeLabel")}
                </p>
              </div>
              <span
                aria-hidden
                className="mx-auto block h-10 w-px bg-border sm:hidden"
              />
              <span
                aria-hidden
                className="hidden h-px w-16 bg-border sm:block"
              />
              <div className="sm:text-right">
                <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
                  {tCase("comparison.after")}
                </p>
                <p className="mt-3 text-[clamp(2.4rem,6vw,4rem)] font-semibold tracking-[-0.05em] text-secondary">
                  {tCase("comparison.afterValue")}
                </p>
                <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted sm:ml-auto">
                  {tCase("comparison.afterLabel")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProjectSection
        id="solucao"
        label={tCase("solution.label")}
        headline={
          <>
            <span className="block">{tCase("solution.headlineLine1")}</span>
            <span className="block">{tCase("solution.headlineLine2")}</span>
          </>
        }
      >
        <Reveal className="mt-6 max-w-[720px] space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
          <p>{tCase("solution.p1")}</p>
          <p>{tCase("solution.p2")}</p>
          <p>{tCase("solution.p3")}</p>
        </Reveal>
      </ProjectSection>

      <ProjectSection
        id="fluxo"
        wide
        tone="muted"
        label={tCase("workflow.label")}
        headline={
          <>
            <span className="block">{tCase("workflow.headlineLine1")}</span>
            <span className="block">{tCase("workflow.headlineLine2")}</span>
          </>
        }
        visual={<HefestoWorkflow steps={workflowSteps} />}
      />

      <ProjectSection
        id="capacidades"
        wide
        label={tCase("capabilities.label")}
        headline={
          <>
            <span className="block">{tCase("capabilities.headlineLine1")}</span>
            <span className="block">{tCase("capabilities.headlineLine2")}</span>
          </>
        }
        visual={
          <ul className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <li key={item.title} className="min-w-0 border-t border-border pt-5">
                <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-[15px] font-semibold tracking-[-0.02em] text-foreground">
                  {item.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        }
      />

      <ProjectSection
        id="ia"
        tone="muted"
        wide
        label={tCase("ai.label")}
        headline={
          <>
            <span className="block">{tCase("ai.headlineLine1")}</span>
            <span className="block">{tCase("ai.headlineLine2")}</span>
            <span className="block">{tCase("ai.headlineLine3")}</span>
          </>
        }
      >
        <Reveal className="mt-6 max-w-[720px] space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
          <p>{tCase("ai.p1")}</p>
          <p>{tCase("ai.p2")}</p>
          <p>{tCase("ai.p3")}</p>
        </Reveal>
        <div className="mt-10">
          <HefestoPipeline
            steps={pipelineSteps}
            ariaLabel={tCase("pipeline.ariaLabel")}
            operatorNote={tCase("pipeline.operatorNote")}
          />
        </div>
      </ProjectSection>

      <ProjectSection
        id="arquitetura"
        wide
        label={tCase("architecture.label")}
        headline={
          <>
            <span className="block">{tCase("architecture.headlineLine1")}</span>
            <span className="block">{tCase("architecture.headlineLine2")}</span>
          </>
        }
      >
        <Reveal className="mt-6 max-w-[720px] space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
          <p>{tCase("architecture.p1")}</p>
          <p>{tCase("architecture.p2")}</p>
        </Reveal>
        <div className="mt-10">
          <HefestoArchitecture
            core={tCase("architecture.core")}
            telephony={tCase("architecture.telephony")}
            data={tCase("architecture.data")}
            intelligence={tCase("architecture.intelligence")}
            integrations={tCase("architecture.integrations")}
          />
        </div>
        <div className="mt-10">
          <ProjectTechnology items={technologies} />
        </div>
      </ProjectSection>

      <ProjectSection
        id="escala"
        tone="muted"
        wide
        label={tCase("scale.label")}
        headline={
          <>
            <span className="block">{tCase("scale.headlineLine1")}</span>
            <span className="block">{tCase("scale.headlineLine2")}</span>
          </>
        }
      >
        <div className="mt-10 max-w-[850px]">
          <ProjectMetrics items={scaleMetrics} />
        </div>
        <Reveal className="mt-8 max-w-[720px] text-[15px] leading-relaxed text-muted sm:text-base">
          <p>{tCase("scale.p1")}</p>
        </Reveal>
      </ProjectSection>

      <ProjectSection
        id="impacto"
        label={tCase("impact.label")}
        headline={
          <>
            <span className="block">{tCase("impact.headlineLine1")}</span>
            <span className="block">{tCase("impact.headlineLine2")}</span>
            <span className="block">{tCase("impact.headlineLine3")}</span>
          </>
        }
      >
        <Reveal className="mt-6 max-w-[720px] space-y-4 text-[15px] leading-relaxed text-muted sm:text-base">
          <p>{tCase("impact.p1")}</p>
          <p>{tCase("impact.p2")}</p>
        </Reveal>
      </ProjectSection>

      <ProjectSection id="papel" tone="muted" label={tCase("role.label")}>
        <dl className="mt-8 max-w-[720px] space-y-6">
          <div>
            <dt className="text-[12px] tracking-[0.08em] text-muted">
              {tCase("role.authorLabel")}
            </dt>
            <dd className="mt-1 text-[15px] font-medium text-foreground">
              {tCase("role.author")}
            </dd>
          </div>
          <div>
            <dt className="text-[12px] tracking-[0.08em] text-muted">
              {tCase("role.coauthorLabel")}
            </dt>
            <dd className="mt-1 text-[15px] font-medium text-foreground">
              {tCase("role.coauthor")}
            </dd>
          </div>
          <div className="border-t border-border pt-6">
            <dt className="text-[12px] tracking-[0.08em] text-muted">
              {tCase("role.registryLabel")}
            </dt>
            <dd className="mt-1 text-[14px] leading-relaxed text-foreground">
              “{tCase("role.registry")}”
            </dd>
          </div>
        </dl>
      </ProjectSection>

      {project.media && project.media.length > 0 ? (
        <ProjectSection
          id="produto"
          wide
          label={tCase("gallery.label")}
          headline={tCase("gallery.headline")}
        />
      ) : null}

      <ProjectCta
        line1={tCase("cta.line1")}
        line2={tCase("cta.line2")}
        question={tCase("cta.question")}
        action={tCase("cta.action")}
      />
      <ProjectNavigation projectId={project.id} />
    </article>
  );
}
