// components/blog/GlydFeatureCards.tsx
'use client'
import { motion } from 'framer-motion'
import { Clock, ShieldCheck, Home, Share2, HeadphonesIcon } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  stat?: string
  statLabel?: string
}

const features: Feature[] = [
  {
    icon: <Clock size={20} />,
    title: 'Speed To Lead',
    description: 'Every inbound lead gets a response within 60 seconds, 24/7, across text, calls, email and social.',
    stat: '78%',
    statLabel: 'of deals go to the first responder (MIT study)',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'BART Qualification',
    description: 'Leads are qualified on Budget, Authority, Readiness and Timeline. Only hot leads are transferred to your phone.',
    stat: '0',
    statLabel: 'cold leads waste your time',
  },
  {
    icon: <Home size={20} />,
    title: 'FSBO Agent',
    description: 'Personalized outreach goes out to FSBOs in your area, including an auto-generated, highly researched CMA PDF.',
  },
  {
    icon: <Share2 size={20} />,
    title: 'Social Media Agent',
    description: 'Content specific to your farm area is distributed across all channels consistently. You become the recognized name in your zip code.',
  },
  {
    icon: <HeadphonesIcon size={20} />,
    title: 'Fully Managed',
    description: "You don't log in. You don't configure campaigns. Glyd AI's team builds it, runs it and sends you a monthly report.",
    stat: '10+',
    statLabel: 'hours saved per week',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.45, ease: "easeOut" as const } 
  },
}

export default function GlydFeatureCards() {
  return (
    <div className="my-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-semibold uppercase tracking-widest mb-6"
        style={{ color: 'var(--gold)' }}
      >
        What's Inside Glyd AI
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            className="card-dark p-5 flex flex-col gap-3"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{
                background: 'rgba(219,171,102,0.1)',
                color: 'var(--gold)',
              }}
            >
              {feature.icon}
            </div>

            <h4 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
              {feature.title}
            </h4>

            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {feature.description}
            </p>

            {feature.stat && (
              <div
                className="mt-auto pt-3"
                style={{ borderTop: '1px solid var(--border-subtle)' }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{ color: 'var(--gold-light)' }}
                >
                  {feature.stat}
                </span>
                <span className="text-xs ml-2" style={{ color: 'var(--text-muted)' }}>
                  {feature.statLabel}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-5 px-5 py-4 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        style={{
          background: 'var(--surface-elevated)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
            Starter Plan Pricing
          </p>
          <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
            One-time setup + monthly subscription
          </p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold" style={{ color: 'var(--gold)' }}>
            $1,499
          </span>
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
            setup
          </span>
          <span style={{ color: 'var(--border-subtle)' }}>+</span>
          <span className="text-xl font-bold" style={{ color: 'var(--gold)' }}>
            $799
          </span>
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
            /mo
          </span>
        </div>
      </motion.div>
    </div>
  )
}