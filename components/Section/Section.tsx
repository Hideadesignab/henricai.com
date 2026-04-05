import { ReactNode, ElementType } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  as?: ElementType
}

export function Section({
  children,
  size = 'md',
  className,
  as: Component = 'section'
}: SectionProps) {
  return (
    <Component className={`${styles.section} ${styles[size]} ${className || ''}`}>
      {children}
    </Component>
  )
}
