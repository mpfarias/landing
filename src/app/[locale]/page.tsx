import { setRequestLocale } from "next-intl/server";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Ebooks } from "@/components/home/Ebooks";
import { Hero } from "@/components/home/Hero";
import { Systems } from "@/components/home/Systems";
import { Header } from "@/components/layout/Header";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Systems />
        <Ebooks />
        <Contact />
      </main>
    </>
  );
}
