'use client'

import { ScrollSection } from '@/components/ui/ScrollSection'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Amazon Web Services', shortName: 'AWS' },
  { name: 'Microsoft', shortName: 'Microsoft' },
  { name: 'Worksoft', shortName: 'Worksoft' },
  { name: 'RiverFlow', shortName: 'RiverFlow' },
  { name: 'Fernsoft', shortName: 'Fernsoft' },
  { name: 'Google Cloud', shortName: 'Google' },
  { name: 'Salesforce', shortName: 'Salesforce' },
  { name: 'Oracle', shortName: 'Oracle' },
]

export function TechnologyPartners() {
  return (
    <ScrollSection id="partners" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text tracking-tight">
            World-Class Ecosystem
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Partnering with industry leaders to deliver exceptional solutions
          </p>
        </motion.div>

        {/* Infinite Scrolling Logo Grid with Glow */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />
          
          <motion.div
            className="flex gap-16 items-center"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center group relative"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                
                <div className="text-3xl font-bold text-gray-500 group-hover:text-primary-400 transition-all duration-300 relative z-10">
                  {partner.shortName}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  )
}
