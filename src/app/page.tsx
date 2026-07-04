import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Problems } from "@/components/ProblemSection";
import { ProgramsGrid } from "@/components/ProgramsGrid";
import { StatsSection } from "@/components/StatsSection";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Problems />
        <ProgramsGrid />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
