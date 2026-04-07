'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { BookDemoForm } from '@/components/BookDemoForm'
import styles from './page.module.css'

export default function BookDemoPage() {
  const [isVisible, setIsVisible] = useState(false)
  const pageRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const fit = useCallback(() => {
    const page = pageRef.current
    const wrapper = wrapperRef.current
    if (!page || !wrapper) return

    wrapper.style.transform = 'none'

    const cs = getComputedStyle(page)
    const availH = window.innerHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)
    const availW = page.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)

    const scale = Math.min(availH / wrapper.scrollHeight, availW / wrapper.scrollWidth, 1)

    wrapper.style.transform = `scale(${scale})`
  }, [])

  useEffect(() => {
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [fit])

  return (
    <main ref={pageRef} className={`${styles.page} ${isVisible ? styles.visible : styles.hidden}`}>
      <div ref={wrapperRef} className={styles.formWrapper}>
        <BookDemoForm />
      </div>
    </main>
  )
}
