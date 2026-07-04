"use client";

import Link from "next/link";
import { ScrollReveal } from "../ScrollReveal";

export function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{
                background:
                    "radial-gradient(70.27% 100% at 50% 0%, #141415, #000000)",
            }}
        >
            {/* Blue glow border edges */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    boxShadow:
                        "inset 0 0 120px 40px rgba(59, 130, 246, 0.08), inset 0 2px 0 rgba(59, 130, 246, 0.2)",
                }}
            />

            {/* CSS-based smoke/fog effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Layer 1: wispy fog */}
                <div
                    className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
                    style={{
                        background:
                            "radial-gradient(ellipse at 30% 50%, rgba(120, 120, 130, 0.12) 0%, transparent 50%), " +
                            "radial-gradient(ellipse at 70% 40%, rgba(100, 100, 110, 0.1) 0%, transparent 45%), " +
                            "radial-gradient(ellipse at 50% 70%, rgba(140, 140, 150, 0.08) 0%, transparent 55%)",
                        animation: "smokeDrift 25s ease-in-out infinite",
                    }}
                />
                {/* Layer 2: subtle secondary wisps */}
                <div
                    className="absolute w-[180%] h-[180%] -top-1/4 -right-1/4"
                    style={{
                        background:
                            "radial-gradient(ellipse at 60% 30%, rgba(130, 130, 140, 0.1) 0%, transparent 40%), " +
                            "radial-gradient(ellipse at 40% 60%, rgba(110, 110, 120, 0.07) 0%, transparent 50%)",
                        animation: "smokeDrift2 30s ease-in-out infinite",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-centers text-center px-6 max-w-4xl mx-auto pt-24">
                <ScrollReveal delay={0.1}>
                    <h1
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight"
                        style={{ color: "#fafafa" }}
                    >
                        <li> Get More Leads.</li> Respond in 30 seconds. <li> Close More Deals.</li>
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <p className="mt-6 text-base font-extralight md:text-lg" style={{ color: "#a1a1aa" }}>
                        A white-glove AI service that delivers only results; not another dashboard to login.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                    <Link href="/assessment-call" className="btn-gold mt-10 font-extralight inline-block">
                        Apply to Work With Us
                    </Link>
                </ScrollReveal>
            </div>

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{
                    background: "linear-gradient(to top, #000, transparent)",
                }}
            />

            {/* Inline keyframes for smoke animation */}
            <style jsx>{`
        @keyframes smokeDrift {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(3%, -2%) rotate(1deg);
          }
          66% {
            transform: translate(-2%, 3%) rotate(-1deg);
          }
        }
        @keyframes smokeDrift2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-4%, 2%) rotate(-0.5deg);
          }
        }
      `}</style>
        </section>
    );
}
