'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Zap } from 'lucide-react'

export default function ResponseTimeComparison() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-48 my-10 rounded-2xl bg-white/5 border border-white/10" />

  return (
    <div className="my-12 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.05] p-8 shadow-2xl backdrop-blur-sm group">
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10 w-full">
        <h3 className="mb-8 font-serif text-2xl font-medium tracking-tight text-white mb-2">
          The Speed of Conversion
        </h3>
        <p className="text-white/60 mb-8 text-sm uppercase tracking-widest">
          Industry Average vs AI Automation
        </p>
        
        {/* Average Agent Bar */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="flex items-center text-white/70">
              <Clock className="mr-2 h-4 w-4 text-white/40" />
              Average Agent Response
            </span>
            <span className="font-mono text-white/50">5 hrs 20 mins</span>
          </div>
          <div className="h-3 w-full rounded-full bg-black border border-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-white/20"
            />
          </div>
        </div>

        {/* AI Bar */}
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="flex items-center font-medium text-emerald-400">
              <Zap className="mr-2 h-4 w-4" />
              Glyd AI Response
            </span>
            <span className="font-mono font-bold text-emerald-400">&lt; 60 seconds</span>
          </div>
          <div className="h-3 w-full rounded-full bg-black border border-white/10 overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3%' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
              className="relative h-full bg-emerald-500 rounded-full"
            >
              <div className="absolute right-0 top-0 h-full w-4 bg-white/50 blur-[2px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
