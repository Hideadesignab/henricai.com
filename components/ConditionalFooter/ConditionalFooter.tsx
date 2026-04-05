'use client'

import { usePathname } from 'next/navigation'
import { Footer } from '@/components/Footer'

const HIDE_FOOTER_ROUTES = ['/book-demo', '/contact']

export function ConditionalFooter() {
  const pathname = usePathname()

  if (HIDE_FOOTER_ROUTES.includes(pathname)) {
    return null
  }

  return <Footer />
}
