import type { Metadata } from 'next'
import { SolutionHero } from '@/components/SolutionHero'
import { SolutionUseCases } from '@/components/SolutionUseCases'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection/FAQSection'

const faqs = [
  {
    question: 'How many documents can Henric process in a due diligence?',
    answer:
      'Hundreds to thousands. Upload an entire data room and Henric structures it for review the same day — no batch limits, no waiting.',
  },
  {
    question: 'What types of risks does Henric flag?',
    answer:
      'Unusual clauses, deviations from standard terms, missing documentation, conflicting provisions, and any term that falls outside parameters you define. Every finding is cited to the source.',
  },
  {
    question: 'Can Henric compare terms across documents?',
    answer:
      'Yes. Define the terms you want to compare — rent escalation, break clauses, insurance obligations — and Henric extracts them from every document into a structured table for side-by-side review.',
  },
  {
    question: 'How does the team collaborate during a due diligence?',
    answer:
      'Create a Vault for the deal. Every team member has access to the same documents, the same Trace Tables, and the same Assistant — with permissions scoped per role.',
  },
  {
    question: 'Can we export findings for client reporting?',
    answer:
      'Yes. Export Trace Tables and Assistant conversations to Excel or PDF. Every data point retains its source reference for audit trails.',
  },
]

export const metadata: Metadata = { title: 'Due Diligence' }

export default function DueDiligencePage() {
  return (
    <>
      <SolutionHero
        pageName="Due Diligence"
        headline="Instant clarity across thousands of documents."
        description="Instant risk-flagging across due diligence data rooms. Surface key terms, deviations, and obligations — structured, cited, and ready for review."
      />

      <SolutionUseCases
        headline="From document stack to risk report."
        useCases={[
          {
            id: 'data-room',
            title: 'Data room analysis in hours',
            description:
              'Upload hundreds of documents and extract key commercial terms, financial structures, and obligations into structured tables — ready for review the same day.',
          },
          {
            id: 'risk-flagging',
            title: 'Automated risk flagging',
            description:
              'Define the parameters that matter to your deal. Henric surfaces deviations, unusual clauses, and gaps — every finding linked to the exact source passage.',
          },
          {
            id: 'comparison',
            title: 'Cross-document term comparison',
            description:
              'Compare rent escalation, break clauses, and insurance terms across every lease in the data room. Structured, side-by-side, and fully traceable.',
          },
        ]}
      />

      <FAQSection faqs={faqs} />

      <CTASection
        headline="Due diligence in hours, not weeks."
        subheadline="Book a demo and see Henric turn a data room into structured, auditable intelligence."
      />
    </>
  )
}
