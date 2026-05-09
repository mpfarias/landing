"use client";

import { useMemo } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

function BusinessLandingMockup() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-950 p-5">
      <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-3 w-24 rounded-full bg-cyan-300/70" />
          <div className="flex gap-2">
            <div className="h-2 w-8 rounded-full bg-white/20" />
            <div className="h-2 w-8 rounded-full bg-white/20" />
            <div className="h-2 w-8 rounded-full bg-white/20" />
          </div>
        </div>

        <div className="space-y-3">
          <div className="h-4 w-3/4 rounded-full bg-white/80" />
          <div className="h-4 w-1/2 rounded-full bg-white/60" />
          <div className="h-2 w-full rounded-full bg-white/20" />
          <div className="h-2 w-5/6 rounded-full bg-white/20" />
        </div>

        <div className="mt-5 flex gap-3">
          <div className="h-8 w-24 rounded-full bg-cyan-300" />
          <div className="h-8 w-20 rounded-full border border-white/20" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="h-12 rounded-xl bg-white/10" />
          <div className="h-12 rounded-xl bg-white/10" />
          <div className="h-12 rounded-xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-950 p-5">
      <div className="grid h-full grid-cols-[0.7fr_1.3fr] gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
        <div className="rounded-xl bg-white/5 p-3">
          <div className="mb-4 h-3 w-16 rounded-full bg-cyan-300/70" />
          <div className="space-y-2">
            <div className="h-2 w-full rounded-full bg-white/20" />
            <div className="h-2 w-4/5 rounded-full bg-white/20" />
            <div className="h-2 w-5/6 rounded-full bg-white/20" />
            <div className="h-2 w-2/3 rounded-full bg-white/20" />
          </div>
        </div>

        <div>
          <div className="mb-3 grid grid-cols-2 gap-3">
            <div className="h-12 rounded-xl bg-cyan-300/15" />
            <div className="h-12 rounded-xl bg-emerald-300/15" />
          </div>

          <div className="flex h-24 items-end gap-2 rounded-xl bg-white/5 p-3">
            <div className="h-8 flex-1 rounded-t-lg bg-cyan-300/40" />
            <div className="h-14 flex-1 rounded-t-lg bg-cyan-300/60" />
            <div className="h-10 flex-1 rounded-t-lg bg-cyan-300/40" />
            <div className="h-20 flex-1 rounded-t-lg bg-cyan-300/80" />
            <div className="h-12 flex-1 rounded-t-lg bg-cyan-300/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomWebAppMockup() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-950 p-5">
      <div className="grid h-full grid-rows-[auto_1fr] gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
        <div className="flex items-center justify-between">
          <div className="h-3 w-28 rounded-full bg-cyan-300/70" />
          <div className="h-7 w-20 rounded-full bg-emerald-300/15" />
        </div>

        <div className="grid grid-cols-[0.9fr_1.1fr] gap-3">
          <div className="space-y-2 rounded-xl bg-white/5 p-3">
            <div className="h-8 rounded-lg bg-cyan-300/20" />
            <div className="h-8 rounded-lg bg-white/10" />
            <div className="h-8 rounded-lg bg-white/10" />
            <div className="h-8 rounded-lg bg-white/10" />
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="h-14 rounded-xl bg-cyan-300/15" />
              <div className="h-14 rounded-xl bg-emerald-300/15" />
            </div>
            <div className="h-20 rounded-xl bg-white/5" />
            <div className="h-10 rounded-xl bg-cyan-300/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DeploymentMockup({ productionLabel }: { productionLabel: string }) {
  const steps = ["GitHub", "Vercel", "Domain", "SSL"];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-950 p-5">
      <div className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-slate-950/80 p-4">
        <div className="grid grid-cols-2 gap-3">
          {steps.map((step) => (
            <div
              key={step}
              className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-center"
            >
              <div className="mx-auto mb-3 h-8 w-8 rounded-full bg-cyan-300/30" />
              <p className="text-xs font-semibold text-cyan-200">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-center text-xs font-semibold text-emerald-200">
          {productionLabel}
        </div>
      </div>
    </div>
  );
}

export function WorkExamples() {
  const { messages: m } = useLanguage();

  const mockups = useMemo(
    () => [
      <BusinessLandingMockup key="business-landing" />,
      <DashboardMockup key="dashboard" />,
      <DeploymentMockup
        key="deployment"
        productionLabel={m.work.productionReady}
      />,
      <CustomWebAppMockup key="custom-web-app" />,
    ],
    [m.work.productionReady],
  );

  return (
    <section
      id="work"
      className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            {m.work.kicker}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {m.work.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {m.work.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {m.work.items.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-slate-950/40"
            >
              <div className="h-56 overflow-hidden">{mockups[index]}</div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
