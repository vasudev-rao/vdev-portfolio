import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

import { Providers } from '@/app/providers'
import ClientLayout from '@/app/ClientLayout'

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
   Root Layout (SERVER)
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
      <body className="font-inter antialiased relative">
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  )
}
