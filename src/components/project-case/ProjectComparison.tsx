type ProjectComparisonProps = {
  before: string;
  after: string;
  beforeValue: string;
  afterValue: string;
  beforeLabel: string;
  afterLabel: string;
};

export function ProjectComparison({
  before,
  after,
  beforeValue,
  afterValue,
  beforeLabel,
  afterLabel,
}: ProjectComparisonProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-[1fr_auto_1fr] sm:gap-10">
      <div>
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
          {before}
        </p>
        <p className="mt-2 text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-[-0.05em] text-foreground">
          {beforeValue}
        </p>
        <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed text-muted">
          {beforeLabel}
        </p>
      </div>
      <span aria-hidden className="hidden h-16 w-px bg-border sm:block" />
      <div>
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
          {after}
        </p>
        <p className="mt-2 text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-[-0.05em] text-secondary">
          {afterValue}
        </p>
        <p className="mt-2 max-w-[16rem] text-[13px] leading-relaxed text-muted">
          {afterLabel}
        </p>
      </div>
    </div>
  );
}
