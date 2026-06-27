import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import WhatYoullMaster from "@/components/sections/WhatYoullMaster";
import CareerSupport from "@/components/sections/CareerSupport";
import FacultySection from "@/components/sections/FacultySection";
import PricingSection from "@/components/sections/PricingSection";
import MoneyBackGuarantee from "@/components/sections/MoneyBackGuarantee";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero/>
        <WhyChooseSection/>
        <WhatYoullMaster/>
        <CareerSupport/>
        <FacultySection/>
        <PricingSection/>
        <MoneyBackGuarantee/>
        <FAQSection/>
        <FinalCTA/>
        <Footer/>
      </main>
    </>
  );
}