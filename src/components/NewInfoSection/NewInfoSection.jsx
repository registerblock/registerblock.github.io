import Image from "next/image";
import styles from "./NewInfoSection.module.css";

export default function NewInfoSection({
    name,
    title,
    description,
    image,
    logos,
    linkedin
}) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div>
                        <h2 className={styles.name}>
                            {name}
                            {linkedin && (
                                <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedin}>
                                    in
                                </a>
                            )}
                        </h2>
                        <h4 className={styles.title}>{title}</h4>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                    <div className={styles.logos}>
                        {logos.map((logo, i) => (
                            <div key={i} className={styles.logoItem}>
                                <img src={logo.src} alt="logo" />
                            </div>
                        ))}
                    </div>

                </div>
                <div className={styles.right}>
                    <div className={styles.imageWrapper}>
                        <Image src={image} alt={name} width={220} height={220} />
                    </div>
                </div>
            </div>
        </section>
    );
}
