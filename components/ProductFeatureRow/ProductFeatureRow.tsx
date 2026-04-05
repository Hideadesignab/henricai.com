import styles from './ProductFeatureRow.module.css'

interface ProductFeatureRowProps {
  headline: string
  description: string
  imageAlt?: string
  reversed?: boolean
}

export function ProductFeatureRow({
  headline,
  description,
  imageAlt = '',
  reversed = false,
}: ProductFeatureRowProps) {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${reversed ? styles.reversed : ''}`}>
        <div className={styles.imageColumn}>
          <div className={styles.imagePlaceholder} role="img" aria-label={imageAlt} />
        </div>
        <div className={styles.textColumn}>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  )
}
