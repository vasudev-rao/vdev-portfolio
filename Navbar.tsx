'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import LayoutContainer from '@/components/LayoutContainer'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="pt-4">
        <LayoutContainer>
          <div
            className={cn(
              `
              px-5 h-[54px]
              border
              transition-all duration-200
              backdrop-blur-xl
              flex items-center justify-between
              rounded-full
              `,
              scrolled
                ? `
                  bg-[rgba(219,234,254,0.46)]
                  border-blue-300/60
                  shadow-[0_8px_22px_rgba(1,31,75,0.10)]
                `
                : `
                  bg-[rgba(219,234,254,0.34)]
                  border-blue-200/40
                  shadow-[0_5px_14px_rgba(1,31,75,0.08)]
                `
            )}
          >

            {/* Logo (Bolder + Premium) */}
            <Link
              href="/"
              className="group flex items-center whitespace-nowrap select-none"
            >
              <span
                className="
                  text-[1.15rem]
                  font-bold
                  tracking-[-0.02em]
                  text-[#011F4B]
                  transition-opacity duration-200
                  group-hover:opacity-80
                "
              >
                VASUDEVA
              </span>

              <span
                className="
                  text-[1.15rem]
                  font-extrabold
                  tracking-[-0.02em]
                  text-[#011F4B]
                  ml-1.5
                  relative
                "
              >
                RAO
                <span
                  className="
                    absolute left-0 -bottom-[3px]
                    h-[2px] w-0
                    bg-[#011F4B]
                    transition-all duration-300
                    group-hover:w-full
                    opacity-70
                  "
                />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    px-3 h-8
                    rounded-full
                    text-[13.5px] font-medium
                    transition-all duration-150
                    flex items-center
                    text-[#011F4B]/80
                    hover:bg-blue-100/60
                    hover:text-[#011F4B]
                    hover:scale-[1.02]
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#011F4B] p-1.5 hover:bg-blue-100/40 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 border rounded-2xl bg-[rgba(219,234,254,0.70)] backdrop-blur-xl border-blue-200/50 p-3 shadow-lg shadow-blue-900/10">
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      px-4 h-10
                      rounded-xl
                      text-[14px] font-medium
                      text-[#011F4B]/90
                      hover:bg-blue-100/60
                      hover:text-[#011F4B]
                      flex items-center
                      transition-colors
                    "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

        </LayoutContainer>
      </div>
    </nav>
  )
}