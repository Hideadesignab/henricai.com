import Link from 'next/link'
import styles from '../privacy/page.module.css'

export default function SecurityPolicyPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/legal/terms" className={styles.backLink}>
            <span className={styles.backArrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M11 8H3M6 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span> Back to Terms
          </Link>
          <h1 className={styles.title}>Security Policy</h1>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <p className={styles.lastUpdated}>Last updated March 2026</p>

          {/* Intro */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}></div>
            <div className={styles.sectionContent}>
              <p className={styles.paragraph}>
                This Security Policy describes how Henric Sweden AB (&quot;Henric,&quot; &quot;we,&quot; or &quot;us&quot;) protects your data when you use our platform at app.henricai.com, our website at henricai.com, and any related services (together, the &quot;Services&quot;).
              </p>
              <p className={styles.paragraph}>
                This Security Policy is part of your Agreement with Henric. Any capitalized terms used but not defined here have the meaning set forth in the applicable Subscriber Agreement. The computing services used to deliver the Henric Platform are cloud-based and hosted within the EU/EEA (&quot;Cloud Environment&quot;).
              </p>
            </div>
          </div>

          {/* Section 1: Security overview */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>1</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Security overview</h2>
              <p className={styles.paragraph}>
                Henric is a Swedish company operating within the EU. We are committed to maintaining a high level of security for all data processed through our Services. As a company handling property management data, we understand the sensitivity of the information entrusted to us.
              </p>

              <h3 className={styles.subheading}>Current security measures</h3>
              <ul className={styles.list}>
                <li>Currently in the ISO/IEC 27001:2022 certification audit for our Information Security Management System (ISMS).</li>
                <li>Full compliance with the General Data Protection Regulation (GDPR) and Swedish data protection law (Dataskyddslagen).</li>
                <li>All data hosted within the EU/EEA.</li>
                <li>Encryption of all data in transit and at rest.</li>
                <li>Secure authentication for all users.</li>
                <li>Zero-training-data agreement with our AI provider (Anthropic).</li>
                <li>Data Processing Agreements (DPAs) with all sub-processors.</li>
              </ul>

              <h3 className={styles.subheading}>Certifications</h3>
              <p className={styles.paragraph}>
                Henric is currently in the ISO/IEC 27001:2022 certification audit for its Information Security Management System. Our cloud infrastructure providers maintain ISO 27001 certifications.
              </p>
            </div>
          </div>

          {/* Section 2: Data hosting and residency */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>2</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Data hosting and residency</h2>

              <h3 className={styles.subheading}>2.1 Location</h3>
              <p className={styles.paragraph}>
                All Customer Data is hosted within the European Union. Our primary infrastructure is hosted in the EU/EEA region (Frankfurt, Germany). Customer Data never leaves the EU/EEA unless explicitly required and agreed upon with appropriate safeguards in place.
              </p>

              <h3 className={styles.subheading}>2.2 Sub-processors</h3>
              <p className={styles.paragraph}>
                Any Customer Data processed by Henric&apos;s sub-processors is restricted to the EU/EEA or is subject to appropriate GDPR transfer mechanisms, including Standard Contractual Clauses (SCCs) where required.
              </p>

              <h3 className={styles.subheading}>2.3 AI processing</h3>
              <p className={styles.paragraph}>
                Content processed through our AI features is sent to Anthropic&apos;s API. Anthropic processes this data within the EU/EEA under our Data Processing Agreement. Content is processed in real-time and is not retained by Anthropic beyond the immediate API request.
              </p>
            </div>
          </div>

          {/* Section 3: Encryption */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>3</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Encryption</h2>

              <h3 className={styles.subheading}>3.1 Data at rest</h3>
              <p className={styles.paragraph}>
                All Customer Data stored by Henric is encrypted at rest using AES-256 encryption or equivalent.
              </p>

              <h3 className={styles.subheading}>3.2 Data in transit</h3>
              <p className={styles.paragraph}>
                All data transmitted between your device and our Services is encrypted using TLS 1.2 or higher. All connections to the Henric platform require HTTPS. We do not support unencrypted HTTP access.
              </p>

              <h3 className={styles.subheading}>3.3 API communications</h3>
              <p className={styles.paragraph}>
                All communications between Henric and our AI provider (Anthropic) are encrypted using TLS 1.2 or higher. API keys and credentials are stored securely and never exposed in client-side code.
              </p>
            </div>
          </div>

          {/* Section 4: Access controls */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>4</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Access controls</h2>

              <h3 className={styles.subheading}>4.1 Internal access</h3>
              <p className={styles.paragraph}>
                Access to our Cloud Environment by Henric personnel requires a unique user ID, multi-factor authentication (MFA), and strong passwords meeting minimum length and complexity requirements. Access is granted on a least-privilege basis — personnel only have access to the systems and data necessary for their role.
              </p>

              <h3 className={styles.subheading}>4.2 Customer Data access</h3>
              <p className={styles.paragraph}>
                Henric personnel will not access Customer Data except: (i) as necessary to provide or support the Services, (ii) to investigate and resolve technical issues reported by you, or (iii) as required by law or a binding order of a governmental body. All access to Customer Data is logged.
              </p>

              <h3 className={styles.subheading}>4.3 Confidentiality</h3>
              <p className={styles.paragraph}>
                All Henric personnel are required to sign confidentiality agreements and acknowledge their responsibility for reporting security incidents involving Customer Data.
              </p>

              <h3 className={styles.subheading}>4.4 User authentication</h3>
              <p className={styles.paragraph}>
                Users access the Henric platform through secure authentication. Passwords are stored using industry-standard hashing algorithms and are never stored in plaintext. We support and encourage the use of strong, unique passwords.
              </p>
            </div>
          </div>

          {/* Section 5: AI processing security */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>5</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>AI processing security</h2>

              <h3 className={styles.subheading}>5.1 AI provider</h3>
              <p className={styles.paragraph}>
                Henric uses Anthropic (Claude) as our AI provider. We maintain a Data Processing Agreement with Anthropic that ensures all processing is GDPR-compliant and occurs within the EU/EEA.
              </p>

              <h3 className={styles.subheading}>5.2 Zero training guarantee</h3>
              <p className={styles.paragraph}>
                <strong>Your data is never used to train AI models.</strong> Customer Data processed through our AI features is not used by Henric or Anthropic to train, fine-tune, or improve any AI model. This is contractually guaranteed in our agreement with Anthropic.
              </p>

              <h3 className={styles.subheading}>5.3 Data retention by AI provider</h3>
              <p className={styles.paragraph}>
                Anthropic operates with a zero-retention policy for API requests. Prompts and outputs are not stored by Anthropic beyond the immediate processing session. Content is processed in real-time and discarded after the response is delivered.
              </p>

              <h3 className={styles.subheading}>5.4 Content flow</h3>
              <p className={styles.paragraph}>
                When you use Henric&apos;s AI features, the following occurs:
              </p>
              <ul className={styles.list}>
                <li>You upload a document or submit a query in Henric.</li>
                <li>Henric transmits the relevant Content to Anthropic&apos;s API over an encrypted connection.</li>
                <li>Anthropic processes the request and returns a response.</li>
                <li>Anthropic discards the Content — no data is retained.</li>
                <li>Henric stores your Content on EU-hosted servers as part of your workspace, subject to the applicable Subscriber Agreement.</li>
              </ul>
            </div>
          </div>

          {/* Section 6: Connected services security */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>6</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Connected services security</h2>
              <p className={styles.paragraph}>
                Henric integrates with third-party services to provide document access. We apply the following security principles to all integrations:
              </p>

              <h3 className={styles.subheading}>6.1 Google Drive</h3>
              <p className={styles.paragraph}>
                When you connect your Google Drive, Henric uses OAuth 2.0 for authentication and only accesses files you explicitly select. We do not access, scan, or index your entire Drive. Access tokens are stored securely and can be revoked at any time.
              </p>

              <h3 className={styles.subheading}>6.2 Microsoft SharePoint</h3>
              <p className={styles.paragraph}>
                When you connect your SharePoint environment, Henric uses Microsoft&apos;s OAuth 2.0 authentication and only accesses files you explicitly select. We do not access your entire SharePoint environment. Access tokens are stored securely and can be revoked at any time.
              </p>

              <h3 className={styles.subheading}>6.3 Document uploads</h3>
              <p className={styles.paragraph}>
                Documents uploaded directly to Henric are transmitted over encrypted connections (TLS 1.2+) and stored encrypted at rest (AES-256) on EU-hosted servers. Uploaded documents are only accessible to authorized users within your organization&apos;s workspace.
              </p>
            </div>
          </div>

          {/* Section 7: Infrastructure security */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>7</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Infrastructure security</h2>

              <h3 className={styles.subheading}>7.1 Cloud providers</h3>
              <p className={styles.paragraph}>
                Our Cloud Environment is maintained by established cloud service providers who maintain ISO 27001 certifications. We verify our providers&apos; certifications on an ongoing basis.
              </p>

              <h3 className={styles.subheading}>7.2 Network security</h3>
              <p className={styles.paragraph}>
                We implement network-level security controls including firewalls, intrusion detection, and monitoring of our Cloud Environment. We conduct regular vulnerability assessments.
              </p>

              <h3 className={styles.subheading}>7.3 Physical security</h3>
              <p className={styles.paragraph}>
                Henric does not store or process Customer Data at any physical office location. All Customer Data is stored and processed exclusively in our Cloud Environment.
              </p>
            </div>
          </div>

          {/* Section 8: Data isolation and multi-tenancy */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>8</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Data isolation and multi-tenancy</h2>
              <p className={styles.paragraph}>
                Henric operates a multi-tenant platform where each Subscriber&apos;s data is logically isolated from other Subscribers&apos; data. This means:
              </p>
              <ul className={styles.list}>
                <li>Each organization&apos;s workspace is isolated — users in one organization cannot access data from another organization.</li>
                <li>AI queries are processed in isolation — one organization&apos;s Content is never included in another organization&apos;s AI prompts.</li>
                <li>Administrative access is scoped per organization.</li>
              </ul>
            </div>
          </div>

          {/* Section 9: Incident detection and response */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>9</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Incident detection and response</h2>

              <h3 className={styles.subheading}>9.1 Notification</h3>
              <p className={styles.paragraph}>
                If Henric becomes aware of a breach of security leading to the destruction, loss, alteration, unauthorized disclosure of, or access to Customer Data (a &quot;Security Incident&quot;), Henric will notify you without undue delay and in no case later than 36 hours after becoming aware of the incident. Notification will be sent to the security contact email address specified in your Subscriber Agreement.
              </p>

              <h3 className={styles.subheading}>9.2 Response</h3>
              <p className={styles.paragraph}>
                Upon discovery of a Security Incident, Henric will promptly take reasonable steps to contain, investigate, and mitigate the incident. All security-relevant logs will be preserved for at least one year.
              </p>

              <h3 className={styles.subheading}>9.3 Communication</h3>
              <p className={styles.paragraph}>
                In the event of a Security Incident, Henric will provide you with:
              </p>
              <ul className={styles.list}>
                <li>A description of the nature and scope of the incident.</li>
                <li>The likely consequences of the incident.</li>
                <li>The measures taken and/or proposed to contain and mitigate the incident.</li>
                <li>The status of the investigation.</li>
                <li>A designated contact point for further information.</li>
              </ul>
            </div>
          </div>

          {/* Section 10: Business continuity and backups */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>10</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Business continuity and backups</h2>

              <h3 className={styles.subheading}>10.1 Backups</h3>
              <p className={styles.paragraph}>
                Customer Data is backed up regularly. Backups are encrypted and stored in geographically separate locations within the EU/EEA.
              </p>

              <h3 className={styles.subheading}>10.2 Availability</h3>
              <p className={styles.paragraph}>
                We strive to maintain high availability of our Services. In the event of an outage, we will communicate status updates through our designated channels.
              </p>
            </div>
          </div>

          {/* Section 11: Customer responsibilities */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>11</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Customer responsibilities</h2>

              <h3 className={styles.subheading}>11.1 Authorization</h3>
              <p className={styles.paragraph}>
                You are responsible for ensuring that you are authorized to use any documents, data, or other Content with the Services, and that your usage complies with all applicable legal and regulatory requirements.
              </p>

              <h3 className={styles.subheading}>11.2 Credentials</h3>
              <p className={styles.paragraph}>
                You are responsible for managing and protecting your credentials. User credentials must be kept confidential and must not be shared with unauthorized parties. You must promptly report any suspicious activities related to your account, including suspected credential compromise, to{' '}
                <a href="mailto:security@henricai.com" className={styles.link}>security@henricai.com</a>.
              </p>

              <h3 className={styles.subheading}>11.3 Systems</h3>
              <p className={styles.paragraph}>
                You are responsible for keeping your systems (browsers, operating systems, and other software used to access the Services) up to date and appropriately patched.
              </p>

              <h3 className={styles.subheading}>11.4 Content</h3>
              <p className={styles.paragraph}>
                You are responsible for ensuring that any documents or data you upload to Henric do not contain information that you are not authorized to process or share with a third-party service provider.
              </p>
            </div>
          </div>

          {/* Section 12: Sub-processors */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>12</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Sub-processors</h2>
              <p className={styles.paragraph}>
                Henric uses the following categories of sub-processors to deliver our Services:
              </p>
              <ul className={styles.list}>
                <li><strong>Cloud infrastructure:</strong> EU-hosted cloud providers for hosting and storage.</li>
                <li><strong>AI processing:</strong> Anthropic (Claude) for AI-powered features, processed within the EU/EEA.</li>
                <li><strong>Authentication:</strong> Secure authentication services.</li>
              </ul>
              <p className={styles.paragraph}>
                A complete and up-to-date list of sub-processors is available on our{' '}
                <Link href="/legal/terms/sub-processors" className={styles.link}>Sub-processors page</Link>. We will notify Subscribers of any changes to our sub-processor list in accordance with the applicable{' '}
                <Link href="/legal/terms/data-processing-agreement" className={styles.link}>Data Processing Agreement</Link>.
              </p>
            </div>
          </div>

          {/* Section 13: Changes to this Security Policy */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>13</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Changes to this Security Policy</h2>
              <p className={styles.paragraph}>
                We may update this Security Policy from time to time to reflect changes in our security practices, technologies, or legal requirements. When we make material changes, we will update the &quot;Last updated&quot; date at the top of this page and notify Subscribers through our Services or by email.
              </p>
            </div>
          </div>

          {/* Section 14: Contact */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>14</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Contact</h2>
              <div className={styles.contactCard}>
                <p className={styles.paragraph}>
                  If you have any questions about this Security Policy or wish to report a security concern, please contact us:
                </p>
                <p className={styles.paragraph}>
                  Henric Sweden AB<br />
                  Törnrosvägen 74A<br />
                  181 61 Lidingö<br />
                  Sweden
                </p>
                <p className={styles.paragraph}>
                  Security inquiries:{' '}
                  <a href="mailto:security@henricai.com" className={styles.link}>security@henricai.com</a><br />
                  General support:{' '}
                  <a href="mailto:support@henricai.com" className={styles.link}>support@henricai.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
