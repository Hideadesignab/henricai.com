import { Mail, FileText, MessageSquare, BarChart3, Plug, Clock } from 'lucide-react'
import { Container } from '@/components/Container'
import { FeatureCard } from '@/components/FeatureCard'
import styles from './FeaturesSection.module.css'

const features = [
  {
    icon: Mail,
    title: 'Faster email responses',
    description: 'Generate professional responses to tenant inquiries in seconds instead of minutes.',
  },
  {
    icon: FileText,
    title: 'Automatic documentation',
    description: 'Create inspection reports, case summaries, and documents with one click.',
  },
  {
    icon: MessageSquare,
    title: 'Tenant communication',
    description: 'Handle requests, complaints, and information with consistent tone and quality.',
  },
  {
    icon: BarChart3,
    title: 'Project planning',
    description: 'Get AI assistance to structure maintenance projects, budgets, and timelines.',
  },
  {
    icon: Plug,
    title: 'Seamless integrations',
    description: 'Works inside the tools your team already uses — no switching systems, no extra tabs.',
  },
  {
    icon: Clock,
    title: 'Save 2+ hours daily',
    description: 'Automate repetitive tasks so you can focus on what truly requires your expertise.',
  },
]

interface FeaturesSectionProps {
  className?: string
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section id="features" className={`${styles.section} ${className || ''}`}>
      <Container>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Features</span>
          <h2 className={styles.headline}>
            Everything you need for smarter management
          </h2>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
