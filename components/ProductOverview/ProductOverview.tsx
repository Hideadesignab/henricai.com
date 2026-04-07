import Image from 'next/image'
import styles from './ProductOverview.module.css'

const products = [
  {
    title: 'Structure everything',
    image: '/images/features/vault.png',
    description:
      'Every property comes with decades of documentation. Henric brings it all into one place — searchable, extractable, and ready for decisions only your team can make.',
  },
  {
    title: 'Find anything',
    image: '/images/features/assistent.png',
    description:
      'The answer already exists somewhere in your organisation. Henric finds it — across leases, protocols, budgets, and records — in seconds, in any language, with a citation to the exact source.',
  },
  {
    title: 'Review faster',
    image: '/images/features/trace-table.png',
    description:
      'Managing a portfolio means reading thousands of pages no one else will. Henric lets you extract, compare, and verify across hundreds of documents at once — every data point traced to the exact clause and page.',
  },
]

export default function ProductOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>PURPOSE-BUILT FOR COMMERCIAL REAL ESTATE</span>
        <h2 className={styles.headline}>
          From search to structure to verification — so your team spends less time on the routine, and more time on the work that matters.
        </h2>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.title} className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(min-width: 1025px) 25vw, (min-width: 768px) 50vw, 100vw"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <h3 className={styles.cardTitle}>{product.title}</h3>
            <p className={styles.cardDescription}>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
