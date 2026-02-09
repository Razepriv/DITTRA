import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dittra - AI-Powered Digital Transformation | Finance, Sales & Enterprise Solutions',
  description: 'Leading AI solutions provider specializing in financial intelligence, sales acceleration, and end-to-end digital transformation. Transform your enterprise with proven AI technology.',
  keywords: 'AI solutions, digital transformation, AI for finance, AI for sales, enterprise AI, technology consulting, AI implementation',
  authors: [{ name: 'Dittra' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/logo-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dittra.com',
    title: 'Dittra - The Future of AI-Powered Business Solutions',
    description: 'Transform your enterprise with cutting-edge AI solutions',
    siteName: 'Dittra',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Dittra - AI-Powered Digital Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dittra - AI Transformation Leaders',
    description: 'Enterprise AI solutions that deliver measurable results',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans">
        {/* Skip to main content for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
