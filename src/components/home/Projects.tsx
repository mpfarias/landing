import { getTranslations } from "next-intl/server";
import { getGithubHref } from "@/data/contact";
import { homeProjectIds } from "@/data/home-projects";

export async function Projects() {
  const t = await getTranslations("work");
  const githubHref = getGithubHref();

  return (
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <p className="text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
          {t("title")}
        </p>
        <h2
          id="projects-heading"
          className="mt-3 max-w-2xl text-[clamp(1.7rem,3.6vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-foreground"
        >
          <span className="block">{t("headlineLine1")}</span>
          <span className="block">{t("headlineLine2")}</span>
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          {t("intro")}
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {homeProjectIds.map((id) => (
            <li key={id} className="border-t border-border py-5">
              <p className="text-[15px] font-semibold tracking-[-0.02em] text-foreground">
                {t(`items.${id}.name`)}
              </p>
              <p className="mt-1 text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
                {t(`items.${id}.category`)}
              </p>
              <p className="mt-2 max-w-md text-[14px] leading-relaxed text-muted">
                {t(`items.${id}.description`)}
              </p>
            </li>
          ))}
        </ul>

        {githubHref ? (
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-10 items-center text-[14px] font-medium text-foreground"
          >
            {t("github")}
          </a>
        ) : null}
      </div>
    </section>
  );
}
