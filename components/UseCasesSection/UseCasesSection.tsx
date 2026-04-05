import Link from 'next/link'
import styles from './UseCasesSection.module.css'

const useCases = [
  {
    title: 'In your inbox',
    description: 'Draft replies and summarize threads. Save important emails to any project in Workspace — one click.',
    bg: '#e5e5e5',
    href: '/plattform/outlook-add-in',
  },
  {
    title: 'Write & refine',
    description: 'A focused writing space built for property management. Everything you create is already in Workspace.',
    bg: '#e5e5e5',
    href: '/plattform/editor',
  },
  {
    title: 'Analyze & extract',
    description: 'Extract data from stacks of documents. Results land directly in your project, ready for your team.',
    bg: '#e8e8e8',
    href: '/plattform/tabular-review',
  },
]

export function UseCasesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {useCases.map((useCase) => (
          <Link key={useCase.title} href={useCase.href} className={styles.cardLink}>
            <div className={styles.card}>
              <div
                className={styles.image}
                style={{ backgroundColor: useCase.bg }}
              />
              <div className={styles.content}>
                <h3 className={styles.title}>{useCase.title}</h3>
                <p className={styles.description}>{useCase.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
