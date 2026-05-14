import { useState } from "react";
import { ArrowRight, Droplets, TestTube, Activity, Beaker } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "cbc",
    label: "Complete Blood Count",
    icon: Droplets,
    description:
      "A test that measures the levels of red blood cells, white blood cells and platelets in the blood. It is used to diagnose a wide range of medical conditions and monitor overall health.",
    details: ["Measures RBC, WBC, Platelets", "Detects anemia & infection", "Results within 24 hours", "No fasting required"],
  },
  {
    id: "urinalysis",
    label: "Urinalysis",
    icon: TestTube,
    description:
      "A urinalysis is used to detect and manage a wide range of disorders, including urinary tract infections, kidney disease, and diabetes. It analyzes the physical, chemical and microscopic aspects of urine.",
    details: ["Kidney function analysis", "Detects UTIs early", "Quick & non-invasive", "Same-day results"],
  },
  {
    id: "lipid",
    label: "Lipid Profile",
    icon: Activity,
    description:
      "A lipid panel measures cholesterol levels including LDL, HDL, total cholesterol and triglycerides, helping assess cardiovascular disease risk and guide treatment decisions.",
    details: ["LDL & HDL cholesterol", "Triglyceride levels", "Cardiovascular risk assessment", "Fasting required"],
  },
  {
    id: "glucose",
    label: "Glucose Tolerance Test",
    icon: Beaker,
    description:
      "The glucose tolerance test measures how well your body metabolizes glucose. It is used to diagnose diabetes and pre-diabetes and is especially recommended during pregnancy.",
    details: ["Diagnoses Type 1 & 2 diabetes", "Pre-diabetes screening", "Gestational diabetes check", "Multi-hour test"],
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState("cbc");
  const active = SERVICES.find((s) => s.id === activeId)!;

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Our Popular Laboratory
            <br />
            Test Services.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Tab list */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
            {SERVICES.map((s) => (
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
                {s.label}
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
                View More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
