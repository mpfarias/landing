import type { ReactNode } from "react";

type ProjectSectionProps = {
  id?: string;
  label?: string;
  headline?: ReactNode;
  children?: ReactNode;
};

export function ProjectSection({
  id,
  label,
  headline,
  children,
}: ProjectSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-[850px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        {label ? (
          <p className="text-[12px] font-medium tracking-[0.2em] text-muted">
            {label}
          </p>
        ) : null}
        {headline ? (
          <h2
            className={[
              "text-[clamp(1.45rem,2.8vw,1.9rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-foreground",
              label ? "mt-4" : "",
            ].join(" ")}
          >
            {headline}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
