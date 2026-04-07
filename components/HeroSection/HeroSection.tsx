'use client'

import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import styles from './HeroSection.module.css'

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    setMounted(true)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const videoCallbackRef = useCallback((video: HTMLVideoElement | null) => {
    if (!video) return
    video.muted = true
    video.playsInline = true
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    const forcePlay = () => {
      video.muted = true
      video.play().catch(() => {})
    }

    video.addEventListener('loadedmetadata', forcePlay, { once: true })
    video.addEventListener('canplay', forcePlay, { once: true })

    if (video.readyState >= 3) {
      forcePlay()
    }

    video.load()
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
        {mounted && (
          <video
            key={isMobile ? 'mobile' : 'desktop'}
            ref={videoCallbackRef}
            className={styles.heroImage}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source
              src={isMobile ? '/henric-hero-mobile.mp4' : '/henric-hero.mp4'}
              type="video/mp4"
            />
          </video>
        )}
      </div>
    </section>
  )
}
