'use client'

import { ScrollSection } from '@/components/ui/ScrollSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { motion } from 'framer-motion'
import { Quote, ArrowRight } from 'lucide-react'
import { AnimatedButton } from '@/components/ui/AnimatedButton'

const caseStudies = [
  {
    client: 'Global Financial Services',
    industry: 'Finance',
    logo: 'GFS',
    challenge: 'Manual financial reporting taking 2 weeks',
    results: [
      { metric: '87%', label: 'Faster Reporting' },
      { metric: '$2.4M', label: 'Annual Savings' },
    ],
    quote: 'Dittra transformed our financial operations completely. The AI automation saved us weeks of manual work.',
    author: 'CFO, Fortune 500 Company',
  },
  {
    client: 'Tech Unicorn',
    industry: 'Technology',
    logo: 'TU',
    challenge: 'Low lead conversion rates',
    results: [
      { metric: '300%', label: 'More Qualified Leads' },
      { metric: '45%', label: 'Higher Close Rate' },
    ],
    quote: 'The AI-powered sales intelligence gave us insights we never had before. Game-changing.',
    author: 'VP of Sales',
  },
  {
    client: 'Healthcare Innovation',
    industry: 'Healthcare',
    logo: 'HI',
    challenge: 'Legacy systems hindering growth',
    results: [
      { metric: '70%', label: 'Faster Development' },
      { metric: '99.9%', label: 'Uptime Achieved' },
    ],
    quote: 'Their end-to-end approach modernized our entire technology stack in record time.',
    author: 'CTO',
  },
]

export function ClientSuccessStories() {
  return (
    <ScrollSection id="success-stories" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-heading mb-4 text-gray-900">
            <span className="gradient-text">Proven Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real transformations
          </p>
        </motion.div>

        {/* Horizontal Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 pb-8"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {[...caseStudies, ...caseStudies].map((study, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[400px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="h-full">
                  {/* Client Logo & Industry */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyber flex items-center justify-center text-2xl font-bold text-gray-900">
                      {study.logo}
                    </div>
                    <span className="text-sm text-primary border border-primary/30 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>

                  {/* Challenge */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {study.challenge}
                  </h3>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center p-3 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="text-2xl font-bold gradient-text mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" />
                    <p className="text-gray-700 italic mb-3 pl-6">
                      {study.quote}
                    </p>
                    <p className="text-sm text-gray-500">— {study.author}</p>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <AnimatedButton
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      href="/case-studies"
                    >
                      Read Full Story <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </AnimatedButton>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <AnimatedButton variant="outline" size="lg" href="/case-studies">
            View All Case Studies
          </AnimatedButton>
        </div>
      </div>
    </ScrollSection>
  )
}
