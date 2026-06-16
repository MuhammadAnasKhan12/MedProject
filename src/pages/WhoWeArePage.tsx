import { Award, Target, Users, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const STATS = [
  { value: "18+", label: "Years of Experience" },
  { value: "6", label: "Training Programs" },
  { value: "100%", label: "Quality Commitment" },
];

const VALUES = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide clinical research consulting and training services of the highest quality — empowering research sites, sponsors, and professionals to conduct trials that protect participants and advance medicine.",
  },
  {
    icon: ShieldCheck,
    title: "Our Commitment",
    description:
      "Regardless of the scope or complexity of your clinical trials' needs, our commitment is unwavering quality. We hold ourselves to the same ICH GCP standards we teach and audit.",
  },
  {
    icon: Users,
    title: "Who We Serve",
    description:
      "We serve medical and investigator research sites, government agencies, pharmaceutical and biotechnology companies, device companies, and the study participants at every stage of the research journey.",
  },
  {
    icon: Award,
    title: "Our Expertise",
    description:
      "With over 18 years of combined clinical research expertise, our team brings real-world trial management, monitoring, regulatory compliance, and training experience to every engagement.",
  },
];


const HIGHLIGHTS = [
  "18+ years of clinical research experience",
  "Support for pharma, biotech, and device companies",
  "Customizable training for any team size or format",
  "Compliant with ICH GCP and FDA regulations",
  "Serving government agencies and research sites",
  "The study participant education programs",
];

export function WhoWeArePage() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-white pt-[72px]">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-[#0b2e29] to-[#062420] py-24 lg:py-32 overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,176,155,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,155,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-brand-primary/8 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-primary text-xs font-semibold uppercase tracking-widest w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                Who We{" "}
                <span className="text-brand-primary relative">
                  Are
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 80 8" fill="none" preserveAspectRatio="none">
                    <path d="M0 6 Q20 1 40 5 Q60 9 80 4" stroke="#00b09b" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
                  </svg>
                </span>
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-lg">
                Ceonocra Health Research Solutions is a consulting group with over 18 years of clinical research experience — dedicated to supporting research sites, sponsors, and professionals with the tools and training needed to run quality trials.
              </p>

            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/40 hover:bg-white/8 transition-all group"
                >
                  <span className="text-4xl font-black text-brand-primary leading-none group-hover:scale-105 transition-transform inline-block">{value}</span>
                  <span className="text-white/60 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/8 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="/images/doctor1.jpeg"
                  alt="Ceonocra clinical research professional"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">18+ Years of Excellence</p>
                      <p className="text-white/60 text-xs">Clinical Research Consulting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-7">
              <div>
                <span className="text-brand-primary text-xs font-semibold uppercase tracking-widest block mb-3">Our Story</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                  Built on Nearly Two Decades of Clinical Research Experience
                </h2>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Ceonocra Health Research Solutions is a health research consulting group that provides clinical trials management and training support to medical and investigator research sites, government agencies, pharmaceutical and biotechnology companies, device companies, and the study participants at every stage of the research journey.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                We recognize that good clinical research training is one of the keys to a successfully run trial. For this reason, we offer training programs — fully customizable to fit your company's or site's specific needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {HIGHLIGHTS.map((h) => (
                  <div key={h} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{h}</span>
                  </div>
                ))}
              </div>

              <Button variant="primary" size="md" className="self-start gap-2 mt-1" onClick={() => { navigate("/services"); window.scrollTo(0, 0); }}>
                View Our Services <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

     



      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-widest">
            Ready to Work Together?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Let's Discuss Your Clinical Research Needs
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl">
            Contact us today — every engagement is tailored to your organization's specific goals, timeline, and budget.
          </p>
          <Button variant="primary" size="lg" className="gap-2" onClick={() => { navigate("/contact"); window.scrollTo(0, 0); }}>
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
