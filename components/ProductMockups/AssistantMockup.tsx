import styles from './ProductMockups.module.css'

export default function AssistantMockup() {
  return (
    <div className={styles.mockupContainer}>
      <div className={styles.chatWindow}>
        <div className={styles.chatHeader}>
          <div className={styles.chatHeaderDot} />
          <span className={styles.chatHeaderTitle}>Henric Assistant</span>
        </div>

        <div className={styles.chatBody}>
          {/* User question */}
          <div className={styles.chatBubbleUser}>
            <p className={styles.chatText}>
              Vilken indexklausul gäller för Storgatan 12?
            </p>
          </div>

          {/* Assistant response */}
          <div className={styles.chatBubbleAssistant}>
            <p className={styles.chatText}>
              Hyresavtalet för Storgatan 12 har en indexklausul kopplad till{' '}
              <strong>KPI med 100% uppräkning</strong>, basår oktober 2022.
              Uppräkning sker årligen per 1 januari.
            </p>
            <div className={styles.citationCard}>
              <div className={styles.citationIcon}>PDF</div>
              <div className={styles.citationInfo}>
                <span className={styles.citationName}>Hyresavtal — Storgatan 12, LGH 1201</span>
                <span className={styles.citationPage}>Sida 4, §4.2 Indexklausul</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.chatInput}>
          <span className={styles.chatInputPlaceholder}>Ställ en fråga...</span>
        </div>
      </div>
      <div className={styles.fadeBottom} />
    </div>
  )
}
