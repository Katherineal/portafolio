"use client";
import ResponsiveMenu from "@/components/menu";
import Hero from "@/components/hero";
import About from "@/components/about";
import { ExperienceEducation } from "@/components/experience-education";
import { Proyects } from "@/components/proyects";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center">
      <ResponsiveMenu />
      
      <Hero />
      <About/>
      <ExperienceEducation/>
      <Proyects/>
      <ContactSection/>

      <Footer/>
    </div>
  );
}

