// Create this file: src/lib/structured-data.ts

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dittra',
  url: 'https://dittra.com',
  logo: 'https://dittra.com/logo.svg',
  description: 'AI-powered automation and intelligent solutions for enterprise growth',
  foundingDate: '2016',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@dittra.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/dittra',
    'https://twitter.com/dittra',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dittra',
  url: 'https://dittra.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://dittra.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}
