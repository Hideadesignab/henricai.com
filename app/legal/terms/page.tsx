import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import styles from './page.module.css'

export default function TermsOverview() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Left - Title */}
            <div className={styles.titleColumn}>
              <h1 className={styles.title}>Terms</h1>
            </div>

            {/* Right - Document list */}
            <div className={styles.documentsColumn}>
              {/* Document 1: Data Processing Agreement */}
              <Link href="/legal/terms/data-processing-agreement" className={styles.documentItem}>
                <div className={styles.documentInfo}>
                  <span className={styles.documentNumber}>1</span>
                  <span className={styles.documentTitle}>Data Processing Agreement</span>
                </div>
                <span className={styles.arrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5 8h8M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span>
              </Link>

              {/* Sub-document: Specification of Data Processing */}
              <Link href="/legal/terms/specification-of-data-processing" className={styles.documentItem}>
                <div className={styles.documentInfo}>
                  <span className={styles.documentNumber}></span>
                  <span className={styles.documentTitle}>Specification of Data Processing</span>
                </div>
                <span className={styles.arrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5 8h8M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span>
              </Link>

              {/* Sub-document: Sub-processors */}
              <Link href="/legal/terms/sub-processors" className={styles.documentItem}>
                <div className={styles.documentInfo}>
                  <span className={styles.documentNumber}></span>
                  <span className={styles.documentTitle}>Sub-processors</span>
                </div>
                <span className={styles.arrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5 8h8M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span>
              </Link>

              {/* Document 2: Terms of Service */}
              <Link href="/legal/terms/terms-of-service" className={styles.documentItem}>
                <div className={styles.documentInfo}>
                  <span className={styles.documentNumber}>2</span>
                  <span className={styles.documentTitle}>Terms of Service</span>
                </div>
                <span className={styles.arrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5 8h8M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span>
              </Link>

              {/* Document 3: Acceptable Use Policy */}
              <Link href="/legal/terms/acceptable-use" className={styles.documentItem}>
                <div className={styles.documentInfo}>
                  <span className={styles.documentNumber}>3</span>
                  <span className={styles.documentTitle}>Acceptable Use Policy</span>
                </div>
                <span className={styles.arrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M5 8h8M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Questions about our terms?"
        subheadline="Book a demo and we'll walk you through our policies and answer any questions."
        buttonText="Book a demo"
      />
    </main>
  )
}
