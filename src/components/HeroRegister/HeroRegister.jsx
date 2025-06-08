"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import styles from './HeroRegister.module.scss';
import heroImage from "../../images/hero-image.png";

export default function HeroRegister() {
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const router = useRouter();

    const validate = (fields) => {
        const newErrors = {};
        if (!fields.fullName.trim()) newErrors.fullName = "Full name is required.";
        if (!fields.email.includes("@")) newErrors.email = "Enter a valid email.";
        if (fields.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
        return newErrors;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;

        const userData = {
            fullName: form.fullName.value,
            email: form.email.value,
            password: form.password.value,
            wallet: form.wallet.value,
        };

        const validationErrors = validate(userData);
        setErrors(validationErrors);
        setTouched({
            fullName: true,
            email: true,
            password: true,
            wallet: true,
        });

        if (Object.keys(validationErrors).length === 0) {
            localStorage.setItem("userData", JSON.stringify(userData));
            localStorage.setItem("isLoggedIn", "true");
            window.dispatchEvent(new Event("auth-changed"));
            toast.success("Registered and logged in!");
            setTimeout(() => router.push("/"), 1000);
        }

    };

    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroImage.src})` }}>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <form className={styles.card} onSubmit={handleRegister}>
                        <label>Full Name</label>
                        <input name="fullName" type="text" placeholder="John Doe" />
                        {touched.fullName && errors.fullName && <span className={styles.error}>{errors.fullName}</span>}

                        <label>Email</label>
                        <input name="email" type="email" placeholder="john@example.com" />
                        {touched.email && errors.email && <span className={styles.error}>{errors.email}</span>}

                        <label>Password</label>
                        <input name="password" type="password" placeholder="**********" />
                        {touched.password && errors.password && <span className={styles.error}>{errors.password}</span>}

                        <label>Wallet Address</label>
                        <input name="wallet" type="text" placeholder="0x..." />

                        <button type="submit">Register</button>

                        <p className={styles.loginLink}>Already have an account? <a href="/login">Login</a></p>
                    </form>
                </div>

                <div className={styles.content}>
                    <h1 className={styles.title}>Brickchain</h1>
                    <p className={styles.subtitle}>Register your account</p>
                    <p className={styles.description}>
                        Create your secure identity on our blockchain network. Store credentials, link your wallet and prepare for decentralized access. Our platform enables you to interact with smart contracts, manage your digital identity, and authenticate seamlessly across Web3 services.
                        <br /><br />
                        By registering, you gain access to a secure and transparent ecosystem built with cutting-edge blockchain technology. Whether you're trading assets, verifying credentials, or accessing exclusive dApps, your Brickchain ID will be your gateway to the decentralized future.
                        <br /><br />
                        All data is encrypted and stored securely on-chain or via zero-knowledge proofs, ensuring privacy without sacrificing usability. Join the next generation of the internet with confidence.
                    </p>
                </div>
            </div>
        </section>
    );
}
