import Link from 'next/link'
import styles from '../../privacy/page.module.css'

export default function AcceptableUsePolicyPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/legal/terms" className={styles.backLink}>
            <span className={styles.backArrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M11 8H3M6 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span> Back to Terms
          </Link>
          <h1 className={styles.title}>Acceptable Use Policy</h1>
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
                This Acceptable Use Policy (<strong>&quot;AUP&quot;</strong>) describes prohibited uses of the services offered by Henric Sweden AB (<strong>&quot;Henric&quot;</strong>, <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, or <strong>&quot;our&quot;</strong>). The examples described in this AUP are not exhaustive. We may modify this AUP at any time by posting a revised version on our website.
              </p>
              <p className={styles.paragraph}>
                By using our Services, you agree to the latest version of this AUP. If you violate the AUP or authorize or help others to do so, we may suspend or terminate your use of the Services.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>1</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Prohibited Content</h2>
              <p className={styles.paragraph}>
                You may not use the Services to create, upload, transmit, distribute, or store content that:
              </p>
              <p className={styles.paragraph}>
                a) Is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable;<br /><br />
                b) Infringes any patent, trademark, trade secret, copyright, or other intellectual property rights of any party;<br /><br />
                c) Contains software viruses or any other computer code designed to interrupt, destroy, or limit the functionality of computer software or hardware;<br /><br />
                d) Impersonates any person or entity or falsely states or misrepresents your affiliation with a person or entity;<br /><br />
                e) Contains personal data of third parties without their consent or in violation of applicable data protection laws;<br /><br />
                f) Promotes illegal activities or provides instructional information about illegal activities.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>2</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Prohibited Activities</h2>
              <p className={styles.paragraph}>
                You may not use the Services to:
              </p>
              <p className={styles.paragraph}>
                a) Violate any applicable laws or regulations, including data protection and privacy laws;<br /><br />
                b) Attempt to gain unauthorized access to the Services, other accounts, computer systems, or networks connected to the Services;<br /><br />
                c) Interfere with or disrupt the Services or servers or networks connected to the Services;<br /><br />
                d) Use automated means (including bots, scrapers, or similar tools) to access the Services in a manner that exceeds reasonable use or violates the Terms of Service;<br /><br />
                e) Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Services;<br /><br />
                f) Resell, sublicense, or otherwise make the Services available to third parties without our prior written consent;<br /><br />
                g) Use the Services in a way that could harm minors or that involves content depicting minors in a harmful manner;<br /><br />
                h) Send unsolicited messages, spam, or other forms of unauthorized advertising.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>3</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>AI-Specific Restrictions</h2>
              <p className={styles.paragraph}>
                When using our AI-powered features, you may not:
              </p>
              <p className={styles.paragraph}>
                a) Attempt to extract or reverse engineer the underlying AI models or their training data;<br /><br />
                b) Use the AI features to generate content that could be mistaken for human-created professional advice without appropriate disclosure;<br /><br />
                c) Use the AI features to generate misleading, deceptive, or fraudulent content;<br /><br />
                d) Intentionally try to make the AI produce harmful, biased, or discriminatory outputs;<br /><br />
                e) Use the AI features to automate decisions that have significant legal or financial effects on individuals without appropriate human oversight;<br /><br />
                f) Submit sensitive personal data (such as health information, financial account numbers, or government identifiers) to the AI features unless absolutely necessary for the intended use case and in compliance with applicable laws.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>4</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Enforcement</h2>
              <p className={styles.paragraph}>
                We reserve the right, but do not assume the obligation, to investigate any potential violation of this AUP. We may:
              </p>
              <p className={styles.paragraph}>
                a) Remove, disable access to, or modify any content that violates this AUP;<br /><br />
                b) Suspend or terminate your access to the Services;<br /><br />
                c) Report any activity that we suspect violates any law or regulation to appropriate law enforcement officials, regulators, or other appropriate third parties;<br /><br />
                d) Cooperate with law enforcement agencies, government authorities, or third parties in the investigation of suspected criminal or civil wrongdoing.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>5</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Reporting Violations</h2>
              <p className={styles.paragraph}>
                If you become aware of any violation of this AUP, please report it immediately to{' '}
                <a href="mailto:legal@henricai.com" className={styles.link}>legal@henricai.com</a>. We will review and investigate all reported violations and take appropriate action.
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
                  If you have any questions about this Acceptable Use Policy, please contact us at{' '}
                  <a href="mailto:legal@henricai.com" className={styles.link}>legal@henricai.com</a>.
                </p>
                <p className={styles.paragraph}>
                  Henric Sweden AB<br />
                  Törnrosvägen 74A<br />
                  181 61 Lidingö<br />
                  Sweden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
