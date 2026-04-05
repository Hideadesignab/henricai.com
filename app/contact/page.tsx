'use client'

import { useEffect, useState } from 'react'
import { ContactForm } from '@/components/ContactForm'
import styles from './page.module.css'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay then fade in
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className={`${styles.page} ${isVisible ? styles.visible : styles.hidden}`}>
      {/* Left Column */}
      <div className={styles.left}>
        <div className={styles.content}>
          <h1 className={styles.headline}>Contact us</h1>
          <p className={styles.description}>
            Have a question, idea, or just want to say hello? Fill out the form
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.right}>
        <ContactForm />
      </div>
    </main>
  )
}
