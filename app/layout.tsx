import type { Metadata } from 'next'
import { Inter, Playfair_Display, Tinos, Red_Rose, Libre_Caslon_Text } from 'next/font/google'
import { ConditionalHeader } from '@/components/ConditionalHeader'
import { ConditionalFooter } from '@/components/ConditionalFooter'
import { CookieBanner } from '@/components/CookieBanner'

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

const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-libre-caslon',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Henric',
    template: 'Henric | %s',
  },
  description: 'Henric is document intelligence for real estate — powering professionals to search, extract, and understand every document with precision. Purpose-built for commercial real estate.',
  openGraph: {
    title: 'Henric — Document intelligence for real estate',
    description: 'Henric is document intelligence for real estate — powering professionals to search, extract, and understand every document with precision. Purpose-built for commercial real estate.',
    type: 'website',
    url: 'https://henricai.com',
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
    card: 'summary',
    title: 'Henric — Document intelligence for real estate',
    description: 'Henric is document intelligence for real estate — powering professionals to search, extract, and understand every document with precision. Purpose-built for commercial real estate.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${tinos.variable} ${redRose.variable} ${libreCaslon.variable}`}>
      <body>
        <ConditionalHeader />
        <main id="main-content" style={{ paddingTop: '40px' }}>
          {children}
        </main>
        <ConditionalFooter />
        <CookieBanner />
      </body>
    </html>
  )
}
