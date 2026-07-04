"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const programs = [
    {
        icon: "/images/icon-monetise.svg",
        title: "Essential",
        description:
            "For realtors who want to scale beyond $100k GCI",
    },
    {
        icon: "/images/icon-uplevel.svg",
        title: "Masterminds",
        description:
            "Invite-only in-person gatherings with top voices in the AI for Real Estate space",
    },
    {
        icon: null,
        iconText: "Q",
        title: "Bespoke",
        description:
            "For realtors earning $250K+/year GCI who want to install enterprise-grade AI systems that unlock exponential growth.",
    },
    {
        icon: null,
        iconText: "⚖",
        title: "Masterminds",
        description:
            "Invite-only in-person gatherings with the most elite minds in the digital space.",
    },
];

export function ProgramsGrid() {
    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1100px] mx-auto">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center leading-tight"
                        style={{ color: "var(--text-primary)" }}
                    >
                        You Don't Need Another Dashboard
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <p
                        className="mt-4 text-center text-base font-extralight md:text-lg max-w-2xl mx-auto"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Glyd AI is the white-glove AI service firm for hard working real estate agents who want to go further and faster.
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Top two cards */}
                    {programs.slice(0, 2).map((program, i) => (
                        <ScrollReveal key={program.title} delay={0.1 + i * 0.1}>
                            <div className="card-dark p-8 h-full flex flex-col items-center text-center">
                                {/* Icon and content same as before */}
                                <div className="w-16 h-16 flex items-center justify-center mb-5">
                                    {program.icon ? (
                                        <Image
                                            src={program.icon}
                                            alt={program.title}
                                            width={64}
                                            height={64}
                                            className="w-14 h-14"
                                            style={{
                                                filter: "brightness(0) saturate(100%) invert(75%) sepia(30%) saturate(700%) hue-rotate(5deg) brightness(95%)",
                                            }}
                                        />
                                    ) : (
                                        <span
                                            className="text-4xl font-extralight font-serif"
                                            style={{
                                                background: "linear-gradient(135deg, #e8c48a, #dbab66, #c4944f)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            {program.iconText}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                                    {program.title}
                                </h3>
                                <p className="text-sm font-extralight leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                    {program.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}

                    {/* Full width card below */}
                    {programs[2] && (
                        <ScrollReveal delay={0.3} className="md:col-span-2">
                            <div className="card-dark p-8 h-full flex flex-col items-center text-center">
                                {/* Icon and content same as before */}
                                <div className="w-16 h-16 flex items-center justify-center mb-5">
                                    {programs[2].icon ? (
                                        <Image
                                            src={programs[2].icon}
                                            alt={programs[2].title}
                                            width={64}
                                            height={64}
                                            className="w-14 h-14"
                                            style={{
                                                filter: "brightness(0) saturate(100%) invert(75%) sepia(30%) saturate(700%) hue-rotate(5deg) brightness(95%)",
                                            }}
                                        />
                                    ) : (
                                        <span
                                            className="text-4xl font-extralight font-serif"
                                            style={{
                                                background: "linear-gradient(135deg, #e8c48a, #dbab66, #c4944f)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            {programs[2].iconText}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                                    {programs[2].title}
                                </h3>
                                <p className="text-sm font-extralight leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                    {programs[2].description}
                                </p>
                            </div>
                        </ScrollReveal>
                    )}
                </div>
            </div>
        </section>
    );
}
