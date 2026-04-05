import Link from 'next/link'
import styles from './HenricStory.module.css'

// Section 1 data
const section1Items = [
  { word: 'Read.', description: 'Contracts, reports, case files, emails.' },
  { word: 'Write.', description: 'Replies, memos, documentation, follow-ups.' },
  { word: 'Search.', description: 'Prices, contacts, clauses, history.' },
]

// Section 2 data
const section2Items = [
  { word: 'Read', description: 'Henric reads 40 pages and gives you 10 key points.' },
  { word: 'Write', description: 'Henric drafts the response. You review and send.' },
  { word: 'Search', description: 'Henric finds the answer. With the source.' },
]

// Section 3 data
const section3Cards = [
  { title: 'In Outlook', description: 'Henric drafts replies before you start typing.', href: '/plattform/outlook-add-in' },
  { title: 'In the editor', description: 'Henric writes with you, not for you.', href: '/plattform/editor' },
  { title: 'In your files', description: 'Henric extracts data from stacks of documents.', href: '/plattform/tabular-review' },
]

export function HenricStory() {
  return (
    <div className={styles.wrapper}>
      {/* Section 1: Editorial Typography */}
      <section className={styles.section1}>
        <div className={styles.container}>
          <h2 className={styles.headline}>What do you do all day?</h2>
        </div>
        <div className={styles.editorialGrid}>
          {section1Items.map((item) => (
            <div key={item.word} className={styles.editorialItem}>
              <span className={styles.editorialWord}>{item.word}</span>
              <p className={styles.editorialDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Clean Text Rows */}
      <section className={styles.section2}>
        <div className={styles.container}>
          <h2 className={styles.headline}>Henric already knows.</h2>
        </div>
        <div className={styles.textRowsContainer}>
          {section2Items.map((item) => (
            <div key={item.word} className={styles.textRow}>
              <span className={styles.textRowWord}>{item.word}</span>
              <span className={styles.textRowDash}> — </span>
              <span className={styles.textRowDescription}>{item.description}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Image Cards */}
      <section className={styles.section3}>
        <div className={styles.container}>
          <h2 className={styles.headline}>And Henric is already where you work.</h2>
        </div>
        <div className={styles.cardsGrid}>
          {section3Cards.map((card) => (
            <Link key={card.title} href={card.href} className={styles.cardLink}>
              <div className={styles.card}>
                <div className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
