import Link from 'next/link'
import styles from './page.module.css'

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/legal/terms" className={styles.backLink}>
            <span className={styles.backArrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M11 8H3M6 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span> Back to Terms
          </Link>
          <h1 className={styles.title}>Privacy Policy</h1>
        </div>
      </section>

      {/* Divider */}
      <div className={styles.container}>
        <div className={styles.divider} />
      </div>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <p className={styles.lastUpdated}>Last updated March 2026</p>

          {/* Intro */}
          <div className={styles.section}>
            <div className={styles.sectionNumber} />
            <div className={styles.sectionContent}>
              <p className={styles.paragraph}>
                Henric respects your privacy and is committed to protecting any personal data we process about you. This Privacy Policy explains how we collect, use, share, and protect your personal data when you access or use our website at henricai.com (the <strong>&quot;Site&quot;</strong>), our platform at app.henricai.com (the <strong>&quot;Platform&quot;</strong>), and any related services (together, the <strong>&quot;Services&quot;</strong>).
              </p>
              <p className={styles.paragraph}>
                By using our Services, you acknowledge that you have read and understood this Privacy Policy. If you have any questions, please contact us at <a href="mailto:privacy@henricai.com" className={styles.link}>privacy@henricai.com</a>.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>1</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Data controller</h2>
              <p className={styles.paragraph}>
                Henric Sweden AB, with registered address in Stockholm, Sweden (<strong>&quot;Henric&quot;</strong>, <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, or <strong>&quot;our&quot;</strong>) is the data controller responsible for processing your personal data as described in this Privacy Policy.
              </p>
              <p className={styles.paragraph}>
                <strong>Important distinction:</strong> This Privacy Policy covers personal data we process as a data controller — for example, your account information and usage data. When you or your organization upload documents to our Platform (<strong>&quot;Content&quot;</strong>), we process that Content as a data processor on behalf of your organization (the <strong>&quot;Subscriber&quot;</strong>). Our processing of Content is governed by a separate Data Processing Agreement (DPA) between Henric and the Subscriber. Any questions about personal data contained in Content should be directed to your organization.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>2</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>What personal data we collect</h2>
            </div>
          </div>

          {/* Section 2.1 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberSmall}>2.1</span>
            </div>
            <div className={styles.sectionContent}>
              <h3 className={styles.subheading}>Information you provide to us</h3>
              <p className={styles.paragraph}>
                <strong>Account information:</strong> When you or your organization creates an account, we collect your name, email address, role or title, organization name, and account credentials (password stored in hashed form).
              </p>
              <p className={styles.paragraph}>
                <strong>Communication information:</strong> When you contact us for support, feedback, or inquiries, we collect your name, email address, and the content of your communication.
              </p>
            </div>
          </div>

          {/* Section 2.2 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberSmall}>2.2</span>
            </div>
            <div className={styles.sectionContent}>
              <h3 className={styles.subheading}>Information we collect automatically</h3>
              <p className={styles.paragraph}>
                <strong>Log data:</strong> When you use our Services, we automatically collect your IP address, browser type and version, the date and time of your request, and referring URLs.
              </p>
              <p className={styles.paragraph}>
                <strong>Device information:</strong> We collect information about the device you use to access our Services, including device type, operating system, and browser version.
              </p>
              <p className={styles.paragraph}>
                <strong>Usage data:</strong> We collect information about how you use our Services, including the features you access, the actions you take, timestamps, time zone, and the types and volumes of queries you submit. We do not collect or store the content of your queries or your uploaded documents other than as described in section 4.
              </p>
              <p className={styles.paragraph}>
                <strong>Cookies:</strong> We use cookies and similar technologies to provide, secure, and improve our Services. We use the following types of cookies:
              </p>
              <ul className={styles.list}>
                <li><em>Essential cookies:</em> Required for basic functionality such as authentication and security.</li>
                <li><em>Analytics cookies:</em> Help us understand how our Services are used so we can improve them. We use privacy-friendly analytics.</li>
                <li><em>Functional cookies:</em> Remember your preferences such as language and region.</li>
              </ul>
              <p className={styles.paragraph}>
                You can manage your cookie preferences through your browser settings. Disabling essential cookies may limit the functionality of our Services.
              </p>
            </div>
          </div>

          {/* Section 2.3 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberSmall}>2.3</span>
            </div>
            <div className={styles.sectionContent}>
              <h3 className={styles.subheading}>Information from connected services</h3>
              <p className={styles.paragraph}>
                When you connect third-party services to Henric, we may access data from those services solely to provide our Services:
              </p>
              <ul className={styles.list}>
                <li><strong>Google Drive:</strong> If you connect your Google Drive, we access files you explicitly select to work with in Henric. We do not access your entire Drive.</li>
                <li><strong>Microsoft SharePoint:</strong> If you connect your SharePoint, we access files you explicitly select to work with in Henric. We do not access your entire SharePoint environment.</li>
              </ul>
              <p className={styles.paragraph}>
                Data accessed from connected services is processed as Content under your Subscriber Agreement and DPA, not under this Privacy Policy.
              </p>
            </div>
          </div>

          {/* Section 2.4 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberSmall}>2.4</span>
            </div>
            <div className={styles.sectionContent}>
              <h3 className={styles.subheading}>Information from third parties</h3>
              <p className={styles.paragraph}>
                We may receive information about you from your organization (our Subscriber) in order to set up your account, or from service providers who assist us with fraud prevention and security.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>3</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Legal bases for processing</h2>
              <p className={styles.paragraph}>
                We process your personal data based on the following legal grounds under the GDPR:
              </p>
              <p className={styles.paragraph}>
                <strong>Performance of a contract (Article 6(1)(b)):</strong> To provide and maintain our Services, manage your account, and provide customer support.
              </p>
              <p className={styles.paragraph}>
                <strong>Legitimate interest (Article 6(1)(f)):</strong> To improve and develop our Services, ensure security, prevent fraud, and analyze usage patterns. We always balance our interests against your rights and freedoms.
              </p>
              <p className={styles.paragraph}>
                <strong>Legal obligation (Article 6(1)(c)):</strong> To comply with applicable laws, such as bookkeeping and anti-money laundering requirements.
              </p>
              <p className={styles.paragraph}>
                <strong>Consent (Article 6(1)(a)):</strong> Where required, such as for marketing communications. You can withdraw your consent at any time.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>4</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>How we process Content with AI</h2>
              <p className={styles.paragraph}>
                Henric uses artificial intelligence, provided by Anthropic (Claude), to deliver our Services. When you upload documents, ask questions, or perform other tasks in our Platform, your Content is sent to Anthropic&apos;s API for processing.
              </p>
              <h3 className={styles.subheading}>Your Content is never used to train AI models</h3>
              <p className={styles.paragraph}>
                We have a zero-training-data agreement with Anthropic. Your Content is never used to train, fine-tune, or improve any AI model. This is contractually guaranteed in our agreement with Anthropic.
              </p>
              <h3 className={styles.subheading}>Processing and retention</h3>
              <p className={styles.paragraph}>
                Content is sent to Anthropic&apos;s API in real-time for processing and is not retained by Anthropic beyond the immediate API request. Anthropic processes data within the EU/EEA. We maintain a Data Processing Agreement with Anthropic that ensures full GDPR compliance.
              </p>
              <h3 className={styles.subheading}>How Content flows</h3>
              <ul className={styles.list}>
                <li>You upload a document or ask a question in Henric.</li>
                <li>Henric sends the relevant Content to Anthropic&apos;s API.</li>
                <li>Anthropic processes the request and returns a response.</li>
                <li>Anthropic does not store your Content after the response is delivered.</li>
                <li>Henric stores your Content on EU-hosted servers as part of your workspace.</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>5</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>How we use your personal data</h2>
              <p className={styles.paragraph}>
                We use your personal data for the following purposes:
              </p>
              <ul className={styles.list}>
                <li>To provide, operate, and maintain our Services.</li>
                <li>To manage your account and authenticate your access.</li>
                <li>To provide customer support and respond to your inquiries.</li>
                <li>To improve, develop, and optimize our Services.</li>
                <li>To ensure the security of our Services and prevent fraud.</li>
                <li>To comply with legal obligations.</li>
                <li>To communicate with you about our Services, including service updates and, where you have consented, marketing communications.</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>6</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Who we share your personal data with</h2>
              <p className={styles.paragraph}>
                We do not sell your personal data. We share your personal data only in the following circumstances:
              </p>
              <p className={styles.paragraph}>
                <strong>Service providers:</strong> We use third-party service providers who process personal data on our behalf, including hosting providers, analytics services, and email communication tools. All service providers are bound by data processing agreements and process data only on our instructions.
              </p>
              <p className={styles.paragraph}>
                <strong>AI provider (Anthropic):</strong> We share Content with Anthropic to deliver our AI-powered Services. Anthropic processes this data under a strict Data Processing Agreement that prohibits any use of your data for training purposes. Anthropic processes data within the EU/EEA.
              </p>
              <p className={styles.paragraph}>
                <strong>Connected services:</strong> When you connect Google Drive or Microsoft SharePoint, data flows between Henric and those services as necessary to provide the functionality you requested. We do not share your data with Google or Microsoft beyond what is necessary for the integration to function.
              </p>
              <p className={styles.paragraph}>
                <strong>Legal requirements:</strong> We may disclose your personal data if required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of Henric, our users, or others.
              </p>
              <p className={styles.paragraph}>
                <strong>Business transfers:</strong> In the event of a merger, acquisition, reorganization, or sale of assets, your personal data may be transferred as part of that transaction. We will notify you of any such change.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>7</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>International data transfers</h2>
              <p className={styles.paragraph}>
                Henric is based in Sweden and processes personal data primarily within the EU/EEA. Our AI provider (Anthropic) processes Content within the EU/EEA under our Data Processing Agreement.
              </p>
              <p className={styles.paragraph}>
                If we need to transfer personal data outside the EU/EEA, we ensure appropriate safeguards are in place, including:
              </p>
              <ul className={styles.list}>
                <li>EU Commission adequacy decisions for the recipient country.</li>
                <li>Standard Contractual Clauses (SCCs) approved by the EU Commission.</li>
              </ul>
              <p className={styles.paragraph}>
                Your rights under the GDPR are not affected by any international transfer of your data.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>8</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>How long we keep your data</h2>
              <p className={styles.paragraph}>
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:
              </p>
              <ul className={styles.list}>
                <li><strong>Account data:</strong> For the duration of your account and for a reasonable period thereafter, unless your organization&apos;s Subscriber Agreement specifies otherwise.</li>
                <li><strong>Content:</strong> Stored for the duration of the Subscriber Agreement. Upon termination, Content is deleted within 30 days unless legal retention requirements apply.</li>
                <li><strong>Usage and log data:</strong> Retained for up to 12 months for security and analytics purposes.</li>
                <li><strong>Legal obligations:</strong> Where we are required by law to retain data (e.g., bookkeeping), we retain it for the legally required period (typically 7 years for financial records in Sweden).</li>
              </ul>
              <p className={styles.paragraph}>
                When we no longer need your personal data, we delete or anonymize it in accordance with our data retention policies.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>9</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Your rights</h2>
              <p className={styles.paragraph}>
                Under the GDPR, you have the following rights regarding your personal data:
              </p>
              <p className={styles.paragraph}>
                <strong>Right of access:</strong> You have the right to request a copy of the personal data we hold about you and information about how we process it.
              </p>
              <p className={styles.paragraph}>
                <strong>Right to rectification:</strong> You have the right to request that we correct any inaccurate or incomplete personal data.
              </p>
              <p className={styles.paragraph}>
                <strong>Right to erasure:</strong> You have the right to request that we delete your personal data, subject to certain exceptions (such as legal retention obligations).
              </p>
              <p className={styles.paragraph}>
                <strong>Right to restriction:</strong> You have the right to request that we restrict the processing of your personal data in certain circumstances.
              </p>
              <p className={styles.paragraph}>
                <strong>Right to data portability:</strong> You have the right to receive your personal data in a structured, commonly used, machine-readable format and to transmit it to another controller.
              </p>
              <p className={styles.paragraph}>
                <strong>Right to object:</strong> You have the right to object to processing based on our legitimate interest. You can always object to direct marketing, and we will stop immediately.
              </p>
              <p className={styles.paragraph}>
                <strong>Right to withdraw consent:</strong> Where processing is based on consent, you have the right to withdraw your consent at any time. This does not affect the lawfulness of processing prior to withdrawal.
              </p>
              <p className={styles.paragraph}>
                <strong>Right to lodge a complaint:</strong> If you are dissatisfied with how we handle your personal data, you have the right to lodge a complaint with the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten, IMY) at <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className={styles.link}>imy.se</a>.
              </p>
              <p className={styles.paragraph}>
                To exercise any of your rights, please contact us at <a href="mailto:privacy@henricai.com" className={styles.link}>privacy@henricai.com</a>. We will respond within 30 days.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>10</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Security</h2>
              <p className={styles.paragraph}>
                We implement appropriate technical and organizational measures to protect your personal data, including:
              </p>
              <ul className={styles.list}>
                <li>Currently in the ISO/IEC 27001:2022 certification audit for our Information Security Management System.</li>
                <li>Encryption of data in transit (TLS) and at rest.</li>
                <li>Access controls and authentication requirements.</li>
                <li>Regular security assessments.</li>
                <li>EU-hosted infrastructure.</li>
                <li>Strict access controls limiting which Henric personnel can access personal data.</li>
              </ul>
              <p className={styles.paragraph}>
                No method of transmission or storage is 100% secure. If you have reason to believe that your interaction with us is no longer secure, please contact us immediately at <a href="mailto:privacy@henricai.com" className={styles.link}>privacy@henricai.com</a>.
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>11</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Children&apos;s privacy</h2>
              <p className={styles.paragraph}>
                Our Services are not directed at individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected personal data from a child, please contact us and we will delete it promptly.
              </p>
            </div>
          </div>

          {/* Section 12 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>12</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Changes to this Privacy Policy</h2>
              <p className={styles.paragraph}>
                We may update this Privacy Policy from time to time. When we make changes, we will update the &quot;Last updated&quot; date at the top of this page. For material changes, we will provide notice through our Services or by email. Your continued use of our Services after any changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>
          </div>

          {/* Section 13 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>13</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Contact us</h2>
              <div className={styles.contactCard}>
                <p className={styles.paragraph}>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <p className={styles.paragraph}>
                  Henric Sweden AB<br />
                  Stockholm, Sweden<br />
                  Email: <a href="mailto:privacy@henricai.com" className={styles.link}>privacy@henricai.com</a><br />
                  Website: <a href="https://henricai.com" className={styles.link}>henricai.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
