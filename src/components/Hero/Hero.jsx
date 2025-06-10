"use client";
// src/components/Hero/Hero.jsx
import styles from './Hero.module.scss';
import Image from 'next/image';
import heroImage from "../../images/hero-image.png";
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();
    return (
        <section className={styles.hero} style={{
            backgroundImage: `url(${heroImage.src})`
        }}>
            <div className={styles.container} >
                <div className={styles.imageWrapper}></div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Brickchain</h1>
                    <p className={styles.description}>
                        Invest in real estate the modern way. Brickchain turns buildings
                        and houses into fractional NFTs so anyone can own a share of a
                        property. Buy, sell and trade your tokens while receiving your
                        portion of rental income automatically on chain.
                    </p>
                    <div className={styles.buttons} onClick={() => {
                        router.push('/projects');
                    }}>
                        <button className={styles.getStarted}>Get Started</button>
                        <button className={styles.playIcon}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33301 2L12.6663 8L3.33301 14V2Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
