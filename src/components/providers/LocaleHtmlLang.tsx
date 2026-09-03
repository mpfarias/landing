"use client";

import { useLayoutEffect } from "react";

export function LocaleHtmlLang({ lang }: { lang: string }) {
  useLayoutEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
