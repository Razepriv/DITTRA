'use client'

import { motion } from 'framer-motion'
import {
  BottomCta,
  FloatingDemoButton,
  GlassCard,
  MetricsGrid,
  PageHero,
  PageShell,
  ProcessFlow,
  PullQuote,
  SectionBlock,
  VerticalTimeline,
  globalRoiMetrics,
} from '@/components/offerings/Shared'

const previousWorkflow = [
  'Human scheduler manually contacts customers via email or phone to confirm delivery windows.',
  'Customer unavailable, so the scheduler follows up repeatedly.',
  'Customers request callbacks or fail to respond, delaying the process.',
  'Lack of timely responses prevents carrier scheduling, delaying pickup and invoicing.',
  'Working capital costs increase due to inventory holding expenses.',
]

const futureWorkflow = [
  'Scheduler Voice Agent automatically contacts customers via email, calls, and texts multiple times daily.',
  'The AI agent captures customer voice input and updates the scheduling system in real time.',
  'The system triggers notifications to carriers, streamlining booking.',
  'All stakeholders receive pickup appointment confirmation.',
  'Result: $40K-$60K savings per representative annually.',
]

const preparationSteps = [
  {
    title: 'Define Goals and Use Cases',
    bullets: [
      'Focus on specific problems Agentic AI can solve.',
      'Prioritize high-impact, low-risk applications for initial deployments.',
      'Map current workflows to future workflows.',
    ],
  },
  {
    title: 'Assess Organizational Readiness',
    bullets: [
      'Evaluate your current technology stack and identify integration gaps.',
      'Understand the skills and expertise your team needs.',
    ],
  },
  {
    title: 'Ensure Data Quality and Availability',
    bullets: [
      'Collect, clean, and organize datasets for reliable AI inputs.',
      'Address data silos that could hinder agent performance.',
    ],
  },
  {
    title: 'Build a Cross-Functional Team',
    bullets: ['Assemble experts from IT, operations, and business units.'],
  },
]

export function ConsultingPage() {
  return (
    <PageShell>
      <PageHero
        pageTitle="Getting Started with Agentic AI"
        headline="Where Should You Start?"
        subtitle="Taking the first steps toward AI adoption with a clear roadmap grounded in your business reality."
        description="Dittra helps C-suite leaders identify high-impact AI use cases and prioritize the opportunities with the greatest outcomes through a complimentary Agentic Mapping session."
        primaryCta={{ label: 'Book Free Agentic Mapping Session', href: '/contact#book-consultation' }}
        secondaryCta={{ label: 'Download Our AI Canvas', href: '/contact?asset=ai-canvas#book-consultation' }}
      />

      <SectionBlock
        eyebrow="ROI Snapshot"
        title="What High-Performing Teams Measure"
        description="Use these benchmark outcomes to align stakeholders around value before implementation starts."
      >
        <MetricsGrid metrics={globalRoiMetrics} />
      </SectionBlock>

      <SectionBlock
        id="understanding-agentic-ai"
        eyebrow="Section 1"
        title="Understanding Agentic AI"
        description="Agentic AI systems use AI agents that act independently, taking initiative to perform tasks and solve problems without requiring direct human input. Unlike traditional AI that supports users with recommendations, Agentic AI autonomously executes decisions based on real-time data, coordinates complex processes across systems, and interacts dynamically with other agents and platforms."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Autonomy',
              description: 'Operates without continuous human oversight.',
            },
            {
              title: 'Adaptability',
              description: 'Learns from interactions and adjusts to new contexts.',
            },
            {
              title: 'Integration',
              description: 'Seamlessly connects with multiple platforms to manage workflows.',
            },
          ].map((item) => (
            <GlassCard key={item.title}>
              <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-200 md:text-base">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="why-it-matters"
        eyebrow="Section 2"
        title="Why Agentic AI Matters"
        description="Agentic AI empowers organizations to streamline operations by automating routine and complex tasks, enhance decision-making through real-time analysis, and boost efficiency by reducing intervention in repetitive workflows."
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassCard>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-200 md:text-lg">
              For businesses, this translates to cost savings, improved productivity, and faster responses to market changes.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-200 md:text-base">
              {[
                'Streamline operations through autonomous workflow execution.',
                'Enhance decisions with real-time, context-aware analysis.',
                'Boost efficiency by reducing manual repetitive effort.',
              ].map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
          <PullQuote
            quote="We believe that, in 2025, we may see the first AI agents join the workforce and materially change the output of companies."
            author="Sam Altman, OpenAI"
          />
        </div>
      </SectionBlock>

      <SectionBlock
        id="real-world-example"
        eyebrow="Section 3"
        title="Real-World Use Case: Truck Delivery Scheduling"
        description="A practical before-and-after blueprint for introducing agentic execution into a revenue-critical process."
      >
        <div className="grid gap-6 xl:grid-cols-2">
          <ProcessFlow title="Previous Workflow" steps={previousWorkflow} accent="blue" />
          <ProcessFlow title="Future Workflow with Agentic AI" steps={futureWorkflow} accent="cyan" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <GlassCard>
            <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">Tools and Resources Required</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-200 md:text-base">
              {[
                'Voice platform for AI-enabled customer interaction',
                'Agent orchestration platform for workflow management',
                'API integration with scheduling systems',
                'Access to customer phone numbers and communication preferences',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">Key People</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-200 md:text-base">
              {[
                'Business Stakeholder: drives alignment with organizational goals',
                'IT Stakeholder: ensures technical feasibility and system integration',
                'Subject Matter Expert: understands the CSR process deeply',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionBlock>

      <SectionBlock
        id="preparation"
        eyebrow="Section 4"
        title="Essential Preparation Steps"
        description="A practical rollout sequence to reduce risk and accelerate value capture."
      >
        <VerticalTimeline items={preparationSteps} />
      </SectionBlock>

      <SectionBlock
        id="human-centered"
        eyebrow="Section 5"
        title="Human-Centered Focus"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: 'Understand User Pain Points',
              body: 'Conduct user research to identify challenges and frustrations for both internal and external customers, then define how AI will improve their experience.',
            },
            {
              title: 'Design with Empathy',
              body: 'Ensure AI interactions feel intuitive and responsive, and align solutions with user behaviors and preferences.',
            },
            {
              title: 'Focus on Accessibility',
              body: 'Design inclusive AI systems that accommodate diverse user needs and address barriers tied to ability or technical literacy.',
            },
            {
              title: 'Iterate Based on Feedback',
              body: 'Continuously collect user feedback to refine AI functionality and improve measurable outcomes over time.',
            },
          ].map((item) => (
            <GlassCard key={item.title}>
              <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-200 md:text-base">{item.body}</p>
            </GlassCard>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="framework"
        eyebrow="Section 6"
        title="Building a Framework for Agentic AI"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Human-in-the-Loop (HITL)',
              body: 'Incorporate human oversight for critical tasks to maintain alignment with organizational values.',
            },
            {
              title: 'System Integration',
              body: 'Develop APIs and middleware to connect AI agents with existing platforms and ensure interoperability with legacy infrastructure.',
            },
            {
              title: 'Ethics and Governance',
              body: 'Create policies for autonomous decision-making and establish accountability frameworks to oversee AI actions.',
            },
          ].map((item) => (
            <GlassCard key={item.title}>
              <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-200 md:text-base">{item.body}</p>
            </GlassCard>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="challenges"
        eyebrow="Section 7"
        title="Overcoming Challenges"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Integration Complexity',
              body: 'Invest in scalable architectures to streamline connectivity and data flow.',
            },
            {
              title: 'Security Concerns',
              body: 'Prioritize robust cybersecurity measures to safeguard data and maintain trust.',
            },
            {
              title: 'Change Management',
              body: 'Prepare teams through training, support, and clear communication.',
            },
          ].map((item) => (
            <GlassCard key={item.title}>
              <h3 className="font-heading text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-200 md:text-base">{item.body}</p>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-6"
        >
          <GlassCard>
            <h3 className="font-heading text-2xl font-semibold text-slate-900 dark:text-white">Best Practices</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-200 md:text-base">
              {[
                'Start small: pilot with one high-impact use case, then scale.',
                'Monitor and measure: track performance metrics to assess ROI.',
                'Iterate continuously: use deployment insights to refine and expand.',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </SectionBlock>

      <SectionBlock id="next-steps" eyebrow="Section 8" title="Next Steps for Scaling">
        <GlassCard>
          <ul className="grid gap-3 text-sm text-slate-600 dark:text-slate-200 md:grid-cols-2 md:text-base">
            {[
              'Expand into predictive analytics and strategic decision-making.',
              'Strengthen trust, transparency, and governance as AI scales.',
              'Connect Agentic AI to more platforms and systems.',
              'Partner with Dittra for mapping, development, and deployment.',
            ].map((item) => (
              <li key={item} className="flex gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/40 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </SectionBlock>

      <BottomCta
        headline="Transform Your Business with AI - Starting Today"
        description="Join our AI Accelerator program and unlock your organization's AI potential with personalized insights and actionable strategies that drive measurable impact."
        cta={{ label: "Let's Talk", href: '/contact#book-consultation' }}
      />

      <FloatingDemoButton label="Let's Talk" />
    </PageShell>
  )
}
