"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

function ArchitectureBlueprint() {
  return (
    <svg
      viewBox="0 0 280 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-[280px] text-foreground"
      aria-hidden
    >
      {/* Blueprint frame */}
      <rect
        x="12"
        y="12"
        width="256"
        height="316"
        stroke="currentColor"
        strokeOpacity="0.14"
        strokeWidth="1"
      />
      <path
        d="M12 28H28M12 12V28M252 12H268M268 12V28M12 312V328M12 328H28M252 328H268M268 312V328"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.25"
      />

      {/* Construction grid */}
      <g stroke="currentColor" strokeOpacity="0.07" strokeWidth="0.75">
        {Array.from({ length: 7 }, (_, i) => (
          <path key={`h-${i}`} d={`M28 ${56 + i * 36}H252`} />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <path key={`v-${i}`} d={`M ${52 + i * 44} 28V312`} />
        ))}
      </g>

      {/* Dimension guide */}
      <g stroke="currentColor" strokeOpacity="0.22" strokeWidth="0.75">
        <path d="M36 40H244" strokeDasharray="3 4" />
        <path d="M36 36V44" />
        <path d="M244 36V44" />
      </g>
      <text
        x="140"
        y="34"
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="8"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        letterSpacing="0.12em"
      >
        SYSTEM LAYER
      </text>

      {/* Top modules — interface layer */}
      <g>
        <rect
          x="36"
          y="56"
          width="88"
          height="44"
          rx="3"
          fill="var(--surface)"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
        <rect
          x="44"
          y="64"
          width="40"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.18"
        />
        <rect
          x="44"
          y="74"
          width="56"
          height="3"
          rx="1"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <rect
          x="44"
          y="82"
          width="32"
          height="3"
          rx="1"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <text
          x="44"
          y="94"
          fill="var(--muted)"
          fontSize="8"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        >
          INTERFACE
        </text>

        <rect
          x="156"
          y="56"
          width="88"
          height="44"
          rx="3"
          fill="var(--surface)"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
        <rect
          x="164"
          y="64"
          width="36"
          height="4"
          rx="1"
          fill="currentColor"
          fillOpacity="0.18"
        />
        <rect
          x="164"
          y="74"
          width="52"
          height="3"
          rx="1"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <rect
          x="164"
          y="82"
          width="28"
          height="3"
          rx="1"
          fill="currentColor"
          fillOpacity="0.1"
        />
        <text
          x="164"
          y="94"
          fill="var(--muted)"
          fontSize="8"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        >
          SERVICE
        </text>
      </g>

      {/* Connections top → core */}
      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1">
        <path d="M80 100V128" />
        <path d="M200 100V118H140V128" />
      </g>
      <circle cx="80" cy="100" r="2.25" fill="var(--primary)" />
      <circle cx="200" cy="100" r="2.25" fill="var(--secondary)" />
      <circle cx="80" cy="128" r="2" fill="var(--muted)" />
      <circle cx="140" cy="128" r="2" fill="var(--muted)" />

      {/* Core module — assembled structure */}
      <g>
        <rect
          x="64"
          y="132"
          width="152"
          height="64"
          rx="3"
          fill="color-mix(in srgb, var(--primary) 6%, var(--surface))"
          stroke="var(--primary)"
          strokeOpacity="0.55"
          strokeWidth="1.25"
        />
        {/* Inner structure lines */}
        <path
          d="M80 148H200M80 164H176M80 180H152"
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="1"
        />
        <rect
          x="80"
          y="148"
          width="8"
          height="8"
          rx="1"
          fill="var(--primary)"
          fillOpacity="0.7"
        />
        <rect
          x="94"
          y="148"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <rect
          x="108"
          y="148"
          width="8"
          height="8"
          rx="1"
          fill="var(--secondary)"
          fillOpacity="0.65"
        />
        <text
          x="80"
          y="186"
          fill="var(--muted)"
          fontSize="9"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          letterSpacing="0.14em"
        >
          CORE SYSTEM
        </text>
      </g>

      {/* Connections core → foundation */}
      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1">
        <path d="M96 196V220" />
        <path d="M140 196V220" />
        <path d="M184 196V220" />
      </g>
      <circle cx="96" cy="196" r="2" fill="var(--primary)" fillOpacity="0.8" />
      <circle cx="140" cy="196" r="2" fill="var(--muted)" />
      <circle
        cx="184"
        cy="196"
        r="2"
        fill="var(--secondary)"
        fillOpacity="0.8"
      />

      {/* Foundation modules — building blocks */}
      <g>
        <rect
          x="28"
          y="224"
          width="72"
          height="52"
          rx="3"
          fill="var(--surface)"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
        <path
          d="M40 240H76M40 250H64"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        <text
          x="40"
          y="266"
          fill="var(--muted)"
          fontSize="8"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        >
          DATA
        </text>

        <rect
          x="104"
          y="224"
          width="72"
          height="52"
          rx="3"
          fill="var(--surface)"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
        <path
          d="M116 240H152M116 250H140"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
        <text
          x="116"
          y="266"
          fill="var(--muted)"
          fontSize="8"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        >
          FLOW
        </text>

        {/* In-construction module (dashed) */}
        <rect
          x="180"
          y="224"
          width="72"
          height="52"
          rx="3"
          fill="transparent"
          stroke="currentColor"
          strokeOpacity="0.32"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
        <path
          d="M192 240H228M192 250H216"
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <text
          x="192"
          y="266"
          fill="var(--muted)"
          fontSize="8"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        >
          SCALE
        </text>
      </g>

      {/* Horizontal foundation links */}
      <g stroke="currentColor" strokeOpacity="0.22" strokeWidth="0.85">
        <path d="M100 250H104" />
        <path d="M176 250H180" />
      </g>
      <circle cx="100" cy="250" r="1.5" fill="var(--muted)" />
      <circle cx="104" cy="250" r="1.5" fill="var(--muted)" />
      <circle cx="176" cy="250" r="1.5" fill="var(--muted)" />
      <circle cx="180" cy="250" r="1.5" fill="var(--muted)" />

      {/* Bottom annotation */}
      <g stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.75">
        <path d="M36 300H244" strokeDasharray="3 4" />
        <path d="M36 296V304" />
        <path d="M244 296V304" />
      </g>
      <text
        x="140"
        y="318"
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="8"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        letterSpacing="0.1em"
      >
        ARCHITECTURE · BUILD
      </text>
    </svg>
  );
}

export function AboutSection() {
  const t = useTranslations("about");
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : ({ opacity: 0, y: 16 } as const),
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: {
      delay: reduceMotion ? 0 : delay,
      duration: reduceMotion ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 overflow-x-hidden bg-background"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-16 xl:gap-20">
          <div className="min-w-0">
            <motion.p
              {...reveal(0)}
              className="text-[12px] font-medium tracking-[0.2em] text-muted"
            >
              {t("label")}
            </motion.p>

            <motion.div
              {...reveal(0.2)}
              aria-hidden
              className="mt-10 hidden lg:block"
            >
              <ArchitectureBlueprint />
            </motion.div>
          </div>

          <div className="min-w-0">
            <motion.h2
              id="about-heading"
              {...reveal(0.08)}
              className="max-w-[16.5rem] text-[clamp(1.75rem,3.4vw,2.65rem)] font-semibold leading-[1.18] tracking-[-0.03em] text-foreground sm:max-w-[22rem] lg:max-w-[26rem]"
            >
              <span className="block">{t("headlineLine1")}</span>
              <span className="block">
                {t("headlineLine2")}{" "}
                <span className="text-accent-gradient">
                  {t("headlineAccentLead")}
                </span>
              </span>
              <span className="block text-accent-gradient">
                {t("headlineAccentEnd")}
              </span>
            </motion.h2>

            <motion.div
              {...reveal(0.16)}
              className="mt-8 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted sm:mt-10 sm:text-base"
            >
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
