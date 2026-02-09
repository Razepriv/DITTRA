'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/#services' },
  { name: 'LEARN', href: '/resources' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'CAREERS', href: '/careers' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/60 backdrop-blur-2xl border-b border-primary-500/20' 
          : 'bg-gray-900/40 backdrop-blur-xl'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60" />
      
      <nav className="container mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary-400 to-cyber-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <button className="ml-4 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-cyber-500 rounded-xl hover:from-primary-400 hover:to-cyber-400 transition-all duration-300 shadow-lg hover:shadow-primary-500/50">
              GET STARTED
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-primary-400 hover:text-primary-300 transition-colors"
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="lg:hidden mt-6 pb-4 border-t border-primary-500/20 pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  className="w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-cyber-500 rounded-xl hover:from-primary-400 hover:to-cyber-400 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GET STARTED
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
