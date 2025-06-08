"use client";

import styles from "./LegalSecurity.module.scss";

export default function LegalSecurity() {
  return (
    <main className={styles.legalPage}>
      <section className={styles.header}>
        <h1>Legal Security</h1>
        <p>Learn how your investments are protected with us.</p>
      </section>

      <section className={styles.content}>
        <div className={styles.section}>
          <h2>Ownership Rights</h2>
          <p>
            Each investment represents direct ownership rights, protected under local property laws.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Regulatory Compliance</h2>
          <p>
            We fully comply with all regulations and maintain transparency in all transactions.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Secure Transactions</h2>
          <p>
            All investments are processed via secure, encrypted payment gateways and legally binding contracts.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Data Protection</h2>
          <p>
            Your personal and investment information is safeguarded under strict data privacy laws (GDPR compliant).
          </p>
        </div>
      </section>
    </main>
  );
}
