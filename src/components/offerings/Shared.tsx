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
  { category: 'AI/LLM', names: ['OpenAI', 'Claude', 'Gemini', 'Llama', 'Stable Diffusion', 'Replicate'] },
  { category: 'Agent Frameworks', names: ['CrewAI', 'AutoGen AI', 'LangChain', 'Voiceflow'] },
  { category: 'Voice', names: ['ElevenLabs', 'Deepgram', 'Whisper', 'VAPI'] },
  { category: 'Automation', names: ['n8n', 'Make', 'Zapier', 'Custom Middleware'] },
  { category: 'Cloud', names: ['AWS', 'Azure', 'Google Cloud'] },
  { category: 'Enterprise', names: ['Salesforce', 'Oracle', 'SAP', 'Microsoft Dynamics'] },
]

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-[#0A0F1C] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.24),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.2),transparent_38%),radial-gradient(circle_at_50%_90%,rgba(245,158,11,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] [background-size:36px_36px]" />
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
    <section className="relative pt-36 pb-20 md:pt-40 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
              {pageTitle}
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {headline}
            </h1>
            <p className="mt-5 max-w-3xl text-xl text-slate-200 md:text-2xl">{subtitle}</p>
            {description ? <p className="mt-5 max-w-3xl text-base text-slate-300 md:text-lg">{description}</p> : null}
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
                  className="inline-flex items-center justify-center rounded-xl border border-blue-300/40 bg-blue-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-blue-100 transition hover:border-blue-200/70 hover:bg-blue-400/20"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="relative rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/25 via-transparent to-cyan-400/10" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'ROI', value: '120X' },
                  { label: 'Productivity', value: '+40%' },
                  { label: 'Cost Reduction', value: '10X' },
                  { label: 'Call Wait Time', value: 'Zero' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/20 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-300">{item.label}</p>
                    <p className="mt-2 font-heading text-2xl font-bold text-white">{item.value}</p>
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
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-10"
        >
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{eyebrow}</p>
          ) : null}
          <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">{title}</h2>
          {description ? <p className="mt-4 max-w-4xl text-base text-slate-300 md:text-lg">{description}</p> : null}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl',
        'before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:p-px before:[background:linear-gradient(145deg,rgba(148,163,184,0.45),rgba(37,99,235,0.25),rgba(6,182,212,0.3))] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]',
        className
      )}
    >
      <div className="relative">{children}</div>
    </div>
  )
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
    >
      {metrics.map((metric) => (
        <motion.div key={metric.label} variants={fadeUp}>
          <GlassCard className="h-full">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-300">{metric.label}</p>
            <p className="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">{metric.value}</p>
            <p className="mt-2 text-sm text-slate-300">{metric.context}</p>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
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
      <h3 className="font-heading text-2xl font-semibold text-white">{title}</h3>
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
            <p className="pt-2 text-sm leading-relaxed text-slate-200 md:text-base">{step}</p>
          </li>
        ))}
      </ol>
    </GlassCard>
  )
}

export function VerticalTimeline({ items }: VerticalTimelineProps) {
  return (
    <div className="relative pl-6 md:pl-10">
      <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent md:left-4" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <GlassCard key={item.title} className="relative ml-4 md:ml-6">
            <div className="absolute -left-8 top-8 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-200/50 bg-cyan-300 text-xs font-bold text-slate-950 md:-left-10">
              {index + 1}
            </div>
            <h3 className="font-heading text-2xl font-semibold text-white">{item.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200 md:text-base">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
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
    <GlassCard className="border-white/25 bg-gradient-to-br from-blue-500/20 to-cyan-500/10">
      <blockquote className="font-heading text-xl font-semibold leading-relaxed text-white md:text-2xl">
        “{quote}”
      </blockquote>
      <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-300">{author}</p>
    </GlassCard>
  )
}

export function BottomCta({ headline, description, cta }: BottomCtaProps) {
  return (
    <section className="pb-24 pt-10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <GlassCard className="border-cyan-300/35 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-amber-400/15 p-8 md:p-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-white md:text-5xl">{headline}</h2>
              <p className="mt-4 max-w-3xl text-base text-slate-200 md:text-lg">{description}</p>
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
  const names = integrationItems.flatMap((group) => group.names)
  const looped = [...names, ...names]

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-3">
        {integrationItems.map((group) => (
          <GlassCard key={group.category} className="p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{group.category}</p>
            <p className="mt-2 text-sm text-slate-300">{group.names.join(' • ')}</p>
          </GlassCard>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950/50 py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0A0F1C] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0A0F1C] to-transparent" />
        <motion.div
          className="flex min-w-max items-center gap-8 px-6"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          {looped.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-slate-400 transition hover:border-cyan-200/60 hover:text-cyan-200"
            >
              {name}
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
      className="fixed bottom-6 right-6 z-50 inline-flex items-center rounded-full border border-amber-300/60 bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-950 shadow-[0_12px_30px_rgba(245,158,11,0.35)] transition hover:-translate-y-1"
    >
      {label}
    </Link>
  )
}
