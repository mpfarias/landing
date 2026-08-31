"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

const momentKeys = [
  "formation",
  "processes",
  "operations",
  "today",
] as const;

function TimelineMoment({
  momentKey,
  index,
  isLast,
}: {
  momentKey: (typeof momentKeys)[number];
  index: number;
  isLast: boolean;
}) {
  const t = useTranslations("experience");
  const reduceMotion = useReducedMotion();
  const isAccent = momentKey === "today";

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        delay: reduceMotion ? 0 : index * 0.06,
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 md:grid-cols-[6.75rem_1.25rem_minmax(0,1fr)] md:gap-x-6"
    >
      <p className="col-start-2 mb-2 font-mono text-[12px] font-medium tracking-[0.14em] text-muted md:col-start-1 md:row-start-1 md:mb-0 md:pt-0.5 md:text-right">
        {t(`moments.${momentKey}.period`)}
      </p>

      <div
        aria-hidden
        className="relative col-start-1 row-span-2 row-start-1 flex flex-col items-center md:col-start-2"
      >
        <span
          className={[
            "mt-1 size-3 shrink-0 rounded-full border-2 bg-background transition-colors duration-500",
            isAccent
              ? "border-primary bg-primary shadow-[0_0_0_4px_color-mix(in_srgb,var(--primary)_16%,transparent)]"
              : "border-foreground/40",
          ].join(" ")}
        />
        {!isLast ? (
          <span className="mt-2 w-px flex-1 bg-border" />
        ) : null}
      </div>

      <div className="col-start-2 min-w-0 pb-12 md:col-start-3 md:pb-14">
        <h3 className="text-[13px] font-semibold tracking-[0.12em] text-foreground sm:text-[14px]">
          {t(`moments.${momentKey}.title`)}
        </h3>
        <p className="mt-2 text-[15px] font-medium leading-snug text-foreground/90">
          {t(`moments.${momentKey}.role`)}
        </p>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
          {t(`moments.${momentKey}.text`)}
        </p>
      </div>
    </motion.li>
  );
}

export function ExperienceSection() {
  const t = useTranslations("experience");
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : ({ opacity: 0, y: 16 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
      delay: reduceMotion ? 0 : delay,
      duration: reduceMotion ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="experiencia"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-24 overflow-x-hidden bg-background"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[920px]">
          <motion.div {...reveal(0)} className="max-w-2xl">
            <p className="text-[12px] font-medium tracking-[0.2em] text-muted">
              {t("label")}
            </p>
            <h2
              id="experience-heading"
              className="mt-5 text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground"
            >
              <span className="block">{t("headlineLine1")}</span>
              <span className="block">
                {t("headlineLine2")}{" "}
                <span className="text-accent-gradient">
                  {t("headlineAccent")}
                </span>
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
              {t("intro")}
            </p>
          </motion.div>

          <ol className="mt-14 lg:mt-16">
            {momentKeys.map((key, index) => (
              <TimelineMoment
                key={key}
                momentKey={key}
                index={index}
                isLast={index === momentKeys.length - 1}
              />
            ))}
          </ol>

          <motion.div
            {...reveal(0.08)}
            className="mt-4 border-t border-border pt-10 lg:mt-6 lg:pt-12"
          >
            <p className="max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
              <span className="block">{t("closingLine1")}</span>
              <span className="block">{t("closingLine2")}</span>
              <span className="mt-3 block text-[clamp(1.15rem,2.4vw,1.4rem)] font-semibold tracking-[-0.02em] text-accent-gradient">
                {t("closingAccent")}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
