"use client";

import Link from "next/link";
import { ScrollReveal } from "../ScrollReveal";

const videoTestimonials = [
    {
        name: "Jean Hollaender",
        title: "Founder of Liberty Webi",
        initials: "JH",
    },
    {
        name: "Darren Lee",
        title: "Founder of Voics",
        initials: "DL",
    },
    {
        name: "Jordan Alexander",
        title: "Founder of StraightLineEntrepreneur",
        initials: "JA",
    },
];

export function VideoTestimonials() {
    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1100px] mx-auto">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center mb-14"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Hear From Our Clients
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {videoTestimonials.map((vid, i) => (
                        <ScrollReveal key={i} delay={0.05 + i * 0.1}>
                            <div className="card-dark overflow-hidden group cursor-pointer">
                                {/* Video thumbnail placeholder */}
                                <div
                                    className="relative aspect-video flex items-center justify-center"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, rgba(219, 171, 102, 0.06) 0%, rgba(20, 20, 21, 1) 100%)",
                                    }}
                                >
                                    {/* Initials */}
                                    <div
                                        className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold"
                                        style={{
                                            background: "rgba(219, 171, 102, 0.15)",
                                            color: "var(--gold)",
                                            border: "2px solid rgba(219, 171, 102, 0.3)",
                                        }}
                                    >
                                        {vid.initials}
                                    </div>

                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div
                                            className="w-16 h-16 rounded-full flex items-center justify-center"
                                            style={{
                                                background: "rgba(219, 171, 102, 0.9)",
                                            }}
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="#000"
                                            >
                                                <polygon points="6,3 20,12 6,21" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-5">
                                    <h3
                                        className="font-semibold text-base mb-1"
                                        style={{
                                            background: "linear-gradient(135deg, #e8c48a, #dbab66)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {vid.name}
                                    </h3>
                                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                                        {vid.title}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.3}>
                    <p
                        className="text-xs text-center mt-8 max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                    >
                        All testimonials on this page are from real clients of Consulting.com.
                        These individuals shared their experiences voluntarily, and their results
                        are not typical. Your results may vary based on factors like your
                        background, effort, skill level, market conditions, and implementation of
                        strategies. We do not claim that these results are achievable by everyone.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <div className="flex justify-center mt-10">
                        <Link href="/assessment-call" className="btn-gold inline-block">
                            Apply to Work With Us
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
