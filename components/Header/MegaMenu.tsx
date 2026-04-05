'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './MegaMenu.module.css'
import { productDropdown, solutionsDropdown, aboutDropdown, newsDropdown } from './dropdownData'

interface MegaMenuProps {
  activeDropdown: string | null
  onClose: () => void
  variant?: 'light' | 'dark' | 'green'
}

export function MegaMenu({ activeDropdown, onClose, variant = 'light' }: MegaMenuProps) {
  const [renderedDropdown, setRenderedDropdown] = useState<string | null>(null)
  const isOpen = activeDropdown !== null

  // Update rendered dropdown when opening (not when closing)
  // This keeps content in DOM during close animation
  useEffect(() => {
    if (activeDropdown !== null) {
      setRenderedDropdown(activeDropdown)
    }
  }, [activeDropdown])

  const getDropdownData = () => {
    switch (renderedDropdown) {
      case 'product':
        return productDropdown
      case 'solutions':
        return solutionsDropdown
      case 'about':
        return aboutDropdown
      case 'news':
        return newsDropdown
      default:
        return null
    }
  }

  const data = getDropdownData()
  return (
    <div className={`${styles.megaMenu} ${variant === 'dark' ? styles.dark : ''} ${variant === 'green' ? styles.green : ''}`} data-open={isOpen}>
      <div className={styles.megaMenuInner}>
      {data && (
        <div className={styles.container}>
          <div className={styles.linksArea}>
            {data.columns.map((column, colIndex) => (
                <div key={colIndex} className={styles.linkColumn}>
                  {column.sectionLabel && (
                    <p className={styles.sectionLabel}>{column.sectionLabel}</p>
                  )}
                  <div className={styles.linksList}>
                    {column.links.map((link, linkIndex) =>
                      link.comingSoon ? (
                        <span key={linkIndex} className={`${styles.linkItem} ${styles.linkItemDisabled}`}>
                          <p className={styles.linkTitle}>
                            {link.title}
                            <span className={styles.comingSoonBadge}>Soon</span>
                          </p>
                          <p className={styles.linkSubtitle}>{link.subtitle}</p>
                        </span>
                      ) : (
                        <Link key={linkIndex} href={link.href} className={styles.linkItem} onClick={onClose}>
                          <p className={styles.linkTitle}>
                            {link.title}
                            <span className={styles.arrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5 8h8M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span>
                          </p>
                          <p className={styles.linkSubtitle}>{link.subtitle}</p>
                        </Link>
                      )
                    )}
                  </div>
                </div>
            ))}
          </div>

          {data.cards.length > 0 && (
            <div className={styles.cardsArea}>
              <div className={styles.cardsGrid}>
                {data.cards.map((card, cardIndex) => (
                  <Link key={cardIndex} href={'href' in card && card.href ? card.href : '#'} className={styles.card} onClick={onClose}>
                    <div className={styles.cardImage} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  )
}
