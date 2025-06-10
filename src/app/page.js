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
        text="Each property is tokenized as a collection of NFTs that represent fractional ownership. Investors purchase the fractions they want and receive rental payouts proportionally. Tokens can be traded freely on our marketplace, letting you build a diversified portfolio of real estate shares."
        image={img1}
        background="#000000"
      />
      <InfoSection
        title="Legal & Security"
        subtitle="Business model of Brickchain"
        text="All properties are backed by legal deeds held with licensed partners. Ownership records are stored on-chain and every transaction is executed by audited smart contracts, ensuring complete transparency and security for your investments."
        image={img1}
        reverse
        background="#111111"
      />
    </main>
  )
}