'use client'

import { ReactNode } from 'react'

interface ScrollSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function ScrollSection({ children, className = '', id }: ScrollSectionProps) {
  return (
    <div id={id} className={`section-container ${className}`}>
      {children}
    </div>
  )
}
