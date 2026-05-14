import { ArrowRight, User, Database, CheckSquare } from "lucide-react";

const PROGRAMS = [
  {
    icon: User,
    title: "Pathological Testing",
    description:
      "Pathological testing refers to the examination of tissues, cells, and bodily fluids to diagnose diseases. These techniques aim for an in-depth study of various disease processes.",
  },
  {
    icon: Database,
    title: "Data and Technology",
    description:
      "Healthcare technology solutions have transformed the way healthcare providers and insurance companies work, improving remote system monitoring and digitizing patient care.",
  },
  {
    icon: CheckSquare,
    title: "Fully Integrated Testing",
    description:
      "Fully integrated testing refers to the integration of various diagnostic tests into a single platform, enhancing the ability of healthcare professionals to support real-time patient care.",
  },
];

export function ProgramsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-widest">
            Benefits
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-12 lg:mb-16">
          Our Program &amp; Upcoming Classes
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
