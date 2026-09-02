import { setRequestLocale } from "next-intl/server";
import { AboutSection } from "@/components/about/AboutSection";
import { HelpSection } from "@/components/help/HelpSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { ImpactStrip } from "@/components/impact/ImpactStrip";
import { PublicationsSection } from "@/components/publications/PublicationsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { TechnologySection } from "@/components/technology/TechnologySection";

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
        <HelpSection />
        <ProjectsSection />
        <ExperienceSection />
        <TechnologySection />
        <PublicationsSection />
        <ContactSection />
      </main>
    </>
  );
}
