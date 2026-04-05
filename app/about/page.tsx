import type { Metadata } from 'next'
import { ProductHero } from '@/components/ProductHero'
import { CTASection } from '@/components/CTASection'
import styles from './page.module.css'

export const metadata: Metadata = { title: 'About' }

const team = [
  { name: 'Rufus Wågert', title: 'Co-founder & CEO' },
  { name: 'Christoffer Frohde', title: 'Co-founder & Head of Finance' },
  { name: 'Leonard Landsberger', title: 'Co-founder & CTO' },
  { name: 'Buster Rune', title: 'Co-founder & CPO' },
]

export default function AboutPage() {
  return (
    <>
      <ProductHero
        category="Company"
        pageName="About"
        headline="Property managers deserve better tools."
        description="Four co-founders from Stockholm with one shared frustration. Henric is the workspace we wish we could have handed to every property manager we spoke to."
        ctaText="Book a demo"
        ctaLink="/book-demo"
      />

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.storyContainer}>
          <h2 className={styles.storyTitle}>Our story</h2>
          <div className={styles.storyTextArea}>
            <p className={styles.storyText}>
              Before writing a single line of code, we spoke to over 30 property companies across Sweden. The same frustration came up every time — too many systems, too much copying between them, too many hours on tasks that should take minutes.
            </p>
            <p className={styles.storyText}>
              Henric started as a simple idea: one workspace where property managers could handle all the document work that fills their day. Read leases, generate reports, sort requests, draft replies. Not five tools. One.
            </p>
          </div>
          <div className={styles.storyImageWrapper}>
            <div
              className={styles.storyImage}
              role="img"
              aria-label="Henric founding story"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <div className={styles.teamLayout}>
          <div>
            <span className={styles.teamEyebrow}>The team</span>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div
                  className={styles.teamCardImage}
                  role="img"
                  aria-label={member.name}
                />
                <h3 className={styles.teamCardName}>{member.name}</h3>
                <p className={styles.teamCardTitle}>{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Want to meet the team?"
        subheadline="We'd love to show you what we're building and hear about what you're working on."
      />
    </>
  )
}
