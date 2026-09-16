"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { HotmartCta } from "@/components/cta/HotmartCta";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  getBook1SalesHref,
  getFeaturedBook,
  getPurchaseHref,
  isBook1SalesPath,
} from "@/data/books";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/content/types";

type HeaderProps = {
  locale: Locale;
  copy: Messages;
};

export function Header({ locale, copy }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onSalesPage = isBook1SalesPath(pathname);
  const featured = getFeaturedBook();
  const salesHref = getBook1SalesHref(locale);
  const hotmartHref = getPurchaseHref(featured, locale);
  const homeHref = onSalesPage ? `/${locale}` : "#conteudo";
  const navBase = onSalesPage ? `/${locale}` : "";
  const languageHref = (code: Locale) =>
    onSalesPage ? `/${code}/${featured.slug[code]}` : `/${code}`;

  const navigation = [
    { label: copy.nav.series, href: `${navBase}#serie` },
    { label: copy.nav.books, href: `${navBase}#livros` },
    { label: copy.nav.journey, href: `${navBase}#jornada` },
    { label: copy.nav.faq, href: onSalesPage ? "#faq" : `${navBase}#faq` },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200",
        scrolled || open
          ? "border-b border-line bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <Container className="flex min-h-[4.25rem] items-center justify-between gap-4 overflow-hidden py-3 sm:min-h-[4.5rem]">
        <Link href={homeHref} className="min-w-0 shrink leading-tight">
          <span className="font-display block truncate text-[13px] font-semibold tracking-[0.04em] text-foreground uppercase sm:text-[16px] sm:tracking-[0.06em]">
            {copy.brand}
          </span>
          <span className="mt-0.5 block truncate text-[10px] font-medium tracking-[0.12em] text-muted uppercase sm:tracking-[0.16em]">
            {copy.brandLine}
          </span>
        </Link>

        <nav
          className="hidden shrink-0 items-center gap-6 xl:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link whitespace-nowrap text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 xl:flex">
          <LanguageSwitcher
            locale={locale}
            label={copy.languageLabel}
            hrefForLocale={languageHref}
          />
          <HeaderCta
            locale={locale}
            label={copy.book1.buy}
            onSalesPage={onSalesPage}
            salesHref={salesHref}
            hotmartHref={hotmartHref}
            location="header"
            className="min-h-10 px-5 text-[13px]"
          />
        </div>

        <div className="flex shrink-0 items-center gap-3 xl:hidden">
          <LanguageSwitcher
            locale={locale}
            label={copy.languageLabel}
            hrefForLocale={languageHref}
          />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </Container>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-line bg-background xl:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-3 text-[16px] text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <HeaderCta
            locale={locale}
            label={copy.book1.buy}
            onSalesPage={onSalesPage}
            salesHref={salesHref}
            hotmartHref={hotmartHref}
            location="header-mobile"
            className="mt-3"
            onClick={() => setOpen(false)}
          />
        </Container>
      </div>
    </header>
  );
}

function HeaderCta({
  locale,
  label,
  onSalesPage,
  salesHref,
  hotmartHref,
  location,
  className,
  onClick,
}: {
  locale: Locale;
  label: string;
  onSalesPage: boolean;
  salesHref: string | null;
  hotmartHref: string | null;
  location: "header" | "header-mobile";
  className?: string;
  onClick?: () => void;
}) {
  if (onSalesPage) {
    return (
      <HotmartCta
        href={hotmartHref}
        locale={locale}
        location={location}
        className={className}
        onClick={onClick}
      >
        {label}
      </HotmartCta>
    );
  }

  if (!salesHref) return null;

  return (
    <Button
      href={salesHref}
      className={className}
      onClick={onClick}
      data-nav="series-to-book-1"
    >
      {label}
    </Button>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      {open ? (
        <path
          d="M5 5l12 12M17 5L5 17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h14M4 11h14M4 15h14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
