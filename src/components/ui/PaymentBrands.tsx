type PaymentBrandsProps = {
  locale: "pt-br" | "en" | "es";
};

const brands = [
  { id: "visa", label: "Visa" },
  { id: "mastercard", label: "Mastercard" },
  { id: "elo", label: "Elo" },
  { id: "amex", label: "American Express" },
  { id: "hipercard", label: "Hipercard" },
  { id: "pix", label: "Pix" },
] as const;

export function PaymentBrands({ locale }: PaymentBrandsProps) {
  const visible =
    locale === "pt-br"
      ? brands
      : brands.filter((brand) => brand.id === "visa" || brand.id === "mastercard" || brand.id === "amex");

  return (
    <ul className="mt-5 flex flex-wrap items-center gap-2" aria-label="Formas de pagamento">
      {visible.map((brand) => (
        <li key={brand.id}>
          <BrandMark id={brand.id} label={brand.label} />
        </li>
      ))}
    </ul>
  );
}

function BrandMark({
  id,
  label,
}: {
  id: (typeof brands)[number]["id"];
  label: string;
}) {
  return (
    <span
      className="inline-flex h-8 min-w-[2.6rem] items-center justify-center rounded-[5px] bg-white px-1.5"
      title={label}
    >
      {id === "visa" ? <VisaMark /> : null}
      {id === "mastercard" ? <MastercardMark /> : null}
      {id === "elo" ? <EloMark /> : null}
      {id === "amex" ? <AmexMark /> : null}
      {id === "hipercard" ? <HipercardMark /> : null}
      {id === "pix" ? <PixMark /> : null}
      <span className="sr-only">{label}</span>
    </span>
  );
}

function VisaMark() {
  return (
    <svg width="38" height="14" viewBox="0 0 38 14" aria-hidden>
      <text
        x="1"
        y="12"
        fill="#1A1F71"
        fontSize="12"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        letterSpacing="0.5"
      >
        VISA
      </text>
    </svg>
  );
}

function MastercardMark() {
  return (
    <svg width="32" height="18" viewBox="0 0 32 18" aria-hidden>
      <circle cx="12" cy="9" r="7" fill="#EB001B" />
      <circle cx="20" cy="9" r="7" fill="#F79E1B" />
      <path
        d="M16 3.6a7 7 0 0 1 0 10.8 7 7 0 0 1 0-10.8Z"
        fill="#FF5F00"
      />
    </svg>
  );
}

function EloMark() {
  return (
    <svg width="34" height="14" viewBox="0 0 34 14" aria-hidden>
      <text
        x="1"
        y="12"
        fill="#000"
        fontSize="12"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
      >
        Elo
      </text>
    </svg>
  );
}

function AmexMark() {
  return (
    <svg width="40" height="14" viewBox="0 0 40 14" aria-hidden>
      <text
        x="0"
        y="12"
        fill="#006FCF"
        fontSize="10"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
        letterSpacing="0.4"
      >
        AMEX
      </text>
    </svg>
  );
}

function HipercardMark() {
  return (
    <svg width="52" height="14" viewBox="0 0 52 14" aria-hidden>
      <text
        x="0"
        y="12"
        fill="#B3131B"
        fontSize="9"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
      >
        HIPERCARD
      </text>
    </svg>
  );
}

function PixMark() {
  return (
    <svg width="28" height="16" viewBox="0 0 28 16" aria-hidden>
      <text
        x="1"
        y="12"
        fill="#32BCAD"
        fontSize="12"
        fontFamily="Arial, sans-serif"
        fontWeight="800"
      >
        Pix
      </text>
    </svg>
  );
}
