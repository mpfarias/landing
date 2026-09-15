import Image from "next/image";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getBookCover, getCoverAlt, type Book } from "@/data/books";
import { volumeAccent } from "@/data/visual";
import type { Locale } from "@/i18n/config";

type BookCoverProps = {
  book: Book;
  locale: Locale;
  priority?: boolean;
  featured?: boolean;
  badge?: string | null;
  className?: string;
  sizes?: string;
};

export function BookCover({
  book,
  locale,
  priority = false,
  featured = false,
  badge,
  className = "",
  sizes = "(min-width: 1024px) 280px, 220px",
}: BookCoverProps) {
  const cover = getBookCover(book, locale);
  const alt = getCoverAlt(book, locale);
  const accent = volumeAccent[book.stage];

  return (
    <div className={`relative ${className}`}>
      <div
        className={[
          "relative flex aspect-[2/3] items-center justify-center overflow-hidden rounded-[3px] bg-surface",
          featured
            ? "cover-shadow-featured"
            : "book-shadow transition-transform duration-300 ease-out hover:-translate-y-1",
        ].join(" ")}
      >
        {cover ? (
          <Image
            src={cover}
            alt={alt}
            width={680}
            height={1020}
            loading="eager"
            fetchPriority={priority ? "high" : "auto"}
            sizes={sizes}
            className="h-full w-full object-contain"
          />
        ) : (
          <CoverPlaceholder
            order={book.order}
            stageLabel={book.stageLabel}
            accent={accent}
          />
        )}
      </div>
      {badge ? (
        <StatusBadge className="absolute top-3 right-3" label={badge} />
      ) : null}
    </div>
  );
}

function CoverPlaceholder({
  order,
  stageLabel,
  accent,
}: {
  order: number;
  stageLabel: string;
  accent: string;
}) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center"
      role="img"
      aria-label={`Etapa ${stageLabel}`}
    >
      <p
        className="font-display text-[1.6rem] font-semibold tracking-[0.08em]"
        style={{ color: accent }}
      >
        {String(order).padStart(2, "0")}
      </p>
      <span className="h-px w-8" style={{ background: accent }} aria-hidden />
      <p className="font-display text-[12px] font-semibold tracking-[0.18em] text-foreground uppercase">
        {stageLabel}
      </p>
    </div>
  );
}
