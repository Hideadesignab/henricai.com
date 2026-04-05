import styles from './ProductMockups.module.css'

const columns = ['Fastighet', 'Hyresgäst', 'Hyra/mån', 'Indexklausul', 'Utgår']

const rows = [
  ['Storgatan 12', 'Handelsbanken AB', '142 500 kr', 'KPI 100%', '2026-06-30'],
  ['Birger Jarlsgatan 28', 'Advokatfirman Vinge', '98 200 kr', 'KPI 75%', '2025-12-31'],
  ['Sveavägen 44', 'WeWork Sweden AB', '215 000 kr', 'Fast 2%', '2027-03-31'],
  ['Kungsgatan 8', 'Nordea Bank Abp', '186 400 kr', 'KPI 100%', '2028-09-30'],
  ['Vasagatan 16', 'EY Sverige AB', '124 800 kr', 'KPI 80%', '2025-08-31'],
]

export default function TraceTableMockup() {
  return (
    <div className={styles.mockupContainer}>
      <div className={styles.traceWindow}>
        <div className={styles.traceHeader}>
          <span className={styles.traceTitle}>Hyresöversikt — Kungsholmen Portfolio</span>
          <div className={styles.traceBadge}>5 fastigheter</div>
        </div>
        <div className={styles.traceTable}>
          <div className={styles.traceRow + ' ' + styles.traceRowHeader}>
            {columns.map((col) => (
              <span key={col} className={styles.traceCell}>{col}</span>
            ))}
          </div>
          {rows.map((row, i) => (
            <div key={i} className={`${styles.traceRow} ${i === 0 ? styles.traceRowHighlight : ''}`}>
              {row.map((cell, j) => (
                <span key={j} className={styles.traceCell}>
                  {cell}
                  {i === 0 && j === 3 && (
                    <span className={styles.sourceBadge}>Avtal §4.2</span>
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fadeBottom} />
    </div>
  )
}
