import { getTranslations } from "next-intl/server";

const expertiseIds = [
  "systems",
  "automation",
  "ai",
  "integrations",
  "products",
] as const;

export async function Expertise() {
  const t = await getTranslations("expertise");

  return (
    <section
      id="atuacao"
      aria-labelledby="expertise-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <p className="text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
          {t("title")}
        </p>
        <h2
          id="expertise-heading"
          className="mt-3 max-w-2xl text-[clamp(1.7rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-foreground"
        >
          <span className="block">{t("headlineLine1")}</span>
          <span className="block">{t("headlineLine2")}</span>
        </h2>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {expertiseIds.map((id, index) => (
            <li
              key={id}
              className={[
                "border-t border-border py-6",
                index < 2 ? "lg:col-span-3" : "lg:col-span-2",
                index % 2 === 1 ? "sm:pl-6" : "sm:pr-6 sm:pl-0",
                index < 2 ? "lg:px-6" : "lg:px-5",
                index === 0 ? "lg:pl-0" : "",
                index === 2 ? "lg:pl-0" : "",
              ].join(" ")}
            >
              <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">
                {t(`items.${id}.title`)}
              </h3>
              <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted">
                {t(`items.${id}.text`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
