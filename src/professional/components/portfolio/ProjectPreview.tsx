"use client";

import Image from "next/image";
import { categoryLabels } from "@/professional/data/portfolio";
import type { PortfolioItem } from "@/professional/data/types";

type PreviewSize = "featured" | "compact";

export function ProjectPreview({
  item,
  size = "featured",
}: {
  item: PortfolioItem;
  size?: PreviewSize;
}) {
  const featured = size === "featured";
  const alt = item.imageAlt ?? `Prévia do projeto ${item.title}`;

  return (
    <div
      className={[
        "relative overflow-hidden bg-surface-alt",
        featured
          ? "aspect-[16/10] max-h-[240px] w-full xl:aspect-auto xl:h-full xl:max-h-none xl:min-h-[220px]"
          : "h-[132px] w-full sm:h-[148px]",
      ].join(" ")}
    >
      {item.coverImage ? (
        <Image
          src={item.coverImage}
          alt={alt}
          fill
          sizes={
            featured
              ? "(min-width: 1280px) 28vw, 90vw"
              : "(min-width: 640px) 40vw, 90vw"
          }
          className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        <FallbackMark item={item} size={size} />
      )}
    </div>
  );
}

function FallbackMark({
  item,
  size,
}: {
  item: PortfolioItem;
  size: PreviewSize;
}) {
  const featured = size === "featured";
  const tone = item.id.length % 2 === 0 ? "accent" : "cyan";
  const initial = item.title.replace(/[^\p{L}]/gu, "").slice(0, 1).toUpperCase();

  return (
    <div className="absolute inset-0" aria-hidden>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: featured ? "32px 32px" : "24px 24px",
        }}
      />
      <div
        className={[
          "pointer-events-none absolute inset-0",
          tone === "accent"
            ? "bg-[radial-gradient(ellipse_at_0%_0%,rgba(67,139,255,0.16),transparent_58%)]"
            : "bg-[radial-gradient(ellipse_at_100%_0%,rgba(56,199,199,0.14),transparent_58%)]",
        ].join(" ")}
      />
      <div
        className={[
          "relative flex h-full flex-col justify-between",
          featured ? "p-4 sm:p-5" : "p-3",
        ].join(" ")}
      >
        <p className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
          {categoryLabels[item.category]}
        </p>
        <div className="flex items-end justify-between gap-3">
          <p
            className={[
              "font-display min-w-0 font-semibold tracking-[-0.03em] text-ink",
              featured ? "text-[1.35rem] sm:text-[1.5rem]" : "text-[1.05rem]",
            ].join(" ")}
          >
            {item.title}
          </p>
          <span
            className={[
              "font-display shrink-0 leading-none font-semibold",
              tone === "accent" ? "text-accent/35" : "text-cyan/35",
              featured ? "text-[3.4rem] sm:text-[4rem]" : "text-[2.2rem]",
            ].join(" ")}
          >
            {initial}
          </span>
        </div>
      </div>
    </div>
  );
}
