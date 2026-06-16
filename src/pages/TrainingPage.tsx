import { useNavigate } from "react-router-dom";
import {
  Monitor,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PricingSection } from "@/components/PricingSection";

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
  const navigate = useNavigate();;

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

      <PricingSection />

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
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary gap-2" onClick={() => { navigate("/contact"); window.scrollTo(0, 0); }}>
            Request Custom Training <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
