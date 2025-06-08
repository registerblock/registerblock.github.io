import InfoSection from "../components/InfoSection/InfoSection";
import Hero from "../components/Hero/Hero"
import ProjectsSlider from "../components/Projects/ProjectsSlider"

import img1 from "../images/how-it-works.png";
export default function Home() {
  return (
    <main className="bg-[#1E1E1E] text-white min-h-screen">
      <Hero/>
      <ProjectsSlider/>
      <InfoSection
        title="How it works?"
        subtitle="Business model of Brickchain"
        text="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
        image={img1}
        background="#000000"
      />
      <InfoSection
        title="Legal & Security"
        subtitle="Business model of Brickchain"
        text="Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
        image={img1}
        reverse
        background="#111111"
      />
    </main>
  )
}