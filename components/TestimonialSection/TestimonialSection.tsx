import styles from './TestimonialSection.module.css'

export function TestimonialSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.image}
            src="/images/testimonial-coeli.svg"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className={styles.quoteColumn}>
          <span className={styles.quoteMark}>&ldquo;</span>
          <blockquote className={styles.quote}>
            Once you&apos;ve had every answer one question away, it&apos;s hard to go back to the way things were.
          </blockquote>
          <div className={styles.attribution}>
            <p className={styles.name}>Kevin Striborn</p>
            <p className={styles.role}>Asset Manager, Coeli</p>
          </div>
        </div>
      </div>
    </section>
  )
}
