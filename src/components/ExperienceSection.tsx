import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const STATS = [
  { value: "24+", label: "Years of Experience", color: "text-brand-primary" },
  { value: "1,615+", label: "Successful Tests", color: "text-brand-primary" },
  { value: "2,215+", label: "Customers Satisfied", color: "text-brand-secondary" },
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
              Over 24 Years
              <br />
              Of Experience
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Our team of specialized healthcare professionals has been serving patients with comprehensive care solutions. We are committed to continuing this tradition of excellence for many years ahead.
            </p>
            <Button variant="primary" size="md" className="self-start">
              Learn More
            </Button>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-5">
            {STATS.map(({ value, label, color }, i) => (
              <div
                key={label}
                className={cn(
                  "flex flex-col gap-2 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-primary/20 transition-all",
                  i === 2 ? "col-span-2 sm:col-span-1" : ""
                )}
              >
                <span className={`text-5xl font-black leading-none ${color}`}>{value}</span>
                <span className="text-gray-500 text-sm font-medium mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
