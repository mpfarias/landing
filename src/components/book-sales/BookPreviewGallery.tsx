"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { book1PreviewPages } from "@/data/book1-preview";
import type { Locale } from "@/i18n/config";

export function BookPreviewGallery({ locale }: { locale: Locale }) {
  const pages = book1PreviewPages;
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  if (!pages.length) return null;

  const current = active !== null ? pages[active] : null;

  return (
    <>
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page, index) => (
          <li key={page.src}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="block w-full overflow-hidden rounded-[4px] border border-line bg-surface text-left transition-colors duration-200 hover:border-gold/40"
            >
              <Image
                src={page.src}
                alt={page.alt[locale]}
                width={900}
                height={1200}
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 92vw"
                className="h-auto w-full object-contain"
              />
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt[locale]}
          onClick={() => setActive(null)}
        >
          <Image
            src={current.src}
            alt={current.alt[locale]}
            width={1200}
            height={1600}
            className="max-h-[90vh] w-auto max-w-full object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
