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
        <ol className="relative grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-x-8">
          <span
            className="pointer-events-none absolute top-[1.15rem] right-0 left-0 hidden h-px bg-line lg:block"
            aria-hidden
          />
          {volumes.map((book, index) => (
            <VolumeStep
              key={book.id}
              book={book}
              locale={locale}
              copy={copy}
              isLast={index === volumes.length - 1}
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
  isLast,
}: {
  book: Book;
  locale: Locale;
  copy: Messages;
  isLast: boolean;
}) {
  const accent = volumeAccent[book.stage];
  const stage = copy.hero.stages[book.order - 1] ?? book.stageLabel;
  const title = getBookTitle(book, locale);
  const question = copy.journey.questions[book.stage];
  const status = getStatusLabel(book.status, copy.status);

  return (
    <li
      className={[
        "relative border-line py-6 lg:border-0 lg:py-0",
        isLast ? "border-b-0" : "border-b lg:border-b-0",
      ].join(" ")}
    >
      <div className="flex items-start gap-4 lg:block">
        <div className="flex shrink-0 flex-col items-center lg:mb-5 lg:flex-row lg:gap-3">
          <span
            className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-background text-[11px] font-semibold tracking-[0.08em]"
            style={{ borderColor: accent, color: accent }}
          >
            {String(book.order).padStart(2, "0")}
          </span>
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
