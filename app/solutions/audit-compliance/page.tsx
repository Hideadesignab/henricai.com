import type { Metadata } from 'next'
import { SolutionHero } from '@/components/SolutionHero'
import { SolutionUseCases } from '@/components/SolutionUseCases'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection/FAQSection'

const faqs = [
  {
    question: 'What kind of compliance checks can Henric run?',
    answer:
      'Any check that can be defined as a question against your documents — lease term alignment, regulatory requirements, internal policy adherence, insurance coverage gaps, and more.',
  },
  {
    question: 'How does Henric ensure audit trail integrity?',
    answer:
      'Every extracted data point links back to the exact source document, page, and paragraph. The AI reasoning is visible for every cell. Nothing is a black box.',
  },
  {
    question: 'Can we run compliance checks across the entire portfolio?',
    answer:
      'Yes. Define your compliance criteria once and run them across every document in a Vault — or across multiple Vaults. Results are structured into Trace Tables for review.',
  },
  {
    question: 'How does Henric handle regulatory changes?',
    answer:
      'When regulations change, update your compliance columns and re-run the extraction. Henric checks every document against the new criteria and surfaces gaps immediately.',
  },
  {
    question: 'Can multiple auditors work on the same compliance review?',
    answer:
      'Yes. Share Vault access with your audit team. Everyone works from the same data, the same Trace Tables, and the same source documents — with full version control.',
  },
]

export const metadata: Metadata = { title: 'Audit & Compliance' }

export default function AuditCompliancePage() {
  return (
    <>
      <SolutionHero
        pageName="Audit & Compliance"
        headline="Every lease, every standard, every time."
        description="Ensure every lease aligns with your internal standards. Automated compliance checks across your portfolio with full audit trails."
      />

      <SolutionUseCases
        headline="Compliance that scales with your portfolio."
        useCases={[
          {
            id: 'standards',
            title: 'Standard compliance across all leases',
            description:
              'Define your internal standards as columns in a Trace Table. Henric checks every lease against them and flags deviations — with exact citations for every finding.',
          },
          {
            id: 'audits',
            title: 'Portfolio-wide audit automation',
            description:
              'Run compliance checks across hundreds of documents at once. OVK status, fire safety inspections, energy declarations, insurance coverage — structured and auditable.',
          },
          {
            id: 'regulatory',
            title: 'Regulatory requirement tracking',
            description:
              'When regulations change, re-run your compliance extraction. Henric identifies which properties and leases are affected — every gap traced to the source document.',
          },
        ]}
      />

      <FAQSection faqs={faqs} />

      <CTASection
        headline="Compliance without the spreadsheet."
        subheadline="Book a demo and see Henric run automated compliance checks across your portfolio."
      />
    </>
  )
}
