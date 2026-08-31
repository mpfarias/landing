"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { projects } from "@/data/projects";
import type { Locale } from "@/i18n/routing";
import { ProjectProductGlimpse } from "@/components/projects/ProjectProductGlimpse";

const metricKeys = ["calls", "incidents", "time"] as const;

export function ProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const reduceMotion = useReducedMotion();
  const hefesto = projects.hefesto;
  const slug = hefesto.slugs[locale];

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : ({ opacity: 0, y: 16 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      delay: reduceMotion ? 0 : delay,
      duration: reduceMotion ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-24 overflow-x-hidden border-t border-border bg-background-secondary"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.2] tech-grid"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <motion.div {...reveal(0)} className="max-w-2xl">
          <p className="text-[12px] font-medium tracking-[0.2em] text-muted">
            {t("label")}
          </p>
          <h2
            id="projects-heading"
            className="mt-5 text-[clamp(1.85rem,3.8vw,2.85rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground"
          >
            <span className="block">{t("headlineLine1")}</span>
            <span className="block">{t("headlineLine2")}</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted sm:text-base">
            {t("intro")}
          </p>
        </motion.div>

        <motion.div {...reveal(0.1)} className="mt-12 lg:mt-14">
          <Link
            href={{
              pathname: "/projects/[slug]",
              params: { slug },
            }}
            className="group/project block rounded-2xl border border-border bg-surface p-5 outline-none transition-[border-color,background-color] duration-300 hover:border-primary/25 hover:bg-[color-mix(in_srgb,var(--surface)_88%,var(--primary))] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background-secondary sm:p-7 lg:p-8"
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
              <div className="min-w-0">
                <p className="text-[11px] font-medium tracking-[0.18em] text-muted">
                  {t("hefesto.eyebrow")}
                </p>
                <h3 className="mt-3 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-[-0.04em] text-foreground">
                  {t("hefesto.name")}
                </h3>
                <p className="mt-2 text-sm font-medium text-secondary">
                  {t("hefesto.category")}
                </p>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                  {t("hefesto.description")}
                </p>

                <dl className="mt-8 grid grid-cols-3 gap-3 border-y border-border py-5 sm:gap-6">
                  {metricKeys.map((key) => (
                    <div key={key} className="min-w-0">
                      <dt className="text-[clamp(1rem,2.2vw,1.35rem)] font-semibold tracking-tight text-foreground">
                        {t(`hefesto.metrics.${key}.value`)}
                      </dt>
                      <dd className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">
                        {t(`hefesto.metrics.${key}.label`)}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {hefesto.stack.map((tech, index) => (
                    <li
                      key={tech}
                      className={[
                        "rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.04em]",
                        index === 0
                          ? "border-primary/30 bg-[color-mix(in_srgb,var(--primary)_8%,var(--background))] text-foreground"
                          : "border-border bg-background-secondary/80 text-muted",
                      ].join(" ")}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  {t("hefesto.cta")}
                  <ArrowRight
                    className="size-4 transition-transform duration-200 ease-out group-hover/project:translate-x-1 group-focus-within/project:translate-x-1 motion-reduce:transition-none"
                    aria-hidden
                  />
                </p>
              </div>

              <div className="min-w-0">
                <ProjectProductGlimpse />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
