"use client";

// src/components/Projects/ProjectCard.jsx
import Image from 'next/image';
import styles from './ProjectCard.module.scss';
import { useRouter } from "next/navigation";

export default function ProjectCard({ id, title, unitTypes, price, shares, image }) {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/projects/${id}`);
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            <Image src={image} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>
                {unitTypes && unitTypes.length > 0
                    ? unitTypes.join(', ')
                    : "No units available"}
            </p>
            <br />
            <p className={styles.subtitle}>${price.toString().replace('.', ',')} Mio</p>
            <button className={styles.button}>Invest</button>
        </div>
    );
}
