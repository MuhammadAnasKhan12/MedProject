import { FlaskConical, Microscope, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";

const HIGHLIGHTS = [
  { icon: FlaskConical, label: "Chemical Research" },
  { icon: Microscope, label: "Advanced Microscopy" },
  { icon: Award, label: "ISO Certified" },
];

export function WhatWeDoSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: teal card */}
          <div className="relative">
            <div className="bg-brand-primary rounded-3xl p-10 lg:p-12 flex flex-col gap-6">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                <FlaskConical className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                What We Do?
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Providing advanced medical diagnostic solutions and comprehensive clinical research services for better health outcomes.
              </p>
              <Button
                variant="outline"
                size="md"
                className="self-start border-white text-white hover:bg-white hover:text-brand-primary"
              >
                About Us
              </Button>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-brand-secondary/15 blur-2xl pointer-events-none" />
          </div>

          {/* Right: description + highlights */}
          <div className="flex flex-col gap-8">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              The Med.la is a full laboratory in Clinical Research — a centralized facility for conducting various types of diagnostic tests and studies in the field of medicine. By having a careful understanding of the patient's condition, clinicians are able to access standardized, high quality testing services and information that are critical for accurate diagnosis and effective treatment of diseases.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-gray-700 text-xs font-semibold leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
