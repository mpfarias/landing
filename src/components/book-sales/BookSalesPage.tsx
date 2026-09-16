import { Author } from "@/components/sections/Author";
import { BookPreviewGallery } from "@/components/book-sales/BookPreviewGallery";
import { SalesFaq } from "@/components/book-sales/SalesFaq";
import { HotmartCta } from "@/components/cta/HotmartCta";
import { BookCover } from "@/components/ui/BookCover";
import { BookPriceDisplay } from "@/components/ui/BookPriceDisplay";
import { Container } from "@/components/ui/Container";
import { getBook1SalesCopy } from "@/content/book1-sales";
import {
  getBookCover,
  getBookPrice,
  getBookSubtitle,
  getBookTitle,
  getPurchaseHref,
  type Book,
  type BookPrice,
} from "@/data/books";
import type { Messages } from "@/content/types";
import type { Locale } from "@/i18n/config";

type BookSalesPageProps = {
  locale: Locale;
  book: Book;
  copy: Messages;
};

export function BookSalesPage({ locale, book, copy }: BookSalesPageProps) {
  const sales = getBook1SalesCopy(locale);
  const title = getBookTitle(book, locale) ?? copy.brand;
  const subtitle = getBookSubtitle(book, locale);
  const price = getBookPrice(book, locale);
  const hotmartHref = getPurchaseHref(book, locale);
  const cover = getBookCover(book, locale, "mockup") ?? getBookCover(book, locale);

  return (
    <main id="conteudo">
      <SalesHero
        locale={locale}
        book={book}
        copy={copy}
        title={title}
        subtitle={subtitle}
        price={price}
        hotmartHref={hotmartHref}
        headline={sales.hero.headline}
        lead={sales.hero.lead}
        cta={sales.hero.cta}
        hotmartNote={copy.book1.hotmartNote}
      />

      <section
        aria-labelledby="sales-problem-heading"
        className="border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24"
      >
        <Container>
          <h2
            id="sales-problem-heading"
            className="font-display max-w-3xl text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-foreground"
          >
            {sales.problem.title}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sales.problem.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-muted sm:text-[16px]"
              >
                <span className="mt-2 h-px w-4 shrink-0 bg-gold" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-foreground sm:text-[17px]">
            {sales.problem.close}
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="sales-proposal-heading"
        className="border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24"
      >
        <Container>
          <h2
            id="sales-proposal-heading"
            className="font-display max-w-3xl text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-foreground"
          >
            {sales.proposal.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
            {sales.proposal.lead}
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {sales.proposal.points.map((point) => (
              <li key={point.title} className="min-w-0">
                <span className="mb-3 block h-px w-8 bg-gold" aria-hidden />
                <p className="font-display text-[13px] font-semibold tracking-[0.14em] text-foreground uppercase">
                  {point.title}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {point.text}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="sales-learn-heading"
        className="border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24"
      >
        <Container>
          <h2
            id="sales-learn-heading"
            className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-foreground"
          >
            {copy.book1.learnTitle}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
            {copy.book1.learn.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-muted sm:text-[16px]"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="sales-inside-heading"
        className="border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24"
      >
        <Container>
          <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
            {sales.inside.eyebrow}
          </p>
          <h2
            id="sales-inside-heading"
            className="font-display mt-4 text-[clamp(1.8rem,4vw,2.6rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-foreground"
          >
            {sales.inside.title}
          </h2>
          <BookPreviewGallery locale={locale} />
        </Container>
      </section>

      <section
        aria-labelledby="sales-audience-heading"
        className="border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24"
      >
        <Container>
          <h2
            id="sales-audience-heading"
            className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-foreground"
          >
            {copy.audience.title}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
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
          <blockquote className="mt-12 max-w-3xl border-l-2 border-gold pl-5 sm:pl-6">
            <p className="font-display text-[clamp(1.5rem,3.5vw,2.2rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground">
              {copy.noCode.title}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {copy.noCode.text}
            </p>
          </blockquote>
        </Container>
      </section>

      <section
        aria-labelledby="sales-difference-heading"
        className="border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24"
      >
        <Container>
          <h2
            id="sales-difference-heading"
            className="font-display max-w-3xl text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-foreground"
          >
            {sales.difference.title}
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-[16px] leading-relaxed text-muted sm:text-[17px]">
            {sales.difference.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="font-display mt-8 text-[1.35rem] leading-snug font-semibold tracking-[-0.02em] text-foreground sm:text-[1.55rem]">
            {sales.difference.quote}
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="sales-offer-heading"
        className="relative overflow-hidden border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(245,181,46,0.07),transparent_46%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
            {cover ? (
              <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none">
                <div className="cover-glow pointer-events-none absolute inset-[-10%] -z-10" aria-hidden />
                <BookCover
                  book={book}
                  locale={locale}
                  featured
                  sizes="(min-width: 1024px) 320px, 70vw"
                />
              </div>
            ) : null}
            <div>
              <h2
                id="sales-offer-heading"
                className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-foreground"
              >
                {title}
              </h2>
              {subtitle ? (
                <p className="mt-4 text-[17px] leading-snug font-semibold text-foreground sm:text-[18px]">
                  {subtitle}
                </p>
              ) : null}
              {price ? (
                <BookPriceDisplay
                  price={price}
                  promo={copy.book1.promo}
                  size="lg"
                />
              ) : null}
              {hotmartHref ? (
                <div className="mt-6">
                  <HotmartCta
                    href={hotmartHref}
                    locale={locale}
                    location="sales-offer"
                    className="min-h-14 px-8 text-[16px]"
                  >
                    {sales.offer.cta}
                  </HotmartCta>
                  <p className="mt-3 text-[13px] text-muted">
                    {copy.book1.hotmartNote}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <Author copy={copy} />

      <SalesFaq title={sales.faq.title} items={sales.faq.items} />

      <section
        aria-labelledby="sales-final-heading"
        className="border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container className="max-w-3xl text-center">
          <h2
            id="sales-final-heading"
            className="font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-foreground"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-[17px] leading-snug font-semibold text-foreground sm:text-[18px]">
              {subtitle}
            </p>
          ) : null}
          {price ? (
            <BookPriceDisplay
              price={price}
              promo={copy.book1.promo}
              size="lg"
              align="center"
            />
          ) : null}
          {hotmartHref ? (
            <div className="mt-7 flex justify-center">
              <HotmartCta
                href={hotmartHref}
                locale={locale}
                location="sales-final"
                className="min-h-14 px-8 text-[16px]"
              >
                {sales.offer.cta}
              </HotmartCta>
            </div>
          ) : null}
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
            {sales.final.text}
          </p>
        </Container>
      </section>
    </main>
  );
}

function SalesHero({
  locale,
  book,
  copy,
  title,
  subtitle,
  price,
  hotmartHref,
  headline,
  lead,
  cta,
  hotmartNote,
}: {
  locale: Locale;
  book: Book;
  copy: Messages;
  title: string;
  subtitle: string | null;
  price: BookPrice | null;
  hotmartHref: string | null;
  headline: string;
  lead: string;
  cta: string;
  hotmartNote: string;
}) {
  const offer = (
    <>
      {price ? (
        <BookPriceDisplay price={price} promo={copy.book1.promo} />
      ) : null}
      {hotmartHref ? (
        <div className={price ? "mt-5" : "mt-7"}>
          <HotmartCta
            href={hotmartHref}
            locale={locale}
            location="sales-hero"
            className="min-h-14 px-8 text-[16px]"
          >
            {cta}
          </HotmartCta>
          <p className="mt-3 text-[13px] text-muted">{hotmartNote}</p>
        </div>
      ) : null}
    </>
  );

  return (
    <section
      aria-labelledby="sales-hero-heading"
      className="relative overflow-hidden bg-background pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(61,100,135,0.16),transparent_55%),linear-gradient(180deg,#050b11_0%,#0a1420_100%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-20">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
              {copy.book1.eyebrow}
            </p>
            <h1
              id="sales-hero-heading"
              className="font-display mt-4 text-[clamp(2rem,5.4vw,3.5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-foreground"
            >
              {headline}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {lead}
            </p>
            <p className="mt-7 text-[18px] leading-snug font-semibold text-foreground sm:text-[20px]">
              {title}
            </p>
            {subtitle ? (
              <p className="mt-2 text-[16px] leading-snug text-muted sm:text-[17px]">
                {subtitle}
              </p>
            ) : null}
            <div className="hidden lg:block">{offer}</div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:mx-0 lg:max-w-none">
            <div className="cover-glow pointer-events-none absolute inset-[-10%] -z-10" aria-hidden />
            <BookCover
              book={book}
              locale={locale}
              featured
              priority
              sizes="(min-width: 1024px) 440px, 82vw"
            />
          </div>
        </div>
        <div className="lg:hidden">{offer}</div>
      </Container>
    </section>
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
