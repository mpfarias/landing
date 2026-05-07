"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function Footer() {
  const { messages: m } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 pt-10 pb-28 text-slate-900 md:pb-10 dark:border-white/10 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Marcelo Farias</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {m.footer.role}
          </p>
        </div>

        <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-center dark:text-slate-400">
          {m.footer.stackLine}
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-500">
          {m.footer.rights}
        </p>
      </div>
    </footer>
  );
}
