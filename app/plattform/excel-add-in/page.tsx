import type { Metadata } from 'next'
import { ProductHero } from '@/components/ProductHero'

export const metadata: Metadata = { title: 'Excel Add-in' }
import { ProductFeatureRow } from '@/components/ProductFeatureRow'
import { CTASection } from '@/components/CTASection'

export default function ExcelAddInPage() {
  return (
    <>
      <ProductHero
        category="PRODUCT"
        pageName="Excel Add-in"
        headline="Spreadsheets, supercharged."
        description="Bring AI-powered analysis directly into Excel. Ask questions about your property data, get instant answers, and pull live portfolio data—without leaving the spreadsheet."
        ctaText="Book a demo"
        ctaLink="/book-demo"
        imageAlt="Henric Excel Add-in"
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="AI-powered analysis in Excel"
        description="Ask questions about your data in plain language and get instant answers, charts, and insights. No formulas, no pivot tables—just the answers you need."
        imageAlt="AI analysis in Excel"
        reversed={false}
      />

      <div className="h-16 lg:h-24" />

      <ProductFeatureRow
        headline="Portfolio data at your fingertips"
        description="Pull live property data into Excel without manual exports. Tenants, leases, financials—always up to date, always ready for your next report."
        imageAlt="Portfolio data in Excel"
        reversed={true}
      />

      <div className="h-16 lg:h-24" />

      <CTASection
        headline="Ready to supercharge your spreadsheets?"
        subheadline="See how Henric brings AI to the tool you already use—right inside Excel."
        buttonText="Book a demo"
      />
    </>
  )
}
