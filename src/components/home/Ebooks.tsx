import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  getFeaturedPublication,
  getPublicationCover,
  getSeriesPublications,
  getUpcomingPublications,
  isActivePublicationHref,
  type PublicationDefinition,
} from "@/data/publications";
import type { Locale } from "@/i18n/routing";

const seriesSteps = ["use", "transform", "manage", "create"] as const;

export async function Ebooks() {
  const t = await getTranslations("ebooks");
  const locale = (await getLocale()) as Locale;
  const featured = getFeaturedPublication();
  const upcoming = getUpcomingPublications();
  const series = getSeriesPublications();

  if (series.length === 0) return null;

  return (
    <section
      id="ebooks"
      aria-labelledby="ebooks-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 sm:py-14 lg:py-16">
        <p className="text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
          {t("intro")}
        </p>
        <h2
          id="ebooks-heading"
          className="mt-3 max-w-2xl text-[clamp(1.7rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-foreground"
        >
          {t("headline")}
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          {t("seriesText")}
        </p>

        <ol
          className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4 sm:gap-0"
          aria-label={t("headline")}
        >
          {seriesSteps.map((step, index) => (
            <li
              key={step}
              className="relative flex items-baseline gap-2 border-t border-border pt-3 sm:pr-6"
            >
              {index < seriesSteps.length - 1 ? (
                <span
                  className="pointer-events-none absolute top-3 right-2 hidden text-muted/50 sm:block"
                  aria-hidden
                >
                  →
                </span>
              ) : null}
              <span className="text-[11px] tracking-[0.12em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] font-medium tracking-[0.08em] text-foreground uppercase">
                {t(`steps.${step}`)}
              </span>
            </li>
          ))}
        </ol>

        {featured ? (
          <FeaturedEbook publication={featured} locale={locale} />
        ) : null}

        {upcoming.length > 0 ? (
          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {upcoming.map((publication) => (
              <UpcomingEbook
                key={publication.id}
                publication={publication}
                locale={locale}
              />
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}

async function FeaturedEbook({
  publication,
  locale,
}: {
  publication: PublicationDefinition;
  locale: Locale;
}) {
  const t = await getTranslations("ebooks");
  const id = publication.id;
  const cover = getPublicationCover(publication, locale);
  const highlights = t.has(`items.${id}.highlights`)
    ? (t.raw(`items.${id}.highlights`) as string[])
    : [];
  const href = publication.purchaseUrl;
  const hasPurchase = isActivePublicationHref(href);

  return (
    <article className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-12">
      {cover ? (
        <div className="relative mx-auto aspect-[2/3] w-full max-w-[320px] overflow-hidden bg-background lg:mx-0 lg:max-w-none">
          <Image
            src={cover}
            alt={t(`items.${id}.coverAlt`)}
            fill
            className="object-contain object-top"
            sizes="(min-width: 1024px) 40vw, min(320px, 92vw)"
          />
        </div>
      ) : null}
      <div className="min-w-0 lg:pt-2">
        <p className="text-[12px] font-medium tracking-[0.12em] text-muted uppercase">
          {t("volumeLabel", { volume: publication.volume })}
          <span aria-hidden className="mx-2 text-foreground/25">
            ·
          </span>
          {publication.status === "available"
            ? t("statusAvailable")
            : t("statusInDevelopment")}
        </p>
        <h3 className="mt-3 text-[clamp(1.6rem,2.8vw,2.15rem)] font-semibold tracking-[-0.03em] text-foreground">
          {t(`items.${id}.title`)}
        </h3>
        {t.has(`items.${id}.subtitle`) ? (
          <p className="mt-2 text-[14px] font-medium leading-snug text-foreground/80">
            {t(`items.${id}.subtitle`)}
          </p>
        ) : null}
        {t.has(`items.${id}.description`) ? (
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            {t(`items.${id}.description`)}
          </p>
        ) : null}
        {highlights.length > 0 ? (
          <ul className="mt-5 space-y-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 text-[14px] text-foreground"
              >
                <span className="text-muted" aria-hidden>
                  –
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {hasPurchase ? (
          <div className="mt-7">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-[15px] font-medium text-background transition-opacity duration-200 hover:opacity-85"
            >
              {t.has(`items.${id}.cta`) ? t(`items.${id}.cta`) : t("cta")}
            </a>
            <p className="mt-3 text-[12px] tracking-[0.04em] text-muted">
              {t("securePurchase")}
            </p>
          </div>
        ) : null}
      </div>
    </article>
  );
}

async function UpcomingEbook({
  publication,
  locale,
}: {
  publication: PublicationDefinition;
  locale: Locale;
}) {
  const t = await getTranslations("ebooks");
  const id = publication.id;
  const cover = getPublicationCover(publication, locale);
  const href = publication.purchaseUrl;
  const hasPurchase = isActivePublicationHref(href);

  return (
    <li>
      <article>
        {cover ? (
          <Image
            src={cover}
            alt={t(`items.${id}.coverAlt`)}
            width={681}
            height={1024}
            className="mx-auto h-auto w-full max-w-[220px] object-contain md:mx-0 md:max-w-[260px]"
            sizes="(min-width: 768px) 260px, 220px"
          />
        ) : null}
        <p className="mt-4 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
          {t("volumeLabel", { volume: publication.volume })}
        </p>
        <h3 className="mt-2 text-[16px] font-semibold leading-snug tracking-[-0.02em] text-foreground">
          {t(`items.${id}.title`)}
        </h3>
        {t.has(`items.${id}.category`) ? (
          <p className="mt-2 text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
            {t(`items.${id}.category`)}
          </p>
        ) : null}
        {t.has(`items.${id}.description`) ? (
          <p className="mt-3 text-[13px] leading-relaxed text-muted">
            {t(`items.${id}.description`)}
          </p>
        ) : null}
        <p className="mt-4 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
          {publication.status === "available"
            ? t("statusAvailable")
            : t("statusInDevelopment")}
        </p>
        {hasPurchase ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-10 items-center text-[14px] font-medium text-foreground"
          >
            {t.has(`items.${id}.cta`) ? t(`items.${id}.cta`) : t("cta")}
          </a>
        ) : null}
      </article>
    </li>
  );
}
