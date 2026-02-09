'use client'

import { ScrollSection } from '@/components/ui/ScrollSection'
import { StatCounter } from '@/components/ui/StatCounter'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animation-variants'
import { Activity, TrendingUp, Award, Users } from 'lucide-react'

const stats = [
  {
    value: 10,
    suffix: '+',
    label: 'Years Leading AI Innovation',
    description: 'Pioneering enterprise AI solutions since 2016',
    icon: Activity,
  },
  {
    value: 150,
    suffix: '+',
    label: 'Enterprise Transformations',
    description: 'Successfully delivered projects across industries',
    icon: TrendingUp,
  },
  {
    value: 25,
    suffix: '+',
    label: 'Industry Awards',
    description: 'Recognized for excellence and innovation',
    icon: Award,
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Consistently exceeding expectations',
    icon: Users,
  },
]

export function StatsSection() {
  return (
    <ScrollSection id="stats" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20" />
      
      {/* Animated glow effects */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyber/10 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text tracking-tight">
            Proven Excellence
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Numbers that speak to our commitment and capability
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div key={index} variants={staggerItem}>
                <motion.div 
                  className="cyber-card p-8 lg:p-10 text-center h-full group relative overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon with glow */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                      <Icon className="w-12 h-12 text-primary-400 relative z-10" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Stat value */}
                  <StatCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                    className="text-6xl lg:text-7xl font-bold gradient-text mb-4 tracking-tight"
                  />
                  
                  {/* Label */}
                  <h3 className="text-base lg:text-lg font-semibold text-white mb-3 uppercase tracking-wider">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">{stat.description}</p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-cyber/10 rounded-2xl blur-xl" />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </ScrollSection>
  )
}
