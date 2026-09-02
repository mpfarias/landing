type ProjectMetric = {
  value: string;
  label: string;
};

type ProjectMetricsProps = {
  items: readonly ProjectMetric[];
};

export function ProjectMetrics({ items }: ProjectMetricsProps) {
  if (items.length === 0) return null;

  return (
    <dl className="grid grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
      {items.map((item) => (
        <div key={`${item.value}-${item.label}`} className="min-w-0 py-6 sm:px-6 sm:first:pl-0 sm:last:pr-0">
          <dt className="text-[clamp(1.7rem,3.2vw,2.35rem)] font-semibold tracking-tight text-foreground">
            {item.value}
          </dt>
          <dd className="mt-1.5 text-[13px] leading-snug text-muted">
            {item.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
