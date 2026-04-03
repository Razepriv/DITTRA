'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

// Stable particle positions — defined outside component to avoid hydration mismatch
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  left: (i * 61.8 + 10) % 100,
  top: (i * 73.6 + 5) % 100,
  duration: 3 + (i % 5) * 0.4,
  delay: (i % 4) * 0.5,
}))

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0A0F1C] dark:via-[#0B1324] dark:to-[#0A0F1C]" />
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-30" />

        {/* Ambient glow */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/15 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.35, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Particles */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 dark:bg-cyan-400 rounded-full"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-24 sm:pt-28 pb-16">
        <div className="max-w-6xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 mb-8 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm md:text-base text-cyan-700 dark:text-cyan-300 font-medium tracking-wide uppercase">
              Automate. Transform. Scale.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-6 md:mb-8 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block text-slate-900 dark:text-white mb-2">
              AGENTIC AI
            </span>
            <span className="block text-slate-900 dark:text-white">
              FOR ENTERPRISE GROWTH
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-10 md:mb-14 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            We deliver{' '}
            <span className="text-cyan-600 dark:text-cyan-400 font-medium">AI-powered automation</span>
            {' '}and{' '}
            <span className="text-blue-600 dark:text-blue-400 font-medium">intelligent solutions</span>
            <br className="hidden md:block" />
{' '}that help enterprises scale faster and work smarter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href="/capabilities/consulting" className="apple-button-primary group">
              <span className="relative z-10">Explore Our Capabilities</span>
            </a>
            <a href="/contact#book-consultation" className="apple-button-secondary group">
              Schedule Consultation
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[
              { value: '120X', label: 'Implementation ROI', color: 'from-cyan-400 to-cyan-500' },
              { value: '10X', label: 'Cost Reductions', color: 'from-blue-400 to-blue-500' },
              { value: '40%', label: 'Productivity Lift', color: 'from-cyan-400 to-blue-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden group cursor-default"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-accent)',
                  backdropFilter: 'blur(24px)',
                }}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${stat.color}`} />
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/8 group-hover:to-blue-500/8 transition-all duration-300" />
                <div className="relative p-6 md:p-8 text-center">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-2 md:mb-3 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="w-8 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-3 opacity-60" />
                  <div className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm uppercase tracking-[0.12em]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a
          href="#stats"
          className="flex flex-col items-center text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors group"
          aria-label="Scroll down to view statistics"
        >
          <ChevronDown className="w-8 h-8" strokeWidth={2} />
          <div className="w-[2px] h-10 bg-gradient-to-b from-cyan-400 to-transparent mt-1" />
        </a>
      </motion.div>
    </section>
  )
}
