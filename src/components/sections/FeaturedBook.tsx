import { HotmartCta } from "@/components/cta/HotmartCta";
import { BookCover } from "@/components/ui/BookCover";
import { Container } from "@/components/ui/Container";
import {
  getBookPrice,
  getBookSubtitle,
  getBookTitle,
  getFeaturedBook,
  getPurchaseHref,
} from "@/data/books";
import type { Messages } from "@/content/types";
import type { Locale } from "@/i18n/config";

type FeaturedBookProps = {
  locale: Locale;
  copy: Messages;
};

export function FeaturedBook({ locale, copy }: FeaturedBookProps) {
  const book = getFeaturedBook();
  const purchaseHref = getPurchaseHref(book, locale);
  const title = getBookTitle(book, locale) ?? copy.brand;
  const subtitle = getBookSubtitle(book, locale);
  const price = getBookPrice(book, locale);

  return (
    <section
      id="livros"
      aria-labelledby="book-1-heading"
      className="relative overflow-hidden border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(245,181,46,0.07),transparent_46%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:sticky lg:top-28 lg:mx-0 lg:max-w-none">
            <div className="cover-glow pointer-events-none absolute inset-[-10%] -z-10" aria-hidden />
            <BookCover
              book={book}
              locale={locale}
              featured
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
            />
          </div>

          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
              {copy.book1.eyebrow}
            </p>
            <p className="mt-4 text-[15px] text-muted italic">
              “{copy.book1.question}”
            </p>
            <h2
              id="book-1-heading"
              className="font-display mt-4 text-[clamp(2rem,5vw,3.4rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-foreground"
            >
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 text-[17px] leading-snug font-semibold text-foreground sm:text-[18px]">
                {subtitle}
              </p>
            ) : null}
            <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {copy.book1.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 lg:mt-16">
          <h3 className="font-display text-[1.35rem] font-semibold tracking-[-0.01em] text-foreground sm:text-[1.5rem]">
            {copy.book1.learnTitle}
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
            {copy.book1.learn.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-muted"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 lg:mt-12">
          <PurchaseBlock
            href={purchaseHref}
            locale={locale}
            copy={copy}
            priceDisplay={price?.display ?? null}
            location="book-1-primary"
          />
        </div>

        <div className="mt-16 lg:mt-20">
          <h3 className="font-display text-[1.35rem] font-semibold tracking-[-0.01em] text-foreground sm:text-[1.5rem]">
            {copy.audience.title}
          </h3>
          <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
            {copy.audience.profiles.map((profile) => (
              <li key={profile.id} className="min-w-0">
                <span className="mb-3 block h-px w-8 bg-gold" aria-hidden />
                <p className="font-display text-[13px] font-semibold tracking-[0.14em] text-foreground uppercase">
                  {profile.title}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {profile.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="mt-16 max-w-3xl border-l-2 border-gold pl-5 sm:pl-6 lg:mt-20">
          <p className="font-display text-[clamp(1.6rem,4vw,2.4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-foreground">
            {copy.noCode.title}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
            {copy.noCode.text}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground sm:text-[16px]">
            {copy.noCode.note}
          </p>
        </blockquote>

        {purchaseHref ? (
          <div className="mt-12 lg:mt-14">
            <HotmartCta href={purchaseHref} locale={locale} location="book-1-secondary">
              {copy.book1.buySecondary}
            </HotmartCta>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function PurchaseBlock({
  href,
  locale,
  copy,
  priceDisplay,
  location,
}: {
  href: string | null;
  locale: Locale;
  copy: Messages;
  priceDisplay: string | null;
  location: "book-1-primary";
}) {
  if (!priceDisplay && !href) return null;

  return (
    <div>
      {priceDisplay ? (
        <p className="font-display text-[2rem] leading-none font-semibold tracking-[-0.03em] text-foreground sm:text-[2.15rem]">
          {priceDisplay}
        </p>
      ) : null}
      {href ? (
        <>
          <div className={priceDisplay ? "mt-5" : undefined}>
            <HotmartCta href={href} locale={locale} location={location}>
              {copy.book1.buy}
            </HotmartCta>
          </div>
          <p className="mt-3 text-[13px] font-semibold text-foreground">
            {copy.book1.hotmartNote}
          </p>
        </>
      ) : null}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className="mt-0.5 shrink-0 text-gold"
    >
      <path
        d="M3.5 9.2l3.4 3.3L14.5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
