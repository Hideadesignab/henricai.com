import Link from 'next/link'
import styles from './ProductFeaturesGrid.module.css'

interface FeatureCard {
  title: string
  description: string
  imageAlt: string
  href?: string
}

interface ProductFeaturesGridProps {
  eyebrow: string
  headline: string
  cards: FeatureCard[]
}

export function ProductFeaturesGrid({
  eyebrow,
  headline,
  cards,
}: ProductFeaturesGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.headline}>{headline}</h2>

        <div className={styles.grid}>
          {cards.map((card, index) => {
            const CardContent = (
              <>
                <div
                  className={styles.imagePlaceholder}
                  role="img"
                  aria-label={card.imageAlt}
                />
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </>
            )

            return card.href ? (
              <Link key={index} href={card.href} className={styles.card}>
                {CardContent}
              </Link>
            ) : (
              <div key={index} className={styles.card}>
                {CardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
