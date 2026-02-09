'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  benefits: string[]
  ctaText: string
  ctaLink: string
  visual?: ReactNode
  layout?: 'left' | 'right' | 'center'
}

export function ServiceCard({
  icon,
  title,
  description,
  benefits,
  ctaText,
  ctaLink,
  visual,
  layout = 'left',
}: ServiceCardProps) {
  const layoutClasses = {
    left: 'lg:flex-row',
    right: 'lg:flex-row-reverse',
    center: 'lg:flex-col',
  }

  return (
    <motion.div
      className={`flex flex-col ${layoutClasses[layout]} gap-12 lg:gap-16 items-center`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Visual */}
      {visual && (
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {visual}
        </motion.div>
      )}

      {/* Content */}
      <div className="flex-1 w-full">
        <div className="max-w-xl">
          {/* Icon with glow effect */}
          <motion.div
            className="mb-8 relative inline-block"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full" />
            <div className="relative z-10 p-4 rounded-2xl bg-gray-900/50 backdrop-blur-xl border border-primary-500/30">
              {icon}
            </div>
          </motion.div>

          {/* Title with gradient */}
          <h3 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text tracking-tight leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed font-light">
            {description}
          </p>

          {/* Benefits List - Futuristic style */}
          <motion.ul
            className="space-y-4 mb-10"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 group"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="relative mt-1">
                  <Sparkles className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors" />
                  <div className="absolute inset-0 bg-primary-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-base text-gray-300 group-hover:text-white transition-colors">
                  {benefit}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Link - Futuristic button */}
          <a
            href={ctaLink}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-cyber-500 rounded-xl hover:from-primary-400 hover:to-cyber-400 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">{ctaText}</span>
            <ArrowRight className="inline-block w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" strokeWidth={2} />
            
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
