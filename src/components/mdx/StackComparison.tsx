// components/blog/StackComparison.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Users, CheckCircle2 } from 'lucide-react'

interface StackTool {
  name: string
  role: string
  price: string
  highlight?: boolean
}
type StackKey = 'solo' | 'team'
const soloStack: StackTool[] = [
  {
    name: 'Glyd AI',
    role: 'AI CRM + Follow-Up',
    price: '$799/mo',
    highlight: true,
  },
  {
    name: 'Wise Agent',
    role: 'Budget CRM',
    price: '$49/mo',
  },
  {
    name: 'ChatGPT',
    role: 'Listing Descriptions',
    price: 'Free',
  },
  {
    name: 'DocuSign',
    role: 'E-signatures',
    price: 'Free tier',
  },
  {
    name: 'RPR',
    role: 'CMA Reports',
    price: 'Free (NAR)',
  },
  {
    name: 'Calendly',
    role: 'Scheduling',
    price: 'Free',
  },
]

const teamStack: StackTool[] = [
  {
    name: 'Glyd AI Core',
    role: 'AI CRM + Zipcode Exclusivity',
    price: 'Custom',
    highlight: true,
  },
  {
    name: 'Follow Up Boss',
    role: 'Team CRM + Lead Routing',
    price: 'From $69/mo',
  },
  {
    name: 'Saleswise',
    role: 'Listing Content',
    price: '~$39/mo',
  },
  {
    name: 'Dotloop',
    role: 'Transaction Management',
    price: '$31/mo',
  },
  {
    name: 'CloudCMA',
    role: 'Market Analysis',
    price: '$45/mo',
  },
  {
    name: 'Calendly',
    role: 'Scheduling',
    price: 'Free / Pro',
  },
]

const panelVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.35, ease: "easeOut" as const } 
  },
  exit: { 
    opacity: 0, 
    y: -12, 
    transition: { duration: 0.2 } 
  },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.3 } 
  },
}

export default function StackComparison() {
  const [active, setActive] = useState<StackKey>('solo')
  const stack = active === 'solo' ? soloStack : teamStack

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="my-10 rounded-2xl overflow-hidden"
      style={{ border: '1px solid var(--border-subtle)' }}
    >
      {/* Toggle header */}
      <div
        className="flex items-center gap-2 p-4"
        style={{ background: 'var(--surface-elevated)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <button
          onClick={() => setActive('solo')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
          aria-pressed={active === 'solo'}
          style={{
            background: active === 'solo' ? 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))' : 'transparent',
            color: active === 'solo' ? '#000' : 'var(--text-muted)',
            border: active === 'solo' ? 'none' : '1px solid var(--border-subtle)',
          }}
        >
          <User size={15} />
          Solo Agent
        </button>
        <button
          onClick={() => setActive('team')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
          aria-pressed={active === 'team'}
          style={{
            background: active === 'team' ? 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))' : 'transparent',
            color: active === 'team' ? '#000' : 'var(--text-muted)',
            border: active === 'team' ? 'none' : '1px solid var(--border-subtle)',
          }}
        >
          <Users size={15} />
          Team / Brokerage
        </button>
      </div>

      {/* Stack list */}
      <div style={{ background: 'var(--surface)' }} className="p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3"
            >
              {stack.map((tool) => (
                <motion.li
                  key={tool.name}
                  variants={itemVariants}
                  className="flex items-center justify-between px-4 py-3 rounded-xl"
                  style={{
                    background: tool.highlight ? 'rgba(219,171,102,0.07)' : 'var(--surface-elevated)',
                    border: `1px solid ${tool.highlight ? 'rgba(219,171,102,0.25)' : 'var(--border-subtle)'}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      style={{ color: tool.highlight ? 'var(--gold)' : 'var(--green)', flexShrink: 0 }}
                    />
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: tool.highlight ? 'var(--gold-light)' : 'var(--text-primary)' }}
                      >
                        {tool.name}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {tool.role}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-lg"
                    style={{
                      background: tool.highlight ? 'rgba(219,171,102,0.15)' : 'var(--green-bg)',
                      color: tool.highlight ? 'var(--gold)' : 'var(--green)',
                    }}
                  >
                    {tool.price}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {active === 'team' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-xs px-4 py-3 rounded-xl"
                style={{
                  background: 'rgba(219,171,102,0.05)',
                  border: '1px solid rgba(219,171,102,0.15)',
                  color: 'var(--text-muted)',
                }}
              >
                ⚡ <strong style={{ color: 'var(--gold)' }}>Zipcode exclusivity:</strong> Once your zip
                is claimed through Glyd AI Core, no competitor in that zip can access the same system.
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}