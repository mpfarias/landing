"use client";

import { useTranslations } from "next-intl";

export function OrionGlimpse() {
  const t = useTranslations("projects.orion");
  const modules = t.raw("modules") as string[];
  const services = t.raw("services") as string[];

  return (
    <div
      role="img"
      aria-label={t("product.ariaLabel")}
      className="relative overflow-hidden rounded-2xl border border-border bg-background-secondary transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/project:translate-y-[-2px] group-focus-within/project:translate-y-[-2px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black 10%, transparent 75%)",
        }}
      />

      <div className="relative p-4 sm:p-5">
        <div className="rounded-xl border border-primary/25 bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))] px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[13px] font-semibold tracking-[0.18em] text-foreground">
              ÓRION
            </p>
            <p className="text-[10px] font-medium tracking-[0.16em] text-muted">
              {t("coreLabel")}
            </p>
          </div>
          <p className="mt-3 text-[11px] tracking-[0.08em] text-muted">
            {services.join(" · ")}
          </p>
        </div>

        <p className="mt-4 text-[10px] font-medium tracking-[0.16em] text-muted">
          {t("modulesLabel")}
        </p>
        <ul className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {modules.map((module) => (
            <li
              key={module}
              className="rounded-lg border border-border bg-surface/80 px-2.5 py-2 text-center text-[11px] font-medium tracking-[0.04em] text-foreground/90"
            >
              {module}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
