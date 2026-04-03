'use client'

import { ScrollSection } from '@/components/ui/ScrollSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { motion } from 'framer-motion'
import { Quote, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
    <ScrollSection
      id="success-stories"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-[#0D1526] dark:via-[#0B1324] dark:to-[#0A0F1C]" />
      <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-slate-900 dark:text-white">
            <span className="gradient-text">Proven Impact</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real results from real transformations
          </p>
        </div>

        {/* Horizontal scrolling carousel — fixed to -50% so duplicated set loops cleanly */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 pb-8"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...caseStudies, ...caseStudies].map((study, index) => (
              <div key={index} className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px]">
                <GlassCard className="h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xl font-bold text-white">
                      {study.logo}
                    </div>
                    <span className="text-sm text-cyan-600 dark:text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>

                  {/* Challenge */}
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">
                    {study.challenge}
                  </h3>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {study.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="text-center p-3 rounded-lg bg-cyan-500/8 dark:bg-cyan-500/10 border border-cyan-400/20"
                      >
                        <div className="text-2xl font-bold gradient-text mb-1">{result.metric}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-7 h-7 text-cyan-400/30" />
                    <p className="text-slate-600 dark:text-slate-300 italic mb-3 pl-5 text-sm leading-relaxed">
                      {study.quote}
                    </p>
                    <p className="text-sm text-slate-400 dark:text-slate-500">— {study.author}</p>
                  </div>

                  {/* CTA */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/10">
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </GlassCard>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact#book-consultation"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-slate-700 dark:text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </ScrollSection>
  )
}
