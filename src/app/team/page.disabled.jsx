"use client";

import { useRouter } from "next/navigation";
import NewInfoSection from "../../components/NewInfoSection/NewInfoSection";
import user1 from "../../images/1-user.png";
import user1Brand1 from "../../images/1-brand-1.png";
import user1Brand2 from "../../images/1-brand-2.png";
import user1Brand3 from "../../images/1-brand-3.png";
import user1Brand4 from "../../images/1-brand-4.png";
import user2 from "../../images/2-user.png";
import user2Brand1 from "../../images/2-brand-1.png";
import user2Brand2 from "../../images/2-brand-2.png";
import user2Brand3 from "../../images/2-brand-3.png";
import user2Brand4 from "../../images/2-brand-4.png";
import user3 from "../../images/3-user.png";
import user3Brand1 from "../../images/3-brand-1.png";
import user3Brand2 from "../../images/3-brand-2.png";
import user3Brand3 from "../../images/3-brand-3.png";
import user3Brand4 from "../../images/3-brand-4.png";
import user4 from "../../images/4-user.jpg";
import user4Brand1 from "../../images/4-brand-1.png";
import user4Brand2 from "../../images/4-brand-2.png";
import user4Brand3 from "../../images/4-brand-3.png";
import user4Brand4 from "../../images/4-brand-4.png";

export default function Team() {
  const router = useRouter();

  return (
    <main className="bg-[#1E1E1E] text-white">
      <NewInfoSection
        name="Ünsal Koç"
        title="Managing Partner Product"
        image={user1}
        linkedin="https://www.linkedin.com/in/unsalkoc/"
        description={`Ünsal Koç is a seasoned professional with over 15 years of experience in digital marketing and financial technologies.<br/><br/>
        He has held various roles in retail marketing and CRM at Deloitte, Garanti BBVA, Türkiye Finans Participation Bank, and Netherlands-based bunq.<br/><br/>
        Having completed his master's degree in Digital Marketing at the University of Amsterdam, Koç was appointed as the General Manager positions of Blockchain initiatives in Netherlands as of January 2024.<br/><br/>
        Throughout his career, he has specialized in blending traditional and digital marketing strategies with a focus on <b>#CRM</b>, <b>#Fintech</b>, <b>#Blockchain</b>, <b>#DigitalTransformation</b>, and <b>#LoyaltyPrograms</b>.`}
        logos={[
          user1Brand1,
          user1Brand2, user1Brand3, user1Brand4
        ]}
      />
      <div className="separator" />

      <NewInfoSection
        name="Serdar Özerman"
        title="Managing Partner Marketing & Sales"
        image={user2}
        linkedin="https://www.linkedin.com/in/serdarozerman/"
        description={`Marketing & Digital background with 19+ years of experience in Telecom, Entrepreneurship, Finance and Crypto both with conventional and new generation marketing.<br/><br/>
Considering today's digital and mobile transformation, I've tried to set my career on a conjunction where conventional and digital marketing meets with <b>#MobileMarketing</b>, <b>#Brand</b>, <b>#Loyalty</b>, <b>#DigitalMarketing</b>, <b>#SocialMedia</b>, <b>#GrowthManagement</b>.`}
        logos={[user2Brand1, user2Brand2, user2Brand3, user2Brand4]}

      />
      <div className="separator" />

      <NewInfoSection
        name="Aybars Badur"
        title="Managing Partner Engineering"
        image={user3}
        linkedin="https://www.linkedin.com/in/aybarsb/"
        description={`Aybars Badur is a seasoned software engineer and systems architect with over 25 years of experience in backend development, cloud infrastructure, and distributed systems.<br/><br/>
He has held key roles at Adidas, MediaMonks, and Adphorus, blending technical leadership with hands-on coding.<br/><br/>
Aybars is passionate about continuous deployment, automation, and pragmatic engineering. His expertise spans <b>#Python</b>, <b>#AWS</b>, <b>#DevOps</b>, <b>#SystemArchitecture</b>, and <b>#OpenSource</b>.`}
        logos={[user3Brand1, user3Brand2, user3Brand3, user3Brand4]}
      />
      <div className="separator" />
      <NewInfoSection
        name="Serdar Taş"
        title="Managing Partner Technology"
        image={user4}
        linkedin="https://www.linkedin.com/in/serdart/"
        description={`Engineering & Technology Leadership background with 20+ years of experience across Aviation, Logistics, Retail, and Enterprise Software, combining traditional IT management with modern software engineering practices.<br/><br/>
In today’s agile and cloud-driven transformation, I’ve built my career at the intersection of engineering excellence and business value — focusing on <b>#EngineeringLeadership</b>, <b>#Agile</b>, <b>#Cloud</b>, <b>#DevOps</b>, <b>#DataDrivenStrategy</b>, and <b>#ScalableSystems</b>.`}
        logos={[user4Brand1, user4Brand2, user4Brand3, user4Brand4]}
      />

    </main>
  );
}
