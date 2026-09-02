"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const milestoneKeys = ["formation", "processes", "operations"] as const;

export function ExperienceSection() {
  const t = useTranslations("experience");
  const reduceMotion = useReducedMotion();
  const stack = t.raw("stack") as string[];

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-24 overflow-x-hidden bg-background"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-[12px] font-medium tracking-[0.2em] text-muted">
            {t("label")}
          </p>
          <h2
            id="experience-heading"
            className="mt-4 max-w-xl text-[clamp(1.65rem,3.2vw,2.35rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground"
          >
            <span className="block">{t("headlineLine1")}</span>
            <span className="block">
              {t("headlineLine2")}{" "}
              <span className="text-accent-gradient">
                {t("headlineAccent")}
              </span>
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            {t("intro")}
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-6 border-t border-border pt-6 sm:grid-cols-3 sm:gap-8">
            {milestoneKeys.map((key) => (
              <li key={key} className="min-w-0">
                <p className="font-mono text-[12px] font-medium tracking-[0.14em] text-muted">
                  {t(`milestones.${key}.period`)}
                </p>
                <p className="mt-2 text-[14px] font-medium leading-snug text-foreground">
                  {t(`milestones.${key}.title`)}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
              {t("stackLabel")}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-1 gap-y-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="border-l border-border pl-3 pr-4 text-[13px] tracking-[0.04em] text-foreground/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
