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
