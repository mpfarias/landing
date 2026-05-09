"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function HowIWork() {
  const { messages: m } = useLanguage();

  return (
    <section
      id="how-i-work"
      className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            {m.howIWork.kicker}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {m.howIWork.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {m.howIWork.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {m.howIWork.steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-slate-950/40"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-sm font-bold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}