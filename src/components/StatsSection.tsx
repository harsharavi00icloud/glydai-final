"use client";

import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";
import { StatsMarquee } from "./StatsMarquee";   // ← add this


export function StatsSection() {
    return (
        <section className="section-padding bg-black">
            <div className="max-w-[1200px] mx-auto">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-center mb-4"
                        style={{ color: "var(--text-primary)" }}
                    >
                        A True White-Glove Experience.
                    </h2>
                    <p className="text-sm font-extralight text-center mb-12 " style={{ color: "var(--text-muted)" }}>
                        We deliver only results. Not the technical fluff. Here's how that looks for you.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_3fr] gap-6">

                    {/* Left Card — animated stats marquee */}
                    <ScrollReveal>
                        <StatsMarquee />
                    </ScrollReveal>

                    {/* Right Chart */}
                    <ScrollReveal delay={0.3} direction="right">
                        <div className="stat-card flex items-center justify-center overflow-hidden">
                            <Image
                                src="/images/total-gci.png"
                                alt="Revenue Chart"
                                width={1920}
                                height={1080}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </ScrollReveal>
                </div>

                {/* Three cards below */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {[
                        {
                            title: "Rank #1 in your city",
                            description: "AI researches your competitors and a human writes blog articles that rank you at the top.",
                            image: "/images/rank1.png"
                        },
                        {
                            title: "One Click FSBO Outreach",
                            description: "AI finds FSBOs & comps in your farm area and creates hyper-personalized pitches to win listings.",
                            image: "/images/+3-fsbos-researched--send-view.png"
                        },
                        {
                            title: "50+ SOPs and Playbooks",
                            description: "Get in top producing circles with insights distilled from 100+ realtor audit calls.",
                            image: "/images/playbook.png"
                        },
                    ].map((card, i) => (
                        <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                            <div className="stat-card flex flex-col">
                                <div className="rounded-lg overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={600}
                                        height={340}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="mt-6">
                                    <h3 className="font-serif text-xl font-light mb-2" style={{ color: "var(--text-primary)" }}>
                                        {card.title}
                                    </h3>
                                    <p className="text-sm font-extralight" style={{ color: "var(--text-muted)" }}>
                                        {card.description}
                                    </p>
                                </div>
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