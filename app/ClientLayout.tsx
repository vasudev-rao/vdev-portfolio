'use client'

import dynamic from 'next/dynamic'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

// ✅ Lazy-load heavy visual effects (LCP + CLS win)
const FloatingParticles = dynamic(
  () => import('@/components/FloatingParticles'),
  { ssr: false }
)

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Progress bar (lightweight, ok for immediate load) */}
      <ScrollProgress />

      {/* Visual-only enhancement – defer */}
      <FloatingParticles />

      {/* Fixed Navbar */}
      <Navbar />

      {/* ✅ Reserve navbar height to prevent CLS */}
      <div aria-hidden className="h-32" />

      {/* Main content */}
      <main className="relative z-10 min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  )
}
