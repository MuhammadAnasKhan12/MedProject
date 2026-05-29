import { Award, Target, Users, ShieldCheck, BookOpen, Activity, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STATS = [
  { value: "18+", label: "Years of Experience" },
  { value: "500+", label: "Clients Served" },
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
      "We serve medical and investigator research sites, government agencies, pharmaceutical and biotechnology companies, device companies, and study participants at every stage of the research journey.",
  },
  {
    icon: Award,
    title: "Our Expertise",
    description:
      "With over 18 years of combined clinical research expertise, our team brings real-world trial management, monitoring, regulatory compliance, and training experience to every engagement.",
  },
];

const SERVICES_OVERVIEW = [
  { icon: Activity, label: "Clinical Trials & Device Monitoring Services" },
  { icon: ShieldCheck, label: "Quality Assurance Audits" },
  { icon: BookOpen, label: "Face-to-Face & Online Clinical Research Training" },
  { icon: Building2, label: "Clinical Research Site Set-Up Services" },
];

const HIGHLIGHTS = [
  "18+ years of clinical research experience",
  "Support for pharma, biotech, and device companies",
  "Customizable training for any team size or format",
  "Compliant with ICH GCP and FDA regulations",
  "Serving government agencies and research sites",
  "Study participant education programs",
];

export function WhoWeArePage() {
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
              <div className="flex flex-wrap gap-3 mt-2">
                {["GCP Certified", "18+ Yrs Experience", "Quality Focused", "Customizable Training"].map((badge) => (
                  <span key={badge} className="px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-medium">
                    {badge}
                  </span>
                ))}
              </div>
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
                Ceonocra Health Research Solutions is a health research consulting group that provides clinical trials management and training support to medical and investigator research sites, government agencies, pharmaceutical and biotechnology companies, device companies, and potential study participants.
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

              <Button variant="primary" size="md" className="self-start gap-2 mt-1">
                View Our Services <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group flex flex-col gap-5 p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-brand-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview — dark section */}
      <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,176,155,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,155,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="flex flex-col gap-7">
              <div>
                <span className="text-brand-primary text-xs font-semibold uppercase tracking-widest block mb-3">What We Do</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Comprehensive Clinical Research Solutions
                </h2>
              </div>
              <p className="text-white/60 text-base leading-relaxed">
                From managing complex multi-site clinical trials to equipping your team with GCP-compliant training, Ceonocra provides end-to-end support across the full spectrum of clinical research operations.
              </p>
              <ul className="flex flex-col gap-3">
                {SERVICES_OVERVIEW.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-brand-primary/10 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-all">
                      <Icon className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-white/80 font-medium text-sm group-hover:text-white transition-colors">{label}</span>
                    <ArrowRight className="w-4 h-4 text-white/30 ml-auto group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="md" className="self-start gap-2 mt-1">
                Explore All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/lab3.jpeg"
                alt="Clinical research team"
                className="w-full aspect-[4/3] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/60 to-brand-primary/20" />
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                {[{ v: "18+", l: "Years Experience" }, { v: "500+", l: "Clients Served" }].map(({ v, l }) => (
                  <div key={l} className="flex flex-col items-center text-center bg-black/40 backdrop-blur-sm rounded-xl px-3 py-4 border border-white/10">
                    <span className="text-2xl font-black text-brand-primary leading-none">{v}</span>
                    <span className="text-white/70 text-xs mt-1">{l}</span>
                  </div>
                ))}
              </div>
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
          <Button variant="primary" size="lg" className="gap-2">
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
