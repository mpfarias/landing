"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function WhyWorkWithMe() {
  const { messages: m } = useLanguage();

  return (
    <section className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            {m.why.kicker}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {m.why.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {m.why.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {m.why.reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5 transition hover:border-cyan-400/40 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-slate-950/40"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-sm font-bold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {reason.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
