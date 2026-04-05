import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

interface FooterLink {
  label: string
  href: string
  external?: boolean
  comingSoon?: boolean
}

interface LinkColumn {
  title: string
  links: FooterLink[]
}

const linkColumns: LinkColumn[] = [
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Security Policy', href: '/legal/security' },
    ],
  },
  {
    title: 'Follow',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com/company/henricai', external: true },
    ],
  },
]

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo} aria-label="Henric home">
          <Image
            src="/logo-footer-mobile.svg"
            alt="Henric"
            width={80}
            height={80}
            className={styles.logoImageMobile}
          />
          <span className={styles.logoText}>Henric</span>
        </Link>
        <div className={styles.navColumns}>
          {linkColumns.map((column) => (
          <nav
            key={column.title}
            className={styles.column}
            aria-label={`${column.title} navigation`}
          >
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <ul className={styles.linkList}>
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.comingSoon ? (
                    <span className={styles.linkDisabled}>
                      {link.label}
                    </span>
                  ) : link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          ))}
        </div>
      </div>
    </footer>
  )
}
