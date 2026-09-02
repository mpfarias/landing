type ProjectTechnologyProps = {
  items: readonly string[];
  label?: string;
};

export function ProjectTechnology({ items, label }: ProjectTechnologyProps) {
  if (items.length === 0) return null;

  return (
    <div>
      {label ? (
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted">
          {label}
        </p>
      ) : null}
      <ul className={label ? "mt-3 flex flex-wrap gap-x-1 gap-y-2" : "flex flex-wrap gap-x-1 gap-y-2"}>
        {items.map((tech) => (
          <li
            key={tech}
            className="border-l border-border pl-3 pr-4 text-[13px] tracking-[0.02em] text-foreground/85"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
