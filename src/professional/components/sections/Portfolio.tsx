"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/professional/components/ui/Button";
import { Container } from "@/professional/components/ui/Container";
import { ProjectPreview } from "@/professional/components/portfolio/ProjectPreview";
import {
  categoryLabels,
  portfolioFilters,
  portfolioItems,
} from "@/professional/data/portfolio";
import type { PortfolioFilterId, PortfolioItem } from "@/professional/data/types";

const API_MARKS = ["REST API", "GET", "JSON", "Swagger"] as const;

export function Portfolio() {
  const [filter, setFilter] = useState<PortfolioFilterId>("featured");

  const items = useMemo(() => {
    if (filter === "featured") {
      return portfolioItems.filter((item) => item.featured);
    }
    return portfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  const featuredItems = items.filter((item) => item.featured);
  const compactItems = items.filter((item) => !item.featured && item.category === "system");
  const apiItems = items.filter((item) => item.category === "api");
  const ebookItems = items.filter((item) => item.category === "ebook");

  return (
    <section id="portfolio" className="border-t border-line bg-background-secondary py-16 sm:py-20 lg:py-24">
      <Container>
        <p className="text-[12px] font-semibold tracking-[0.2em] text-cyan uppercase">
          Portfólio
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-[clamp(1.8rem,4vw,2.7rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-ink">
          Alguns projetos que transformaram problemas em soluções.
        </h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
          Uma seleção de sistemas, APIs e projetos que desenvolvi ou idealizei
          ao longo da minha trajetória.
        </p>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar portfólio"
        >
          {portfolioFilters.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(item.id)}
                className={[
                  "rounded-full border px-4 py-2 text-[12px] font-semibold tracking-[0.1em] uppercase transition-[color,border-color,background-color] duration-200",
                  active
                    ? "border-accent bg-accent/15 text-ink"
                    : "border-line text-muted hover:border-accent/50 hover:text-ink",
                ].join(" ")}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div key={filter} className="animate-filter mt-8 space-y-8">
          {featuredItems.length ? (
            <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {featuredItems.map((item) => (
                <li key={item.id} className="min-w-0">
                  <FeaturedCard item={item} />
                </li>
              ))}
            </ul>
          ) : null}

          {compactItems.length ? (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {compactItems.map((item) => (
                <li key={item.id} className="min-w-0">
                  <CompactCard item={item} />
                </li>
              ))}
            </ul>
          ) : null}

          {apiItems.length ? (
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {apiItems.map((item) => (
                <li key={item.id} className="min-w-0">
                  <ApiCard item={item} />
                </li>
              ))}
            </ul>
          ) : null}

          {ebookItems.length ? (
            <ul className="grid grid-cols-1">
              {ebookItems.map((item) => (
                <li key={item.id} className="min-w-0">
                  <EbookCard item={item} />
                </li>
              ))}
            </ul>
          ) : null}

          {!items.length ? (
            <p className="text-[15px] text-muted">
              Nenhum projeto nesta categoria por enquanto.
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function FeaturedCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-accent/55 xl:flex-row">
      <div className="min-w-0 xl:flex xl:w-[48%] xl:shrink-0">
        <div className="w-full overflow-hidden xl:h-full">
          <ProjectPreview item={item} size="featured" />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">
            {categoryLabels[item.category]}
          </p>
          <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-accent uppercase">
            Destaque
          </span>
        </div>
        <h3 className="font-display mt-2 text-[1.4rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.55rem]">
          {item.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.description}</p>
        <TechList items={item.technologies} limit={6} className="mt-4" />
        {item.url ? <ProjectLink item={item} /> : null}
      </div>
    </article>
  );
}

function CompactCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[14px] border border-line bg-surface transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-accent/45">
      <div className="overflow-hidden">
        <ProjectPreview item={item} size="compact" />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">
          {categoryLabels[item.category]}
        </p>
        <h3 className="font-display mt-1.5 text-[1.15rem] font-semibold tracking-[-0.02em] text-ink">
          {item.title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted">{item.description}</p>
        <TechList items={item.technologies} limit={4} className="mt-4" />
        {item.url ? <ProjectLink item={item} /> : null}
      </div>
    </article>
  );
}

function ApiCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-line bg-background p-5 transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-cyan/50">
      <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-cyan uppercase">
          API
        </p>
        <span className="h-px flex-1 bg-line" aria-hidden />
        <span className="text-[11px] tracking-[0.08em] text-muted">REST</span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-hidden>
        {API_MARKS.map((mark) => (
          <li
            key={mark}
            className="rounded border border-line px-2 py-0.5 text-[10px] tracking-[0.12em] text-muted uppercase"
          >
            {mark}
          </li>
        ))}
      </ul>
      <h3 className="font-display mt-4 text-[1.25rem] font-semibold tracking-[-0.02em] text-ink">
        {item.title}
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.description}</p>
      <TechList items={item.technologies} limit={4} className="mt-4" />
      {item.url ? <ProjectLink item={item} /> : null}
    </article>
  );
}

function EbookCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-5 transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-accent/45 sm:p-7 lg:grid lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center lg:gap-10">
      {item.covers?.length ? (
        <CoverGrid
          covers={item.covers}
          titles={item.coverTitles ?? []}
          series={item.title}
        />
      ) : (
        <ProjectPreview item={item} size="featured" />
      )}
      <div className="mt-6 min-w-0 lg:mt-0">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan uppercase">
          {item.subtitle ?? categoryLabels[item.category]}
        </p>
        <h3 className="font-display mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.7rem]">
          {item.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.description}</p>
        {item.summary ? (
          <p className="mt-3 text-[13px] tracking-[0.04em] text-ink/80 sm:text-[14px]">
            {item.summary}
          </p>
        ) : null}
        <TechList items={item.technologies} limit={3} className="mt-5" />
        {item.url ? <ProjectLink item={item} /> : null}
      </div>
    </article>
  );
}

function TechList({
  items,
  limit,
  className = "",
}: {
  items: string[];
  limit: number;
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.slice(0, limit).map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-line px-2.5 py-1 text-[11px] tracking-[0.04em] text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectLink({ item }: { item: PortfolioItem }) {
  if (!item.url) return null;

  return (
    <Button href={item.url} className="mt-5 w-fit" external={item.external}>
      {item.urlLabel ?? "Conhecer o projeto"}
    </Button>
  );
}

function CoverGrid({
  covers,
  titles,
  series,
}: {
  covers: string[];
  titles: string[];
  series: string;
}) {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
      {covers.map((src, index) => {
        const title = titles[index] ?? `${series} — volume ${index + 1}`;
        return (
          <li key={src} className="overflow-hidden rounded-[6px] shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
            <Image
              src={src}
              alt={`Capa do livro ${title}`}
              width={180}
              height={270}
              sizes="(min-width: 640px) 140px, 42vw"
              className="h-auto w-full object-cover"
            />
          </li>
        );
      })}
    </ul>
  );
}
