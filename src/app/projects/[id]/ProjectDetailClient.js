"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import DeveloperInfoAccordion from "../../../components/DeveloperInfoAccordion/DeveloperInfoAccordion";
import ReviewSlider from "../../../components/ReviewSlider/ReviewSlider";
import NewsletterForm from "../../../components/NewsletterForm/NewsletterForm";
import styles from "./ProjectDetail.module.scss";

export default function ProjectDetailClient({ project }) {
  const router = useRouter();
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedShare, setSelectedShare] = useState(null);
  const [openUnit, setOpenUnit] = useState(false);
  const [openShare, setOpenShare] = useState(false);

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
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(realPrice);
  }

  return (
    <div>
      <div className={styles.detailPage}>
        <div className={styles.imageArea}>
          <div className={styles.favoriteButton}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3671 3.84319C16.9415 3.41736 16.4361 3.07956 15.8799 2.84909C15.3237 2.61862 14.7275 2.5 14.1254 2.5C13.5234 2.5 12.9272 2.61862 12.371 2.84909C11.8147 3.07956 11.3094 3.41736 10.8838 3.84319L10.0004 4.72652L9.11709 3.84319C8.25735 2.98344 7.09129 2.50045 5.87543 2.50045C4.65956 2.50045 3.4935 2.98344 2.63376 3.84319C1.77401 4.70293 1.29102 5.86899 1.29102 7.08485C1.29102 8.30071 1.77401 9.46678 2.63376 10.3265L10.0004 17.6932L17.3671 10.3265C17.7929 9.90089 18.1307 9.39553 18.3612 8.83932C18.5917 8.2831 18.7103 7.68693 18.7103 7.08485C18.7103 6.48278 18.5917 5.88661 18.3612 5.33039C18.1307 4.77418 17.7929 4.26882 17.3671 3.84319Z" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <Image src={project.image} alt={project.title} width={600} height={400} className={styles.mainImage} />
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
                  <span className={styles.arrow}>{openUnit ? (
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12.5L10 7.5L5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}</span>
                </div>
                {openUnit && (
                  <div className={styles.dropdownList}>
                    {project.unitTypes.map((unit, idx) => (
                      <div key={idx} className={styles.dropdownItem} onClick={() => handleUnitSelect(unit)}>
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
                  <span className={styles.arrow}>{openShare ? (
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12.5L10 7.5L5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}</span>
                </div>
                {openShare && (
                  <div className={styles.dropdownList}>
                    {project.shareOptions.map((share, idx) => (
                      <div key={idx} className={styles.dropdownItem} onClick={() => handleShareSelect(share)}>
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
              router.push(`/cart?title=${encodeURIComponent(project.title)}&unitType=${selectedUnit.type}&unitPrice=${selectedUnit.price}&share=${selectedShare}&price=${project.price}`);
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
      <ReviewSlider />
      <NewsletterForm />
    </div>
  );
}
