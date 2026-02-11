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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="pt-4 flex justify-center">
        <div className="w-full max-w-[1400px] px-4">
          
          <div
            className={cn(
              `
              px-6 py-3
              border
              transition-all duration-300
              backdrop-blur-xl
              `,
              mobileMenuOpen ? `rounded-2xl` : `rounded-full`,
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
              
              {/* Logo */}
              <Link
                href="/"
                className="text-[1.3rem] font-bold tracking-tight text-[#011F4B]"
              >
                VASUDEV RAO
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
                        transition-all duration-200
                        hover:bg-blue-100/50
                      "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  )
}
