'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const footerLinks = {
  Services: [
    { name: 'AI for Finance', href: '/services/ai-finance' },
    { name: 'AI for Sales', href: '/services/ai-sales' },
    { name: 'Technology Accelerator', href: '/services/technology-accelerator' },
    { name: 'End-to-End Solutions', href: '/services/end-to-end-solutions' },
    { name: 'Strategic Consulting', href: '/services/strategic-consulting' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Resources', href: '/resources' },
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
    <footer className="relative bg-gray-950 border-t border-primary-500/20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-primary-400 text-sm mb-6 uppercase tracking-wider">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-300 transition-colors duration-300 text-sm group relative inline-block"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-gradient-to-r from-primary-400 to-cyber-400 group-hover:w-full transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-primary-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8">
              <Link href="/" className="relative h-8 w-[100px] group">
                <Image
                  src="/logo.svg"
                  alt="Dittra"
                  fill
                  className="object-contain object-left brightness-0 invert group-hover:brightness-110 transition-all"
                  unoptimized
                />
              </Link>
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Dittra. All rights reserved.
              </p>
            </div>
            
            {/* Social Links with glow effect */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="relative text-gray-400 hover:text-primary-400 transition-colors group"
                  aria-label={`Follow us on ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-primary-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  <social.icon className="w-5 h-5 relative z-10" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
