"use client";

import styles from "./ContactPage.module.scss";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; 

export default function ContactPage() {
  const router = useRouter(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Please fill out the form below!</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          rows="6"
          required
        />

        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>

      <p className={styles.infoSection}>
        Email us at <a href="mailto:info@registerblock.com">info@registerblock.com</a>
      </p>
    </div>
  );
}
