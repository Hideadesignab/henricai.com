import Link from 'next/link'
import styles from './CTASection.module.css'

interface CTASectionProps {
  headline?: string
  subheadline?: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  headline = "See what precision looks like.",
  subheadline = "Book a demo and we'll show you how Henric works with your documents.",
  buttonText = "Book a demo",
  buttonHref = "/book-demo",
}: CTASectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.subheadline}>{subheadline}</p>
        </div>
        <div className={styles.buttonBlock}>
          <Link href={buttonHref} className={styles.button}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
