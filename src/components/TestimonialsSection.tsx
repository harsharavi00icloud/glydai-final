"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
    {
        name: "Anne Swo",
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

export function TestimonialsSection() {
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
                                {/* Header */}
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
                                                {t.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3
                                            className="font-semibold text-base"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, #e8c48a, #dbab66)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            {t.name}
                                        </h3>
                                        <p
                                            className="text-xs mt-0.5"
                                            style={{ color: "var(--text-muted)" }}
                                        >
                                            {t.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Quote */}
                                <p
                                    className="text-sm leading-relaxed flex-1"
                                    style={{ color: "var(--text-secondary)" }}
                                >
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
                        All testimonials on this page are from clients of
                        Glyd AI. These individuals shared their experiences
                        voluntarily, and their results are not typical. Your results may vary
                        based on factors like your background, effort, skill level, market
                        conditions, and implementation of strategies. We do not claim that
                        these results are achievable by everyone.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
