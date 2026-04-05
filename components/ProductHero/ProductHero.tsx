import Link from 'next/link'
import Image from 'next/image'
import styles from './ProductHero.module.css'

interface ProductHeroProps {
  category: string
  pageName: string
  headline: string
  description: string
  ctaText: string
  ctaLink: string
  imageAlt?: string
  imageSrc?: string
}

export function ProductHero({
  category,
  pageName,
  headline,
  description,
  ctaText,
  ctaLink,
  imageAlt = '',
  imageSrc,
}: ProductHeroProps) {
  return (
    <section className={styles.productHero} data-hero>
      <div className={styles.left}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.category}>{category}</span>
            <span className={styles.pageName}>{pageName}</span>
          </div>
          <h1 className={styles.headline}>{headline}</h1>
        </div>

        <div className={styles.bottom}>
          <p className={styles.description}>{description}</p>
          <Link href={ctaLink} className={styles.cta}>
            {ctaText}
          </Link>
        </div>
      </div>

      <div className={styles.right} role="img" aria-label={imageAlt}>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={styles.heroImage}
            sizes="(max-width: 900px) 100vw, 58vw"
            priority
          />
        )}
      </div>
    </section>
  )
}
