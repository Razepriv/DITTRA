'use client'

import { Code2, Handshake, PenTool, Presentation, Workflow } from 'lucide-react'
import {
  BottomCta,
  FloatingDemoButton,
  GlassCard,
  IntegrationMarquee,
  PageHero,
  PageShell,
  SectionBlock,
} from '@/components/offerings/Shared'

export function CustomSoftwarePage() {
  return (
    <PageShell>
      <PageHero
        pageTitle="Human Squads"
        headline="Humans in the Loop"
        subtitle="Partner with experts to develop AI systems, foster innovation, and deliver human-centered solutions."
        primaryCta={{ label: 'Talk to Our Experts', href: '/contact#book-consultation' }}
      />

      <SectionBlock
        id="managed-services"
        eyebrow="Section 1"
        title="Managed Services"
      >
        <GlassCard>
          <div className="flex items-center gap-3">
            <Handshake className="h-6 w-6 text-cyan-200" />
            <h3 className="font-heading text-2xl font-semibold text-white">Managed Services</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">
            Our Managed Services provide ongoing support and maintenance for your AI solutions, ensuring they continue to deliver value long after deployment. From updates and performance monitoring to troubleshooting and optimization, Dittra handles technical complexity so your team can stay focused on growth. Your AI infrastructure stays secure, current, and aligned with evolving business needs.
          </p>
        </GlassCard>
      </SectionBlock>

      <SectionBlock
        id="design-research"
        eyebrow="Section 2"
        title="Design and Research"
      >
        <GlassCard>
          <div className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-cyan-200" />
            <h3 className="font-heading text-2xl font-semibold text-white">Design and Research</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">
            Our Product Design, Service Design, and UX Research offerings focus on functional, user-friendly solutions aligned with real human needs. We prioritize deep research and testing so every interaction is intuitive, seamless, and valuable. Design thinking and behavioral science approaches ensure successful adoption inside teams and customer journeys.
          </p>
        </GlassCard>
      </SectionBlock>

      <SectionBlock
        id="software-mobile"
        eyebrow="Section 3"
        title="Software and Mobile Development"
      >
        <GlassCard>
          <div className="flex items-center gap-3">
            <Code2 className="h-6 w-6 text-cyan-200" />
            <h3 className="font-heading text-2xl font-semibold text-white">Software and Mobile Development</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">
            Dittra builds scalable web and mobile applications that integrate with your systems while leveraging AI, voice, IoT, and edge computing to improve decisions and customer experiences.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              'Full-stack web applications (React, Next.js, Node.js, Python)',
              'Native and cross-platform mobile apps',
              'AI/ML integration into existing applications',
              'Voice-enabled application development',
              'IoT and edge computing solutions',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-slate-900/45 p-3 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="mt-5">
          <h3 className="font-heading text-2xl font-semibold text-white">SaaS Development and Modernization</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              'New SaaS Build: cloud-native architecture, design, development, and launch',
              'SaaS Modernization: upgrade legacy SaaS with modern UX and AI-enhanced features',
              'Voice of Customer integration for product and roadmap decisions',
              'Technical assessment with prioritized architecture recommendations',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-blue-200/20 bg-blue-500/10 p-3 text-sm text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </GlassCard>
      </SectionBlock>

      <SectionBlock
        id="think-tank"
        eyebrow="Section 4"
        title="Think Tank Advisory"
      >
        <GlassCard>
          <div className="flex items-center gap-3">
            <Presentation className="h-6 w-6 text-cyan-200" />
            <h3 className="font-heading text-2xl font-semibold text-white">Think Tank Advisory</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 md:text-base">
            Our Fractional Think Tank Advisory brings forward-thinking experts into your C-suite planning process. Through workshops, scenario planning, and focused research, we help leadership identify disruptive opportunities, shape long-term AI strategy, and make confident decisions in a rapidly changing landscape.
          </p>
        </GlassCard>
      </SectionBlock>

      <SectionBlock
        id="custom-automations"
        eyebrow="Section 5"
        title="Custom Automations: Intelligent Workflows, Zero Manual Effort"
      >
        <div className="grid gap-4 xl:grid-cols-2">
          <GlassCard>
            <div className="flex items-center gap-3">
              <Workflow className="h-6 w-6 text-cyan-200" />
              <h3 className="font-heading text-2xl font-semibold text-white">Workflow Automation</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200 md:text-base">
              {[
                'n8n, Make, and custom workflow orchestration',
                'Multi-step process automation with conditional logic',
                'Human-in-the-loop checkpoints for critical decisions',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="font-heading text-2xl font-semibold text-white">Document Processing and ETL Pipelines</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200 md:text-base">
              {[
                'Purchase Order extraction and validation',
                'Invoice processing and three-way matching',
                'BOL and POD automation',
                'Data normalization and product mapping',
                'Multi-source ingestion with validation',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="font-heading text-2xl font-semibold text-white">Browser Automation and RPA</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200 md:text-base">
              {[
                'Browser-based task automation for booking, scheduling, and form workflows',
                'RPA implementation for legacy systems without APIs',
                'Web scraping and structured data extraction from portals',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="font-heading text-2xl font-semibold text-white">API Integration and Middleware</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200 md:text-base">
              {[
                'RESTful and GraphQL API development',
                'Middleware connecting disparate enterprise systems',
                'Real-time data sync and webhook orchestration',
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
        id="integrations"
        eyebrow="Integrations"
        title="Built to Connect with Your Existing Ecosystem"
        description="From AI models to enterprise systems, Dittra custom software integrates cleanly across your architecture."
      >
        <IntegrationMarquee />
      </SectionBlock>

      <BottomCta
        headline="Build Human-Centered Systems That Scale"
        description="Partner with Dittra's Human Squads to design, build, and evolve custom software and automation that performs in real-world operations."
        cta={{ label: 'Talk to Our Experts', href: '/contact#book-consultation' }}
      />

      <FloatingDemoButton label="Let's Talk" />
    </PageShell>
  )
}
