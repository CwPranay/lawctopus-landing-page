import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChooseSection from "@/components/sections/WhyChooseSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero/>
        <WhyChooseSection/>
      </main>
    </>
  );
}