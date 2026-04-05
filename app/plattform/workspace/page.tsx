import type { Metadata } from 'next'
import { ProductHero } from '@/components/ProductHero'

export const metadata: Metadata = { title: 'Workspace' }
import { ProductFeatureRow } from '@/components/ProductFeatureRow'
import { CTASection } from '@/components/CTASection'

export default function WorkspacePage() {
  return (
    <>
      <ProductHero
        category="PRODUCT"
        pageName="Workspace"
        headline="Henric without limits."
        description="The central hub where everything connects. Manage documents, collaborate with your team, and access every Henric tool—all in one powerful workspace built for property professionals."
        ctaText="Book a demo"
        ctaLink="/book-demo"
        imageAlt="Henric Workspace dashboard"
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="Everything in one place"
        description="No more scattered files across email, drives, and folders. Workspace brings all your documents, conversations, and analysis together—organized by property, project, or team."
        imageAlt="Henric unified workspace"
        reversed={false}
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="Built for teams"
        description="Invite colleagues, assign tasks, and track progress in real-time. Everyone sees the same information, works from the same sources, and stays aligned—without endless email chains."
        imageAlt="Henric team collaboration"
        reversed={true}
      />

      <div className="h-16 lg:h-24" />

      <CTASection
        headline="Ready to bring it all together?"
        subheadline="See how Workspace connects your documents, your team, and every Henric tool—in one place."
        buttonText="Book a demo"
      />
    </>
  )
}
