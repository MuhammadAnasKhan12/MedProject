import type { BlogPost } from "./blogTypes";

// Vite auto-discovers every file in ./posts/ at build time.
// To publish a new blog post, drop a new .ts file in src/data/posts/ — no other changes needed.
const modules = import.meta.glob<{ default: BlogPost }>("./posts/*.ts", { eager: true });

export const BLOG_POSTS: BlogPost[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => b.dateISO.localeCompare(a.dateISO));

export type { BlogPost } from "./blogTypes";
