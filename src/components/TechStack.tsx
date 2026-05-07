"use client";

import { techStack } from "@/data/techStack";
import { useLanguage } from "@/i18n/LanguageProvider";

export function TechStack() {
  const { messages: m } = useLanguage();

  return (
    <section
      id="tech"
      className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            {m.tech.kicker}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {m.tech.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {m.tech.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:border-cyan-400/50 hover:text-cyan-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
