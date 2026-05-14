"use client";

import { links } from "@/data/links";
import { useLanguage } from "@/i18n/LanguageProvider";

function emailAddressFromMailto(mailto: string): string {
  return mailto.replace(/^mailto:/i, "");
}

export function Contact() {
  const { messages: m } = useLanguage();
  const emailAddress = emailAddressFromMailto(links.social.email);

  return (
    <section
      id="contact"
      className="bg-slate-50 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-slate-950/40 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
                {m.contact.kicker}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {m.contact.title}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {m.contact.lead}
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {m.contact.body}
              </p>

              <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400">
                {m.contact.secondary}
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href={links.social.email}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-300/60 dark:hover:bg-cyan-300/10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                  {m.contact.emailLabel}
                </p>

                <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {emailAddress}
                </p>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {m.contact.emailHint}
                </p>
              </a>

              <a
                href={links.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-cyan-400 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-300/60 dark:hover:bg-cyan-300/10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                  {m.contact.phoneLabel}
                </p>

                <p className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {m.contact.phoneDisplay}
                </p>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {m.contact.phoneHint}
                </p>
              </a>

              <a
                href={links.fiverr.customWebApps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-cyan-400 px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {m.contact.fiverrCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
