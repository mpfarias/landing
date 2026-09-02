"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { HefestoGlimpse } from "@/components/projects/HefestoGlimpse";
import { OrionGlimpse } from "@/components/projects/OrionGlimpse";
import {
  getPrimaryProjects,
  getSecondaryProjects,
  type ProjectDefinition,
  type ProjectId,
} from "@/data/projects";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const hefestoMetricKeys = ["calls", "incidents", "time"] as const;

function projectHref(slug: string) {
  return {
    pathname: "/projects/[slug]" as const,
    params: { slug },
  };
}

function CompetencyList({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  if (items.length === 0) return null;

  return (
    <div className="mt-6">
      <p className="text-[11px] font-medium tracking-[0.14em] text-muted">
        {label}
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-1 gap-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-l border-border pl-3 pr-4 text-[12px] tracking-[0.04em] text-foreground/85"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CtaLabel({ label }: { label: string }) {
  return (
    <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
      {label}
      <ArrowRight
        className="size-4 transition-transform duration-200 ease-out group-hover/project:translate-x-0.5 group-focus-within/project:translate-x-0.5 motion-reduce:transition-none"
        aria-hidden
      />
    </p>
  );
}

function FeaturedHefesto({
  project,
  locale,
}: {
  project: ProjectDefinition;
  locale: Locale;
}) {
  const t = useTranslations("projects");
  const slug = project.slugs[locale];

  return (
    <Link
      href={projectHref(slug)}
      className="group/project block rounded-2xl border border-border bg-surface p-5 outline-none transition-[border-color,background-color] duration-300 hover:border-primary/25 hover:bg-[color-mix(in_srgb,var(--surface)_88%,var(--primary))] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background-secondary sm:p-7 lg:p-8"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
        <div className="min-w-0">
          <p className="text-[11px] font-medium tracking-[0.18em] text-muted">
            {t("hefesto.category")}
          </p>
          <h3 className="mt-3 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-[-0.04em] text-foreground">
            {t("hefesto.name")}
          </h3>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            {t("hefesto.description")}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-3 border-y border-border py-5 sm:gap-6">
            {hefestoMetricKeys.map((key) => (
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

          <CompetencyList
            label={t("competenciesLabel")}
            items={t.raw("hefesto.competencies") as string[]}
          />
          <CtaLabel label={t("hefesto.cta")} />
        </div>

        <div className="min-w-0">
          <HefestoGlimpse />
        </div>
      </div>
    </Link>
  );
}

function FeaturedOrion({
  project,
  locale,
}: {
  project: ProjectDefinition;
  locale: Locale;
}) {
  const t = useTranslations("projects");
  const slug = project.slugs[locale];

  return (
    <Link
      href={projectHref(slug)}
      className="group/project block rounded-2xl border border-border bg-surface p-5 outline-none transition-[border-color,background-color] duration-300 hover:border-primary/25 hover:bg-[color-mix(in_srgb,var(--surface)_88%,var(--primary))] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background-secondary sm:p-7 lg:p-8"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <div className="min-w-0 max-lg:order-2">
          <OrionGlimpse />
        </div>

        <div className="min-w-0 max-lg:order-1">
          <p className="text-[11px] font-medium tracking-[0.18em] text-muted">
            {t("orion.category")}
          </p>
          <h3 className="mt-3 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-[-0.04em] text-foreground">
            {t("orion.name")}
          </h3>
          <p className="mt-4 max-w-xl text-[clamp(1.15rem,2.2vw,1.45rem)] font-medium leading-snug tracking-[-0.02em] text-foreground">
            <span className="block">{t("orion.headlineLine1")}</span>
            <span className="block text-secondary">
              {t("orion.headlineLine2")}
            </span>
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            {t("orion.description")}
          </p>

          <CompetencyList
            label={t("competenciesLabel")}
            items={t.raw("orion.competencies") as string[]}
          />
          <CtaLabel label={t("orion.cta")} />
        </div>
      </div>
    </Link>
  );
}

function SecondaryCard({
  project,
  locale,
}: {
  project: ProjectDefinition;
  locale: Locale;
}) {
  const t = useTranslations("projects");
  const id = project.id as ProjectId;
  const slug = project.slugs[locale];

  return (
    <Link
      href={projectHref(slug)}
      className="group/project flex h-full flex-col rounded-2xl border border-border bg-surface p-5 outline-none transition-[border-color,background-color] duration-300 hover:border-primary/25 hover:bg-[color-mix(in_srgb,var(--surface)_88%,var(--primary))] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background-secondary sm:p-6"
    >
      <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
        {t(`${id}.category`)}
      </p>
      <h3 className="mt-4 text-[clamp(1.35rem,2.4vw,1.7rem)] font-semibold tracking-[-0.03em] text-foreground">
        {t(`${id}.name`)}
      </h3>
      <p className="mt-3 text-[15px] font-medium leading-snug text-foreground">
        <span className="block">{t(`${id}.headlineLine1`)}</span>
        <span className="block">{t(`${id}.headlineLine2`)}</span>
      </p>
      <p className="mt-4 flex-1 text-[14px] leading-relaxed text-muted">
        {t(`${id}.description`)}
      </p>
      <CompetencyList
        label={t("competenciesLabel")}
        items={t.raw(`${id}.competencies`) as string[]}
      />
      <CtaLabel label={t(`${id}.cta`)} />
    </Link>
  );
}

export function ProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const reduceMotion = useReducedMotion();
  const primary = getPrimaryProjects();
  const secondary = getSecondaryProjects();
  const hefesto = primary.find((project) => project.id === "hefesto");
  const orion = primary.find((project) => project.id === "orion");

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : ({ opacity: 0, y: 16 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
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

        <div className="mt-12 space-y-6 lg:mt-14 lg:space-y-8">
          {hefesto ? (
            <motion.div {...reveal(0.08)}>
              <FeaturedHefesto project={hefesto} locale={locale} />
            </motion.div>
          ) : null}
          {orion ? (
            <motion.div {...reveal(0.1)}>
              <FeaturedOrion project={orion} locale={locale} />
            </motion.div>
          ) : null}
        </div>

        <motion.div
          {...reveal(0.12)}
          className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 md:grid-cols-2 md:gap-5 xl:grid-cols-3"
        >
          {secondary.map((project) => (
            <SecondaryCard
              key={project.id}
              project={project}
              locale={locale}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
