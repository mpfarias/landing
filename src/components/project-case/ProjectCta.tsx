import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

type ProjectCtaProps = {
  line1: string;
  line2: string;
  action: string;
  backLabel?: string;
};

export function ProjectCta({
  line1,
  line2,
  action,
  backLabel,
}: ProjectCtaProps) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[850px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <p className="text-[clamp(1.35rem,2.8vw,1.85rem)] font-semibold leading-snug tracking-[-0.03em] text-foreground">
          <span className="block">{line1}</span>
          <span className="block">{line2}</span>
        </p>
        <Link
          href={{ pathname: "/", hash: "contato" }}
          className="group/cta-secondary mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          {action}
          <ArrowRight
            className="icon-shift icon-shift-right size-4 opacity-80"
            aria-hidden
          />
        </Link>
        {backLabel ? (
          <div className="mt-12">
            <Link
              href={{ pathname: "/", hash: "sistemas" }}
              className="group/cta-secondary inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              <ArrowLeft
                className="icon-shift size-3.5 transition-transform duration-200 group-hover/cta-secondary:-translate-x-0.5 group-focus-visible/cta-secondary:-translate-x-0.5"
                aria-hidden
              />
              {backLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
