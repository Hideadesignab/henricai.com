import styles from './GuidingPrinciples.module.css'

interface PrincipleCard {
  title: string
  description: string
  imageAlt: string
}

interface GuidingPrinciplesProps {
  eyebrow: string
  headline: string
  cards: PrincipleCard[]
}

export function GuidingPrinciples({
  eyebrow,
  headline,
  cards,
}: GuidingPrinciplesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>
        {/* Left column - label only */}
        <div className={styles.labelColumn}>
          <span className={styles.eyebrow}>{eyebrow}</span>
        </div>

        {/* Right column - headline + cards */}
        <div className={styles.contentColumn}>
          <h2 className={styles.headline}>{headline}</h2>

          <div className={styles.cardsGrid}>
            {cards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div
                  className={styles.imagePlaceholder}
                  role="img"
                  aria-label={card.imageAlt}
                />
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
