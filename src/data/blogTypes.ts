export type BlogSection = {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  /** Human-readable display date, e.g. "May 15, 2026" */
  date: string;
  /** ISO date string for sorting, e.g. "2026-05-15" */
  dateISO: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: BlogSection[];
};
