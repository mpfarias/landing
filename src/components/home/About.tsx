import { getTranslations } from "next-intl/server";

const focusKeys = [
  "systems",
  "automation",
  "ai",
  "integrations",
  "products",
] as const;

export async function About() {
  const t = await getTranslations("about");

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16">
        <h2
          id="about-heading"
          className="text-[13px] font-medium tracking-[0.14em] text-muted"
        >
          {t("title")}
        </h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-foreground sm:text-[17px]">
          {t("paragraph")}
        </p>
        <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-muted">
          {focusKeys.map((key, index) => (
            <span key={key}>
              {index > 0 ? (
                <span aria-hidden className="mx-2 text-foreground/25">
                  ·
                </span>
              ) : null}
              {t(`focus.${key}`)}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
