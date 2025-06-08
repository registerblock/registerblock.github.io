"use client";
import { useState } from "react";
import styles from "./Projects.module.scss";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import project1 from "../../images/projects-project-1.png";
import project2 from "../../images/projects-project-2.png";
import project3 from "../../images/projects-project-3.png";
import project4 from "../../images/projects-project-4.png";
import project5 from "../../images/projects-project-5.png";
import project6 from "../../images/projects-project-6.png";

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

export default function Projects() {
  const [search, setSearch] = useState("");
  const [activeButton, setActiveButton] = useState('');
  const [filters, setFilters] = useState({
    sharePrice: [0, 3],     
    unitPrice: [0, 3000],    
    size: [0, 500],         
    available: false,
    firstHand: false,
    unitTypes: [],       
  });

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  
  const handleFilterChange = (changes) => {
    setFilters((prev) => ({ ...prev, ...changes }));
  }

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());
  
    const matchesKeywords = !filters.keywords || filters.keywords.length === 0 || filters.keywords.some(keyword => 
      project.title.toLowerCase().includes(keyword.toLowerCase())
    );
  
    const projectPriceNumber = Number(project.price.toString().replace(/[^0-9.,]/g, "").replace(",", "."));
  
    const matchesSharePrice = !filters.sharePrice || 
      (projectPriceNumber >= filters.sharePrice[0] && projectPriceNumber <= filters.sharePrice[1]);
  
    const activeUnitTypes = !filters.unitTypes ? [] : filters.unitTypes
      .filter(unit => unit.checked)
      .map(unit => unit.type);
  
    const matchesUnitTypes = activeUnitTypes.length === 0 || 
      project.unitTypes.some(type => activeUnitTypes.includes(type));
  
    return matchesSearch && matchesKeywords && matchesSharePrice && matchesUnitTypes;
  });
  

  if (activeButton === "Price ascending") {
    filteredProjects.sort((a, b) => a.price - b.price);
  } else if (activeButton === "Price descending") {
    filteredProjects.sort((a, b) => b.price - a.price);
  } else if (activeButton === "Rating") {
    filteredProjects.sort((a, b) => b.rating - a.rating);
  } else if (activeButton === "New") {
    filteredProjects.sort((a, b) => b.id - a.id); 
  }

  return (
    <main className={styles.projectsPage}>
      <aside className={styles.sidebar}>
        <FilterSidebar onChange={handleFilterChange} />
      </aside>

      <section className={styles.content}>
        <div className={styles.topBar}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
          <div className={styles.sortButtons}>
            {["New", "Price ascending", "Price descending", "Rating"].map((button) => (
              <button
                key={button}
                className={`${styles.button} ${activeButton === button ? styles.active : ''}`}
                onClick={() => handleButtonClick(button)}
              >
                {activeButton === button && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <span>{button}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
