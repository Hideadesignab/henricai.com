import type { Metadata } from 'next'
import { ProductHero } from '@/components/ProductHero'

export const metadata: Metadata = { title: 'Tabular Review' }
import { ProductFeatureRow } from '@/components/ProductFeatureRow'
import { CTASection } from '@/components/CTASection'

export default function TabularReviewPage() {
  return (
    <>
      <ProductHero
        category="PRODUCT"
        pageName="Tabular Review"
        headline="Turn document chaos into insights."
        description="Transform hundreds of documents into an interactive, searchable table in minutes. Extract key terms, compare clauses, and spot patterns across your entire portfolio—with full source traceability."
        ctaText="Book a demo"
        ctaLink="/book-demo"
        imageAlt="Henric Tabular Review interface"
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="Every document, organised instantly"
        description="Import from your document management system, upload from your computer, or pull from shared drives. Define what you need to extract and Henric populates every cell automatically—hundreds of documents in minutes, not days."
        imageAlt="Henric document import and extraction"
        reversed={false}
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="Review together, stay in sync"
        description="Invite colleagues into your review. See changes as they happen, leave comments on specific cells, mark rows as reviewed, and track exactly who reviewed what—nothing slips through the cracks."
        imageAlt="Henric collaborative review"
        reversed={true}
      />

      <div className="h-16 lg:h-24" />

      <CTASection
        headline="Ready to review without the headache?"
        subheadline="See how Henric analyzes tables and spreadsheets so you catch what matters, faster."
        buttonText="Book a demo"
      />
    </>
  )
}
