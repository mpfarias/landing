"use client";

import { useTranslations } from "next-intl";

const stages = [
  "call",
  "attendance",
  "location",
  "narrative",
  "incident",
  "dispatch",
] as const;

export function HefestoGlimpse() {
  const t = useTranslations("projects.hefesto.product");

  return (
    <div
      role="img"
      aria-label={t("ariaLabel")}
      className="relative overflow-hidden rounded-2xl border border-border bg-background-secondary transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/project:translate-y-[-2px] group-focus-within/project:translate-y-[-2px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 20%, black 15%, transparent 75%)",
        }}
      />

      <div className="relative flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-secondary" aria-hidden />
          <span className="text-[11px] font-medium tracking-[0.16em] text-muted">
            HEFESTO
          </span>
        </div>
        <span className="text-[10px] font-medium tracking-[0.08em] text-muted">
          {t("status")}
        </span>
      </div>

      <div className="relative grid grid-cols-2 gap-2 p-3 sm:gap-2.5 sm:p-4">
        {stages.map((key, index) => (
          <div
            key={key}
            className={[
              "rounded-xl border px-3 py-2.5 sm:px-3.5 sm:py-3",
              index === stages.length - 1
                ? "border-primary/25 bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))]"
                : "border-border bg-surface/80",
            ].join(" ")}
          >
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
              {t(`${key}.title`)}
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {t(`${key}.value`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
