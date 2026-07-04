import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/essential/HeroSection";
import { Problems } from "@/components/essential/ProblemSection";
import { Solutions } from "@/components/essential/Solutions";

export default function QuantumPage() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <Problems />
                <Solutions />





            </main>
            <Footer />
        </>
    );
}
