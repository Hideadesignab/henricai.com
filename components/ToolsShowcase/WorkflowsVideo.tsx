'use client'

import { useEffect, useState } from 'react'
import styles from './ToolsShowcase.module.css'

export function WorkflowsVideo() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 601px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <video
      key={isDesktop ? 'desktop' : 'mobile'}
      ref={(el) => {
        if (el) {
          el.muted = true
          el.playsInline = true
          const tryPlay = () => { el.play().catch(() => {}) }
          if (el.readyState >= 2) {
            tryPlay()
          } else {
            el.addEventListener('loadeddata', tryPlay, { once: true })
          }
        }
      }}
      autoPlay
      loop
      muted
      playsInline
      className={styles.video}
    >
      <source src={isDesktop ? '/videos/workflowsdator.mp4' : '/videos/workflowsmobil.mp4'} type="video/mp4" />
    </video>
  )
}
