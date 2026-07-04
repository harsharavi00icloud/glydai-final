"use client";

import { ScrollReveal } from "../ScrollReveal";

const members = [
    {
        name: "Iman Gadzhi",
        role: "CEO",
        bio: "Iman is the face of Educate and the strategist behind its year-on-year growth for 8+ years. He built the personal brand model that scaled an empire - and inside Quantum, he shows you how to think long-term, move like a founder, and make plays that actually matter.",
        initials: "IG",
        gradient: "linear-gradient(135deg, #e8c48a 0%, #dbab66 50%, #c4944f 100%)",
    },
    {
        name: "Luis Berger",
        role: "CMO",
        bio: "From 8-figure launches to $20M+ VSL funnels, he's architected the marketing systems that power our entire ecosystem. Inside Quantum, Luis hands you the exact frameworks to craft high-leverage funnels, write conversion-driven scripts, and build scalable campaigns that generate serious revenue - without relying on hacks or guesswork.",
        initials: "LB",
        gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    },
    {
        name: "Max Schliebener",
        role: "COO",
        bio: "Max built the backbone of Educate - the systems, infrastructure, and team behind one of the most profitable info companies in the world. He's assembled top 1% talent and installed the operational engine that drove $100M+ in sales with 70%+ profit margins. Inside Quantum, Max helps you build a business that runs without chaos - lean, scalable, and built to last.",
        initials: "MS",
        gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    },
    {
        name: "Ali Haider",
        role: "CPO",
        bio: "Ali is the architect of client success at Educate. He manages our highest-tier relationships with precision, care, and finesse - ensuring retention, loyalty, and results at the top level. Inside Quantum, Ali helps you build world-class experiences that keep clients happy, engaged, and paying - long after the first sale.",
        initials: "AH",
        gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
];

export function AdvisoryBoard() {
    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1100px] mx-auto">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center mb-4"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Your New Advisory Board
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p
                        className="text-center text-base md:text-lg max-w-2xl mx-auto mb-16"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Meet your new C-Suite, industry titans with proven track records ready to
                        scale your business to unprecedented heights.
                    </p>
                </ScrollReveal>

                <div className="space-y-12">
                    {members.map((member, i) => {
                        const isReversed = i % 2 !== 0;
                        return (
                            <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                                <div
                                    className={`card-dark overflow-hidden flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
                                >
                                    {/* Portrait placeholder */}
                                    <div
                                        className="md:w-[300px] flex-shrink-0 flex items-center justify-center p-10 md:p-12"
                                        style={{
                                            background: `linear-gradient(135deg, rgba(219, 171, 102, 0.06) 0%, rgba(0,0,0,0.3) 100%)`,
                                        }}
                                    >
                                        <div
                                            className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold text-white"
                                            style={{ background: member.gradient }}
                                        >
                                            {member.initials}
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                                        <h3
                                            className="font-serif text-2xl md:text-3xl font-normal mb-1"
                                            style={{
                                                background: "linear-gradient(135deg, #e8c48a, #dbab66)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            {member.name}
                                        </h3>
                                        <p
                                            className="text-sm font-semibold uppercase tracking-wider mb-5"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {member.role}
                                        </p>
                                        <p
                                            className="text-sm md:text-base leading-relaxed"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
