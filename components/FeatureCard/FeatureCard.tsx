import { LucideIcon } from 'lucide-react'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} aria-hidden="true" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
