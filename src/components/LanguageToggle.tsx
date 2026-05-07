"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/types";

function FlagBrazil({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 14"
      className={className}
      aria-hidden
    >
      <rect width="20" height="14" fill="#009b3a" rx="1" />
      <path d="M10 2.2 L17.3 7 10 11.8 2.7 7z" fill="#fedf00" />
      <circle cx="10" cy="7" r="3.1" fill="#002776" />
    </svg>
  );
}

function FlagUsa({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 14"
      className={className}
      aria-hidden
    >
      <rect width="20" height="14" fill="#b22234" rx="1" />
      <path
        fill="#fff"
        d="M0 2h20v2H0zm0 4h20v2H0zm0 4h20v2H0zm0 4h20v2H0z"
      />
      <rect width="8" height="7.5" fill="#3c3b6e" />
      <g fill="#fff">
        <circle cx="1.2" cy="1.1" r="0.45" />
        <circle cx="3.2" cy="1.1" r="0.45" />
        <circle cx="5.2" cy="1.1" r="0.45" />
        <circle cx="7.2" cy="1.1" r="0.45" />
        <circle cx="2.2" cy="2.35" r="0.45" />
        <circle cx="4.2" cy="2.35" r="0.45" />
        <circle cx="6.2" cy="2.35" r="0.45" />
        <circle cx="1.2" cy="3.6" r="0.45" />
        <circle cx="3.2" cy="3.6" r="0.45" />
        <circle cx="5.2" cy="3.6" r="0.45" />
        <circle cx="7.2" cy="3.6" r="0.45" />
        <circle cx="2.2" cy="4.85" r="0.45" />
        <circle cx="4.2" cy="4.85" r="0.45" />
        <circle cx="6.2" cy="4.85" r="0.45" />
      </g>
    </svg>
  );
}

export function LanguageToggle() {
  const { locale, setLocale, messages } = useLanguage();

  function select(next: Locale) {
    setLocale(next);
  }

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100/80 p-1 dark:border-white/10 dark:bg-slate-900/60"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => select("pt")}
        className={`rounded-full p-1.5 transition ${
          locale === "pt"
            ? "bg-white text-slate-900 shadow-sm ring-2 ring-cyan-500 dark:bg-slate-800 dark:text-white dark:ring-cyan-400"
            : "opacity-70 hover:opacity-100"
        }`}
        aria-pressed={locale === "pt"}
        aria-label={messages.lang.switchToPt}
        title={messages.lang.switchToPt}
      >
        <FlagBrazil className="h-5 w-[1.4rem]" />
      </button>
      <button
        type="button"
        onClick={() => select("en")}
        className={`rounded-full p-1.5 transition ${
          locale === "en"
            ? "bg-white text-slate-900 shadow-sm ring-2 ring-cyan-500 dark:bg-slate-800 dark:text-white dark:ring-cyan-400"
            : "opacity-70 hover:opacity-100"
        }`}
        aria-pressed={locale === "en"}
        aria-label={messages.lang.switchToEn}
        title={messages.lang.switchToEn}
      >
        <FlagUsa className="h-5 w-[1.4rem]" />
      </button>
    </div>
  );
}
