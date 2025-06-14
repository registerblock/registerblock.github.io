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
        isHTML={true}
        text="RegisterBlock transforms real-world assets like real estate and commodities into digital tokens on the blockchain. <br/>
        <br/>
        <b>Asset Selection: </b><br/>
        We partner with trusted providers to source high-quality assets. <br/><br/>
        <b>Tokenization: </b><br/>
        Each asset is digitized and divided into secure, tradable tokens using blockchain technology <br/><br/>
        <b>Investment: </b><br/>
        Investors can buy fractions of these assets, gaining exposure and potential returns with lower entry barriers <br/><br/>
        <b>Trading & Management: </b> <br/>
        Tokens can be traded or managed easily on our platform, with full transparency and regulatory compliance<br/><br/>
        <br/>
        This model opens new opportunities for investors and asset owners, making investing more accessible, liquid, and secure."
        image={img1}
        background="#000000"
      />
      <InfoSection
        title="Legal & Security"
        subtitle="Legal compliance and security of tokenized assets"
        text="RegisterBlock operates under robust regulatory frameworks in Switzerland and Delaware, USA. All tokenizations are legally established and recorded in these jurisdictions, where our companies are incorporated. The tokenization of shares and real-world assets is conducted with oversight by legal notaries and is fully compliant with local securities laws and blockchain regulations. In Switzerland, asset tokens are treated as securities and must adhere to FINMA and Swiss Code of Obligations requirements, ensuring transparency, legal certainty, and investor protection. In Delaware, USA, blockchain-based share issuance and record-keeping are recognized by law, providing additional legal clarity and security for our investors. This dual-jurisdiction approach guarantees that every tokenized asset on RegisterBlock is secure, compliant, and verifiable."
        image={img1}
        reverse
        background="#111111"
      />
    </main>
  )
}