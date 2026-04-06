'use client'

import { useState, useEffect } from 'react'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <div className={styles.banner} data-visible={visible}>
      <div className={styles.inner}>
        <p className={styles.text}>We use cookies to improve your experience.</p>
        <div className={styles.buttons}>
          <button type="button" className={styles.decline} onClick={handleDecline}>
            Decline
          </button>
          <button type="button" className={styles.accept} onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
