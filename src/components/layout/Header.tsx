"use client";

import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getBook1SalesHref } from "@/data/books";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/content/types";

type HeaderProps = {
  locale: Locale;
  copy: Messages;
};

export function Header({ locale, copy }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const salesHref = getBook1SalesHref(locale);

  const navigation = [
    { label: copy.nav.series, href: "#serie" },
    { label: copy.nav.books, href: "#livros" },
    { label: copy.nav.journey, href: "#jornada" },
    { label: copy.nav.faq, href: "#faq" },
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
        <a href="#conteudo" className="min-w-0 shrink leading-tight">
          <span className="font-display block truncate text-[13px] font-semibold tracking-[0.04em] text-foreground uppercase sm:text-[16px] sm:tracking-[0.06em]">
            {copy.brand}
          </span>
          <span className="mt-0.5 block truncate text-[10px] font-medium tracking-[0.12em] text-muted uppercase sm:tracking-[0.16em]">
            {copy.brandLine}
          </span>
        </a>

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
          <LanguageSwitcher locale={locale} label={copy.languageLabel} />
          {salesHref ? (
            <Button
              href={salesHref}
              className="min-h-10 px-5 text-[13px]"
              data-nav="series-to-book-1"
              openInNewTab
            >
              {copy.book1.buy}
            </Button>
          ) : null}
        </div>

        <div className="flex shrink-0 items-center gap-3 xl:hidden">
          <LanguageSwitcher locale={locale} label={copy.languageLabel} />
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
          {salesHref ? (
            <Button
              href={salesHref}
              className="mt-3"
              onClick={() => setOpen(false)}
              data-nav="series-to-book-1"
              openInNewTab
            >
              {copy.book1.buy}
            </Button>
          ) : null}
        </Container>
      </div>
    </header>
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
