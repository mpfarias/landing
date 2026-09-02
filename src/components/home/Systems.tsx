import { getTranslations } from "next-intl/server";
import { projectIds } from "@/data/projects";

export async function Systems() {
  const t = await getTranslations("systems");

  return (
    <section
      id="sistemas"
      aria-labelledby="systems-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 sm:py-16">
        <h2
          id="systems-heading"
          className="text-[13px] font-medium tracking-[0.14em] text-muted"
        >
          {t("title")}
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
          {t("intro")}
        </p>

        <ul className="mt-8">
          {projectIds.map((id) => (
            <li key={id} className="group border-t border-border last:border-b">
              <div className="flex flex-col gap-1 py-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-5">
                <p className="text-[16px] font-semibold tracking-[-0.02em] text-foreground transition-colors duration-200 group-hover:text-primary sm:text-[17px]">
                  {t(`items.${id}.name`)}
                </p>
                <p className="text-[13px] text-muted sm:text-right">
                  {t(`items.${id}.line`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
