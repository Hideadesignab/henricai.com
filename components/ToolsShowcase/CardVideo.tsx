'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import styles from './ToolsShowcase.module.css'

interface CardVideoProps {
  desktopSrc: string
  mobileSrc?: string
  startOffset?: number
  scale?: number
  mobileScale?: number
  mobileLoop?: boolean
  playOnce?: boolean
  hideOnMobile?: boolean
}

export function CardVideo({ desktopSrc, mobileSrc, startOffset = 0, scale, mobileScale, mobileLoop = false, playOnce = false, hideOnMobile = false }: CardVideoProps) {
  const [isDesktop, setIsDesktop] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hovering = useRef(false)
  const playing = useRef(false)
  const hasCompleted = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 601px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (startOffset > 0) {
        videoRef.current.currentTime = startOffset
      }
      if (isDesktop) {
        videoRef.current.pause()
      }
    }
  }, [isDesktop, startOffset])

  const handleMouseEnter = useCallback(() => {
    hovering.current = true
    if (isDesktop && videoRef.current && !playing.current && !(playOnce && hasCompleted.current)) {
      playing.current = true
      videoRef.current.currentTime = startOffset
      videoRef.current.play()
    }
  }, [isDesktop, startOffset, playOnce])

  const handleMouseLeave = useCallback(() => {
    hovering.current = false
  }, [])

  const handleEnded = useCallback(() => {
    if (!isDesktop) return
    playing.current = false
    hasCompleted.current = true
    if (hovering.current && videoRef.current && !playOnce) {
      playing.current = true
      videoRef.current.currentTime = startOffset
      videoRef.current.play()
    }
  }, [isDesktop, startOffset, playOnce])

  const src = isDesktop ? desktopSrc : (mobileSrc ?? desktopSrc)

  if (!isDesktop && hideOnMobile) return null

  return (
    <video
      ref={videoRef}
      key={src}
      autoPlay={!isDesktop}
      loop={!isDesktop && mobileLoop}
      muted
      playsInline
      className={styles.video}
      style={{ transform: `scale(${(isDesktop ? scale : mobileScale) ?? 1})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onEnded={handleEnded}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
