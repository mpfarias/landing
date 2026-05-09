"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function Services() {
  const { messages: m } = useLanguage();

  return (
    <section
      id="services"
      className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            {m.services.kicker}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {m.services.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {m.services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {m.services.items.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-slate-950/40"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {service.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
