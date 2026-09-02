"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
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

function TagList({ items }: { items: readonly string[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] tracking-[0.06em] text-muted">
      {items.slice(0, 3).map((item, index) => (
        <li key={item} className="inline-flex items-center gap-2">
          {index > 0 ? (
            <span aria-hidden className="text-foreground/25">
              ·
            </span>
          ) : null}
          {item}
        </li>
      ))}
    </ul>
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
      className="group/project block rounded-2xl border border-border bg-surface p-5 outline-none transition-[border-color,background-color] duration-300 hover:border-primary/25 hover:bg-[color-mix(in_srgb,var(--surface)_88%,var(--primary))] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background-secondary sm:p-6"
    >
      <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
        {t("hefesto.category")}
      </p>
      <h3 className="mt-2 text-[clamp(1.75rem,3.6vw,2.4rem)] font-semibold tracking-[-0.04em] text-foreground">
        {t("hefesto.name")}
      </h3>
      <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted sm:text-[15px]">
        {t("hefesto.description")}
      </p>

      <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
        {hefestoMetricKeys.map((key) => (
          <div key={key} className="min-w-0">
            <dt className="text-[15px] font-semibold tracking-tight text-foreground">
              {t(`hefesto.metrics.${key}.value`)}
            </dt>
            <dd className="mt-0.5 text-[11px] text-muted">
              {t(`hefesto.metrics.${key}.label`)}
            </dd>
          </div>
        ))}
      </dl>

      <TagList items={t.raw("hefesto.tags") as string[]} />
      <p className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-foreground/70">
        {t("hefesto.cta")}
        <ArrowRight
          className="size-3.5 transition-transform duration-200 ease-out group-hover/project:translate-x-0.5 group-focus-within/project:translate-x-0.5 motion-reduce:transition-none"
          aria-hidden
        />
      </p>
    </Link>
  );
}

function CompactCard({
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
      className="group/project flex h-full flex-col rounded-2xl border border-border bg-surface p-5 outline-none transition-[border-color,background-color] duration-300 hover:border-primary/25 hover:bg-[color-mix(in_srgb,var(--surface)_88%,var(--primary))] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background-secondary"
    >
      <p className="text-[11px] font-medium tracking-[0.14em] text-muted">
        {t(`${id}.category`)}
      </p>
      <h3 className="mt-3 text-[clamp(1.2rem,2vw,1.4rem)] font-semibold tracking-[-0.03em] text-foreground">
        {t(`${id}.name`)}
      </h3>
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
        {t(`${id}.description`)}
      </p>
      <TagList items={t.raw(`${id}.tags`) as string[]} />
      <p className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-foreground/70">
        {t(`${id}.cta`)}
        <ArrowRight
          className="size-3.5 transition-transform duration-200 ease-out group-hover/project:translate-x-0.5 group-focus-within/project:translate-x-0.5 motion-reduce:transition-none"
          aria-hidden
        />
      </p>
    </Link>
  );
}

export function ProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const reduceMotion = useReducedMotion();
  const [hefesto] = getPrimaryProjects().filter(
    (project) => project.id === "hefesto",
  );
  const compact = [
    ...getPrimaryProjects().filter((project) => project.id === "orion"),
    ...getSecondaryProjects(),
  ];

  return (
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-24 overflow-x-hidden border-t border-border bg-background-secondary"
    >
      <div className="relative mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-[12px] font-medium tracking-[0.2em] text-muted">
            {t("label")}
          </p>
          <h2
            id="projects-heading"
            className="mt-4 max-w-xl text-[clamp(1.65rem,3.2vw,2.35rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground"
          >
            <span className="block">{t("headlineLine1")}</span>
            <span className="block">{t("headlineLine2")}</span>
          </h2>
        </motion.div>

        <div className="mt-8 space-y-4 lg:mt-10">
          {hefesto ? (
            <FeaturedHefesto project={hefesto} locale={locale} />
          ) : null}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {compact.map((project) => (
              <CompactCard
                key={project.id}
                project={project}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
