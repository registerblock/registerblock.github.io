"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./ProjectCard.module.scss";

export default function ProjectCard({ project }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <h3 className={styles.title}>{project.title}</h3>
      <Image src={project.image} width={500} height={300} alt={project.title} className={styles.image} />
      <div className={styles.cardBody}>
        <div className={styles.unitTypes}>
          <div className={styles.unitTypes}>
            {project.unitTypes.map((type, idx) => (
                <span key={idx}>{type}</span> 
            ))}
          </div>
        </div>

        <div className={styles.priceBlock}>
          <p className={styles.priceLabel}>Starting from</p>
          <p className={styles.price}>${project.price.toString().replace('.', ',')} Mio</p>
        </div>

        <p className={styles.shareOption}>Shares option {project.shareOption}</p>

        <button className={styles.investBtn}>Invest</button>
      </div>
    </div>
  );
}
