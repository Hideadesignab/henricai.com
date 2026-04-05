'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/Header'

const HIDE_HEADER_ROUTES: string[] = []

export function ConditionalHeader() {
  const pathname = usePathname()

  if (HIDE_HEADER_ROUTES.includes(pathname)) {
    return null
  }

  return <Header />
}
