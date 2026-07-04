"use client";

import Link from "next/link";
import { ScrollReveal } from "../ScrollReveal";

const features = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
            </svg>
        ),
        title: "2-Hour Response Time",
        description: "By the time you finish a closing, you've lost the lead to another agent who responded first.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" y1="8" x2="12" y2="8" />
                <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
            </svg>
        ),
        title: "Low Quality Leads",
        description: "You burn out chasing tire-kickers and low-intent leads.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z" />
                <rect x="3" y="6" width="12" height="12" rx="2" />
            </svg>
        ),
        title: "10 Hrs/Week on Social Media",
        description: "You post open house flyers, client wins and market updates but nobody contacts you.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: "$3000+/mo ISA",
        description: "ISA costs drain your pockets before you even close.",
    },
];

export function Problems() {
    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1100px] mx-auto">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center mb-4"
                        style={{ color: "var(--text-primary)" }}
                    >
                        You're stuck at $100k GCI.
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <p
                        className="text-center font-extralight text-base md:text-lg max-w-2xl mx-auto mb-14"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        You work harder than ever but commissions barely cover bills, your stress levels are up, and your 'unlimited income' dream feels like a trap.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((feat, i) => (
                        <ScrollReveal key={i} delay={0.05 + i * 0.08}>
                            <div className="card-dark-red p-8 h-full group">
                                <div
                                    className="mb-5 w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300"
                                    style={{
                                        background: "rgba(215, 0, 0, 0.3)",
                                        color: "rgba(255, 151, 151, 0.3)",
                                    }}
                                >
                                    {feat.icon}
                                </div>
                                <h3
                                    className="text-lg font-semibold mb-3"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {feat.title}
                                </h3>
                                <p
                                    className="text-sm font-extralight leading-relaxed"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {feat.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
