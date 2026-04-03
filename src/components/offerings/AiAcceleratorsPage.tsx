'use client'

import { Atom, Compass, Gauge, MessageCircle, Rocket } from 'lucide-react'
import {
  BottomCta,
  FloatingDemoButton,
  GlassCard,
  PageHero,
  PageShell,
  SectionBlock,
} from '@/components/offerings/Shared'

const accelerators = [
  {
    title: 'AI Accelerator',
    icon: Gauge,
    description:
      'Our flagship AI Accelerator takes a strategic, human-centered approach that blends design thinking, AI-driven insight, and advanced problem-solving to uncover high-impact opportunities and define executable Agentic AI solutions.',
    details:
      'Through a focused 2-day workshop and team collaboration, we map workflows, tasks, and processes, then create a tailored plan to integrate AI, streamline operations, and increase productivity.',
    meta: [
      'Prioritized AI use case roadmap',
      'Current vs. future workflow mapping',
      'ROI projections per use case',
      'Implementation timeline with milestones',
    ],
  },
  {
    title: 'AI Immersion',
    icon: Atom,
    description:
      'Not ready for full-scale AI integration? AI Immersion is the ideal entry point for organizations beginning their transformation journey.',
    details:
      'This engagement sparks curiosity, drives internal engagement, and introduces practical AI opportunities with minimal complexity and cost.',
    meta: [
      'Best for first-time AI explorers',
      'Leadership alignment and education sessions',
      'Team upskilling with practical examples',
    ],
  },
  {
    title: 'AI Launchpad',
    icon: Rocket,
    description:
      'AI Launchpad supports full build-and-ship execution, from strategic planning through deployment and enablement.',
    details:
      'Dittra provides end-to-end support for architecture, development, integration, testing, launch, and team readiness.',
    meta: [
      'Timeline: 8-12 weeks from kickoff to production',
      'Architecture design and platform planning',
      'Agent development, integration, testing, and deployment',
      'Team onboarding and operating model support',
    ],
  },
  {
    title: 'AI Agentic Mapping',
    icon: Compass,
    description:
      'AI Agentic Mapping combines journey mapping, process optimization, and agent workflow design to streamline operations and improve decisions.',
    details:
      'The engagement prioritizes human-AI interaction quality across each step of your process flow.',
    meta: [
      'Current-state journey maps',
      'AI agent placement recommendations',
      'Human-in-the-loop touchpoint design',
      'ROI impact projections',
    ],
  },
  {
    title: 'AI Advisor',
    icon: MessageCircle,
    description:
      'AI Advisor is an ongoing strategic and operational partnership for companies scaling beyond initial pilots.',
    details:
      'An embedded advisor works closely with leadership to identify automation opportunities, guide integration decisions, and continuously improve outcomes.',
    meta: [
      'Engagement model: monthly retainer',
      'Embedded with your leadership and delivery teams',
      'Best for organizations scaling AI across business units',
    ],
  },
]

export function AiAcceleratorsPage() {
  return (
    <PageShell>
      <PageHero
        pageTitle="AI Accelerators"
        headline="Accelerate Your Agentic AI Transformation"
        subtitle="Unlock new levels of efficiency and innovation with custom AI strategies designed to empower your business."
        primaryCta={{ label: 'Get an Accelerator', href: '/contact#book-consultation' }}
      />

      <SectionBlock
        eyebrow="Programs"
        title="Accelerator Portfolio"
        description="Choose the right engagement model based on your stage, internal readiness, and speed-to-value goals."
      >
        <div className="space-y-6">
          {accelerators.map((accelerator, index) => {
            const Icon = accelerator.icon
            const textOrder = index % 2 === 0 ? 'xl:order-1' : 'xl:order-2'
            const visualOrder = index % 2 === 0 ? 'xl:order-2' : 'xl:order-1'

            return (
              <div key={accelerator.title} className="grid gap-5 xl:grid-cols-2">
                <div className={textOrder}>
                  <GlassCard className="h-full">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-cyan-200/40 bg-cyan-400/10 p-3">
                        <Icon className="h-5 w-5 text-cyan-700 dark:text-cyan-100" />
                      </div>
                      <h3 className="font-heading text-3xl font-semibold text-slate-900 dark:text-white">{accelerator.title}</h3>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-200 md:text-base">{accelerator.description}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-300 md:text-base">{accelerator.details}</p>

                    <div className="mt-5 grid gap-2">
                      {accelerator.meta.map((item) => (
                        <div key={item} className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/45 px-3 py-2 text-sm text-slate-600 dark:text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                <div className={visualOrder}>
                  <GlassCard className="h-full">
                    <div className="flex h-full min-h-[260px] items-center justify-center rounded-2xl border border-slate-200 dark:border-white/15 bg-gradient-to-br from-blue-600/25 via-cyan-500/15 to-amber-400/10 p-8">
                      <div className="text-center">
                        <Icon className="mx-auto h-12 w-12 text-cyan-700 dark:text-cyan-100" />
                        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-200">Accelerator Program</p>
                        <h4 className="mt-2 font-heading text-4xl font-bold text-slate-900 dark:text-white">{accelerator.title}</h4>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            )
          })}
        </div>
      </SectionBlock>

      <BottomCta
        headline="Move from AI Exploration to Execution"
        description="Pick the accelerator that fits your stage and let Dittra guide the roadmap, build, and operational rollout for lasting impact."
        cta={{ label: 'Get an Accelerator', href: '/contact#book-consultation' }}
      />

      <FloatingDemoButton label="Get an Accelerator" />
    </PageShell>
  )
}
