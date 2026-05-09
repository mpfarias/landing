"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function FAQ() {
  const { messages: m } = useLanguage();

  return (
    <section
      id="faq"
      className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            {m.faq.kicker}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {m.faq.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {m.faq.subtitle}
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {m.faq.items.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-slate-950/40"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}