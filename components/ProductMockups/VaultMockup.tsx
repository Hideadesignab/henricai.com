import styles from './ProductMockups.module.css'

const files = [
  { type: 'PDF', name: 'Hyresavtal — Storgatan 12', size: '2.4 MB', tag: 'Avtal' },
  { type: 'PDF', name: 'Energideklaration 2024', size: '1.1 MB', tag: 'Certifiering' },
  { type: 'DOCX', name: 'Förvaltningsrapport Q4', size: '3.7 MB', tag: 'Rapport' },
  { type: 'XLSX', name: 'Hyresförteckning 2024', size: '456 KB', tag: 'Data' },
  { type: 'PDF', name: 'Besiktningsprotokoll', size: '1.8 MB', tag: 'Protokoll' },
  { type: 'PDF', name: 'Planritning våning 3', size: '5.2 MB', tag: 'Ritning' },
]

export default function VaultMockup() {
  return (
    <div className={styles.mockupContainer}>
      <div className={styles.vaultWindow}>
        <div className={styles.vaultHeader}>
          <span className={styles.vaultTitle}>Kv. Blåklinten 4</span>
          <div className={styles.vaultMeta}>
            <span className={styles.vaultMetaItem}>32 dokument</span>
            <span className={styles.vaultMetaDot} />
            <span className={styles.vaultMetaItem}>Senast uppdaterad idag</span>
          </div>
        </div>

        <div className={styles.vaultSources}>
          <div className={styles.sourceChip}>
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className={styles.sourceIcon}>
              <path d="M8 1L14.5 4.5V11.5L8 15L1.5 11.5V4.5L8 1Z" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            SharePoint
          </div>
          <div className={styles.sourceChip}>
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className={styles.sourceIcon}>
              <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Google Drive
          </div>
          <div className={styles.sourceChipConnected}>Synkad</div>
        </div>

        <div className={styles.vaultFiles}>
          {files.map((file, i) => (
            <div key={i} className={styles.vaultFileRow}>
              <span className={`${styles.vaultFileIcon} ${styles[`vaultFileIcon${file.type}`]}`}>
                {file.type}
              </span>
              <span className={styles.vaultFileName}>{file.name}</span>
              <span className={styles.vaultFileTag}>{file.tag}</span>
              <span className={styles.vaultFileSize}>{file.size}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.fadeBottom} />
    </div>
  )
}
