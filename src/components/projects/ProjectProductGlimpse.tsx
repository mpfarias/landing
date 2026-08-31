"use client";

import { useTranslations } from "next-intl";

export function ProjectProductGlimpse() {
  const t = useTranslations("projects.hefesto.product");

  return (
    <div
      role="img"
      aria-label={t("ariaLabel")}
      className="relative overflow-hidden rounded-2xl border border-border bg-background-secondary transition-transform duration-300 ease-out motion-reduce:transition-none group-hover/project:translate-y-[-3px] group-focus-within/project:translate-y-[-3px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 25%, black 15%, transparent 75%)",
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

      <div className="relative grid gap-2.5 p-4">
        <div className="flex items-center justify-between rounded-xl border border-border bg-surface/80 px-3.5 py-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
              {t("call.title")}
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {t("call.line")}
            </p>
          </div>
          <p className="font-mono text-xs text-secondary">{t("call.duration")}</p>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-xl border border-border bg-surface/80 px-3.5 py-3">
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
              {t("location.title")}
            </p>
            <p className="mt-1 text-sm leading-snug text-foreground">
              {t("location.value")}
            </p>
            <div
              aria-hidden
              className="mt-3 h-12 rounded-lg border border-border bg-[color-mix(in_srgb,var(--primary)_6%,var(--background))]"
            >
              <div className="relative h-full w-full">
                <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_5px_color-mix(in_srgb,var(--primary)_22%,transparent)]" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex-1 rounded-xl border border-border bg-surface/80 px-3.5 py-3">
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                {t("narrative.title")}
              </p>
              <p className="mt-1 text-sm text-foreground">
                {t("narrative.value")}
              </p>
            </div>
            <div className="rounded-xl border border-primary/25 bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))] px-3.5 py-3">
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                {t("dispatch.title")}
              </p>
              <p className="mt-1 text-sm text-foreground">
                {t("dispatch.value")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
