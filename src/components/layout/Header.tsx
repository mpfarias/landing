"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navKeys = ["about", "systems", "ebooks", "contact"] as const;

const navHashes: Record<(typeof navKeys)[number], string> = {
  about: "sobre",
  systems: "sistemas",
  ebooks: "ebooks",
  contact: "contato",
};

type HeaderProps = {
  variant?: "home" | "internal";
};

export function Header({ variant = "home" }: HeaderProps) {
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const internal = variant === "internal";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setMenuOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (internal) return;

    const sections = Object.values(navHashes)
      .map((hash) => document.getElementById(hash))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) setActiveId(id);
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0, 0.2, 0.45],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [internal]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200",
          scrolled || internal || menuOpen
            ? "border-b border-border bg-[var(--header-bg)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href="/"
            className="shrink-0 text-[15px] font-semibold tracking-[0.18em] text-foreground"
          >
            {tCommon("brand")}
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label={t("ariaLabel")}
          >
            {navKeys.map((key) => {
              const hash = navHashes[key];
              const current = !internal && activeId === hash;
              const className = [
                "nav-link text-[13px] font-medium transition-colors duration-200",
                current ? "text-foreground" : "text-muted hover:text-foreground",
              ].join(" ");

              if (internal) {
                return (
                  <Link
                    key={key}
                    href={{ pathname: "/", hash }}
                    className={className}
                  >
                    {t(key)}
                  </Link>
                );
              }

              return (
                <a
                  key={key}
                  href={`#${hash}`}
                  aria-current={current ? "true" : undefined}
                  className={className}
                >
                  {t(key)}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center text-foreground"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? tCommon("closeMenu") : tCommon("openMenu")}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t("ariaLabel")}
          className="fixed inset-0 z-40 bg-[var(--overlay)] lg:hidden"
        >
          <nav
            className="flex flex-col gap-1 px-5 pt-20"
            aria-label={t("ariaLabel")}
          >
            {navKeys.map((key) => {
              const hash = navHashes[key];
              const className =
                "py-3 text-2xl font-medium tracking-tight text-foreground";

              if (internal) {
                return (
                  <Link
                    key={key}
                    href={{ pathname: "/", hash }}
                    onClick={() => setMenuOpen(false)}
                    className={className}
                  >
                    {t(key)}
                  </Link>
                );
              }

              return (
                <a
                  key={key}
                  href={`#${hash}`}
                  onClick={() => setMenuOpen(false)}
                  className={className}
                >
                  {t(key)}
                </a>
              );
            })}
          </nav>
        </div>
      ) : null}
    </>
  );
}
