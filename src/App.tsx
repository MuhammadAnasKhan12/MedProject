import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { Footer } from "@/components/Footer";
import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />

      <Footer />
    </main>
  );
}

export default App;
// import { ProgramsSection } from "@/components/ProgramsSection";
// import { ServicesSection } from "@/components/ServicesSection";
// import { ClinicalTrialsSection } from "@/components/ClinicalTrialsSection";
// import { CoreServicesSection } from "@/components/CoreServicesSection";
// import { ExperienceSection } from "@/components/ExperienceSection";
// import { AppointmentSection } from "@/components/AppointmentSection";
// import { PricingSection } from "@/components/PricingSection";

      {/* <ProgramsSection />
      <ServicesSection />
      <ClinicalTrialsSection />
      <CoreServicesSection />
      <ExperienceSection />
      <AppointmentSection />
      <PricingSection /> */}