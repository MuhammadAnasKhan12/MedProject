import { ArrowRight, Activity, ShieldCheck, BookOpen, Building2 } from "lucide-react";

const PROGRAMS = [
  {
    icon: Activity,
    title: "Clinical Trials & Device Monitoring",
    description:
      "Comprehensive clinical trials management and device monitoring services for medical research sites, pharmaceutical companies, and government agencies — ensuring protocol compliance and data integrity throughout the trial lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance Audits",
    description:
      "Thorough QA audits designed to evaluate clinical research processes, identify gaps, and ensure your operations align with ICH GCP guidelines, regulatory standards, and sponsor requirements.",
  },
  {
    icon: BookOpen,
    title: "Clinical Research Training",
    description:
      "Face-to-face classroom and online clinical research training programs customized to fit your company's or site's needs — from GCP fundamentals to advanced career path curricula for RNs, BSNs, PhDs, and MDs.",
  },
  {
    icon: Building2,
    title: "Research Site Set-Up Services",
    description:
      "End-to-end clinical research site set-up support, helping medical practices build the infrastructure, staffing, and regulatory framework needed to successfully initiate and conduct clinical trials.",
  },
];

export function ProgramsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-widest">
            What We Offer
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-12 lg:mb-16">
          Our Core Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROGRAMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col gap-5 p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <Icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
              <a
                href="#"
                className="flex items-center gap-1.5 text-brand-primary text-sm font-semibold hover:gap-3 transition-all mt-auto"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
