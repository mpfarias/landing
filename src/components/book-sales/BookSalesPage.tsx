import { Author } from "@/components/sections/Author";
import { BookPreviewGallery } from "@/components/book-sales/BookPreviewGallery";
import { SalesFaq } from "@/components/book-sales/SalesFaq";
import { HotmartCta } from "@/components/cta/HotmartCta";
import { BookCover } from "@/components/ui/BookCover";
import { BookPriceDisplay } from "@/components/ui/BookPriceDisplay";
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
    <main id="conteudo" className="sales-page">
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
      />

      <section
        aria-labelledby="sales-problem-heading"
        className="border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container className="max-w-3xl">
          <h2
            id="sales-problem-heading"
            className="font-display text-[clamp(2rem,5vw,3.1rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
          >
            {sales.problem.title}
          </h2>
          <ol className="mt-10 space-y-5">
            {sales.problem.items.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline gap-4 text-[17px] leading-relaxed text-muted sm:text-[18px]"
              >
                <span className="font-display w-8 shrink-0 text-[13px] font-semibold tracking-[0.12em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <blockquote className="mt-12 border-l-2 border-gold pl-5 sm:pl-6">
            <p className="font-display text-[clamp(1.35rem,3vw,1.85rem)] leading-[1.15] font-semibold tracking-[-0.02em] text-foreground">
              {sales.problem.close}
            </p>
          </blockquote>
        </Container>
      </section>

      <section
        aria-labelledby="sales-help-heading"
        className="border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-20">
            <div>
              <h2
                id="sales-help-heading"
                className="font-display text-[clamp(2rem,5vw,3.1rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
              >
                {sales.help.title}
              </h2>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
                {sales.help.lead}
              </p>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-foreground sm:text-[17px]">
                {sales.proposal.title}
              </p>
            </div>
            <ul className="space-y-7 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              {sales.proposal.points.map((point) => (
                <li key={point.title}>
                  <p className="font-display text-[13px] font-semibold tracking-[0.14em] text-gold uppercase">
                    {point.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                    {point.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <MidCta
            locale={locale}
            href={hotmartHref}
            label={sales.hero.cta}
            note={copy.book1.hotmartNote}
          />
        </Container>
      </section>

      <section
        aria-labelledby="sales-presentation-heading"
        className="relative overflow-hidden border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16">
            <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:mx-0">
              <BookCover
                book={book}
                locale={locale}
                sizes="(min-width: 1024px) 280px, 55vw"
              />
            </div>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
                {sales.presentation.eyebrow}
              </p>
              <h2
                id="sales-presentation-heading"
                className="font-display mt-4 text-[clamp(2rem,5vw,3.1rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
              >
                {sales.presentation.title}
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-[16px] leading-relaxed text-muted sm:text-[17px]">
                {copy.book1.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="sales-learn-heading"
        className="border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container>
          <h2
            id="sales-learn-heading"
            className="font-display max-w-2xl text-[clamp(2rem,5vw,3.1rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
          >
            {copy.book1.learnTitle}
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            {copy.book1.learn.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-4 border-t border-line pt-5 text-[16px] leading-relaxed text-muted"
              >
                <span className="font-display mt-0.5 text-[13px] font-semibold tracking-[0.12em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <MidCta
            locale={locale}
            href={hotmartHref}
            label={sales.hero.cta}
            note={copy.book1.hotmartNote}
          />
        </Container>
      </section>

      <section
        aria-labelledby="sales-inside-heading"
        className="border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container>
          <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
            {sales.inside.eyebrow}
          </p>
          <h2
            id="sales-inside-heading"
            className="font-display mt-4 max-w-2xl text-[clamp(2rem,5vw,3.1rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
          >
            {sales.inside.title}
          </h2>
          <BookPreviewGallery locale={locale} />
        </Container>
      </section>

      <section
        aria-labelledby="sales-audience-heading"
        className="border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <Container>
          <h2
            id="sales-audience-heading"
            className="font-display max-w-2xl text-[clamp(2rem,5vw,3.1rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
          >
            {copy.audience.title}
          </h2>
          <ul className="mt-12 space-y-10">
            {copy.audience.profiles.map((profile) => (
              <li
                key={profile.id}
                className="grid grid-cols-1 gap-3 border-t border-line pt-8 sm:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] sm:gap-10"
              >
                <p className="font-display text-[1.15rem] font-semibold tracking-[-0.01em] text-foreground sm:text-[1.3rem]">
                  {profile.title}
                </p>
                <p className="text-[16px] leading-relaxed text-muted sm:text-[17px]">
                  {profile.text}
                </p>
              </li>
            ))}
          </ul>
          <blockquote className="mt-14 max-w-3xl border-l-2 border-gold pl-5 sm:pl-6">
            <p className="font-display text-[clamp(1.5rem,3.6vw,2.3rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-foreground">
              {copy.noCode.title}
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted sm:text-[17px]">
              {copy.noCode.text}
            </p>
          </blockquote>
        </Container>
      </section>

      <section
        aria-labelledby="sales-difference-heading"
        className="relative overflow-hidden border-t border-line bg-background pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(245,181,46,0.08),transparent_48%)]"
          aria-hidden
        />
        <Container className="relative max-w-3xl text-center">
          <h2
            id="sales-difference-heading"
            className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-foreground"
          >
            {sales.difference.title}
          </h2>
          <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-muted sm:text-[17px]">
            {sales.difference.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="font-display mt-12 text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-gold">
            {sales.difference.quote}
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="sales-offer-heading"
        className="relative overflow-hidden border-t border-line bg-background-secondary pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_20%,rgba(245,181,46,0.1),transparent_46%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="border border-gold/25 bg-background/70 px-5 py-10 sm:px-10 sm:py-14 lg:px-14">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
              <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:mx-0">
                <div className="cover-glow pointer-events-none absolute inset-[-12%] -z-10" aria-hidden />
                <BookCover
                  book={book}
                  locale={locale}
                  featured
                  sizes="(min-width: 1024px) 280px, 60vw"
                />
              </div>
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
                  <BookPriceDisplay price={price} promo={copy.book1.promo} size="lg" />
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
          </div>
        </Container>
      </section>

      <Author copy={copy} />

      <SalesFaq title={sales.faq.title} items={sales.faq.items} />

      <section
        aria-labelledby="sales-final-heading"
        className="relative overflow-hidden border-t border-line pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      >
        <div className="sales-hero-wash pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative max-w-3xl text-center">
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
}) {
  const offer = (
    <>
      {price ? <BookPriceDisplay price={price} promo={copy.book1.promo} /> : null}
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
          <p className="mt-3 text-[13px] text-muted">{copy.book1.hotmartNote}</p>
        </div>
      ) : null}
    </>
  );

  return (
    <section
      aria-labelledby="sales-hero-heading"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:min-h-[calc(100svh-4.5rem)] lg:pt-36 lg:pb-24"
    >
      <div className="sales-hero-wash pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16 xl:gap-20">
          <div>
            <p className="text-[12px] font-semibold tracking-[0.22em] text-gold uppercase">
              {copy.book1.eyebrow}
            </p>
            <p className="mt-5 text-[20px] leading-snug font-semibold text-foreground sm:text-[22px]">
              {title}
            </p>
            {subtitle ? (
              <p className="mt-2 text-[16px] leading-snug text-muted sm:text-[17px]">
                {subtitle}
              </p>
            ) : null}
            <h1
              id="sales-hero-heading"
              className="font-display mt-7 text-[clamp(2.05rem,5.6vw,3.7rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-foreground"
            >
              {headline}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {lead}
            </p>
            <div className="hidden lg:block">{offer}</div>
          </div>

          <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:mx-0 lg:max-w-none">
            <div className="cover-glow pointer-events-none absolute inset-[-12%] -z-10" aria-hidden />
            <BookCover
              book={book}
              locale={locale}
              featured
              priority
              sizes="(min-width: 1024px) 460px, 84vw"
            />
          </div>
        </div>
        <div className="lg:hidden">{offer}</div>
      </Container>
    </section>
  );
}

function MidCta({
  locale,
  href,
  label,
  note,
}: {
  locale: Locale;
  href: string | null;
  label: string;
  note: string;
}) {
  if (!href) return null;

  return (
    <div className="mt-12">
      <HotmartCta
        href={href}
        locale={locale}
        location="sales-mid"
        className="min-h-14 px-8 text-[16px]"
      >
        {label}
      </HotmartCta>
      <p className="mt-3 text-[13px] text-muted">{note}</p>
    </div>
  );
}
