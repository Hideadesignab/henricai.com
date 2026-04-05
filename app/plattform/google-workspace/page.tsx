import type { Metadata } from 'next'
import { ProductHero } from '@/components/ProductHero'

export const metadata: Metadata = { title: 'Google Workspace' }
import { ProductFeatureRow } from '@/components/ProductFeatureRow'
import { CTASection } from '@/components/CTASection'

export default function GoogleWorkspacePage() {
  return (
    <>
      <ProductHero
        category="PRODUCT"
        pageName="Google Workspace"
        headline="Google Workspace, supercharged."
        description="Bring the full power of Henric directly into Google Docs, Sheets, and Gmail. Analyze, draft, and communicate—without ever switching tabs."
        ctaText="Book a demo"
        ctaLink="/book-demo"
        imageAlt="Henric Google Workspace interface"
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="AI-powered drafting and review"
        description="Proofread your work, draft new clauses, and cite sources—all inside Google Docs. Henric helps you write with precision and confidence."
        imageAlt="Henric drafting in Google Docs"
        reversed={false}
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="Automated templates in Docs"
        description="Define your organisation's rules and standards once in the Henric app, then apply templates directly in Google Docs with a single click. Your rules run automatically, highlighting issues and suggesting fixes."
        imageAlt="Henric automated templates in Google Docs"
        reversed={true}
      />

      <div className="h-16 lg:h-24" />

      <CTASection
        headline="Ready to supercharge your workspace?"
        subheadline="See how Henric brings AI assistance directly into Gmail, Docs, and Sheets."
        buttonText="Book a demo"
      />
    </>
  )
}
