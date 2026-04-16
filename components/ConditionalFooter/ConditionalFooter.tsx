'use client'

import { usePathname } from 'next/navigation'
import { Footer } from '@/components/Footer'

const HIDE_FOOTER_ROUTES = ['/book-demo', '/contact']
const comingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

export function ConditionalFooter() {
  const pathname = usePathname()

  if (comingSoon && pathname === '/') return null
  if (HIDE_FOOTER_ROUTES.includes(pathname)) return null

  return <Footer />
}
