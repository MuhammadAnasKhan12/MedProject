import { Play, Users, Stethoscope, Building2, GraduationCap } from "lucide-react";

const AUDIENCES = [
  { icon: GraduationCap, label: "Aspiring Clinical Research Professionals", sub: "College grads, RNs, BSNs, PhDs, MDs" },
  { icon: Users, label: "Experienced CR Professionals", sub: "Seeking continuing education & advancement" },
  { icon: Stethoscope, label: "Potential Study Participants", sub: "Lay population & current participants" },
  { icon: Building2, label: "Medical Practices", sub: "Interested in setting up a research site" },
];

export function ClinicalTrialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest">
            Who We Serve
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-12">
          Clinical Trials &amp; Training
        </h2>

        {/* Video card */}
        <div className="relative rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto mb-16 group cursor-pointer">
          <img
            src="/images/lab2.jpeg"
            alt="Clinical research professionals"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-navy/60" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center group-hover:bg-brand-primary/60 group-hover:border-brand-primary transition-all duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>

          <div className="absolute bottom-6 left-6">
            <p className="text-white font-semibold text-lg">Clinical Research Training Overview</p>
            <p className="text-white/60 text-sm">Customizable programs for every career stage</p>
          </div>
        </div>

        {/* Target audience cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {AUDIENCES.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/40 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-primary" />
              </div>
              <p className="text-white font-semibold text-sm leading-snug">{label}</p>
              <p className="text-white/50 text-xs leading-relaxed">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
