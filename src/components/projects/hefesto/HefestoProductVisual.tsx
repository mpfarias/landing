"use client";

import { useTranslations } from "next-intl";

export function HefestoProductVisual() {
  const t = useTranslations("projects.hefesto.case.productVisual");

  return (
    <div
      role="img"
      aria-label={t("ariaLabel")}
      className="overflow-hidden rounded-2xl border border-border bg-background-secondary"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-secondary" aria-hidden />
          <span className="text-[11px] font-medium tracking-[0.16em] text-foreground">
            HEFESTO
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] tracking-[0.08em] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <span
              className="size-1.5 rounded-full bg-secondary motion-safe:animate-pulse"
              aria-hidden
            />
            {t("status")}
          </span>
          <span className="hidden text-border sm:inline" aria-hidden>
            |
          </span>
          <span className="font-medium text-foreground">{t("channel")}</span>
          <span>{t("elapsed")}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]">
        <div className="space-y-3 border-b border-border p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <Panel label={t("call")} value={t("channel")} accent />
          <div className="rounded-xl border border-border bg-surface/80 p-3.5">
            <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
              {t("collection")}
            </p>
            <ul className="mt-3 space-y-2.5">
              {[t("collectionType"), t("collectionRoute"), t("collectionContext")].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-16 shrink-0 text-[11px] text-muted">
                      {item}
                    </span>
                    <span
                      aria-hidden
                      className="h-1.5 flex-1 rounded-full bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)]"
                    />
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="space-y-3 p-4 sm:p-5">
          <div className="rounded-xl border border-border bg-surface/80 p-3.5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                {t("location")}
              </p>
              <p className="text-[12px] font-medium text-foreground">
                {t("locationValue")}
              </p>
            </div>
            <div
              aria-hidden
              className="relative mt-3 h-28 overflow-hidden rounded-lg border border-border bg-background"
            >
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />
              <span className="absolute left-[28%] top-[22%] h-10 w-16 rounded-md border border-border/80 bg-surface/40" />
              <span className="absolute right-[18%] bottom-[18%] h-8 w-20 rounded-md border border-border/80 bg-surface/40" />
              <span className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary" />
              <span className="absolute left-1/2 top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/40" />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface/80 p-3.5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                {t("narrative")}
              </p>
              <p className="text-[12px] text-muted">{t("narrativeStatus")}</p>
            </div>
            <div aria-hidden className="mt-3 space-y-2">
              <span className="block h-1.5 w-[92%] rounded-full bg-[color-mix(in_srgb,var(--foreground)_12%,transparent)]" />
              <span className="block h-1.5 w-[78%] rounded-full bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)]" />
              <span className="block h-1.5 w-[64%] rounded-full bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 border-t border-border px-4 py-3 sm:grid-cols-2 sm:px-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
            {t("incident")}
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            {t("incidentValue")}
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
            {t("dispatch")}
          </p>
          <p className="mt-1 text-sm font-medium text-secondary">CAD</p>
        </div>
      </div>
    </div>
  );
}

function Panel({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-xl border p-3.5",
        accent
          ? "border-primary/25 bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))]"
          : "border-border bg-surface/80",
      ].join(" ")}
    >
      <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}
