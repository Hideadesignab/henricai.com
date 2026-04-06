import type { Metadata } from 'next'
import { Inter, Playfair_Display, Tinos, Red_Rose } from 'next/font/google'
import { ConditionalHeader } from '@/components/ConditionalHeader'
import { ConditionalFooter } from '@/components/ConditionalFooter'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const tinos = Tinos({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-canela',
  display: 'swap',
})

const redRose = Red_Rose({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-red-rose',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Henric',
    template: 'Henric | %s',
  },
  description: 'Document intelligence for real estate',
  openGraph: {
    title: 'Henric',
    description: 'Document intelligence for real estate',
    siteName: 'Henric',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henric',
    description: 'Document intelligence for real estate',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${tinos.variable} ${redRose.variable}`}>
      <body>
        <ConditionalHeader />
        <main id="main-content" style={{ paddingTop: '48px' }}>
          {children}
        </main>
        <ConditionalFooter />
      </body>
    </html>
  )
}
