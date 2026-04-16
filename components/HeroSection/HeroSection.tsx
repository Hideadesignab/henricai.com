import Link from 'next/link'
import styles from './HeroSection.module.css'

const comingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

export function HeroSection() {
  return (
    <section className={styles.hero} data-hero data-theme="dark">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>AI for commercial real estate</p>
        <h1 className={styles.headline}>Portfolio<br />Intelligence</h1>
        <p className={styles.subtitle}>
          A new way real estate teams think, decide, and operate across documents, buildings, and deals.
        </p>
        {!comingSoon && (
          <div className={styles.buttonRow}>
            <Link href="/book-demo" className={styles.ctaButton}>
              Book a demo
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
