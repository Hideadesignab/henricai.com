import type { Metadata } from 'next'
import { ProductHero } from '@/components/ProductHero'

export const metadata: Metadata = { title: 'Outlook Add-in' }
import { ProductFeatureRow } from '@/components/ProductFeatureRow'
import { CTASection } from '@/components/CTASection'

export default function OutlookAddInPage() {
  return (
    <>
      <ProductHero
        category="PRODUCT"
        pageName="Outlook Add-in"
        headline="Your Assistant, inside your inbox"
        description="The Outlook Add-in brings Henric directly into your inbox—so you can handle tenant requests, draft replies, and pull up property details without switching tools."
        ctaText="Book a demo"
        ctaLink="/book-demo"
        imageAlt="Henric Outlook Add-In interface"
      />


      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="Turn email chaos into structured progress"
        description="For most property teams, email is where much of the work gets done, or grinds to a halt. With the Outlook add-in, Henric users can summarize long threads and draft precise replies in seconds, without leaving their inbox."
        imageAlt="Henric email summarization in Outlook"
        reversed={false}
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="Bring matters into your own hands"
        description="Attach and save documents and email threads directly to Henric in one click, keeping your documents organized, secure and instantly accessible."
        imageAlt="Henric document attachment in Outlook"
        reversed={true}
      />

      <div className="h-16 lg:h-24" />

      <CTASection
        headline="Ready to work smarter?"
        subheadline="See how Henric helps property managers save hours every week on admin."
        buttonText="Book a demo"
      />
    </>
  )
}
