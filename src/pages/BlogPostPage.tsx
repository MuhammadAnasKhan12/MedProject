import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { BLOG_POSTS, type BlogPost } from "@/data/blogPosts";

function renderSection(section: BlogPost["content"][number], idx: number) {
  if (section.type === "heading") {
    return (
      <h2
        key={idx}
        className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-10 mb-4 leading-tight"
      >
        {section.text}
      </h2>
    );
  }
  if (section.type === "list") {
    return (
      <ul key={idx} className="flex flex-col gap-3 my-4">
        {section.items?.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-5 h-5 rounded-full bg-brand-primary/15 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-brand-primary" fill="none" viewBox="0 0 12 12">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-gray-600 text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p key={idx} className="text-gray-600 text-base leading-relaxed my-4">
      {section.text}
    </p>
  );
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <main className="min-h-screen bg-white pt-[72px]">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-[#0b2e29] to-[#062420] py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,176,155,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,176,155,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-brand-primary/10 rounded-full blur-[130px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wide">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-xs">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-white/50 text-xs">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-6">
            {post.excerpt}
          </p>

          <p className="text-white/40 text-sm">By {post.author}</p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mb-12">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full aspect-[16/7] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
          </div>

          {/* Body */}
          <div className="prose-container max-w-none">
            {post.content.map((section, idx) => renderSection(section, idx))}
          </div>

          {/* Divider & back link */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4">
            <Link
              to="/blog"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 text-sm font-semibold transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to All Articles
            </Link>
            <span className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ceonocra Health Research Solutions
            </span>
          </div>
        </div>
      </article>

    </main>
  );
}
