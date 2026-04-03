'use client'

import { ScrollSection } from '@/components/ui/ScrollSection'
import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Amazon Web Services', logo: '/logos/aws.svg', width: 80, height: 32 },
  { name: 'Microsoft', logo: '/logos/microsoft.svg', width: 140, height: 30 },
  { name: 'Google Cloud', logo: '/logos/google.svg', width: 110, height: 32 },
  { name: 'Salesforce', logo: '/logos/salesforce.svg', width: 140, height: 32 },
  { name: 'Oracle', logo: '/logos/oracle.svg', width: 100, height: 32 },
  { name: 'Worksoft', logo: '/logos/worksoft.svg', width: 110, height: 32 },
  { name: 'RiverFlow', logo: '/logos/riverflow.svg', width: 120, height: 32 },
  { name: 'Fernsoft', logo: '/logos/fernsoft.svg', width: 110, height: 32 },
]

export function TechnologyPartners() {
  return (
    <ScrollSection id="partners" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0B1324] dark:via-[#0D1526] dark:to-[#0B1324]" />
      <div className="absolute inset-0 bg-grid opacity-15 dark:opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-3">
            Technology Partners
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text tracking-tight">
            World-Class Ecosystem
          </h2>
          <p className="mt-3 md:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Partnering with industry leaders to deliver exceptional solutions
          </p>
        </div>

        {/* Infinite marquee */}
        <div className="relative overflow-hidden py-6">
          {/* Edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 lg:w-24 bg-gradient-to-r from-slate-50 dark:from-[#0D1526] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 lg:w-24 bg-gradient-to-l from-slate-50 dark:from-[#0D1526] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-10 md:gap-16 lg:gap-20 items-center"
            style={{ width: 'max-content' }}
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 flex items-center justify-center group"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 dark:brightness-[0.85] dark:group-hover:brightness-110"
                  unoptimized
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  )
}
