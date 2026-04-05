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
    headline: 'Create a Vault',
    description:
      "Set up a Vault for a building, a project, or a knowledge base. Give it a name, and you're ready to go.",
    imageAlt: 'Creating a new Vault in Henric',
  },
  {
    number: '02',
    headline: 'Upload your documents',
    description:
      'Add leases, protocols, inspection reports, board minutes — any document type. Everything is indexed automatically.',
    imageAlt: 'Uploading documents to a Henric Vault',
  },
  {
    number: '03',
    headline: 'Work with your data',
    description:
      'Search across all documents with the built-in Assistant. Extract structured data with Trace Tables. Everything stays organised.',
    imageAlt: 'Searching and extracting from Vault documents',
  },
]

const capabilities = [
  {
    headline: 'One Vault, one context',
    description:
      'Each Vault is a self-contained workspace. Documents, search, and analysis all scoped to the right context — no noise from unrelated projects.',
    imageAlt: 'Vault scoped to a single building context',
    subFeatures: [
      {
        title: 'Property Vaults',
        description: 'All documents for Kv Bjorken in one place.',
      },
      {
        title: 'Project Vaults',
        description: 'Due diligence materials, organised by deal.',
      },
      {
        title: 'Knowledge Vaults',
        description: 'Company policies, handbooks, and templates.',
      },
    ],
  },
  {
    headline: 'Built-in intelligence',
    description:
      'Every Vault has its own Assistant and its own Trace Tables. Search and extract without switching tools.',
    imageAlt: 'Vault with built-in Assistant and Trace Tables',
    subFeatures: [
      {
        title: 'Local Assistant',
        description:
          "Ask questions scoped to this Vault's documents.",
      },
      {
        title: 'Local Trace Tables',
        description:
          "Run extractions across this Vault's documents.",
      },
      {
        title: 'Cross-Vault search',
        description:
          'Connect multiple Vaults when you need a broader view.',
      },
    ],
  },
  {
    headline: 'Upload once, use everywhere',
    description:
      'Documents are processed on upload. No re-uploading, no duplicate files, no broken links.',
    imageAlt: 'Document automatically indexed after upload',
    subFeatures: [
      {
        title: 'Automatic indexing',
        description:
          "Documents become searchable the moment they're uploaded.",
      },
      {
        title: 'Any format',
        description: 'PDFs, Word documents, scanned files, spreadsheets.',
      },
      {
        title: 'Version management',
        description:
          'Update documents without losing previous analysis.',
      },
    ],
  },
]

const detailItems = [
  {
    title: 'Drag-and-drop upload',
    description: 'Add documents by dragging them into the Vault.',
  },
  {
    title: 'Sharing and permissions',
    description:
      'Control who can view, edit, or analyse documents in each Vault.',
  },
  {
    title: 'Bulk upload',
    description: 'Add hundreds of documents at once.',
  },
  {
    title: 'Folder structure',
    description: 'Organise documents within a Vault however you prefer.',
  },
  {
    title: 'Full-text search',
    description: 'Search across every document in the Vault instantly.',
  },
  {
    title: 'Activity log',
    description:
      'See who uploaded, searched, or extracted from the Vault.',
  },
]

const useCases = [
  {
    id: 'property-operations',
    title: 'Property operations',
    description:
      'A building manager creates a Vault for Kv Bjorken. Leases, inspection reports, tenant correspondence, and maintenance logs — all in one place, instantly searchable by anyone on the team.',
  },
  {
    id: 'due-diligence',
    title: 'Due diligence',
    description:
      'An analyst sets up a Vault for a Q2 acquisition. Uploads 200 documents. Within minutes, the team is searching and extracting across the entire data room with the built-in Assistant.',
  },
  {
    id: 'knowledge-base',
    title: 'Company knowledge base',
    description:
      'HR creates a Vault for all internal policies and handbooks. Any employee can ask the Assistant a question and get an answer with the exact source document and paragraph.',
  },
]

const faqs = [
  {
    question: 'How is Vault different from regular document storage?',
    answer:
      "Vault doesn't just store files — it reads them, classifies them, and makes them queryable across your entire portfolio.",
  },
  {
    question: 'What document formats does Vault support?',
    answer:
      'PDFs — scanned or digital — and any document format your team already works with.',
  },
  {
    question: 'How does Vault organise documents?',
    answer:
      'Documents are automatically classified by type and property. You can also define custom structures to match your organisation.',
  },
  {
    question: 'Can we control who accesses which documents?',
    answer:
      'Yes — granular permissions per organisation, team, and property.',
  },
  {
    question: 'How do we migrate existing documents?',
    answer:
      'Upload directly or connect your Google Workspace or Microsoft 365 — Vault handles the rest.',
  },
]

export const metadata: Metadata = { title: 'Vault' }

export default function VaultPage() {
  return (
    <>
      <ProductHero
        category="Product"
        pageName="Vault"
        headline="All your building intelligence, in one place."
        description="A single, structured home for every document across your portfolio. Upload leases, protocols, valuations, and insurance policies — Henric organises, classifies, and makes them instantly accessible."
        ctaText="Book a demo"
        ctaLink="/book-demo"
      />
      <ProductProcess steps={processSteps} />
      <ProductCapabilities
        eyebrow="Vault"
        headline="One place for everything that matters."
        capabilities={capabilities}
      />
      <ProductDetailsGrid items={detailItems} />
      <SolutionUseCases
        headline="A Vault for every building, project, and knowledge base."
        useCases={useCases}
      />
      <FAQSection faqs={faqs} />
      <CTASection
        headline="Your documents deserve better than a folder structure."
        subheadline="Book a demo and see how Vault turns scattered files into structured building intelligence."
      />
    </>
  )
}
