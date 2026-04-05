import styles from './ProductCapabilities.module.css'

interface SubFeature {
  title: string
  description: string
}

interface Capability {
  headline: string
  description: string
  subFeatures: SubFeature[]
  imageAlt: string
}

interface ProductCapabilitiesProps {
  eyebrow: string
  headline: string
  capabilities: Capability[]
}

export function ProductCapabilities({
  eyebrow,
  headline,
  capabilities,
}: ProductCapabilitiesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 className={styles.headline}>{headline}</h2>

        <div className={styles.capabilities}>
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`${styles.row} ${index % 2 === 1 ? styles.reversed : ''}`}
            >
              <div className={styles.textColumn}>
                <h3 className={styles.capHeadline}>{cap.headline}</h3>
                <p className={styles.capDescription}>{cap.description}</p>
                <div className={styles.subFeatures}>
                  {cap.subFeatures.map((sf, sfIndex) => (
                    <div key={sfIndex} className={styles.subFeature}>
                      <h4 className={styles.subFeatureTitle}>{sf.title}</h4>
                      <p className={styles.subFeatureDesc}>{sf.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={styles.imageColumn}
                role="img"
                aria-label={cap.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
