"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { HeroPortrait } from "@/components/hero/HeroPortrait";

export function Hero() {
  const t = useTranslations("hero");
  const reduceMotion = useReducedMotion();

  const item = (delay: number) => ({
    initial: reduceMotion ? false : ({ opacity: 0, y: 16 } as const),
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: reduceMotion ? 0 : delay,
      duration: reduceMotion ? 0 : 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-x-hidden pt-20 pb-14 sm:pb-16 lg:flex lg:min-h-[100svh] lg:items-center lg:overflow-hidden lg:pb-0"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 tech-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--glow-primary), transparent 68%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-5 pt-8 sm:gap-12 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:px-10 lg:pb-20 lg:pt-10">
        <div className="min-w-0">
          <motion.p
            {...item(0.12)}
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-muted"
          >
            <span
              className="size-1.5 shrink-0 rounded-full bg-secondary"
              aria-hidden
            />
            {t("location")}
          </motion.p>

          <motion.h1
            id="hero-heading"
            {...item(0.2)}
            className="mt-5 max-w-[14ch] text-[clamp(2.15rem,7.2vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground sm:mt-6"
          >
            <span className="block">{t("headlineLine1")}</span>
            <span className="block">{t("headlineLine2")}</span>
            <span className="block">
              {t("headlineLine3")}{" "}
              <span className="text-accent-gradient">{t("headlineAccent")}</span>
            </span>
          </motion.h1>

          <motion.p
            {...item(0.28)}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-base"
          >
            {t("description")}
          </motion.p>

          <motion.div
            {...item(0.36)}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
          >
            <a
              href="#projetos"
              className="cta-primary group/cta-primary inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background sm:w-auto"
            >
              {t("primaryCta")}
              <ArrowDown
                className="icon-shift icon-shift-down size-4 opacity-80"
                aria-hidden
              />
            </a>
            <a
              href="#sobre"
              className="group/cta-secondary inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface/70 px-5 py-3 text-sm font-medium text-foreground transition-[background-color,border-color] duration-200 hover:border-primary/25 hover:bg-[var(--surface-elevated)] sm:w-auto"
            >
              {t("secondaryCta")}
              <ArrowRight
                className="icon-shift icon-shift-right size-4 opacity-70"
                aria-hidden
              />
            </a>
          </motion.div>

          <motion.div {...item(0.44)} className="mt-10 flex gap-3 sm:mt-12">
            <span
              aria-hidden
              className="mt-1 h-9 w-px shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary opacity-80"
            />
            <div className="min-w-0">
              <p className="text-[12px] font-medium tracking-[0.18em] text-foreground">
                {t("name")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t("expertise")}
              </p>
            </div>
          </motion.div>
        </div>

        <HeroPortrait />
      </div>
    </section>
  );
}
