"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import styles from './HeroLogin.module.scss';
import heroImage from "../../images/hero-image.png";

export default function HeroLogin() {
    const router = useRouter();
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = (fields) => {
        const newErrors = {};
        if (!fields.email.includes("@")) newErrors.email = "Enter a valid email.";
        if (fields.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
        return newErrors;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const credentials = {
            email: form.email.value,
            password: form.password.value
        };

        const validationErrors = validate(credentials);
        setErrors(validationErrors);
        setTouched({ email: true, password: true });

        if (Object.keys(validationErrors).length > 0) return;

        const savedUser = JSON.parse(localStorage.getItem("userData"));

        if (
            savedUser?.email === credentials.email &&
            savedUser?.password === credentials.password
        ) {
            localStorage.setItem("isLoggedIn", "true"); // ✅ Giriş işaretlendi
            toast.success("Login successful!");
            window.dispatchEvent(new Event("auth-changed"));
            setTimeout(() => router.push("/"), 1000);
        } else {
            toast.error("Invalid email or password");
        }
    };

    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroImage.src})` }}>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <form className={styles.card} onSubmit={handleLogin}>
                        <label>Email</label>
                        <input name="email" type="email" placeholder="mary@abc.com" />
                        {touched.email && errors.email && <span className={styles.error}>{errors.email}</span>}

                        <label>Password</label>
                        <input name="password" type="password" placeholder="**********" />
                        {touched.password && errors.password && <span className={styles.error}>{errors.password}</span>}

                        <button type="submit">Sign In</button>

                        <a href="#" className={styles.forgot}>Forgot password?</a>
                    </form>
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Brickchain</h1>
                    <p className={styles.subtitle}>Your starting page</p>
                    <p className={styles.description}>
                        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                    </p>
                </div>
            </div>
        </section>
    );
}
