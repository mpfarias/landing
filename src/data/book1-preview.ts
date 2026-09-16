import type { Locale } from "@/i18n/config";

export type BookPreviewPage = {
  src: string;
  alt: Record<Locale, string>;
};

export const book1PreviewPages: BookPreviewPage[] = [];
