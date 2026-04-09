import Link from 'next/link'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section className={styles.hero} data-hero>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Real estate, without friction.
        </h1>

        <div className={styles.buttonRow}>
          <Link href="/book-demo" className={styles.ctaButton}>
            Book a demo
          </Link>
        </div>
      </div>

      <div className={styles.heroImageWrapper} data-hero-image>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={`${styles.heroImage} ${styles.desktopVideo}`}
          src="/henrichero.png"
          alt="Henric platform interface"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={`${styles.heroImage} ${styles.mobileVideo}`}
          src="/henricheromobil.png"
          alt="Henric platform interface"
        />
      </div>
    </section>
  )
}
