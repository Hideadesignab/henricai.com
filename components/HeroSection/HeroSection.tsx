'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section className={styles.hero} data-hero>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Real estate, without friction.
        </h1>

        <div className={styles.buttonRow}>
          <Link href="/book-demo" className={styles.ctaButton}>
            Book a demo
          </Link>
        </div>
      </div>

      <div className={styles.heroImageWrapper} data-hero-image>
        <video
          className={styles.heroImage}
          src={isMobile ? '/henric-hero-mobile.mp4' : '/henric-hero.mp4'}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  )
}
