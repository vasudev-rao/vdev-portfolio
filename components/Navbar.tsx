'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* HERO-ALIGNED WIDTH */}
      <div className="pt-4 flex justify-center">
        <div className="w-full max-w-[1200px] px-4">
          <motion.div
            animate={{
              backgroundColor: scrolled
                ? 'rgba(219,234,254,0.42)'
                : 'rgba(219,234,254,0.32)',
              backdropFilter: 'blur(26px)',
              WebkitBackdropFilter: 'blur(26px)',
              boxShadow: scrolled
                ? '0 14px 40px rgba(1,31,75,0.16)'
                : '0 8px 28px rgba(1,31,75,0.12)',
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="
              rounded-full
              px-6 py-3
              border border-blue-200/50
            "
          >
            <div className="flex items-center justify-between">

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <span className="text-[1.3rem] font-bold tracking-tight text-[#011F4B]">
                  VASUDEV RAO
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        `
                        px-4 py-2
                        rounded-full
                        text-sm font-medium
                        transition-all duration-300
                        `,
                        isActive
                          ? `
                            bg-blue-200/50
                            text-[#011F4B]
                            shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]
                          `
                          : `
                            text-[#011F4B]
                            hover:bg-blue-100/50
                            hover:-translate-y-[1px]
                          `
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-[#011F4B]"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-blue-200/30">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="
                        px-4 py-2
                        rounded-lg
                        text-sm font-medium
                        text-[#011F4B]
                        transition-all
                        hover:bg-blue-100/50
                      "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
