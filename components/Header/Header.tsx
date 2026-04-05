'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Header.module.css'
import { MegaMenu } from './MegaMenu'
import { MobileMenu } from '../MobileMenu/MobileMenu'

interface NavItem {
  label: string
  href?: string
  hasDropdown?: boolean
  dropdownId?: string
}

const navItems: NavItem[] = [
  { label: 'Product', hasDropdown: true, dropdownId: 'product' },
  { label: 'Solutions', hasDropdown: true, dropdownId: 'solutions' },
  { label: 'Security', href: '/security' },
  { label: 'About', href: '/about' },
]

const HEADER_HEIGHT = 48
const SCROLL_THRESHOLD = 5

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [showCta, setShowCta] = useState(false)
  const [variant, setVariant] = useState<'light' | 'dark' | 'green'>('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const lastScrollY = useRef(0)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const navItemRefs = useRef<Map<string, HTMLElement>>(new Map())

  // Update sliding indicator position
  const updateIndicator = useCallback((label: string | null) => {
    if (!label || !headerRef.current) {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
      return
    }
    const el = navItemRefs.current.get(label)
    if (!el || !headerRef.current) return
    const headerRect = headerRef.current.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    setIndicatorStyle({
      left: elRect.left - headerRect.left,
      width: elRect.width,
      opacity: 1,
    })
  }, [])

  // Update indicator when hovered item changes
  useEffect(() => {
    updateIndicator(hoveredItem)
  }, [hoveredItem, updateIndicator])

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
    setHoveredItem(null)
  }, [pathname])

  // Close dropdown on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
        setHoveredItem(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout)
    }
  }, [closeTimeout])

  // Detect dark/green sections overlapping header
  const detectVariant = useCallback(() => {
    const headerBottom = HEADER_HEIGHT

    // Check green sections first (more specific)
    const greenSections = Array.from(document.querySelectorAll('[data-theme="green"]'))
    for (let i = 0; i < greenSections.length; i++) {
      const rect = greenSections[i].getBoundingClientRect()
      if (rect.top < headerBottom && rect.bottom > 0) {
        return 'green' as const
      }
    }

    // Then check dark sections
    const darkSections = Array.from(document.querySelectorAll('[data-theme="dark"]'))
    for (let i = 0; i < darkSections.length; i++) {
      const rect = darkSections[i].getBoundingClientRect()
      if (rect.top < headerBottom && rect.bottom > 0) {
        return 'dark' as const
      }
    }

    return 'light' as const
  }, [])

  // Re-detect variant on route change (after DOM updates)
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setVariant(detectVariant())
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname, detectVariant])

  // Scroll direction detection + dark variant detection
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return
      const currentY = window.scrollY

      const heroEl = document.querySelector('[data-hero]')
      const heroRect = heroEl?.getBoundingClientRect()
      const heroHeight = heroRect ? heroRect.height : window.innerHeight

      // Only allow header hide/show after the hero image is in view
      const heroImage = heroEl?.querySelector('[data-hero-image]')
      const heroImageRect = heroImage?.getBoundingClientRect()
      const pastHeroImage = heroImageRect ? heroImageRect.top < HEADER_HEIGHT : currentY > heroHeight * 0.5

      if (currentY < 10) {
        setIsVisible(true)
      } else if (!pastHeroImage) {
        setIsVisible(true)
      } else if (currentY > lastScrollY.current + SCROLL_THRESHOLD) {
        setIsVisible(false)
      } else if (currentY < lastScrollY.current - SCROLL_THRESHOLD) {
        setIsVisible(true)
      }

      const currentVariant = detectVariant()

      // CTA: show as soon as the hero headline scrolls behind the header
      if (heroEl) {
        const heading = heroEl.querySelector('h1')
        if (heading) {
          const headingRect = heading.getBoundingClientRect()
          setShowCta(headingRect.top < HEADER_HEIGHT)
        } else {
          setShowCta(currentY > 80)
        }
      } else {
        setShowCta(currentY > 80)
      }

      setVariant(currentVariant)
      lastScrollY.current = currentY
    }

    // Initial detection
    setVariant(detectVariant())

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [detectVariant, mobileMenuOpen])

  const handleNavItemEnter = (item: NavItem) => {
    // Clear any pending close
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }

    setHoveredItem(item.label)

    if (item.hasDropdown && item.dropdownId) {
      setActiveDropdown(item.dropdownId)
    } else {
      setActiveDropdown(null)
    }
  }

  const handleHeaderLeave = () => {
    setHoveredItem(null)
    // Delay close to prevent flickering
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 100)
    setCloseTimeout(timeout)
  }

  return (
    <>
      <div className={`${styles.headerWrapper} ${!isVisible && !mobileMenuOpen ? styles.headerHidden : ''} ${mobileMenuOpen ? styles.headerAboveOverlay : ''}`} onMouseLeave={handleHeaderLeave}>
        <header
          ref={headerRef}
          className={`${styles.header} ${variant === 'dark' ? styles.dark : ''} ${variant === 'green' ? styles.green : ''} ${activeDropdown ? styles.dropdownOpen : ''} ${className || ''}`}
        >
          <div className={styles.container}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>
                Henric
              </span>
            </Link>

            {/* Nav links hidden — keeping code for later */}
            <nav className={styles.nav} />

            <div className={styles.rightGroup}>
              <a
                href="https://auth.eu.henricai.com"
                className={`${styles.navLink} ${styles.navLinkWithUnderline}`}
                onMouseEnter={() => {
                  setActiveDropdown(null)
                  setHoveredItem(null)
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.navLinkText}>Login</span>
              </a>
              <Link
                href="/book-demo"
                className={`${styles.cta} ${showCta ? styles.ctaVisible : ''}`}
                onMouseEnter={() => {
                  setActiveDropdown(null)
                  setHoveredItem(null)
                }}
              >
                Book a demo
              </Link>
            </div>

            {/* Hamburger hidden — keeping code for later */}
          </div>

        </header>
      </div>
      {/* MobileMenu hidden — keeping code for later */}
    </>
  )
}
