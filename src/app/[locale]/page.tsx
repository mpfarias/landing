import { notFound } from "next/navigation";
import { Author } from "@/components/sections/Author";
import { Benefits } from "@/components/sections/Benefits";
import { FeaturedBook } from "@/components/sections/FeaturedBook";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Series } from "@/components/sections/Series";
import { Header } from "@/components/layout/Header";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/content";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const copy = getMessages(raw);

  return (
    <>
      <Header locale={raw} copy={copy} />
      <main id="conteudo">
        <Hero locale={raw} copy={copy} />
        <Benefits copy={copy} />
        <Series copy={copy} />
        <Journey locale={raw} copy={copy} />
        <FeaturedBook locale={raw} copy={copy} />
        <Author copy={copy} />
      </main>
    </>
  );
}
