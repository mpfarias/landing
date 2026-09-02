"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  getFeaturedPublications,
  getPublicationCover,
  isActivePublicationHref,
} from "@/data/publications";
import type { Locale } from "@/i18n/routing";

function Action({
  href,
  className,
  children,
}: {
  href: string | null;
  className: string;
  children: React.ReactNode;
}) {
  if (isActivePublicationHref(href)) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={className}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return <span className={className}>{children}</span>;
}

export function PublicationCallout() {
  const t = useTranslations("publications");
  const locale = useLocale() as Locale;
  const reduceMotion = useReducedMotion();
  const [publication] = getFeaturedPublications();

  if (!publication) return null;

  const cover = getPublicationCover(publication, locale);
  const id = publication.id;

  return (
    <aside
      aria-labelledby="publication-heading"
      className="relative overflow-x-hidden border-t border-border bg-background-secondary"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: reduceMotion ? 0 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          {cover ? (
            <div className="relative h-[120px] w-[80px] shrink-0 overflow-hidden rounded-[3px] border border-border bg-surface sm:h-[140px] sm:w-[93px]">
              <Image
                src={cover}
                alt={t(`items.${id}.coverAlt`)}
                fill
                className="object-cover object-center"
                sizes="93px"
              />
            </div>
          ) : null}

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
              {t("eyebrow")}
            </p>
            <h2
              id="publication-heading"
              className="mt-2 text-[clamp(1.2rem,2.2vw,1.45rem)] font-semibold tracking-[-0.03em] text-foreground"
            >
              {t(`items.${id}.title`)}
            </h2>
            <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted">
              {t(`items.${id}.description`)}
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
              <Action
                href={publication.purchaseUrl}
                className="cta-purchase group/cta-purchase inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-white sm:w-auto"
              >
                {t(`items.${id}.purchaseCta`)}
                <ArrowUpRight
                  className="icon-shift icon-shift-diag size-3.5 opacity-85"
                  aria-hidden
                />
              </Action>
              <Action
                href={publication.detailsUrl}
                className="group/cta-secondary inline-flex min-h-10 w-full items-center justify-center gap-1.5 text-[13px] font-medium text-foreground sm:w-auto sm:justify-start"
              >
                {t(`items.${id}.detailsCta`)}
                <ArrowRight
                  className="icon-shift icon-shift-right size-3.5 opacity-70"
                  aria-hidden
                />
              </Action>
            </div>
          </div>
        </div>
      </motion.div>
    </aside>
  );
}
