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
    headline: 'Ask your question',
    description:
      'Type a question in any language. The Assistant understands context, handles follow-ups, and knows which documents to search.',
    imageAlt: 'Typing a question in Henric Assistant',
  },
  {
    number: '02',
    headline: 'Get answers with exact sources',
    description:
      'Henric searches across all connected Vaults and returns the answer with the exact document, page, and paragraph.',
    imageAlt: 'Henric Assistant returning a cited answer',
  },
  {
    number: '03',
    headline: 'Act on the answer',
    description:
      'Draft a memo, write a tenant response, generate a summary, or export — directly from the conversation.',
    imageAlt: 'Drafting a memo from an Assistant answer',
  },
]

const capabilities = [
  {
    headline: 'Cross-document intelligence',
    description:
      "The Assistant doesn't search one file at a time. It reads across every document in your connected Vaults to find the right answer.",
    imageAlt: 'Cross-document search across multiple Vaults',
    subFeatures: [
      {
        title: 'Multi-Vault search',
        description:
          'Simultaneous search across buildings, projects, and knowledge bases.',
      },
      {
        title: 'Context awareness',
        description:
          'Understands follow-up questions and maintains conversation context.',
      },
      {
        title: 'Precision ranking',
        description:
          'Returns the most relevant passages, not just keyword matches.',
      },
    ],
  },
  {
    headline: 'Exact citations, always',
    description:
      'Every answer comes with a traceable source. Verify the document, page, and paragraph in one click.',
    imageAlt: 'Answer with document citation and page reference',
    subFeatures: [
      {
        title: 'Document-level attribution',
        description: 'See exactly which document the answer comes from.',
      },
      {
        title: 'Page and paragraph reference',
        description: 'Navigate directly to the cited passage.',
      },
      {
        title: 'Source highlighting',
        description:
          'The exact text is highlighted in the original document.',
      },
    ],
  },
  {
    headline: 'Works in any language',
    description:
      'Ask in Swedish, get answers from English documents. The Assistant works across languages without manual translation.',
    imageAlt: 'Multilingual query and response in Henric Assistant',
    subFeatures: [
      {
        title: 'Multilingual queries',
        description: 'Ask questions in your preferred language.',
      },
      {
        title: 'Cross-language search',
        description: 'Find answers regardless of document language.',
      },
      {
        title: 'Native-quality output',
        description: 'Responses read naturally in the requested language.',
      },
    ],
  },
]

const detailItems = [
  {
    title: 'Mobile access',
    description:
      'Use the Assistant from anywhere — desktop, tablet, or phone.',
  },
  {
    title: 'Draft memos',
    description:
      'Generate structured memos and summaries from your conversations.',
  },
  {
    title: 'Tenant responses',
    description:
      'Draft professional responses to tenant questions in seconds.',
  },
  {
    title: 'Follow-up questions',
    description:
      'Refine your search with follow-ups without repeating context.',
  },
  {
    title: 'Export and share',
    description:
      'Send answers and citations to colleagues or external parties.',
  },
  {
    title: 'Conversation history',
    description:
      'Return to previous conversations and pick up where you left off.',
  },
]

const useCases = [
  {
    id: 'tenant-questions',
    title: 'Answering tenant questions',
    description:
      'A property manager receives a question about break clauses. The Assistant finds the relevant clause across all leases for that building and drafts a response — with the source attached.',
  },
  {
    id: 'due-diligence',
    title: 'Due diligence research',
    description:
      'An analyst needs to compare rent escalation terms across 40 leases. The Assistant surfaces every relevant passage with exact citations — no manual review required.',
  },
  {
    id: 'compliance',
    title: 'Policy compliance checks',
    description:
      'A team lead checks whether a building complies with new fire safety regulations. The Assistant cross-references inspection reports and policy documents, citing every finding.',
  },
]

const faqs = [
  {
    question: 'What kind of questions can I ask?',
    answer:
      "Rent levels, CPI clauses, insurance expiry dates, maintenance responsibilities — if it's in your documents, Henric finds it.",
  },
  {
    question: 'How does Henric reference its sources?',
    answer:
      'Every answer includes the document name, page, and paragraph — click to verify directly in the source.',
  },
  {
    question: "What happens when the answer isn't in the documents?",
    answer:
      "Henric tells you it doesn't have enough information. No guessing, no hallucination.",
  },
  {
    question: 'Does it understand Swedish real estate terminology?',
    answer:
      'Yes — Fastighetsagarna templates, gransdragningslistor, hyresforhandlingar, and all of it. Built for Swedish real estate from the ground up.',
  },
  {
    question: 'Can different teams ask about different properties?',
    answer:
      'Yes — permissions are set per organisation, per team, and per property.',
  },
]

export const metadata: Metadata = { title: 'Assistant' }

export default function AssistantPage() {
  return (
    <>
      <ProductHero
        category="Product"
        pageName="Assistant"
        headline="Your buildings, answerable."
        description="Ask any question about your properties and get a precise answer — with the exact document, page, and paragraph it came from. Built for Swedish real estate documents from the ground up."
        ctaText="Book a demo"
        ctaLink="/book-demo"
      />
      <ProductProcess steps={processSteps} />
      <ProductCapabilities
        eyebrow="Assistant"
        headline="Intelligence that goes where you need it."
        capabilities={capabilities}
      />
      <ProductDetailsGrid items={detailItems} />
      <SolutionUseCases
        headline="Built for the questions your team asks every day."
        useCases={useCases}
      />
      <FAQSection faqs={faqs} />
      <CTASection
        headline="Ask your buildings a question."
        subheadline="Book a demo and see Henric answer questions from your own documents — with full source traceability."
      />
    </>
  )
}
