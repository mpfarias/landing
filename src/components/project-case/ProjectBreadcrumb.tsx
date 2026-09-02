import { getTranslations } from "next-intl/server";
import type { ProjectId } from "@/data/projects";
import { Link } from "@/i18n/navigation";

type ProjectBreadcrumbProps = {
  projectId: ProjectId;
};

export async function ProjectBreadcrumb({ projectId }: ProjectBreadcrumbProps) {
  const tCase = await getTranslations("projectCase");
  const tNav = await getTranslations("navigation");
  const tProject = await getTranslations(`projects.${projectId}`);

  return (
    <nav aria-label={tCase("breadcrumb")}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-muted">
        <li className="inline-flex items-center gap-2">
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-foreground"
          >
            {tCase("home")}
          </Link>
          <span aria-hidden>/</span>
        </li>
        <li className="inline-flex items-center gap-2">
          <Link
            href={{ pathname: "/", hash: "projetos" }}
            className="transition-colors duration-200 hover:text-foreground"
          >
            {tNav("projects")}
          </Link>
          <span aria-hidden>/</span>
        </li>
        <li>
          <span aria-current="page" className="text-foreground">
            {tProject("navName")}
          </span>
        </li>
      </ol>
    </nav>
  );
}
