import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { FiverrCTA } from "@/components/FiverrCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { WorkExamples } from "@/components/WorkExamples";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <TechStack />
      <WorkExamples />
      <HowIWork />
      <WhyWorkWithMe />
      <FAQ />
      <FiverrCTA />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}