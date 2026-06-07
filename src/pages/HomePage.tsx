import { HeroSection } from "@/components/HeroSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClinicalTrialsSection } from "@/components/ClinicalTrialsSection";
import { CoreServicesSection } from "@/components/CoreServicesSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { PricingSection } from "@/components/PricingSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <ClinicalTrialsSection />
      <ProgramsSection />
      <CoreServicesSection />
      <AppointmentSection />
      <PricingSection />
    </>
  );
}
