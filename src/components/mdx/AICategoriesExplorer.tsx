// components/blog/AICategoriesExplorer.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users, FileText, Home, BarChart2, Database, Phone } from 'lucide-react'

interface Category {
    id: string
    icon: React.ReactNode
    title: string
    tagline: string
    description: string
    revenueImpact: 'highest' | 'high' | 'medium'
    example: string
}

const categories: Category[] = [
    {
        id: 'lead-followup',
        icon: <Users size={22} />,
        title: 'Lead Qualification + Follow-up AI',
        tagline: 'Highest revenue impact',
        description:
            'AI qualifies inbound leads using expert-level methods and updates your CRM automatically. This is the single highest-leverage category — it directly creates revenue, not just saves time.',
        revenueImpact: 'highest',
        example: 'e.g. Structurely, Glyd AI',
    },
    {
        id: 'crm',
        icon: <Database size={22} />,
        title: 'CRM with AI',
        tagline: 'Highest revenue impact',
        description:
            'AI-powered features built into your CRM — property price suggestions, smart follow-up reminders, lead scoring. When paired with follow-up AI, this is where the biggest efficiency gains live.',
        revenueImpact: 'highest',
        example: 'e.g. Follow Up Boss AI, LionDesk',
    },
    {
        id: 'voice',
        icon: <Phone size={22} />,
        title: 'Voice Agents + Calling AI',
        tagline: 'High revenue impact',
        description:
            'Your own AI receptionist that qualifies leads and contacts cold leads autonomously. Can handle first-touch calls 24/7 and route hot leads directly to your phone.',
        revenueImpact: 'high',
        example: 'e.g. Structurely Voice, CINC AI',
    },
    {
        id: 'market-analysis',
        icon: <BarChart2 size={22} />,
        title: 'Market Analysis + CMA with AI',
        tagline: 'High revenue impact',
        description:
            'Mention your farm area and give property notes — AI returns a print-ready, hyper-personalized CMA PDF. Makes you look like the most prepared agent in any listing presentation.',
        revenueImpact: 'high',
        example: 'e.g. CloudCMA, Saleswise CMA',
    },
    {
        id: 'content',
        icon: <FileText size={22} />,
        title: 'Content + Listing Generation',
        tagline: 'Medium revenue impact',
        description:
            'Give property notes to the AI and it generates listing descriptions, social posts, email campaigns and more. Great execution tool — but needs a human strategist behind it.',
        revenueImpact: 'medium',
        example: 'e.g. Saleswise, Write.homes',
    },
    {
        id: 'staging',
        icon: <Home size={22} />,
        title: 'Virtual Staging',
        tagline: 'Medium revenue impact',
        description:
            'Upload property photos and AI adds furniture, décor and style. Eliminates $500/room traditional staging costs with photorealistic results in minutes.',
        revenueImpact: 'medium',
        example: 'e.g. REimagineHome, Virtual Staging AI',
    },
]

const impactConfig = {
    highest: {
        label: 'Highest Revenue Impact',
        color: 'var(--gold)',
        bg: 'rgba(219,171,102,0.12)',
        barWidth: '100%',
    },
    high: {
        label: 'High Revenue Impact',
        color: 'var(--green)',
        bg: 'rgba(34,197,94,0.1)',
        barWidth: '65%',
    },
    medium: {
        label: 'Medium Revenue Impact',
        color: 'var(--text-secondary)',
        bg: 'rgba(180,180,189,0.1)',
        barWidth: '35%',
    },
}

export default function AICategoriesExplorer() {
    const [activeId, setActiveId] = useState<string>('lead-followup')

    const active = categories.find((c) => c.id === activeId) ?? categories[0]
    const impact = impactConfig[active.revenueImpact]

    return (
        <div style={{ margin: '2rem 0' }}>
            <div
                style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 20,
                    overflow: 'hidden',
                }}
            >
                {/* Tab row */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        borderBottom: '1px solid var(--border-subtle)',
                    }}
                >
                    {categories.map((cat, i) => {
                        const isActive = cat.id === activeId
                        const cfg = impactConfig[cat.revenueImpact]
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveId(cat.id)}
                                aria-label={`View ${cat.title}`}
                                style={{
                                    padding: '16px 12px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 8,
                                    cursor: 'pointer',
                                    background: isActive ? 'var(--surface-elevated)' : 'transparent',
                                    border: 'none',
                                    borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--border-subtle)' : 'none',
                                    borderBottom: i < 3 ? '1px solid var(--border-subtle)' : 'none',
                                    transition: 'background 0.2s ease',
                                    color: isActive ? cfg.color : 'var(--text-muted)',
                                }}
                            >
                                <span style={{ color: isActive ? cfg.color : 'var(--text-muted)', transition: 'color 0.2s' }}>
                                    {cat.icon}
                                </span>
                                {isActive && (
                                    <motion.span
                                        layoutId="tab-indicator"
                                        style={{
                                            width: 24,
                                            height: 3,
                                            borderRadius: 2,
                                            background: cfg.color,
                                        }}
                                    />
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* Detail panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeId}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        style={{ padding: '28px 28px 24px' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                            <div>
                                <p style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                                    {active.title}
                                </p>
                                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{active.example}</p>
                            </div>
                            <span
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: impact.color,
                                    background: impact.bg,
                                    padding: '4px 12px',
                                    borderRadius: 8,
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {impact.label}
                            </span>
                        </div>

                        <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, margin: '16px 0' }}>
                            {active.description}
                        </p>

                        {/* Revenue bar */}
                        <div>
                            <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                Revenue Leverage
                            </p>
                            <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: impact.barWidth }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    style={{ height: '100%', background: impact.color, borderRadius: 4 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Legend */}
                <div
                    style={{
                        padding: '12px 28px 16px',
                        borderTop: '1px solid var(--border-subtle)',
                        display: 'flex',
                        gap: 20,
                        flexWrap: 'wrap',
                    }}
                >
                    {(['highest', 'high', 'medium'] as const).map((level) => (
                        <div key={level} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: impactConfig[level].color }} />
                            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{impactConfig[level].label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}