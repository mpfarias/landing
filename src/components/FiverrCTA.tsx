"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function FiverrCTA() {
  const { messages: m } = useLanguage();

  return (
    <section
      id="fiverr"
      className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-8 shadow-2xl shadow-slate-900/10 dark:border-cyan-400/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:shadow-cyan-950/30 sm:p-10 lg:p-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            {m.fiverr.kicker}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {m.fiverr.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {m.fiverr.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {m.fiverr.items.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>

              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {m.fiverr.viewOnFiverr}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}