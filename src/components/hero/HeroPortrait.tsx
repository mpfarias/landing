"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";

export function HeroPortrait() {
  const t = useTranslations("hero");
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
        className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] border border-border bg-black"
        style={{ boxShadow: "var(--shadow-portrait)" }}
      >
        <Image
          src="/images/profile.jpg"
          alt={t("portraitAlt")}
          fill
          priority
          sizes="(min-width: 1024px) 42vw, min(380px, 92vw)"
          className="object-cover object-[center_18%]"
        />
      </div>
    </motion.div>
  );
}
