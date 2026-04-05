import styles from './ProductProcess.module.css'

interface ProcessStep {
  number: string
  headline: string
  description: string
  imageAlt: string
}

interface ProductProcessProps {
  steps: ProcessStep[]
}

export function ProductProcess({ steps }: ProductProcessProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>How it works</span>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.textColumn}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.headline}>{step.headline}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>
              <div
                className={styles.imageColumn}
                role="img"
                aria-label={step.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
