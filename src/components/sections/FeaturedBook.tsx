import { Button } from "@/components/ui/Button";
import { BookCover } from "@/components/ui/BookCover";
import { LandingPrice } from "@/components/ui/LandingPrice";
import { Container } from "@/components/ui/Container";
import {
  getBook1SalesHref,
  getBookPrice,
  getBookSubtitle,
  getBookTitle,
  getFeaturedBook,
} from "@/data/books";
import type { Messages } from "@/content/types";
import type { Locale } from "@/i18n/config";

type FeaturedBookProps = {
  locale: Locale;
  copy: Messages;
};

export function FeaturedBook({ locale, copy }: FeaturedBookProps) {
  const book = getFeaturedBook();
  const salesHref = getBook1SalesHref(locale);
  const title = getBookTitle(book, locale) ?? copy.brand;
  const subtitle = getBookSubtitle(book, locale);
  const price = getBookPrice(book, locale);
  const shortBody = copy.book1.body[0];

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
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:mx-0 lg:max-w-none">
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
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {shortBody}
            </p>

            {price ? (
              <LandingPrice
                price={price}
                promo={copy.book1.promo}
                locale={locale}
              />
            ) : null}

            {salesHref ? (
              <div className={price?.display ? "mt-5" : "mt-7"}>
                <Button href={salesHref} data-nav="series-to-book-1" openInNewTab>
                  {copy.book1.buy}
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
