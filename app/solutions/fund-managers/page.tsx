import type { Metadata } from 'next'
import { SolutionHero } from '@/components/SolutionHero'
import { SolutionUseCases } from '@/components/SolutionUseCases'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection/FAQSection'

const faqs = [
  {
    question: 'How does Henric ensure the numbers in reports are correct?',
    answer: 'Every figure is traceable back to the source document and data point. Henric never estimates or interpolates — if the data isn\'t there, it says so.',
  },
  {
    question: 'Can I match our existing report format and structure?',
    answer: 'You define the structure, the audience, and the format. Henric follows your reporting standards — not the other way around.',
  },
  {
    question: 'What financial data sources does Henric work with?',
    answer: 'Rent rolls, operating statements, budgets, valuations, and portfolio overviews. Connect Google Workspace or Microsoft 365, or upload files directly.',
  },
  {
    question: 'How does Henric handle mixed portfolios with different structures?',
    answer: 'Henric adapts to any portfolio structure — commercial, residential, or mixed-use — without separate configuration per asset type.',
  },
  {
    question: 'Is our financial data secure?',
    answer: 'Henric is ISO 27001 certified. All data is encrypted, fully isolated per organisation, and never used to train AI models. Henric meets investor-grade and auditor-grade security standards.',
  },
]

export const metadata: Metadata = { title: 'Fund Managers & REITs' }

export default function FundManagersPage() {
  return (
    <>
      <SolutionHero
        pageName="Fund Managers & REITs"
        headline="The numbers, verified."
        heroImage="/images/hero-fund-managers.png"
        heroImageAlt="Commercial office buildings"
      />

      <SolutionUseCases
        headline="From operating data to board table."
        useCases={[
          {
            id: 'assistant',
            title: 'Query financial data across funds',
            description: 'Ask about yields, occupancy, or covenant compliance across any asset or fund. Get sourced answers, not assumptions.',
          },
          {
            id: 'vault',
            title: 'Organise reporting by fund and quarter',
            description: 'Operating statements, budgets, and valuations — structured in Vaults by fund, asset, or period. The right team sees the right documents.',
          },
          {
            id: 'trace-table',
            title: 'Generate structured investor reports',
            description: 'Extract financial metrics from management reports across your portfolio into structured overviews for board and investors.',
          },
        ]}
      />

      <FAQSection faqs={faqs} />

      <CTASection
        headline="The numbers are already there. Make them talk."
        subheadline="Book a demo and see how operating data becomes the reports your board and investors expect."
      />
    </>
  )
}
