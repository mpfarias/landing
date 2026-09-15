import { BookCover } from "@/components/ui/BookCover";
import { getBooks, type Book } from "@/data/books";
import type { Locale } from "@/i18n/config";

type BookCollectionProps = {
  locale: Locale;
  developmentLabel: string;
};

function badgeFor(book: Book, developmentLabel: string): string | null {
  if (book.status === "available") return null;
  return developmentLabel;
}

export function BookCollection({
  locale,
  developmentLabel,
}: BookCollectionProps) {
  const books = getBooks();
  const featured = books[0];
  const behind = books.slice(1, 4);

  if (!featured) return null;

  return (
    <div
      className="relative mx-auto w-full max-w-[260px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[440px]"
      aria-label={featured.title[locale] ?? featured.stageLabel}
    >
      <div className="cover-glow pointer-events-none absolute inset-[-12%] -z-10" />
      <div className="relative mx-auto aspect-[3/4] w-full sm:aspect-[4/5]">
        {behind[1] ? (
          <div className="absolute top-[10%] left-[4%] hidden w-[42%] rotate-[-9deg] opacity-90 md:block">
            <BookCover
              book={behind[1]}
              locale={locale}
              priority
              badge={badgeFor(behind[1], developmentLabel)}
              sizes="160px"
            />
          </div>
        ) : null}

        {behind[2] ? (
          <div className="absolute top-[20%] right-[2%] hidden w-[38%] rotate-[9deg] opacity-80 lg:block">
            <BookCover
              book={behind[2]}
              locale={locale}
              priority
              badge={badgeFor(behind[2], developmentLabel)}
              sizes="150px"
            />
          </div>
        ) : null}

        {behind[0] ? (
          <div className="absolute top-[8%] right-[2%] w-[58%] rotate-[6deg] sm:top-[10%] sm:right-[8%] sm:w-[52%]">
            <BookCover
              book={behind[0]}
              locale={locale}
              priority
              badge={badgeFor(behind[0], developmentLabel)}
              sizes="(min-width: 1024px) 220px, 180px"
            />
          </div>
        ) : null}

        <div className="absolute bottom-0 left-[8%] z-10 w-[78%] rotate-[-1.5deg] sm:left-[14%] sm:w-[64%]">
          <BookCover
            book={featured}
            locale={locale}
            priority
            sizes="(min-width: 1024px) 280px, 220px"
          />
        </div>
      </div>
    </div>
  );
}
