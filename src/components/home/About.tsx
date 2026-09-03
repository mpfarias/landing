import { getTranslations } from "next-intl/server";

export async function About() {
  const t = await getTranslations("about");

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <p className="text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
          {t("title")}
        </p>
        <h2
          id="about-heading"
          className="mt-3 max-w-2xl text-[clamp(1.7rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-foreground"
        >
          <span className="block">{t("headlineLine1")}</span>
          <span className="block">{t("headlineLine2")}</span>
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
          {t("text")}
        </p>
      </div>
    </section>
  );
}
