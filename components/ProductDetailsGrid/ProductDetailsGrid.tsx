import styles from './ProductDetailsGrid.module.css'

interface DetailItem {
  title: string
  description: string
}

interface ProductDetailsGridProps {
  items: DetailItem[]
}

export function ProductDetailsGrid({ items }: ProductDetailsGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>At a glance</span>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.cell}>
              <h3 className={styles.cellTitle}>{item.title}</h3>
              <p className={styles.cellDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
