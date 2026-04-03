'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const footerLinks = {
  Capabilities: [
    { name: 'Consulting', href: '/capabilities/consulting' },
    { name: 'AI Agents', href: '/capabilities/ai-agents' },
    { name: 'Custom Software', href: '/capabilities/custom-software' },
  ],
  Solutions: [
    { name: 'Use Cases', href: '/solutions/use-cases' },
    { name: 'AI Accelerators', href: '/solutions/ai-accelerators' },
  ],
  Company: [
    { name: 'Insights', href: '/#success-stories' },
    { name: 'About', href: '/#team' },
    { name: 'Contact', href: '/contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@dittra.com' },
]

export function Footer() {
  return (
    <footer className="relative bg-slate-100 dark:bg-[#060B14] border-t border-slate-200 dark:border-cyan-500/15 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-10" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/8 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-10 mb-12 md:mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-cyan-600 dark:text-cyan-400 text-sm mb-6 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors duration-300 text-sm group relative inline-block"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <h3 className="font-bold text-cyan-600 dark:text-cyan-400 text-sm mb-6 uppercase tracking-wider">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-slate-500 dark:text-slate-400 max-w-md">
              <p>Mon–Sat : 8:00 AM – 5:00 PM</p>
              <p>5900 Balcones Drive STE 100, Austin, TX 78731, USA</p>
              <p>
                <a
                  href="mailto:sales@dittra.com"
                  className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors"
                >
                  sales@dittra.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+15127618208"
                  className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-200 transition-colors"
                >
                  +1 512 761 8208
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-slate-200 dark:border-cyan-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
              <Link href="/" className="relative h-8 w-[80px] sm:w-[100px] group">
                <Image
                  src="/logo.svg"
                  alt="Dittra"
                  fill
                  className="object-contain object-left brightness-0 dark:invert group-hover:opacity-80 transition-opacity"
                  unoptimized
                />
              </Link>
              <p className="text-slate-400 dark:text-slate-500 text-xs">
                © {new Date().getFullYear()} Dittra. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link
                href="/contact#book-consultation"
                className="px-4 sm:px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-md hover:shadow-cyan-500/30"
              >
                BOOK CONSULTATION
              </Link>

              <div className="flex space-x-4 sm:space-x-5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="relative text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon className="w-5 h-5 relative z-10" aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
