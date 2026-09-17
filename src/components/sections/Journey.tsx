import { BookCover } from "@/components/ui/BookCover";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Container } from "@/components/ui/Container";
import {
  getBookTitle,
  getBooks,
  getStatusLabel,
  type Book,
} from "@/data/books";
import { volumeAccent } from "@/data/visual";
import type { Messages } from "@/content/types";
import type { Locale } from "@/i18n/config";

type JourneyProps = {
  locale: Locale;
  copy: Messages;
};

export function Journey({ locale, copy }: JourneyProps) {
  const volumes = getBooks();

  return (
    <section
      id="jornada"
      aria-label={copy.nav.journey}
      className="bg-background pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pb-24"
    >
      <Container>
        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {volumes.map((book) => (
            <VolumeStep
              key={book.id}
              book={book}
              locale={locale}
              copy={copy}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}

function VolumeStep({
  book,
  locale,
  copy,
}: {
  book: Book;
  locale: Locale;
  copy: Messages;
}) {
  const accent = volumeAccent[book.stage];
  const stage = copy.hero.stages[book.order - 1] ?? book.stageLabel;
  const title = getBookTitle(book, locale);
  const question = copy.journey.questions[book.stage];
  const status = getStatusLabel(book.status, copy.status);

  return (
    <li>
      <div className="flex items-start gap-4 lg:block">
        <div className="w-[88px] shrink-0 lg:mb-5 lg:w-full lg:max-w-[168px]">
          <BookCover
            book={book}
            locale={locale}
            sizes="(min-width: 1024px) 168px, 88px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className="text-[11px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: accent }}
          >
            {stage}
          </p>
          <h3 className="font-display mt-2 text-[1.15rem] leading-snug font-semibold tracking-[-0.01em] text-foreground">
            {title ?? stage}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-muted">
            “{question}”
          </p>
          <StatusBadge className="mt-4" label={status} />
        </div>
      </div>
    </li>
  );
}
