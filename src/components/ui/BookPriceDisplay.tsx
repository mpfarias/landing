import type { BookPrice } from "@/data/types";

type PromoLabels = {
  badge: string;
  from: string;
  to: string;
  limited: string;
};

type BookPriceDisplayProps = {
  price: BookPrice;
  promo: PromoLabels;
  className?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
};

export function BookPriceDisplay({
  price,
  promo,
  className = "",
  align = "left",
  size = "md",
}: BookPriceDisplayProps) {
  const currentSize =
    size === "lg"
      ? "text-[2rem] sm:text-[2.35rem]"
      : "text-[1.85rem] sm:text-[2rem]";

  return (
    <div
      className={[
        align === "center" ? "mt-6" : "mt-7",
        align === "center" ? "text-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {price.compareAtDisplay ? (
        <>
          <p className="text-[12px] font-semibold tracking-[0.18em] text-gold uppercase">
            {promo.badge}
          </p>
          <p className="mt-3 text-[15px] text-muted sm:text-[16px]">
            {promo.from}:{" "}
            <span className="line-through">{price.compareAtDisplay}</span>
          </p>
          <p
            className={[
              "mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1",
              align === "center" ? "justify-center" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span className="text-[15px] text-muted sm:text-[16px]">
              {promo.to}:
            </span>
            <span
              className={[
                "font-display leading-none font-semibold tracking-[-0.03em] text-gold",
                currentSize,
              ].join(" ")}
            >
              {price.display}
            </span>
          </p>
          <p className="mt-3 text-[13px] text-muted">{promo.limited}</p>
        </>
      ) : (
        <p
          className={[
            "font-display leading-none font-semibold tracking-[-0.03em] text-gold",
            currentSize,
          ].join(" ")}
        >
          {price.display}
        </p>
      )}
    </div>
  );
}
