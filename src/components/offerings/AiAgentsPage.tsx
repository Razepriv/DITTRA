'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  Bot,
  Database,
  Mic,
  Network,
  PackageCheck,
  Radar,
  TrendingUp,
} from 'lucide-react'
import {
  BottomCta,
  FloatingDemoButton,
  GlassCard,
  IntegrationMarquee,
  MetricsGrid,
  PageHero,
  PageShell,
  ProcessFlow,
  SectionBlock,
} from '@/components/offerings/Shared'

const agentMetrics = [
  { label: 'Lead Conversion', value: '3-5X', context: 'Intent-based activation vs. cold outreach' },
  { label: 'PO Processing', value: '15min -> Seconds', context: 'AI extraction, validation, and routing' },
  { label: 'Quoting Speed', value: 'Days -> Minutes', context: 'Automated quote creation and follow-ups' },
  { label: 'Call Wait Time', value: 'Zero', context: 'Voice agent deployment for instant response' },
]

const agentCards = [
  {
    title: 'Intent-Based Lead Generation Agent',
    tagline: 'Find Buyers Before They Find You',
    description:
      'Identifies high-intent buyers by analyzing website visits, content engagement, search behavior, pricing page views, and CRM activity, then triggers personalized outreach and routes qualified opportunities to sales at the right moment.',
    features: [
      'Behavioral signal analysis across first-party and third-party data',
      'AI-powered lead scoring using intent strength and ICP fit',
      'Automated multi-channel outreach across email, social, ads, and voice',
      'Buying group mapping across 6-10 stakeholders per account',
    ],
    metric: '3-5X improvement in conversion rates',
    premium: true,
    icon: Radar,
  },
  {
    title: 'PO Parser Agent',
    tagline: 'Purchase Orders, Processed in Seconds',
    description:
      'Automatically extracts, validates, and routes purchase order data from PDFs, emails, scans, and EDI. It reads line items, maps data to your catalog, flags anomalies, and pushes validated records into ERP or accounting systems in real time.',
    features: [
      'Multi-format ingestion for PDFs, emails, scans, EDI, and fax-to-digital',
      'Intelligent extraction for line items, pricing, addresses, and payment terms',
      'Catalog matching using fuzzy logic for SKU and naming discrepancies',
      'Anomaly detection for pricing errors, duplicates, and compliance issues',
      'Direct ERP/WMS/accounting push with confirmations',
    ],
    metric: '95%+ accuracy with second-level processing',
    premium: true,
    icon: PackageCheck,
  },
  {
    title: 'VisionAgent',
    tagline: 'AI That Sees What You Need',
    description:
      'Automates inventory and shelf management with edge-detection AI, tracking stock and identifying empty spaces in real time for warehouses and storefronts.',
    features: [
      'Advanced edge-detection for precise object counting',
      'Real-time shelf monitoring for proactive replenishment',
      'Inventory optimization with reduced manual effort',
      'Predictive maintenance through visual degradation recognition',
      'Defect detection and safety compliance monitoring',
    ],
    metric: 'Cut defect rates up to 30%, reduce inspection time by 60-90%',
    icon: Activity,
  },
  {
    title: 'VoiceAgent',
    tagline: 'The Future of Effortless Scheduling',
    description:
      'Handles outbound and inbound voice workflows with natural speech, including delivery scheduling, service coordination, reminders, and escalation logic.',
    features: [
      'Conversational AI with human-like intonation',
      'Smart scheduling, rescheduling, and follow-up automation',
      'CRM synchronization in real time',
      'Multilingual customer support and troubleshooting',
      'Proactive outbound campaigns for renewals and check-ins',
    ],
    icon: Mic,
  },
  {
    title: 'AnswersAgent',
    tagline: 'Your Knowledge, Streamlined',
    description:
      'Centralizes SOPs, documents, and process knowledge into a secure, searchable intelligence layer for faster enterprise decision-making.',
    features: [
      'Instant knowledge retrieval from company data',
      'Context-aware responses for complex questions',
      'Role-based security controls and scalable access',
    ],
    icon: Database,
  },
  {
    title: 'Sales Quoting Agent',
    tagline: 'Quotes in Minutes, Not Days',
    description:
      'Automates quote generation from document intake through pricing logic, outbound response, CRM updates, and follow-up sequencing.',
    features: [
      'Pricing-rule reasoning for complex quote scenarios',
      'Real-time lead response across email and voice',
      'CRM sync and automated follow-up sequences',
    ],
    metric: 'Cuts quoting cycles from days to minutes',
    icon: TrendingUp,
  },
  {
    title: 'Orchestration Agent',
    tagline: 'The Brain That Connects Everything',
    description:
      'Coordinates agents and enterprise systems across ERP, CRM, WMS, MES, and logistics platforms while handling exceptions in real time.',
    features: [
      'Dynamic multi-system coordination in real time',
      'Multilingual communication for global teams',
      'Proactive anomaly detection before delays occur',
      'Adaptive workflow management under changing conditions',
    ],
    icon: Network,
  },
]

export function AiAgentsPage() {
  return (
    <PageShell>
      <PageHero
        pageTitle="AI Agents"
        headline="Multiply Your Team, Increase Your Efficiency"
        subtitle="Harness the power of AI agents to streamline workflows, drive productivity, and achieve measurable results."
        primaryCta={{ label: 'Book a Demo', href: '/contact#book-consultation' }}
      />

      <SectionBlock
        eyebrow="Performance"
        title="Measurable Agent Outcomes"
        description="These are the benchmark gains Dittra teams use to prioritize deployment roadmaps."
      >
        <MetricsGrid metrics={agentMetrics} />
      </SectionBlock>

      <SectionBlock
        id="preconfigured-agents"
        eyebrow="Section 1"
        title="Preconfigured Agents"
        description="Deploy proven agents fast, then tailor behavior to your stack, workflow, and compliance requirements."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {agentCards.map((agent) => {
            const Icon = agent.icon

            return (
              <GlassCard
                key={agent.title}
                className={agent.premium ? 'border-amber-300/50 bg-gradient-to-br from-amber-500/10 to-blue-600/10' : ''}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">{agent.tagline}</p>
                    <h3 className="mt-2 font-heading text-2xl font-semibold text-white">{agent.title}</h3>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-slate-900/70 p-3">
                    <Icon className="h-5 w-5 text-cyan-200" />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">{agent.description}</p>

                <ul className="mt-5 space-y-2 text-sm text-slate-200">
                  {agent.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {agent.metric ? (
                  <div className="mt-5 rounded-xl border border-white/20 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-amber-200">
                    {agent.metric}
                  </div>
                ) : null}
              </GlassCard>
            )
          })}
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Differentiators"
        title="How Our Signature Agents Work"
        description="Intent and PO intelligence are core Dittra differentiators and are designed for immediate pipeline and cash-flow impact."
      >
        <div className="grid gap-6 xl:grid-cols-2">
          <ProcessFlow
            title="Intent-Based Lead Generation: 5-Step Flow"
            accent="amber"
            steps={[
              'Signal detection across website visits, downloads, search queries, pricing page views, and social engagement.',
              'Account scoring against intent signals plus firmographic, technographic, and demographic data.',
              'Buying group mapping to identify champions, influencers, and ratifiers.',
              'Personalized activation triggered by role and intent stage across channels.',
              'Sales handoff with full context briefing within minutes of peak intent.',
            ]}
          />

          <ProcessFlow
            title="PO Parser: 6-Step Flow"
            accent="cyan"
            steps={[
              'Ingestion from email, upload, API, or any incoming source.',
              'Extraction of structured fields for header, line items, terms, and shipping details.',
              'Validation against catalog, pricing rules, customer history, and contracts.',
              'Exception handling that routes anomalies to human review with full context.',
              'System push to ERP, WMS, or accounting.',
              'Confirmation sent to customers with validated order details.',
            ]}
          />
        </div>

        <GlassCard className="mt-6">
          <h3 className="font-heading text-2xl font-semibold text-white">PO Parser Extension Pack</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
            {[
              'Bill of Lading (BOL) processing and validation',
              'Proof of Delivery (POD) automation',
              'Invoice matching and three-way reconciliation',
              'Supplier contract extraction and compliance checks',
            ].map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-slate-900/40 p-3">
                {item}
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionBlock>

      <SectionBlock
        id="agentic-agent-squad"
        eyebrow="Section 2"
        title="Agentic Agent Squad"
        description="A team of autonomous AI agents that collaborate in real-time to handle data processing, customer support, and decision-making."
      >
        <GlassCard>
          <p className="max-w-4xl text-sm leading-relaxed text-slate-200 md:text-base">
            The Agentic Agent Squad unlocks speed, efficiency, and scalability while minimizing manual effort. Teams get smarter workflows, reduced costs, and expanded execution capacity without adding headcount.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              'Signal Agent',
              'Voice Agent',
              'Knowledge Agent',
              'Workflow Agent',
              'Quality Agent',
              'Escalation Agent',
            ].map((node, index) => (
              <motion.div
                key={node}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative rounded-xl border border-cyan-200/30 bg-slate-900/55 p-4 text-center"
              >
                <Bot className="mx-auto mb-2 h-5 w-5 text-cyan-200" />
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-100">{node}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-white/15 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-blue-600/20 p-4 text-sm text-slate-200">
            Real-time orchestration ensures agents collaborate as a unified network with human overrides for critical decisions.
          </div>
        </GlassCard>
      </SectionBlock>

      <SectionBlock
        id="custom-agents"
        eyebrow="Section 3"
        title="AI Custom Agents"
        description="For organizations requiring tailored solutions, Dittra's Custom Agent Dedicated Team builds agents around your exact workflows, systems, and operational context."
      >
        <GlassCard>
          <p className="text-sm leading-relaxed text-slate-200 md:text-base">
            We work side-by-side with your operators, IT leaders, and business stakeholders to design intelligent agents that plug directly into existing systems while optimizing the entire operating model.
          </p>
          <a
            href="/contact#book-consultation"
            className="mt-6 inline-flex items-center rounded-xl border border-cyan-200/45 bg-cyan-400/10 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Build Your Custom Agent
          </a>
        </GlassCard>
      </SectionBlock>

      <SectionBlock
        id="integrations"
        eyebrow="Integrations"
        title="Works Across Your AI and Enterprise Stack"
        description="Connect modern models and frameworks with your existing cloud, automation, voice, and enterprise systems."
      >
        <IntegrationMarquee />
      </SectionBlock>

      <BottomCta
        headline="Deploy AI Agents That Produce Measurable Results"
        description="From preconfigured accelerators to fully custom agent ecosystems, Dittra helps you move from experimentation to operational impact quickly and safely."
        cta={{ label: 'Book a Demo', href: '/contact#book-consultation' }}
      />

      <FloatingDemoButton label="Book a Demo" />
    </PageShell>
  )
}
