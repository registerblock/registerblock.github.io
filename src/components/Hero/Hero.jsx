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
                    <h1 className={styles.title}>Registerblock</h1>
                    <p className={styles.description}>
                    RegisterBlock brings real estate and other tangible assets <br/>
                    to the blockchain,  making  investing  simple, secure, and <br/>
                    accessible for everyone. Own fractions of valuable assets  <br/>
                    and trade them anytime, anywhere.
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
