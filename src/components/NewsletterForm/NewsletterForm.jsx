"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./NewsletterForm.module.scss";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            toast.error("Please enter a valid email address!");
            return;
        }

        toast.success("Successfully subscribed!");
        setEmail("");
    };

    return (
        <div className={styles.newsletterSection}>
            <h2 className={styles.title}>Follow the latest trends</h2>
            <p className={styles.subtitle}>With our daily newsletter</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
}
