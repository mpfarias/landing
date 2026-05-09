"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function Hero() {
  const { messages: m } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50 px-6 pt-36 pb-20 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.35),transparent_40%),radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_35%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-600/25 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300">
            {m.hero.badge}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {m.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {m.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#fiverr"
              className="rounded-full bg-cyan-400 px-7 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {m.hero.ctaFiverr}
            </a>

            <a
              href="#services"
              className="rounded-full border border-slate-300 px-7 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-white/15 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              {m.hero.ctaServices}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-cyan-950/30">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {m.hero.cardLabel}
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">
                  Marcelo Farias
                </h2>
              </div>

              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                {m.hero.available}
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800/80">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {m.hero.servicesHeading}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-300">
                    {m.hero.tagLanding}
                  </span>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-300">
                    {m.hero.tagWebApps}
                  </span>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-300">
                    {m.hero.tagBug}
                  </span>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-300">
                    {m.hero.tagDeploy}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800/80">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {m.hero.mainStack}
                </p>
                <p className="mt-3 text-base text-slate-900 dark:text-white">
                  React · Next.js · TypeScript · Node.js
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800/80">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {m.hero.focus}
                </p>
                <p className="mt-3 text-base text-slate-900 dark:text-white">
                  {m.hero.focusText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
