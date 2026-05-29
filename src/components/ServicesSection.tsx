import { useState } from "react";
import { ArrowRight, Users, GraduationCap, Stethoscope, Briefcase, ClipboardList, Scale } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const TRAINING_PROGRAMS = [
  {
    id: "participant",
    label: "Clinical Research & ICH GCP — Study Participant",
    icon: Users,
    description:
      "Designed for lay populations including potential, future, or current study participants. This program demystifies the clinical research process and covers ICH GCP guidelines in an accessible, easy-to-understand format.",
    details: [
      "What is clinical research?",
      "Your rights as a study participant",
      "ICH GCP fundamentals",
      "Informed consent process",
    ],
  },
  {
    id: "part-a",
    label: "All About Clinical Research (Part A) & ICH GCP",
    icon: GraduationCap,
    description:
      "The first in a two-part career path series. Part A introduces aspiring clinical research professionals — including college graduates, RNs, BSNs, and MDs — to the foundational principles of clinical research and ICH GCP compliance.",
    details: [
      "Introduction to clinical trials",
      "Regulatory framework overview",
      "ICH GCP career path curriculum",
      "Ideal for RNs, BSNs, MDs, PhDs",
    ],
  },
  {
    id: "part-b",
    label: "All About Clinical Research (Part B) & ICH GCP",
    icon: Stethoscope,
    description:
      "The advanced continuation of the career path series. Part B builds on Part A knowledge with deeper exploration of trial coordination, monitoring roles, and advanced GCP application for experienced and aspiring professionals.",
    details: [
      "Advanced trial coordination",
      "Monitoring and compliance",
      "Protocol deviation management",
      "Builds on Part A knowledge",
    ],
  },
  {
    id: "cra",
    label: "All About The Clinical Research Associate",
    icon: Briefcase,
    description:
      "A comprehensive program dedicated to the CRA role. Covers site selection, site qualification, site monitoring visits, and close-out procedures — equipping participants with the practical skills needed to excel as a Clinical Research Associate.",
    details: [
      "Site selection & qualification",
      "Monitoring visit procedures",
      "Source data verification (SDV)",
      "Site close-out processes",
    ],
  },
  {
    id: "pm",
    label: "All About The Clinical Research Project Manager",
    icon: ClipboardList,
    description:
      "Targeted at professionals looking to step into or advance in project management within clinical research. Covers study planning, vendor oversight, timeline management, and cross-functional team leadership in a regulated environment.",
    details: [
      "Study planning & budgeting",
      "Vendor and CRO oversight",
      "Risk management strategies",
      "Team leadership in trials",
    ],
  },
  {
    id: "ethics",
    label: "All About Ethics in Clinical Research",
    icon: Scale,
    description:
      "An essential program covering the ethical principles that underpin clinical research — from the Belmont Report and Declaration of Helsinki to modern IRB/IEC processes and the protection of human subjects in clinical trials.",
    details: [
      "Belmont Report & Declaration of Helsinki",
      "IRB/IEC review processes",
      "Informed consent ethics",
      "Protection of vulnerable populations",
    ],
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState("participant");
  const active = TRAINING_PROGRAMS.find((s) => s.id === activeId)!;

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Training Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Clinical Research
            <br />
            Training Programs
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Tab list */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
            {TRAINING_PROGRAMS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={cn(
                  "flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-medium text-left whitespace-nowrap lg:whitespace-normal transition-all duration-200 flex-shrink-0 lg:flex-shrink",
                  activeId === s.id
                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25"
                    : "bg-white text-gray-600 hover:bg-brand-primary/5 hover:text-brand-primary border border-gray-100"
                )}
              >
                <s.icon className="w-4 h-4 flex-shrink-0" />
                <span className="line-clamp-2 leading-snug">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Active content */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                <active.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{active.label}</h3>
              <p className="text-gray-500 leading-relaxed">{active.description}</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {active.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-primary" fill="none" viewBox="0 0 12 12">
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {detail}
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="md" className="self-start gap-2 mt-2">
                Enroll Now <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
