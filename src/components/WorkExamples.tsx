"use client";

import { projects, projectSlugFromHref } from "@/data/projects";
import { links } from "@/data/links";
import { useLanguage } from "@/i18n/LanguageProvider";

function ProjectMockup({ category }: { category: string }) {
  if (category.includes("API")) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-950 p-5">
        <div className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-slate-950/80 p-4">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <div className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="rounded-lg bg-cyan-400/10 px-3 py-2 text-cyan-200">
              GET /api/status
            </div>
            <div className="rounded-lg bg-white/5 px-3 py-2 text-slate-300">
              GET /api/search
            </div>
            <div className="rounded-lg bg-white/5 px-3 py-2 text-slate-300">
              POST /api/projection
            </div>
            <div className="mt-4 rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-emerald-200">
              200 OK · JSON Response
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (category.includes("Full Stack") || category.includes("Web App")) {
    return (
      <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-950 p-5">
        <div className="grid h-full grid-cols-[0.75fr_1.25fr] gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
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

            <div className="space-y-2 rounded-xl bg-white/5 p-3">
              <div className="h-2 w-full rounded-full bg-white/20" />
              <div className="h-2 w-5/6 rounded-full bg-white/20" />
              <div className="h-2 w-3/4 rounded-full bg-white/20" />
              <div className="h-2 w-4/5 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (category.includes("Landing")) {
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

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-950 p-5">
      <div className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-slate-950/80 p-4">
        <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-cyan-300/20" />
        <div className="mx-auto h-3 w-32 rounded-full bg-white/60" />
        <div className="mx-auto mt-3 h-2 w-44 rounded-full bg-white/20" />
        <div className="mx-auto mt-2 h-2 w-36 rounded-full bg-white/20" />
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-xl bg-white/10" />
          <div className="h-10 rounded-xl bg-white/10" />
          <div className="h-10 rounded-xl bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function fiverrHrefForSlug(slug: string): string {
  if (slug === "landing") return links.fiverr.landingPage;
  return links.fiverr.customWebApps;
}

export function WorkExamples() {
  const { messages: m } = useLanguage();

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

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const slug = projectSlugFromHref(project.href);
            const copy =
              m.work.projectTranslations[
                slug as keyof typeof m.work.projectTranslations
              ];

            return (
              <article
                key={project.href}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:border-cyan-400/60 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-slate-950/40"
              >
                <div className="h-56">
                  <ProjectMockup category={project.category} />
                </div>

                <div className="flex min-h-[360px] flex-col p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
                      {copy.category}
                    </span>

                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {copy.service}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {copy.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                    {copy.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-cyan-500 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-300"
                    >
                      {m.work.viewGithub}
                    </a>

                    <a
                      href={fiverrHrefForSlug(slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/15 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300"
                    >
                      {m.work.hireSimilar}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
