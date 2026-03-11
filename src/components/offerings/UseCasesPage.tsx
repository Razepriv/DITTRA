'use client'

import { useState } from 'react'
import { BarChart3, Cog, Factory, Headset, ShoppingBag, Truck } from 'lucide-react'
import {
  BottomCta,
  FloatingDemoButton,
  GlassCard,
  PageHero,
  PageShell,
  SectionBlock,
} from '@/components/offerings/Shared'

const useCaseTabs = [
  {
    key: 'sales',
    label: 'Sales',
    description:
      'Accelerate revenue growth with AI-powered sales automation. Free your teams from manual quoting, follow-ups, and data entry so they can focus on closing deals.',
    visual: 'Revenue Engine',
    icon: BarChart3,
    cards: [
      {
        title: 'Sales Quoting in Minutes, Not Days',
        description:
          'AI workers process documents, reason through pricing rules, and generate quotes instantly across email and calls, cutting cycle times from days to minutes.',
      },
      {
        title: 'Proactive Renewal Management',
        description:
          'AI workers call or email customers naturally, negotiate renewal terms, and escalate when needed to reduce churn and increase lifetime value.',
      },
      {
        title: 'Faster Part and Product Matching',
        description:
          'With advanced retrieval, AI workers search across product catalogs, technical docs, and customer history to respond first and win more deals.',
      },
      {
        title: 'Seamless Customer Communication',
        description:
          'Human-like conversations across phone, email, chat, and social channels ensure customers feel heard and supported at every touchpoint.',
      },
      {
        title: 'Intent-Based Lead Capture',
        description:
          'AI monitors buyer signals across web, content, and search behavior, scores leads against ICP, and triggers personalized outreach at peak intent moments.',
      },
    ],
  },
  {
    key: 'service',
    label: 'Service',
    description:
      'Deliver zero-wait, high-touch service without expanding headcount. AI workers amplify your service team while improving satisfaction and lowering cost-to-serve.',
    visual: 'Service Command Center',
    icon: Headset,
    cards: [
      {
        title: 'Zero Call Wait Times',
        description:
          'AI workers answer instantly in natural voices, resolve common issues, and escalate complex cases in real time.',
      },
      {
        title: 'Customer Delight at Scale',
        description:
          'AI copilots summarize tickets, draft responses, and retrieve knowledge base answers so CSRs can focus on empathy and complex cases.',
      },
      {
        title: 'Automated Troubleshooting and Scheduling',
        description:
          'AI workers guide troubleshooting and schedule technician visits end-to-end when on-site resolution is required.',
      },
      {
        title: 'Retention Through Superior Service',
        description:
          'AI workers proactively follow up in multiple languages, check satisfaction, and catch issues before escalation.',
      },
    ],
  },
  {
    key: 'supply-chain',
    label: 'Supply Chain',
    description:
      'Optimize inventory, logistics, and fulfillment with intelligent automation that cuts errors and manual effort across the supply chain.',
    visual: 'Autonomous Logistics Grid',
    icon: Truck,
    cards: [
      {
        title: 'Inventory Cost Reduction',
        description:
          'AI workers notify customers when orders are ready for pickup, reducing warehouse storage costs and freeing capacity.',
      },
      {
        title: 'Smart Scheduling Automation',
        description:
          'AI workers use browser automation to book, reschedule, and confirm logistics directly in customer systems.',
      },
      {
        title: 'Get Paid Faster with E-BOL and POD Automation',
        description:
          'AI workers process, validate, and send digital BOL and POD documentation automatically to accelerate invoicing.',
      },
      {
        title: 'Supply Chain Visibility and Responsiveness',
        description:
          'AI workers monitor systems, adapt to changing conditions, and escalate exceptions to keep stock and deliveries on track.',
      },
      {
        title: 'PO Parsing and Validation',
        description:
          'AI workers extract, validate, and route PO data from PDFs, emails, and scans directly into ERP systems in seconds.',
      },
    ],
  },
  {
    key: 'operations',
    label: 'Operations',
    description:
      'Boost efficiency, safety, and decision-making across procurement, production, and engineering using autonomous AI workers.',
    visual: 'Operations Intelligence Hub',
    icon: Cog,
    cards: [
      {
        title: 'Unified Data Access Across Systems',
        description:
          'AI workers retrieve answers from ERP, MES, and supplier data to eliminate hours of manual searching.',
      },
      {
        title: 'Predictive Maintenance and Safety Monitoring',
        description:
          'Visual detection and real-time alerts prevent downtime, enforce safety, and escalate risks immediately.',
      },
      {
        title: 'Automated Procurement and Contract Review',
        description:
          'AI workers analyze supplier contracts, flag compliance issues, and reduce procurement cycle time.',
      },
      {
        title: 'Faster Engineering and R&D Insights',
        description:
          'AI workers summarize reports, surface relevant documents, and support engineers with timely context.',
      },
    ],
  },
] as const

const industryTabs = [
  {
    key: 'manufacturing',
    label: 'Manufacturing',
    icon: Factory,
    cards: ['Supply Chain Coordination', 'Production Scheduling', 'Inventory Management', 'Real-Time Problem Resolution'],
  },
  {
    key: 'construction',
    label: 'Construction',
    icon: Cog,
    cards: ['Project Scheduling', 'Material Management', 'Cost Estimation', 'Progress Tracking'],
  },
  {
    key: 'retail',
    label: 'Retail and Ecommerce',
    icon: ShoppingBag,
    cards: ['Inventory Replenishment', 'Dynamic Pricing', 'Visual Search', 'Store Layout Optimization'],
  },
  {
    key: 'energy',
    label: 'Energy and Utilities',
    icon: BarChart3,
    cards: ['Smart Grid Optimization', 'Equipment Maintenance', 'Customer Service Automation', 'Emission Control'],
  },
  {
    key: 'finance',
    label: 'Finance',
    icon: Headset,
    cards: ['Credit Risk Assessment', 'Fraud Detection', 'Debt Collection', 'Automated Investment Management'],
  },
] as const

export function UseCasesPage() {
  const [activeTab, setActiveTab] = useState<(typeof useCaseTabs)[number]['key']>('sales')
  const [activeIndustry, setActiveIndustry] = useState<(typeof industryTabs)[number]['key']>('manufacturing')

  const currentTab = useCaseTabs.find((tab) => tab.key === activeTab) ?? useCaseTabs[0]
  const currentIndustry = industryTabs.find((tab) => tab.key === activeIndustry) ?? industryTabs[0]
  const ActiveIcon = currentTab.icon

  return (
    <PageShell>
      <PageHero
        pageTitle="Use Cases"
        headline="Redefine Operations with AI Workers"
        subtitle="Boost your efficiency with AI-driven workflows and autonomous agents designed to fuel performance and innovation."
        primaryCta={{ label: 'Book a Demo', href: '/contact#book-consultation' }}
      />

      <SectionBlock
        id="use-case-tabs"
        eyebrow="Core Domains"
        title="Use Cases by Business Function"
        description="Explore practical AI worker patterns by function, from revenue generation to frontline operations."
      >
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex min-w-full gap-2 rounded-2xl border border-white/15 bg-slate-950/45 p-2 md:min-w-0">
            {useCaseTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition ${
                  activeTab === tab.key
                    ? 'bg-white text-slate-900'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <GlassCard>
            <div className="rounded-2xl border border-cyan-200/30 bg-gradient-to-br from-blue-500/25 via-cyan-500/15 to-transparent p-6">
              <div className="mb-5 inline-flex rounded-xl border border-white/20 bg-slate-900/50 p-3">
                <ActiveIcon className="h-6 w-6 text-cyan-100" />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{currentTab.label}</p>
              <h3 className="mt-2 font-heading text-3xl font-bold text-white">{currentTab.visual}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">{currentTab.description}</p>
            </div>
          </GlassCard>

          <div className="grid gap-4 md:grid-cols-2">
            {currentTab.cards.map((card, index) => (
              <GlassCard key={card.title} className="h-full">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Use Case {index + 1}</p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-base">{card.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        id="industries"
        eyebrow="Industries"
        title="Industry-Specific AI Worker Playbooks"
        description="Switch by industry to review focused deployment opportunities."
      >
        <div className="overflow-x-auto pb-2">
          <div className="inline-flex min-w-full gap-2 rounded-2xl border border-white/15 bg-slate-950/45 p-2 md:min-w-0">
            {industryTabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveIndustry(tab.key)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold uppercase tracking-[0.1em] transition ${
                    activeIndustry === tab.key
                      ? 'bg-white text-slate-900'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {currentIndustry.cards.map((card) => (
            <GlassCard key={card} className="h-full">
              <h3 className="font-heading text-xl font-semibold text-white">{card}</h3>
              <p className="mt-3 text-sm text-slate-300">
                AI workers orchestrate this workflow with live signals, business rules, and human oversight for critical decisions.
              </p>
            </GlassCard>
          ))}
        </div>
      </SectionBlock>

      <BottomCta
        headline="Design the Right Use Cases Before You Scale"
        description="Dittra helps you prioritize high-impact, low-friction automation opportunities and launch production-ready AI workers fast."
        cta={{ label: 'Book a Demo', href: '/contact#book-consultation' }}
      />

      <FloatingDemoButton label="Book a Demo" />
    </PageShell>
  )
}
