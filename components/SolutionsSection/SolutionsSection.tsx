import styles from './SolutionsSection.module.css'

interface SolutionCard {
  title: string
  description: string
  imageAlt: string
}

interface SolutionsSectionProps {
  eyebrow: string
  headline: string
  cards: SolutionCard[]
}

export function SolutionsSection({
  eyebrow,
  headline,
  cards,
}: SolutionsSectionProps) {
  return (
    <section className={styles.section}>
      {/* Header - contained */}
      <div className={styles.header}>
        <h2 className={styles.headline}>{headline}</h2>
        <span className={styles.eyebrow}>{eyebrow}</span>
      </div>

      {/* Cards - full bleed */}
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div
              className={styles.cardImage}
              role="img"
              aria-label={card.imageAlt}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
