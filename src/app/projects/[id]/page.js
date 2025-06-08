import ProjectDetailClient from "./ProjectDetailClient";
import project1 from "../../../images/projects-project-1.png";
import project2 from "../../../images/projects-project-2.png";
import project3 from "../../../images/projects-project-3.png";
import project4 from "../../../images/projects-project-4.png";
import project5 from "../../../images/projects-project-5.png";
import project6 from "../../../images/projects-project-6.png";

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

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id.toString() }));
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.id === Number(params.id));
  if (!project) {
    return <div>Project not found.</div>;
  }
  return <ProjectDetailClient project={project} />;
}
