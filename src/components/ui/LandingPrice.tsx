import { PaymentBrands } from "@/components/ui/PaymentBrands";
import type { BookPrice } from "@/data/types";
import type { Locale } from "@/i18n/config";

type PromoLabels = {
  from: string;
  only: string;
  installmentsOf: string;
  or: string;
  cash: string;
  card: string;
};

type LandingPriceProps = {
  price: BookPrice;
  promo: PromoLabels;
  locale: Locale;
};

export function LandingPrice({ price, promo, locale }: LandingPriceProps) {
  const symbol = price.currency === "BRL" ? "R$" : "US$";
  const installment = price.installmentDisplay;
  const compareAt = price.compareAtDisplay;

  if (!compareAt || !installment) {
    return (
      <p className="font-display mt-7 text-[1.85rem] leading-none font-semibold tracking-[-0.03em] text-gold">
        {price.display}
      </p>
    );
  }

  return (
    <div className="mt-7">
      <p className="text-[15px] leading-snug text-muted sm:text-[16px]">
        {promo.from}{" "}
        <span className="font-semibold text-foreground line-through decoration-gold decoration-[1.5px]">
          {compareAt}
        </span>{" "}
        {promo.only}
      </p>
      <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-[18px] font-semibold text-foreground sm:text-[20px]">
          {promo.installmentsOf}
        </span>
        <span className="font-display text-[1.55rem] font-semibold tracking-[-0.03em] text-gold sm:text-[1.7rem]">
          {symbol}
        </span>
        <span className="font-display text-[3rem] leading-none font-semibold tracking-[-0.04em] text-gold sm:text-[3.4rem]">
          {installment}
          <sup className="ml-0.5 text-[1rem] font-semibold sm:text-[1.15rem]">*</sup>
        </span>
        <span className="text-[15px] text-muted sm:text-[16px]">{promo.card}</span>
      </p>
      <p className="mt-3 text-[15px] text-muted sm:text-[16px]">
        {promo.or} {price.display} {promo.cash}
      </p>
      <PaymentBrands locale={locale} />
    </div>
  );
}
