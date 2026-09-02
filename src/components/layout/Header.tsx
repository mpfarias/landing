"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navKeys = [
  "about",
  "projects",
  "experience",
  "technology",
  "publications",
  "contact",
] as const;

const navHashes: Record<(typeof navKeys)[number], string> = {
  about: "sobre",
  projects: "projetos",
  experience: "experiencia",
  technology: "tecnologia",
  publications: "publicacoes",
  contact: "contato",
};

type HeaderProps = {
  variant?: "home" | "internal";
};

export function Header({ variant = "home" }: HeaderProps) {
  const t = useTranslations("navigation");
  const tCommon = useTranslations("common");
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const internal = variant === "internal";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
    const media = window.matchMedia("(min-width: 1280px)");
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

  const duration = reduceMotion ? 0 : 0.55;
  const elevated = internal || scrolled;

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
          elevated
            ? "border-b border-border bg-[var(--header-bg)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-5 sm:gap-4 sm:px-8 lg:px-10",
            internal ? "h-14" : "h-16",
          ].join(" ")}
        >
          <Link
            href="/"
            className="shrink-0 text-[16px] font-semibold tracking-[0.2em] text-foreground transition-opacity duration-200 hover:opacity-75 focus-visible:opacity-75"
          >
            {tCommon("brand")}
          </Link>

          <nav
            className="hidden items-center gap-6 xl:flex xl:gap-7"
            aria-label={t("ariaLabel")}
          >
            {navKeys.map((key) => {
              const hash = navHashes[key];
              const current = !internal && activeId === hash;
              const className = [
                "nav-link text-[13.5px] font-medium transition-colors duration-200 hover:text-foreground",
                current ? "text-foreground" : "text-muted",
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

          <div className="hidden items-center gap-2 xl:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            {internal ? (
              <Link
                href={{ pathname: "/", hash: "contato" }}
                className="group/nav-cta ml-1 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-[13px] font-medium text-foreground transition-[border-color,background-color] duration-200 hover:border-primary/30 hover:bg-background-secondary"
              >
                {t("cta")}
                <ArrowUpRight
                  className="icon-shift icon-shift-diag size-3.5 opacity-70"
                  aria-hidden
                />
              </Link>
            ) : (
              <a
                href="#contato"
                className="group/nav-cta ml-1 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-[13px] font-medium text-foreground transition-[border-color,background-color] duration-200 hover:border-primary/30 hover:bg-background-secondary"
              >
                {t("cta")}
                <ArrowUpRight
                  className="icon-shift icon-shift-diag size-3.5 opacity-70"
                  aria-hidden
                />
              </a>
            )}
          </div>

          <div className="flex min-w-0 items-center gap-1 sm:gap-1.5 xl:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-foreground/[0.04]"
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
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t("ariaLabel")}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-[var(--overlay)] backdrop-blur-md xl:hidden"
          >
            <div className="flex min-h-full flex-col px-5 pb-10 pt-24 sm:px-8">
              <nav className="flex flex-col gap-1" aria-label={t("ariaLabel")}>
                {navKeys.map((key, index) => {
                  const hash = navHashes[key];
                  const current = !internal && activeId === hash;
                  const className =
                    "rounded-xl px-3 py-3.5 text-2xl font-medium tracking-tight text-foreground transition-colors duration-200 hover:bg-foreground/[0.03]";
                  const motionProps = {
                    initial: reduceMotion ? false : ({ opacity: 0, y: 12 } as const),
                    animate: { opacity: 1, y: 0 },
                    transition: {
                      delay: reduceMotion ? 0 : 0.04 * index,
                      duration: reduceMotion ? 0 : 0.4,
                    },
                  };

                  if (internal) {
                    return (
                      <motion.div key={key} {...motionProps}>
                        <Link
                          href={{ pathname: "/", hash }}
                          onClick={() => setMenuOpen(false)}
                          className={className}
                        >
                          {t(key)}
                        </Link>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.a
                      key={key}
                      href={`#${hash}`}
                      aria-current={current ? "true" : undefined}
                      onClick={() => setMenuOpen(false)}
                      {...motionProps}
                      className={className}
                    >
                      {t(key)}
                    </motion.a>
                  );
                })}
              </nav>

              <div className="mt-auto pt-8">
                {internal ? (
                  <Link
                    href={{ pathname: "/", hash: "contato" }}
                    onClick={() => setMenuOpen(false)}
                    className="group/nav-cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90"
                  >
                    {t("cta")}
                    <ArrowUpRight
                      className="icon-shift icon-shift-diag size-4"
                      aria-hidden
                    />
                  </Link>
                ) : (
                  <a
                    href="#contato"
                    onClick={() => setMenuOpen(false)}
                    className="group/nav-cta inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90"
                  >
                    {t("cta")}
                    <ArrowUpRight
                      className="icon-shift icon-shift-diag size-4"
                      aria-hidden
                    />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
