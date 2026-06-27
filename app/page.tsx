import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import WhatYoullMaster from "@/components/sections/WhatYoullMaster";
import CareerSupport from "@/components/sections/CareerSupport";
import FacultySection from "@/components/sections/FacultySection";

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
      </main>
    </>
  );
}