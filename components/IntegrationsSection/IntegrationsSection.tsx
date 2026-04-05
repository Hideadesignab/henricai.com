'use client';

import Link from 'next/link';
import styles from './IntegrationsSection.module.css';
import { IntegrationScroller } from './IntegrationScroller';

export function IntegrationsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <p className={styles.leftText}>
            Real estate professionals use Henric for
          </p>
        </div>

        <IntegrationScroller />

        <div className={styles.rightAlign}>
          <Link href="/plattform" className={styles.button}>
            Explore Plattform
          </Link>
        </div>
      </div>
    </section>
  );
}
