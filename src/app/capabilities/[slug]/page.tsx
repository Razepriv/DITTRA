import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AiAgentsPage } from '@/components/offerings/AiAgentsPage'
import { ConsultingPage } from '@/components/offerings/ConsultingPage'
import { CustomSoftwarePage } from '@/components/offerings/CustomSoftwarePage'

const capabilityPages = {
  consulting: {
    title: 'Consulting',
    description:
      'Get started with Agentic AI through Dittra consulting, roadmap design, and high-impact use case prioritization.',
    component: ConsultingPage,
  },
  'ai-agents': {
    title: 'AI Agents',
    description:
      'Preconfigured and custom AI agents for sales, service, operations, and supply chain automation.',
    component: AiAgentsPage,
  },
  'custom-software': {
    title: 'Custom Software',
    description:
      'Human-in-the-loop squads delivering custom software, managed services, and intelligent automation.',
    component: CustomSoftwarePage,
  },
} as const

type CapabilitySlug = keyof typeof capabilityPages

interface CapabilityPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return Object.keys(capabilityPages).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: CapabilityPageProps): Metadata {
  const page = capabilityPages[params.slug as CapabilitySlug]

  if (!page) {
    return {
      title: 'Capability Not Found | Dittra',
    }
  }

  return {
    title: `${page.title} | Dittra`,
    description: page.description,
  }
}

export default function CapabilityPage({ params }: CapabilityPageProps) {
  const page = capabilityPages[params.slug as CapabilitySlug]

  if (!page) {
    notFound()
  }

  const PageComponent = page.component
  return <PageComponent />
}
