import styles from './ValueProp.module.css'
import { Container } from '../Container'

export function ValueProp() {
  return (
    <section className={styles.valueProp}>
      <Container>
        <div className={styles.grid}>
          {/* Left: empty space */}
          <div className={styles.left} />

          {/* Right: text */}
          <div className={styles.right}>
            <p className={styles.text}>
              Two hours back. Every day. Henric handles the admin that slows you down—contracts, cases, documentation, communication. So you can do the work only you can do.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
