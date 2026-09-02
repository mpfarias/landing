import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20"
    >
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:gap-16">
        <div className="min-w-0">
          <p className="text-[12px] font-medium tracking-[0.16em] text-muted">
            {t("name")}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-[clamp(2.15rem,5.6vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-foreground"
          >
            <span className="block">{t("headlineLine1")}</span>
            <span className="block">{t("headlineLine2")}</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="#contato"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-5 text-[14px] font-medium text-background transition-opacity duration-200 hover:opacity-85"
            >
              {t("primaryCta")}
            </a>
            <a
              href="#sistemas"
              className="inline-flex min-h-11 items-center text-[14px] font-medium text-foreground"
            >
              {t("secondaryCta")}
            </a>
          </div>
          <p className="mt-8 text-[12px] tracking-[0.08em] text-muted">
            {t("expertise")}
          </p>
        </div>

        <div className="min-w-0 max-lg:order-last">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden bg-[#d8d8d3] lg:ml-auto lg:max-w-none dark:bg-[#1a1b1e]">
            <Image
              src="/images/profile.jpg"
              alt={t("portraitAlt")}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, min(420px, 92vw)"
              className="object-cover object-[center_18%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
