import type { Metadata } from 'next'
import { SolutionHero } from '@/components/SolutionHero'
import { SolutionUseCases } from '@/components/SolutionUseCases'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection/FAQSection'

const faqs = [
  {
    question: 'How does Henric handle complex multi-asset portfolios?',
    answer: 'Henric adapts to any portfolio structure — commercial, residential, or mixed-use — without separate configuration. Your team works across the full portfolio in one place.',
  },
  {
    question: 'How accurate is the data extraction across different document types?',
    answer: 'Every data point is traceable back to the source document, page, and paragraph. Henric processes leases, financials, inspection reports, and service agreements with the same precision.',
  },
  {
    question: 'Can Henric work with our existing systems?',
    answer: 'Henric sits alongside your current tools. Connect Google Workspace or Microsoft 365, or upload documents directly. No system replacement required.',
  },
  {
    question: 'How does Henric handle sensitive portfolio data?',
    answer: 'Henric is ISO 27001 certified. All data is encrypted, fully isolated per organisation, and never used to train AI models. Access is controlled with per-team permissions across your portfolio.',
  },
  {
    question: 'How quickly can we get started across multiple properties?',
    answer: 'Upload your documents and your team sees structured results within the first day. Henric scales across your portfolio — no per-property setup needed.',
  },
]

export const metadata: Metadata = { title: 'Commercial Property Companies' }

export default function CommercialPropertyCompaniesPage() {
  return (
    <>
      <SolutionHero
        pageName="Commercial Property Companies"
        headline="Portfolios without blind spots."
        heroImage="/images/hero-commercial-property.jpg"
        heroImageAlt="Commercial buildings in golden light"
      />

      <SolutionUseCases
        headline="From documents to clarity."
        useCases={[
          {
            id: 'assistant',
            title: 'Answer any question across your portfolio',
            description: 'Which properties have break clauses in the next 12 months? What\u2019s the average rent per sqm? Ask, and get the answer with the source.',
          },
          {
            id: 'vault',
            title: 'One source of truth per property',
            description: 'Leases, financials, inspections, service agreements — all in one Vault per building, searchable and connected across every asset.',
          },
          {
            id: 'trace-table',
            title: 'Structure portfolio data for reporting',
            description: 'Extract lease terms, operating costs, and key dates across your portfolio into comparable tables. Every data point backed by a document.',
          },
        ]}
      />

      <FAQSection faqs={faqs} />

      <CTASection
        headline="Built for portfolios, not single buildings."
        subheadline="Book a demo and see how every asset, lease, and report connects across your portfolio."
      />
    </>
  )
}
