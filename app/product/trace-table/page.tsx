import type { Metadata } from 'next'
import { ProductHero } from '@/components/ProductHero'
import { ProductProcess } from '@/components/ProductProcess'
import { ProductCapabilities } from '@/components/ProductCapabilities'
import { ProductDetailsGrid } from '@/components/ProductDetailsGrid'
import { SolutionUseCases } from '@/components/SolutionUseCases'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'

const processSteps = [
  {
    number: '01',
    headline: 'Define your columns',
    description:
      'Each column is a question — "What is the rent?", "When does the lease expire?", "Is there a break clause?" Choose a template or write your own.',
    imageAlt: 'Defining columns in a Henric Trace Table',
  },
  {
    number: '02',
    headline: 'Run the extraction',
    description:
      "Henric reads every document and fills each cell with the extracted answer, the AI's reasoning, and the exact source passage.",
    imageAlt: 'Henric extracting data into Trace Table cells',
  },
  {
    number: '03',
    headline: 'Review and verify',
    description:
      'Click any cell to see the full reasoning chain and the highlighted citation in the original document. Chat with the built-in Assistant for deeper context.',
    imageAlt: 'Reviewing a Trace Table cell with source citation',
  },
]

const capabilities = [
  {
    headline: 'Every cell is auditable',
    description:
      "This isn't a black box. Every answer shows the AI's reasoning, the confidence level, and the exact passage in the source document.",
    imageAlt: 'Trace Table cell showing AI reasoning and source',
    subFeatures: [
      {
        title: 'AI reasoning',
        description: 'See why the AI extracted this specific answer.',
      },
      {
        title: 'Source highlighting',
        description:
          'The cited passage is highlighted in the original document.',
      },
      {
        title: 'Confidence indicators',
        description:
          'Know when an answer needs human verification.',
      },
    ],
  },
  {
    headline: 'Templates for common tasks',
    description:
      'Start with a pre-built template for your use case, or create a custom table from scratch.',
    imageAlt: 'Trace Table template selection',
    subFeatures: [
      {
        title: 'Lease Overview',
        description:
          'Rent, term, break clauses, indexation, and more.',
      },
      {
        title: 'Compliance Check',
        description:
          'Regulatory requirements across your portfolio.',
      },
      {
        title: 'Rent Roll',
        description:
          'Tenant, area, rent, and lease dates — extracted automatically.',
      },
    ],
  },
  {
    headline: 'Built-in chat for context',
    description:
      'An AI assistant sits alongside every Trace Table, with full context of the table and all source documents.',
    imageAlt: 'Chat assistant alongside a Trace Table',
    subFeatures: [
      {
        title: 'Ask about any cell',
        description:
          '"Why did you extract this value for document 14?"',
      },
      {
        title: 'Cross-document questions',
        description:
          '"Which leases have the highest indexation?"',
      },
      {
        title: 'Full table context',
        description:
          'The chat knows every row, column, and source.',
      },
    ],
  },
]

const detailItems = [
  {
    title: 'Custom columns',
    description:
      'Define any question as a column — no coding required.',
  },
  {
    title: 'Bulk processing',
    description:
      'Extract from dozens or hundreds of documents at once.',
  },
  {
    title: 'Export to Excel',
    description: 'Download your Trace Table as a spreadsheet.',
  },
  {
    title: 'Collaborative review',
    description:
      'Multiple team members can review and annotate the same table.',
  },
  {
    title: 'Re-run on new documents',
    description:
      'Add documents to a Vault and re-run the extraction.',
  },
  {
    title: 'Save as template',
    description:
      'Turn any custom table into a reusable template for your team.',
  },
]

const useCases = [
  {
    id: 'lease-overview',
    title: 'Lease overview',
    description:
      'A portfolio manager needs rent, term, and break clause data from 150 leases. A Trace Table extracts everything into a structured table — every cell traceable to its source.',
  },
  {
    id: 'compliance-audit',
    title: 'Compliance audit',
    description:
      'A compliance officer checks whether all properties meet new energy certification requirements. The Trace Table flags gaps and cites the exact document for each finding.',
  },
  {
    id: 'due-diligence',
    title: 'Due diligence review',
    description:
      'An analyst receives 300 documents for a transaction. A Trace Table extracts key terms, obligations, and risks — each cell linked to the source passage for verification by the deal team.',
  },
]

const faqs = [
  {
    question: 'What is a Trace Table?',
    answer:
      'A structured table where every data point links back to the exact source document, page, and paragraph it was extracted from.',
  },
  {
    question: 'What kind of documents can I extract from?',
    answer:
      'Rent rolls, lease portfolios, inspection reports, insurance policies — any set of documents with a repeating structure.',
  },
  {
    question: 'How do I know the extracted data is correct?',
    answer:
      'Every cell in the table links to its source. Ambiguous or uncertain values are flagged so you can verify them.',
  },
  {
    question: 'Can I customise which fields are extracted?',
    answer:
      'Yes — define the columns you need: tenant name, rent amount, lease start, break clause, or anything else in the documents.',
  },
  {
    question: 'Can I export the data?',
    answer:
      'Yes — export to Excel or CSV with source references intact.',
  },
]

export const metadata: Metadata = { title: 'Trace Table' }

export default function TraceTablePage() {
  return (
    <>
      <ProductHero
        category="Product"
        pageName="Trace Table"
        headline="Turn any document stack into structured intelligence."
        description="Upload a stack of leases, inspections, or contracts. Henric extracts the data, structures it into a table, and ties every cell back to its source document, page, and paragraph."
        ctaText="Book a demo"
        ctaLink="/book-demo"
      />
      <ProductProcess steps={processSteps} />
      <ProductCapabilities
        eyebrow="Trace Table"
        headline="Every answer, traceable to the source."
        capabilities={capabilities}
      />
      <ProductDetailsGrid items={detailItems} />
      <SolutionUseCases
        headline="From document stack to structured table in minutes."
        useCases={useCases}
      />
      <FAQSection faqs={faqs} />
      <CTASection
        headline="Stop building spreadsheets by hand."
        subheadline="Book a demo and see Henric turn a stack of documents into a structured, traceable table in minutes."
      />
    </>
  )
}
