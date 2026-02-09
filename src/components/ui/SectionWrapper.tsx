'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
import { fadeInUp } from '@/lib/animation-variants'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 lg:py-32 ${className}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  )
}
