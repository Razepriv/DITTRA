'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/lib/theme'

const capabilitiesLinks = [
  { name: 'Consulting', href: '/capabilities/consulting' },
  { name: 'AI Agents', href: '/capabilities/ai-agents' },
  { name: 'Custom Software', href: '/capabilities/custom-software' },
]

const solutionsLinks = [
  { name: 'Use Cases', href: '/solutions/use-cases' },
  { name: 'AI Accelerators', href: '/solutions/ai-accelerators' },
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
]

export function Header() {
  const { theme, toggle } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<null | 'capabilities' | 'solutions' | 'company'>(null)
  const [mobileCapabilitiesOpen, setMobileCapabilitiesOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkClass =
    'relative text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-200 hover:text-cyan-400 text-slate-700 dark:text-white group'

  const underline =
    'absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full'

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200 dark:border-cyan-500/15 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl shadow-sm dark:shadow-none'
          : 'border-b border-transparent dark:border-white/5 bg-white/80 dark:bg-slate-950/90 backdrop-blur-xl'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

      <nav className="container mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="relative h-8 w-[100px] lg:h-10 lg:w-[120px]"
            >
              <Image
                src="/logo.svg"
                alt="Dittra"
                fill
                className="object-contain object-left dark:brightness-0 dark:invert brightness-0 group-hover:opacity-80 transition-opacity duration-200"
                priority
                unoptimized
              />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            <Link href="/" className={navLinkClass}>
              HOME
              <span className={underline} />
            </Link>

            {/* Capabilities dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('capabilities')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`${navLinkClass} inline-flex items-center gap-1`}
                onFocus={() => setOpenDropdown('capabilities')}
                onBlur={() => setOpenDropdown(null)}
              >
                CAPABILITIES
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'capabilities' ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openDropdown === 'capabilities' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-9 min-w-[210px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-1.5 shadow-xl shadow-black/10 dark:shadow-black/40"
                  >
                    {capabilitiesLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-white/8 hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('solutions')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`${navLinkClass} inline-flex items-center gap-1`}
                onFocus={() => setOpenDropdown('solutions')}
                onBlur={() => setOpenDropdown(null)}
              >
                SOLUTIONS
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-9 min-w-[210px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-1.5 shadow-xl shadow-black/10 dark:shadow-black/40"
                  >
                    {solutionsLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-white/8 hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/#success-stories" className={navLinkClass}>
              INSIGHTS
              <span className={underline} />
            </Link>

            {/* Company dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('company')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`${navLinkClass} inline-flex items-center gap-1`}
                onFocus={() => setOpenDropdown('company')}
                onBlur={() => setOpenDropdown(null)}
              >
                COMPANY
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === 'company' ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-9 min-w-[180px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-1.5 shadow-xl shadow-black/10 dark:shadow-black/40"
                  >
                    {companyLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-white/8 hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className={navLinkClass}>
              CONTACT
              <span className={underline} />
            </Link>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-white/15 bg-white/60 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </button>

            <Link
              href="/contact#book-consultation"
              className="ml-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-slate-950 shadow-md shadow-amber-500/20 transition-all duration-200 hover:from-amber-300 hover:to-amber-400 hover:shadow-amber-400/30 hover:-translate-y-0.5"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Theme toggle (mobile) */}
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 dark:border-white/15 bg-white/60 dark:bg-white/5 text-slate-600 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              className="text-slate-700 dark:text-slate-200 transition-colors hover:text-cyan-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="mt-5 border-t border-slate-200 dark:border-white/10 pb-4 pt-5 lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28 }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className="py-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </Link>

                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-3">
                  <button
                    type="button"
                    onClick={() => setMobileCapabilitiesOpen(p => !p)}
                    className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-100"
                  >
                    CAPABILITIES
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileCapabilitiesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileCapabilitiesOpen && (
                    <div className="mt-3 space-y-1">
                      {capabilitiesLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/8 hover:text-cyan-600 dark:hover:text-cyan-400"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-3">
                  <button
                    type="button"
                    onClick={() => setMobileSolutionsOpen(p => !p)}
                    className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-100"
                  >
                    SOLUTIONS
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileSolutionsOpen && (
                    <div className="mt-3 space-y-1">
                      {solutionsLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/8 hover:text-cyan-600 dark:hover:text-cyan-400"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {[
                  { name: 'INSIGHTS', href: '/#success-stories' },
                  { name: 'CONTACT', href: '/contact' },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="py-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200 hover:text-cyan-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-3">
                  <button
                    type="button"
                    onClick={() => setMobileCompanyOpen(p => !p)}
                    className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-100"
                  >
                    COMPANY
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileCompanyOpen && (
                    <div className="mt-3 space-y-1">
                      {companyLinks.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/8 hover:text-cyan-600 dark:hover:text-cyan-400"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

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
