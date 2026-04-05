import Link from 'next/link'
import styles from '../../privacy/page.module.css'

export default function TermsOfServicePage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/legal/terms" className={styles.backLink}>
            <span className={styles.backArrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M11 8H3M6 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span> Back to Terms
          </Link>
          <h1 className={styles.title}>Terms of Service</h1>
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Content Section */}
      <section className={styles.content}>
        <div className={styles.container}>
          <p className={styles.lastUpdated}>Last updated March 2026</p>

          {/* Section 1: Introduction */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>1</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Introduction and Acceptance</h2>
              <p className={styles.paragraph}>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) and Henric Sweden AB, a Swedish limited company with organization number 559519-9498, having its registered office at Törnrosvägen 74A, 181 61 Lidingö, Sweden (&quot;Henric,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p className={styles.paragraph}>
                By accessing or using Henric&apos;s services, including our web application and related tools (collectively, the &quot;Services&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
              <p className={styles.paragraph}>
                If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms, and &quot;you&quot; and &quot;your&quot; will refer to both you individually and that organization.
              </p>
              <p className={styles.paragraph}>
                We may update these Terms from time to time. If we make material changes, we will notify you via the email address associated with your account or through the Services. Your continued use of the Services after such notice constitutes acceptance of the updated Terms.
              </p>
            </div>
          </div>

          {/* Section 2: The Services */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>2</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>The Services</h2>

              <h3 className={styles.subheading}>2.1 Service Description</h3>
              <p className={styles.paragraph}>
                Henric provides an AI-powered platform designed specifically for property management professionals. Our Services include document analysis, content generation, data processing, workflow automation, and related productivity tools accessible through our web application and related tools.
              </p>

              <h3 className={styles.subheading}>2.2 Account Registration</h3>
              <p className={styles.paragraph}>
                To access the Services, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
              </p>

              <h3 className={styles.subheading}>2.3 Acceptable Use</h3>
              <p className={styles.paragraph}>
                You agree to use the Services only for lawful purposes and in accordance with these Terms. You shall not:
              </p>
              <ul className={styles.list}>
                <li>Use the Services to violate any applicable law or regulation</li>
                <li>Attempt to gain unauthorized access to any part of the Services or any systems or networks connected to the Services</li>
                <li>Use the Services to transmit malware, viruses, or other malicious code</li>
                <li>Interfere with or disrupt the integrity or performance of the Services</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                <li>Use the Services to process data that you do not have the right to process</li>
                <li>Resell, sublicense, or transfer access to the Services without our prior written consent</li>
              </ul>

              <h3 className={styles.subheading}>2.4 Service Availability</h3>
              <p className={styles.paragraph}>
                We strive to maintain high availability of our Services but do not guarantee uninterrupted access. We may temporarily suspend the Services for maintenance, updates, or security reasons. We will provide reasonable notice of planned maintenance when practicable.
              </p>

              <h3 className={styles.subheading}>2.5 Support</h3>
              <p className={styles.paragraph}>
                We provide customer support during business hours (Central European Time) via email at{' '}
                <a href="mailto:support@henricai.com" className={styles.link}>support@henricai.com</a>. Response times and support levels may vary based on your subscription plan.
              </p>
            </div>
          </div>

          {/* Section 3: Fees and Payment */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>3</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Fees and Payment</h2>

              <h3 className={styles.subheading}>3.1 Subscription Fees</h3>
              <p className={styles.paragraph}>
                Access to certain features of the Services requires a paid subscription. Subscription fees are billed in advance on a monthly or annual basis, as selected during registration. All fees are quoted in Euros (EUR) unless otherwise specified.
              </p>

              <h3 className={styles.subheading}>3.2 Payment Terms</h3>
              <p className={styles.paragraph}>
                You authorize us to charge your designated payment method for all applicable fees. If payment fails, we may suspend your access to the Services until payment is received. All fees are non-refundable except as expressly set forth in these Terms.
              </p>

              <h3 className={styles.subheading}>3.3 Price Changes</h3>
              <p className={styles.paragraph}>
                We may change our subscription fees at any time. Price changes will take effect at the beginning of your next billing cycle following notice of the change. If you do not agree to a price change, you may cancel your subscription before the change takes effect.
              </p>

              <h3 className={styles.subheading}>3.4 Taxes</h3>
              <p className={styles.paragraph}>
                All fees are exclusive of applicable taxes. You are responsible for paying any taxes associated with your use of the Services, except for taxes based on our net income.
              </p>

              <h3 className={styles.subheading}>3.5 Refunds</h3>
              <p className={styles.paragraph}>
                If you cancel your subscription within 14 days of your initial purchase and have not materially used the Services, you may request a full refund. After this period, subscription fees are non-refundable. Annual subscriptions may be eligible for prorated refunds at our discretion.
              </p>
            </div>
          </div>

          {/* Section 4: Term and Termination */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>4</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Term and Termination</h2>

              <h3 className={styles.subheading}>4.1 Term</h3>
              <p className={styles.paragraph}>
                These Terms are effective from the date you first access the Services and continue until terminated. Paid subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date.
              </p>

              <h3 className={styles.subheading}>4.2 Termination by You</h3>
              <p className={styles.paragraph}>
                You may terminate your account at any time through your account settings or by contacting us at{' '}
                <a href="mailto:support@henricai.com" className={styles.link}>support@henricai.com</a>. Termination will take effect at the end of your current billing period, and you will retain access to paid features until then.
              </p>

              <h3 className={styles.subheading}>4.3 Termination by Us</h3>
              <p className={styles.paragraph}>
                We may suspend or terminate your access to the Services immediately if you breach these Terms, fail to pay applicable fees, or engage in conduct that we determine, in our sole discretion, is harmful to us, our Services, or other users. We may also terminate the Services or any feature thereof at any time with 30 days&apos; notice.
              </p>

              <h3 className={styles.subheading}>4.4 Effect of Termination</h3>
              <p className={styles.paragraph}>
                Upon termination, your right to access the Services will cease immediately. You may export your data within 30 days of termination. After this period, we will delete your data in accordance with our data retention policies unless required to retain it by law.
              </p>

              <h3 className={styles.subheading}>4.5 Survival</h3>
              <p className={styles.paragraph}>
                Sections relating to intellectual property, limitations of liability, indemnification, and governing law will survive termination of these Terms.
              </p>
            </div>
          </div>

          {/* Section 5: Intellectual Property */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>5</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Intellectual Property</h2>

              <h3 className={styles.subheading}>5.1 Our Intellectual Property</h3>
              <p className={styles.paragraph}>
                The Services, including all software, algorithms, user interfaces, designs, text, graphics, and other content provided by Henric, are owned by us or our licensors and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to access and use the Services for your internal business purposes during the term of your subscription.
              </p>

              <h3 className={styles.subheading}>5.2 Your Content</h3>
              <p className={styles.paragraph}>
                You retain all ownership rights in the data, documents, and other content you upload to or create using the Services (&quot;Your Content&quot;). By using the Services, you grant us a limited license to process Your Content solely as necessary to provide and improve the Services.
              </p>

              <h3 className={styles.subheading}>5.3 Output</h3>
              <p className={styles.paragraph}>
                Subject to your ownership of Your Content, you own any output generated by the Services based on Your Content (&quot;Output&quot;). We claim no ownership rights in Output, except for any underlying Henric intellectual property embedded in the Output.
              </p>

              <h3 className={styles.subheading}>5.4 Feedback</h3>
              <p className={styles.paragraph}>
                If you provide us with feedback, suggestions, or ideas about the Services (&quot;Feedback&quot;), you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and incorporate such Feedback into our Services without any obligation to you.
              </p>
            </div>
          </div>

          {/* Section 6: AI Limitations and Disclaimers */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>6</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>AI Limitations and Disclaimers</h2>

              <h3 className={styles.subheading}>6.1 Nature of AI-Generated Content</h3>
              <p className={styles.paragraph}>
                The Services utilize artificial intelligence and machine learning technologies to process your data and generate content. AI-generated content may contain errors, inaccuracies, or omissions. You acknowledge that AI technology has inherent limitations and that Output should not be relied upon as the sole basis for important decisions.
              </p>

              <h3 className={styles.subheading}>6.2 Human Review Required</h3>
              <p className={styles.paragraph}>
                You are responsible for reviewing, verifying, and editing all Output before use. The Services are designed to assist and augment human decision-making, not replace it. You should always apply your professional judgment when using Output, particularly for legal, financial, or other consequential matters.
              </p>

              <h3 className={styles.subheading}>6.3 No Professional Advice</h3>
              <p className={styles.paragraph}>
                The Services and any Output do not constitute legal, financial, tax, or other professional advice. You should consult qualified professionals for advice specific to your situation. Henric is not a law firm, accounting firm, or professional services provider.
              </p>

              <h3 className={styles.subheading}>6.4 Accuracy Not Guaranteed</h3>
              <p className={styles.paragraph}>
                We do not warrant that the Services or any Output will be accurate, complete, current, or error-free. AI systems may produce different results for similar inputs and may be affected by factors outside our control, including updates to underlying AI models.
              </p>

              <h3 className={styles.subheading}>6.5 Continuous Improvement</h3>
              <p className={styles.paragraph}>
                We continuously work to improve the accuracy and reliability of our AI systems. However, you acknowledge that AI technology is evolving and that the performance of the Services may change over time as we implement improvements and updates.
              </p>
            </div>
          </div>

          {/* Section 7: Data Protection */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>7</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Data Protection</h2>

              <h3 className={styles.subheading}>7.1 Privacy Policy</h3>
              <p className={styles.paragraph}>
                Our collection and use of personal data is governed by our{' '}
                <Link href="/legal/privacy" className={styles.link}>Privacy Policy</Link>, which is incorporated into these Terms by reference. By using the Services, you consent to the practices described in our Privacy Policy.
              </p>

              <h3 className={styles.subheading}>7.2 Your Content Not Used for Training</h3>
              <p className={styles.paragraph}>
                We do not use Your Content to train, improve, or develop AI models, whether our own or those of third parties. Your Content is processed solely to provide the Services to you and is not shared with AI providers for model training purposes.
              </p>

              <h3 className={styles.subheading}>7.3 Data Processing Agreement</h3>
              <p className={styles.paragraph}>
                If you process personal data through the Services and are subject to the General Data Protection Regulation (GDPR) or similar laws, our Data Processing Agreement applies to such processing and is incorporated into these Terms by reference.
              </p>

              <h3 className={styles.subheading}>7.4 Your Responsibilities</h3>
              <p className={styles.paragraph}>
                You are responsible for ensuring that you have all necessary rights and consents to upload and process Your Content using the Services. You must not upload personal data unless you have a lawful basis for processing such data.
              </p>

              <h3 className={styles.subheading}>7.5 Security</h3>
              <p className={styles.paragraph}>
                We implement appropriate technical and organizational measures to protect Your Content and personal data. However, no system is completely secure, and you acknowledge the inherent risks of transmitting data over the internet.
              </p>
            </div>
          </div>

          {/* Section 8: Confidentiality */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>8</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Confidentiality</h2>

              <h3 className={styles.subheading}>8.1 Confidential Information</h3>
              <p className={styles.paragraph}>
                &quot;Confidential Information&quot; means any non-public information disclosed by one party to the other that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information. Your Content is your Confidential Information.
              </p>

              <h3 className={styles.subheading}>8.2 Protection of Confidential Information</h3>
              <p className={styles.paragraph}>
                Each party agrees to protect the other&apos;s Confidential Information using the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care. Neither party will disclose the other&apos;s Confidential Information to third parties except as necessary to perform its obligations under these Terms.
              </p>

              <h3 className={styles.subheading}>8.3 Exceptions</h3>
              <p className={styles.paragraph}>
                Confidential Information does not include information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was rightfully in the receiving party&apos;s possession before disclosure; (c) is rightfully obtained from a third party without restriction; or (d) is independently developed without use of Confidential Information.
              </p>

              <h3 className={styles.subheading}>8.4 Required Disclosure</h3>
              <p className={styles.paragraph}>
                A party may disclose Confidential Information if required by law, provided that the disclosing party gives reasonable notice to the other party (where legally permitted) and cooperates in any effort to obtain protective treatment for the information.
              </p>
            </div>
          </div>

          {/* Section 9: Warranties and Liability */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>9</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Warranties and Limitation of Liability</h2>

              <h3 className={styles.subheading}>9.1 Our Warranty</h3>
              <p className={styles.paragraph}>
                We warrant that we will provide the Services with reasonable skill and care and in accordance with generally accepted industry standards. If we breach this warranty, your sole remedy is to receive a refund for the fees paid for the affected period.
              </p>

              <h3 className={styles.subheading}>9.2 Disclaimer</h3>
              <p className={styles.paragraph}>
                EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS, THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; WE DISCLAIM ALL OTHER WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>

              <h3 className={styles.subheading}>9.3 Limitation of Liability</h3>
              <p className={styles.paragraph}>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL HENRIC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES.
              </p>

              <h3 className={styles.subheading}>9.4 Liability Cap</h3>
              <p className={styles.paragraph}>
                OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO HENRIC IN THE 12 MONTHS PRECEDING THE CLAIM OR (B) €100.
              </p>

              <h3 className={styles.subheading}>9.5 Essential Basis</h3>
              <p className={styles.paragraph}>
                THE LIMITATIONS IN THIS SECTION REFLECT THE ALLOCATION OF RISK BETWEEN THE PARTIES AND ARE AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN US. THE SERVICES WOULD NOT BE PROVIDED WITHOUT THESE LIMITATIONS.
              </p>
            </div>
          </div>

          {/* Section 10: Indemnification */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>10</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Indemnification</h2>

              <h3 className={styles.subheading}>10.1 Your Indemnification</h3>
              <p className={styles.paragraph}>
                You agree to indemnify, defend, and hold harmless Henric and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) your use of the Services; (b) Your Content; (c) your breach of these Terms; or (d) your violation of any third-party rights.
              </p>

              <h3 className={styles.subheading}>10.2 Our Indemnification</h3>
              <p className={styles.paragraph}>
                We will indemnify, defend, and hold you harmless from and against any third-party claims alleging that the Services infringe any intellectual property right, provided that you promptly notify us of such claim, give us control over the defense and settlement, and cooperate in our defense.
              </p>

              <h3 className={styles.subheading}>10.3 Remedies</h3>
              <p className={styles.paragraph}>
                If the Services are found to infringe or are likely to be found to infringe, we may, at our option: (a) obtain the right for you to continue using the Services; (b) modify the Services to make them non-infringing; or (c) terminate your access to the infringing Services and refund any prepaid fees for the terminated period.
              </p>
            </div>
          </div>

          {/* Section 11: General Provisions */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>11</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>General Provisions</h2>

              <h3 className={styles.subheading}>11.1 Entire Agreement</h3>
              <p className={styles.paragraph}>
                These Terms, together with the Privacy Policy and any other documents incorporated by reference, constitute the entire agreement between you and Henric regarding the Services and supersede all prior agreements and understandings.
              </p>

              <h3 className={styles.subheading}>11.2 Severability</h3>
              <p className={styles.paragraph}>
                If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.
              </p>

              <h3 className={styles.subheading}>11.3 Waiver</h3>
              <p className={styles.paragraph}>
                Our failure to enforce any right or provision of these Terms will not constitute a waiver of such right or provision. Any waiver must be in writing and signed by Henric to be effective.
              </p>

              <h3 className={styles.subheading}>11.4 Assignment</h3>
              <p className={styles.paragraph}>
                You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. We may assign these Terms without restriction. Any attempted assignment in violation of this section is void.
              </p>

              <h3 className={styles.subheading}>11.5 Notices</h3>
              <p className={styles.paragraph}>
                We may provide notices to you via email, through the Services, or by posting to our website. Notices to us must be sent to{' '}
                <a href="mailto:legal@henricai.com" className={styles.link}>legal@henricai.com</a> or to our registered address.
              </p>

              <h3 className={styles.subheading}>11.6 Force Majeure</h3>
              <p className={styles.paragraph}>
                Neither party will be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, government actions, or internet service provider failures.
              </p>

              <h3 className={styles.subheading}>11.7 Independent Contractors</h3>
              <p className={styles.paragraph}>
                The parties are independent contractors. Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship between the parties.
              </p>
            </div>
          </div>

          {/* Section 12: Governing Law */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>12</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Governing Law and Dispute Resolution</h2>

              <h3 className={styles.subheading}>12.1 Governing Law</h3>
              <p className={styles.paragraph}>
                These Terms are governed by and construed in accordance with the laws of Sweden, without regard to its conflict of law principles.
              </p>

              <h3 className={styles.subheading}>12.2 Jurisdiction</h3>
              <p className={styles.paragraph}>
                Any dispute arising out of or in connection with these Terms shall be finally settled by the courts of Sweden, with Stockholm District Court (Stockholms tingsrätt) as the court of first instance.
              </p>

              <h3 className={styles.subheading}>12.3 Consumer Rights</h3>
              <p className={styles.paragraph}>
                If you are a consumer within the European Union, you may also be entitled to bring proceedings in the courts of your country of residence, and nothing in these Terms affects your statutory consumer rights under applicable law.
              </p>

              <h3 className={styles.subheading}>12.4 Contact Us</h3>
              <div className={styles.contactCard}>
                <p className={styles.paragraph}>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className={styles.paragraph}>
                  Henric Sweden AB<br />
                  Törnrosvägen 74A<br />
                  181 61 Lidingö<br />
                  Sweden
                </p>
                <p className={styles.paragraph}>
                  Email:{' '}
                  <a href="mailto:legal@henricai.com" className={styles.link}>legal@henricai.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
