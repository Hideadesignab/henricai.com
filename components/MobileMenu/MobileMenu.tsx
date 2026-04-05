'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Link from 'next/link'
import styles from './MobileMenu.module.css'

// ────────────────────────────────────────────
// Types
// ────────────────────────────────────────────

interface SubLink {
  label: string
  description: string
  href: string
  soon?: boolean
  sectionLabel?: string
}

interface PreviewCard {
  title: string
  description: string
  href: string
  image?: string
}

interface MenuItem {
  label: string
  href?: string
  links?: SubLink[]
  card?: PreviewCard
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  dark?: boolean
  variant?: 'light' | 'dark' | 'green'
}

// ────────────────────────────────────────────
// Menu data
// ────────────────────────────────────────────

const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Product',
    links: [
      { label: 'Overview', description: 'Where real estate operates.', href: '/product' },
      { label: 'Assistant', description: 'Your buildings, answerable.', href: '/product/assistant' },
      { label: 'Vault', description: 'All your building intelligence, in one place.', href: '/product/vault' },
      { label: 'Trace Table', description: 'Turn any document stack into structured intelligence.', href: '/product/trace-table' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { label: 'Asset Management', description: 'Strategic visibility. Not just a portfolio overview.', href: '/solutions/asset-managers' },
      { label: 'Property Management', description: 'Operational excellence. Zero-error administration.', href: '/solutions/property-managers' },
      { label: 'Investment & Acquisitions', description: 'Deal-speed due diligence. Analyze at the speed of thought.', href: '/solutions/investment-acquisitions' },
      { label: 'CRE', description: 'Master the complexity.', href: '/solutions/commercial-property-companies' },
      { label: 'Funds & REITs', description: 'Institutional-grade intelligence for large-scale portfolios.', href: '/solutions/fund-managers' },
      { label: 'Lease Administration', description: 'Automated extraction of indexation, options, and key dates.', href: '/solutions/lease-administration' },
      { label: 'Due Diligence', description: 'Instant risk-flagging across thousands of documents.', href: '/solutions/due-diligence' },
      { label: 'Audit & Compliance', description: 'Ensure every lease aligns with your internal standards.', href: '/solutions/audit-compliance' },
    ],
  },
  {
    label: 'Security',
    href: '/security',
  },
  {
    label: 'About',
    href: '/about',
  },
]

// ────────────────────────────────────────────
// Chevron icon
// ────────────────────────────────────────────

function ChevronRight({ className, stroke }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none">
      <polyline points="9 6 15 12 9 18" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ────────────────────────────────────────────
// Submenu accordion item
// ────────────────────────────────────────────

function AccordionItem({
  item,
  isExpanded,
  onToggle,
  onNavigate,
  dark,
  isMenuOpen,
}: {
  item: MenuItem
  isExpanded: boolean
  onToggle: () => void
  onNavigate: () => void
  dark?: boolean
  isMenuOpen: boolean
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [isExpanded])

  const hasSubmenu = !!item.links
  const chevronStroke = dark ? '#ffffff' : '#1a1a1a'

  if (!hasSubmenu) {
    return (
      <div className={`${styles.accordionItem} ${dark ? styles.accordionItemDark : ''}`}>
        <Link
          href={item.href || '#'}
          className={styles.navLink}
          onClick={onNavigate}
          tabIndex={isMenuOpen ? 0 : -1}
        >
          <span className={`${styles.itemLabel} ${dark ? styles.itemLabelDark : ''}`}>
            {item.label}
          </span>
        </Link>
      </div>
    )
  }

  return (
    <div className={`${styles.accordionItem} ${dark ? styles.accordionItemDark : ''}`}>
      <button
        className={styles.accordionHeader}
        onClick={onToggle}
        aria-expanded={isExpanded}
        tabIndex={isMenuOpen ? 0 : -1}
      >
        <span className={`${styles.itemLabel} ${dark ? styles.itemLabelDark : ''}`}>
          {item.label}
        </span>
        <ChevronRight
          stroke={chevronStroke}
          className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
        />
      </button>

      <div
        ref={contentRef}
        className={styles.submenu}
        style={{
          height: isExpanded ? `${height}px` : '0px',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        {item.links?.map((link, i) => (
          <Link
            key={link.href}
            href={link.soon ? '#' : link.href}
            className={`${styles.linkItem} ${link.soon ? styles.linkDisabled : ''}`}
            onClick={link.soon ? undefined : onNavigate}
            tabIndex={isMenuOpen && isExpanded ? 0 : -1}
            aria-disabled={link.soon}
            style={{
              transform: isExpanded ? 'translateY(0)' : 'translateY(-6px)',
              opacity: isExpanded ? 1 : 0,
              transition: `opacity 0.3s cubic-bezier(0.25,0.1,0.25,1) ${0.04 * (i + 1)}s, transform 0.4s cubic-bezier(0.25,0.1,0.25,1) ${0.04 * (i + 1)}s`,
            }}
          >
            <div className={`${styles.linkTitle} ${dark ? styles.linkTitleDark : ''}`}>
              {link.label}
              {link.soon && (
                <span className={`${styles.soonBadge} ${dark ? styles.soonBadgeDark : ''}`}>
                  Soon
                </span>
              )}
            </div>
            <div className={`${styles.linkDescription} ${dark ? styles.linkDescriptionDark : ''}`}>
              {link.description}
            </div>
          </Link>
        ))}

        {item.card && (
          <Link
            href={item.card.href}
            className={styles.cardItem}
            onClick={onNavigate}
            tabIndex={isMenuOpen && isExpanded ? 0 : -1}
            style={{
              transform: isExpanded ? 'translateY(0)' : 'translateY(-6px)',
              opacity: isExpanded ? 1 : 0,
              transition:
                'opacity 0.3s cubic-bezier(0.25,0.1,0.25,1) 0.24s, transform 0.4s cubic-bezier(0.25,0.1,0.25,1) 0.24s',
            }}
          >
            <div
              className={`${styles.cardImage} ${dark ? styles.cardImageDark : ''}`}
              style={
                item.card.image
                  ? {
                      backgroundImage: `url(${item.card.image})`,
                    }
                  : undefined
              }
            />
            <div className={`${styles.cardTitle} ${dark ? styles.cardTitleDark : ''}`}>
              {item.card.title}
            </div>
            <div className={`${styles.cardDescription} ${dark ? styles.cardDescriptionDark : ''}`}>
              {item.card.description}
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

// ────────────────────────────────────────────
// Main component
// ────────────────────────────────────────────

export function MobileMenu({ isOpen, onClose, dark = false, variant = 'light' }: MobileMenuProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Reset accordion when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedIndex(null)
    }
  }, [isOpen])

  const handleAccordionToggle = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index))
  }, [])

  return (
    <div
      className={`${styles.overlay} ${dark ? styles.overlayDark : ''} ${variant === 'green' ? styles.overlayGreen : ''}`}
      data-open={isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Spacer to clear the fixed header with hamburger/X */}
      <div className={styles.topBar} />

      {/* Menu items */}
      <div className={styles.menuList}>
        {MENU_ITEMS.map((item, i) => (
          <AccordionItem
            key={item.label}
            item={item}
            isExpanded={expandedIndex === i}
            onToggle={() => handleAccordionToggle(i)}
            onNavigate={onClose}
            dark={dark}
            isMenuOpen={isOpen}
          />
        ))}
        <div className={`${styles.lastBorder} ${dark ? styles.lastBorderDark : ''}`} />
      </div>

      {/* Bottom CTA bar */}
      <div className={styles.bottomBar}>
        <Link
          href="/book-demo"
          className={`${styles.ctaButton} ${dark ? styles.ctaButtonDark : ''}`}
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
        >
          Book a Demo
        </Link>
        <a
          href="https://auth.eu.henricai.com"
          className={`${styles.loginButton} ${dark ? styles.loginButtonDark : ''}`}
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </div>
    </div>
  )
}
