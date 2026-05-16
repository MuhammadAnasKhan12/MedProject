import { ArrowRight, CheckCircle2, FlaskConical, Microscope, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";

const CORE_SERVICES = [
  { icon: FlaskConical, label: "Chemical Research" },
  { icon: Microscope, label: "Advanced Microscopy" },
  { icon: Activity, label: "Anatomical Pathology" },
];

export function CoreServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: real lab photo */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] order-last lg:order-first shadow-xl">
            <img
              src="/images/lab1.jpeg"
              alt="Scientist working in lab"
              className="w-full h-full object-cover object-center"
            />
            {/* Teal tint overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-primary/30 to-transparent" />
          </div>

          {/* Right: services list */}
          <div className="flex flex-col gap-6">
            <span className="text-brand-primary text-sm font-semibold uppercase tracking-widest">Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Our Core Services
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              We are devoted to designing comprehensive health services tailored to meet the unique needs of our clients — aiming to support and improve human health through cutting-edge diagnostics.
            </p>
            <ul className="flex flex-col gap-3">
              {CORE_SERVICES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="font-semibold text-gray-800">{label}</span>
                  <CheckCircle2 className="w-5 h-5 text-brand-primary ml-auto" />
                </li>
              ))}
            </ul>
            <Button variant="primary" size="md" className="self-start gap-2 mt-2">
              View More <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
