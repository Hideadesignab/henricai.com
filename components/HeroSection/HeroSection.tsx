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
        <video
          className={styles.heroImage}
          src="/henric-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  )
}
