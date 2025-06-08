"use client";

import { useParams,useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./ProjectDetail.module.scss";
import toast from "react-hot-toast";

import { useState } from "react";
import DeveloperInfoAccordion from "../../../components/DeveloperInfoAccordion/DeveloperInfoAccordion";
import project1 from "../../../images/projects-project-1.png";
import project2 from "../../../images/projects-project-2.png";
import project3 from "../../../images/projects-project-3.png";
import project4 from "../../../images/projects-project-4.png";
import project5 from "../../../images/projects-project-5.png";
import project6 from "../../../images/projects-project-6.png";
import ReviewSlider from "../../../components/ReviewSlider/ReviewSlider";
import NewsletterForm from "../../../components/NewsletterForm/NewsletterForm";


const projects = [
  {
    id: 1,
    title: "Bodrum Villas",
    image: project1,
    price: 2.5,
    currency: "USD",
    shareOption: "1/10",
    shareOptions: ["10%", "20%", "30%"],
    unitTypes: [
      { type: "2+1", price: 1.0 },
      { type: "3+1", price: 1.2 },
      { type: "4+1", price: 1.5 },
      { type: "4+2", price: 1.8 },
    ],
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
    shareOptions: ["10%", "20%", "30%"],
    unitTypes: [
      { type: "1+1", price: 0.5 },
      { type: "2+1", price: 0.7 },
      { type: "3+1", price: 0.9 },
      { type: "4+1", price: 1.2 },
    ],
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
    shareOptions: ["5%", "10%", "20%"],
    unitTypes: [
      { type: "50m2", price: 0.8 },
      { type: "75m2", price: 1.0 },
      { type: "100m2", price: 1.2 },
      { type: "150m2", price: 1.5 },
    ],
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
    shareOptions: ["10%", "25%", "50%"],
    unitTypes: [
      { type: "1+1", price: 1.0 },
    ],
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
    shareOptions: ["10%", "30%"],
    unitTypes: [
      { type: "1+1", price: 0.8 },
    ],
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
    shareOptions: ["4%", "10%", "20%"],
    unitTypes: [
      { type: "1+1", price: 0.9 },
    ],
    sizeRange: [100, 200],
    available: true,
    firstHand: false,
    category: ["Commercial"],
    rating: 3.9,
  },
];



export default function ProjectDetail() {
    const { id } = useParams();
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [selectedShare, setSelectedShare] = useState(null);
    const router = useRouter();
    const [openUnit, setOpenUnit] = useState(false);
    const [openShare, setOpenShare] = useState(false);

    const project = projects.find(p => p.id === Number(id));

    if (!project) return <div>Project not found.</div>;

    const handleUnitSelect = (unit) => {
      setSelectedUnit(unit);
      setOpenUnit(false);
    };

    const handleShareSelect = (share) => {
      setSelectedShare(share);
      setOpenShare(false);
    };
    function formatPrice(priceInMillion) {
      const realPrice = priceInMillion * 1000000;
      return new Intl.NumberFormat('en-US', {
        style: 'decimal', // sadece sayı formatı
        maximumFractionDigits: 0, // küsürat yok
      }).format(realPrice);
    }
    
    

  
    return (
        <div>
          <div className={styles.detailPage}>
            <div className={styles.imageArea}>
                <div className={styles.favoriteButton}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3671 3.84319C16.9415 3.41736 16.4361 3.07956 15.8799 2.84909C15.3237 2.61862 14.7275 2.5 14.1254 2.5C13.5234 2.5 12.9272 2.61862 12.371 2.84909C11.8147 3.07956 11.3094 3.41736 10.8838 3.84319L10.0004 4.72652L9.11709 3.84319C8.25735 2.98344 7.09129 2.50045 5.87543 2.50045C4.65956 2.50045 3.4935 2.98344 2.63376 3.84319C1.77401 4.70293 1.29102 5.86899 1.29102 7.08485C1.29102 8.30071 1.77401 9.46678 2.63376 10.3265L10.0004 17.6932L17.3671 10.3265C17.7929 9.90089 18.1307 9.39553 18.3612 8.83932C18.5917 8.2831 18.7103 7.68693 18.7103 7.08485C18.7103 6.48278 18.5917 5.88661 18.3612 5.33039C18.1307 4.77418 17.7929 4.26882 17.3671 3.84319Z" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.mainImage}
                />
            </div>

            <div className={styles.infoArea}>
                <h1 className={styles.title}>{project.title}</h1>
                <div className={styles.saleBadge}>Sale</div>
                <h2 className={styles.price}>
                  <span>$</span>
                  {formatPrice(project.price)}
                </h2>
                <p className={styles.location}>{project.location}</p>

                <div className={styles.selectGroups}>
                <div className={styles.selectGroup}>
        <h4>Unit Type</h4>
        <div className={styles.dropdown} onClick={() => setOpenUnit(!openUnit)}>
          <div className={styles.dropdownHeader}>
            {selectedUnit ? `${selectedUnit.type} - $${selectedUnit.price} Mio` : "Select unit type"}
            <span className={styles.arrow}>{openUnit ? <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12.5L10 7.5L5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}</span>
          </div>
          {openUnit && (
            <div className={styles.dropdownList}>
              {project.unitTypes.map((unit, idx) => (
                <div
                  key={idx}
                  className={styles.dropdownItem}
                  onClick={() => handleUnitSelect(unit)}
                >
                  {unit.type} - ${unit.price} Mio
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Share */}
      <div className={styles.selectGroup}>
        <h4>Share</h4>
        <div className={styles.dropdown} onClick={() => setOpenShare(!openShare)}>
          <div className={styles.dropdownHeader}>
            {selectedShare || "Select share"}
            <span className={styles.arrow}>{openShare ? <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12.5L10 7.5L5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}</span>
          </div>
          {openShare && (
            <div className={styles.dropdownList}>
              {project.shareOptions.map((share, idx) => (
                <div
                  key={idx}
                  className={styles.dropdownItem}
                  onClick={() => handleShareSelect(share)}
                >
                  {share}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
                </div>


                <button
                  className={styles.buyButton}
                  onClick={() => {
                    if (!selectedUnit || !selectedShare) {
                      toast.error("Please select a unit type and share option before proceeding.");
                      return;
                    }
                    router.push(
                      `/cart?title=${encodeURIComponent(project.title)}&unitType=${selectedUnit.type}&unitPrice=${selectedUnit.price}&share=${selectedShare}&price=${project.price}`
                    );
                  }}
                >
                  Buy
                </button>



                <DeveloperInfoAccordion
  items={[
    { title: "Akfen Gayrimenkul", description: "230 units built. Delivery in 2026." },
    { title: "Location Info", description: "Located in Kadikoy, Istanbul." },
    { title: "Payment Plan", description: "Pay 50% now, 50% on delivery." },
    { title: "Building Materials", description: "High-end finishes and eco materials." },
    { title: "Developer Warranty", description: "2-year warranty for all units." },
  ]}
/>

            </div>
          </div>
          <ReviewSlider/>
          <NewsletterForm/>
        </div>
    );
}
