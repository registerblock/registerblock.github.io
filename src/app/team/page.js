"use client";

import { useRouter } from "next/navigation";
import InfoSection from "../../components/InfoSection/InfoSection";
import img1 from "../../images/how-it-works.png";

export default function Team() {
  const router = useRouter();

  return (
    <main className="bg-[#1E1E1E] text-white">
      <InfoSection
        title="Ünsal Koç"
        subtitle="Managing Partner, Product"
        isHTML={true}
        text="Ünsal Koç is a seasoned professional with over 15 years of experience in digital marketing and financial technologies. <br/><br/>
He has held various roles in retail marketing and CRM at Deloitte, Garanti BBVA, Türkiye Finans Participation Bank, and Netherlands-based bunq.<br/><br/>
Having completed his master's degree in Digital Marketing at the University of Amsterdam, Koç was appointed as the General Manager positions of Blockchain initiatives in Netherlands as of January 2024.<br/><br/>
Throughout his career, he has specialized in blending traditional and digital marketing strategies with a focus on #CRM, #Fintech, #Blockchain, #DigitalTransformation, and #LoyaltyPrograms."
        image={img1}
        background="#000000"
      />
      <InfoSection
        title="Serdar Özerman"
        subtitle="Managing Partner, Marketing & Sales"
        isHTML={true}
        text="Marketing & Digital background with 19+ years of experience in Telecom, Entrepreneurship, Finance and Crypto both with conventional and new generation marketing. <br/><br/>
Considering the today's digital and mobile transformation, I've tried to set my career on a conjunction where conventional and digital marketing meets with #Mobile Marketing, #Brand, #Loyalty, #DigitalMarketing, #SocialMedia, #Growth management"
        image={img1}
        reverse
        background="#111111"
      />
      <InfoSection
        title="Serdar Taş"
        subtitle="Managing Partner, Technology"
        isHTML={true}
        text="Engineering & Technology Leadership background with 20+ years of experience across Aviation, Logistics, Retail, and Enterprise Software, combining traditional IT management with modern software engineering practices. <br/><br/>
In today's agile and cloud-driven transformation, I've built my career at the intersection of engineering excellence and business value — focusing on #EngineeringLeadership, #Agile, #Cloud, #DevOps, #DataDrivenStrategy, and #ScalableSystems."
        image={img1}
        background="#000000"
      />
      <InfoSection
        title="Aybars Badur"
        subtitle="Managing Partner, Engineering"
        text="Aybars Badur is a seasoned software engineer and systems architect with over 25 years of experience in backend development, cloud infrastructure, and distributed systems. He has held key roles at Adidas, MediaMonks, and Adphorus, blending technical leadership with hands-on coding. Aybars is passionate about continuous deployment, automation, and pragmatic engineering. His expertise spans #Python, #AWS, #DevOps, #SystemArchitecture, and #OpenSource."
        image={img1}
        reverse
        background="#111111"
      />
    </main>
  );
}
