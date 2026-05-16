import { Play } from "lucide-react";

const PARTNERS = ["BioSwift", "Lightbox", "FamilyGo", "NuHealth", "GlobBet", "NovoCure"];

export function ClinicalTrialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest">
            Classes &amp; Courses
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-white mb-12">
          Clinical Trials &amp; Courses
        </h2>

        {/* Video card */}
        <div className="relative rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto mb-16 group cursor-pointer">
          {/* Real background image */}
          <img
            src="/images/lab2.jpeg"
            alt="Lab scientist"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-brand-navy/60" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center group-hover:bg-brand-primary/60 group-hover:border-brand-primary transition-all duration-300 group-hover:scale-110">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </div>

          <div className="absolute bottom-6 left-6">
            <p className="text-white font-semibold text-lg">Clinical Trials Overview</p>
            <p className="text-white/60 text-sm">Watch our latest research video</p>
          </div>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {PARTNERS.map((partner) => (
            <span
              key={partner}
              className="text-white/35 font-bold text-lg lg:text-xl tracking-tight hover:text-white/70 transition-colors cursor-pointer select-none"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
