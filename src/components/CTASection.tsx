"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export function CTASection() {
    return (
        <section
            className="relative py-24 md:py-32 overflow-hidden"
            style={{
                background:
                    "radial-gradient(70.27% 100% at 50% 0%, #141415, #000000)",
            }}
        >
            {/* CSS smoke effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
                    style={{
                        background:
                            "radial-gradient(ellipse at 30% 50%, rgba(120, 120, 130, 0.1) 0%, transparent 50%), " +
                            "radial-gradient(ellipse at 70% 40%, rgba(100, 100, 110, 0.08) 0%, transparent 45%)",
                        animation: "ctaSmoke 25s ease-in-out infinite",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
                        style={{ color: "#fafafa" }}
                    >
                        Ready to Have a Spectacular Realtor Career?
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="mt-5 text-base font-extralight md:text-lg" style={{ color: "#b4b4b4" }}>
                        We don&apos;t work with everyone. But if you&apos;re the right fit,
                        this will be the most valuable relationship you&apos;ve ever had in
                        your career.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <Link href="/apply" className="btn-gold mt-10 inline-block">
                        Apply to Work With Us
                    </Link>
                </ScrollReveal>
            </div>

            <style jsx>{`
        @keyframes ctaSmoke {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(3%, -2%);
          }
        }
      `}</style>
        </section>
    );
}
