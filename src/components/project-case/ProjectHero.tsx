import type { ReactNode } from "react";
import { ProjectMetrics } from "./ProjectMetrics";
import { ProjectTechnology } from "./ProjectTechnology";

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
  metrics?: readonly ProjectMetric[];
  visual?: ReactNode;
  stack?: readonly string[];
  stackLabel?: string;
};

export function ProjectHero({
  leading,
  eyebrow,
  title,
  headlines,
  summary,
  metrics,
  visual,
  stack,
  stackLabel,
}: ProjectHeroProps) {
  return (
    <header className="relative overflow-x-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {leading}

        <div className="mt-10 max-w-[850px] lg:mt-12">
          <p className="text-[11px] font-medium tracking-[0.18em] text-muted">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-[clamp(2.35rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-foreground">
            {title}
          </h1>
          {headlines.length > 0 ? (
            <p className="mt-5 text-[clamp(1.2rem,2.4vw,1.65rem)] font-medium leading-snug tracking-[-0.025em] text-foreground">
              {headlines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          ) : null}
          <p className="mt-6 max-w-[720px] text-[15px] leading-relaxed text-muted sm:text-base">
            {summary}
          </p>
        </div>

        {metrics && metrics.length > 0 ? (
          <div className="mt-10 max-w-[850px]">
            <ProjectMetrics items={metrics} />
          </div>
        ) : null}

        {stack && stack.length > 0 ? (
          <div className="mt-8 max-w-[850px]">
            <ProjectTechnology items={stack} label={stackLabel} />
          </div>
        ) : null}

        {visual ? <div className="mt-12 lg:mt-14">{visual}</div> : null}
      </div>
    </header>
  );
}
