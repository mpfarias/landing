"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const t = useTranslations("common");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const label = isDark ? t("themeLight") : t("themeDark");

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-foreground/[0.04] hover:text-foreground"
      aria-label={label}
      title={label}
    >
      <Sun
        className={[
          "absolute size-4 transition-[opacity,transform] duration-200 ease-out",
          isDark
            ? "scale-75 opacity-0"
            : "scale-100 opacity-100",
        ].join(" ")}
        aria-hidden
      />
      <Moon
        className={[
          "absolute size-4 transition-[opacity,transform] duration-200 ease-out",
          isDark
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0",
        ].join(" ")}
        aria-hidden
      />
    </button>
  );
}
