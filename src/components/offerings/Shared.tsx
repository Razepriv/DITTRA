'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CtaConfig {
  label: string
  href: string
}

interface PageHeroProps {
  pageTitle: string
  headline: string
  subtitle: string
  description?: string
  primaryCta: CtaConfig
  secondaryCta?: CtaConfig
}

interface SectionBlockProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  className?: string
  children: React.ReactNode
}

interface GlassCardProps {
  className?: string
  children: React.ReactNode
}

interface MetricsGridProps {
  metrics: Array<{ label: string; value: string; context: string }>
}

interface ProcessFlowProps {
  title: string
  steps: string[]
  accent?: 'blue' | 'cyan' | 'amber'
}

interface TimelineItem {
  title: string
  bullets: string[]
}

interface VerticalTimelineProps {
  items: TimelineItem[]
}

interface BottomCtaProps {
  headline: string
  description: string
  cta: CtaConfig
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const globalRoiMetrics = [
  { label: 'ROI', value: '120X', context: 'Across AI agent implementations' },
  { label: 'Cost Reductions', value: '10X', context: 'Through AI automation' },
  { label: 'Productivity Increase', value: '40%', context: 'Day-to-day task efficiency' },
  { label: 'Factory Improvement', value: '50%', context: 'Throughput and production optimization' },
]

export const integrationItems = [
  { category: 'AI/LLM', items: [
    { name: 'OpenAI', logo: '/logos/openai.svg', darkInvert: true },
    { name: 'Claude', logo: '/logos/anthropic.svg', darkInvert: true },
    { name: 'Gemini', logo: '/logos/gemini.svg', darkInvert: false },
    { name: 'Llama', logo: '/logos/meta.svg', darkInvert: false },
    { name: 'Stable Diffusion', logo: null, darkInvert: false },
    { name: 'Replicate', logo: '/logos/replicate.svg', darkInvert: true },
  ]},
  { category: 'Agent Frameworks', items: [
    { name: 'CrewAI', logo: '/logos/crewai.svg', darkInvert: false },
    { name: 'AutoGen AI', logo: null, darkInvert: false },
    { name: 'LangChain', logo: '/logos/langchain.svg', darkInvert: true },
    { name: 'Voiceflow', logo: '/logos/voiceflow.svg', darkInvert: false },
  ]},
  { category: 'Voice', items: [
    { name: 'ElevenLabs', logo: '/logos/elevenlabs.svg', darkInvert: true },
    { name: 'Deepgram', logo: '/logos/deepgram.svg', darkInvert: true },
    { name: 'Whisper', logo: null, darkInvert: false },
    { name: 'VAPI', logo: '/logos/vapi.svg', darkInvert: false },
  ]},
  { category: 'Automation', items: [
    { name: 'n8n', logo: '/logos/n8n.svg', darkInvert: false },
    { name: 'Make', logo: '/logos/make.svg', darkInvert: false },
    { name: 'Zapier', logo: '/logos/zapier.svg', darkInvert: false },
    { name: 'Custom Middleware', logo: null, darkInvert: false },
  ]},
  { category: 'Cloud', items: [
    { name: 'AWS', logo: '/logos/aws.svg', darkInvert: false },
    { name: 'Azure', logo: '/logos/microsoft.svg', darkInvert: false },
    { name: 'Google Cloud', logo: '/logos/google.svg', darkInvert: false },
  ]},
  { category: 'Enterprise', items: [
    { name: 'Salesforce', logo: '/logos/salesforce.svg', darkInvert: false },
    { name: 'Oracle', logo: '/logos/oracle.svg', darkInvert: false },
    { name: 'SAP', logo: '/logos/sap.svg', darkInvert: false },
    { name: 'Microsoft Dynamics', logo: '/logos/microsoft.svg', darkInvert: false },
  ]},
]

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-[#F0F4FF] dark:bg-[#0A0F1C] text-slate-900 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 dark:bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.15),transparent_38%),radial-gradient(circle_at_50%_90%,rgba(245,158,11,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="relative">{children}</div>
    </div>
  )
}

export function PageHero({
  pageTitle,
  headline,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-100">
              {pageTitle}
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-7xl">
              {headline}
            </h1>
            <p className="mt-4 md:mt-5 max-w-3xl text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-200 lg:text-2xl">{subtitle}</p>
            {description ? (
              <p className="mt-5 max-w-3xl text-base text-slate-500 dark:text-slate-300 md:text-lg">{description}</p>
            ) : null}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-[0_12px_35px_rgba(245,158,11,0.3)] transition hover:-translate-y-0.5"
              >
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-xl border border-blue-400/40 bg-blue-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-100 transition hover:border-blue-400/70 hover:bg-blue-400/20"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="relative rounded-3xl border border-slate-200 dark:border-white/15 bg-white/70 dark:bg-white/8 p-6 backdrop-blur-2xl shadow-sm dark:shadow-none">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/8 dark:from-blue-500/25 dark:to-cyan-400/10" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'ROI', value: '120X' },
                  { label: 'Productivity', value: '+40%' },
                  { label: 'Cost Reduction', value: '10X' },
                  { label: 'Call Wait Time', value: 'Zero' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 dark:border-white/20 bg-white/80 dark:bg-slate-950/45 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300">{item.label}</p>
                    <p className="mt-2 font-heading text-2xl font-bold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export function SectionBlock({ id, eyebrow, title, description, className, children }: SectionBlockProps) {
  return (
    <section id={id} className={cn('relative py-14 md:py-20', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-8 md:mb-10">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-200">{eyebrow}</p>
          ) : null}
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">{title}</h2>
          {description ? (
            <p className="mt-4 max-w-4xl text-base text-slate-600 dark:text-slate-300 md:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  )
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/[0.06] p-6 backdrop-blur-xl shadow-sm dark:shadow-none',
        'before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:p-px before:[background:linear-gradient(145deg,rgba(6,182,212,0.25),rgba(59,130,246,0.2),rgba(6,182,212,0.15))] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]',
        className
      )}
    >
      <div className="relative">{children}</div>
    </div>
  )
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <GlassCard key={metric.label} className="h-full">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-300">{metric.label}</p>
          <p className="mt-3 font-heading text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{metric.value}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.context}</p>
        </GlassCard>
      ))}
    </div>
  )
}

export function ProcessFlow({ title, steps, accent = 'blue' }: ProcessFlowProps) {
  const accentClass =
    accent === 'cyan'
      ? 'from-cyan-300 to-cyan-500 border-cyan-300/40'
      : accent === 'amber'
      ? 'from-amber-300 to-amber-500 border-amber-300/40'
      : 'from-blue-300 to-blue-500 border-blue-300/40'

  return (
    <GlassCard className="h-full">
      <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <ol className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <li key={step} className="grid grid-cols-[40px_1fr] gap-4">
            <div
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full border bg-gradient-to-br text-sm font-bold text-slate-950',
                accentClass
              )}
            >
              {index + 1}
            </div>
            <p className="pt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-200 md:text-base">{step}</p>
          </li>
        ))}
      </ol>
    </GlassCard>
  )
}

export function VerticalTimeline({ items }: VerticalTimelineProps) {
  return (
    <div className="relative pl-6 md:pl-10">
      <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent md:left-4" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <GlassCard key={item.title} className="relative ml-4 md:ml-6">
            <div className="absolute -left-8 top-8 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400 text-xs font-bold text-slate-950 md:-left-10">
              {index + 1}
            </div>
            <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-200 md:text-base">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

export function PullQuote({ quote, author }: { quote: string; author: string }) {
  return (
    <GlassCard className="border-cyan-400/25 bg-gradient-to-br from-blue-500/10 to-cyan-500/8 dark:from-blue-500/20 dark:to-cyan-500/10">
      <blockquote className="font-heading text-base sm:text-lg font-semibold leading-relaxed text-slate-800 dark:text-white md:text-xl lg:text-2xl">
        "{quote}"
      </blockquote>
      <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">{author}</p>
    </GlassCard>
  )
}

export function BottomCta({ headline, description, cta }: BottomCtaProps) {
  return (
    <section className="pb-24 pt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <GlassCard className="border-cyan-400/30 dark:border-cyan-300/35 bg-gradient-to-br from-blue-500/8 via-cyan-500/5 to-amber-400/8 dark:from-blue-600/20 dark:via-cyan-500/10 dark:to-amber-400/15 p-6 md:p-8 lg:p-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">{headline}</h2>
              <p className="mt-4 max-w-3xl text-base text-slate-600 dark:text-slate-200 md:text-lg">{description}</p>
            </div>
            <div>
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 transition hover:-translate-y-0.5"
              >
                {cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

export function IntegrationMarquee() {
  const allItems = integrationItems.flatMap((group) => group.items)
  const looped = [...allItems, ...allItems]

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-3">
        {integrationItems.map((group) => (
          <GlassCard key={group.category} className="p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-200">{group.category}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{group.items.map(i => i.name).join(' \u2022 ')}</p>
          </GlassCard>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/15 bg-white/60 dark:bg-slate-950/50 py-4 shadow-sm dark:shadow-none">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />
        <motion.div
          className="flex min-w-max items-center gap-6 px-6"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {looped.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center justify-center h-10 px-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 shrink-0"
            >
              {item.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.logo}
                  alt={item.name}
                  className={`h-6 w-auto object-contain ${item.darkInvert ? 'dark:invert' : ''}`}
                />
              ) : (
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export function FloatingDemoButton({ label = 'Book a Demo' }: { label?: string }) {
  return (
    <Link
      href="/contact#book-consultation"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 inline-flex items-center rounded-full border border-amber-300/60 bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-2 md:px-5 md:py-3 text-xs md:text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-[0_12px_30px_rgba(245,158,11,0.35)] transition hover:-translate-y-1"
    >
      {label}
    </Link>
  )
}
