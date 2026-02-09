import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateMetadata(
  title: string,
  description: string,
  keywords?: string,
  image?: string
) {
  return {
    title: `${title} | Dittra`,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: image ? [image] : ['/og-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : ['/og-image.jpg'],
    },
  }
}
