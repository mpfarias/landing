import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-accent text-on-accent hover:bg-accent-hover"
      : "border border-line bg-transparent text-ink hover:border-accent/70 hover:text-accent";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-250 ${styles} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
