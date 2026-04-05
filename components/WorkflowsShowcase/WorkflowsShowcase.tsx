"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./WorkflowsShowcase.module.css";

const icons = {
  prompt: { src: "/workflow-icons/prompt.svg", alt: "Prompt" },
  reviewTable: { src: "/workflow-icons/review-table.svg", alt: "Review Table" },
  compareDocuments: { src: "/workflow-icons/compare-documents.svg", alt: "Compare Documents" },
  generateDocument: { src: "/workflow-icons/generate-document.svg", alt: "Generate Document" },
  searchDatabase: { src: "/workflow-icons/search-database.svg", alt: "Search Database" },
  searchWeb: { src: "/workflow-icons/search-web.svg", alt: "Search Web" },
} as const;

const workflows = [
  { name: "Lease agreement review", description: "Reviews commercial and residential lease agreements to extract key terms, index clauses, renewal options, and termination rights. Returns a structured report with the full analysis.", tools: [icons.prompt, icons.reviewTable, icons.generateDocument] },
  { name: "Rent roll analysis", description: "Analyzes rent rolls across your portfolio to surface vacancy rates, rental levels, lease expiries, and income distribution. Returns a comprehensive summary.", tools: [icons.prompt, icons.reviewTable] },

  { name: "Due diligence report", description: "Synthesizes uploaded documents, agreements, and financial data into a structured due diligence report for acquisitions, dispositions, or refinancing.", tools: [icons.prompt, icons.generateDocument, icons.searchDatabase] },

  { name: "Operating cost reconciliation", description: "Analyzes operating costs against budget or prior year to identify discrepancies, cost drivers, and savings opportunities. Returns a reconciliation summary per property or portfolio.", tools: [icons.prompt, icons.reviewTable, icons.compareDocuments] },

  { name: "Tenant risk assessment", description: "Reviews tenant data, payment history, and financial exposure to assess risk across your portfolio. Returns a structured risk profile per tenant.", tools: [icons.prompt, icons.reviewTable, icons.searchDatabase] },
  { name: "Market rent benchmark", description: "Compares current rental levels against uploaded market data to identify under- and over-rented assets. Returns a benchmark report per property or unit.", tools: [icons.prompt, icons.searchDatabase, icons.searchWeb] },
];

const EASE = "400ms cubic-bezier(0.16, 1, 0.3, 1)";

export default function WorkflowsShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isInList = useRef(false);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);

  const showDesc = useCallback((i: number) => {
    if (exitTimer.current) clearTimeout(exitTimer.current);
    const next = descRefs.current[i];
    if (!next || next === activeRef.current) return;

    if (activeRef.current) {
      // Instant swap
      activeRef.current.removeAttribute("style");
      next.style.transition = "none";
      next.style.opacity = "1";
      next.style.transform = "translateY(0)";
    } else {
      // First enter — animate up
      next.style.opacity = "0";
      next.style.transform = "translateY(10px)";
      next.offsetHeight;
      next.style.transition = `opacity ${EASE}, transform ${EASE}`;
      next.style.opacity = "1";
      next.style.transform = "translateY(0)";
    }
    activeRef.current = next;
    setActiveIndex(i);
  }, []);

  const handleListEnter = useCallback(() => {
    isInList.current = true;
    if (exitTimer.current) clearTimeout(exitTimer.current);
  }, []);

  const handleListLeave = useCallback(() => {
    isInList.current = false;
    if (activeRef.current) {
      const leaving = activeRef.current;
      leaving.style.transition = `opacity ${EASE}, transform ${EASE}`;
      leaving.style.opacity = "0";
      leaving.style.transform = "translateY(10px)";
      exitTimer.current = setTimeout(() => {
        leaving.removeAttribute("style");
      }, 420);
      activeRef.current = null;
      setActiveIndex(null);
    }
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Workflows</p>

        <div
          className={styles.list}
          onMouseEnter={handleListEnter}
          onMouseLeave={handleListLeave}
        >
          {workflows.map((wf, i) => (
            <div
              key={i}
              className={styles.item}
              onMouseEnter={() => showDesc(i)}
            >
              <span>{wf.name}</span>
              <span className={styles.mobileDesc}>{wf.description}</span>
              <div className={styles.toolIcons}>
                {wf.tools.map((tool) => (
                  <Image
                    key={tool.alt}
                    src={tool.src}
                    alt={tool.alt}
                    width={20}
                    height={20}
                    className={styles.toolIcon}
                  />
                ))}
              </div>
            </div>
          ))}

          <Link href="/book-demo" className={styles.itemCustom}>
            <span className={styles.plus}>+</span>
            <span>Your custom workflow</span>
            <span className={styles.bookCta}>Book a Demo</span>
            <span className={styles.mobileBookBtn}>Book a Demo</span>
          </Link>
        </div>

        <div className={styles.rightPanel}>
          {workflows.map((wf, i) => (
            <div
              key={i}
              ref={(el) => { descRefs.current[i] = el; }}
              className={styles.descText}
            >
              {wf.description}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
