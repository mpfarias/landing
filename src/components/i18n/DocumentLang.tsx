"use client";

import { useEffect } from "react";

export function DocumentLang({
  lang,
  theme = "series",
}: {
  lang: string;
  theme?: "professional" | "series";
}) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
  }, [lang, theme]);

  return null;
}
