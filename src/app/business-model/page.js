"use client";

import styles from "./BusinessModel.module.scss";

export default function BusinessModel() {
  return (
    <main className={styles.businessPage}>
      <section className={styles.header}>
        <h1>Our Business Model</h1>
        <p>Discover how we create value for our investors.</p>
      </section>

      <section className={styles.content}>
        <div className={styles.step}>
          <h2>1. Property Selection</h2>
          <p>
            We carefully select high-potential properties in prime locations with great ROI opportunities.
          </p>
        </div>

        <div className={styles.step}>
          <h2>2. Tokenization</h2>
          <p>
            Each property is tokenized into fractional shares, enabling affordable investment access.
          </p>
        </div>

        <div className={styles.step}>
          <h2>3. Investor Participation</h2>
          <p>
            Investors purchase property shares, becoming fractional owners with proportional rights.
          </p>
        </div>

        <div className={styles.step}>
          <h2>4. Profit Distribution</h2>
          <p>
            Rental income and capital gains are distributed among investors according to their share ownership.
          </p>
        </div>

        <div className={styles.step}>
          <h2>5. Exit Strategy</h2>
          <p>
            Investors can sell their shares through our platform or participate in property resale events.
          </p>
        </div>
      </section>
    </main>
  );
}
