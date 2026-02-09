import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingParticles from '@/components/FloatingParticles'
import { Providers } from '@/app/providers'

/* ================================
   Fonts
================================ */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

/* ================================
   SEO Metadata
================================ */
export const metadata: Metadata = {
  title: 'Vasudev Rao | Senior Data Engineer | Cloud | AI | Big Data',
  description:
    'Senior Data Engineer with 6+ years of experience building high-performance data platforms, real-time streaming pipelines, AI/ML-ready architectures, and cloud-native systems across AWS and GCP.',
  keywords: [
    'Data Engineer',
    'Senior Data Engineer',
    'Cloud Engineer',
    'AI Engineer',
    'Databricks',
    'PySpark',
    'Snowflake',
    'BigQuery',
    'AWS',
    'GCP',
    'Data Architecture',
    'MLOps',
  ],
  authors: [{ name: 'Vasudev Rao' }],
  creator: 'Vasudev Rao',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vasudevrao.com',
    title: 'Vasudev Rao | Senior Data Engineer',
    description:
      'Building scalable data platforms, AI-ready pipelines, and next-gen cloud architectures',
    siteName: 'Vasudev Rao Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vasudev Rao | Senior Data Engineer',
    description:
      'Building scalable data platforms, AI-ready pipelines, and next-gen cloud architectures',
  },
  robots: {
    index: true,
    follow: true,
  },
}

/* ================================
   Root Layout
================================ */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vasudev Rao',
              jobTitle: 'Senior Data Engineer',
              description:
                'Senior Data Engineer specializing in cloud data platforms, AI/ML pipelines, and modern data architectures',
              url: 'https://vasudevrao.com',
              sameAs: [
                'https://github.com/vasudevrao',
                'https://linkedin.com/in/vasudevrao',
              ],
              knowsAbout: [
                'Data Engineering',
                'Cloud Computing',
                'Big Data',
                'Machine Learning',
                'Databricks',
                'PySpark',
                'Snowflake',
                'AWS',
                'GCP',
              ],
            }),
          }}
        />
      </head>

      <body className="font-inter antialiased relative">
        <Providers>
          {/* Global UI Enhancements */}
          <ScrollProgress />
          <FloatingParticles />

          {/* Layout */}
          <Navbar />

          {/* ✅ FIXED: offset for fixed navbar */}
          <main className="relative z-10 min-h-screen pt-32">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
