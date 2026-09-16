"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getBook1PreviewPages } from "@/data/book1-preview";
import type { Locale } from "@/i18n/config";

export function BookPreviewGallery({ locale }: { locale: Locale }) {
  const pages = getBook1PreviewPages(locale);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const total = pages.length;
  const current = lightbox !== null ? pages[lightbox] : null;

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowLeft") {
        setLightbox((value) =>
          value === null ? null : (value - 1 + total) % total,
        );
      }
      if (event.key === "ArrowRight") {
        setLightbox((value) => (value === null ? null : (value + 1) % total));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, total]);

  if (!total) return null;

  return (
    <>
      <div className="mt-10">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:gap-6">
          {pages.map((page, pageIndex) => (
            <button
              key={page.src}
              type="button"
              onClick={() => setLightbox(pageIndex)}
              className="relative w-[min(82vw,420px)] shrink-0 snap-center overflow-hidden rounded-[4px] bg-white text-left shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:brightness-[1.03] lg:w-[min(32%,340px)]"
            >
              <Image
                src={page.src}
                alt={page.alt}
                width={1200}
                height={1790}
                priority={pageIndex === 0}
                loading={pageIndex === 0 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 340px, 82vw"
                className="h-auto w-full object-cover"
              />
              <span className="absolute right-3 bottom-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/85 text-gold shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
                <MagnifierIcon />
                <span className="sr-only">Ampliar página</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {current && lightbox !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
          />
          <div className="relative z-10 flex max-h-[94vh] w-full max-w-[min(92vw,720px)] flex-col items-center">
            <div className="overflow-hidden bg-white shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <Image
                src={current.src}
                alt={current.alt}
                width={1200}
                height={1790}
                sizes="(min-width: 1024px) 720px, 92vw"
                className="block h-auto max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="mt-4 flex w-full items-center justify-between gap-4">
              <ArrowButton
                label="Página anterior"
                onClick={() => setLightbox((value) => (value === null ? 0 : (value - 1 + total) % total))}
              />
              <p className="text-[13px] font-semibold tracking-[0.16em] text-gold uppercase">
                {lightbox + 1} / {total}
              </p>
              <ArrowButton
                label="Próxima página"
                onClick={() => setLightbox((value) => (value === null ? 0 : (value + 1) % total))}
                next
              />
            </div>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="mt-4 text-[13px] font-semibold tracking-[0.12em] text-muted uppercase transition-colors hover:text-gold"
            >
              Fechar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

function MagnifierIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="5.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 12.2L15.2 15.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowButton({
  label,
  onClick,
  next = false,
}: {
  label: string;
  onClick: () => void;
  next?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-gold transition-colors duration-200 hover:border-gold/60 hover:bg-gold/10"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path
          d={next ? "M6 3.5L12 9l-6 5.5" : "M12 3.5L6 9l6 5.5"}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
