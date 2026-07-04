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
        title: "License Our Systems",
        description: "PlugnPlay the exact architecture we've used to scale our own brands.",
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
        title: "Surrounded by The Top 1%",
        description: "This isn't a circle of wantrepreneurs. This is where the top infopreneurs hang out.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z" />
                <rect x="3" y="6" width="12" height="12" rx="2" />
            </svg>
        ),
        title: "Strategy Calls with Iman",
        description: "Raw, unfiltered guidance. What's working right now - before it becomes common knowledge.",
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
        title: "Elite Talent Rolodex",
        description: "Skip the hiring headache. Tap into a pre-vetted database of A-Players.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V10" />
                <path d="M18 20V4" />
                <path d="M6 20v-4" />
            </svg>
        ),
        title: "Fractional C-Suite",
        description: "Get live support and feedback directly from our leadership team with live mentorship sessions to fast-track your progress.",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        title: "Invite-Only Events",
        description: "Exclusive locations. High-level speakers. Nobody does masterminds better than Quantum.",
    },
];

export function ExponentialGrowth() {
    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1100px] mx-auto">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center mb-4"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Unlock Exponential Growth
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <p
                        className="text-center text-base md:text-lg max-w-2xl mx-auto mb-14"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        We leave nothing on the table inside Quantum. No secrets, nothing left
                        to unlock: if it works for us, it can&apos;t fail for you.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feat, i) => (
                        <ScrollReveal key={i} delay={0.05 + i * 0.08}>
                            <div className="card-dark p-8 h-full group">
                                <div
                                    className="mb-5 w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300"
                                    style={{
                                        background: "rgba(219, 171, 102, 0.1)",
                                        color: "var(--gold)",
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
                                    className="text-sm leading-relaxed"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {feat.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.4}>
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
