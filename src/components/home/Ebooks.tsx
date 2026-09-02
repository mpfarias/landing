import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import {
  getFeaturedPublications,
  getPublicationCover,
  isActivePublicationHref,
} from "@/data/publications";
import type { Locale } from "@/i18n/routing";

export async function Ebooks() {
  const t = await getTranslations("ebooks");
  const locale = (await getLocale()) as Locale;
  const items = getFeaturedPublications();

  if (items.length === 0) return null;

  return (
    <section
      id="ebooks"
      aria-labelledby="ebooks-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16">
        <h2
          id="ebooks-heading"
          className="text-[13px] font-medium tracking-[0.14em] text-muted"
        >
          {t("title")}
        </h2>

        <ul className="mt-8 space-y-8">
          {items.map((publication) => {
            const cover = getPublicationCover(publication, locale);
            const id = publication.id;
            const href = publication.purchaseUrl;

            return (
              <li
                key={id}
                className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8"
              >
                {cover ? (
                  <div className="relative h-[140px] w-[93px] shrink-0 overflow-hidden border border-border bg-background sm:h-[160px] sm:w-[107px]">
                    <Image
                      src={cover}
                      alt={t(`items.${id}.coverAlt`)}
                      fill
                      className="object-cover object-center"
                      sizes="107px"
                    />
                  </div>
                ) : null}
                <div className="min-w-0">
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-foreground">
                    {t(`items.${id}.title`)}
                  </h3>
                  <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted">
                    {t(`items.${id}.description`)}
                  </p>
                  {isActivePublicationHref(href) ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/nav-cta mt-4 inline-flex min-h-10 items-center gap-1.5 text-[14px] font-medium text-foreground"
                    >
                      {t(`items.${id}.cta`)}
                      <ArrowUpRight
                        className="icon-shift icon-shift-diag size-3.5 opacity-70"
                        aria-hidden
                      />
                    </a>
                  ) : (
                    <p className="mt-4 text-[14px] font-medium text-muted">
                      {t(`items.${id}.cta`)}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
