import styles from './HeroMockup.module.css'

const documents = [
  { type: 'PDF', name: 'Hyresavtal — Storgatan 12, LGH 1201', date: '2024-01-15', size: '2.4 MB' },
  { type: 'PDF', name: 'Protokoll styrelsemöte 2024-Q1', date: '2024-03-22', size: '890 KB' },
  { type: 'PDF', name: 'Energideklaration — Kv. Blåklinten 4', date: '2024-02-08', size: '1.1 MB' },
  { type: 'DOCX', name: 'Förvaltningsrapport Södermalm H2 2023', date: '2023-12-18', size: '3.7 MB' },
  { type: 'XLSX', name: 'Hyresförteckning — Vasastan Portfolio', date: '2024-04-01', size: '456 KB' },
  { type: 'PDF', name: 'Besiktningsprotokoll — Birger Jarlsgatan 28', date: '2024-02-14', size: '1.8 MB' },
  { type: 'PDF', name: 'Kontraktssammanställning Q1 2024', date: '2024-03-30', size: '2.1 MB' },
  { type: 'PDF', name: 'Miljöcertifiering BREEAM — Kv. Eken', date: '2023-11-05', size: '4.2 MB' },
]

const navItems = [
  { label: 'Vault', active: true },
  { label: 'Assistant', active: false },
  { label: 'Trace Tables', active: false },
]

export default function HeroMockup() {
  return (
    <div className={styles.mockup}>
      <div className={styles.window}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.logoMark}>
              <div className={styles.logoBar} />
              <div className={styles.logoBar} />
              <div className={styles.logoBar} />
            </div>
          </div>
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`${styles.navItem} ${item.active ? styles.navItemActive : ''}`}
              >
                {item.label}
              </div>
            ))}
          </nav>
          <div className={styles.sidebarFooter}>
            <div className={styles.workspaceName}>Kungsholmen AB</div>
          </div>
        </div>

        {/* Main content */}
        <div className={styles.main}>
          <div className={styles.mainHeader}>
            <div className={styles.breadcrumb}>
              <span className={styles.breadcrumbMuted}>Vault</span>
              <span className={styles.breadcrumbSep}>/</span>
              <span>Kungsholmen Portfolio</span>
            </div>
            <div className={styles.headerActions}>
              <div className={styles.searchBar}>
                <span className={styles.searchIcon}>
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="11" y1="11" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span className={styles.searchPlaceholder}>Search documents...</span>
              </div>
              <div className={styles.uploadBtn}>Upload</div>
            </div>
          </div>

          <div className={styles.tableHeader}>
            <span className={styles.colName}>Name</span>
            <span className={styles.colType}>Type</span>
            <span className={styles.colDate}>Modified</span>
            <span className={styles.colSize}>Size</span>
          </div>

          <div className={styles.tableBody}>
            {documents.map((doc, i) => (
              <div key={i} className={styles.tableRow}>
                <span className={styles.colName}>
                  <span className={`${styles.fileIcon} ${styles[`fileIcon${doc.type}`]}`}>
                    {doc.type}
                  </span>
                  <span className={styles.fileName}>{doc.name}</span>
                </span>
                <span className={styles.colType}>{doc.type}</span>
                <span className={styles.colDate}>{doc.date}</span>
                <span className={styles.colSize}>{doc.size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade overlays */}
      <div className={styles.fadeBottom} />
      <div className={styles.fadeRight} />
      <div className={styles.fadeLeft} />
    </div>
  )
}
