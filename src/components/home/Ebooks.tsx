import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { EbookVolumeDetails } from "@/components/home/EbookVolumeDetails";
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
const ctaClassName =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 text-[15px] font-medium text-background";

function readStringList(
  t: Awaited<ReturnType<typeof getTranslations>>,
  key: string,
): string[] {
  if (!t.has(key)) return [];
  const value = t.raw(key);
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

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
      <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
          {t("seriesLabel")}
        </p>
        <h2
          id="ebooks-heading"
          className="mt-3 max-w-2xl text-[clamp(1.55rem,3.2vw,2.2rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-foreground"
        >
          <span className="block">{t("seriesHeadlineLine1")}</span>
          <span className="block">{t("seriesHeadlineLine2")}</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          {t("seriesText")}
        </p>

        <ol
          className="mt-5 flex min-h-12 max-h-16 flex-wrap items-center gap-x-2.5 gap-y-1 sm:flex-nowrap"
          aria-label={t("seriesLabel")}
        >
          {seriesSteps.map((step, index) => (
            <li key={step} className="flex items-center gap-2.5">
              <span className="text-[11px] font-medium tracking-[0.1em] text-foreground uppercase">
                {String(index + 1).padStart(2, "0")} {t(`steps.${step}`)}
              </span>
              {index < seriesSteps.length - 1 ? (
                <span className="text-muted/45" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        {featured ? (
          <FeaturedEbook publication={featured} locale={locale} />
        ) : null}

        {upcoming.length > 0 ? (
          <div className="mt-16 sm:mt-20">
            <p className="text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
              {t("upcomingLabel")}
            </p>
            <ul className="mt-8 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((publication) => (
                <UpcomingEbook
                  key={publication.id}
                  publication={publication}
                  locale={locale}
                />
              ))}
            </ul>
          </div>
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
  const body = readStringList(t, `items.${id}.body`);

  return (
    <article className="mt-12 grid grid-cols-1 items-start gap-6 rounded-xl border border-border bg-foreground/[0.03] p-5 sm:mt-14 sm:p-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-8">
      {cover ? (
        <div className="mx-auto w-[min(100%,240px)] shrink-0 lg:mx-0 lg:w-[280px]">
          <Image
            src={cover}
            alt={t(`items.${id}.coverAlt`)}
            width={681}
            height={1024}
            priority
            loading="eager"
            className="h-auto w-full object-contain"
            sizes="(min-width: 1024px) 280px, 240px"
          />
        </div>
      ) : null}
      <div className="min-w-0">
        <p className="text-[12px] font-medium tracking-[0.12em] text-muted uppercase">
          {t("volumeLabel", { volume: publication.volume })}
          <span aria-hidden className="mx-2 text-foreground/25">
            ·
          </span>
          {publication.status === "available"
            ? t("statusAvailable")
            : t("statusInDevelopment")}
        </p>
        <h3 className="mt-2 text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold tracking-[-0.03em] text-foreground">
          {t(`items.${id}.title`)}
        </h3>
        {t.has(`items.${id}.subtitle`) ? (
          <p className="mt-1.5 text-[15px] font-medium leading-snug text-foreground/85">
            {t(`items.${id}.subtitle`)}
          </p>
        ) : null}
        {t.has(`items.${id}.lead`) ? (
          <p className="mt-3 text-[14px] leading-relaxed text-muted">
            {t(`items.${id}.lead`)}
          </p>
        ) : null}
        {body.map((paragraph) => (
          <p
            key={paragraph}
            className="mt-2.5 text-[14px] leading-relaxed text-muted"
          >
            {paragraph}
          </p>
        ))}
        {t.has(`items.${id}.highlight`) ? (
          <p className="mt-4 text-[14px] font-medium text-foreground">
            {t(`items.${id}.highlight`)}
          </p>
        ) : null}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {t.has(`items.${id}.question`) ? (
            <p className="text-[14px] leading-snug text-foreground/85">
              <span className="block text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
                {t("questionLabel")}
              </span>
              <span className="mt-1 block">
                “{t(`items.${id}.question`)}”
              </span>
            </p>
          ) : null}
          {t.has(`items.${id}.result`) ? (
            <p className="text-[14px] leading-relaxed text-muted">
              <span className="block text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
                {t("resultLabel")}
              </span>
              <span className="mt-1 block">{t(`items.${id}.result`)}</span>
            </p>
          ) : null}
        </div>
        <FeaturedPurchaseCta
          href={publication.purchaseUrl}
          label={t.has(`items.${id}.cta`) ? t(`items.${id}.cta`) : t("cta")}
          note={t("securePurchase")}
        />
      </div>
    </article>
  );
}

function FeaturedPurchaseCta({
  href,
  label,
  note,
}: {
  href: string | null;
  label: string;
  note: string;
}) {
  const hasPurchase = isActivePublicationHref(href);

  return (
    <div className="mt-5">
      {hasPurchase ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ctaClassName} transition-opacity duration-200 hover:opacity-85`}
        >
          {label}
        </a>
      ) : (
        // TODO: Configurar URL real da Hotmart do Livro 1
        <button
          type="button"
          disabled
          aria-disabled="true"
          className={`${ctaClassName} cursor-not-allowed`}
        >
          {label}
        </button>
      )}
      <p className="mt-3 text-[12px] tracking-[0.04em] text-muted">{note}</p>
    </div>
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
  const body = readStringList(t, `items.${id}.body`);
  const examples = readStringList(t, `items.${id}.examples`);
  const workItems = readStringList(t, `items.${id}.workItems`);
  const journey = readStringList(t, `items.${id}.journey`);
  const hasDetails =
    body.length > 0 ||
    examples.length > 0 ||
    workItems.length > 0 ||
    journey.length > 0 ||
    t.has(`items.${id}.result`);

  return (
    <li className="h-full">
      <article className="flex h-full flex-col rounded-xl border border-border bg-foreground/[0.03] p-5">
        {cover ? (
          <div className="mx-auto w-[150px] shrink-0 md:w-[180px]">
            <Image
              src={cover}
              alt={t(`items.${id}.coverAlt`)}
              width={681}
              height={1024}
              className="h-auto w-full object-contain"
              sizes="180px"
            />
          </div>
        ) : null}
        <p className="mt-5 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
          {t("volumeLabel", { volume: publication.volume })}
        </p>
        <h3 className="mt-2 text-[17px] font-semibold leading-snug tracking-[-0.02em] text-foreground">
          {t(`items.${id}.title`)}
        </h3>
        {t.has(`items.${id}.subtitle`) ? (
          <p className="mt-2 text-[14px] font-medium leading-snug text-foreground/85">
            {t(`items.${id}.subtitle`)}
          </p>
        ) : null}
        {t.has(`items.${id}.category`) ? (
          <p className="mt-3 text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
            {t(`items.${id}.category`)}
          </p>
        ) : null}
        {t.has(`items.${id}.lead`) ? (
          <p className="mt-3 text-[13px] leading-relaxed text-muted">
            {t(`items.${id}.lead`)}
          </p>
        ) : null}
        {t.has(`items.${id}.highlight`) ? (
          <p className="mt-3 text-[13px] font-medium leading-snug text-foreground">
            {t(`items.${id}.highlight`)}
          </p>
        ) : null}
        {t.has(`items.${id}.question`) ? (
          <p className="mt-4 text-[13px] leading-snug text-foreground/85">
            <span className="block text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
              {t("questionLabel")}
            </span>
            <span className="mt-1 block">
              “{t(`items.${id}.question`)}”
            </span>
          </p>
        ) : null}
        {hasDetails ? (
          <EbookVolumeDetails
            expandLabel={t("expandVolume")}
            collapseLabel={t("collapseVolume")}
          >
            {body.map((paragraph) => (
              <p key={paragraph} className="text-[13px] leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
            {workItems.length > 0 ? (
              <ul className="flex flex-wrap gap-x-2 gap-y-1 text-[12px] text-muted">
                {workItems.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            ) : null}
            {examples.length > 0 ? (
              <ul className="space-y-1.5">
                {examples.map((item) => (
                  <li key={item} className="text-[13px] leading-snug text-foreground/80">
                    “{item}”
                  </li>
                ))}
              </ul>
            ) : null}
            {journey.length > 0 ? (
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {journey.map((step, index) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="text-[11px] font-medium tracking-[0.08em] text-foreground uppercase">
                      {step}
                    </span>
                    {index < journey.length - 1 ? (
                      <span className="text-muted/45" aria-hidden>
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            ) : null}
            {t.has(`items.${id}.result`) ? (
              <p className="text-[13px] leading-relaxed text-muted">
                <span className="block text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
                  {t("resultLabel")}
                </span>
                <span className="mt-1 block">{t(`items.${id}.result`)}</span>
              </p>
            ) : null}
          </EbookVolumeDetails>
        ) : null}
        <p className="mt-auto pt-5 text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
          {publication.status === "available"
            ? t("statusAvailable")
            : t("statusInDevelopment")}
        </p>
      </article>
    </li>
  );
}
