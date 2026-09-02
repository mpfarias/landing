import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

type ProjectCtaProps = {
  line1: string;
  line2: string;
  question?: string;
  action: string;
};

export function ProjectCta({ line1, line2, question, action }: ProjectCtaProps) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[850px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <p className="text-[clamp(1.35rem,2.8vw,1.85rem)] font-semibold leading-snug tracking-[-0.03em] text-foreground">
          <span className="block">{line1}</span>
          <span className="block">{line2}</span>
        </p>
        {question ? (
          <p className="mt-5 text-[15px] text-muted">{question}</p>
        ) : null}
        <Link
          href={{ pathname: "/", hash: "contato" }}
          className="group/cta-secondary mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          {action}
          <ArrowRight
            className="icon-shift icon-shift-right size-4 opacity-80"
            aria-hidden
          />
        </Link>
      </div>
    </section>
  );
}
