'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection'
import styles from './page.module.css'

const securityFaqs = [
  {
    question: 'Where is my data stored?',
    answer:
      'All customer data is hosted in EU data centres, with primary infrastructure in Frankfurt, Germany. Vendor data processing is also restricted to the EU, with Standard Contractual Clauses used where required by GDPR.',
  },
  {
    question: 'How does Henric encrypt data?',
    answer:
      'All data at rest is encrypted using AES 256-bit (or better) encryption. All data in transit is protected using Transport Layer Security (TLS) 1.2 or higher. All connections to Henric use HTTPS — we do not support unencrypted HTTP access.',
  },
  {
    question: 'Is my data used to train AI models?',
    answer:
      'No. Your data is never used to train, improve, or develop AI models. This is contractually guaranteed with our AI provider. Prompts and outputs are not stored beyond the immediate processing session.',
  },
  {
    question: 'Who can access my data?',
    answer:
      'Henric staff do not access customer data unless needed to provide or support the service, or required by law. All staff sign confidentiality agreements, use multi-factor authentication, and have access scoped to their role.',
  },
  {
    question: 'How are security incidents handled?',
    answer:
      'You are notified within 36 hours. We contain, investigate, and resolve the incident, and tell you what happened, what it means, and what we did about it. Security logs are preserved for at least one year.',
  },
]

export default function SecurityPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])


  return (
    <div data-theme="dark" className={`${styles.page} ${isVisible ? styles.visible : styles.hidden}`}>
      {/* Section 1: Hero */}
      <section className={styles.hero} data-hero>
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Security</p>
            <h1 className={styles.heroHeadline}>Security at Henric</h1>
          </div>
          <div className={styles.heroBottom}>
            <p className={styles.heroDescription}>
              Henric is GDPR compliant, EU-hosted, and encrypted by default. We are currently in the ISO 27001 certification process. This is how we protect your data.
            </p>
            <Link href="/legal/security" className={styles.heroButton}>
              Read security policy
            </Link>
          </div>
        </div>
        <div className={styles.heroRight} role="img" aria-label="Security illustration placeholder" />
      </section>

      {/* Section 2: Certifications */}
      <section className={styles.certifications}>
        <div className={styles.certificationsHeader}>
          <p className={styles.eyebrow}>Compliance</p>
          <h2 className={styles.sectionHeadline}>
            How we protect your data — and how we prove it.
          </h2>
        </div>
        <div className={styles.certGrid}>
          <div className={styles.certCard}>
            <h3 className={styles.certTitle}>ISO 27001</h3>
            <p className={styles.certDescription}>
              Currently in the ISO 27001 certification audit. We have implemented the information security management system and are working toward formal certification.
            </p>
            <svg className={styles.certIcon} width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <circle cx="32" cy="32" r="28" stroke="#E8E6E1" strokeWidth="1" />
              <ellipse cx="32" cy="32" rx="28" ry="10" stroke="#E8E6E1" strokeWidth="0.7" />
              <ellipse cx="32" cy="32" rx="10" ry="28" stroke="#E8E6E1" strokeWidth="0.7" />
              <ellipse cx="32" cy="32" rx="19" ry="28" stroke="#E8E6E1" strokeWidth="0.5" />
              <line x1="4" y1="20" x2="60" y2="20" stroke="#E8E6E1" strokeWidth="0.5" />
              <line x1="4" y1="44" x2="60" y2="44" stroke="#E8E6E1" strokeWidth="0.5" />
              <text x="32" y="30" textAnchor="middle" fill="#E8E6E1" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.5">ISO</text>
              <text x="32" y="41" textAnchor="middle" fill="#E8E6E1" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">27001</text>
            </svg>
          </div>
          <div className={styles.certCard}>
            <h3 className={styles.certTitle}>GDPR</h3>
            <p className={styles.certDescription}>
              Henric is a Swedish company operating under EU data protection law. We are fully GDPR compliant and offer a Data Processing Agreement to every customer.
            </p>
            <svg className={styles.certIcon} width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => {
                const r = 24
                const a = (deg - 90) * Math.PI / 180
                const sx = 32 + r * Math.cos(a)
                const sy = 32 + r * Math.sin(a)
                const s = 3.5
                const points = [0,1,2,3,4].map((j) => { const b = ((j * 144 - 90) * Math.PI) / 180; return `${sx + s * Math.cos(b)},${sy + s * Math.sin(b)}` }).join(' ')
                return <polygon key={deg} points={points} fill="#E8E6E1" />
              })}
              <text x="32" y="36" textAnchor="middle" fill="#E8E6E1" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="500">GDPR</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Data residency & encryption */}
      <section className={styles.featureSection}>
        <div className={styles.featureGrid}>
          <h2 className={styles.featureHeadline}>Data residency &amp; encryption</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h3 className={styles.featureItemTitle}>EU-based data residency</h3>
              <p className={styles.featureItemDescription}>
                All customer data is hosted in Frankfurt, Germany. Vendor processing is restricted to the EU. Where data transfers are necessary, we use Standard Contractual Clauses as required by GDPR.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h3 className={styles.featureItemTitle}>AES-256 encryption at rest, TLS 1.2+ in transit</h3>
              <p className={styles.featureItemDescription}>
                All data at rest is encrypted using AES 256-bit (or better) encryption. All data in transit is protected using Transport Layer Security 1.2 or higher. All connections use HTTPS — we do not support unencrypted HTTP access.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h3 className={styles.featureItemTitle}>No AI model training on your data</h3>
              <p className={styles.featureItemDescription}>
                Your data is never used to train, improve, or develop AI models. This is contractually guaranteed with our AI provider. Prompts and outputs are not retained beyond the immediate processing session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Access & governance */}
      <section className={styles.featureSection}>
        <div className={styles.featureGrid}>
          <h2 className={styles.featureHeadline}>Access &amp; governance</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h3 className={styles.featureItemTitle}>Principle of least privilege</h3>
              <p className={styles.featureItemDescription}>
                Personnel access to our cloud environment requires unique user IDs, secure connections, and multi-factor authentication. Permissions are scoped to the minimum required for each role.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h3 className={styles.featureItemTitle}>Your data stays yours</h3>
              <p className={styles.featureItemDescription}>
                Henric staff do not access customer data unless needed to provide or support the service, or required by law.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h3 className={styles.featureItemTitle}>Confidentiality agreements</h3>
              <p className={styles.featureItemDescription}>
                All personnel sign confidentiality agreements and are responsible for reporting any security incidents involving customer data.
              </p>
            </div>
            <div className={styles.featureItem}>
              <h3 className={styles.featureItemTitle}>Incident response</h3>
              <p className={styles.featureItemDescription}>
                If a security incident occurs, you are notified within 36 hours. We contain, investigate, and mitigate the issue and provide you with details on what happened and what we did. Security logs are preserved for at least one year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Your responsibilities */}
      <section className={styles.featureSection}>
        <div className={styles.featureGrid}>
          <h2 className={styles.featureHeadline}>Full ownership and control</h2>
          <div className={styles.featureList}>
            <p className={styles.featureParagraph}>
              You control your data. Henric provides secure authentication for team access, AES-256 encryption for stored data, and per-organisation data isolation. If something goes wrong on our side, you are notified within 36 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Security Cards */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsHeader}>
          <p className={styles.eyebrow}>What we do</p>
          <h2 className={styles.sectionHeadline}>
            The specifics.
          </h2>
        </div>
        <div className={styles.cardsGrid}>
          <div className={styles.card}>
            <svg className={styles.cardIcon} width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="14" stroke="#E8E6E1" strokeWidth="0.8" />
              <path d="M20 10V20L26 24" stroke="#E8E6E1" strokeWidth="0.8" strokeLinecap="round" />
            </svg>
            <h3 className={styles.cardTitle}>Zero data retention</h3>
            <p className={styles.cardDescription}>
              Our AI provider does not retain your prompts or outputs beyond the immediate processing session. This is contractually guaranteed.
            </p>
          </div>
          <div className={styles.card}>
            <svg className={styles.cardIcon} width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect x="10" y="8" width="20" height="26" rx="2" stroke="#E8E6E1" strokeWidth="0.8" />
              <path d="M15 20L18 23L25 16" stroke="#E8E6E1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className={styles.cardTitle}>GDPR compliant</h3>
            <p className={styles.cardDescription}>
              Henric is a Swedish company, fully compliant with GDPR and Swedish data protection law. We offer a DPA to every customer.
            </p>
          </div>
          <div className={styles.card}>
            <svg className={styles.cardIcon} width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect x="12" y="18" width="16" height="14" rx="2" stroke="#E8E6E1" strokeWidth="0.8" />
              <path d="M15 18V14C15 11.2386 17.2386 9 20 9C22.7614 9 25 11.2386 25 14V18" stroke="#E8E6E1" strokeWidth="0.8" />
            </svg>
            <h3 className={styles.cardTitle}>Encrypted at rest and in transit</h3>
            <p className={styles.cardDescription}>
              AES-256 encryption for stored data. TLS 1.2+ for data in transit. All connections use HTTPS — unencrypted access is not supported.
            </p>
          </div>
          <div className={styles.card}>
            <svg className={styles.cardIcon} width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M20 8L8 14V22C8 28.6274 13.3726 34 20 34C26.6274 34 32 28.6274 32 22V14L20 8Z" stroke="#E8E6E1" strokeWidth="0.8" />
              <path d="M15 20L18 23L25 16" stroke="#E8E6E1" strokeWidth="0.8" />
            </svg>
            <h3 className={styles.cardTitle}>Secure infrastructure</h3>
            <p className={styles.cardDescription}>
              Hosted on infrastructure from established cloud providers with their own security certifications. Customer data never leaves this environment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <FAQSection
        heading="Frequently asked questions"
        faqs={securityFaqs}
        variant="dark"
      />

      {/* Section 8: CTA */}
      <div className={styles.ctaWrapper}>
        <CTASection
          headline="Want to know more?"
          subheadline="Book a demo and we'll walk you through how we handle your data."
        />
      </div>
    </div>
  )
}
