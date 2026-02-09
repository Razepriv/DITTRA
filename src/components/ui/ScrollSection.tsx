'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ScrollSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function ScrollSection({ children, className = '', id }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ opacity, scale, y }}
      className={`scroll-section section-container ${className}`}
    >
      {children}
    </motion.div>
  )
}
