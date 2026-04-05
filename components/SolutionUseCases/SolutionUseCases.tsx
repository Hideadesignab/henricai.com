import styles from './SolutionUseCases.module.css'

interface UseCase {
  id: string
  title: string
  description: string
}

interface SolutionUseCasesProps {
  headline: string
  useCases: UseCase[]
}

export function SolutionUseCases({ headline, useCases }: SolutionUseCasesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.useCasesContainer}>
        <span className={styles.label}>Use cases</span>
        <h2 className={styles.headline}>{headline}</h2>

        <div className={styles.useCases}>
          {useCases.map((uc) => (
            <div key={uc.id} className={styles.useCase}>
              <div className={styles.useCaseContent}>
                <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                <p className={styles.useCaseDesc}>{uc.description}</p>
              </div>
              <div className={styles.useCaseImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
