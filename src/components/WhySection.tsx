"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export function WhySection() {
    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* Image */}
                <ScrollReveal direction="left" className="flex-shrink-0">
                    <div className="relative w-[280px] h-[380px] md:w-[340px] md:h-[460px] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/iman-gadzhi.jpeg"
                            alt="Iman Gadzhi"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 280px, 340px"
                        />
                    </div>
                </ScrollReveal>

                {/* Text */}
                <div className="flex-1">
                    <ScrollReveal>
                        <h2
                            className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light leading-tight"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Why We Started Glyd AI
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p
                            className="mt-6 text-base md:text-lg leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                        >
                            Most of what&apos;s taught online today is noise - recycled
                            tactics, surface-level courses, and influencer-led programs.
                            Glyd AI exists to fix that. We built our own empire using
                            the systems we now install for others. If you&apos;re already
                            winning but want to win faster, cleaner, and at scale, you&apos;re
                            in the right place.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="mt-8">
                            <Image
                                src="/images/signature.png"
                                alt="Iman Gadzhi signature"
                                width={140}
                                height={50}
                                className="opacity-80 invert"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
