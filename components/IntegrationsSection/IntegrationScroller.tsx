'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './IntegrationScroller.module.css';

const INTEGRATIONS = [
  'Lease Reviews',
  'Indexation Tracking',
  'Due Diligence',
  'Renegotiation Prep',
  'Portfolio Onboarding',
  'Compliance Verification',
  'Budget Analysis',
  'Clause Extraction',
  'Handover Documentation',
  'Maintenance Lookups',
];

const COPIES = 11;
const INTERVAL = 1800;

export function IntegrationScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef(Math.floor(COPIES / 2) * INTEGRATIONS.length);
  const [activeIndex, setActiveIndex] = useState(cursorRef.current);

  const allWords: string[] = [];
  for (let c = 0; c < COPIES; c++) {
    INTEGRATIONS.forEach((name) => allWords.push(name));
  }

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const middleStart = Math.floor(COPIES / 2) * INTEGRATIONS.length;

    function moveTo(idx: number, animate: boolean) {
      if (!track || !container) return;
      const wordEls = track.querySelectorAll<HTMLDivElement>('[data-word]');
      const word = wordEls[idx];
      if (!word) return;
      const wordTop = word.offsetTop;
      const wordH = word.offsetHeight;
      const containerH = container.offsetHeight;
      const y = -(wordTop - containerH / 2 + wordH / 2);

      if (animate) {
        track.style.transition = 'transform 1s cubic-bezier(0.22, 1, 0.36, 1)';
      } else {
        track.style.transition = 'none';
      }
      track.style.transform = `translateY(${y}px)`;
    }

    // Initial position (no animation)
    moveTo(cursorRef.current, false);

    const interval = setInterval(() => {
      cursorRef.current++;
      setActiveIndex(cursorRef.current);
      moveTo(cursorRef.current, true);

      // Silent reset when too far from middle
      const resetThreshold = (Math.floor(COPIES / 2) + 3) * INTEGRATIONS.length;
      if (cursorRef.current >= resetThreshold) {
        setTimeout(() => {
          const logical = cursorRef.current % INTEGRATIONS.length;
          cursorRef.current = middleStart + logical;
          setActiveIndex(cursorRef.current);
          moveTo(cursorRef.current, false);
          if (track) {
            void track.offsetHeight;
          }
        }, 1100);
      }
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  function getWordStyle(dist: number): React.CSSProperties {
    if (dist === 0) {
      return { color: 'var(--text-primary)', fontWeight: 500, opacity: 1 };
    }
    if (dist === 1) {
      return { color: 'var(--text-primary)', fontWeight: 400, opacity: 0.18 };
    }
    if (dist === 2) {
      return { color: 'var(--text-primary)', fontWeight: 400, opacity: 0.10 };
    }
    if (dist === 3) {
      return { color: 'var(--text-primary)', fontWeight: 400, opacity: 0.06 };
    }
    return { color: 'var(--text-primary)', fontWeight: 400, opacity: 0.04 };
  }

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />

      <div className={styles.wrapper}>
        <div className={styles.trackContainer}>
          <div ref={trackRef} className={styles.track}>
            {allWords.map((name, i) => {
              const dist = Math.abs(i - activeIndex);
              const wordStyle = getWordStyle(dist);

              return (
                <div
                  key={`${name}-${i}`}
                  data-word
                  className={styles.word}
                  style={wordStyle}
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
