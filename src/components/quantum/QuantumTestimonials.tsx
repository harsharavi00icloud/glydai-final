"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../ScrollReveal";

const testimonials = [
    {
        name: "Jean Hollaender",
        title: "Founder of Liberty Webi",
        photo: null,
        quote:
            '"Before Quantum, our biggest launch capped at $2.8M. After joining, we executed everything we found inside — and just closed a record-breaking $5.8M launch."',
        boldPart: "record-breaking $5.8M launch",
    },
    {
        name: "Davis Pfaff",
        title: "Co-Founder of Pfaff Brothers",
        photo: null,
        quote:
            '"Iman, Ali, and their team offer unparalleled transparency, sharing invaluable insights into personal branding and information products. Their masterclass is a game-changer for anyone serious about growth in this space."',
        boldPart: "game-changer for anyone serious about growth",
    },
    {
        name: "Alexander Ma",
        title: "Founder of Wedding Filmmaker Mastery",
        photo: null,
        quote:
            '"Iman helped me reframe my entire approach to business, inspiring me to think bigger beyond just coaching and focus on building my empire."',
        boldPart: "think bigger beyond just coaching",
    },
    {
        name: "Jan Srajer",
        title: "Founder of Funded Mind",
        photo: null,
        quote:
            '"Iman and his team helped me establish a solid foundation for my business, enabling me to surpass $70,000 in daily revenue three times in 2024."',
        boldPart: "$70,000 in daily revenue",
    },
    {
        name: "Fidel Guajardo",
        title: "Founder of LevelUp REI",
        photo: "/images/testimonial-photo.webp",
        quote:
            '"Within the first month I was in Quantum, I made my investment back by just implementing a few of the strategies that I learnt inside."',
        boldPart: "made my investment back",
    },
    {
        name: "Miles Longstreth",
        title: "Founder of Flips4Miles",
        photo: null,
        quote:
            '"I\'ve been a client for about three months now, and I absolutely love the access to the team, the information we\'ve got about how to build a super profitable, lean info-business where you don\'t need to spend a ton of money on ads, you don\'t need a giant team and you build a nice profitable operation."',
        boldPart: "I absolutely love the access to the team",
    },
];

function renderQuoteWithBold(quote: string, boldPart: string) {
    const parts = quote.split(boldPart);
    if (parts.length === 1) return <span>{quote}</span>;
    return (
        <span>
            {parts[0]}
            <strong className="font-bold text-white">{boldPart}</strong>
            {parts[1]}
        </span>
    );
}

export function QuantumTestimonials() {
    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1100px] mx-auto">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center mb-12"
                        style={{ color: "var(--text-primary)" }}
                    >
                        What Our Clients Are Saying
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <ScrollReveal key={i} delay={0.05 + i * 0.08}>
                            <div className="card-dark p-8 h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[var(--surface-elevated)] flex-shrink-0">
                                        {t.photo ? (
                                            <Image
                                                src={t.photo}
                                                alt={t.name}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-lg font-semibold text-[var(--text-muted)]">
                                                {t.name.split(" ").map((n) => n[0]).join("")}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3
                                            className="font-semibold text-base"
                                            style={{
                                                background: "linear-gradient(135deg, #e8c48a, #dbab66)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            {t.name}
                                        </h3>
                                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                                            {t.title}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                                    {renderQuoteWithBold(t.quote, t.boldPart)}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.4}>
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

                <ScrollReveal delay={0.5}>
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
