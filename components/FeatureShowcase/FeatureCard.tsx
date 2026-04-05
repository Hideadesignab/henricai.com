import Link from 'next/link'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  gradient: 'warm' | 'cool' | 'neutral'
  title: string
  description: string
  href: string
}

export function FeatureCard({ gradient, title, description, href }: FeatureCardProps) {
  return (
    <Link href={href} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.visual} data-gradient={gradient} />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  )
}
