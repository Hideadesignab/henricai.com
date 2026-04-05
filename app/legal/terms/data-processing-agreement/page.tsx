import Link from 'next/link'
import styles from '../../privacy/page.module.css'

export default function DataProcessingAgreementPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/legal/terms" className={styles.backLink}>
            <span className={styles.backArrow}><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M11 8H3M6 5l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="miter"/></svg></span> Back to Terms
          </Link>
          <h1 className={styles.title}>Data Processing Agreement</h1>
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
              <h2 className={styles.heading}>Introduction</h2>

              <h3 className={styles.subheading}>1.1</h3>
              <p className={styles.paragraph}>
                This data processing agreement (the &quot;DPA&quot;) governs the processing of Personal Data in the course of the provision of the Services provided by Henric Sweden AB (&quot;Henric&quot;) or its Affiliates to the Subscriber and forms part of the Agreement between the Parties.
              </p>

              <h3 className={styles.subheading}>1.2</h3>
              <p className={styles.paragraph}>
                This DPA regulates the Subscriber&apos;s rights and obligations in its capacity as data controller or processor as well as Henric&apos;s rights and obligations in its capacity as data processor or sub-processor when Henric processes Personal Data on behalf of the Subscriber under the Agreement.
              </p>

              <h3 className={styles.subheading}>1.3</h3>
              <p className={styles.paragraph}>
                This DPA is incorporated into and forms part of the Agreement. By entering into the Agreement, the Subscriber enters into this DPA on behalf of itself and, to the extent required under Applicable Data Protection Laws, in the name and on behalf of its authorized affiliates.
              </p>

              <h3 className={styles.subheading}>1.4</h3>
              <p className={styles.paragraph}>
                In case of any conflict between the rest of the Agreement and this DPA (including the documents specified under Clause 1.5), the wording of this DPA shall prevail.
              </p>

              <h3 className={styles.subheading}>1.5</h3>
              <p className={styles.paragraph}>
                The following shall form part of the DPA:
              </p>
              <p className={styles.paragraph}>
                a) Specification of Data Processing<br />
                b) <Link href="/legal/terms/sub-processors" className={styles.link}>Pre-approved Sub-processors</Link><br />
                c) <Link href="/legal/security" className={styles.link}>Security Measures</Link>
              </p>

              <h3 className={styles.subheading}>1.6</h3>
              <p className={styles.paragraph}>
                Capitalized terms that are used but not defined in this document shall have the meaning set out in the Agreement Order Form or the General Terms and Conditions.
              </p>
            </div>
          </div>

          {/* Section 2: Processing of Personal Data */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>2</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Processing of Personal Data</h2>

              <h3 className={styles.subheading}>2.1</h3>
              <p className={styles.paragraph}>
                Henric undertakes to process Personal Data for purposes set forth in this DPA and in accordance with the Subscriber&apos;s written instructions, unless otherwise required by Applicable Data Protection Laws. The Subscriber&apos;s instructions to Henric regarding the subject-matter and duration of the processing, the nature and purpose of the processing, the type of Personal Data and categories of data subjects, and the rights and obligations of both Parties are set forth in this DPA.
              </p>

              <h3 className={styles.subheading}>2.2</h3>
              <p className={styles.paragraph}>
                As data processor, Henric undertakes to:
              </p>
              <p className={styles.paragraph}>
                a) Comply with all Applicable Data Protection Laws that are applicable to it as a processor of the Personal Data;<br /><br />
                b) Cooperate with audits conducted by the Subscriber; and<br /><br />
                c) Inform the Subscriber promptly if Henric determines that an instruction from the Subscriber violates Applicable Data Protection Laws.
              </p>

              <h3 className={styles.subheading}>2.3</h3>
              <p className={styles.paragraph}>
                Any transfer of Personal Data to Henric using the Services shall be made using secure, reasonable, and appropriate mechanisms for data transfers.
              </p>

              <h3 className={styles.subheading}>2.4</h3>
              <p className={styles.paragraph}>
                Henric shall, without undue delay, inform the Subscriber of any communication with any Data Protection Authority that relates to Henric&apos;s processing of Personal Data under this DPA, and Henric will provide reasonable assistance to the Subscriber if the Subscriber receives a request from such authority or is subject to a regulatory investigation. In addition, if data subjects, competent authorities or any other third parties request information from Henric regarding the processing of Personal Data covered by this DPA, Henric shall refer such requests to the Subscriber to the extent permissible under applicable law.
              </p>

              <h3 className={styles.subheading}>2.5</h3>
              <p className={styles.paragraph}>
                Henric shall provide reasonable assistance to the Subscriber, through appropriate technical and organizational measures, with the Subscriber&apos;s compliance obligations to implement reasonable security procedures and practices appropriate to the nature of the Personal Data.
              </p>

              <h3 className={styles.subheading}>2.6</h3>
              <p className={styles.paragraph}>
                Henric&apos;s assistance to the Subscriber in accordance with Clause 2.4 and 2.5 will be provided at the Subscriber&apos;s reasonable expense, unless the reason for the assistance is a direct result of an act or omission by Henric or its Affiliates.
              </p>

              <h3 className={styles.subheading}>2.7</h3>
              <p className={styles.paragraph}>
                Henric certifies that it will not:
              </p>
              <p className={styles.paragraph}>
                a) retain, use, or disclose Personal Data outside the context of the relationship between Henric and the Subscriber, other than to provide the Services in accordance with the Agreement and this DPA, or as otherwise permitted by Applicable Data Protection Laws;<br /><br />
                b) sell or share Personal Data; or<br /><br />
                c) combine Personal Data Henric obtains in the performance of the Services with any personal information that Henric collects from other sources, except as permitted by Applicable Data Protection Laws.
              </p>
            </div>
          </div>

          {/* Section 3: Obligations of the Subscriber */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>3</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Obligations of the Subscriber</h2>

              <h3 className={styles.subheading}>3.1</h3>
              <p className={styles.paragraph}>
                The Subscriber shall ensure that it has a valid legal basis, and all necessary rights, consents, and authorizations, to provide the Personal Data to Henric and to authorize Henric to process that Personal Data in accordance with this DPA, the Agreement and/or other processing instructions provided by the Subscriber to Henric.
              </p>

              <h3 className={styles.subheading}>3.2</h3>
              <p className={styles.paragraph}>
                The Subscriber shall comply with all Applicable Data Protection Laws that are applicable to it as controller of the Personal Data.
              </p>

              <h3 className={styles.subheading}>3.3</h3>
              <p className={styles.paragraph}>
                The Subscriber shall limit the provision of Personal Data to Henric to what is necessary for the purpose of the Agreement. For example, the Subscriber shall not include Personal Data, other than technical contact information, in technical support tickets.
              </p>
            </div>
          </div>

          {/* Section 4: Sub-processors */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>4</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Sub-processors</h2>

              <h3 className={styles.subheading}>4.1</h3>
              <p className={styles.paragraph}>
                Henric is, subject to Clause 4.2 and Clause 5, entitled to engage subcontractors acting as sub-processors, and under the condition that they are bound by a written agreement which impose on them materially the same data processing obligations as the obligations under this DPA in respect of data protection.
              </p>

              <h3 className={styles.subheading}>4.2</h3>
              <p className={styles.paragraph}>
                Henric shall inform the Subscriber of any new sub-processors by updating the <Link href="/legal/terms/sub-processors" className={styles.link}>sub-processor list</Link> and give the Subscriber the opportunity to object to such changes. Such objections by the Subscriber shall be based on grounds regarding the new sub-processor&apos;s ability to comply with Applicable Data Protection Laws and be made in writing within 30 days from posting. Henric may not engage a new sub-processor before the 30-day period has ended. Henric shall upon request provide the Subscriber with such information available to Henric that the Subscriber may reasonably request to assess the new sub-processor&apos;s ability to comply with Applicable Data Protection Laws. If Henric, despite the Subscriber&apos;s objection, wishes to engage the sub-processor, the Parties shall in good faith discuss and try to find an alternative solution which is reasonably acceptable to both Parties. If the Parties cannot find an alternative solution and the Subscriber still objects to the appointment of the sub-processor, and if the Subscriber&apos;s objection would result in additional costs or expenses for Henric, then Henric is entitled to adjust its fees under the Agreement to ensure that Henric is compensated for such additional and/or increased costs or expenses. Notwithstanding the previous sentence, if the Subscriber&apos;s objection would result in costs or operational consequences which, in Henric&apos;s opinion, would not be commercially reasonable, Henric may terminate the Agreement upon reasonable written notice.
              </p>

              <h3 className={styles.subheading}>4.3</h3>
              <p className={styles.paragraph}>
                A current list of Henric&apos;s sub-processors is available at <Link href="/legal/terms/sub-processors" className={styles.link}>Pre-approved Sub-processors</Link>.
              </p>
            </div>
          </div>

          {/* Section 5: Third Country Transfers */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>5</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Third Country Transfers</h2>

              <h3 className={styles.subheading}>5.1</h3>
              <p className={styles.paragraph}>
                The Subscriber acknowledges that it may transfer Personal Data or make Personal Data available by remote access to Henric in the EU, in order for Henric to provide the Services. Henric may not process Personal Data outside or engage sub-processors processing the personal data outside of the EU/EEA without the Subscriber&apos;s prior consent (which shall be considered given if the Subscriber has not objected to a new sub-processor within the time set out in Clause 4.2).
              </p>

              <h3 className={styles.subheading}>5.2</h3>
              <p className={styles.paragraph}>
                To the extent any transfer described in Clause 5.1 constitutes a Restricted Transfer, Henric shall upon request provide all reasonably relevant information regarding the Restricted Transfer to enable the Subscriber to make an informed decision, including details of the country or territory to which the Personal Data will be transferred.
              </p>

              <h3 className={styles.subheading}>5.3</h3>
              <p className={styles.paragraph}>
                If Standard Contractual Clauses are used as a Data Transfer Mechanism under this DPA, they shall be implemented as follows:
              </p>
              <p className={styles.paragraph}>
                a) Henric shall ensure that the Restricted Transfer is subject to adequate safeguards as stated in Chapter V of the GDPR and may for this purpose rely on the Standard Contractual Clauses provided that the clauses, including supplementary security measures, ensure an essentially equivalent level of protection.<br /><br />
                b) The Parties acknowledge and agree that Henric or its Sub-processor, as applicable, shall be deemed to have signed the Standard Contractual Clauses and agreed to their obligations under the Standard Contractual Clauses.
              </p>

              <h3 className={styles.subheading}>5.4</h3>
              <p className={styles.paragraph}>
                Henric represents and warrants that Henric has no reason to believe that legislation or practices applicable to it or its sub-processors, including in any country to which Personal Data is transferred either by itself or through a sub-processor, prevents it from fulfilling its obligations under Applicable Data Protection Laws, this DPA or its obligations in the Standard Contractual Clauses. In the event Henric is unable to fulfil its obligations in this Clause 5.4, Henric agrees to immediately notify the Subscriber.
              </p>
            </div>
          </div>

          {/* Section 6: Information Security and Confidentiality */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>6</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Information Security and Confidentiality</h2>

              <h3 className={styles.subheading}>6.1</h3>
              <p className={styles.paragraph}>
                To maintain an adequate level of security for the protection of Personal Data, and without prejudice to the information security and confidentiality obligations which otherwise follows from the Agreement, Henric commits to the appropriate technical and organizational measures described in <Link href="/legal/security" className={styles.link}>Security Measures</Link>.
              </p>

              <h3 className={styles.subheading}>6.2</h3>
              <p className={styles.paragraph}>
                Henric shall protect the Personal Data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Personal Data transmitted, stored, or otherwise processed. The Personal Data shall also be protected against other forms of unlawful processing.
              </p>

              <h3 className={styles.subheading}>6.3</h3>
              <p className={styles.paragraph}>
                Henric shall ensure that only staff and other representatives who require access to Personal Data to fulfil Henric&apos;s obligations under the Agreement have access to such information. Henric shall guarantee that all persons authorized to process the Personal Data are committed to confidentiality or are under an appropriate statutory obligation of confidentiality. Furthermore, all persons authorized to process Personal Data shall receive sufficient and necessary training covering awareness of GDPR and data processing agreements.
              </p>
            </div>
          </div>

          {/* Section 7: Data Breach Notifications */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>7</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Data Breach Notifications</h2>

              <h3 className={styles.subheading}>7.1</h3>
              <p className={styles.paragraph}>
                Henric shall inform the Subscriber without undue delay and at the latest within 36 hours from becoming aware of a Personal Data breach.
              </p>

              <h3 className={styles.subheading}>7.2</h3>
              <p className={styles.paragraph}>
                Henric shall assist the Subscriber with any information reasonably required to fulfil the Subscriber&apos;s data breach notification requirements under Applicable Data Protection Laws. Any costs associated with such assistance will be subject to the limitations of liability in the General Terms and Conditions.
              </p>
            </div>
          </div>

          {/* Section 8: Data Protection Impact Assessments */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>8</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Data Protection Impact Assessments and Prior Consultations</h2>

              <h3 className={styles.subheading}>8.1</h3>
              <p className={styles.paragraph}>
                Henric shall, at the Subscriber&apos;s reasonable expense, considering the nature of the processing and the information available to Henric, assist the Subscriber in fulfilling the Subscriber&apos;s obligation to, when applicable, carry out data protection impact assessments and prior consultations with the Data Protection Authority.
              </p>
            </div>
          </div>

          {/* Section 9: Audit Rights */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>9</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Audit Rights</h2>

              <h3 className={styles.subheading}>9.1</h3>
              <p className={styles.paragraph}>
                Subscriber shall have the right to perform audits of Henric&apos;s processing of Subscriber&apos;s personal data to verify Henric&apos;s compliance with this DPA and Applicable Data Protection Laws. This audit right is limited to once per 12-month period unless the Subscriber has clear reasons to believe that Henric has materially breached its obligations under this DPA.
              </p>

              <h3 className={styles.subheading}>9.2</h3>
              <p className={styles.paragraph}>
                Henric undertakes to make available to the Subscriber all information and other assistance necessary to demonstrate compliance with the obligations laid down in this DPA and allow for and contribute to audits, including on-site inspections, conducted by an authorized and reputable auditor mandated by the Subscriber, provided that the individuals performing the audits enter into confidentiality agreements or are bound by statutory obligations of confidentiality.
              </p>

              <h3 className={styles.subheading}>9.3</h3>
              <p className={styles.paragraph}>
                In this context, it is noted that among Henric&apos;s customers there may be entities which are subject to statutory and/or bar association rules on confidentiality in relation to client/customer matters (e.g. banks, financial institutions, law firms, etc.). Hence, the Subscriber acknowledges that audits under this DPA shall not include access to information pertaining or belonging to Henric&apos;s other customers.
              </p>

              <h3 className={styles.subheading}>9.4</h3>
              <p className={styles.paragraph}>
                The Subscriber is responsible for all costs associated with audits, save for when an audit concludes a material breach of Henric&apos;s undertakings in violation of the Agreement. If so, Henric shall compensate the Subscriber for reasonable and verified costs associated with the audit.
              </p>
            </div>
          </div>

          {/* Section 10: Term of Agreement */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>10</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Term of Agreement</h2>

              <h3 className={styles.subheading}>10.1</h3>
              <p className={styles.paragraph}>
                The provisions of this DPA shall apply as long as Henric processes Personal Data for which the Subscriber is data controller or until such time this DPA is replaced with another data processing agreement.
              </p>
            </div>
          </div>

          {/* Section 11: Measures Upon Completion of Processing */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>11</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Measures Upon Completion of Processing of Personal Data</h2>

              <h3 className={styles.subheading}>11.1</h3>
              <p className={styles.paragraph}>
                Before the expiration of this DPA, Henric shall, at the choice and instruction of the Subscriber, securely delete or return all Personal Data to the Subscriber, unless Applicable Data Protection Laws require Henric to store the Personal Data in which case the obligations set out in Clause 11.4(a)–(c) shall apply.
              </p>

              <h3 className={styles.subheading}>11.2</h3>
              <p className={styles.paragraph}>
                If return or destruction is impracticable or incidentally prohibited by a valid legal requirement, Henric shall take measures to inform the Subscriber and block such Personal Data from any further processing (except to the extent necessary for its continued hosting or processing required under Swedish or EU law) and shall continue to appropriately protect the Personal Data remaining in its possession, custody, or control and, where any authorized sub-processor continues to possess Personal Data, require the authorized sub-processor to take the same measures that would be required of Henric.
              </p>

              <h3 className={styles.subheading}>11.3</h3>
              <p className={styles.paragraph}>
                Upon request by the Subscriber, Henric shall provide a written notice of the measures taken regarding the Personal Data upon completion of the processing as set out in Clause 11.1.
              </p>

              <h3 className={styles.subheading}>11.4</h3>
              <p className={styles.paragraph}>
                If Henric is legally required to retain archival copies of any specific data belonging to the Subscriber for tax or similar regulatory purposes, Henric shall:
              </p>
              <p className={styles.paragraph}>
                a) inform the Subscriber thereof in writing specifying the legal obligation and the affected Subscriber data;<br /><br />
                b) not use the archived information for any other purpose than to strictly comply with the applicable legal obligation; and<br /><br />
                c) remain bound by its obligations under the Agreement, including this DPA, including its confidentiality and security obligations under the Agreement and the obligations under this DPA to protect the information using appropriate safeguards and to notify the Subscriber of any security incident involving the information.
              </p>
            </div>
          </div>

          {/* Section 12: Amendments */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>12</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Amendments</h2>

              <h3 className={styles.subheading}>12.1</h3>
              <p className={styles.paragraph}>
                Any amendments to this DPA shall, to be valid, be agreed in writing and duly signed by authorized representatives of both Parties.
              </p>

              <h3 className={styles.subheading}>12.2</h3>
              <p className={styles.paragraph}>
                Notwithstanding Clause 12.1, the Subscriber is entitled to make updates to its written instructions regarding the processing. Henric shall be entitled to remuneration for any reasonable and verified additional costs that Henric incurs due to the Subscriber having made amendments to its written instructions regarding the processing. Notwithstanding the aforesaid, no remuneration shall be payable due to amendments in the written instructions directly due to, or directly based on, regulatory requirements.
              </p>
            </div>
          </div>

          {/* Section 13: Liability */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>13</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Liability</h2>

              <h3 className={styles.subheading}>13.1</h3>
              <p className={styles.paragraph}>
                The liability provisions and limitations thereof set out in the General Terms and Conditions shall apply to this DPA.
              </p>
            </div>
          </div>

          {/* Section 14: Governing Law and Disputes */}
          <div className={styles.section}>
            <div className={styles.sectionNumber}>
              <span className={styles.numberLarge}>14</span>
            </div>
            <div className={styles.sectionContent}>
              <h2 className={styles.heading}>Governing Law and Settlement of Disputes</h2>

              <h3 className={styles.subheading}>14.1</h3>
              <p className={styles.paragraph}>
                Except as otherwise required by Applicable Data Protection Laws, this DPA shall be governed by and construed in accordance with the laws of Sweden.
              </p>

              <h3 className={styles.subheading}>14.2</h3>
              <p className={styles.paragraph}>
                Any dispute, controversy, or claim arising out of or in connection with this DPA, or the breach, termination, or invalidity thereof, shall be finally settled by the courts of Sweden, with Stockholm District Court (Stockholms tingsrätt) as the court of first instance.
              </p>

              <h3 className={styles.subheading}>14.3 Contact Us</h3>
              <div className={styles.contactCard}>
                <p className={styles.paragraph}>
                  If you have any questions about this Data Processing Agreement, please contact us at:
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
