import Link from 'next/link'
import styles from '../../privacy/page.module.css'

export default function SpecificationOfDataProcessingPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/legal/terms" className={styles.backLink}>
            <span className={styles.backArrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M11 8H3M6 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span> Back to Terms
          </Link>
          <h1 className={styles.title}>Specification of Data Processing</h1>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <p className={styles.lastUpdated}>Last updated March 2026</p>

          {/* Section 1 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>1</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Subject matter and purposes of the processing</h2>
              <p className={styles.paragraph}>
                Henric provides real estate professionals with an AI-native platform through a web-based SaaS solution.
              </p>
              <p className={styles.paragraph}>
                The Services are defined in the Agreement and include i.a. an AI Assistant for document-based questions with citations, Trace Table for structured document review and data extraction, Vault for centralized document storage, Microsoft SharePoint integration, Google Drive integration, and document analysis capabilities.
              </p>
              <p className={styles.paragraph}>
                Henric shall process Personal Data on behalf of the Subscriber for the purpose of providing the Services under the Agreement. Henric&apos;s processing of Personal Data on behalf of the Subscriber will be as necessary to perform the Services, and as further instructed by the Subscriber.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>2</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Data subjects</h2>
              <p className={styles.paragraph}>
                Individuals included in Subscriber Content, i.e. natural persons who are mentioned or otherwise included in the Subscriber&apos;s input data submitted to the Henric Platform. This may include tenants, property owners, contractors, and other individuals referenced in property management communications and documents.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>3</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Personal Data</h2>
              <p className={styles.paragraph}>
                Name, title, email or other personal data submitted in search queries, prompt queries or documents uploaded into the Services. This may include contact information, addresses, communication history, and other information contained in property management records that the Subscriber chooses to process using the Services.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>4</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Duration of processing</h2>
              <p className={styles.paragraph}>
                Henric&apos;s processing of Personal Data on the Subscriber&apos;s behalf will continue until the expiration or termination of the Agreement or as otherwise agreed between the Parties.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}></span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.sectionFooter}>
                <p className={styles.paragraph}>
                  If you have any questions about this Specification, please contact us at{' '}
                  <a href="mailto:legal@henricai.com" className={styles.link}>legal@henricai.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
