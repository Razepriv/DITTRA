'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export function GlassCard({ children, className, hover = true, gradient = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl p-8',
        'bg-white/90 dark:bg-white/[0.06] backdrop-blur-md',
        'border border-slate-200 dark:border-white/10',
        'shadow-md dark:shadow-black/30',
        hover && 'transition-all duration-300 hover:bg-white dark:hover:bg-white/[0.09] hover:border-slate-300 dark:hover:border-white/20 hover:shadow-lg',
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {gradient && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-60" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
