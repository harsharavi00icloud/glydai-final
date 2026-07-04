// components/blog/RealEstateStatsGrid.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp, DollarSign } from 'lucide-react'

interface Stat {
    icon: React.ReactNode
    prefix: string
    value: number
    suffix: string
    decimals: number
    label: string
    sublabel: string
    trend: 'up' | 'down' | 'neutral'
    trendLabel: string
}

function useCountUp(target: number, decimals: number, duration: number, start: boolean) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!start) return
        let startTime: number | null = null
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(parseFloat((eased * target).toFixed(decimals)))
            if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }, [start, target, duration, decimals])

    return count
}

interface StatCardProps {
    stat: Stat
    index: number
}

function StatCard({ stat, index }: StatCardProps) {
    const [started, setStarted] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const count = useCountUp(stat.value, stat.decimals, 1800, started)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true) },
            { threshold: 0.3 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
            className="stat-card flex flex-col gap-3"
            style={{ background: 'var(--surface)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '28px 24px' }}
        >
            <div
                style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: stat.trend === 'down' ? 'rgba(239,68,68,0.12)' : 'rgba(219,171,102,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stat.trend === 'down' ? '#ef4444' : 'var(--gold)',
                }}
            >
                {stat.icon}
            </div>

            <div>
                <p style={{ fontSize: 36, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                    {stat.prefix}{stat.decimals > 0 ? count.toFixed(stat.decimals) : Math.round(count)}{stat.suffix}
                </p>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 6, fontWeight: 500 }}>{stat.label}</p>
            </div>

            <div
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    fontSize: 12,
                    fontWeight: 600,
                    color: stat.trend === 'down' ? '#ef4444' : stat.trend === 'up' ? 'var(--green)' : 'var(--text-muted)',
                    background: stat.trend === 'down' ? 'rgba(239,68,68,0.08)' : stat.trend === 'up' ? 'var(--green-bg)' : 'rgba(255,255,255,0.05)',
                    padding: '3px 10px',
                    borderRadius: 6,
                    width: 'fit-content',
                }}
            >
                {stat.trend === 'down' && <TrendingDown size={12} />}
                {stat.trend === 'up' && <TrendingUp size={12} />}
                {stat.trendLabel}
            </div>

            <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{stat.sublabel}</p>
        </motion.div>
    )
}

const stats: Stat[] = [
    {
        icon: <TrendingDown size={20} />,
        prefix: '',
        value: 3,
        suffix: '%',
        decimals: 0,
        label: 'Cold calling response rate in 2026',
        sublabel: 'Down from 12% in 2010 — NAR data',
        trend: 'down',
        trendLabel: '−9% since 2010',
    },
    {
        icon: <DollarSign size={20} />,
        prefix: '$',
        value: 181,
        suffix: '',
        decimals: 0,
        label: 'Average cost per portal lead today',
        sublabel: 'Up 1,107% since 2015 — before you even qualify a lead',
        trend: 'down',
        trendLabel: '+1,107% since 2015',
    },
    {
        icon: <TrendingUp size={20} />,
        prefix: '$',
        value: 1.3,
        suffix: 'B',
        decimals: 1,
        label: 'Projected real estate AI market by 2034',
        sublabel: 'Up from $437M in 2024 — 11% CAGR',
        trend: 'up',
        trendLabel: '11% CAGR',
    },
]

export default function RealEstateStatsGrid() {
    return (
        <div style={{ margin: '2rem 0' }}>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 16,
                }}
            >
                {stats.map((stat, i) => (
                    <StatCard key={stat.label} stat={stat} index={i} />
                ))}
            </div>
        </div>
    )
}