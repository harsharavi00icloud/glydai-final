"use client";

import { ScrollReveal } from "./ScrollReveal";

const achievements = [
    {
        stat: "$100M+ in Sales Generated",
        description:
            "Through our own internal brands - using the same frameworks we now license to clients.",
    },
    {
        stat: "70%+ Profit Margins",
        description:
            "Across digital product businesses we've operated, refined, and scaled.",
    },
    {
        stat: "50+ SOPs & Playbooks",
        description:
            "Operational IP built in-house, stress-tested across multiple ventures.",
    },
    {
        stat: "25+ Clients Doing $1M+ / Year",
        description:
            "We work with business owners already winning - and help them scale further.",
    },
    {
        stat: "8M+ Followers Gained Organically",
        description:
            "Across YouTube, Instagram, and more - powered by our organic growth engine.",
    },
    {
        stat: "Team of 50+ A-Players",
        description:
            "Global execution at scale, built through our own talent systems.",
    },
    {
        stat: "3 Flagship Masterminds Hosted",
        description:
            "From Cape Town to London - designed for experience, information, and connections.",
    },
    {
        stat: "250M+ Monthly Views",
        description: "All organic. All in-house. Built without ad spend.",
    },
];

export function AchievementsGrid() {
    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, i) => (
                        <ScrollReveal key={i} delay={0.05 + i * 0.06}>
                            <div className="py-6 px-1">
                                <h3
                                    className="text-lg font-extralight font-bold mb-2"
                                    style={{ color: "var(--text-primary)" }}
                                >
                                    {item.stat}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed font-extralight"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.5}>
                    <div className="flex justify-center mt-12">
                        <a href="/apply" className="btn-gold">
                            Apply to Work With Us
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
