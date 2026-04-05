import Image from 'next/image'
import styles from './VisionSection.module.css'

export function VisionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Vision</h2>

        <div className={styles.contentRow}>
          <div className={styles.leftColumn}>
            <div className={styles.textBlock}>
              <p className={styles.text}>
                Real estate professionals bring market instinct, relationship depth, and decades of pattern recognition. AI brings the ability to read every document, remember every clause, and surface every answer — instantly.
              </p>
              <p className={styles.text}>
                Our vision is to give every property professional the tools to operate at their highest level. By eliminating the hours spent searching, compiling, and cross-referencing, we free teams to focus on what actually moves the needle: the negotiations, the decisions, and the judgment calls that no system can replace.
              </p>
              <p className={styles.text}>
                We&apos;re not building a replacement. We&apos;re building an intelligence layer — one that makes every document readable, every portfolio transparent, and every decision grounded in what your organisation actually knows.
              </p>
            </div>

            <div className={styles.founderBlock}>
              <div className={styles.founderPhoto}>
                <Image
                  src="/images/rufus-wagert.png"
                  alt="Rufus Wågert, Co-founder & CEO"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p className={styles.founderName}>Rufus Wågert</p>
              <p className={styles.founderTitle}>Co-founder & CEO</p>
            </div>
          </div>

          <div className={styles.officeImage} />
        </div>
      </div>
    </section>
  )
}
