type StatusBadgeProps = {
  label: string;
  className?: string;
};

export function StatusBadge({ label, className = "" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-gold/35 bg-background/85 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-gold uppercase backdrop-blur-sm ${className}`}
    >
      {label}
    </span>
  );
}
