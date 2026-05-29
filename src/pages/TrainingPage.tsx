import { useState } from "react";
import {
  Users,
  GraduationCap,
  Stethoscope,
  Briefcase,
  ClipboardList,
  Scale,
  CheckCircle2,
  Monitor,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const PROGRAMS = [
  {
    id: "participant",
    num: "01",
    icon: Users,
    title: "All About Clinical Research & ICH GCP",
    subtitle: "For the Potential Study Participant",
    audience: "Lay population — potential, current, or future study participants",
    description:
      "Designed for members of the general public who want to understand clinical research before, during, or after participating as a study subject. Demystifies the trial process and explains participant rights in plain, accessible language.",
    topics: [
      "What is clinical research?",
      "Types of clinical trials",
      "Your rights and responsibilities as a participant",
      "Informed consent explained",
      "How GCP protects you",
      "Questions to ask your research team",
    ],
  },
  {
    id: "part-a",
    num: "02",
    icon: GraduationCap,
    title: "All About Clinical Research (Part A) & ICH GCP",
    subtitle: "Career Path Training",
    audience: "College graduates, RNs, BSNs, PhDs, MDs entering clinical research",
    description:
      "The foundational module of a two-part career path series. Introduces aspiring professionals to the structure and principles of clinical trials, regulatory frameworks, and ICH GCP compliance — building the knowledge base for a career in the field.",
    topics: [
      "Introduction to clinical trial phases",
      "Roles in a clinical research team",
      "ICH GCP guidelines overview",
      "Regulatory bodies and their roles",
      "Essential documents in clinical research",
      "Ethics in human subjects research",
    ],
  },
  {
    id: "part-b",
    num: "03",
    icon: Stethoscope,
    title: "All About Clinical Research (Part B) & ICH GCP",
    subtitle: "Career Path Training",
    audience: "Professionals who have completed Part A or have foundational knowledge",
    description:
      "The advanced continuation of the career path series. Deepens knowledge of trial coordination, monitoring, data management, and advanced GCP application — preparing participants for active roles in clinical research operations.",
    topics: [
      "Advanced trial coordination techniques",
      "Site monitoring visit procedures",
      "Source data verification (SDV)",
      "Protocol deviation and amendment handling",
      "Safety reporting requirements",
      "Audit readiness and inspection preparation",
    ],
  },
  {
    id: "cra",
    num: "04",
    icon: Briefcase,
    title: "All About The Clinical Research Associate",
    subtitle: "Role-Focused Training",
    audience: "Aspiring and early-career Clinical Research Associates (CRAs)",
    description:
      "A comprehensive program dedicated entirely to the CRA role. Covers the full monitoring lifecycle — from site selection and qualification through ongoing monitoring visits to close-out — equipping participants with practical CRA competencies.",
    topics: [
      "CRA roles and responsibilities",
      "Site selection and qualification visits",
      "Site initiation visits (SIV)",
      "Routine monitoring visit procedures",
      "Source data verification and documentation",
      "Site close-out and essential documents archive",
    ],
  },
  {
    id: "pm",
    num: "05",
    icon: ClipboardList,
    title: "All About The Clinical Research Project Manager",
    subtitle: "Role-Focused Training",
    audience: "Professionals advancing into or currently in CR project management",
    description:
      "Designed for individuals stepping into or growing within project management in clinical research. Covers study planning, vendor oversight, budget management, risk mitigation, and cross-functional leadership in a GCP-regulated environment.",
    topics: [
      "Study planning and timeline development",
      "Budget development and management",
      "CRO and vendor selection and oversight",
      "Risk identification and mitigation planning",
      "Cross-functional team leadership",
      "Study progress reporting and metrics",
    ],
  },
  {
    id: "ethics",
    num: "06",
    icon: Scale,
    title: "All About Ethics in Clinical Research",
    subtitle: "Ethics & Compliance",
    audience: "All clinical research professionals — required for IRB compliance",
    description:
      "An essential program covering the ethical principles that underpin all human subjects research. From foundational documents like the Belmont Report to modern IRB processes — equipping every professional with the ethical framework to protect participants.",
    topics: [
      "Historical context: Nuremberg Code & Belmont Report",
      "Declaration of Helsinki principles",
      "IRB/IEC composition and review processes",
      "Informed consent — ethical requirements",
      "Protecting vulnerable populations",
      "Conflicts of interest in clinical research",
    ],
  },
];

const FORMATS = [
  {
    icon: Monitor,
    title: "Online / Virtual",
    description: "Self-paced or instructor-led virtual sessions accessible from anywhere — ideal for remote teams and individual learners.",
    badges: ["Self-paced", "Instructor-led", "Remote-friendly"],
  },
  {
    icon: MapPin,
    title: "Face-to-Face Classroom",
    description: "On-site or hosted classroom sessions with direct interaction — customized to your organization's schedule and location.",
    badges: ["On-site", "Customized schedule", "Interactive"],
  },
];

export function TrainingPage() {
  const [activeId, setActiveId] = useState("participant");
  const active = PROGRAMS.find((p) => p.id === activeId)!;

  return (
    <main className="min-h-screen bg-white pt-[72px]">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-[#0b2e29] to-[#062420] py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,176,155,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,155,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-brand-primary/10 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-secondary/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-primary text-xs font-semibold uppercase tracking-widest w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                Education & Training
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                Training{" "}
                <span className="text-brand-primary">Programs</span>
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-xl">
                Six comprehensive clinical research programs — available face-to-face and online — fully customizable to your organization's or site's specific needs.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15">
                  <Monitor className="w-4 h-4 text-brand-primary" />
                  <span className="text-white/70 text-xs font-medium">Online Available</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15">
                  <MapPin className="w-4 h-4 text-brand-primary" />
                  <span className="text-white/70 text-xs font-medium">In-Person Available</span>
                </div>
              </div>
          </div>

        </div>
      </section>

      {/* Delivery formats strip */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {FORMATS.map(({ icon: Icon, title, description, badges }) => (
              <div key={title} className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-brand-primary/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-gray-900">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {badges.map((b) => (
                      <span key={b} className="px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-semibold">{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Explorer */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-4">
              All Programs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              Explore Our Curriculum
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Tab list */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {PROGRAMS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={cn(
                    "flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-medium text-left whitespace-nowrap lg:whitespace-normal transition-all duration-200 flex-shrink-0 lg:flex-shrink border",
                    activeId === p.id
                      ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25 border-brand-primary"
                      : "bg-white text-gray-600 hover:bg-brand-primary/5 hover:text-brand-primary border-gray-200 hover:border-brand-primary/30 hover:shadow-sm"
                  )}
                >
                  <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0",
                    activeId === p.id ? "bg-white/20" : "bg-brand-primary/10"
                  )}>
                    <p.icon className={cn("w-3.5 h-3.5", activeId === p.id ? "text-white" : "text-brand-primary")} />
                  </div>
                  <span className="line-clamp-2 leading-snug text-xs">{p.title}</span>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Panel header */}
              <div className="bg-gradient-to-r from-brand-navy to-[#0b2e29] p-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center flex-shrink-0">
                    <active.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-brand-primary text-xs font-semibold uppercase tracking-widest mb-1">{active.subtitle} · Program {active.num}</p>
                    <h3 className="text-white text-xl font-bold leading-tight">{active.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-7 flex flex-col gap-6">
                {/* Audience pill */}
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-brand-primary/5 border border-brand-primary/15">
                  <Users className="w-4 h-4 text-brand-primary flex-shrink-0" />
                  <p className="text-brand-primary text-sm font-medium">{active.audience}</p>
                </div>

                <p className="text-gray-600 leading-relaxed">{active.description}</p>

                <div>
                  <p className="text-gray-800 font-semibold text-sm mb-4">Topics Covered:</p>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {active.topics.map((topic) => (
                      <div key={topic} className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 border border-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm leading-snug">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="primary" size="md" className="self-start gap-2">
                  Enroll in This Program <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Programs Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              All Six Programs at a Glance
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROGRAMS.map(({ icon: Icon, num, title, subtitle, description }) => (
              <div
                key={num}
                className="group flex flex-col gap-5 p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                    <Icon className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-200 font-black text-3xl leading-none select-none group-hover:text-brand-primary/20 transition-colors">{num}</span>
                </div>
                <div>
                  <p className="text-brand-primary text-xs font-semibold uppercase tracking-wide mb-1">{subtitle}</p>
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{description}</p>
                </div>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); setActiveId(PROGRAMS.find(p => p.title === title)?.id || "participant"); window.scrollTo({ top: 600, behavior: "smooth" }); }}
                  className="flex items-center gap-1.5 text-brand-primary text-sm font-semibold group-hover:gap-2.5 transition-all mt-auto"
                >
                  Explore Program <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Customized Training for Your Team
          </h2>
          <p className="text-white/75 text-base leading-relaxed max-w-xl">
            All programs can be tailored to your organization's specific goals, schedule, and delivery format. Contact us to discuss your training needs.
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary gap-2">
            Request Custom Training <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
