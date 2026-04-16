import { HeroSection } from '@/components/HeroSection'
import { ProductOverview } from '@/components/ProductOverview'
import { CTASection } from '@/components/CTASection'

import styles from './home-security.module.css'
import showcase from './home-showcase.module.css'

const comingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true'

export default function Home() {
  if (comingSoon) {
    return <HeroSection />
  }

  return (
    <>
      <HeroSection />

      <section className={showcase.section}>
        <h2 className={showcase.headline}>
          <span className={showcase.headlineBlack}>Henric is AI purpose-built for real estate professionals.</span>{' '}
          <span className={showcase.headlineGray}>Clarity and precision across your entire portfolio — so your team can focus on the work that matters.</span>
        </h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={showcase.placeholder} src="/images/product-showcase.png" alt="Henric platform" />
      </section>

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

      <CTASection />
    </>
  )
}
