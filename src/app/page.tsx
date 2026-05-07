import { About } from "@/components/About";
import { FiverrCTA } from "@/components/FiverrCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { WorkExamples } from "@/components/WorkExamples";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <TechStack />
      <WorkExamples />
      <WhyWorkWithMe />
      <FiverrCTA />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}