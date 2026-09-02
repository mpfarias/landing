"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  getFeaturedPublications,
  getPublicationCover,
  isActivePublicationHref,
  type PublicationDefinition,
  type PublicationId,
} from "@/data/publications";
import type { Locale } from "@/i18n/routing";

function PublicationCover({
  src,
  alt,
  placeholderLabel,
  placeholderHint,
}: {
  src: string | null;
  alt: string;
  placeholderLabel: string;
  placeholderHint: string;
}) {
  return (
    <div
      className="relative aspect-[2/3] w-full overflow-hidden rounded-[3px] border border-border bg-surface transition-[transform,box-shadow] duration-300 ease-out group-hover/publication:translate-y-[-3px] motion-reduce:transition-none motion-reduce:group-hover/publication:translate-y-0"
      style={{ boxShadow: "var(--shadow-cover)" }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1023px) 200px, 240px"
        />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(165deg, color-mix(in srgb, var(--primary) 9%, var(--surface)) 0%, var(--surface) 46%, color-mix(in srgb, var(--secondary) 8%, var(--background-secondary)) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.32]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div
            aria-hidden
            className="absolute left-5 right-5 top-5 h-px bg-border"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/85 to-transparent px-5 pb-5 pt-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
              {placeholderLabel}
            </p>
            <p className="mt-2 max-w-[11rem] text-[12px] leading-relaxed text-foreground/80">
              {placeholderHint}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function publicationLinkProps(href: string) {
  const isExternal = /^https?:\/\//.test(href);
  return isExternal
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };
}

function PublicationAction({
  href,
  className,
  children,
}: {
  href: string | null;
  className: string;
  children: React.ReactNode;
}) {
  if (isActivePublicationHref(href)) {
    return (
      <a {...publicationLinkProps(href)} className={className}>
        {children}
      </a>
    );
  }

  return <span className={className}>{children}</span>;
}

function PublicationActions({
  purchaseUrl,
  detailsUrl,
  purchaseLabel,
  detailsLabel,
}: {
  purchaseUrl: string | null;
  detailsUrl: string | null;
  purchaseLabel: string;
  detailsLabel: string;
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
      <PublicationAction
        href={purchaseUrl}
        className="cta-purchase group/cta-purchase inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white sm:w-auto"
      >
        {purchaseLabel}
        <ArrowUpRight
          className="icon-shift icon-shift-diag size-4 opacity-85"
          aria-hidden
        />
      </PublicationAction>
      <PublicationAction
        href={detailsUrl}
        className="group/cta-secondary inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-2 text-sm font-medium text-foreground sm:w-auto sm:justify-start"
      >
        {detailsLabel}
        <ArrowRight
          className="icon-shift icon-shift-right size-4 opacity-70"
          aria-hidden
        />
      </PublicationAction>
    </div>
  );
}

function FeaturedPublication({
  publication,
}: {
  publication: PublicationDefinition;
}) {
  const t = useTranslations("publications");
  const locale = useLocale() as Locale;
  const reduceMotion = useReducedMotion();
  const id = publication.id as PublicationId;
  const tags = t.raw(`items.${id}.tags`) as string[];
  const cover = getPublicationCover(publication, locale);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: reduceMotion ? 0 : 0.08,
        duration: reduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group/publication rounded-2xl border border-border bg-surface p-5 transition-[border-color] duration-300 hover:border-primary/20 focus-within:border-primary/30 sm:p-7 lg:p-10"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,240px)_minmax(0,1fr)] xl:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            delay: reduceMotion ? 0 : 0.14,
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto w-full max-w-[200px] lg:mx-0 lg:max-w-none"
        >
          <PublicationCover
            src={cover}
            alt={t(`items.${id}.coverAlt`)}
            placeholderLabel={t("coverPlaceholderLabel")}
            placeholderHint={t("coverPlaceholderHint")}
          />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: reduceMotion ? 0 : 0.2,
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-w-0"
        >
          <p className="text-[11px] font-medium tracking-[0.18em] text-muted">
            {t(`items.${id}.eyebrow`)}
          </p>
          <h3 className="mt-3 text-[clamp(1.75rem,3.6vw,2.65rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground">
            {t(`items.${id}.title`)}
          </h3>
          <p className="mt-3 text-[15px] font-medium leading-snug text-foreground/90 sm:text-base">
            <span className="block">{t(`items.${id}.subtitleLine1`)}</span>
            <span className="block">{t(`items.${id}.subtitleLine2`)}</span>
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {t(`items.${id}.description`)}
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] tracking-[0.08em] text-muted">
            {tags.map((tag, index) => (
              <li key={tag} className="inline-flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden className="text-foreground/25">
                    ·
                  </span>
                ) : null}
                {tag}
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-md text-[13px] leading-relaxed text-muted">
            {t(`items.${id}.seriesNote`)}
          </p>

          <PublicationActions
            purchaseUrl={publication.purchaseUrl}
            detailsUrl={publication.detailsUrl}
            purchaseLabel={t(`items.${id}.purchaseCta`)}
            detailsLabel={t(`items.${id}.detailsCta`)}
          />
        </motion.div>
      </div>
    </motion.article>
  );
}

export function PublicationsSection() {
  const t = useTranslations("publications");
  const reduceMotion = useReducedMotion();
  const featured = getFeaturedPublications();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : ({ opacity: 0, y: 16 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
      delay: reduceMotion ? 0 : delay,
      duration: reduceMotion ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="publicacoes"
      aria-labelledby="publications-heading"
      className="relative scroll-mt-24 overflow-x-hidden border-t border-border bg-background"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <motion.p
            {...reveal(0)}
            className="text-[12px] font-medium tracking-[0.2em] text-muted"
          >
            {t("label")}
          </motion.p>
          <motion.h2
            id="publications-heading"
            {...reveal(0.08)}
            className="mt-5 text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground"
          >
            <span className="block">{t("headlineLine1")}</span>
            <span className="block text-accent-gradient">
              {t("headlineAccent")}
            </span>
          </motion.h2>
          <motion.p
            {...reveal(0.12)}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
          >
            {t("body")}
          </motion.p>
        </div>

        <div className="mt-12 space-y-8 lg:mt-14">
          {featured.map((publication) => (
            <FeaturedPublication
              key={publication.id}
              publication={publication}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
