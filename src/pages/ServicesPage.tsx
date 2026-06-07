import { Activity, ShieldCheck, BookOpen, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    icon: Activity,
    num: "01",
    title: "Clinical Trials & Device Monitoring Services",
    tagline: "End-to-end trial oversight",
    description:
      "Comprehensive clinical trials management and device monitoring for medical research sites, pharmaceutical companies, and government agencies. We ensure protocol compliance, data integrity, and regulatory adherence throughout the entire trial lifecycle.",
    features: [
      "Study start-up and site initiation support",
      "Ongoing site monitoring and oversight",
      "Protocol deviation tracking and management",
      "Device accountability and reconciliation",
      "Regulatory document management",
      "End-of-study close-out procedures",
    ],
    image: "/images/lab2.jpeg",
    color: "from-brand-primary/20 to-brand-primary/5",
  },
  {
    icon: ShieldCheck,
    num: "02",
    title: "Quality Assurance Audits",
    tagline: "Compliance you can trust",
    description:
      "Thorough QA audits designed to evaluate your clinical research processes, identify compliance gaps, and confirm alignment with ICH GCP guidelines, FDA regulations, and sponsor requirements. We deliver actionable findings that strengthen your operations.",
    features: [
      "Site and investigator audits",
      "Sponsor and CRO audits",
      "Systems and process audits",
      "CAPA development support",
      "Pre-inspection readiness reviews",
      "Audit findings report with recommendations",
    ],
    image: "/images/doctor1.jpeg",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: BookOpen,
    num: "03",
    title: "Clinical Research Training",
    tagline: "Online & face-to-face programs",
    description:
      "Face-to-face classroom and online clinical research training programs fully customizable to fit your company's or site's needs. From foundational GCP principles for new hires to advanced career-path curricula for seasoned professionals.",
    features: [
      "ICH GCP training for all roles",
      "Classroom and virtual delivery formats",
      "Customized content for your organization",
      "Study participant education programs",
      "Career path tracks for RNs, BSNs, MDs, PhDs",
      "Post-training assessments and certificates",
    ],
    image: "/images/lab1.jpeg",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: Building2,
    num: "04",
    title: "Clinical Research Site Set-Up Services",
    tagline: "From concept to compliant site",
    description:
      "End-to-end site set-up support for medical practices looking to launch a clinical research program. We guide you through the regulatory, operational, and staffing requirements to successfully open and run a compliant research site.",
    features: [
      "Site feasibility assessment",
      "IRB submission assistance",
      "SOP development and implementation",
      "Staff training and credentialing",
      "Regulatory binder set-up",
      "Sponsor qualification visit preparation",
    ],
    image: "/images/lab3.jpeg",
    color: "from-violet-500/20 to-violet-500/5",
  },
];

export function ServicesPage() {
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
        <div className="absolute top-0 right-0 w-[55%] h-[80%] bg-brand-primary/10 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-primary text-xs font-semibold uppercase tracking-widest w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                What We Offer
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                Our{" "}
                <span className="text-brand-primary">Services</span>
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-lg">
                From clinical trial management to QA audits, training programs, and site set-up — Ceonocra delivers tailored solutions with 18+ years of clinical research expertise behind every engagement.
              </p>
            </div>

            {/* Service quick-nav */}
            <div className="grid grid-cols-2 gap-3">
              {SERVICES.map(({ icon: Icon, num, title, tagline }) => (
                <div key={num} className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/40 hover:bg-brand-primary/10 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary transition-all">
                      <Icon className="w-4 h-4 text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-white/25 font-black text-lg">{num}</span>
                  </div>
                  <p className="text-white font-semibold text-sm leading-snug line-clamp-2">{title}</p>
                  <p className="text-white/45 text-xs">{tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-4">
        {SERVICES.map((service, idx) => (
          <div
            key={service.num}
            className={`py-20 lg:py-28 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-14 lg:gap-20 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}>

                {/* Image */}
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${service.color} rounded-3xl blur-2xl`} />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                    {/* Service number badge */}
                    <div className="absolute top-5 left-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-5">
                      <span className="px-3 py-1.5 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wide">
                        {service.tagline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-7">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-brand-primary/40 font-black text-5xl leading-none select-none">{service.num}</span>
                      <span className="text-brand-primary text-xs font-semibold uppercase tracking-widest">Service</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-200">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                        </div>
                        <span className="text-gray-600 text-sm leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-white/75 text-base leading-relaxed max-w-xl">
            Contact us today to discuss how Ceonocra can support your clinical research goals. Every engagement is tailored to your specific needs.
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary gap-2">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
