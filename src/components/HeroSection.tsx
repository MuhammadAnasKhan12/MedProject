import { Calendar, ChevronRight, Play, FlaskConical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const STATS = [
  { value: "18+", label: "Years of Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "100%", label: "Quality Commitment" },
];


export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0b2e29] to-[#062420]" />
        <div className="absolute top-0 right-0 w-[60%] h-[70%] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-brand-primary/8 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,176,155,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,155,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-[5%] w-80 h-80 rounded-full border border-brand-primary/15 animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Left — Text content */}
            <div className="flex flex-col gap-6">
              <div className="animate-fade-up opacity-0-init">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-primary text-xs font-semibold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                  Health Research Consulting
                </span>
              </div>

              <div
                className="animate-fade-up"
                style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
              >
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                  Clinical{" "}
                  <span className="text-brand-primary relative">
                    Research
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      viewBox="0 0 200 8"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 6 Q50 1 100 5 Q150 9 200 4"
                        stroke="#00b09b"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.6"
                      />
                    </svg>
                  </span>{" "}
                  Services{" "}
                  <br className="hidden sm:block" />
                  Committed To{" "}
                  <span className="text-brand-secondary">Quality</span>
                </h1>
              </div>

              <p
                className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl animate-fade-up"
                style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
              >
                Ceonocra is a health research consulting group providing clinical trials management, training support, and quality assurance to research sites, government agencies, pharmaceutical companies, and study participants.
              </p>

              <div
                className="flex flex-wrap items-center gap-4 animate-fade-up"
                style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="group gap-2.5 text-sm font-semibold tracking-wide p-2"
                  onClick={() => { navigate("/contact"); window.scrollTo(0, 0); }}
                >
                  <Calendar className="w-4 h-4" />
                  Get In Touch
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>

                

              </div>

                
                  <div
                    // key={label}
                    className="flex items-center"
                  >
                                  {/* Floating pill — bottom right */}
              <div
                className={cn(
                  " -right-4 bottom-10 xl:-right-10",
                  "hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl",
                  "bg-brand-navy/90 border border-brand-primary/30 backdrop-blur-sm shadow-xl"
                )}
              >
                <div className="flex -space-x-1.5">
                  {["bg-teal-400", "bg-emerald-400", "bg-cyan-400"].map((c, i) => (
                    <div key={i} className={`w-6 h-6 rounded-full border-2 border-brand-navy ${c}`} />
                  ))}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-none">Expert Consultants</p>
                  <p className="text-white/50 text-[10px]">18+ Yrs Experience</p>
                </div>
              </div>
                
              </div>
            </div>

            {/* Right — Real photo with overlaid stats */}
            <div
              className="relative flex items-center justify-center animate-fade-up"
              style={{ animationDelay: "0.25s", opacity: 0, animationFillMode: "forwards" }}
            >
              <div className="relative w-full max-w-sm xl:max-w-md">
                {/* Glow */}
                <div className="absolute inset-0 bg-brand-primary/20 rounded-3xl blur-2xl scale-105" />

                {/* Photo card */}
                <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                  <img
                    src="/images/lab3.jpeg"
                    alt="Lab scientists at work"
                    className="w-full h-80 xl:h-96 object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />

                  {/* Stats row at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="grid grid-cols-3 gap-3">
                      {STATS.map(({ value, label }) => (
                        <div key={label} className="flex flex-col items-center text-center gap-0.5 bg-black/30 backdrop-blur-sm rounded-xl p-3">
                          <span className="text-xl font-extrabold text-brand-primary leading-none">{value}</span>
                          <span className="text-white/60 text-[10px] leading-tight">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating pill — top left */}
              <div
                className={cn(
                  "absolute -left-4 top-10 xl:-left-10",
                  "hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl",
                  "bg-brand-navy/90 border border-brand-primary/30 backdrop-blur-sm shadow-xl"
                )}
              >
                <FlaskConical className="w-4 h-4 text-brand-primary" />
                <div>
                  <p className="text-white text-xs font-semibold leading-none">6 Training Programs</p>
                  <p className="text-white/50 text-[10px]">ICH GCP Certified</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 L0 60 Z"
            fill="white"
            fillOpacity="0.04"
          />
        </svg>
      </div>
    </section>
  );
}
