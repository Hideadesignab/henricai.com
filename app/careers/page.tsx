import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Henric and build the AI platform for real estate professionals. View open roles in Stockholm.',
}

const roles = [
  { title: 'Full-Stack Engineer', location: 'Stockholm' },
  { title: 'AI/ML Engineer', location: 'Stockholm' },
]

const steps = [
  {
    number: '01',
    title: 'Introduction',
    description: 'A conversation to get to know each other and what you\u2019re looking for.',
  },
  {
    number: '02',
    title: 'Technical deep dive',
    description: 'We\u2019ll explore your skills, experience, and how you approach problems.',
  },
  {
    number: '03',
    title: 'Founder conversation',
    description: 'A final chat with the founders to make sure it\u2019s the right fit for both sides.',
  },
]

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>CAREERS</span>
        <p className={styles.subline}>Work at Henric</p>
        <h1 className={styles.headline}>Shape the future of real estate</h1>
        <a href="#open-roles" className={styles.ctaButton}>View open roles</a>
      </section>

      {/* Mission */}
      <section className={styles.mission}>
        <div className={styles.missionInner}>
          <span className={styles.eyebrow}>MISSION</span>
          <h2 className={styles.sectionHeadline}>Build the professional standard</h2>
          <div className={styles.missionText}>
            <p className={styles.body}>
              Every major industry has gotten its AI platform. Law has Harvey. Finance has Hebbia. Real estate — the world&apos;s largest asset class — doesn&apos;t have one yet.
            </p>
            <p className={styles.body}>
              We&apos;re building it. From Stockholm, for every real estate professional who spends more time preparing for work than doing it. If that sounds like a problem worth solving, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className={styles.roles} id="open-roles">
        <div className={styles.rolesInner}>
          <span className={styles.eyebrow}>OPEN ROLES</span>
          <h2 className={styles.sectionHeadline}>Ready to join us?</h2>
          <div className={styles.roleList}>
            {roles.map((role) => (
              <a
                key={role.title}
                href="mailto:careers@henricai.com"
                className={styles.roleRow}
              >
                <span className={styles.roleTitle}>{role.title}</span>
                <span className={styles.roleLocation}>{role.location}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How We Hire */}
      <section className={styles.hiring}>
        <div className={styles.hiringInner}>
          <span className={styles.eyebrow}>HOW WE HIRE</span>
          <h2 className={styles.sectionHeadline}>What to expect</h2>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div key={step.number} className={styles.step}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
