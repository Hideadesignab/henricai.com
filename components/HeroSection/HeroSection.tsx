'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    setMounted(true)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (mounted && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [mounted, isMobile])

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
        {mounted && (
          <video
            ref={videoRef}
            className={styles.heroImage}
            src={isMobile ? '/henric-hero-mobile.mp4' : '/henric-hero.mp4'}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        )}
      </div>
    </section>
  )
}
