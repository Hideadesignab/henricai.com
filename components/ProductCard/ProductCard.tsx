import styles from './ProductCard.module.css'

const systems = [
  { name: 'Google Workspace', active: true },
  { name: 'Microsoft 365', active: true },
  { name: 'SharePoint', active: false },
  { name: 'OneDrive', active: false },
  { name: 'Google Drive', active: false },
]

export function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>Fastighetssystem</span>
        <div className={styles.dots}>
          <span className={styles.dot} data-color="red" />
          <span className={styles.dot} data-color="yellow" />
          <span className={styles.dot} data-color="green" />
        </div>
      </div>
      <div className={styles.list}>
        {systems.map((system) => (
          <div
            key={system.name}
            className={styles.item}
            data-active={system.active}
          >
            <span className={styles.itemName}>{system.name}</span>
            {system.active && <span className={styles.arrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5 8h8M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span>}
          </div>
        ))}
      </div>
    </div>
  )
}
