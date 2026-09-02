type ProjectFlowProps = {
  steps: readonly string[];
  ariaLabel: string;
};

export function ProjectFlow({ steps, ariaLabel }: ProjectFlowProps) {
  if (steps.length === 0) return null;

  return (
    <ol
      aria-label={ariaLabel}
      className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center"
    >
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col lg:flex-row lg:items-center">
          <p className="py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-foreground">
            {step}
          </p>
          {index < steps.length - 1 ? (
            <span
              aria-hidden
              className="px-1 py-0.5 text-[12px] text-muted lg:px-3"
            >
              <span className="lg:hidden">↓</span>
              <span className="hidden lg:inline">→</span>
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
