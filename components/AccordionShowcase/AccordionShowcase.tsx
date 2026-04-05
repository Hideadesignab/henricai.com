'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './AccordionShowcase.module.css'

interface AccordionItem {
  title: string
  description: string
  imageAlt: string
}

interface AccordionShowcaseProps {
  eyebrow: string
  headline: string
  items: AccordionItem[]
  autoAdvanceDelay?: number
  reversed?: boolean
  backgroundColor?: string
}

export function AccordionShowcase({
  eyebrow,
  headline,
  items,
  autoAdvanceDelay = 5000,
  reversed = false,
  backgroundColor,
}: AccordionShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [key, setKey] = useState(0) // Used to restart CSS animation

  const advanceToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length)
    setKey((prev) => prev + 1)
  }, [items.length])

  // Auto-advance timer
  useEffect(() => {
    const timer = setTimeout(advanceToNext, autoAdvanceDelay)
    return () => clearTimeout(timer)
  }, [activeIndex, key, autoAdvanceDelay, advanceToNext])

  const handleItemClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index)
      setKey((prev) => prev + 1) // Reset animation
    }
  }

  const sectionClasses = `${styles.section} ${reversed ? styles.reversed : ''}`

  return (
    <section className={sectionClasses} style={backgroundColor ? { backgroundColor } : undefined}>
      {/* Image placeholders with crossfade */}
      <div className={styles.imageArea}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.imagePlaceholder} ${index !== activeIndex ? styles.hidden : ''}`}
            role="img"
            aria-label={item.imageAlt}
          />
        ))}
      </div>

      {/* Content area with accordion */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.headline}>{headline}</h2>

        <div className={styles.accordion}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${index === activeIndex ? styles.active : ''}`}
              onClick={() => handleItemClick(index)}
            >
              <button
                type="button"
                className={styles.accordionHeader}
                aria-expanded={index === activeIndex}
              >
                <h3 className={styles.itemTitle}>{item.title}</h3>
              </button>

              {/* Progress bar */}
              <div className={styles.progressBar}>
                <div
                  key={index === activeIndex ? key : 'inactive'}
                  className={styles.progressFill}
                  style={index !== activeIndex ? { width: '0%', animation: 'none' } : undefined}
                />
              </div>

              {/* Description */}
              <div className={styles.descriptionWrapper}>
                <div className={styles.descriptionInner}>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
