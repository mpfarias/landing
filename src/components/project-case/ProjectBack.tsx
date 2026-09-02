import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function ProjectBack({ label }: { label: string }) {
  return (
    <div className="border-t border-border">
      <div className="mx-auto max-w-[850px] px-5 pb-12 pt-2 sm:px-8 sm:pb-14 lg:px-10">
        <Link
          href={{ pathname: "/", hash: "projetos" }}
          className="group/cta-secondary inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
        >
          <ArrowLeft
            className="icon-shift size-3.5 transition-transform duration-200 group-hover/cta-secondary:-translate-x-0.5 group-focus-visible/cta-secondary:-translate-x-0.5"
            aria-hidden
          />
          {label}
        </Link>
      </div>
    </div>
  );
}
