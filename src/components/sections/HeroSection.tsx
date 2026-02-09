'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { useRef } from 'react'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-30" />
        
        {/* Radial Glow Effect */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Tagline with Glow */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 mb-8 rounded-full bg-primary-500/10 border border-primary-500/30 backdrop-blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm md:text-base text-primary-300 font-medium tracking-wide uppercase">
              Automate. Transform. Scale.
            </span>
          </motion.div>

          {/* Main Headline - Futuristic Neon Style */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white mb-4">
              AUTOMATE YOUR BUSINESS
            </span>
            <span className="block text-white mb-4">
              TO SCALE
            </span>
            <span className="block gradient-text text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">
              
            </span>
          </motion.h1>

          {/* Subheading - Glowing Text */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We deliver <span className="text-primary-400 font-medium">AI-powered automation</span> and <span className="text-cyber font-medium">intelligent solutions</span><br className="hidden md:block"/>
            that help enterprises scale faster and work smarter.
          </motion.p>

          {/* CTA Buttons - Futuristic Glow */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#services"
              className="apple-button-primary group"
            >
              <span className="relative z-10">Explore Our Capabilities</span>
            </a>
            <a
              href="/contact"
              className="apple-button-secondary group"
            >
              Schedule Consultation
            </a>
          </motion.div>

          {/* Stats - Futuristic Cards with Glow */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { value: '10+', label: 'Years of Excellence' },
              { value: '150+', label: 'Transformations' },
              { value: '25+', label: 'Industry Awards' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="cyber-card p-8 group hover:border-primary-400/60 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-6xl lg:text-7xl font-bold gradient-text mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-base uppercase tracking-wider">{stat.label}</div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-cyber/10 rounded-2xl blur-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <a
          href="#stats"
          className="flex flex-col items-center text-primary-400 hover:text-primary-300 transition-colors group"
          aria-label="Scroll down to view statistics"
        >
          <ChevronDown className="w-8 h-8 group-hover:animate-pulse" strokeWidth={2} />
          <div 
            className="w-[2px] h-12 bg-gradient-to-b from-primary-400 to-transparent mt-2"
          />
        </a>
      </motion.div>
    </motion.section>
  )
}
