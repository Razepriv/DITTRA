'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
  href?: string
}

export function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className,
  onClick,
  href,
}: AnimatedButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    })
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary to-primary-light text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40',
    secondary: 'bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200',
    ghost: 'text-primary hover:bg-primary/10',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClasses = cn(
    'relative font-medium rounded-full overflow-hidden transition-all duration-300',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin inline-block" />}
      {children}
    </>
  )

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        x: mousePosition.x * 0.1,
        y: mousePosition.y * 0.1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      <span className="relative z-10">{content}</span>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-cyber to-tech opacity-0"
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </MotionComponent>
  )
}
