import { Navbar } from "@/components/Navbar";
import { QuantumHero } from "@/components/quantum/QuantumHero";
import { SystemsSection } from "@/components/quantum/SystemsSection";
import { ExponentialGrowth } from "@/components/quantum/ExponentialGrowth";
import { QuantumTestimonials } from "@/components/quantum/QuantumTestimonials";
import { SneakPeek } from "@/components/quantum/SneakPeek";
import { AdvisoryBoard } from "@/components/quantum/AdvisoryBoard";
import { VideoTestimonials } from "@/components/quantum/VideoTestimonials";
import { FAQSection } from "@/components/quantum/FAQSection";
import { Footer } from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quantum | Consulting.com",
    description:
        "Build a Disgustingly Profitable Digital Business. Quantum is where the top 1% of founders come to scale what already works.",
};

export default function QuantumPage() {
    return (
        <>
            <Navbar />
            <main>
                <QuantumHero />
                <SystemsSection />
                <ExponentialGrowth />
                <QuantumTestimonials />
                <SneakPeek />
                <AdvisoryBoard />
                <VideoTestimonials />
                <FAQSection />
            </main>
            <Footer />
        </>
    );
}
