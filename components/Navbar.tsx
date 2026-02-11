'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto'
  }, [mobileMenuOpen])

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="pt-4 flex justify-center">
          <div className="w-full max-w-[1400px] px-4">
            <div
              className={cn(
                `
                rounded-full
                px-6 py-3
                border
                transition-all duration-300
                backdrop-blur-xl
                `,
                scrolled
                  ? `
                    bg-[rgba(219,234,254,0.42)]
                    border-blue-200/50
                    shadow-[0_14px_40px_rgba(1,31,75,0.16)]
                  `
                  : `
                    bg-[rgba(219,234,254,0.32)]
                    border-blue-200/40
                    shadow-[0_8px_28px_rgba(1,31,75,0.12)]
                  `
              )}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center">
                  <span className="text-[1.3rem] font-bold text-[#011F4B]">
                    VASUDEV RAO
                  </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-2 rounded-full text-sm font-medium text-[#011F4B] hover:bg-blue-100/50 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
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
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-sm flex flex-col pt-24 px-6">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-[#011F4B]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
