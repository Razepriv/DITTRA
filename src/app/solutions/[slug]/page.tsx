import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AiAcceleratorsPage } from '@/components/offerings/AiAcceleratorsPage'
import { UseCasesPage } from '@/components/offerings/UseCasesPage'

const solutionPages = {
  'use-cases': {
    title: 'Use Cases',
    description:
      'Explore AI worker use cases across sales, service, supply chain, operations, and industry-specific workflows.',
    component: UseCasesPage,
  },
  'ai-accelerators': {
    title: 'AI Accelerators',
    description:
      'Accelerator programs for discovery, mapping, build-and-ship execution, and ongoing AI advisory.',
    component: AiAcceleratorsPage,
  },
} as const

type SolutionSlug = keyof typeof solutionPages

interface SolutionsPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return Object.keys(solutionPages).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: SolutionsPageProps): Metadata {
  const page = solutionPages[params.slug as SolutionSlug]

  if (!page) {
    return {
      title: 'Solution Not Found | Dittra',
    }
  }

  return {
    title: `${page.title} | Dittra`,
    description: page.description,
  }
}

export default function SolutionPage({ params }: SolutionsPageProps) {
  const page = solutionPages[params.slug as SolutionSlug]

  if (!page) {
    notFound()
  }

  const PageComponent = page.component
  return <PageComponent />
}
