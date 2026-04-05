'use client'

import { useState } from 'react'
import styles from './TeamsSection.module.css'

interface TeamsItem {
  title: string
  description: string
}

interface TeamsSectionProps {
  headline: string
  items: TeamsItem[]
}

const placeholderColors = ['#F0EFEB', '#EDECE8', '#F2F1ED', '#EEEDEA', '#F1F0EC']

export default function TeamsSection({ headline, items }: TeamsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingRow}>
          <h2 className={styles.headline}>{headline}</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.accordion}>
            {items.map((item, index) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={index}
                  className={`${styles.item} ${isActive ? styles.active : ''}`}
                >
                  <button
                    type="button"
                    className={styles.itemHeader}
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                  >
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </button>
                  <div className={styles.itemBody}>
                    <div className={styles.itemBodyInner}>
                      <p className={styles.itemDesc}>{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.imagePanel}>
            {items.map((_, index) => (
              <div
                key={index}
                className={`${styles.image} ${index === activeIndex ? styles.imageActive : ''}`}
                style={{ backgroundColor: placeholderColors[index % placeholderColors.length] }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
