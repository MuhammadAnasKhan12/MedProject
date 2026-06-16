import { BookOpen, ExternalLink, Star, CheckCircle2 } from "lucide-react";

const BOOK = {
  title: "All About Clinical Research",
  subtitle: "Word Search and Flash Cards for ICH Guidelines for Good Clinical Practice",
  description:
    "A practical study companion designed to reinforce ICH GCP knowledge through engaging word search puzzles and flash cards. Ideal for clinical research professionals preparing for GCP exams, refreshing their knowledge, or getting started in the field.",
  url: "https://www.iuniverse.com/en/bookstore/bookdetails/850173-all-about-clinical-research-word-search-and-flash-cards-for-ich-guidelines-for-good-clinical-practice",
  uses: [
    "ICH GCP exam preparation",
    "Refresher for experienced professionals",
    "Onboarding new clinical research staff",
    "Self-study for aspiring CRAs and coordinators",
  ],
};

export function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white pt-[72px]">

      {/* ── Hero ── */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-primary text-xs font-semibold uppercase tracking-widest w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                Learning Materials
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                Study{" "}
                <span className="text-brand-primary">Resources</span>
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-lg">
                Books, study materials, and reference links to support your clinical research journey — from GCP fundamentals to advanced exam preparation.
              </p>
            </div>

            {/* Right: book teaser card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs">
                <div className="absolute -inset-4 bg-brand-primary/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white/8 backdrop-blur-sm border border-white/15 rounded-3xl p-8 flex flex-col gap-5">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center">
                      <BookOpen className="w-7 h-7 text-brand-primary" />
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-brand-primary text-xs font-semibold uppercase tracking-widest mb-1">
                      Featured Book
                    </p>
                    <h3 className="text-white font-bold text-base leading-snug">{BOOK.title}</h3>
                    <p className="text-white/50 text-xs mt-1 italic">{BOOK.subtitle}</p>
                  </div>
                  <a
                    href={BOOK.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary/90 transition-colors"
                  >
                    Get The Book <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Featured Book ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left: photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="/images/lab2.jpeg"
                alt="Clinical research study environment"
                className="w-full aspect-[4/3] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Published by iUniverse</p>
                    <p className="text-white/60 text-xs">Available now in print & digital</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: details */}
            <div className="flex flex-col gap-7">
              <div>
                <span className="text-brand-primary text-xs font-semibold uppercase tracking-widest block mb-3">
                  Featured Publication
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                  {BOOK.title}
                  <span className="block text-base font-medium text-gray-500 mt-2 normal-case tracking-normal">
                    {BOOK.subtitle}
                  </span>
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">{BOOK.description}</p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <p className="text-gray-800 font-semibold text-sm mb-4">Best Used For:</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {BOOK.uses.map((use) => (
                    <div key={use} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={BOOK.url}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20"
              >
                Get The Book on iUniverse <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── Training Programs ── */}
      {/* <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <span className="text-brand-primary text-xs font-semibold uppercase tracking-widest block mb-3">
              Our Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              6 Training Programs
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mt-2">
              Available in classroom and online formats — customizable for your team.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {TRAINING_QUICK.map(({ num, label }) => (
              <div
                key={num}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-brand-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary transition-all">
                  <span className="text-brand-primary group-hover:text-white font-black text-xs transition-colors">
                    {num}
                  </span>
                </div>
                <span className="text-gray-700 text-sm font-medium leading-snug group-hover:text-gray-900 transition-colors flex-1">
                  {label}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="/training"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-primary text-brand-primary text-sm font-semibold hover:bg-brand-primary hover:text-white transition-colors"
            >
              View Full Training Details <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section> */}

    </main>
  );
}
