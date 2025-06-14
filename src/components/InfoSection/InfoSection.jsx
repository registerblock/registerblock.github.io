import Image from 'next/image';
import styles from './InfoSection.module.scss';

export default function InfoSection({
    title,
    subtitle,
    text,
    image,
    reverse = false,
    background = '#0f0f0f',
    isHTML = false,
}) {
    return (
        <section
            className={styles.section}
            style={{ backgroundColor: background }}
        >
            <div className={`${styles.container} ${reverse ? styles.reverse : ''}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <h4 className={styles.subtitle}>{subtitle}</h4>
                    {/* Conditionally render HTML or plain text */}
                    {isHTML ? (
                        <div 
                            className={styles.text}
                            dangerouslySetInnerHTML={{ __html: text }} 
                        />
                    ) : (
                        <p className={styles.text}>{text}</p>
                    )}
                </div>
                <div className={styles.imageWrapper}>
                    <Image src={image} alt={title} className={styles.image} />
                </div>
            </div>
        </section>
    );
}
