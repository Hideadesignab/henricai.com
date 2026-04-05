import type { Metadata } from 'next'
import { SolutionHero } from '@/components/SolutionHero'
import { SolutionUseCases } from '@/components/SolutionUseCases'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection/FAQSection'

const faqs = [
  {
    question: 'Can Henric process inspection reports from any provider?',
    answer: 'Yes. Henric reads the content, not the system it came from. Whatever format your provider delivers — PDF, scanned pages, or digital reports — the extraction works the same way.',
  },
  {
    question: 'How does the bid comparison handle different pricing structures?',
    answer: 'Henric extracts scope, pricing, coverage, and expiry dates from each quote and presents them side by side — so your team compares substance, not formatting.',
  },
  {
    question: 'Will this replace our existing maintenance system?',
    answer: 'No. Henric adds an intelligence layer on top of your existing tools. It structures, compares, and reports on the documents you already have — no system change required.',
  },
  {
    question: 'How quickly can our team start using it?',
    answer: 'Upload your inspection reports or service agreements and your team sees results within the first day. No lengthy onboarding or configuration needed.',
  },
  {
    question: 'How does Henric handle sensitive building or property data?',
    answer: 'Henric is ISO 27001 certified. All data is encrypted, fully isolated per organisation, and access is controlled with per-team permissions. Henric never uses your data to train AI models.',
  },
]

export const metadata: Metadata = { title: 'Property Managers' }

export default function PropertyManagersPage() {
  return (
    <>
      <SolutionHero
        pageName="Property Managers"
        headline="Precision across every building."
        heroImage="/images/hero-property-managers.jpg"
        heroImageAlt="Modern building lobby with marble and brass elevators"
      />

      <SolutionUseCases
        headline="From inspection to action."
        useCases={[
          {
            id: 'assistant',
            title: 'Ask about any building\u2019s history',
            description: 'What was inspected, what was quoted, what was decided — instant answers with sources from inspection reports, quotes, and protocols.',
          },
          {
            id: 'vault',
            title: 'Every document where it belongs',
            description: 'Inspection reports, service agreements, and maintenance protocols organised per property in searchable Vaults.',
          },
          {
            id: 'trace-table',
            title: 'Compare quotes side by side',
            description: 'Extract scope, pricing, coverage, and expiry from every bid into one structured table. Your team evaluates substance, not formatting.',
          },
        ]}
      />

      <FAQSection faqs={faqs} />

      <CTASection
        headline="Your buildings generate data. Start using it."
        subheadline="Book a demo and see how inspections, maintenance, and service agreements become actionable."
      />
    </>
  )
}
