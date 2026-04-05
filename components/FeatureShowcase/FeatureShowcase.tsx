import styles from './FeatureShowcase.module.css'
import { FeatureCard } from './FeatureCard'

const features = [
  {
    gradient: 'warm' as const,
    title: 'Review faster',
    description: 'Property managers review hundreds of documents and cases daily. Henric analyzes and summarizes instantly—so you act on what matters, not search for it.',
    href: '/plattform/tabular-review',
  },
  {
    gradient: 'cool' as const,
    title: 'Draft smarter',
    description: 'Write professional responses, reports, and documentation in seconds. Henric identifies the substance of each case and suggests ready-to-use text—you stay in control.',
    href: '/plattform/editor',
  },
  {
    gradient: 'neutral' as const,
    title: 'Handle faster',
    description: 'From tenant inquiries to maintenance requests, Henric processes and prioritizes your workload automatically. Spend less time organizing, more time resolving.',
    href: '/plattform/workspace',
  },
]

export function FeatureShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            gradient={feature.gradient}
            title={feature.title}
            description={feature.description}
            href={feature.href}
          />
        ))}
      </div>
    </section>
  )
}
