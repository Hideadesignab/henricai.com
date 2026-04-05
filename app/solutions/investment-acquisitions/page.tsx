import type { Metadata } from 'next'
import { SolutionHero } from '@/components/SolutionHero'
import { SolutionUseCases } from '@/components/SolutionUseCases'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection/FAQSection'

const faqs = [
  {
    question: 'How fast can Henric process a data room?',
    answer:
      'Hours, not weeks. Upload hundreds of documents and Henric structures them for same-day review — your team starts analysis instead of waiting for preparation.',
  },
  {
    question: 'What types of documents can Henric handle in a data room?',
    answer:
      'Leases, valuations, environmental reports, financial statements, board minutes — any document format. Scanned PDFs, digital documents, and mixed-language data rooms are all processed natively.',
  },
  {
    question: 'How does Henric flag risks in acquisition documents?',
    answer:
      'Define the terms and thresholds that matter to your deal. Henric extracts and surfaces deviations, unusual clauses, and missing information — every finding traceable to the source.',
  },
  {
    question: 'Can multiple team members work on the same data room?',
    answer:
      'Yes. Create a Vault for the deal, set permissions per team member, and everyone works from the same structured dataset with shared access to the Assistant and Trace Tables.',
  },
  {
    question: 'How does Henric handle confidential deal materials?',
    answer:
      'Every document is encrypted at rest and in transit, fully isolated per organisation, and never used to train AI models. Henric meets institutional security standards for sensitive transaction data.',
  },
]

export const metadata: Metadata = { title: 'Investment & Acquisitions' }

export default function InvestmentAcquisitionsPage() {
  return (
    <>
      <SolutionHero
        pageName="Investment & Acquisitions"
        headline="Analyze at the speed of thought."
        description="Deal-speed due diligence across thousands of documents. Surface key terms, flag risks, and structure acquisition data — all traceable to the source."
      />

      <SolutionUseCases
        headline="From data room to decision in hours."
        useCases={[
          {
            id: 'screening',
            title: 'Transaction screening at scale',
            description:
              'Upload an entire data room and extract key commercial terms, financial structures, and risk factors into structured tables — ready for review the same day.',
          },
          {
            id: 'risk',
            title: 'Risk identification across deal documents',
            description:
              'Surface unusual clauses, missing documentation, and deviations from standard terms. Every finding linked to the exact source passage for verification.',
          },
          {
            id: 'portfolio',
            title: 'Post-acquisition portfolio structuring',
            description:
              'Once the deal closes, transition all acquisition documents into operational Vaults. Lease terms, tenant data, and obligations — structured and searchable from day one.',
          },
        ]}
      />

      <FAQSection faqs={faqs} />

      <CTASection
        headline="Your next deal, structured in hours."
        subheadline="Book a demo and see how Henric turns data rooms into actionable intelligence."
      />
    </>
  )
}
