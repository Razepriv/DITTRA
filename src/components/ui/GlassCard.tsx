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
        'bg-white/90 backdrop-blur-md',
        'border border-gray-200',
        'shadow-xl',
        hover && 'transition-all duration-300 hover:bg-white hover:border-gray-300 hover:shadow-2xl',
        className
      )}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {gradient && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyber/5 opacity-50" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
