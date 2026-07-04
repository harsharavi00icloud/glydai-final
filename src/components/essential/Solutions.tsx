"use client";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

// ── Data ─────────────────────────────────────────────────────────────────────
const solutionImages = [
    "/images/solutions/speed-to-lead.png",
    "/images/solutions/lead-qualification.png",
    "/images/solutions/social-media-agent.png",
    "/images/solutions/fsbo-agent.png",
];

const solutions = [
    {
        title: "Respond in 30 seconds",
        description: "MIT study: Agents that respond first win 78% of the time. In a crowded market, this is your weapon.",
        bullets: [
            "AI responds to every lead within 60 seconds, guaranteed",
            "Runs 24/7 — nights, weekends, holidays",
            "Works across calls, texts, social media, and MLS leads",
            "Zero additional hires required",
        ],
        stat: "60 sec",
        statLabel: "Guaranteed lead response time",
    },
    {
        title: "BART Qualification + Hot Lead Live Transfer",
        description: "Stop wasting time on tire-kickers. Speak to serious buyers and sellers and close more deals.",
        bullets: [
            "AI qualifies every inbound lead using the proven BART method",
            "Hot leads transferred to your phone instantly — live",
            "Cold leads auto-added to your CRM with a full nurture sequence",
            "We build the entire nurture sequence",
        ],
        stat: "100%",
        statLabel: "Of leads qualified & routed automatically",
    },
    {
        title: "Stand Out with A Personal Brand",
        description: "Agents don't get hired by posting market updates. We build and run a trust-building content strategy — researched specifically for your ICP and farm area",
        bullets: [
            "Become the #1 recognized agent in your farm area",
            "Your ICP and farm area fully researched and mapped",
            "Trust and credibility-building scripts written for you",
            "Content distributed automatically across all channels",
            "More inbound leads from people who already know and trust you",
        ],
        stat: "#1",
        statLabel: "Agent in your farm area",
    },
    {
        title: "Optional FSBO Agent",
        description: "FSBOs are the highest-intent prospects in any market — and they're being ignored by most agents. We build you a hyper-personalized FSBO outreach system, including an automatic custom CMA PDF sent with every touchpoint, all within your farm area.",
        bullets: [
            "Hyper-personalized FSBO outreach in your farm area",
            "Review and approve each message in one click before it sends",
            "Sent automatically on your channel of choice — text, email, and more",
            "Automatic custom CMA PDF delivered with every outreach",
            "Requires MLS API access — we handle the full integration",
        ],
        stat: "1-Click",
        statLabel: "Approve & deploy personalized outreach",
    },
];

// ── Component ─────────────────────────────────────────────────────────────────
export function Solutions() {
    return (
        <section className="section-padding bg-black" id="solutions">
            <div className="max-w-[1280px] mx-auto px-4">
                {/* Section Header */}
                <ScrollReveal delay={0.05}>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, var(--gold))" }} />
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
                            What We Build For You
                        </span>
                        <div className="h-px w-12" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center leading-tight mb-5" style={{ color: "var(--text-primary)" }}>
                        Speed To{" "}
                        <span style={{ background: "linear-gradient(135deg, #e8c48a, #dbab66)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            More Leads.
                        </span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                    <p className="text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-12" style={{ color: "var(--text-secondary)" }}>
                        Fully built and managed by us. No extra logins, no dashboards, no learning curve. You focus on closing — we handle everything else.
                    </p>
                </ScrollReveal>

                {/* Wider cards grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {solutions.map((item, i) => (
                        <ScrollReveal key={i} delay={0.05 + i * 0.08}>
                            <div className="card-dark overflow-hidden h-full flex flex-col">
                                {/* <div className="relative h-64">
                                    <Image
                                        src={solutionImages[i]}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1280px) 50vw, 100vw"
                                    />
                                </div>*/}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-semibold leading-snug mb-4" style={{ color: "var(--text-primary)" }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                                        {item.description}
                                    </p>
                                    <ul className="space-y-3 mt-auto">
                                        {item.bullets.map((text, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span className="text-lg leading-none mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }}>•</span>
                                                <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                                    {text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="border-t border-white/5 p-8 pt-6">
                                    <div className="text-center">
                                        <div className="font-serif text-4xl md:text-5xl font-light mb-1" style={{ background: "linear-gradient(135deg, #e8c48a, #dbab66)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                            {item.stat}
                                        </div>
                                        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                                            {item.statLabel}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Monthly Reporting */}
                <ScrollReveal delay={0.2}>
                    <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5" style={{ background: "var(--surface)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(219, 171, 102, 0.1)", color: "var(--gold)" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <h4 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>Monthly Performance Reports</h4>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>No new dashboard login, no new course to learn. We respect your way of working.</p>
                        </div>

                    </div>
                </ScrollReveal>

                {/* Bottom CTA */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-16 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden" style={{ background: "var(--surface)", border: "1px solid rgba(219, 171, 102, 0.15)" }}>
                        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(219,171,102,0.07), transparent)" }} />
                        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Ready to Install the System?</p>
                        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-snug mb-5 max-w-xl mx-auto" style={{ color: "var(--text-primary)" }}>
                            A true white-glove experience.{" "}
                            <span style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>We handle the tech, you handle the clients.</span>
                        </h3>
                        <p className="text-base leading-relaxed max-w-lg font-extralight mx-auto mb-10" style={{ color: "var(--text-secondary)" }}>Apply to Work With Us. We'll walk you through each system, answer every question, and show you exactly what it looks like running in your market.</p>
                        <Link href="/assessment-call" className="btn-gold inline-block">Apply to Work With Us</Link>
                        <p className="text-xs mt-5" style={{ color: "var(--text-muted)" }}>Limited spots per market. We work with one agent per farm area.</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}