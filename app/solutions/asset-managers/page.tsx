import type { Metadata } from 'next'
import { SolutionHero } from '@/components/SolutionHero'
import { SolutionUseCases } from '@/components/SolutionUseCases'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection/FAQSection'

const faqs = [
  {
    question: 'How does Henric handle data security for due diligence materials?',
    answer: 'Henric is ISO 27001 certified. Every document is encrypted at rest and in transit, fully isolated per organisation, and never used to train AI models. Henric meets institutional security standards for handling sensitive portfolio data.',
  },
  {
    question: 'How accurate is the data extraction from data rooms?',
    answer: 'Every data point is traceable back to the source document, page, and paragraph. When something is ambiguous, Henric flags it rather than guessing — so your team reviews exceptions, not errors.',
  },
  {
    question: 'Can Henric work with our existing portfolio management tools?',
    answer: 'Henric sits alongside your current tools — connect Google Workspace or Microsoft 365, or upload documents directly. No system replacement required.',
  },
  {
    question: 'How long does it take to process a full data room?',
    answer: 'Hours, not weeks. Upload hundreds of documents and Henric structures them for same-day review — so your team starts analysis instead of waiting for preparation.',
  },
  {
    question: 'What happens if our documents are in multiple languages?',
    answer: 'Henric reads documents in any language natively. A data room with Swedish leases, German environmental reports, and English financials is processed in a single workflow.',
  },
]

export const metadata: Metadata = { title: 'Asset Managers' }

export default function AssetManagersPage() {
  return (
    <>
      <SolutionHero
        pageName="Asset Managers"
        headline="Certainty at scale."
        heroImage="/images/hero-asset-managers.jpg"
        heroImageAlt="Modern glass office buildings"
      />

      <SolutionUseCases
        headline="From data room to decision."
        useCases={[
          {
            id: 'assistant',
            title: 'Ask questions across the data room',
            description: 'Query lease terms, financial structures, and risk factors across hundreds of documents. Every answer includes the exact source, page, and paragraph.',
          },
          {
            id: 'vault',
            title: 'Organise acquisition documents by deal',
            description: 'Every lease, valuation, and environmental report in one searchable Vault — structured for your team from day one.',
          },
          {
            id: 'trace-table',
            title: 'Extract and compare at portfolio scale',
            description: 'Pull rent rolls, cap rates, and key terms from an entire data room into one structured table. Every figure traceable.',
          },
        ]}
      />

      <FAQSection faqs={faqs} />

      <CTASection
        headline="Your portfolio deserves more than a spreadsheet."
        subheadline="Book a demo and see what structured portfolio intelligence looks like in practice."
      />
    </>
  )
}
