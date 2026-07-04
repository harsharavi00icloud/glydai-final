"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────
interface StatCard {
    icon: React.ReactNode;
    label: string;
    value: string;
    change: string;
}

// ── Icons (inline SVG, matching the Framer originals) ──────────────────────
const IconSignUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 fill-white flex-shrink-0">
        <path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z" />
    </svg>
);

const IconImpressions = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 fill-white flex-shrink-0">
        <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" />
    </svg>
);

const IconRevenue = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 fill-white flex-shrink-0">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm12,152h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24a28,28,0,0,1,0,56Z" />
    </svg>
);

const IconConversion = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 fill-white flex-shrink-0">
        <path d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z" />
    </svg>
);

const IconCustomers = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 fill-white flex-shrink-0">
        <path d="M253.66,133.66l-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z" />
    </svg>
);

const IconCheckouts = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-4 h-4 fill-white flex-shrink-0">
        <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Z" />
    </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────
const columnA: StatCard[] = [
    { icon: <IconSignUp />, label: "Qualified Leads", value: "+24", change: "+230.1%" },
    { icon: <IconImpressions />, label: "3130 Placeda St, Jacksonville", value: "CMA Ready", change: "Approve & Send" },
    { icon: <IconRevenue />, label: "1842 Mirabeau Ave, New Orleans", value: "Campaign Ready", change: "Start" },
];

const columnB: StatCard[] = [
    { icon: <IconConversion />, label: "Monthly Report", value: "+$28,476 GCI", change: "+30.9%" },
    { icon: <IconCustomers />, label: "Ready To Send", value: "+3 FSBOs", change: "+25.6%" },
    { icon: <IconCheckouts />, label: "Reminder", value: "Open House", change: "1845 29th St, San Diego" },
];

// ── Single stat pill ───────────────────────────────────────────────────────
function StatPill({ card }: { card: StatCard }) {
    return (
        <div
            className="md:w-[300px] w-full rounded-lg px-3 py-3 flex flex-col gap-2 flex-shrink-0"
            style={{
                background: "rgba(255,255,255,0.07)",
                border: "0.5px solid rgba(228,230,235,0.13)",
                backdropFilter: "blur(47px)",
                WebkitBackdropFilter: "blur(47px)",
            }}
        >
            {/* Label row */}
            <div className="flex items-center gap-1.5">
                {card.icon}
                <span
                    className="text-[11px] leading-tight truncate"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {card.label}
                </span>
            </div>

            {/* Value */}
            <p
                className="text-lg font-semibold leading-none tracking-tight"
                style={{ color: "var(--text-primary)" }}
            >
                {card.value}
            </p>

            {/* Badge */}
            <div
                className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm w-fit"
                style={{
                    background: "var(--green-bg)",
                    border: "1px solid var(--green)",
                }}
            >

                <span className="text-[11px] font-medium" style={{ color: "var(--green)" }}>
                    {card.change}
                </span>
            </div>
        </div>
    );
}

// ── Marquee column ─────────────────────────────────────────────────────────
// Duplicates items 4× for a seamless infinite loop at any speed.
function MarqueeColumn({
    cards,
    direction,
    duration,
}: {
    cards: StatCard[];
    direction: "up" | "down";
    duration: number;
}) {
    // Travel = height of one full set = cards.length × (cardHeight + gap)
    // card: py-3 (24px) + content ~78px ≈ 106px, gap-3 = 12px → 118px per card
    const CARD_H = 118; // px — must match StatPill height
    const GAP = 12;  // gap-3
    const setH = cards.length * (CARD_H + GAP);

    const repeated = [...cards, ...cards, ...cards, ...cards];

    const from = direction === "up" ? 0 : -setH;
    const to = direction === "up" ? -setH : 0;

    return (
        <div className="flex flex-col gap-3 overflow-hidden h-[200px]">
            <motion.div
                className="flex flex-col gap-3"
                animate={{ y: [from, to] }}
                transition={{
                    duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                {repeated.map((card, i) => (
                    <StatPill key={i} card={card} />
                ))}
            </motion.div>
        </div>
    );
}

// ── Main export ────────────────────────────────────────────────────────────
export function StatsMarquee() {
    return (
        <div
            className="stat-card flex flex-col overflow-hidden"
            // Match the right card's min-height so the grid rows align
            style={{ minHeight: 340 }}
        >
            {/* Scrolling columns — fade top & bottom */}
            <div
                className="flex gap-3 flex-1 overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
            >
                <MarqueeColumn cards={columnA} direction="up" duration={13.68} />
                <MarqueeColumn cards={columnB} direction="down" duration={13.68} />
            </div>

            {/* Caption */}
            <div className="mt-6 pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <h3
                    className="font-serif text-xl font-light mb-2"
                    style={{ color: "var(--text-primary)" }}
                >
                    We deliver results. Only results.
                </h3>
                <p className="text-sm font-extralight" style={{ color: "var(--text-muted)" }}>
                    You don&apos;t have to login to another dashboard or learn AI.
                </p>
            </div>
        </div>
    );
}