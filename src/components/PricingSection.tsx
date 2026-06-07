import { BookOpen, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const COURSES = [
  {
    name: "Foundational",
    title: "For Study Participants",
    description: "All About Clinical Research & ICH GCP Training — ideal for potential or current study participants seeking to understand clinical trials.",
    badge: null,
    featured: false,
    topics: ["What is clinical research?", "Your rights as a participant", "ICH GCP basics"],
  },
  {
    name: "Career Path",
    title: "Part A & Part B",
    description: "Dual-module career path curriculum for aspiring clinical research professionals. Build foundational knowledge (Part A) then advance your skills (Part B).",
    badge: "Most Popular",
    featured: true,
    topics: ["CR fundamentals (Part A)", "Advanced coordination (Part B)", "ICH GCP career curriculum", "For RNs, BSNs, MDs, PhDs"],
  },
  {
    name: "Specialized",
    title: "CRA, PM & Ethics",
    description: "Role-focused programs covering the Clinical Research Associate, Project Manager, and Ethics in Clinical Research — for professionals seeking targeted expertise.",
    badge: null,
    featured: false,
    topics: ["All About the CRA", "All About the CR Project Manager", "Ethics in Clinical Research"],
  },
];

export function PricingSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Training Courses
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Find The Right Program
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto">
            All programs are customizable to fit your company's or site's specific needs — available both face-to-face and online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center mb-14">
          {COURSES.map((course) => (
            <div
              key={course.name}
              className={cn(
                "relative flex flex-col gap-6 p-8 rounded-2xl border transition-all duration-300",
                course.featured
                  ? "bg-brand-primary border-brand-primary shadow-2xl shadow-brand-primary/30 lg:scale-105"
                  : "bg-white border-gray-100 hover:border-brand-primary/30 hover:shadow-lg"
              )}
            >
              {course.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-white text-brand-primary text-xs font-bold shadow-lg border border-brand-primary/20">
                    {course.badge}
                  </span>
                </div>
              )}

              <div>
                <p className={cn("text-xs font-semibold uppercase tracking-widest mb-2", course.featured ? "text-white/70" : "text-brand-primary")}>
                  {course.name}
                </p>
                <h3 className={cn("text-xl font-extrabold leading-tight mb-2", course.featured ? "text-white" : "text-gray-900")}>
                  {course.title}
                </h3>
                <p className={cn("text-sm leading-relaxed", course.featured ? "text-white/70" : "text-gray-400")}>
                  {course.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {course.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-3">
                    <div className={cn("w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0", course.featured ? "bg-white/20" : "bg-brand-primary/10")}>
                      <svg className={cn("w-3 h-3", course.featured ? "text-white" : "text-brand-primary")} fill="none" viewBox="0 0 12 12">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className={cn("text-sm", course.featured ? "text-white/85" : "text-gray-600")}>{topic}</span>
                  </li>
                ))}
              </ul>

              {/* <Button
                variant={course.featured ? "outline" : "primary"}
                size="md"
                className={cn("w-full mt-auto gap-2", course.featured ? "border-white text-white hover:bg-white hover:text-brand-primary" : "")}
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </Button> */}
            </div>
          ))}
        </div>

        {/* Book CTA */}
        <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">Study Resource: Word Search &amp; Flash Cards</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              <em>All About Clinical Research — Word Search and Flash Cards for ICH Guidelines for Good Clinical Practice.</em> A practical study companion for ICH GCP exam preparation, available now on iUniverse.
            </p>
          </div>
          <a
            href="https://www.iuniverse.com/en/bookstore/bookdetails/850173-all-about-clinical-research-word-search-and-flash-cards-for-ich-guidelines-for-good-clinical-practice"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary text-white font-semibold text-sm hover:bg-brand-primary/90 transition-colors whitespace-nowrap flex-shrink-0"
          >
            Get The Book <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
