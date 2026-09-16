import Image from "next/image";
import { BookPreviewGallery } from "@/components/book-sales/BookPreviewGallery";
import { SalesFaq } from "@/components/book-sales/SalesFaq";
import { HotmartCta } from "@/components/cta/HotmartCta";
import { BookCover } from "@/components/ui/BookCover";
import { Container } from "@/components/ui/Container";
import { getBook1SalesCopy } from "@/content/book1-sales";
import {
  getBookPrice,
  getBookSubtitle,
  getBookTitle,
  getPurchaseHref,
  type Book,
  type BookPrice,
} from "@/data/books";
import type { Messages } from "@/content/types";
import type { Locale } from "@/i18n/config";

const AUTHOR_CUTOUT = "/author/marcelo-farias.png";

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

  return (
    <main id="conteudo" className="sales-page bg-background">
      <section
        aria-labelledby="sales-hero-heading"
        className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
      >
        <div className="sales-hero-wash pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16">
            <div>
              <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
                {copy.book1.eyebrow}
              </p>
              <h1
                id="sales-hero-heading"
                className="font-display mt-5 text-[clamp(2.1rem,5.8vw,3.8rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-foreground"
              >
                {sales.hero.headline}
              </h1>
              <p className="mt-6 text-[20px] leading-snug font-semibold text-foreground sm:text-[22px]">
                {title}
              </p>
              {subtitle ? (
                <p className="mt-2 text-[16px] leading-snug text-muted sm:text-[17px]">
                  {subtitle}
                </p>
              ) : null}
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
                {sales.hero.lead}
              </p>
              <div className="hidden lg:block">
                <SalesPrice price={price} />
                <SalesCta
                  locale={locale}
                  href={hotmartHref}
                  label={sales.hero.cta}
                  location="sales-hero"
                />
                <TrustBadges items={sales.badges} />
              </div>
            </div>
            <HeroCover book={book} locale={locale} />
          </div>
          <div className="lg:hidden">
            <SalesPrice price={price} />
            <SalesCta
              locale={locale}
              href={hotmartHref}
              label={sales.hero.cta}
              location="sales-hero"
            />
            <TrustBadges items={sales.badges} />
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="sales-problem-heading"
        className="border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container className="max-w-3xl">
          <h2
            id="sales-problem-heading"
            className="font-display text-[clamp(2rem,5vw,3.15rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
          >
            {sales.problem.title}
          </h2>
          <ul className="mt-10 space-y-5">
            {sales.problem.items.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-4 text-[17px] leading-relaxed text-muted sm:text-[18px]"
              >
                <span className="font-display mt-0.5 w-8 shrink-0 text-[13px] font-semibold tracking-[0.12em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-display mt-12 text-[clamp(1.35rem,3.2vw,1.9rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-foreground">
            {sales.problem.close}
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="sales-learn-heading"
        className="border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container>
          <h2
            id="sales-learn-heading"
            className="font-display max-w-2xl text-[clamp(2rem,5vw,3.15rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
          >
            {copy.book1.learnTitle}
          </h2>
          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {copy.book1.learn.map((item, index) => (
              <li key={item} className="border-t border-gold/25 pt-5">
                <p className="font-display text-[13px] font-semibold tracking-[0.16em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-[18px] leading-snug font-semibold text-foreground sm:text-[20px]">
                  {item}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
            {sales.learnClose}
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="sales-inside-heading"
        className="border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container>
          <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
            {sales.inside.eyebrow}
          </p>
          <h2
            id="sales-inside-heading"
            className="font-display mt-4 max-w-2xl text-[clamp(2rem,5vw,3.15rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
          >
            {sales.inside.title}
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
            {sales.inside.lead}
          </p>
          <BookPreviewGallery locale={locale} />
        </Container>
      </section>

      <section
        aria-labelledby="sales-receive-heading"
        className="relative overflow-hidden border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16">
            <HeroCover book={book} locale={locale} compact />
            <div>
              <h2
                id="sales-receive-heading"
                className="font-display text-[clamp(2rem,5vw,3.15rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
              >
                {sales.receive.title}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-muted sm:text-[17px]">
                {sales.receive.subtitle}
              </p>
              <ul className="mt-8 space-y-6">
                {sales.receive.items.map((item) => (
                  <li key={item.title}>
                    <p className="font-display text-[13px] font-semibold tracking-[0.14em] text-gold uppercase">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="oferta"
        aria-labelledby="sales-offer-heading"
        className="relative overflow-hidden border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(245,181,46,0.12),transparent_48%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="border border-gold/30 bg-background-secondary/80 px-5 py-10 sm:px-10 sm:py-14 lg:px-14">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
              <HeroCover book={book} locale={locale} compact />
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
                <SalesPrice price={price} large />
                <SalesCta
                  locale={locale}
                  href={hotmartHref}
                  label={sales.hero.cta}
                  location="sales-offer"
                />
                <TrustBadges items={sales.badges} />
              </div>
            </div>
            <div className="mt-12 border-t border-gold/20 pt-10">
              <GuaranteeBlock title={sales.guarantee.title} text={sales.guarantee.text} />
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="sales-author-heading"
        className="border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
            <div className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:max-w-none">
              <div
                className="pointer-events-none absolute inset-x-[10%] top-[8%] h-[70%] rounded-full bg-[radial-gradient(ellipse_at_50%_20%,rgba(245,181,46,0.12),transparent_70%)]"
                aria-hidden
              />
              <Image
                src={AUTHOR_CUTOUT}
                alt={sales.author.photoAlt}
                width={720}
                height={900}
                sizes="(min-width: 1024px) 380px, 80vw"
                className="relative h-auto w-full object-contain object-top"
              />
            </div>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
                {sales.author.eyebrow}
              </p>
              <h2
                id="sales-author-heading"
                className="font-display mt-4 text-[clamp(2rem,4.6vw,3.2rem)] leading-[0.96] font-semibold tracking-[-0.02em] text-foreground"
              >
                {sales.author.name}
              </h2>
              <p className="mt-4 text-[17px] leading-snug font-semibold text-foreground sm:text-[18px]">
                {sales.author.highlight}
              </p>
              <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                {sales.author.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
                {sales.author.principleLead}
              </p>
              <blockquote className="mt-4 max-w-2xl border-l border-gold pl-5 sm:pl-6">
                <p className="text-[16px] leading-relaxed font-semibold text-foreground italic sm:text-[17px]">
                  “{sales.author.principleQuote}”
                </p>
              </blockquote>
              <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                {sales.author.closing.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="font-display mt-8 text-[1.45rem] leading-snug font-semibold tracking-[-0.02em] text-gold sm:text-[1.7rem]">
                {sales.author.quote}
              </p>
              <div className="mt-8">
                <SalesCta
                  locale={locale}
                  href={hotmartHref}
                  label={sales.hero.cta}
                  location="sales-author"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SalesFaq title={sales.faq.title} items={sales.faq.items} />

      <section
        aria-labelledby="sales-final-heading"
        className="relative overflow-hidden border-t border-line pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <div className="sales-hero-wash pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <HeroCover book={book} locale={locale} compact />
          <div className="text-center lg:text-left">
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
            <SalesPrice price={price} large />
            <div className="flex justify-center lg:justify-start">
              <SalesCta
                locale={locale}
                href={hotmartHref}
                label={sales.hero.cta}
                location="sales-final"
              />
            </div>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:mx-0 sm:text-[16px]">
              {sales.final.text}
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

function HeroCover({
  book,
  locale,
  compact = false,
}: {
  book: Book;
  locale: Locale;
  compact?: boolean;
}) {
  return (
    <div
      className={[
        "relative mx-auto w-full",
        compact ? "max-w-[280px] sm:max-w-[320px] lg:mx-0" : "max-w-[380px] sm:max-w-[440px] lg:mx-0 lg:max-w-none",
      ].join(" ")}
    >
      <div className="cover-glow pointer-events-none absolute inset-[-12%] -z-10" aria-hidden />
      <BookCover
        book={book}
        locale={locale}
        featured
        priority={!compact}
        sizes={compact ? "(min-width: 1024px) 320px, 70vw" : "(min-width: 1024px) 460px, 84vw"}
      />
    </div>
  );
}

function SalesPrice({
  price,
  large = false,
}: {
  price: BookPrice | null;
  large?: boolean;
}) {
  if (!price) return null;

  const cash = price.cashText ?? price.display;
  const installmentValue = price.installmentDisplay;
  const installmentCount = price.installmentCount;
  const symbol = price.currency === "BRL" ? "R$" : "US$";

  if (installmentValue && installmentCount) {
    return (
      <div className="mt-7">
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-[16px] font-semibold text-foreground sm:text-[18px]">
            em até {installmentCount}x de
          </span>
          <span
            className={[
              "font-display font-semibold tracking-[-0.03em] text-gold",
              large ? "text-[1.45rem] sm:text-[1.65rem]" : "text-[1.3rem] sm:text-[1.45rem]",
            ].join(" ")}
          >
            {symbol}
          </span>
          <span
            className={[
              "font-display leading-none font-semibold tracking-[-0.04em] text-gold",
              large ? "text-[2.6rem] sm:text-[3.1rem]" : "text-[2.2rem] sm:text-[2.6rem]",
            ].join(" ")}
          >
            {installmentValue}
            <sup className="ml-0.5 text-[1rem] font-semibold sm:text-[1.15rem]">*</sup>
          </span>
        </p>
        <p className="mt-3 text-[16px] text-muted sm:text-[18px]">{cash}</p>
      </div>
    );
  }

  return (
    <div className="mt-7">
      <p
        className={[
          "font-display leading-none font-semibold tracking-[-0.03em] text-gold",
          large ? "text-[2rem] sm:text-[2.4rem]" : "text-[1.75rem] sm:text-[2rem]",
        ].join(" ")}
      >
        {cash}
      </p>
    </div>
  );
}

function SalesCta({
  locale,
  href,
  label,
  location,
}: {
  locale: Locale;
  href: string | null;
  label: string;
  location: "sales-hero" | "sales-offer" | "sales-author" | "sales-final";
}) {
  if (!href) return null;

  return (
    <div className="mt-6">
      <HotmartCta
        href={href}
        locale={locale}
        location={location}
        className="min-h-14 px-8 text-[16px]"
      >
        {label}
      </HotmartCta>
    </div>
  );
}

function TrustBadges({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.04em] text-foreground uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function GuaranteeBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold"
        aria-hidden
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 3.5l8 3.2v6.4c0 5.1-3.4 9.7-8 11.4-4.6-1.7-8-6.3-8-11.4V6.7L14 3.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10 14.2l2.4 2.4L18.2 11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <h3 className="font-display text-[1.55rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.8rem]">
          {title}
        </h3>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
          {text}
        </p>
      </div>
    </div>
  );
}
