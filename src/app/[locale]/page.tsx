import { setRequestLocale } from "next-intl/server";
import { AboutSection } from "@/components/about/AboutSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { ImpactStrip } from "@/components/impact/ImpactStrip";

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
        <ImpactStrip />
        <AboutSection />
        <ExperienceSection />
      </main>
    </>
  );
}
