import { setRequestLocale } from "next-intl/server";
import { AboutSection } from "@/components/about/AboutSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { PublicationCallout } from "@/components/publications/PublicationCallout";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ContactSection } from "@/components/contact/ContactSection";

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
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <PublicationCallout />
        <ContactSection />
      </main>
    </>
  );
}
