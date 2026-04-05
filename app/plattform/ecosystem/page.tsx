import type { Metadata } from 'next'
import { ProductHero } from '@/components/ProductHero'

export const metadata: Metadata = { title: 'Ecosystem' }
import { ProductFeatureRow } from '@/components/ProductFeatureRow'
import { CTASection } from '@/components/CTASection'

export default function EcosystemPage() {
  return (
    <>
      <ProductHero
        category="PRODUCT"
        pageName="Ecosystem"
        headline="AI where you already work."
        description="Henric lives inside the tools your team uses every day. Answer in Outlook, analyse in Excel, collaborate in Google Workspace — all grounded in your own property data."
        ctaText="Book a demo"
        ctaLink="/book-demo"
        imageAlt="Henric Ecosystem integrations"
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="No new tabs, no context switching"
        description="Henric shows up right where you need it — inside Outlook, Excel, and Google Workspace. Your team keeps working in familiar tools, with AI ready at their side."
        imageAlt="Henric in Microsoft Office"
        reversed={false}
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="Grounded in your data, every time"
        description="Henric connects to your documents, emails, and files. Every answer, every draft, every analysis is built on the data you trust."
        imageAlt="Henric data integrations"
        reversed={true}
      />

      <div className="h-16 lg:h-24" />

      <CTASection
        headline="Ready to bring AI into your existing stack?"
        subheadline="See how Henric works inside the tools your team already uses, without changing how anyone works."
        buttonText="Book a demo"
      />
    </>
  )
}
