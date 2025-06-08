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

      <div className={styles.infoSection}>
        <h2>Our Office</h2>
        <p>1234 Dream Street, Istanbul, Turkey</p>
        <p>Phone: +90 555 123 4567</p>
        <p>Email: info@example.com</p>
      </div>

      <div className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0384294177837!2d28.978358715409684!3d41.00823797929926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba0a55a2f853%3A0x4c6ef56f8ef8c4b8!2sIstanbul!5e0!3m2!1str!2str!4v1614887204321!5m2!1str!2str"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
