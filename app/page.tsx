import { HeroSection } from '@/components/HeroSection'
import { ProductOverview } from '@/components/ProductOverview'
import { CTASection } from '@/components/CTASection'
import { FAQSection } from '@/components/FAQSection'

import styles from './home-security.module.css'

export default function Home() {
  return (
    <>
      <HeroSection />

      <ProductOverview />

      {/* Security Section */}
      <section data-theme="dark" className={styles.section}>
          <span className={styles.eyebrow}>SECURITY &amp; PRIVACY</span>
          <h2 className={styles.headline}>Your data stays yours.</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>ISO 27001</h4>
              <p className={styles.cardDescription}>
                Currently in the ISO 27001 certification audit — the international standard for information security management.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.cardIcon} src="/images/iso27001-trimmed.svg" alt="" aria-hidden="true" />
            </div>

            <div className={styles.card}>
              <h4 className={styles.cardTitle}>GDPR</h4>
              <p className={styles.cardDescription}>
                As a Swedish company, Henric operates under EU data protection law. Fully GDPR compliant with a DPA for every customer.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.cardIcon} src="/images/gdpr-trimmed.svg" alt="" aria-hidden="true" />
            </div>
          </div>
      </section>

      <FAQSection />

      <CTASection />
    </>
  )
}
