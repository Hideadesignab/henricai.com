import type { Metadata } from 'next'
import { ProductHero } from '@/components/ProductHero'
import { FeatureSection } from '@/components/FeatureSection'
import { TeamsSection } from '@/components/TeamsSection'
import { FAQSection } from '@/components/FAQSection'
import { CTASection } from '@/components/CTASection'
import styles from './page.module.css'

const faqs = [
  {
    question: 'What does Henric actually do?',
    answer:
      'Henric turns the documents your organisation already has — leases, protocols, budgets — into structured data you can query, extract from, and act on.',
  },
  {
    question: 'Is Henric a property management system?',
    answer:
      'No. Henric is the intelligence layer that sits alongside your existing property management systems.',
  },
  {
    question: 'What kinds of organisations use Henric?',
    answer:
      'Property companies, commercial real estate firms, and asset and fund managers across Sweden.',
  },
  {
    question: 'How does Henric handle our data?',
    answer:
      'Henric is ISO 27001 certified. Every document is encrypted, fully isolated per organisation, and never used to train AI models.',
  },
  {
    question: 'How do we get started?',
    answer:
      "Book a demo and we'll show you Henric using your own documents — not a generic presentation.",
  },
]

const assistantFeature = {
  title: 'Every answer traced to the source',
  intro:
    'Ask any question about your buildings, leases, or operations. Henric searches your documents and returns answers you can verify before you act.',
  items: [
    {
      title: 'Document Q&A',
      description:
        'Ask questions across leases, contracts, protocols, and reports. Every answer includes the exact document, page, and paragraph.',
    },
    {
      title: 'Draft and review',
      description:
        'Generate memos, summaries, and tenant responses grounded in your actual documents. Edit inline, export when ready.',
    },
    {
      title: 'Any language',
      description:
        'Ask in Swedish, get answers in Swedish. Henric understands every document regardless of language or format.',
    },
  ],
}

const vaultFeature = {
  title: 'Everything about a building, in one place',
  intro:
    'Each Vault holds every document that matters — leases, protocols, inspections, budgets. Upload once, search and extract forever.',
  items: [
    {
      title: 'One Vault per building',
      description:
        'Create a Vault for each property in your portfolio. Every document lives where it belongs.',
    },
    {
      title: 'Search within or across',
      description:
        'Ask questions inside a single Vault for local answers. Use Assistant for cross-portfolio queries across all Vaults at once.',
    },
    {
      title: 'Beyond buildings',
      description:
        'Create Vaults for anything — company policies, due diligence projects, board materials. Same intelligence, any context.',
    },
  ],
}

const traceTableFeature = {
  title: 'Structure hundreds of documents at once',
  intro:
    'Define what you need, upload your documents, and get a structured table where every cell is verified and traceable to the source.',
  items: [
    {
      title: 'Define your columns',
      description:
        'Choose from templates or write custom questions. Each column becomes a query Henric runs against every document.',
    },
    {
      title: 'Reasoning and citations',
      description:
        'Every cell shows the extracted answer, the reasoning behind it, and the exact location in the document. Click to see the highlighted source.',
    },
    {
      title: 'Chat alongside',
      description:
        'An assistant sits next to your table with the full dataset as context. Find patterns, spot outliers, ask follow-ups.',
    },
  ],
}

const teamsItems = [
  {
    title: 'Lease review at scale',
    description:
      'Extract rent amounts, expiry dates, index clauses, and break options across hundreds of leases into one structured view.',
  },
  {
    title: 'Due diligence',
    description:
      'Analyse acquisition documents in hours, not weeks. Surface key terms, risks, and deviations with exact citations.',
  },
  {
    title: 'Compliance verification',
    description:
      'Check OVK status, fire safety inspections, and energy declarations across your portfolio before the auditor does.',
  },
  {
    title: 'Tenant questions',
    description:
      'Find the answer to any tenant question in seconds — what their lease says, what was agreed, what applies.',
  },
  {
    title: 'Portfolio reporting',
    description:
      'Pull operational and financial data from management reports across properties into structured overviews for board and investors.',
  },
]

export const metadata: Metadata = { title: 'Product' }

export default function ProductPage() {
  return (
    <>
      <ProductHero
        category="Product"
        pageName="Overview"
        headline="Where real estate operates."
        description="Henric turns the documents your organisation already has into structured, traceable intelligence. Ask questions, extract data, and make decisions — all grounded in the source material."
        ctaText="Book a demo"
        ctaLink="/book-demo"
      />
      <div className={styles.introStatement}>
        <p className={styles.introText}>
          <span className={styles.bold}>Three tools that turn documents into answers.</span>{' '}
          <span className={styles.light}>
            Ask questions with Assistant. Organise everything in Vaults. Extract structured data with Trace Table.
          </span>
        </p>
      </div>
      <div className={styles.featuresContainer}>
        <FeatureSection {...assistantFeature} zIndex={1} />
        <FeatureSection {...vaultFeature} zIndex={2} />
        <FeatureSection {...traceTableFeature} zIndex={3} />
      </div>
      <TeamsSection headline="How teams use Henric" items={teamsItems} />
      <FAQSection faqs={faqs} />
      <CTASection
        headline="See what precision looks like."
        subheadline="Book a demo and we'll show you how Henric works with your documents — not a generic presentation."
      />
    </>
  )
}
