'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './TabbedFeatures.module.css'

const tabs = [
  { id: 'draft', label: 'Draft', headline: 'Draft any document from your property data' },
  { id: 'extract', label: 'Extract', headline: 'Extract every term from every contract' },
  { id: 'manage', label: 'Manage', headline: 'Organize projects and ask your files anything' },
]

const CYCLE_DURATION = 6000 // 6 seconds

export function TabbedFeatures() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const pausedProgressRef = useRef(0)

  const animate = useCallback((timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp
    }

    const elapsed = timestamp - startTimeRef.current
    const newProgress = Math.min((pausedProgressRef.current + elapsed) / CYCLE_DURATION, 1)

    setProgress(newProgress)

    if (newProgress >= 1) {
      // Move to next tab
      setActiveIndex((prev) => (prev + 1) % tabs.length)
      setProgress(0)
      pausedProgressRef.current = 0
      startTimeRef.current = timestamp
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (!isPaused) {
      startTimeRef.current = null
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused, animate])

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
    setProgress(0)
    pausedProgressRef.current = 0
    startTimeRef.current = null
  }

  const togglePause = () => {
    if (isPaused) {
      // Resuming - keep the progress where it was
      setIsPaused(false)
    } else {
      // Pausing - save current progress
      pausedProgressRef.current = progress * CYCLE_DURATION
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      setIsPaused(true)
    }
  }

  return (
    <section className={styles.section} data-theme="green">
      <div className={styles.container}>
        {/* Tabs Row */}
        <div className={styles.tabsRow}>
          <div className={styles.tabs}>
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${index === activeIndex ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(index)}
                type="button"
              >
                {index === activeIndex && (
                  <span
                    className={styles.tabFill}
                    style={{ width: `${progress * 100}%` }}
                  />
                )}
                <span className={styles.tabText}>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Headline */}
        <h2 className={styles.headline}>
          {tabs[activeIndex].headline}
        </h2>

        {/* Placeholder Area */}
        <div className={styles.placeholderWrapper}>
          <div className={styles.placeholder} />
        </div>
      </div>
    </section>
  )
}
