// components/blog/SoftwareStackTable.tsx
'use client'
import { motion } from 'framer-motion'
import { Database, Zap, FileText, GitMerge, BarChart2, MessageSquare, Star } from 'lucide-react'

interface StackCategory {
  icon: React.ReactNode
  category: string
  bestTool: string
  bestPrice: string
  altTool: string
  altPrice: string
  highlight?: boolean
}

const categories: StackCategory[] = [
  {
    icon: <Database size={18} />,
    category: 'CRM',
    bestTool: 'Glyd AI',
    bestPrice: '$799/mo',
    altTool: 'Wise Agent',
    altPrice: '$49/mo',
    highlight: true,
  },
  {
    icon: <Zap size={18} />,
    category: 'AI Follow-Up',
    bestTool: 'Glyd AI',
    bestPrice: '$799/mo',
    altTool: '—',
    altPrice: '—',
    highlight: true,
  },
  {
    icon: <FileText size={18} />,
    category: 'Listing Content',
    bestTool: 'Saleswise',
    bestPrice: '~$39/mo',
    altTool: 'ChatGPT',
    altPrice: 'Free',
  },
  {
    icon: <GitMerge size={18} />,
    category: 'Transaction Mgmt',
    bestTool: 'Dotloop',
    bestPrice: '$31/mo',
    altTool: 'DocuSign',
    altPrice: 'Free tier',
  },
  {
    icon: <BarChart2 size={18} />,
    category: 'CMA & Market Analysis',
    bestTool: 'CloudCMA',
    bestPrice: '$45/mo',
    altTool: 'RPR',
    altPrice: 'Free (NAR)',
  },
  {
    icon: <MessageSquare size={18} />,
    category: 'Communication & Scheduling',
    bestTool: 'Calendly',
    bestPrice: 'Free / Pro',
    altTool: '—',
    altPrice: '—',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const rowVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4, ease: "easeOut" as const } 
  },
}

export default function SoftwareStackTable() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="my-10 overflow-x-auto rounded-2xl"
      style={{ border: '1px solid var(--border-subtle)' }}
    >
      {/* Header */}
      <div
        className="px-6 py-4"
        style={{ background: 'var(--surface-elevated)', borderBottom: '1px solid var(--border-subtle)' }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
          The 7 Categories at a Glance
        </p>
      </div>

      {/* Table */}
      <table className="w-full text-sm" style={{ background: 'var(--surface)' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            {['Category', 'Best Tool', 'Price', 'Alt. Tool', 'Alt. Price'].map((h) => (
              <th
                key={h}
                className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wide"
                style={{ color: 'var(--text-muted)' }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.map((row) => (
            <motion.tr
              key={row.category}
              variants={rowVariants}
              style={{
                borderBottom: '1px solid var(--border-subtle)',
                background: row.highlight ? 'rgba(219,171,102,0.04)' : 'transparent',
              }}
            >
              {/* Category */}
              <td className="px-5 py-4">
                <div className="flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <span style={{ color: row.highlight ? 'var(--gold)' : 'var(--text-muted)' }}>
                    {row.icon}
                  </span>
                  <span className="font-medium">{row.category}</span>
                </div>
              </td>

              {/* Best Tool */}
              <td className="px-5 py-4">
                <span
                  className="font-semibold"
                  style={{ color: row.highlight ? 'var(--gold-light)' : 'var(--text-primary)' }}
                >
                  {row.highlight && (
                    <Star
                      size={12}
                      className="inline mr-1 mb-0.5"
                      fill="currentColor"
                      style={{ color: 'var(--gold)' }}
                    />
                  )}
                  {row.bestTool}
                </span>
              </td>

              {/* Price */}
              <td className="px-5 py-4">
                <span className="badge-green">{row.bestPrice}</span>
              </td>

              {/* Alt Tool */}
              <td className="px-5 py-4" style={{ color: 'var(--text-secondary)' }}>
                {row.altTool}
              </td>

              {/* Alt Price */}
              <td className="px-5 py-4" style={{ color: 'var(--text-muted)' }}>
                {row.altPrice}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}