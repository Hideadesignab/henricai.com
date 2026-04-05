import type { Metadata } from 'next'
import { SolutionHero } from '@/components/SolutionHero'
import { SolutionUseCases } from '@/components/SolutionUseCases'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection/FAQSection'

const faqs = [
  {
    question: 'What lease data can Henric extract automatically?',
    answer:
      'Rent amounts, indexation clauses, break options, key dates, tenant obligations, landlord responsibilities, renewal terms — any structured or semi-structured data point in a lease.',
  },
  {
    question: 'How does Henric handle non-standard lease formats?',
    answer:
      'Henric reads the content, not the format. Whether it is a Fastighetsagarna template, a bespoke commercial agreement, or a scanned PDF — every document is processed the same way.',
  },
  {
    question: 'Can Henric track indexation across the portfolio?',
    answer:
      'Yes. Define an indexation column in a Trace Table and Henric extracts the clause from every lease — CPI-linked, fixed-step, or turnover-based. Every extraction is traceable to the source paragraph.',
  },
  {
    question: 'How accurate is the extraction?',
    answer:
      'Every data point links back to the source document, page, and paragraph. When a value is ambiguous or missing, Henric flags it for human review rather than guessing.',
  },
  {
    question: 'Can we export lease data to our property management system?',
    answer:
      'Yes. Export Trace Tables to Excel or CSV with source references intact. Data flows into your existing tools without manual re-entry.',
  },
]

export const metadata: Metadata = { title: 'Lease Administration' }

export default function LeaseAdministrationPage() {
  return (
    <>
      <SolutionHero
        pageName="Lease Administration"
        headline="Zero-error lease intelligence."
        description="Automated extraction of indexation, options, key dates, and obligations across your entire lease portfolio. Every data point traceable to the source."
      />

      <SolutionUseCases
        headline="Every clause, every date, every obligation."
        useCases={[
          {
            id: 'indexation',
            title: 'Indexation tracking at portfolio scale',
            description:
              'Extract indexation clauses from every lease in your portfolio. CPI-linked, fixed-step, or turnover-based — every clause traced to the source paragraph.',
          },
          {
            id: 'dates',
            title: 'Key date management across leases',
            description:
              'Surface expiry dates, break options, and renewal windows from hundreds of leases into one structured view. Never miss a critical deadline again.',
          },
          {
            id: 'obligations',
            title: 'Obligation mapping per property',
            description:
              'Extract landlord and tenant responsibilities across all leases for a building. Maintenance, insurance, restoration — every obligation documented and traceable.',
          },
        ]}
      />

      <FAQSection faqs={faqs} />

      <CTASection
        headline="Your leases hold the answers."
        subheadline="Book a demo and see Henric extract structured data from your lease portfolio — with full traceability."
      />
    </>
  )
}
