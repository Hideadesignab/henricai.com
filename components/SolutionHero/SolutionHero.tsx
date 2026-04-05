import Image from 'next/image'
import styles from './SolutionHero.module.css'

interface SolutionHeroProps {
  pageName: string
  headline: string
  description?: string
  heroImage?: string
  heroImageAlt?: string
}

export default function SolutionHero({ pageName, headline, description, heroImage, heroImageAlt }: SolutionHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.breadcrumb}>
          <span className={styles.breadcrumbLabel}>Solutions</span>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{pageName}</span>
        </p>

        <h1 className={styles.headline}>{headline}</h1>

        {description && <p className={styles.description}>{description}</p>}
      </div>

      <div className={styles.heroImageWrapper}>
        {heroImage ? (
          <Image
            src={heroImage}
            alt={heroImageAlt || ''}
            width={1920}
            height={960}
            className={styles.heroImage}
            priority
          />
        ) : (
          <div className={styles.heroImage} />
        )}
      </div>
    </section>
  )
}
