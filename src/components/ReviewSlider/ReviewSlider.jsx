"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./ReviewSlider.module.scss";
import Image from "next/image";

const reviews = [
    {
        id: 1,
        title: "Passive income, active joy",
        description: "I love a good ROI! And, no! That doesn't stand for what you think.",
        author: "Eva Lovia",
        date: "April 2025",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
    },
    {
        id: 2,
        title: "What a deal",
        description: "Finally a property I can get behind without a casting call!",
        author: "Jenna Jameson",
        date: "May 2025",
        avatar: "https://i.pravatar.cc/300",
        rating: 5,
    },
    {
        id: 3,
        title: "I can't stop",
        description: "I put money in this instead of my ex business!",
        author: "Mia Khalifa",
        date: "April 2025",
        avatar: "https://i.pravatar.cc/300",
        rating: 4,
    },
];

export default function ReviewsSlider() {
    return (
        <div className={styles.reviewsSection}>
            <h2 className={styles.title}>Latest reviews</h2>
            <Swiper
                spaceBetween={48}
                slidesPerView={3}
                rewind={true}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
                className={styles.swiper}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id} className={styles.card}>
                        <div className={styles.stars}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star}>{star <= review.rating ? "★" : "☆"}</span>
                            ))}
                        </div>
                        <h3 className={styles.reviewTitle}>{review.title}</h3>
                        <p className={styles.description}>{review.description}</p>
                        <div className={styles.authorInfo}>
                        <img src={review.avatar} alt={review.author} width={32} height={32} className={styles.avatar} />

                            <div>
                                <div className={styles.author}>{review.author}</div>
                                <div className={styles.date}>{review.date}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
