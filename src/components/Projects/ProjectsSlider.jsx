'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './ProjectsSlider.module.scss';
import ProjectCard from './ProjectCard';

import project1 from "../../images/projects-project-1.png";
import project2 from "../../images/projects-project-2.png";
import project3 from "../../images/projects-project-3.png";
import project4 from "../../images/projects-project-4.png";
import project5 from "../../images/projects-project-5.png";
import project6 from "../../images/projects-project-6.png";


export default function ProjectsSlider() {
    const projects = [
        {
          id: 1,
          title: "Bodrum Villas",
          image: project1,
          price: 2.5,  // Milyon
          currency: "USD",
          shareOption: "1/10",
          unitTypes: ["2+1", "3+1", "4+1", "4+2"],
          sizeRange: [150, 400],
          available: true,
          firstHand: true,
          category: ["Villa"],
          rating: 4.8,
        },
        {
          id: 2,
          title: "Istanbul Homes",
          image: project2,
          price: 0.5,
          currency: "USD",
          shareOption: "1/10",
          unitTypes: ["1+1", "2+1", "3+1", "4+1"],
          sizeRange: [60, 150],
          available: true,
          firstHand: false,
          category: ["Apartment"],
          rating: 4.3,
        },
        {
          id: 3,
          title: "Istanbul Mall",
          image: project3,
          price: 1.5,
          currency: "USD",
          shareOption: "1/20",
          unitTypes: ["50m2", "75m2", "100m2", "150m2"],
          sizeRange: [50, 150],
          available: false,
          firstHand: false,
          category: ["Commercial"],
          rating: 4.0,
        },
        {
          id: 4,
          title: "Cesme Villas",
          image: project4,
          price: 2.0,
          currency: "USD",
          shareOption: "1/10",
          unitTypes: ["1+1"],
          sizeRange: [70, 120],
          available: true,
          firstHand: true,
          category: ["Villa"],
          rating: 4.5,
        },
        {
          id: 5,
          title: "Antalya Villas",
          image: project5,
          price: 1.0,
          currency: "USD",
          shareOption: "1/10",
          unitTypes: ["1+1"],
          sizeRange: [80, 140],
          available: false,
          firstHand: true,
          category: ["Villa"],
          rating: 4.2,
        },
        {
          id: 6,
          title: "Izmir Mall",
          image: project6,
          price: 1.0,
          currency: "USD",
          shareOption: "1/25",
          unitTypes: ["1+1"],
          sizeRange: [100, 200],
          available: true,
          firstHand: false,
          category: ["Commercial"],
          rating: 3.9,
        },
      ];

    return (
        <section className={styles.sliderSection}>
            <h2 className={styles.heading}>Projects</h2>
            <Swiper
                className={styles.swiper}
                spaceBetween={48}
                slidesPerView={3}
                rewind={true}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {projects.map((project, i) => (
                    <SwiperSlide key={i}>
                        <ProjectCard {...project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
