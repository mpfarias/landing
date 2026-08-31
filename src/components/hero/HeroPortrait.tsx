"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

export function HeroPortrait() {
  const t = useTranslations("common");
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: reduceMotion ? 0 : 0.42,
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-[min(100%,380px)] lg:ml-auto lg:mr-0 lg:max-w-none"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full blur-3xl sm:-inset-10"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, var(--glow-primary), transparent 62%), radial-gradient(circle at 70% 70%, var(--glow-secondary), transparent 55%)",
        }}
      />

      <div
        className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] border border-border bg-surface"
        style={{ boxShadow: "var(--shadow-portrait)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, color-mix(in srgb, var(--primary) 10%, var(--surface)) 0%, var(--surface) 42%, color-mix(in srgb, var(--secondary) 7%, var(--background-secondary)) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/80 to-transparent p-5 sm:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            {t("photoPlaceholderLabel")}
          </p>
          <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-foreground/85">
            {t("photoPlaceholderHint")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
