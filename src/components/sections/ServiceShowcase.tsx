'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const capabilityTabs = [
  {
    key: 'ai-accelerators',
    label: 'AI Accelerators',
    description:
      'Accelerate your workflow. Our AI Accelerator blends design thinking, AI-driven insights, and advanced problem-solving to uncover challenges and deliver innovative Agentic AI solutions. Through a focused 2-day workshop and 1:1 meetings, we gain deep understanding of your workflows, tasks, and processes.',
    href: '/solutions/ai-accelerators',
  },
  {
    key: 'ai-agents',
    label: 'AI Agents',
    description:
      'Our AI agents simplify and enhance operations by automating routine tasks, streamlining workflows, and generating actionable insights. From inventory and scheduling to enterprise knowledge operations, these intelligent systems increase efficiency and productivity across teams.',
    href: '/capabilities/ai-agents',
  },
  {
    key: 'human-squads',
    label: 'Human Squads',
    description:
      'Our Human Squads deliver expert support to help businesses maintain and optimize AI systems, guide strategic innovation, and build scalable software products. With a human-centered design and research approach, we build seamless solutions that drive sustained growth.',
    href: '/capabilities/custom-software',
  },
] as const

const accelerateCards = [
  {
    title: 'Consulting',
    subtitle: 'Where should we start?',
    description:
      'Dittra helps C-suite leaders identify high-impact AI use cases and prioritize opportunities with the most significant outcomes through a complimentary Agentic Mapping session.',
    href: '/capabilities/consulting',
  },
  {
    title: 'AI Agents',
    subtitle: 'Preconfigured AI Agents for your workflow',
    description:
      'We have solved challenges across sales, service, operations, and logistics by automating emails, calls, and workflows. Get results in less than 90 days with pre-built agents targeting payback periods under one year.',
    href: '/capabilities/ai-agents',
  },
  {
    title: 'Custom Software',
    subtitle: 'Tailored Software, Powered by Deep Expertise',
    description:
      'Dittra provides dedicated teams to design and build custom software for industrial use cases across web, mobile, IoT, AI, and voice systems to unlock new value quickly.',
    href: '/capabilities/custom-software',
  },
] as const

export function ServiceShowcase() {
  const [activeTab, setActiveTab] = useState<(typeof capabilityTabs)[number]['key']>('ai-accelerators')

  const currentTab = capabilityTabs.find((tab) => tab.key === activeTab) ?? capabilityTabs[0]

  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#0A0F1C] dark:via-[#0B1324] dark:to-[#0A0F1C]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(6,182,212,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

      <div className="container relative z-10 mx-auto space-y-24 px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-7xl">
            Capabilities
          </h2>
          <p className="mx-auto mt-4 md:mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 lg:text-2xl">
            Explore how Dittra combines acceleration programs, autonomous agents, and human squads to deliver enterprise outcomes.
          </p>
          <div className="mt-10 inline-flex flex-wrap justify-center gap-1.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.04] p-1.5 backdrop-blur-sm">
            {capabilityTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-500/25'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white hover:shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-8 max-w-5xl rounded-3xl border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/[0.06] p-5 md:p-8 text-left backdrop-blur-xl shadow-sm dark:shadow-none"
          >
            <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-200">{currentTab.description}</p>
            <Link
              href={currentTab.href}
              className="mt-6 inline-flex rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-100 transition hover:bg-cyan-500/20"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        <div>
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl">
            Accelerate Your Future
          </h3>
          <p className="mt-3 md:mt-4 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Choose the right entry point to launch your transformation with confidence.
          </p>

          <div className="mt-6 md:mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accelerateCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/[0.06] p-6 backdrop-blur-xl shadow-sm dark:shadow-none transition hover:-translate-y-1 hover:border-cyan-400/40 dark:hover:border-cyan-200/40"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-200">{card.title}</p>
                <h4 className="mt-2 font-heading text-2xl font-bold text-slate-900 dark:text-white">{card.subtitle}</h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-200 md:text-base">{card.description}</p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex rounded-lg border border-slate-300 dark:border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:hover:text-cyan-100"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
