"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  themeStorageKey,
  themeValues,
  type ThemeValue,
} from "@/components/providers/theme-script";

type ThemeContextValue = {
  theme: ThemeValue;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: ThemeValue) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isThemeValue(value: string | null | undefined): value is ThemeValue {
  return (
    typeof value === "string" &&
    themeValues.includes(value as ThemeValue)
  );
}

function readStoredTheme(): ThemeValue {
  try {
    const stored = localStorage.getItem(themeStorageKey);
    if (isThemeValue(stored)) return stored;
  } catch {
    // Safari private mode can block localStorage
  }
  return "system";
}

function resolveTheme(theme: ThemeValue): "light" | "dark" {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme;
}

function applyTheme(theme: ThemeValue) {
  const resolved = resolveTheme(theme);
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
  return resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeValue>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = readStoredTheme();
    setThemeState(stored);
    setResolvedTheme(applyTheme(stored));

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onMedia = () => {
      const current = readStoredTheme();
      if (current === "system") {
        setResolvedTheme(applyTheme(current));
      }
    };
    media.addEventListener("change", onMedia);

    const onStorage = (event: StorageEvent) => {
      if (event.key !== themeStorageKey) return;
      const next = isThemeValue(event.newValue) ? event.newValue : "system";
      setThemeState(next);
      setResolvedTheme(applyTheme(next));
    };
    window.addEventListener("storage", onStorage);

    return () => {
      media.removeEventListener("change", onMedia);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const setTheme = useCallback((next: ThemeValue) => {
    try {
      localStorage.setItem(themeStorageKey, next);
    } catch {
      // ignore write failures
    }
    setThemeState(next);
    setResolvedTheme(applyTheme(next));
  }, []);

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
