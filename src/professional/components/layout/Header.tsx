"use client";

import { useEffect, useState } from "react";
import { Container } from "@/professional/components/ui/Container";
import { Button } from "@/professional/components/ui/Button";
import { site } from "@/professional/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-250",
        scrolled
          ? "border-b border-line bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
        <a href="#conteudo" className="min-w-0">
          <span className="block font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
            {site.shortName}
          </span>
          <span className="block text-[11px] tracking-[0.08em] text-muted">
            {site.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Seções">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-muted transition-colors duration-250 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contato" className="min-h-10 px-4 text-[12px]">
            Fale comigo
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <MenuIcon open={open} />
        </button>
      </Container>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-line bg-background-secondary lg:hidden"
        >
          <Container className="flex flex-col py-3">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-[15px] text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      {open ? (
        <path
          d="M4 4L14 14M14 4L4 14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path d="M3 5H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M3 9H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M3 13H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
