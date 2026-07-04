"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "../ScrollReveal";

const mainSystems = [
    {
        icon: "👑",
        title: "Organic Category King",
        description:
            "We've built our empire with organic domination - and we give you the exact system to do the same. Create compounding content that makes you the go-to authority without spending on ads. You implement, we guide.",
    },
    {
        icon: "🔄",
        title: "Negative Acquisition Flywheel",
        description:
            "Get paid to acquire customers. Our system flips the model - turning content into both revenue and demand. You install it. We scale it with you.",
    },
    {
        icon: "💰",
        title: "Revenue-Generating Events",
        description:
            "Learn to architect high-leverage cash events that fund your growth. These aren't launches for ego - they're engineered to self-liquidate, convert warm audiences, and ascend customers fast. You run them. We optimize them with you.",
    },
    {
        icon: "🌍",
        title: "Global Talent Arbitrage",
        description:
            "We show you how to build an elite international team that executes at a fraction of the cost. You plug into our hiring funnels, org chart templates, and SOPs. You hire - we help you lead.",
    },
    {
        icon: "🧲",
        title: "Attraction-Based Sales",
        description:
            "Ditch the cold DMs and desperate closers. We give you the system to stop chasing, and start attracting - so your calendar fills with qualified inbound leads who already want what you sell. You own the system. We help you dial it in.",
    },
];

const bonusSystems = [
    {
        icon: "💎",
        title: "What To Do With 'F*ck You' Info Money",
        description:
            "When the cash piles up, we'll show you how to preserve, protect, and multiply it - through personal fund setup, strategic allocations, and empire-building plays.",
    },
    {
        icon: "🌐",
        title: "Global Wealth & Tax Optimization",
        description:
            "We hand you the same legal/financial structures we use to minimize tax, protect assets, and scale globally. You choose your setup. We help you get it right.",
    },
    {
        icon: "🚀",
        title: "Escape Velocity",
        description:
            "We don't just help you scale - we help you disappear. Step out of ops, delivery, and marketing while the machine runs without you. You build it. We help you exit clean.",
    },
];

export function SystemsSection() {
    const [showBonus, setShowBonus] = useState(false);

    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1100px] mx-auto">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center mb-16"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Systems You Install, With Us Beside You
                    </h2>
                </ScrollReveal>

                {/* Main systems grid: 2 on top, 3 on bottom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    {mainSystems.slice(0, 2).map((sys, i) => (
                        <ScrollReveal key={i} delay={0.05 + i * 0.1}>
                            <div className="card-dark p-8 h-full">
                                <div
                                    className="text-3xl mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
                                    style={{ background: "rgba(219, 171, 102, 0.1)" }}
                                >
                                    {sys.icon}
                                </div>
                                <h3
                                    className="text-lg font-semibold mb-3"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {sys.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {sys.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {mainSystems.slice(2).map((sys, i) => (
                        <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                            <div className="card-dark p-8 h-full">
                                <div
                                    className="text-3xl mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
                                    style={{ background: "rgba(219, 171, 102, 0.1)" }}
                                >
                                    {sys.icon}
                                </div>
                                <h3
                                    className="text-lg font-semibold mb-3"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {sys.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {sys.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bonus Layer Toggle */}
                <ScrollReveal delay={0.3}>
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={() => setShowBonus(!showBonus)}
                            className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
                            style={{
                                background: "rgba(219, 171, 102, 0.1)",
                                color: "var(--gold)",
                                border: "1px solid rgba(219, 171, 102, 0.2)",
                            }}
                        >
                            <span>Bonus Layer</span>
                            <svg
                                className={`w-4 h-4 transition-transform duration-300 ${showBonus ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </ScrollReveal>

                {/* Bonus Cards */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${showBonus ? "max-h-[800px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"
                        }`}
                >
                    <div className="mb-4">
                        <h3
                            className="font-serif text-xl md:text-2xl font-light text-center mb-8"
                            style={{ color: "var(--gold)" }}
                        >
                            Wealth &amp; Exit Playbooks After You Scale
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {bonusSystems.map((sys, i) => (
                            <div key={i} className="card-dark p-8 h-full">
                                <div
                                    className="text-3xl mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
                                    style={{ background: "rgba(219, 171, 102, 0.1)" }}
                                >
                                    {sys.icon}
                                </div>
                                <h3
                                    className="text-lg font-semibold mb-3"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {sys.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {sys.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <ScrollReveal delay={0.3}>
                    <div className="flex justify-center mt-14">
                        <Link href="/assessment-call" className="btn-gold inline-block">
                            Apply to Work With Us
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
