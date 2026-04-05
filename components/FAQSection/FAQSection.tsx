'use client'

import { useState } from 'react'
import styles from './FAQSection.module.css'

const defaultFaqs = [
  {
    question: 'Can I trust the answers?',
    answer:
      'Every answer cites the exact document, page, and paragraph. Nothing is generated — everything is extracted and verifiable in one click.',
  },
  {
    question: 'Does it work with Swedish documents?',
    answer:
      'Built for it. Swedish leases, KPI-indexation, OVK, energideklarationer, fastighetsbeteckningar. Any language, any format.',
  },
  {
    question: 'Is our data safe?',
    answer:
      'EU-only hosting. Your documents are never used to train models. Full tenant isolation.',
  },
  {
    question: 'How is this different from general AI tools?',
    answer:
      'General tools can read a document. Henric reads hundreds at once, cross-references them, extracts structured data, and cites every answer to the exact clause and page. Built specifically for real estate workflows.',
  },
  {
    question: 'Who is Henric for?',
    answer:
      'Asset managers, transaction teams, and property professionals who spend too much time reading, extracting, and rentering data from documents.',
  },
  {
    question: 'How do I get access?',
    answer:
      'We\'re onboarding a select group of design partners. Book a demo and we\'ll show you what it looks like with your documents.',
  },
]

interface FAQSectionProps {
  heading?: string
  faqs?: { question: string; answer: string }[]
  variant?: 'light' | 'dark'
}

export function FAQSection({ heading = 'Frequently asked questions', faqs = defaultFaqs, variant = 'light' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`${styles.section} ${variant === 'dark' ? styles.dark : ''}`}>
      <div className={styles.grid}>
        <h2 className={styles.heading}>{heading}</h2>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button
                type="button"
                className={styles.question}
                aria-expanded={openIndex === index}
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span className={styles.icon} aria-hidden="true" />
              </button>

              <div className={styles.answerWrapper}>
                <div className={styles.answerInner}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
