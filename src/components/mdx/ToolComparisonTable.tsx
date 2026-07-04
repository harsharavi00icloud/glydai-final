// components/blog/ToolComparisonTable.tsx
'use client'

import { motion } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'

type Status = 'yes' | 'no' | 'partial'

interface Tool {
    name: string
    price: string
    highlight: boolean
    scores: Record<string, Status>
}

interface Criterion {
    key: string
    label: string
}

const criteria: Criterion[] = [
    { key: 'managed', label: 'Fully Managed Service' },
    { key: 'speed', label: 'Sub-60s Lead Response' },
    { key: 'qualification', label: 'Expert Qualification (BART)' },
    { key: 'crm', label: 'CRM Integration' },
    { key: 'multiChannel', label: 'Multi-Channel (Call, Text, Social)' },
    { key: 'fsbo', label: 'FSBO Outreach Included' },
    { key: 'customization', label: 'Agent Customization' },
    { key: 'hotTransfer', label: 'Instant Hot Lead Transfer' },
]

const tools: Tool[] = [
    {
        name: 'Glyd AI',
        price: '$799/mo',
        highlight: true,
        scores: {
            managed: 'yes',
            speed: 'yes',
            qualification: 'yes',
            crm: 'yes',
            multiChannel: 'yes',
            fsbo: 'yes',
            customization: 'yes',
            hotTransfer: 'yes',
        },
    },
    {
        name: 'Structurely',
        price: '$179–$499+/mo',
        highlight: false,
        scores: {
            managed: 'no',
            speed: 'yes',
            qualification: 'partial',
            crm: 'yes',
            multiChannel: 'partial',
            fsbo: 'no',
            customization: 'no',
            hotTransfer: 'partial',
        },
    },
    {
        name: 'Saleswise',
        price: 'Varies',
        highlight: false,
        scores: {
            managed: 'no',
            speed: 'no',
            qualification: 'no',
            crm: 'partial',
            multiChannel: 'no',
            fsbo: 'no',
            customization: 'yes',
            hotTransfer: 'no',
        },
    },
    {
        name: 'CloudCMA',
        price: 'Varies',
        highlight: false,
        scores: {
            managed: 'no',
            speed: 'no',
            qualification: 'no',
            crm: 'partial',
            multiChannel: 'no',
            fsbo: 'no',
            customization: 'partial',
            hotTransfer: 'no',
        },
    },
]

function StatusIcon({ status }: { status: Status }) {
    if (status === 'yes') {
        return (
            <span style={{ color: 'var(--green)', display: 'flex', justifyContent: 'center' }}>
                <Check size={16} strokeWidth={2.5} />
            </span>
        )
    }
    if (status === 'no') {
        return (
            <span style={{ color: '#ef4444', opacity: 0.7, display: 'flex', justifyContent: 'center' }}>
                <X size={16} strokeWidth={2.5} />
            </span>
        )
    }
    return (
        <span style={{ color: 'var(--text-muted)', display: 'flex', justifyContent: 'center' }}>
            <Minus size={16} strokeWidth={2.5} />
        </span>
    )
}

export default function ToolComparisonTable() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ margin: '2rem 0', overflowX: 'auto' }}
        >
            <div
                style={{
                    minWidth: 560,
                    background: 'var(--surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 20,
                    overflow: 'hidden',
                }}
            >
                {/* Header row */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.6fr repeat(4, 1fr)',
                        borderBottom: '1px solid var(--border-subtle)',
                        background: 'var(--surface-elevated)',
                    }}
                >
                    <div style={{ padding: '14px 20px' }}>
                        <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                            Feature
                        </p>
                    </div>
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            style={{
                                padding: '14px 8px',
                                textAlign: 'center',
                                borderLeft: '1px solid var(--border-subtle)',
                                background: tool.highlight ? 'rgba(219,171,102,0.06)' : 'transparent',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: tool.highlight ? 'var(--gold)' : 'var(--text-primary)',
                                    lineHeight: 1.2,
                                }}
                            >
                                {tool.name}
                            </p>
                            <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>{tool.price}</p>
                            {tool.highlight && (
                                <span
                                    style={{
                                        display: 'inline-block',
                                        fontSize: 10,
                                        fontWeight: 600,
                                        color: '#000',
                                        background: 'var(--gold)',
                                        padding: '1px 8px',
                                        borderRadius: 4,
                                        marginTop: 5,
                                    }}
                                >
                                    Recommended
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Data rows */}
                {criteria.map((criterion, rowIdx) => (
                    <div
                        key={criterion.key}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1.6fr repeat(4, 1fr)',
                            borderBottom: rowIdx < criteria.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                            background: rowIdx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                        }}
                    >
                        <div style={{ padding: '13px 20px', display: 'flex', alignItems: 'center' }}>
                            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.3 }}>{criterion.label}</p>
                        </div>
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                style={{
                                    padding: '13px 8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderLeft: '1px solid var(--border-subtle)',
                                    background: tool.highlight ? 'rgba(219,171,102,0.04)' : 'transparent',
                                }}
                            >
                                <StatusIcon status={tool.scores[criterion.key]} />
                            </div>
                        ))}
                    </div>
                ))}

                {/* Legend */}
                <div
                    style={{
                        padding: '12px 20px',
                        borderTop: '1px solid var(--border-subtle)',
                        display: 'flex',
                        gap: 20,
                        flexWrap: 'wrap',
                        background: 'var(--surface-elevated)',
                    }}
                >
                    {[
                        { icon: <Check size={12} strokeWidth={2.5} />, color: 'var(--green)', label: 'Yes' },
                        { icon: <X size={12} strokeWidth={2.5} />, color: '#ef4444', label: 'No' },
                        { icon: <Minus size={12} strokeWidth={2.5} />, color: 'var(--text-muted)', label: 'Partial' },
                    ].map(({ icon, color, label }) => (
                        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <span style={{ color, display: 'flex' }}>{icon}</span>
                            <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{label}</span>
                        </div>
                    ))}
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 'auto' }}>
                        Most AI tools are software you operate. Glyd AI is a service that operates itself.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}