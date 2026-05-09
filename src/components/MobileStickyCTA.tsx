"use client";

import { links } from "@/data/links";
import { useLanguage } from "@/i18n/LanguageProvider";

export function MobileStickyCTA() {
  const { messages: m } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-4 py-3 text-slate-900 shadow-2xl shadow-slate-900/15 backdrop-blur dark:border-white/10 dark:bg-slate-950/95 dark:text-white dark:shadow-slate-950/80 md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {m.mobileSticky.title}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {m.mobileSticky.subtitle}
          </p>
        </div>

        <a
          href={links.fiverr.main}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          {m.common.hireMe}
        </a>
      </div>
    </div>
  );
}