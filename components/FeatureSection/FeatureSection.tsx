import styles from './FeatureSection.module.css'

interface FeatureItem {
  title: string
  description: string
}

interface FeatureSectionProps {
  title: string
  intro: string
  imageAlt?: string
  items: FeatureItem[]
  zIndex?: number
}

export default function FeatureSection({ title, intro, imageAlt, items, zIndex }: FeatureSectionProps) {
  return (
    <section className={styles.section} style={zIndex !== undefined ? { zIndex } : undefined}>
      <div className={styles.divider} />
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.intro}>{intro}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.image} role="img" aria-label={imageAlt || title} />
        <div className={styles.list}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
