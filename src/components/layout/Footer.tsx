import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export async function Footer() {
  const t = await getTranslations("footer");
  const tCommon = await getTranslations("common");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="min-w-0">
          <Link
            href="/"
            className="text-[13px] font-semibold tracking-[0.18em] text-foreground"
          >
            {tCommon("brand")}
          </Link>
          <p className="mt-2 text-[12px] text-muted">
            {t("copyright", { year })}
          </p>
        </div>
        <LanguageSwitcher />
      </div>
    </footer>
  );
}
