"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = ["light", "dark", "system"] as const;

export function ThemeToggle() {
  const t = useTranslations("common");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = mounted && theme && themes.includes(theme as (typeof themes)[number])
    ? (theme as (typeof themes)[number])
    : "system";

  const label =
    current === "light"
      ? t("themeLight")
      : current === "dark"
        ? t("themeDark")
        : t("themeSystem");

  function cycleTheme() {
    const index = themes.indexOf(current);
    setTheme(themes[(index + 1) % themes.length]);
  }

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="inline-flex size-9 items-center justify-center text-muted transition-colors duration-200 hover:text-foreground"
      aria-label={label}
      title={label}
    >
      {!mounted || current === "system" ? (
        <Monitor className="size-4" aria-hidden />
      ) : current === "dark" ? (
        <Moon className="size-4" aria-hidden />
      ) : (
        <Sun className="size-4" aria-hidden />
      )}
    </button>
  );
}
