import { HeroSection } from "@/components/HeroSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClinicalTrialsSection } from "@/components/ClinicalTrialsSection";
import { AppointmentSection } from "@/components/AppointmentSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <ClinicalTrialsSection />
      <ProgramsSection />
      <AppointmentSection />
    </>
  );
}
