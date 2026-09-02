"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useLayoutEffect, useTransition } from "react";
import {
  getProjectSlug,
  resolveProjectIdFromSlug,
} from "@/data/projects";
import { useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = {
  pt: "PT-BR",
  en: "EN",
  es: "ES",
};

const SCROLL_KEY = "mpf-locale-scroll-y";

function storeScrollY() {
  try {
    sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
  } catch {
    // Safari private mode can block sessionStorage
  }
}

function consumeStoredScrollY(): number | null {
  try {
    const raw = sessionStorage.getItem(SCROLL_KEY);
    if (raw == null) return null;
    const y = Number(raw);
    return Number.isFinite(y) ? y : null;
  } catch {
    return null;
  }
}

function clearStoredScrollY() {
  try {
    sessionStorage.removeItem(SCROLL_KEY);
  } catch {
    // ignore
  }
}

export function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const params = useParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    const y = consumeStoredScrollY();
    if (y == null) return;

    const restore = () => {
      window.scrollTo({ top: y, left: 0, behavior: "instant" });
    };

    restore();
    const frame = requestAnimationFrame(restore);
    const timeout = window.setTimeout(() => {
      restore();
      clearStoredScrollY();
    }, 80);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, []);

  function switchLocale(next: Locale) {
    if (next === locale) return;

    storeScrollY();

    startTransition(() => {
      const options = { locale: next, scroll: false as const };
      const slugParam = params.slug;
      const slug = typeof slugParam === "string" ? slugParam : null;
      const projectId = slug ? resolveProjectIdFromSlug(slug) : null;

      if (projectId) {
        router.replace(
          {
            pathname: "/projects/[slug]",
            params: { slug: getProjectSlug(projectId, next) },
          },
          options,
        );
        return;
      }

      router.replace("/", options);
    });
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="flex items-center gap-3"
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            disabled={isPending}
            onClick={() => switchLocale(code)}
            className={[
              "text-[11px] font-medium tracking-[0.08em] transition-colors duration-200",
              active ? "text-foreground" : "text-muted hover:text-foreground",
            ].join(" ")}
            aria-pressed={active}
            aria-label={labels[code]}
          >
            {labels[code]}
          </button>
        );
      })}
    </div>
  );
}
