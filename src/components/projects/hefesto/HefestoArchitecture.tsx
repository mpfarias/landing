"use client";

import { motion, useReducedMotion } from "motion/react";

type HefestoArchitectureProps = {
  core: string;
  telephony: string;
  data: string;
  intelligence: string;
  integrations: string;
};

export function HefestoArchitecture({
  core,
  telephony,
  data,
  intelligence,
  integrations,
}: HefestoArchitectureProps) {
  const reduceMotion = useReducedMotion();

  const item = (delay: number) => ({
    initial: reduceMotion ? false : ({ opacity: 0, y: 12 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.35 },
    transition: {
      delay: reduceMotion ? 0 : delay,
      duration: reduceMotion ? 0 : 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col items-center gap-3">
        <motion.div {...item(0)} className="w-full max-w-sm">
          <Node
            label={telephony}
            values={["Asterisk"]}
          />
        </motion.div>
        <Connector />
        <motion.div {...item(0.08)} className="w-full max-w-md">
          <Node label={core} values={["HEFESTO"]} emphasis />
        </motion.div>
        <Connector />
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          <motion.div {...item(0.12)}>
            <Node label={data} values={["PostgreSQL", "MongoDB"]} />
          </motion.div>
          <motion.div {...item(0.16)}>
            <Node label={intelligence} values={["Whisper", "LLM", "TTS"]} />
          </motion.div>
          <motion.div {...item(0.2)}>
            <Node label={integrations} values={["SINESP CAD"]} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <span aria-hidden className="text-[12px] tracking-[0.24em] text-muted">
      ↓
    </span>
  );
}

function Node({
  label,
  values,
  emphasis = false,
}: {
  label: string;
  values: readonly string[];
  emphasis?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border px-4 py-4 text-center",
        emphasis
          ? "border-primary/30 bg-[color-mix(in_srgb,var(--primary)_8%,var(--surface))]"
          : "border-border bg-surface/85",
      ].join(" ")}
    >
      <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
        {label}
      </p>
      <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        {values.map((value) => (
          <li
            key={value}
            className="text-sm font-semibold tracking-[-0.02em] text-foreground"
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
