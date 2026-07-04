"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "../ScrollReveal";

const faqs = [
    {
        question: "What is Quantum?",
        answer:
            "Quantum is our highest-tier program designed for established digital business owners who are already generating revenue and want to scale rapidly. It provides you with the exact systems, infrastructure, and unfair advantages that we use to run our own businesses — with direct access to our C-Suite team for guidance and implementation support.",
    },
    {
        question: "What Is Consulting.com?",
        answer:
            "Consulting.com is a consulting firm helping digital businesses through software, service & strategy. Established in 2016, we've helped thousands of entrepreneurs build and scale profitable digital businesses using proven systems and frameworks.",
    },
    {
        question: "How long will it take to see results?",
        answer:
            "Results vary depending on your starting point, effort, and implementation speed. Many of our clients start seeing meaningful improvements within the first 30-60 days of joining Quantum. However, the systems we teach are designed for long-term, compounding growth rather than quick fixes.",
    },
    {
        question: "Will I have direct access to Iman's C-Suite?",
        answer:
            "Yes. Quantum members get direct access to our leadership team through live mentorship sessions, strategy calls, and our private community. You'll work directly with Iman, Luis, Max, Ali, and the rest of our executive team.",
    },
    {
        question: "Is this license only beneficial for infopreneurs?",
        answer:
            "While our systems were built and proven in the digital products and info space, the core principles — organic growth, attraction-based sales, operational excellence, and talent arbitrage — apply to any digital business model. Many of our clients apply these frameworks across coaching, SaaS, agencies, and more.",
    },
    {
        question: "What makes Quantum different from other options I've considered?",
        answer:
            "Unlike courses or generic masterminds, Quantum gives you licensable systems — the exact infrastructure we use to run our own brands. You're not learning theory; you're installing proven playbooks with our team beside you. Plus, you're surrounded by the top 1% of digital entrepreneurs, not beginners.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="section-padding bg-black">
            <div className="max-w-[800px] mx-auto">
                <ScrollReveal>
                    <h2
                        className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center mb-4"
                        style={{ color: "var(--text-primary)" }}
                    >
                        Common Questions
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p
                        className="text-center text-base md:text-lg max-w-xl mx-auto mb-12"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        Still have questions? We&apos;ve answered some of the most common queries
                        below to help you make an informed decision.
                    </p>
                </ScrollReveal>

                <div className="space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <ScrollReveal key={i} delay={0.05 + i * 0.06}>
                                <div
                                    className="rounded-2xl overflow-hidden transition-all duration-300"
                                    style={{
                                        background: "var(--surface)",
                                        border: `1px solid ${isOpen ? "rgba(219, 171, 102, 0.2)" : "var(--border-subtle)"}`,
                                    }}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                                    >
                                        <span
                                            className="text-base font-medium pr-4"
                                            style={{ color: "var(--text-primary)" }}
                                        >
                                            {faq.question}
                                        </span>
                                        <span
                                            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all duration-300"
                                            style={{
                                                color: isOpen ? "var(--gold)" : "var(--text-muted)",
                                                background: isOpen
                                                    ? "rgba(219, 171, 102, 0.1)"
                                                    : "transparent",
                                                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                                            }}
                                        >
                                            +
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
                                    >
                                        <p
                                            className="px-6 pb-5 text-sm leading-relaxed"
                                            style={{ color: "var(--text-secondary)" }}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
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
