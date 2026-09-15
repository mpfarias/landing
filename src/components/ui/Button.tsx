import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string | null;
  disabled?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href" | "children"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-background gold-glow hover:bg-gold-hover",
  secondary:
    "border border-line bg-transparent text-foreground hover:border-gold/50 hover:text-gold",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  disabled = false,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[15px] font-semibold tracking-[0.02em] transition-[background-color,border-color,color,transform,opacity,box-shadow] duration-200 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    "w-full sm:w-auto",
    disabled
      ? "cursor-not-allowed opacity-45 shadow-none"
      : "active:scale-[0.98]",
    variants[variant],
    className,
  ].join(" ");

  const hasHref = typeof href === "string" && href.trim().length > 0;

  if (hasHref && !disabled) {
    const external = href.startsWith("http");

    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
