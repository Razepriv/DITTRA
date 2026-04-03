'use client'

import { ScrollSection } from '@/components/ui/ScrollSection'
import { StatCounter } from '@/components/ui/StatCounter'
import { motion } from 'framer-motion'
import { Activity, TrendingUp, Award, Users } from 'lucide-react'

const stats = [
  {
    value: 120,
    suffix: 'X',
    label: 'ROI Across Implementations',
    description: 'Measured impact across AI agent deployments',
    icon: Activity,
  },
  {
    value: 10,
    suffix: 'X',
    label: 'Cost Reductions',
    description: 'Through autonomous workflow automation',
    icon: TrendingUp,
  },
  {
    value: 40,
    suffix: '%',
    label: 'Productivity Increase',
    description: 'Improvement in day-to-day task efficiency',
    icon: Award,
  },
  {
    value: 50,
    suffix: '%',
    label: 'Factory Improvement',
    description: 'Throughput and production optimization gains',
    icon: Users,
  },
]

export function StatsSection() {
  return (
    <ScrollSection id="stats" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0A0F1C] dark:via-[#0D1526] dark:to-[#0A0F1C]" />
      <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-20" />

      {/* Ambient glows */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-400/8 dark:bg-cyan-500/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-400/8 dark:bg-blue-500/10 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.4, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 gradient-text tracking-tight">
            Proven Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light">
            Numbers that speak to our commitment and capability
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="cyber-card p-5 md:p-8 lg:p-10 text-center h-full group relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/15 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                    <Icon className="w-12 h-12 text-cyan-500 dark:text-cyan-400 relative z-10" strokeWidth={1.5} />
                  </div>
                </div>

                <StatCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-3 md:mb-4 tracking-tight"
                />

                <h3 className="text-base lg:text-lg font-semibold text-slate-800 dark:text-white mb-3 uppercase tracking-wider">
                  {stat.label}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </ScrollSection>
  )
}
