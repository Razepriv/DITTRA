'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'

const rootLinks = [
  { name: 'HOME', href: '/' },
  { name: 'INSIGHTS', href: '/#success-stories' },
  { name: 'ABOUT', href: '/#team' },
  { name: 'CONTACT', href: '/contact' },
]

const capabilitiesLinks = [
  { name: 'Consulting', href: '/capabilities/consulting' },
  { name: 'AI Agents', href: '/capabilities/ai-agents' },
  { name: 'Custom Software', href: '/capabilities/custom-software' },
]

const solutionsLinks = [
  { name: 'Use Cases', href: '/solutions/use-cases' },
  { name: 'AI Accelerators', href: '/solutions/ai-accelerators' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<null | 'capabilities' | 'solutions'>(null)
  const [mobileCapabilitiesOpen, setMobileCapabilitiesOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'border-b border-blue-300/20 bg-[#0A0F1C]/85 backdrop-blur-2xl' 
          : 'bg-[#0A0F1C]/65 backdrop-blur-xl'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60" />
      
      <nav className="container mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative h-8 w-[100px] lg:h-10 lg:w-[120px]"
            >
              <Image
                src="/logo.svg"
                alt="Dittra"
                fill
                className="object-contain object-left brightness-0 invert group-hover:brightness-110 transition-all duration-300"
                priority
                unoptimized
              />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="relative text-sm font-semibold uppercase tracking-[0.1em] text-slate-200 transition-colors duration-300 hover:text-white group"
            >
              HOME
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('capabilities')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="group inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.1em] text-slate-200 transition-colors hover:text-white"
                onFocus={() => setOpenDropdown('capabilities')}
              >
                Capabilities
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>

              <AnimatePresence>
                {openDropdown === 'capabilities' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-8 min-w-[220px] rounded-xl bg-white p-2 shadow-[0_12px_30px_rgba(15,23,42,0.22)]"
                  >
                    {capabilitiesLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="group inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.1em] text-slate-200 transition-colors hover:text-white"
                onFocus={() => setOpenDropdown('solutions')}
              >
                Solutions
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>

              <AnimatePresence>
                {openDropdown === 'solutions' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-8 min-w-[220px] rounded-xl bg-white p-2 shadow-[0_12px_30px_rgba(15,23,42,0.22)]"
                  >
                    {solutionsLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {rootLinks.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-semibold uppercase tracking-[0.1em] text-slate-200 transition-colors duration-300 hover:text-white group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/contact#book-consultation"
              className="ml-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-slate-950 transition-all duration-300 hover:from-amber-300 hover:to-amber-400"
            >
              GET STARTED
            </Link>
          </div>

          <button
            type="button"
            className="text-cyan-200 transition-colors hover:text-cyan-100 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="mt-6 border-t border-blue-300/25 pb-4 pt-4 lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="py-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </Link>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <button
                    type="button"
                    onClick={() => setMobileCapabilitiesOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-[0.12em] text-slate-100"
                  >
                    Capabilities
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileCapabilitiesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileCapabilitiesOpen ? (
                    <div className="mt-3 space-y-2">
                      {capabilitiesLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-2 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <button
                    type="button"
                    onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-[0.12em] text-slate-100"
                  >
                    Solutions
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileSolutionsOpen ? (
                    <div className="mt-3 space-y-2">
                      {solutionsLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-2 py-2 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>

                {rootLinks.slice(1).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="py-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-200 transition-colors hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact#book-consultation"
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-slate-950"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GET STARTED
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
