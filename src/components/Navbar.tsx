"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage } from "@/i18n/LanguageProvider";
import { links } from "@/data/links";

export function Navbar() {
  const { messages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { label: messages.nav.services, href: "#services" },
      { label: messages.nav.about, href: "#about" },
      { label: messages.nav.techStack, href: "#tech" },
      { label: messages.nav.work, href: "#work" },
      { label: messages.nav.contact, href: "#contact" },
      { label: messages.nav.howIWork, href: "#how-i-work" },
      { label: messages.nav.faq, href: "#faq" },
    ],
    [messages],
  );

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex min-w-0 flex-1 items-center gap-8">
            <a
              href="#home"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-3 text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              <Image
                src="/icon.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 rounded-lg"
                priority
              />
              <span className="truncate">Marcelo Farias</span>
            </a>

            <div className="hidden items-center gap-4 text-xs text-slate-600 dark:text-slate-300 md:flex lg:gap-6 lg:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-slate-900 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href={links.fiverr.main}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
            >
              {messages.common.hireMe}
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:text-white dark:hover:border-cyan-300 dark:hover:text-cyan-300 md:hidden"
              aria-label={messages.common.toggleNav}
              aria-expanded={isOpen}
            >
              {isOpen ? messages.common.close : messages.common.menu}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200/80 py-4 dark:border-white/10 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={links.fiverr.main}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {messages.common.hireMeOnFiverr}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
