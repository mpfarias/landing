"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";

export function About() {
  const { messages: m } = useLanguage();

  return (
    <section
      id="about"
      className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-500/15 blur-2xl dark:bg-cyan-400/10" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900 dark:shadow-2xl dark:shadow-cyan-950/30">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-200 dark:bg-slate-800">
              <Image
                src="/images/profile2.png"
                alt={m.about.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            {m.about.kicker}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {m.about.title}
          </h2>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-xl dark:shadow-slate-950/40">
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              {m.about.p1}
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {m.about.p2}
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {m.about.p3}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {m.about.roleLabel}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {m.about.roleValue}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {m.about.focusLabel}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {m.about.focusValue}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {m.about.stackLabel}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {m.about.stackValue}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
