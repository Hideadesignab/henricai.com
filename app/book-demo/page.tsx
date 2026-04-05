'use client'

import { useEffect, useState } from 'react'
import { BookDemoForm } from '@/components/BookDemoForm'
import styles from './page.module.css'

export default function BookDemoPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className={`${styles.page} ${isVisible ? styles.visible : styles.hidden}`}>
      <BookDemoForm />
    </main>
  )
}
