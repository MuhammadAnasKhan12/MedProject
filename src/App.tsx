import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { Footer } from "@/components/Footer";
import "./index.css";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClinicalTrialsSection } from "@/components/ClinicalTrialsSection";
import { CoreServicesSection } from "@/components/CoreServicesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { PricingSection } from "@/components/PricingSection";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <ProgramsSection />
      <ServicesSection />
      <ClinicalTrialsSection />
      <CoreServicesSection />
      <ExperienceSection />
      <AppointmentSection />
      <PricingSection />
      <Footer />
    </main>
  );
}

export default App;

      