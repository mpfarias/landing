import type { ReactNode } from "react";

type ProjectSectionProps = {
  id?: string;
  label?: string;
  headline?: ReactNode;
  children?: ReactNode;
  visual?: ReactNode;
  wide?: boolean;
  tone?: "default" | "muted";
};

export function ProjectSection({
  id,
  label,
  headline,
  children,
  visual,
  wide = false,
  tone = "default",
}: ProjectSectionProps) {
  return (
    <section
      id={id}
      className={[
        "scroll-mt-24 border-t border-border",
        tone === "muted" ? "bg-background-secondary" : "",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto px-5 py-16 sm:px-8 lg:px-10 lg:py-20",
          wide ? "max-w-[1280px]" : "max-w-[850px]",
        ].join(" ")}
      >
        {label ? (
          <p className="text-[12px] font-medium tracking-[0.2em] text-muted">
            {label}
          </p>
        ) : null}
        {headline ? (
          <h2
            className={[
              "text-[clamp(1.65rem,3.4vw,2.45rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground",
              label ? "mt-5" : "",
            ].join(" ")}
          >
            {headline}
          </h2>
        ) : null}
        {children}
        {visual ? <div className="mt-10">{visual}</div> : null}
      </div>
    </section>
  );
}
