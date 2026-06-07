import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";

export function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-primary text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            Insights & Updates
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-3xl">
            The Ceonocra{" "}
            <span className="text-brand-primary">Blog</span>
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-xl">
            Clinical research insights, GCP guidance, regulatory updates, and training tips — from our team of experts.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-widest">
                Featured Post
              </span>
            </div>

            <Link
              to={`/blog/${featured.slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-14 items-center rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden lg:rounded-none aspect-[16/10]">
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wide">
                  {featured.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5 p-8 lg:pr-10 lg:pl-0">
                <div className="flex items-center gap-4 text-gray-400 text-xs">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight group-hover:text-brand-primary transition-colors">
                  {featured.title}
                </h2>

                <p className="text-gray-500 text-base leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-400 text-sm">By {featured.author}</span>
                  <span className="flex items-center gap-1.5 text-brand-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      {rest.length > 0 && (
        <section className="pb-20 lg:pb-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8 pt-16">More Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-brand-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 p-6 flex-1">
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="flex items-center gap-1.5 text-brand-primary font-semibold text-sm mt-1 group-hover:gap-2.5 transition-all">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state if no posts beyond featured */}
      {rest.length === 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 text-center py-16 rounded-3xl border border-dashed border-gray-300">
              <Tag className="w-10 h-10 text-gray-300" />
              <p className="text-gray-400 text-base">More articles coming soon.</p>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
