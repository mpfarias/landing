"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function FinalCTA() {
  const { messages: m } = useLanguage();

  return (
    <section className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
          {m.final.kicker}
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          {m.final.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          {m.final.subtitle}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://br.fiverr.com/s/jjBDpbG"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-400 px-8 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {m.final.startFiverr}
          </a>

          <a
            href="#services"
            className="rounded-full border border-slate-300 px-8 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-white/15 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            {m.final.reviewServices}
          </a>
        </div>
      </div>
    </section>
  );
}
