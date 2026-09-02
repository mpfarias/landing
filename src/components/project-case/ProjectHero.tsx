import type { ReactNode } from "react";
import { ProjectMetrics } from "./ProjectMetrics";

type ProjectMetric = {
  value: string;
  label: string;
};

type ProjectHeroProps = {
  leading?: ReactNode;
  eyebrow: string;
  title: string;
  headlines: readonly string[];
  summary: string;
  context?: string;
  metrics?: readonly ProjectMetric[];
};

export function ProjectHero({
  leading,
  eyebrow,
  title,
  headlines,
  summary,
  context,
  metrics,
}: ProjectHeroProps) {
  return (
    <header className="relative overflow-x-hidden pt-24 pb-8 sm:pt-28 sm:pb-10">
      <div className="mx-auto max-w-[850px] px-5 sm:px-8 lg:px-10">
        {leading}

        <div className="mt-8">
          <p className="text-[11px] font-medium tracking-[0.18em] text-muted">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-[clamp(2.2rem,5.5vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-foreground">
            {title}
          </h1>
          {headlines.length > 0 ? (
            <p className="mt-4 text-[clamp(1.15rem,2.2vw,1.5rem)] font-medium leading-snug tracking-[-0.025em] text-foreground">
              {headlines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          ) : null}
          <p className="mt-5 max-w-[720px] text-[15px] leading-relaxed text-muted sm:text-base">
            {summary}
          </p>
          {context ? (
            <p className="mt-4 max-w-[720px] text-[15px] leading-relaxed text-muted sm:text-base">
              {context}
            </p>
          ) : null}
        </div>

        {metrics && metrics.length > 0 ? (
          <div className="mt-8">
            <ProjectMetrics items={metrics} />
          </div>
        ) : null}
      </div>
    </header>
  );
}
