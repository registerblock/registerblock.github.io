"use client";

import { useState, useRef } from "react";
import styles from "./DeveloperInfoAccordion.module.scss";

export default function DeveloperInfoAccordion({ items }) {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className={styles.accordionList}>
      {items.map((item, idx) => {
        const isOpen = openIndexes.includes(idx);
        return (
          <div key={idx} className={styles.accordionItem}>
            <div className={styles.header} onClick={() => toggleAccordion(idx)}>
              <strong>{item.title}</strong>
              <span className={styles.arrow}>{isOpen ? <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12.5L10 7.5L5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}</span>
            </div>
            <div
              className={`${styles.content} ${isOpen ? styles.open : ""}`}
              style={{ maxHeight: isOpen ? "500px" : "0px" }}
            >
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
