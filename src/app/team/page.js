"use client";

import { useRouter } from "next/navigation";
import InfoSection from "../../components/InfoSection/InfoSection";
import img1 from "../../images/how-it-works.png";

export default function Team() {
  const router = useRouter();

  return (
    <main className="bg-[#1E1E1E] text-white">
      <InfoSection
        title="Unsal Baskan"
        subtitle="Chief Executive Officer"
        text="Body text for background of the person. I put in some lorem ipsum to show how a filled-out page might look:
        
Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
        image={img1}
        background="#000000"
      />
      <InfoSection
        title="Cakma Serdar"
        subtitle="Chief Operating Officer"
        text="Body text for background of the person. I put in some lorem ipsum to show how a filled-out page might look:

Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
        image={img1}
        reverse
        background="#111111"
      />
      <InfoSection
        title="Serdar Tas"
        subtitle="Chief Technology Officer"
        text="Body text for background of the person. I put in some lorem ipsum to show how a filled-out page might look:
        
Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
        image={img1}
        background="#000000"
      />
      <InfoSection
        title="Aybars Baskan"
        subtitle="Chief Digital Officer"
        text="Body text for background of the person. I put in some lorem ipsum to show how a filled-out page might look:
        
Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
        image={img1}
        reverse
        background="#111111"
      />
    </main>
  );
}
