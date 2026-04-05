import Link from 'next/link'
import styles from '../../privacy/page.module.css'

export default function SubProcessorsPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/legal/terms" className={styles.backLink}>
            <span className={styles.backArrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M11 8H3M6 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span> Back to Terms
          </Link>
          <h1 className={styles.title}>Sub-processors</h1>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <p className={styles.lastUpdated}>Last updated March 2026</p>

          {/* Intro */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}></span>
            </div>
            <div className={styles.sectionContent}>
              <p className={styles.paragraph}>
                For each sub-processor that we use, we apply the principles of least privilege. This means that each third-party system shall only have access to the minimum data required to fulfill its purpose. All sub-processors are bound by data processing agreements that impose materially the same data protection obligations as those in our Data Processing Agreement.
              </p>
            </div>
          </div>

          {/* Sub-processor Table */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}></span>
            </div>
            <div className={`${styles.sectionContent} ${styles.tableWrapper}`}>
              <table className={styles.table}>
                <thead className={styles.tableHead}>
                  <tr>
                    <th>Sub-processor</th>
                    <th>Purpose</th>
                    <th>Data categories</th>
                    <th>Data residency</th>
                    <th>Legal entity</th>
                  </tr>
                </thead>
                <tbody className={styles.tableBody}>
                  <tr>
                    <td>Anthropic</td>
                    <td>AI processing and language model inference</td>
                    <td>Personal data included in Subscriber Content</td>
                    <td>US (with EU SCCs)</td>
                    <td>
                      Anthropic, PBC<br />
                      548 Market St, PMB 90375<br />
                      San Francisco, CA 94104, USA
                    </td>
                  </tr>
                  <tr>
                    <td>OpenAI</td>
                    <td>AI processing and language model inference</td>
                    <td>Personal data included in Subscriber Content</td>
                    <td>US (with EU SCCs)</td>
                    <td>
                      OpenAI, LLC<br />
                      3180 18th St<br />
                      San Francisco, CA 94110, USA
                    </td>
                  </tr>
                  <tr>
                    <td>Vercel</td>
                    <td>Hosting, infrastructure and edge network</td>
                    <td>Technical Information, Usage data</td>
                    <td>EU/EEA</td>
                    <td>
                      Vercel Inc.<br />
                      340 S Lemon Ave #4133<br />
                      Walnut, CA 91789, USA
                    </td>
                  </tr>
                  <tr>
                    <td>Railway</td>
                    <td>Application hosting and infrastructure</td>
                    <td>Technical Information, Usage data</td>
                    <td>US (with EU SCCs)</td>
                    <td>
                      Railway Corp.<br />
                      San Francisco, CA, USA
                    </td>
                  </tr>
                  <tr>
                    <td>Supabase</td>
                    <td>Database and authentication services</td>
                    <td>User account information</td>
                    <td>EU (Frankfurt)</td>
                    <td>
                      Supabase Inc.<br />
                      970 Toa Payoh North #07-04<br />
                      Singapore 318992
                    </td>
                  </tr>
                  <tr>
                    <td>Upstash</td>
                    <td>Caching, rate limiting and message queues</td>
                    <td>Technical Information</td>
                    <td>EU (Frankfurt)</td>
                    <td>
                      Upstash Inc.<br />
                      San Francisco, CA, USA
                    </td>
                  </tr>
                  <tr>
                    <td>PostHog</td>
                    <td>Product analytics and usage tracking</td>
                    <td>Usage data, Technical Information</td>
                    <td>EU</td>
                    <td>
                      PostHog Inc.<br />
                      2261 Market Street #4008<br />
                      San Francisco, CA 94114, USA
                    </td>
                  </tr>
                  <tr>
                    <td>Sentry</td>
                    <td>Error monitoring and performance tracking</td>
                    <td>Technical Information, Usage data</td>
                    <td>US (with EU SCCs)</td>
                    <td>
                      Functional Software Inc. (dba Sentry)<br />
                      45 Fremont St, 8th Floor<br />
                      San Francisco, CA 94105, USA
                    </td>
                  </tr>
                  <tr>
                    <td>Resend</td>
                    <td>Transactional email delivery</td>
                    <td>Email addresses, names</td>
                    <td>US (with EU SCCs)</td>
                    <td>
                      Resend Inc.<br />
                      San Francisco, CA, USA
                    </td>
                  </tr>
                  <tr>
                    <td>Brave Search</td>
                    <td>Web search functionality</td>
                    <td>Search queries</td>
                    <td>US (with EU SCCs)</td>
                    <td>
                      Brave Software Inc.<br />
                      580 Howard St, Suite 402<br />
                      San Francisco, CA 94105, USA
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Note about updates */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}></span>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.sectionFooter}>
                <p className={styles.paragraph}>
                  We will update this list when we engage new sub-processors or make changes to existing ones. In accordance with our Data Processing Agreement, we will provide at least 30 days notice before engaging a new sub-processor. If you have any questions about our sub-processors, please contact us at{' '}
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
