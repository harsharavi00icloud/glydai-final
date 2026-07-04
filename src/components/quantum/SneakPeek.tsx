"use client";

import { ScrollReveal } from "../ScrollReveal";

const videos = [
    {
        title: "How Iman Decided To Become Famous, Built A System & Accomplished It In 12 Months",
        description:
            "Not everyone should aim to have millions of followers or be recognised everywhere they go; in fact, we discourage most of our Quantum clients from doing so. Nonetheless, we still provide our FULL system to accomplish it. We systematically hacked the algorithm on YouTube, TikTok, Instagram, X, LinkedIn, Snapchat, and more. In just 12 months, we grew 5 million+ subscribers and followers.",
        stat: "5M+",
        statLabel: "followers grown",
    },
    {
        title: "How Iman 'Fired' himself, working only 5 Hours a Week on his digital business",
        description:
            "Unlike most digital business owners who work round the clock with razor-thin margins, Iman built a C-Suite team to delegate 99% of his tasks to freeing him to build software and physical product businesses.",
        stat: "5hrs",
        statLabel: "per week",
    },
    {
        title: "How we made $70M+ from digital products with 97.15% Margins",
        description:
            "Most people talk about their revenue; we talk profit. We've spent only $2m on ads to bring in over $70m+ in digital product sales while building a worldwide name with brand value. We built a system that has produced 6 years of consecutive year-on-year growth in profits.",
        stat: "97.15%",
        statLabel: "profit margins",
    },
    {
        title: "How we made $20,000,000+ from one YouTube video",
        description:
            "We accomplished the holy grail of business, a negative cost of acquisition channel: getting paid to get paid. One single video generated more than $250K+ in AdSense revenue and $20 Million in sales.",
        stat: "$20M+",
        statLabel: "from one video",
    },
    {
        title: "How Iman is Building a Billion Dollar Empire (Funded by digital products)",
        description:
            "Wealth comes from building enterprise-valued businesses: personal branding and digital products funded his investments in BIG DAY, GADZHI, Flozy, and more, elevating him into a true entrepreneur.",
        stat: "$1B+",
        statLabel: "empire goal",
    },
];

export function SneakPeek() {
    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1100px] mx-auto">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center mb-4"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Sneak-peek Into Quantum
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p
                        className="text-center text-base md:text-lg max-w-2xl mx-auto mb-14"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Here are just a few examples of the powerful strategies and insider
                        secrets you&apos;ll master to accelerate your business growth and dominate
                        your market.
                    </p>
                </ScrollReveal>

                <div className="space-y-6">
                    {videos.map((video, i) => (
                        <ScrollReveal key={i} delay={0.05 + i * 0.1}>
                            <div className="card-dark overflow-hidden">
                                <div className="flex flex-col md:flex-row">
                                    {/* Video placeholder / stat card */}
                                    <div
                                        className="md:w-[280px] flex-shrink-0 flex items-center justify-center p-8 md:p-10"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, rgba(219, 171, 102, 0.08) 0%, rgba(219, 171, 102, 0.02) 100%)",
                                            borderRight: "1px solid var(--border-subtle)",
                                        }}
                                    >
                                        <div className="text-center">
                                            <div
                                                className="text-3xl md:text-4xl font-bold font-serif"
                                                style={{
                                                    background: "linear-gradient(135deg, #e8c48a, #dbab66)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                }}
                                            >
                                                {video.stat}
                                            </div>
                                            <div
                                                className="text-xs mt-1 uppercase tracking-wider"
                                                style={{ color: "var(--text-muted)" }}
                                            >
                                                {video.statLabel}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 md:p-8">
                                        <h3
                                            className="text-lg md:text-xl font-semibold mb-3"
                                            style={{ color: "var(--text-primary)" }}
                                        >
                                            {video.title}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {video.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
