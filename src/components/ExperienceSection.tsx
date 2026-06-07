import { cn } from "@/lib/utils";

const STATS = [
  { value: "18+", label: "Years of Experience", color: "text-brand-primary" },
  { value: "500+", label: "Clients Served", color: "text-brand-primary" },
  { value: "100%", label: "Quality Commitment", color: "text-brand-secondary" },
];

export function ExperienceSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-brand-primary text-xs font-semibold uppercase tracking-widest">Advantages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Over 18 Years
              <br />
              Of Experience
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Our team of experienced clinical research professionals has been serving research sites, government agencies, pharmaceutical companies, and study participants with quality consulting and training. We are committed to continuing this tradition of excellence.
            </p>
          </div>

          {/* Right: doctor photo with stat cards overlaid */}
          <div className="relative">
            {/* Stat cards grid — visible on mobile */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {STATS.map(({ value, label, color }, i) => (
                <div
                  key={label}
                  className={cn(
                    "flex flex-col gap-2 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm",
                    i === 2 ? "col-span-2 sm:col-span-1" : ""
                  )}
                >
                  <span className={`text-4xl font-black leading-none ${color}`}>{value}</span>
                  <span className="text-gray-500 text-sm font-medium mt-1">{label}</span>
                </div>
              ))}
            </div>

            {/* Photo with overlaid stats — desktop */}
            <div className="hidden lg:block relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/doctor1.jpeg"
                alt="Medical professional"
                className="w-full h-[420px] object-cover object-top"
              />
              {/* Dark gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />

              {/* Stat pills overlaid */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center bg-black/40 backdrop-blur-sm rounded-2xl px-3 py-4 border border-white/10"
                  >
                    <span className="text-2xl font-black text-brand-primary leading-none">{value}</span>
                    <span className="text-white/70 text-[11px] mt-1 leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
